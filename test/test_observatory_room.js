// The room and the instrument, REBUILT (2026-08-11, after Sailor's walk):
// the open ring, the dome-as-ceiling, the Eames, the floating panel with a
// telescope for a face, full screen as the throw, the moon observable.
// Assert state, not motion — obsTick cranked by hand.
const { chromium } = require('/home/claude/dg/node_modules/playwright');

const CHECKS = [];
function check(name, ok, detail) {
  CHECKS.push({ name, ok: !!ok, detail });
  console.log((ok ? '  ✅ ' : '  ❌ ') + name + (detail !== undefined ? '   ' + detail : ''));
}

(async () => {
  const b = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
  });
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = [];
  p.on('pageerror', e => errs.push(e.message + '\n      ' + (e.stack || '').split('\n')[1]));
  await p.goto('http://localhost:8899/index.html?q=high', { waitUntil: 'load', timeout: 60000 });
  await p.waitForTimeout(9000);

  // ── build: once, and the new bones ──
  const built = await p.evaluate(() => {
    const before = !!scene.getObjectByName('observatoryInterior');
    buildObservatoryInterior();
    const kids = scene.getObjectByName('observatoryInterior').children.length;
    buildObservatoryInterior();
    const kids2 = scene.getObjectByName('observatoryInterior').children.length;
    const rings = [];
    observatoryShell.children.forEach(c => { if (c.geometry && c.geometry.type === 'RingGeometry') rings.push(c.geometry.parameters.innerRadius); });
    return { before, kids, kids2,
      chair: !!obsChair, chairKids: obsChair ? obsChair.children.length : 0,
      panel: !!obsPanel, cushion: !!scene.getObjectByName('obsEdburgCushion'),
      ringsOpen: rings.length === 2 && rings.every(r => r === 3.0),
      satDomeWaits: !!obsSatDome && obsSatDome.visible === false,
      domeIsGlobe: !!obsDomeMesh && obsGeoGroup.parent === observatoryShell,
      lampHandle: !!obsLampGroup && obsLampGroup.name === 'obsLamp',
    };
  });
  check('the room does not exist until approached', built.before === false);
  check('a second approach builds nothing', built.kids === built.kids2, built.kids + ' children');
  check('the entablature opens — two annulus caps, 3-unit eye', built.ringsOpen);
  check('the dome IS the globe — one sphere on the building', built.domeIsGlobe);
  check('the satellites\' dome waits, invisible', built.satDomeWaits);
  check('the chandelier is the seated hand-hold', built.lampHandle);
  check('the Eames stands at the centre, ottoman and all',
    built.chair && built.chairKids >= 12, built.chairKids + ' pieces');
  check('the panel rests beside it; the cushion waits', built.panel && built.cushion);

  // ── the inverted Earth ──
  const globe = await p.evaluate(() => {
    const D2R = Math.PI / 180;
    const lon = DG_LON * D2R, lat = DG_LAT * D2R, cl = Math.cos(lat);
    const villa = new THREE.Vector3(cl * Math.cos(lon), Math.sin(lat), -cl * Math.sin(lon)).normalize();
    const up = villa.clone().applyQuaternion(obsGeoGroup.quaternion);
    const q0 = obsGeoGroup.quaternion.clone();
    obsGlobeSpinBy(150, -80);
    const turned = obsGeoGroup.quaternion.angleTo(q0);
    const r = { zenithY: +up.y.toFixed(5),
      gridVerts: obsGeoGrid.geometry.attributes.position.count,
      hasMap: !!obsDomeMesh.material.map,
      inFade: observatoryShell.userData.fadeMats.indexOf(obsDomeMesh.material) >= 0,
      fullSphere: Math.abs(obsDomeMesh.geometry.parameters.thetaLength - Math.PI) < 1e-6,
      turned: +turned.toFixed(4),
      clipped: obsDomeMesh.material.clippingPlanes.length === 1
        && obsGeoGrid.material.clippingPlanes.length === 1,
      base: !!obsPanelBase, baseChrome: 0 };
    obsPanelBase.traverse(o => { if (o.isMesh && o.material.metalness > 0.7) r.baseChrome++; });
    obsGeoGroup.quaternion.copy(q0);   // put the villa back overhead
    return r;
  });
  check('the villa opens at its own zenith', globe.zenithY > 0.9999, 'up·villa ' + globe.zenithY);
  check('the globe wears a true map, and fades with the shell',
    globe.hasMap && globe.inFade, globe.gridVerts + ' graticule verts');
  check('a whole Earth, clipped at the spring line — not a half', globe.fullSphere);
  check('a hand turns the Earth', globe.turned > 0.4, globe.turned + ' rad');
  check('below the horizon the Earth is clipped, not deleted', globe.clipped);
  check('the G4 body stands by the chair — chrome arm and all',
    globe.base && globe.baseChrome >= 4, globe.baseChrome + ' chrome pieces');

  // ── the telescope's plumbing ──
  const tel = await p.evaluate(() => {
    const L5 = 1 | (1 << 5);
    return {
      camLayer: obsTelCam.layers.mask === (1 << 5),
      starsOn: stars.layers.mask === L5,
      moonOn: moonDisc.layers.mask === L5 && moonGlow.layers.mask === L5,
      figsOn: dgConstGroup.children[0].layers.mask === L5,
      faceIsPlate: obsPanelFace.material.map === obsTelRT.texture,
    };
  });
  check('the telescope sees only the sky\'s layer', tel.camLayer);
  check('stars, moon, and figures join that layer', tel.starsOn && tel.moonOn && tel.figsOn);
  check('the panel\'s face IS the telescope\'s plate', tel.faceIsPlate);

  // ── sit: the eye IS the chair's; the panel rises; the moon: observable ──
  const seat = await p.evaluate(() => {
    obsSit();
    let t = 1000;
    const crank = (sec) => { for (let i = 0; i < sec * 20; i++) { t += 0.05; obsTick(t); } };
    crank(4);
    updateCamera();   // one explicit frame of the rig
    const head = obsChairHead();
    const eyeAtChair = camera.position.distanceTo(head) < 0.05;
    const risen = obsState.panelFloating && obsPanel.position.y > 2.0;
    const world = new THREE.Vector3();
    obsPanel.getWorldPosition(world);
    const distFromHead = world.distanceTo(head);
    // sweep by hand: aim the sphere at the MOON and see the telescope agree
    const toMoon = moonDisc.position.clone().sub(head).normalize();
    obsPanelSph.phi = Math.acos(toMoon.y);
    obsPanelSph.theta = Math.atan2(toMoon.x, toMoon.z);
    crank(4);
    const telDir = new THREE.Vector3();
    obsTelCam.getWorldDirection(telDir);
    const offMoonDeg = telDir.angleTo(toMoon) * 180 / Math.PI;
    // and the gaze mechanics: full screen must put the MAIN eye on the line
    obsFullToggle();
    updateCamera();
    const mainDir = new THREE.Vector3();
    camera.getWorldDirection(mainDir);
    const fsAligned = mainDir.angleTo(obsPanelDir()) * 180 / Math.PI < 0.5;
    obsFullToggle();
    return { risen, eyeAtChair, fsAligned, distFromHead: +distFromHead.toFixed(2),
      offMoonDeg: +offMoonDeg.toFixed(3),
      console: document.getElementById('obs-console').classList.contains('open') };
  });
  check('the eye sits IN the chair — no phantom orbit', seat.eyeAtChair);
  check('full screen rides the panel\'s exact line', seat.fsAligned);
  check('lying back, the panel rises on its own', seat.risen && seat.console);
  check('it rides a shell around the chair', Math.abs(seat.distFromHead - 2.25) < 0.15,
    seat.distFromHead + ' from the eyes');
  check('swept to the moon, the telescope holds the moon',
    seat.offMoonDeg < 1.0, seat.offMoonDeg + '° off');

  // ── full screen is the throw; the room comes back whole ──
  const fs = await p.evaluate(() => {
    let t = 3000;
    const crank = (sec) => { for (let i = 0; i < sec * 20; i++) { t += 0.05; obsTick(t); } };
    obsLampToggle();
    const fovBefore = camera.fov;
    obsFullToggle();
    crank(6);
    const dir = obsPanelDir();
    const narrowed = camera.fov === 12;
    const thrown = obsState.throwT > 0.9 && !obsGeoGroup.visible
      && observatoryShell.userData.fadeMats.every(m => m.opacity < 0.1);
    const panelParked = !obsPanel.visible;
    updateCamera();
    const md = new THREE.Vector3(); camera.getWorldDirection(md);
    const aligned = md.angleTo(dir) * 180 / Math.PI < 0.5;
    obsReadingCycle();
    const reading = dgConstGroup.visible;
    obsFullToggle();
    crank(5);
    const fovBack = camera.fov === fovBefore;
    const globeBack = obsGeoGroup.visible && obsDomeMesh.material.opacity > 0.9;
    obsStand();
    crank(4);
    const restored = !obsState.seated && obsState.lamp && !obsState.panelFloating
      && obsLampLight.intensity > 0.7
      && !document.getElementById('obs-console').classList.contains('open');
    return { narrowed, thrown, panelParked, aligned, reading, fovBack, globeBack, restored, fovBefore };
  });
  check('full screen narrows the eye onto the panel\'s line',
    fs.narrowed && fs.aligned && fs.panelParked, 'fov 12, from ' + fs.fovBefore);
  check('full screen IS the throw — the painted globe yields', fs.thrown);
  check('the reading still answers inside it', fs.reading);
  check('the room returns whole — fov, globe, lamp, all of it',
    fs.fovBack && fs.globeBack && fs.restored);

  // ── the eye moves freely in a small room ──
  const comfort = await p.evaluate(() => {
    let t = 8000;
    const crank = (sec) => { for (let i = 0; i < sec * 20; i++) { t += 0.05; obsTick(t); } };
    const c = obsRoomCentre();
    camTarget.set(c.x, c.y + 2, c.z);
    camera.position.set(c.x + 9, c.y + 6, c.z);    // eye beyond the dome, peering in
    const floorIn = obsZoomFloor(2.5);
    crank(4);
    const shellThin = observatoryShell.userData.fadeMats.every(m => m.opacity < 0.3);
    camera.position.set(c.x + 1.5, c.y + 2.2, c.z);  // eye truly under the dome
    crank(4);
    const domeHolds = observatoryShell.userData.fadeMats.every(m => m.opacity > 0.8);
    camTarget.set(0, 5, 20);   // back to the villa
    camera.position.set(9, 12, 37);
    const floorOut = obsZoomFloor(2.5);
    crank(4);
    const shellBack = observatoryShell.userData.fadeMats.every(m => m.opacity > 0.8);
    return { floorIn, floorOut, shellThin, shellBack, domeHolds };
  });
  check('inside, the zoom floor drops to arm\'s length', comfort.floorIn === 0.7, comfort.floorIn);
  check('peering in from outside, the shell thins', comfort.shellThin);
  check('truly under it, the dome stands — it IS the ceiling', comfort.domeHolds);
  check('outside, both come back', comfort.floorOut === 2.5 && comfort.shellBack);

  console.log('\npageerrors: ' + errs.length);
  errs.forEach(e => console.log('  PAGEERROR: ' + e));
  const green = CHECKS.filter(c => c.ok).length;
  console.log('\n' + green + '/' + CHECKS.length + ' checks green, ' + errs.length + ' pageerrors');
  if (green < CHECKS.length) {
    console.log('FAILED:');
    CHECKS.filter(c => !c.ok).forEach(c => console.log('  - ' + c.name + '   ' + (c.detail || '')));
  }
  await b.close();
  process.exit(green === CHECKS.length && errs.length === 0 ? 0 : 1);
})();
