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
// conversation; it updates as rulings land. Positions are
// setup-only; scores are PROVISIONAL ZEROS (underived — the
// object stands at the origin until refraction runs); nothing
// here is derived yet. The villa renders what exists, no more.
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
  eventType: 'In authoring',   // rendered — keep short; real type owed to derivation
  eventTypeExtended: 'Snapshot frame, pre-derivation. Candidate PG01 member; admission after authoring.',
  prevalentAxis: null,          // owed to derivation

  // ── THE FRAME — required, Trace_Data_Schema_v2 §2. Born sharp. ──
  frame: {
    declared: 'Maximum pressure — the directive presented as rupture with predecessor policy',
    contested: ['continuity (the substrate reading: the same pressure, run continuously, re-declared)'],
    asOfDate: '2026-08-18',
    window: {
      start: '2025-02-04',      // CANDIDATE — the signing; pin at authoring (Sailor)
      end:   '2025-02-04',      // snapshot: the moment of the order itself
    },
  },

  lifecycle: { status: 'live', closedDate: null, closingFindings: [] },

  // ── Refraction output — PROVISIONAL ZEROS (underived; the object
  // stands at the origin until refraction runs). Not findings. ──
  object:  { x: 0, y: 0, z: 0 },
  shadow:  { x: 0, y: 0, z: 0 },
  transform: { dx: 0, dy: 0, dz: 0, primary: 'underived',
    description: 'Derivation owed — authoring in progress.' },

  // ── Axis semantics — candidates, not ruled ──
  axes: {
    x: { pos: 'owed →', neg: '← owed' },
    y: { pos: 'owed', neg: 'owed' },
    z: { pos: 'owed', neg: 'owed' },
  },

  // ── Predicate table — empty until sourced ──
  predicates: { operative: [], stated: [] },

  // ── Positions — setup-only skeleton, the four stations ──
  positions: [
    { id: 'LI', quadrant: 'A', status: 'setup-only',
      concordance: { obj: '—', shd: '—' }, concordanceType: 'underived',
      gap: { x: 0, y: 0, z: 0 }, gapDominant: '—',
      fluid: '—', denominated: '—', binary: '—',
      distinguishability: 'Fluid',   // render default only; underived
      boundaryDescription: null, note: 'Awaiting diffraction.' },
    { id: 'RI', quadrant: 'B', status: 'setup-only',
      concordance: { obj: '—', shd: '—' }, concordanceType: 'underived',
      gap: { x: 0, y: 0, z: 0 }, gapDominant: '—',
      fluid: '—', denominated: '—', binary: '—',
      distinguishability: 'Fluid',   // render default only; underived
      boundaryDescription: null, note: 'Awaiting diffraction.' },
    { id: 'LP', quadrant: 'C', status: 'setup-only',
      concordance: { obj: '—', shd: '—' }, concordanceType: 'underived',
      gap: { x: 0, y: 0, z: 0 }, gapDominant: '—',
      fluid: '—', denominated: '—', binary: '—',
      distinguishability: 'Fluid',   // render default only; underived
      boundaryDescription: null, note: 'Awaiting diffraction.' },
    { id: 'RP', quadrant: 'D', status: 'setup-only',
      concordance: { obj: '—', shd: '—' }, concordanceType: 'underived',
      gap: { x: 0, y: 0, z: 0 }, gapDominant: '—',
      fluid: '—', denominated: '—', binary: '—',
      distinguishability: 'Fluid',   // render default only; underived
      boundaryDescription: null, note: 'Awaiting diffraction.' },
  ],

  // ── Findings — the authoring log, oldest first ──
  findings: [
    'AUTHORING OPENED 2026-08-18. Moment ruled: the maximum-pressure order, frame one of the PG01 candidate series. Window candidate: the signing day. Nothing below this line is derived yet.',
    'Opening finding-candidate (to test, not assume): the declared frame is rupture; the substrate is continuity across three administrations. If it survives sourcing, this is the CS04 Event-4 pattern at the monetary layer.',
    'Worldline note: the officer receiving this order is the same subject who, seventeen months later, names the object aloud and goes unread (M3, 2026-06-24). Frame one and the admission share a subject.',
  ],

  // ── Pipeline metadata ──
  pipeline: {
    refractionComplete: false,
    diffractionComplete: false,
    positionsComplete: 0,
    boundaryDescriptions: 0,
    coordinateSubjects: 0,
    version: 'Trace_Data_Schema_v2 — TF-native, snapshot scope. Authoring in progress.',
  },
};

// Self-register when loaded in gallery context
if (typeof PrismTraces !== 'undefined' && PrismTraces.register) PrismTraces.register(TF01_TRACE);

// Export for use in DreamGetty or other consumers
if (typeof module !== 'undefined') module.exports = TF01_TRACE;
