// ============================================================
// TS01 — Complete Refraction-Diffraction Trace Data
// Pipeline output: Parameters project → DreamGetty renderer
//
// Event: US Military Strikes on Iran — Operation Epic Fury
// Object: American military engagement with Iran
// Status: All four positions pipeline-complete.
//         Boundary descriptions complete. Keywords complete.
// Date: April 5, 2026
// ============================================================

const TS01_TRACE = {
  id: 'TS01',
  label: 'US Military Strikes on Iran — Operation Epic Fury',
  eventType: 'Z-inversion',
  prevalentAxis: 'Y',

  // ── Refraction output ──────────────────────────────────
  object:  { x: 0.65, y: 0.85, z: 0.80 },   // Y-prevalent, Z-delivering
  shadow:  { x: 0.80, y: 0.75, z: -0.30 },   // X-sharpened, Y-attenuated, Z-inverted

  transform: {
    dx: 0.15,    // shadow sharpens partisan coding
    dy: -0.10,   // shadow slightly attenuates institutional character
    dz: -1.10,   // Z-inversion — primary shadow operation
    primary: 'Z-inversion',
    description: 'Shadow sharpens partisan coding, slightly attenuates institutional character, and inverts delivery sign. Critical discourse deploys institutional authority to narrate failure of an institutionally executed engagement.',
  },

  // ── Axis semantics (per-event, overrides factory defaults) ──
  axes: {
    x: { pos: 'Interventionist', neg: 'Restrained' },
    y: { pos: 'Institutional',   neg: 'Direct Action' },
    z: { pos: 'Delivering',      neg: 'Gap' },
  },

  // ── Predicate table ────────────────────────────────────
  // Types: T=Trigger, B=Substrate, M=Mechanism, V=Void, C=Contradiction, F=Frame
  // Axis loadings: 1=positive, 0=neutral, -1=negative
  // Operative predicates position relative to O; F predicates relative to O'
  predicates: {
    operative: [
      {
        type: 'T', id: 'T1',
        label: 'US and Israel conduct major strikes across 24 of 31 Iranian provinces; explicit regime change rhetoric; Iranian retaliation hits Tel Aviv and US regional bases',
        x: 1, y: 1, z: 1,
      },
      {
        type: 'B', id: 'B1',
        label: 'Korea (1950–53): 36,000 American dead, permanent military presence, prosperous allied democracy — strategic success at high casualty cost',
        x: 1, y: 1, z: 1,
      },
      {
        type: 'B', id: 'B2',
        label: 'Vietnam (1955–75): 58,000 American dead, withdrawal without strategic objective achieved — singular Z-negative case in substrate',
        x: 1, y: -1, z: -1,
      },
      {
        type: 'B', id: 'B3',
        label: 'Iraq (2003–11): ~4,500 American dead, core objectives fulfilled (Saddam removed, regional power reshaped, permanent military infrastructure), widest gap between operative delivery and public narrative of failure',
        x: 1, y: 1, z: 1,
      },
      {
        type: 'B', id: 'B4',
        label: 'ISIS/Syria: Jolani rises through ISIS, ISIS credibly linked to CIA/proxy operations, Assad falls, Jolani installed — operative Z-positive through indirect channels',
        x: 1, y: 0, z: 1,
      },
      {
        type: 'M', id: 'M1',
        label: 'Sanctions regime and economic pressure (1979–2025): decades of escalating sanctions, JCPOA as single institutional interruption then withdrawn — pre-military engagement channel operating at Z-neutral',
        x: 1, y: 1, z: 0,
      },
      {
        type: 'M', id: 'M2',
        label: 'Congressional abdication on war powers: Massie/Khanna prepare bipartisan resolution, Democratic leadership does not advance it, upper-left Democrats abstain rather than insist on institutional process',
        x: 0, y: -1, z: 1,
      },
      {
        type: 'V', id: 'V1',
        label: 'No congressional authorization — no vote, no debate, absence creates legal window for engagement',
        x: 0, y: -1, z: 1,
      },
      {
        type: 'C', id: 'C1',
        label: 'Shadow discourse simultaneously holds that American covert operations produce intended regime outcomes (CIA → ISIS → Jolani) and that American military engagement produces unintended failure — these cannot both be true in the same analytical frame',
        x: -1, y: 0, z: 0,
        tension: true,
      },
    ],
    stated: [
      {
        type: 'F', id: 'F1',
        label: 'Quagmire frame — casualties are beginning of a spiral, Hormuz closure, regional escalation as evidence of emerging entanglement',
        x: 0, y: 0, z: -1,
      },
      {
        type: 'F', id: 'F2',
        label: 'Economic consequences frame — oil prices, shipping disruption, global market impact as evidence costs exceed strategic benefit',
        x: 0, y: 1, z: -1,
      },
      {
        type: 'F', id: 'F3',
        label: 'War powers illegitimacy frame — engagement lacks institutional authorization regardless of outcome',
        x: 0, y: 1, z: 0,
      },
      {
        type: 'F', id: 'F4',
        label: 'Victory narrative — strategic success, nuclear capability neutralized, compresses operative complexity into claimable narrative',
        x: 1, y: 1, z: 1,
      },
    ],
  },

  // ── Diffraction output — four positions ────────────────
  // Quadrant mapping: A=upper-left (LI), B=upper-right (RI),
  //                   C=lower-left (LP), D=lower-right (RP)
  positions: [
    {
      id: 'RI',
      quadrant: 'B',
      concordance: { obj: '(+1,+1,+1)', shd: '(+1,+1,-1)' },
      concordanceType: 'concordant-concordant-delivery',
      gap: { x: 0.15, y: -0.10, z: -1.10 },
      gapDominant: 'Z',
      fluid: 'Stewardship',
      denominated: 'Triumphalism',
      binary: 'stewardship vs. triumphalism',
      distinguishability: 'Oscillation zone',
      status: 'complete',
      note: 'RI owns the policy, the channel, and the delivery. Both readings affirm delivery — split is on depth of accounting for what success contains.',
      boundaryDescription: 'Full operative accounting vs. compressed victory narrative. Both affirm delivery. Denomination through simplification, not inversion.',
      fluidKeywords: [
        { text: 'accounting', weight: 0.9 },
        { text: 'operative',  weight: 0.8 },
        { text: 'cost',       weight: 0.7 },
        { text: 'asymmetry',  weight: 0.8 },
        { text: 'strategic',  weight: 0.6 },
        { text: 'ownership',  weight: 0.7 },
      ],
      denomKeywords: [
        { text: 'victory',      weight: 0.9 },
        { text: 'mission',      weight: 0.8 },
        { text: 'won',          weight: 0.7 },
        { text: 'decisive',     weight: 0.6 },
        { text: 'strength',     weight: 0.7 },
        { text: 'accomplished', weight: 0.8 },
      ],
    },
    {
      id: 'LI',
      quadrant: 'A',
      concordance: { obj: '(-1,+1,+1)', shd: '(-1,+1,-1)' },
      concordanceType: 'discordant-concordant-delivery',
      gap: { x: -0.15, y: -0.10, z: -1.10 },
      gapDominant: 'Z',
      fluid: 'Responsibility',
      denominated: 'Disavowal',
      binary: 'responsibility vs. disavowal',
      distinguishability: 'Denominated dominant',
      status: 'complete',
      note: 'Y-concordance at +0.85 is highest single-axis concordance in table. LI shares the institutional channel at maximum intensity while opposing the policy it delivers. LI→LP migration risk active: disavowal overshoots into institutional abandonment.',
      boundaryDescription: 'Institutional concordance as obligation vs. X-discordance as sufficient distance. The Y-axis split: wield the standing or voice the opposition.',
      fluidKeywords: [
        { text: 'authorization', weight: 0.9 },
        { text: 'obligation',    weight: 0.8 },
        { text: 'resolution',    weight: 0.7 },
        { text: 'institutional', weight: 0.6 },
        { text: 'process',       weight: 0.7 },
        { text: 'standing',      weight: 0.8 },
      ],
      denomKeywords: [
        { text: 'oppose',    weight: 0.9 },
        { text: 'statement', weight: 0.8 },
        { text: 'distance',  weight: 0.7 },
        { text: 'abstain',   weight: 0.9 },
        { text: 'record',    weight: 0.6 },
        { text: 'rhetoric',  weight: 0.7 },
      ],
    },
    {
      id: 'LP',
      quadrant: 'C',
      concordance: { obj: '(-1,-1,+1)', shd: '(-1,-1,-1)' },
      concordanceType: 'discordant-discordant-delivery',
      gap: { x: -0.15, y: 0.10, z: -1.10 },
      gapDominant: 'Z',
      fluid: 'Critique',
      denominated: 'Condemnation',
      binary: 'critique vs. condemnation',
      distinguishability: 'Oscillation zone',
      status: 'complete',
      note: 'Maximum activation — opposes policy, opposes channel, delivery is a fact regardless. C1 contradiction lives here: simultaneous claim of American operative capacity and strategic failure.',
      boundaryDescription: 'Empirical engagement with operative content vs. systemic verdict that precedes evidence. C1 contradiction as diagnostic marker.',
      fluidKeywords: [
        { text: 'empirical',   weight: 0.8 },
        { text: 'specific',    weight: 0.9 },
        { text: 'evidence',    weight: 0.7 },
        { text: 'mechanism',   weight: 0.7 },
        { text: 'resolve',     weight: 0.6 },
        { text: 'casualties',  weight: 0.8 },
      ],
      denomKeywords: [
        { text: 'empire',       weight: 0.9 },
        { text: 'systemic',     weight: 0.8 },
        { text: 'quagmire',     weight: 0.7 },
        { text: 'imperialism',  weight: 0.8 },
        { text: 'inevitable',   weight: 0.7 },
        { text: 'industrial',   weight: 0.6 },
      ],
    },
    {
      id: 'RP',
      quadrant: 'D',
      concordance: { obj: '(+1,-1,+1)', shd: '(+1,-1,-1)' },
      concordanceType: 'concordant-discordant-delivery',
      gap: { x: 0.15, y: 0.10, z: -1.10 },
      gapDominant: 'Z',
      fluid: 'Mandate',
      denominated: 'Efficacy',
      binary: 'mandate vs. efficacy',
      distinguishability: 'Denominated dominant',
      status: 'complete',
      note: 'Shadow maximally congenial to RP — sharpens X-ownership, reduces institutional character. Offers identity confirmation and Z-inversion simultaneously. Rand Paul as fluid benchmark (Diatribe 10 across Iran and Venezuela).',
      boundaryDescription: 'Constitutional authorization as legitimacy requirement vs. delivery as self-authorizing. Rand Paul as fluid benchmark.',
      fluidKeywords: [
        { text: 'constitutional', weight: 0.9 },
        { text: 'authorization',  weight: 0.8 },
        { text: 'democratic',     weight: 0.7 },
        { text: 'principle',      weight: 0.8 },
        { text: 'powers',         weight: 0.7 },
        { text: 'legitimate',     weight: 0.6 },
      ],
      denomKeywords: [
        { text: 'results',   weight: 0.9 },
        { text: 'delivered',  weight: 0.8 },
        { text: 'effective',  weight: 0.7 },
        { text: 'pragmatic',  weight: 0.6 },
        { text: 'outcome',    weight: 0.8 },
        { text: 'strength',   weight: 0.7 },
      ],
    },
  ],

  // ── Structural findings ────────────────────────────────
  findings: [
    'TS01 is a Z-inversion event — shadow sharpens X (+0.15), attenuates Y (-0.10), inverts Z (-1.10).',
    'Z-sign divergence universal — object σ_Z=+1 everywhere, shadow σ_Z=-1 everywhere. Same structural pattern as CS01.',
    'Shadow amplifies institutional authority of critique while object Y is attenuated by congressional abdication — the institution that abdicated war powers reasserts authority through critical discourse.',
    'Substrate predicates (B1–B4) establish that American military engagement delivers at progressively lower casualty cost. Vietnam is the singular Z-negative exception, and the shadow\'s quagmire frame depends on Vietnam as representative rather than exceptional.',
    'Shadow has a supply chain — denominated readings of Iraq become frame predicates for Iran. O\' partially constructed from prior events\' O\'.',
    'F4 (victory narrative) is structurally anomalous: a frame predicate that aligns with object Z-sign. Denomination through simplification, not inversion.',
    'Y-prevalence confirmed at diagnostic level — highest-distinguishability positions (LI, RP) both split on institutional process questions.',
    'LI Y-concordance at +0.85 is highest single-axis concordance in table — structural encoding of Democratic complicity through abdication.',
    'C1 contradiction (American operative capacity vs. strategic failure narrative) lives inside shadow discourse, not inside object.',
  ],

  // ── Pipeline metadata ──────────────────────────────────
  pipeline: {
    refractionComplete: true,
    diffractionComplete: true,
    positionsComplete: 4,
    boundaryDescriptions: 4,
    coordinateSubjects: 8,
    version: 'Refraction Grammar v1 / Closed Form v1.2',
  },
};

// Self-register when loaded in gallery context
if (typeof PrismTraces !== 'undefined' && PrismTraces.register) PrismTraces.register(TS01_TRACE);

// Export for use in DreamGetty or other consumers
if (typeof module !== 'undefined') module.exports = TS01_TRACE;
