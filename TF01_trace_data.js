// ============================================================
// TF01 — The Maximum-Pressure Order
// The first native traceframe. PG01 candidate member (admission
// runs after authoring — no admission by resemblance, including
// its own arc's).
//
// Series: TF (ruled 2026-08-18 — born sharp, derived from the
// membrane payload, never from any legacy trace's shape).
// Canonical source: Parameters/04_Traces/TF01/ · villa copy:
// DreamGetty/dreamgetty/ · DEPLOY copy at next deploy.
//
// STATUS: IN AUTHORING — live session, Sailor + Claude, begun
// 2026-08-18. This file is the working state of the authoring
// conversation; it updates as rulings land. Frame RULED · axes
// RULED · predicates sourced · REFRACTION RUN · DIFFRACTION RUN
// (all 2026-08-18). Owed: LI verification pass · Diatribe pass ·
// admission to PG01. The villa renders what exists, no more.
//
// THE MOMENT (ruled as frame one, 2026-08-18): the presidential
// directive to Treasury — maximum economic pressure on Iran.
// Candidate date 2025-02-04 (NSPM-2 signing; pin at authoring).
// The frame fact, plainly: declared as RUPTURE ("maximum
// pressure," as if the prior two administrations had not run
// sanctions continuously) while the economic substrate runs
// CONTINUOUS. The gap between the declared illumination and the
// substrate is this trace's opening finding-candidate — the
// CS04 Event-4 pattern (continuity invisible through partisan
// coding), operating at the petrogas-dollar's own layer.
// Economic predicates sourceable at authoring: designations,
// oil-export volumes to China, shadow-fleet enforcement.
// ============================================================

