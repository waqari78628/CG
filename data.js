export const PROCEDURES = [
  {
    id: 'tx',
    name: 'Transmitter',
    title: 'Transmitter Double Compression (Ex d)',
    cable: '1-Pair 1.5mm² SWA Shielded (Belden 29004 eq.)',
    standards: 'IEC 60079-14 | BS EN 50288-7',
    dims: { outer: '45-50 mm', armor: '12-15 mm', inner: '6-8 mm' },
    steps: [
      {
        num: 1,
        title: 'Thread & Adapter Verification',
        text: 'Check transmitter entry (1/2" NPT female). If using M20 metric gland, install Ex d certified 1/2" NPT(M) to M20(F) adapter with approved sealant.',
        caution: 'Never force M20 threads into 1/2" NPT entries; thread mismatch destroys flameproof path.',
        check: 'Gland/adapter engages cleanly by hand without cross-threading.'
      },
      {
        num: 2,
        title: 'Slide Components in Sequence',
        text: 'Slide onto raw cable: (1) PVC Shroud, (2) Back Nut, (3) Outer Seal, (4) Middle Body.',
        check: 'All 4 parts face the correct orientation along cable.'
      },
      {
        num: 3,
        title: 'Outer Sheath Stripping',
        text: 'Score outer jacket at 50 mm. Make longitudinal cut and peel off jacket without nicking armor wires.',
        caution: 'Nicked armor wires cause mechanical fatigue and earth fault failure.',
        check: 'Armor wires exposed cleanly without kinks.'
      },
      {
        num: 4,
        title: 'Armor Trimming & Cone Seating',
        text: 'Flare armor wires evenly. Trim armor to 12-15 mm with junior hacksaw. Push cone under armor against bedding.',
        check: 'Armor wires lay flush and uniformly 360° across cone taper.'
      },
      {
        num: 5,
        title: 'Armor Clamping (Middle Body)',
        text: 'Slide clamping ring over cone. Screw middle body onto entry body. Tighten firmly using two spanners.',
        check: 'Cable passes firm pull-test with zero slippage.'
      },
      {
        num: 6,
        title: 'Entry Mounting & Weather Seal',
        text: 'Fit nylon IP washer. Screw into hub (min 5 full thread turns). Tighten rear back nut to compress outer seal.',
        check: 'IP washer compressed evenly; outer seal hugs outer jacket.'
      },
      {
        num: 7,
        title: 'Field Shield Isolation & Drip Loop',
        text: 'Cut back shield foil and drain wire. Insulate with heat-shrink. Dress cable into downward U-shaped drip loop below gland.',
        caution: 'NEVER ground drain wire to transmitter body! Ground shield at DCS rack only.',
        check: 'Shield drain is insulated; drip loop sits below gland entry.'
      }
    ],
    verifications: [
      'Earth continuity from armor to plant earth < 0.5 ohms.',
      'Unused entry sealed with certified Ex d blanking plug.',
      'Drip loop sheds water cleanly away from entry seal.'
    ]
  },
  {
    id: 'jb',
    name: 'Junction Box',
    title: 'Junction Box Gland Plate & Earth Tag',
    cable: 'Multi-Pair (6P/12P) SWA Trunk Cable',
    standards: 'IEC 60079-14 | IEC 62444',
    dims: { outer: '55-65 mm', armor: '15 mm', inner: '8 mm' },
    steps: [
      {
        num: 1,
        title: 'Bottom Plate Entry Layout',
        text: 'Cables must enter via bottom gland plate. Keep min 15 mm clearance between glands.',
        check: 'Clearance hole drilled to standard (20.5 mm for M20).'
      },
      {
        num: 2,
        title: 'Earth Tag & Locknut Fitment',
        text: 'Place IP washer on outside. Pass gland through. Inside, fit Earth Tag, serrated washer, and brass locknut.',
        caution: 'Earth tags are mandatory on non-metallic (GRP/plastic) junction boxes.',
        check: 'Locknut torqued firmly without warping gland plate.'
      },
      {
        num: 3,
        title: 'Earth Busbar Bonding',
        text: 'Crimp 2.5mm² green/yellow jumper to each earth tag. Secure to internal Clean Earth bar.',
        check: 'Bonding wire tight with zero loose strands.'
      }
    ],
    verifications: [
      'Unused entries sealed with Ex stopping plugs.',
      'Earth loop impedance across all glands < 0.5 ohms.'
    ]
  },
  {
    id: 'pos',
    name: 'Positioner',
    title: 'Control Valve Positioner Glanding',
    cable: '1-Pair Shielded Armored / Flexible Braided Cable',
    standards: 'IEC 60079-14 | ISA-75',
    dims: { outer: '40 mm', armor: '10 mm', inner: '6 mm' },
    steps: [
      {
        num: 1,
        title: 'Clearance & Expansion Loop',
        text: 'Route cable along actuator yoke with expansion loop. Maintain min 50 mm clearance from moving stem.',
        caution: 'Check clearance across full 0% to 100% stroke range.',
        check: 'Zero contact between cable and moving parts during stroke.'
      },
      {
        num: 2,
        title: 'Gland Tightening & Strain Relief',
        text: 'Thread certified gland with IP washer. Tighten armor clamp and back nut.',
        check: 'Gland resists plant vibration without pulling internal wires.'
      },
      {
        num: 3,
        title: 'Yoke Cushion Clamping',
        text: 'Fasten cable to yoke using stainless steel ties with rubber cushion strips.',
        check: 'Cable anchored securely; expansion loop moves freely.'
      }
    ],
    verifications: [
      'Full valve stroke test completed with zero cable rubbing.',
      'Shield insulated with heat shrink and left ungrounded.'
    ]
  },
  {
    id: 'sov',
    name: 'SOV',
    title: 'Solenoid Valve DIN Connector Termination',
    cable: '2-Core 1.5mm² Flexible Heavy-Duty Cable',
    standards: 'DIN EN 175301-803',
    dims: { outer: '30 mm', armor: 'N/A', inner: 'N/A' },
    steps: [
      {
        num: 1,
        title: 'DIN Connector Disassembly',
        text: 'Loosen central screw, remove connector block, unscrew rear nut, and extract rubber grommet.',
        check: 'Grommet, profile gasket, and terminal block are dry and clean.'
      },
      {
        num: 2,
        title: 'Ferrule Crimp & Wiring',
        text: 'Feed cable through seal. Strip 6 mm, crimp ferrules, secure into terminals 1 (+) and 2 (-). Earth to pin.',
        check: 'Ferrules fully seated with zero stray copper strands.'
      },
      {
        num: 3,
        title: 'Gasket Alignment & Sealing',
        text: 'Position profile gasket between coil and connector. Tighten central screw and rear nut.',
        caution: 'Always verify profile rubber gasket is seated flat to avoid coil burnout.',
        check: 'Gasket evenly compressed around perimeter.'
      }
    ],
    verifications: [
      '24VDC polarity verified; LED illuminates on energization.',
      'Gasket perimeter shows complete weather seal.'
    ]
  }
];

