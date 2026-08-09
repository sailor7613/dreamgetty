// The compass in the hand: the nav bar's replacement, the soft ring of
// bearings, the hard unfold, and the card that turns with the world.
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
  await p.goto('http://localhost:8899/index.html', { waitUntil: 'load', timeout: 60000 });
  await p.waitForTimeout(7000);

  // ── THE OLD CHROME IS GONE ─────────────────────────────────────────────
  console.log('\n── the changing of the guard ──');
  const guard = await p.evaluate(() => ({
    navBar: !!document.getElementById('nav-bar'),
    oldCompassBtn: !!document.getElementById('navmenu-btn'),
    hud: !!document.getElementById('compass-hud'),
    img: (document.getElementById('compass-img') || {}).src || '',
    showNavBarSafe: (function () { try { showNavBar(); return true; } catch (e) { return false; } })(),
    easelRow: !!document.getElementById('nav-easel'),
    graphmapRow: !!document.getElementById('nav-graphmap'),
    g4Row: !!document.getElementById('nav-g4'),
    inMenu: !!document.getElementById('nav-easel') &&
            document.getElementById('cmp-root').contains(document.getElementById('nav-easel')),
  }));
  check('the nav bar is gone', !guard.navBar);
  check('…and so is the text COMPASS button', !guard.oldCompassBtn);
  check('the drawn compass stands in their place', guard.hud);
  check('…wearing art/icons/compass.png', /art\/icons\/compass\.png/.test(guard.img), guard.img.split('/').slice(-3).join('/'));
  check('showNavBar survives its element\'s death', guard.showNavBarSafe);
  check('Easel, Graphmap and the G4 are Instruments in the unfold',
        guard.easelRow && guard.graphmapRow && guard.g4Row && guard.inMenu);

  // ── THE ARITHMETIC — Sailor's own example ──────────────────────────────
  console.log('\n── the soft ring, standing at the pool facing the house ──');
  const ring = await p.evaluate(() => {
    // stand at the reflection pool, face north (the galleria)
    camTarget.set(0, 1.5, 20);
    camTheta = 0; targetTheta = 0;
    if (typeof visitorNav !== 'undefined' && visitorNav.active) toggleVisitor();
    compassVisited.clear();
    ['galleria', 'beach', 'library', 'exedra', 'pool', 'mountain'].forEach(k => compassVisited.add(k));
    compassSoftBegin();
    const out = {};
    out.soft = document.getElementById('compass-hud').classList.contains('soft');
    out.here = document.getElementById('compass-here').textContent;
    const at = {};
    document.querySelectorAll('.cmp-bearing').forEach(el => {
      const key = (el.title.match(/^(.*) — click/) || [])[1];
      at[key] = { x: parseFloat(el.style.left), y: parseFloat(el.style.top) };
    });
    out.at = at;
    out.n = Object.keys(at).length;
    compassSoftEnd();
    out.offAfterLeave = !document.getElementById('compass-hud').classList.contains('soft') &&
                        document.getElementById('compass-hud').className.indexOf('soft') < 0;
    out.ghostPills = document.querySelectorAll('#compass-ring .cmp-bearing').length;
    return out;
  });
  const ga = ring.at['The Galleria'], be = ring.at['The Beach'],
        li = ring.at['The Library'], ex = ring.at['The Exedra'];
  check('hovering names where you stand', /pool/.test(ring.here), ring.here);
  check('the galleria stands ABOVE the dial', ga && ga.y < -60 && Math.abs(ga.x) < 60,
        ga && ('(' + ga.x.toFixed(0) + ', ' + ga.y.toFixed(0) + ')'));
  check('the beach stands BELOW', be && be.y > 60 && Math.abs(be.x) < 60,
        be && ('(' + be.x.toFixed(0) + ', ' + be.y.toFixed(0) + ')'));
  check('the library stands LEFT', li && li.x < -60, li && li.x.toFixed(0));
  check('the exedra stands RIGHT', ex && ex.x > 60, ex && ex.x.toFixed(0));
  check('the ring goes away with the hand', ring.offAfterLeave);
  check('…emptied, not transparent — no invisible clickable ghosts',
        ring.ghostPills === 0, ring.ghostPills + ' ghosts');

  // ── THE DIAL IS LOCKED; THE NEEDLE IS YOU ──────────────────────────────
  console.log('\n── the locked dial ──');
  const turn = await p.evaluate(() => {
    camTheta = Math.PI / 2;                       // orbit east of the target: now facing WEST
    compassSoftBegin();
    const ndl = document.getElementById('compass-hud').style.getPropertyValue('--ndl');
    const cardTransform = getComputedStyle(document.getElementById('compass-img')).transform;
    const needleEl = !!document.getElementById('compass-needle');
    const at = {};
    document.querySelectorAll('.cmp-bearing').forEach(el => {
      const key = (el.title.match(/^(.*) — click/) || [])[1];
      at[key] = { x: parseFloat(el.style.left), y: parseFloat(el.style.top) };
    });
    compassSoftEnd();
    camTheta = 0;
    return { ndl, cardTransform, needleEl, ga: at['The Galleria'], be: at['The Beach'],
             want: (-Math.PI / 2 - COMPASS_NEEDLE_NATIVE).toFixed(2) };
  });
  check('the needle layer exists', turn.needleEl);
  check('the needle points the way you FACE (−θ − its drawn angle)',
        turn.ndl.indexOf('rotate(' + turn.want) === 0, turn.ndl + ' (want ~' + turn.want + ')');
  check('…and the CASE holds still', 
        turn.cardTransform === 'none' || /matrix\(1, 0, 0, 1/.test(turn.cardTransform), turn.cardTransform);
  check('facing west, the galleria STAYS north — the dial is the world\'s, not yours',
        turn.ga && turn.ga.y < -60 && Math.abs(turn.ga.x) < 60,
        turn.ga && ('(' + turn.ga.x.toFixed(0) + ', ' + turn.ga.y.toFixed(0) + ')'));
  check('…and the beach stays south below the dial',
        turn.be && turn.be.y > 60, turn.be && ('(' + turn.be.x.toFixed(0) + ', ' + turn.be.y.toFixed(0) + ')'));

  // ── THE OSCILLATION IS DEAD ────────────────────────────────────────────
  console.log('\n── the hover holds ──');
  const osc = await p.evaluate(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const hud = document.getElementById('compass-hud');
    const out = {};
    compassSoftBegin();
    await sleep(50);
    // the point midway between the dial and a label — the gap that used to
    // break the hover. With the hit disc it must still land on the hud.
    const r = hud.getBoundingClientRect();
    const cx = (r.left + r.right) / 2, cy = r.top + 42;
    const el = document.elementFromPoint(cx, cy - 80);
    out.gapIsStillTheCompass = el === hud || hud.contains(el);
    // standing still, the labels are NOT rebuilt under the hand
    const before = document.querySelector('.cmp-bearing');
    compassRefreshSoft(); compassRefreshSoft();
    out.sameNode = document.querySelector('.cmp-bearing') === before;
    // and a 200ms grace period exists on leave
    out.softStillOn = hud.classList.contains('soft');
    compassSoftEnd();
    return out;
  });
  check('the gap between dial and label is still the compass — no mouseleave loop',
        osc.gapIsStillTheCompass);
  check('standing still, labels are not rebuilt under the hand', osc.sameNode);

  // ── DISCOVERY IS NOT LEAKED ────────────────────────────────────────────
  console.log('\n── hidden-until-visited ──');
  const hidden = await p.evaluate(() => {
    PLACE_REGISTRY.push({ key: 'testchapel', label: 'The Test Chapel', x: -30, z: 50,
                          look: [-30, 0, 50], off: [5, 5, 10], hidden: true });
    compassSoftBegin();
    const before = !!Array.from(document.querySelectorAll('.cmp-bearing'))
      .find(el => /Test Chapel/.test(el.title));
    compassSoftEnd();
    compassMarkVisited('testchapel');
    compassSoftBegin();
    const after = !!Array.from(document.querySelectorAll('.cmp-bearing'))
      .find(el => /Test Chapel/.test(el.title));
    compassSoftEnd();
    PLACE_REGISTRY.pop();
    compassVisited.delete('testchapel');
    return { before, after };
  });
  check('an unfound place is absent from the ring', !hidden.before);
  check('…and appears the day it is found', hidden.after);

  // ── A LABEL IS A DOOR; THE DIAL IS THE UNFOLD ──────────────────────────
  console.log('\n── the two activations ──');
  const act = await p.evaluate(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const out = {};
    // a label click travels — and must NOT leave the unfold open or toggled
    const menu = document.getElementById('nav-menu');
    menu.classList.remove('open');
    approach.active = false;
    compassSoftBegin();
    const label = Array.from(document.querySelectorAll('.cmp-bearing'))
      .find(el => /Beach/.test(el.title));
    label.click();
    out.travels = approach.active;
    out.travelLook = approach.endLook.z;
    out.menuStillShut = !menu.classList.contains('open');
    out.softEnded = !document.getElementById('compass-hud').classList.contains('soft');
    approach.active = false;
    // the hard activation unfolds
    document.getElementById('compass-hud').click();
    out.unfolds = menu.classList.contains('open');
    await sleep(450);      // let the hud's height transition settle before measuring rects
    // …and rises from the compass, not the corner. Computed `top` is never
    // 'auto' on a positioned box — measure the RECT against the hud instead.
    const mr = menu.getBoundingClientRect();
    const hr = document.getElementById('compass-hud').getBoundingClientRect();
    out.anchoredBottom = Math.abs((mr.left + mr.right) / 2 - (hr.left + hr.right) / 2) < 8 &&
                         mr.bottom < hr.top && mr.bottom > hr.top - 60;
    document.getElementById('compass-hud').click();
    out.refolds = !menu.classList.contains('open');
    return out;
  });
  check('a label is a door — clicking it travels', act.travels && act.travelLook > 70,
        'flying to z ' + act.travelLook);
  check('…without opening the unfold', act.menuStillShut);
  check('…and the ring stands down', act.softEnded);
  check('clicking the dial unfolds the full compass', act.unfolds);
  check('…which rises from the compass, not the old corner', act.anchoredBottom);
  check('clicking again folds it', act.refolds);

  // ── THE UNFOLD IS SPRITES ──────────────────────────────────────────────
  console.log('\n── the sprite menu ──');
  const sprite = await p.evaluate(() => {
    const menu = document.getElementById('nav-menu');
    document.getElementById('compass-hud').click();
    const cs = getComputedStyle(menu);
    const btn = document.getElementById('nav-easel');
    const bs = getComputedStyle(btn);
    const sways = new Set();
    menu.querySelectorAll('#cmp-root > *').forEach(el => {
      sways.add(getComputedStyle(el).transform);
    });
    const out = {
      boxGone: cs.backgroundColor === 'rgba(0, 0, 0, 0)' && cs.borderTopWidth === '0px',
      pill: parseFloat(bs.borderRadius) >= 12 && bs.backgroundColor !== 'rgba(0, 0, 0, 0)',
      scrollbarHidden: cs.scrollbarWidth === 'none',
      sways: sways.size,
    };
    document.getElementById('compass-hud').click();
    return out;
  });
  check('the box, the border and the blur are gone', sprite.boxGone);
  check('each row is a floating pill, the bearing-label species', sprite.pill);
  check('the white scrollbar is dead', sprite.scrollbarHidden);
  check('the column sways — sprites, not a list that lost its box', sprite.sways >= 4,
        sprite.sways + ' distinct offsets');

  // ── THE BODY FOLLOWS THE EYE ───────────────────────────────────────────
  console.log('\n── the body follows the eye ──');
  const body = await p.evaluate(() => {
    const out = {};
    const realId = window.feedIdentity;
    const realSummon = window.summonResident;
    let called = null;
    window.summonResident = function (k, silent, at) { called = { k, silent, at: at && [at.x, at.z] }; };
    // a guest: their resident sets out
    window.feedIdentity = () => ({ avatar: 'emilia', pass: 'x' });
    goToPlace('beach');
    out.guest = called;
    // click on through mid-journey: simply retargeted
    called = null;
    goToPlace('library');
    out.retarget = called;
    // ted: the docent walks
    window.feedIdentity = () => ({ avatar: 'ted', pass: 'x' });
    called = null;
    tedPatrol.state = 'walking';
    goToPlace('exedra');
    out.tedState = tedPatrol.state;
    out.tedTarget = [Math.round(tedTravel.target.x), Math.round(tedTravel.target.z)];
    out.tedNotSummoned = called === null;
    // …and he actually covers ground when the loop runs
    const before = tedTurner.position.distanceTo(tedTravel.target);
    let t = 500; for (let i = 0; i < 300; i++) { t += 1 / 60; updateTedTurner(t); }
    out.tedMoved = before - tedTurner.position.distanceTo(tedTravel.target);
    // nobody's body moves while it is being DRIVEN
    window.feedIdentity = () => ({ avatar: 'emilia', pass: 'x' });
    called = null;
    visitorNav.active = true;
    goToPlace('beach');
    out.drivenStaysYours = called === null;
    visitorNav.active = false;
    // and no identity, no body — the camera flies alone
    window.feedIdentity = () => null;
    called = null;
    goToPlace('beach');
    out.anonJustFlies = called === null;
    window.feedIdentity = realId; window.summonResident = realSummon;
    tedPatrol.state = 'pausing'; tedPatrol.pauseTimer = 1;
    return out;
  });
  check('a guest\'s resident sets out for the place they clicked',
        body.guest && body.guest.k === 'emilia' && body.guest.silent === true &&
        Math.abs(body.guest.at[1] - 78) < 3, JSON.stringify(body.guest));
  check('clicking on through simply retargets the body',
        body.retarget && Math.abs(body.retarget.at[1] - 2.5) < 3, JSON.stringify(body.retarget));
  check('Ted walks — the docent finally has a way to just GO',
        body.tedState === 'travel' && body.tedNotSummoned, JSON.stringify(body.tedTarget));
  check('…and covers ground', body.tedMoved > 3, body.tedMoved.toFixed(1) + ' units in 5s');
  check('a body being driven is not sent anywhere', body.drivenStaysYours);
  check('no identity, no body — the camera flies alone', body.anonJustFlies);

  // ── PHOTOGRAPH ─────────────────────────────────────────────────────────
  await p.evaluate(() => {
    camTarget.set(0, 1.5, 20); camTheta = 0; targetTheta = 0;
    ['galleria', 'beach', 'library', 'exedra', 'pool', 'mountain', 'overlook', 'valley']
      .forEach(k => compassVisited.add(k));
  });
  await p.mouse.move(720, 858);                    // rest the cursor on the dial
  await p.waitForTimeout(1600);
  await p.screenshot({ path: '/home/claude/dg/shot_compass.png' });

  console.log('\npageerrors: ' + errs.length);
  errs.slice(0, 6).forEach(e => console.log('  ' + e));
  const failed = CHECKS.filter(c => !c.ok);
  console.log('\n' + (CHECKS.length - failed.length) + '/' + CHECKS.length + ' checks green, ' + errs.length + ' pageerrors');
  if (failed.length) { console.log('FAILED:'); failed.forEach(f => console.log('  - ' + f.name + '   ' + (f.detail || ''))); }
  await b.close();
  process.exit(failed.length || errs.length ? 1 : 0);
})();