const TF01_TRACE = {
  id: 'TF01',
  label: 'The Maximum-Pressure Order',
  eventType: 'Z-assertion',    // rendered — keep short. Derived 2026-08-18, provisional until diffraction corroborates
  eventTypeExtended: 'Z-assertion (refraction, 2026-08-18): the shadow pre-credits undelivered pressure. Snapshot frame; candidate PG01 member; admission after authoring.',
  prevalentAxis: 'Y',           // Y +0.90 carries the structure; the drama plays on Z

  // ── THE FRAME — required, Trace_Data_Schema_v2 §2. Born sharp. ──
  frame: {
    declared: 'Maximum pressure — the directive presented as rupture with predecessor policy',
    contested: ['continuity (the stated register: the same pressure, declared continuously across three administrations)'],
    asOfDate: '2026-08-18',
    window: {
      // RULED 2026-08-18 (Sailor): the signing day alone. Day-of and week-after
      // readings enter as readings OF the moment even though they postdate it —
      // the window bounds the imprint, not the readers (TS01 precedent).
      start: '2025-02-04',
      end:   '2025-02-04',
    },
  },

  lifecycle: { status: 'live', closedDate: null, closingFindings: [] },

  // ── Refraction output — RUN 2026-08-18 (Sailor ruled the placement) ──
  object:  { x: 0.70, y: 0.90, z: 0.25 },
  // X +0.70: the order IS coercion-first, proudly. Y +0.90: pure executive
  // sanctions apparatus. Z +0.25: delivery genuinely open at signing — the
  // order declares pressure while B2 says the recent operative record is gap;
  // modestly positive on B1's proof the instrument works when enforced.
  shadow:  { x: 0.85, y: 0.75, z: 0.85 },
  transform: {
    dx: 0.15,    // shadow sharpens partisan coding — rupture means "unlike the weak predecessors"
    dy: -0.15,   // shadow personalizes: the apparatus's continuous instrument becomes one president's will
    dz: 0.60,    // PRIMARY — Z-assertion: the frame asserts delivery as already assured; the record holds it open
    primary: 'Z-assertion',
    description: 'The rupture frame (F1) inflates Z rather than inverting it: delivery declared as fait accompli while the operative record (B2) runs the other way. Structural inverse of TS01\'s Z-inversion — there the shadow denied a delivering object; here it pre-credits an undelivered one. Shadow x/y completed in-session: sharpened partisan coding, personalized apparatus.',
  },

  // ── Axis semantics — RULED 2026-08-18 (Sailor) ──
  axes: {
    x: { pos: 'Coercion-first', neg: 'Diplomacy-first' },
    y: { pos: 'Sanctions apparatus', neg: 'Affected populations' },
    z: { pos: 'Delivering', neg: 'Gap' },
    // Z is literally instrumented on this trace: barrels-per-day IS the
    // delivery metric. Pressure realized = exports fall; gap = oil flows.
  },

  // ── Predicate table — first sourced pass, 2026-08-18 ──
  // Types: T=Trigger, B=Substrate, F=Frame. Loadings relative to O (F: to O').
  predicates: {
    operative: [
      {
        type: 'T', id: 'T1',
        label: 'NSPM-2 signed 2025-02-04 — "Imposing Maximum Pressure on the Government of the Islamic Republic of Iran." Treasury directed to "immediately impose sanctions or appropriate enforcement remedies on all persons" and run "a robust and continual sanctions enforcement campaign"; relief guidance rescinded.',
        x: 1, y: 1, z: 0,   // z 0: at signing, delivery is the question posed, not a fact
        note: 'Structural wrinkle, recorded: the drive-exports-to-zero campaign ("including exports of Iranian crude to the People\'s Republic of China") is formally assigned to STATE; Treasury holds the enforcement campaign. The order-to-Bessent thread is the enforcement thread — and it is the thread the worldline follows to M3.',
      },
      {
        type: 'B', id: 'B1',
        label: 'First maximum-pressure era, operative record: Iran petroleum revenue collapsed to ~$16bn in 2020. The instrument works when enforced.',
        x: 1, y: 1, z: 1,
      },
      {
        type: 'B', id: 'B2',
        label: 'The enforcement gap, 2021–2024: ~$144bn in petroleum sales 2021–2023 (~$100bn above the prior two years); crude/condensate exports more than tripled 2020→2023 to ~1.59 mbpd; ~1.7 mbpd as of the EIA SHIP Act report (Oct 2024). Sanctions on the books throughout.',
        x: 0, y: 1, z: -1,  // x 0: the slack ran under bipartisan stated pressure
      },
      {
        type: 'C', id: 'C1',
        label: 'The trigger hedges itself: at the signing Trump says he is "torn," hopes he will not have to enforce the memo, and writes that he would "much prefer a Verified Nuclear Peace Agreement." Maximum pressure declared and half-disavowed in one breath — F1 contradicted by its own author inside the window.',
        x: -1, y: 1, z: 0,
        tension: true,
        note: 'Load-bearing for RP (the deal-not-war reading is performed from the podium itself) and for the arc: the operator stages pressure as the alternative to war at frame one; by M3 the same apparatus names what the pressure was for.',
      },
    ],
    stated: [
      {
        type: 'F', id: 'F1',
        label: 'Rupture frame — "maximum pressure is BACK": the order presented as decisive break with predecessor weakness. Conceals the stated-register continuity (pressure was declared throughout) and asserts delivery to come.',
        x: 1, y: 1, z: 1,
      },
    ],
  },

  // ── Positions — DIFFRACTION RUN 2026-08-18 (Sailor ruled the draft) ──
  // Day-of / first-week readings of the order. LI carries a thin-sweep
  // caveat (see its note); everything else sourced in the 08-18 sweep.
  positions: [
    { id: 'LI', quadrant: 'A', status: 'complete',
      permeability: { magnitude: 0.10, mode: 'vacancy' },
      internalSpread: 'low — the register is silence; little variance in nothing',
      fluid: 'Continuity-naming',
      denominated: 'Affordable silence',
      binary: 'naming the continuity vs. affording the silence',
      distinguishability: 'Denominated dominant',
      concordance: { obj: '(+1,+1, 0)', shd: '(+1,+1,+1)' }, concordanceType: 'shadow-concordant-by-absence',
      gap: { x: 0, y: 0, z: 0.25 }, gapDominant: 'Z',
      boundaryDescription:
        'Naming the continuity — "this was our stated policy too," which deflates the rupture ' +
        'frame overnight — versus the silence the position can actually afford. Criticizing the ' +
        'order concedes B2: the tripled exports under an identical declared policy. The fluid ' +
        'reading is precisely the reading the position cannot pay for. Anti-valence structural, ' +
        'the TS01-LI shape, visible seventeen months earlier.',
      note: 'THIN-SWEEP CAVEAT, recorded: a first-week sweep surfacing no prominent Democratic ' +
        'pushback supports vacancy but does not prove silence; one targeted verification pass is ' +
        'owed before this reading is consumed at the arc.',
      subjects: [
        { name: 'Democratic leadership, day-of', role: 'reader', mode: 'vacancy',
          note: 'No prominent pushback surfaced; the position\'s own record forecloses the critique.' },
      ] },
    { id: 'RI', quadrant: 'B', status: 'complete',
      permeability: { magnitude: 0.35, mode: 'aligned' },
      internalSpread: 'moderate — celebrants and compliance-parsers, one register apart',
      fluid: 'Instrument accounting',
      denominated: 'Rupture celebration',
      binary: 'the instrument has a record vs. the weakness has ended',
      distinguishability: 'Denominated dominant',
      concordance: { obj: '(+1,+1, 0)', shd: '(+1,+1,+1)' }, concordanceType: 'shadow-concordant',
      gap: { x: 0.15, y: 0, z: 0.6 }, gapDominant: 'Z',
      boundaryDescription:
        'Holding the instrument to its own record — enforced, it collapses revenue to $16bn; ' +
        'idle, it leaks $144bn — versus celebrating the rupture, which requires not reading the ' +
        'gap numbers the station\'s own institutions published in October. The evidence sits ' +
        'in-station, dated, and unassembled: RI reads the shadow, not the object.',
      note: 'Sanctions bar (Crowell, Steptoe, Winston) parses compliance mechanics with intent ' +
        'bracketed — instrument-tuning, not examination. Same facet split as TS01-RI (Miran: price, not reach).',
      subjects: [
        { name: 'Gen. Jack Keane', role: 'reader', mode: 'aligned', note: '"Absolutely first-rate"; strategic-offensive framing, day-of on Fox.' },
        { name: 'Rep. Nancy Mace', role: 'reader', mode: 'aligned', note: '"History proves" celebration; the record cited is B1 without B2.' },
        { name: 'Sanctions bar (Crowell/Steptoe/Winston)', role: 'reader', mode: 'method-occluded', note: 'Compliance parsing; the instrument\'s purpose bracketed by professional convention.' },
      ] },
    { id: 'LP', quadrant: 'C', status: 'complete',
      permeability: { magnitude: 0.65, mode: 'open' },
      internalSpread: 'moderate — siege-naming and madness-reading coexist',
      fluid: 'Instrument-naming',
      denominated: 'Unprecedented-madness',
      binary: 'the sanction is the war vs. the madman is the story',
      distinguishability: 'Oscillation zone',
      concordance: { obj: '(+1,+1, 0)', shd: '(−1, 0, 0)' }, concordanceType: 'object-reaching',
      gap: { x: 0.2, y: 0.3, z: 0.25 }, gapDominant: 'Z',
      boundaryDescription:
        'Naming the economic instrument as the campaign itself — siege framing, and the ' +
        'continuity said aloud ("Biden never lifted them") because the position owes neither ' +
        'administration anything — versus the madness reading, which treats the order as ' +
        'unprecedented and thereby co-signs the rupture frame it despises.',
      note: 'The only station whose fluid reading reaches both the instrument and the continuity. ' +
        'Same reach-with-caveat profile as TS01-LP one layer down.',
      subjects: [
        { name: 'Diplomacy camp (NIAC/Parsi register)', role: 'reader', mode: 'open', note: 'Maximum pressure named as failed policy; diplomacy counter-frame.' },
        { name: 'Humanitarian-sanctions critics', role: 'reader', mode: 'open', note: 'Siege framing: the economic instrument named as force.' },
      ] },
    { id: 'RP', quadrant: 'D', status: 'complete',
      permeability: { magnitude: 0.30, mode: 'inverted-lens' },
      internalSpread: 'HIGH — deal-hopers and enforcement-hawks in one base',
      fluid: 'Deal-not-war',
      denominated: 'Pressure-as-peace',
      binary: 'sanctions instead of war vs. sanctions as the war, unseen',
      distinguishability: 'Denominated dominant',
      concordance: { obj: '(+1,−1, 0)', shd: '(+1, 0,+1)' }, concordanceType: 'inverted-forming',
      gap: { x: 0, y: 1.8, z: 0.25 }, gapDominant: 'Y',
      boundaryDescription:
        'Holding "pressure instead of war" as a promise kept — performed from the podium itself ' +
        '(C1: torn, deal-preferring, hopefully-never-enforced) — versus assembling that the ' +
        'economic instrument IS the campaign. The lens is being ground here: the reading that ' +
        'becomes the full inversion at TS01 layer 2 (Paul, seventeen months later) is already ' +
        'refusing assembly in February 2025.',
      note: 'C1 is this station\'s reading spoken by the operator. The base hears the hedge as ' +
        'the policy; the memo\'s text is the policy.',
      subjects: [
        { name: 'The base reading, performed at the podium', role: 'reader', mode: 'inverted-lens', note: 'C1 — the operator stages RP\'s own preferred reading while signing its opposite.' },
        { name: 'MAGA anti-war channel', role: 'reader', mode: 'inverted-lens', note: 'Deal-preference held; instrument-as-war not assembled.' },
      ] },
  ],

  // ── Findings — the authoring log, oldest first ──
  findings: [
    'AUTHORING OPENED 2026-08-18. Moment ruled: the maximum-pressure order, frame one of the PG01 candidate series.',
    'Worldline note: the officer receiving this order is the same subject who, seventeen months later, names the object aloud and goes unread (M3, 2026-06-24). Frame one and the admission share a subject.',
    'RULED 2026-08-18: window = the signing day (2025-02-04); axes = coercion-first/diplomacy-first · sanctions-apparatus/affected-populations · delivering/gap.',
    'THE CONTINUITY FINDING, REFINED BY SOURCING (2026-08-18, survives its first test): the rupture-vs-continuity intuition splits in two registers. STATED register — continuous: sanctions on the books and pressure declared across three administrations; the "as if Biden and Obama had not been saying the same thing" reading is correct about the saying. OPERATIVE register — discontinuous by an order of magnitude: ~$16bn (2020, enforced) vs ~$144bn (2021–2023, slack), exports tripled to ~1.59 mbpd. Declared rupture over stated continuity over operative discontinuity — a stated-vs-operative structure, Z-gap shaped. The frame\'s apparent stupidity is real but structured: the rhetoric is continuous while enforcement oscillates beneath it.',
    'Z IS INSTRUMENTED: barrels-per-day is this trace\'s literal delivery metric — the same series later consumed at the arc as dispersion\'s neighbor. What the order declares is measurable against what the tankers do.',
    'Diffraction owed: four position readings of the order at its moment (day-of/week-after). LI near-vacancy suspected — if the grassroots-left reading of a Treasury directive barely exists, the absence is the finding.',
    'Sourcing, first pass (2026-08-18): NSPM-2 verbatim from whitehouse.gov · EIA SHIP Act report (Oct 2024) figures via FDD · CRS IF12952 for the China trade line. Predicates carry dated, checkable quantities per house discipline.',
    'REFRACTION RUN 2026-08-18 (Sailor ruled object placement and shadow Z; shadow x/y completed in-session): O at (+0.70, +0.90, +0.25) — coercion-first, pure apparatus, delivery held open by the record. O\' at (+0.85, +0.75, +0.85). Primary shadow operation: Z-ASSERTION — the frame pre-credits delivery the record does not yet support. Structural inverse of TS01\'s Z-inversion; if the pairing holds across the series, the arc gains a two-pole vocabulary for how frames mishandle delivery: deny it when real, assert it when absent.',
    'DIFFRACTION RUN 2026-08-18 (Sailor ruled the station draft): LI vacancy π~0.10 (thin-sweep caveat, verification pass owed) · RI aligned π~0.35 · LP open π~0.65 · RP inverted-lens-forming π~0.30. Four stations, four distinct ways of not reaching (or reaching) the moment — π requires a mode here as everywhere.',
    'C1 ADDED: the trigger hedges itself — the operator half-disavows the rupture frame inside the window. The contradiction is not in the discourse about the order; it is in the order\'s own staging.',
    'ARC-FACING OBSERVATION (for the admission, not assumed): the four modes at this frame are early drafts of the four modes the TS01 layer-2 work found in August 2026 — vacancy at LI, alignment at RI, inversion at RP, reach at LP. Per-station mode stability across seventeen months is recurrence material of exactly the kind PG01 establishes itself by; TF02+ will test it.',
  ],

  // ── Subjects — enrollment watch ──
  subjects: [
    { name: 'Donald Trump', role: 'constitutive', axis: 'declaration',
      note: 'Author of the order; his words are T1/F1. Unscoreable as a reader on the declaration axis (Enrollment Ruling).' },
    { name: 'Scott Bessent', role: 'reader',
      note: 'Recipient of the enforcement directive. Still reader-eligible at this frame — he has not yet supplied predicate text here. Enrollment watch: he becomes constitutive at M3 (2026-06-24), one worldline later.' },
  ],

  // ── Pipeline metadata ──
  pipeline: {
    refractionComplete: true,    // run 2026-08-18
    diffractionComplete: true,   // run 2026-08-18; LI verification pass owed
    positionsComplete: 4,
    boundaryDescriptions: 4,
    coordinateSubjects: 8,
    version: 'Trace_Data_Schema_v2 — TF-native, snapshot scope. Frame RULED · axes RULED · refraction RUN · diffraction RUN. Owed: LI verification · Diatribe pass · admission to PG01.',
  },
};

// Self-register when loaded in gallery context
if (typeof PrismTraces !== 'undefined' && PrismTraces.register) PrismTraces.register(TF01_TRACE);

// Export for use in DreamGetty or other consumers
if (typeof module !== 'undefined') module.exports = TF01_TRACE;