export const GLAND_TYPES = [
  {
    title: 'Double Compression (Ex d / Ex e)',
    tag: 'Zone 1 & 2',
    color: '#0284c7',
    desc: 'Standard for Steel Wire Armored (SWA) cables. Inner seal compresses on bedding for explosion-proof barrier; outer seal grips outer jacket for IP66/68 weather seal.',
    app: 'Transmitters, Junction Boxes, and Control Valves.'
  },
  {
    title: 'Single Compression',
    tag: 'Safe Area / Ex e',
    color: '#059669',
    desc: 'Designed for unarmored flexible cables. A single elastomer seal compresses onto outer jacket.',
    app: 'Solenoid DIN connectors, indoor cabinets, non-armored sensors.'
  },
  {
    title: 'Barrier / Resin Gland',
    tag: 'Ex d IIC Zone 1',
    color: '#d97706',
    desc: 'Filled with epoxy compound around individual conductors to stop gas migration through cable voids.',
    app: 'Hydrogen environments and cables subject to cold-flow creep.'
  }
];

export const GOLDEN_RULES = [
  {
    title: 'Rule 1: Single-Point Shield Earthing',
    rule: 'Earth shield drain wire at ONE POINT ONLY (control room DCS rack). Cut and insulate field end.',
    why: 'Dual grounding creates ground loops that introduce 50/60 Hz noise into 4–20 mA signals.'
  },
  {
    title: 'Rule 2: Form a Water Drip Loop',
    rule: 'Always bend field cable into a downward U-shaped loop below the gland before entry.',
    why: 'Gravity forces rainwater to drip off the bottom instead of tracking into the seal.'
  },
  {
    title: 'Rule 3: Thread Compatibility',
    rule: 'Never force Metric M20 glands into 1/2" NPT ports without an Ex d certified adapter.',
    why: 'Mismatched threads strip and destroy the explosion-proof containment.'
  },
  {
    title: 'Rule 4: Earth Tag on GRP Boxes',
    rule: 'Always fit an Earth Tag with a 2.5mm² jumper to the internal earth bar on non-metallic boxes.',
    why: 'Plastic/GRP boxes do not conduct electricity; the tag provides the earth fault path.'
  }
];

export const MCQS = [
  {
    id: 1,
    q: 'Where should the shield drain wire of a 4–20 mA instrument cable be grounded?',
    opts: [
      'Both transmitter and DCS cabinet.',
      'Only at DCS / Control Room rack earth bar.',
      'Only at field transmitter ground screw.',
      'Never ground shield wires.'
    ],
    ans: 1,
    exp: 'Single-point grounding at DCS eliminates ground loops that distort analog signals.'
  },
  {
    id: 2,
    q: 'Why are nylon glands prohibited on Steel Wire Armored (SWA) cables?',
    opts: [
      'Nylon melts in sunlight.',
      'Nylon cannot grip armor wires for pull-out retention and earth continuity.',
      'Nylon does not support metric threads.',
      'Nylon corrodes copper.'
    ],
    ans: 1,
    exp: 'Armored cables require metal glands with armor cones for mechanical grip and earthing.'
  },
  {
    id: 3,
    q: 'What is the function of a water drip loop below a field gland?',
    opts: [
      'Spare cable storage.',
      'Forces water to drip away before reaching the gland seal.',
      'Improves HART signal speed.',
      'Cools down hot cables.'
    ],
    ans: 1,
    exp: 'A drip loop ensures rainwater runs down and drips from the bottom curve.'
  },
  {
    id: 4,
    q: 'Minimum fully engaged threads required for parallel Metric Ex d entry?',
    opts: ['2 threads', '3 threads', '5 full threads', '8 threads'],
    ans: 2,
    exp: 'IEC 60079-14 requires at least 5 full engaged threads for flameproof containment.'
  }
];
