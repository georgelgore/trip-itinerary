// ─── TRIP META ────────────────────────────────────────────────────────────────
const TRIP_META = {
  name: 'South Korea 2026',
  shortName: 'South Korea 2026',
  dates: 'Oct 18 – 31',
  travelers: 'George & Doug',
  startDate: '2026-10-18',
};

// ─── EDIT CONFIG ──────────────────────────────────────────────────────────────
const EDIT_CFG = {
  tripId: 'korea-26',
  githubOwner: 'georgelgore',
  githubRepo: 'trip-itinerary',
  githubBranch: 'main',
  editsPath: 'trips/south-korea-2026/edits.json',
  storageKey: 'korea-26:days',
  initialTab: 'reservations',
  catLabels: {
    reservations: 'Reservations',
    transit: 'Transit',
    pinnedSpots: 'Saved Pins',
  },
};

// ─── DAYS ─────────────────────────────────────────────────────────────────────
let DAYS = [
  {
    id: 1,
    date: 'Sunday, October 18 — Arrival',
    location: 'Seoul',
    sublocation: 'Arrival',
    theme: 'seoul',
    stay: 'Hotel Sunbee Insadong · Seoul (Oct 18–21)',
    sections: [
      {
        label: 'Flight — Arrival',
        icon: '✈️',
        content: 'Arrive Seoul at 3:20pm.',
        notes: [
          { type: 'warning', text: 'Confirm arrival airport (ICN vs GMP) and add flight number once booked.' }
        ]
      },
      {
        label: 'Transfer & Check-In',
        icon: '🏨',
        content: 'Check in to Hotel Sunbee Insadong — a quiet side street just off the main Insadong pedestrian street, 5 min walk to Jonggak Station (Line 1) and 7 min to Anguk Station (Line 3).',
        address: 'Hotel Sunbee Insadong · 26 Insadong 7-gil, Seoul',
        notes: [
          { type: 'reservation', text: 'Confirmed · Check-in Oct 18 · Check-out Oct 21' }
        ]
      },
      {
        label: 'Evening — Settle In',
        icon: '🌆',
        content: 'Keep it light given the flight. Dinner at Sinsajeon, an easy walk from Insadong — saved from the "Want to go" list.',
        address: 'Sinsajeon, Seoul',
        notes: []
      }
    ]
  },
  {
    id: 2,
    date: 'Monday, October 19 — Jet Lag Buffer',
    location: 'Seoul',
    sublocation: 'Jet Lag Buffer',
    theme: 'seoul',
    stay: 'Hotel Sunbee Insadong · Seoul (Oct 18–21)',
    highlights: [
      { icon: '🏨', text: 'Hotel Sunbee Insadong' },
      { icon: '🍵', text: 'Osulloc Bukchon' },
      { icon: '🍴', text: 'Pildong Myeonok' }
    ],
    sections: [
      {
        label: 'Morning — Tea',
        icon: '☕',
        content: 'Easy pace. Tea at Osulloc Tea House Bukchon, a short walk from Insadong.',
        address: 'Osulloc Tea House Bukchon, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Seoul Museum of Craft Art',
        icon: '🎨',
        content: 'Browse the Seoul Museum of Craft Art (Anguk area) — the guidebook flags a good gift shop here, worth it early in the trip.',
        address: 'Seoul Museum of Craft Art, Seoul',
        notes: []
      },
      {
        label: 'Evening — Food',
        icon: '🍴',
        content: 'Dinner at Pildong Myeonok, from the "Want to go" list.',
        address: 'Pildong Myeonok, Seoul',
        notes: []
      }
    ]
  },
  {
    id: 3,
    date: 'Tuesday, October 20 — Neighborhoods & Food',
    location: 'Seoul',
    sublocation: 'Neighborhoods & Food',
    theme: 'seoul',
    stay: 'Hotel Sunbee Insadong · Seoul (Oct 18–21)',
    highlights: [
      { icon: '🏨', text: 'Hotel Sunbee Insadong' },
      { icon: '🛒', text: 'Gwangjang Market' },
      { icon: '🍴', text: 'Gamekol Son Wangmandu' }
    ],
    sections: [
      {
        label: 'Morning — Tea',
        icon: '☕',
        content: 'Tea at Jidaebang, sourced from an Instagram find.',
        address: 'Jidaebang, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Gwangjang Market',
        icon: '🛒',
        content: 'Gwangjang Market — the NYT pick from the "Want to go" list. Street food, textiles, and one of Seoul\u2019s oldest markets.',
        address: 'Gwangjang Market, Seoul',
        notes: []
      },
      {
        label: 'Evening — Food',
        icon: '🍴',
        content: 'Gamekol Son Wangmandu for kimchi buns — a YouTube find.',
        address: 'Gamekol Son Wangmandu, Seoul',
        notes: []
      }
    ]
  },
  {
    id: 4,
    date: 'Wednesday, October 21 — Seoul → Jeju',
    location: 'Seoul → Jeju',
    sublocation: 'Checkout · Flight to Jeju',
    theme: 'seoul',
    stay: 'Seom Studio In Seogwipo #7 · check-in',
    sections: [
      {
        label: 'Check-Out — Hotel Sunbee',
        icon: '🏨',
        content: 'Check out of Hotel Sunbee Insadong.',
        address: 'Hotel Sunbee Insadong · 26 Insadong 7-gil, Seoul',
        notes: []
      },
      {
        label: 'Flight — GMP to CJU',
        icon: '✈️',
        content: 'Domestic flight from Seoul/Gimpo to Jeju. Depart 9:10am, arrive 10:25am — 1h 15m.',
        address: 'Seoul/Gimpo (GMP) · Terminal D (Domestic) → Jeju (CJU)',
        notes: []
      },
      {
        label: 'Check-In — Seom Studio',
        icon: '🏡',
        content: 'Check in to Seom Studio In Seogwipo #7.',
        address: 'Seom Studio In Seogwipo #7',
        notes: [
          { type: 'reservation', text: 'AirBnb confirmed · Oct 21–25 · Unit #7' }
        ]
      }
    ]
  },
  {
    id: 5,
    date: 'Thursday, October 22 — Tea Fields',
    location: 'Jeju',
    sublocation: 'Seogwang-ri',
    theme: 'jeju',
    stay: 'Seom Studio In Seogwipo #7',
    sections: [
      {
        label: 'Morning — Tea Fields',
        icon: '🍵',
        content: 'TBD — Seogwang-ri tea fields.',
        notes: []
      },
      {
        label: 'Afternoon',
        icon: '🌿',
        content: 'TBD.',
        notes: []
      },
      {
        label: 'Evening',
        icon: '🍴',
        content: 'TBD.',
        notes: []
      }
    ]
  },
  {
    id: 6,
    date: 'Friday, October 23 — Seogwipo',
    location: 'Jeju',
    sublocation: 'Seogwipo',
    theme: 'jeju',
    stay: 'Seom Studio In Seogwipo #7',
    sections: [
      {
        label: 'Morning — Seogwipo',
        icon: '🌊',
        content: 'TBD — Seogwipo.',
        notes: []
      },
      {
        label: 'Afternoon',
        icon: '🚶',
        content: 'TBD.',
        notes: []
      },
      {
        label: 'Evening',
        icon: '🍴',
        content: 'TBD.',
        notes: []
      }
    ]
  },
  {
    id: 7,
    date: 'Saturday, October 24 — Coast',
    location: 'Jeju',
    sublocation: 'Coast',
    theme: 'jeju',
    stay: 'Seom Studio In Seogwipo #7',
    sections: [
      {
        label: 'Morning — Coast',
        icon: '🌅',
        content: 'TBD — coastal exploration.',
        notes: []
      },
      {
        label: 'Afternoon',
        icon: '🚶',
        content: 'TBD.',
        notes: []
      },
      {
        label: 'Evening',
        icon: '🍴',
        content: 'TBD.',
        notes: []
      }
    ]
  },
  {
    id: 8,
    date: 'Sunday, October 25 — Jeju → Seoul',
    location: 'Jeju → Seoul',
    sublocation: 'Checkout · Flight to Seoul',
    theme: 'jeju',
    stay: 'Seoul Myeongdong Hotel · check-in',
    sections: [
      {
        label: 'Check-Out — Seom Studio',
        icon: '🏡',
        content: 'Check out of Seom Studio In Seogwipo #7.',
        notes: []
      },
      {
        label: 'Flight — CJU to GMP',
        icon: '✈️',
        content: 'Domestic flight from Jeju back to Seoul/Gimpo. Depart 9:50am, arrive 11:05am — 1h 15m.',
        address: 'Jeju (CJU) → Seoul/Gimpo (GMP) · Terminal D (Domestic)',
        notes: []
      },
      {
        label: 'Check-In — Seoul Myeongdong',
        icon: '🏨',
        content: 'Check in to the Seoul Myeongdong hotel.',
        address: 'Seoul Myeongdong',
        notes: [
          { type: 'reservation', text: 'Hotel confirmed · Confirmation #42971084 · Oct 25–31' }
        ]
      }
    ]
  },
  {
    id: 9,
    date: 'Monday, October 26 — Tea & Ceramics Shopping',
    location: 'Seoul',
    sublocation: 'Tea & Ceramics Shopping',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    highlights: [
      { icon: '🍵', text: 'Sumuqa Tea Room' },
      { icon: '🏺', text: 'EDEN POTTERY' },
      { icon: '🍴', text: 'Buchon Yukhoe' }
    ],
    sections: [
      {
        label: 'Morning — Tea',
        icon: '☕',
        content: 'Sumuqa Tea Room, an Instagram find.',
        address: 'Sumuqa Tea Room, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Ceramics Shopping',
        icon: '🏺',
        content: 'Ceramics run: EDEN POTTERY, OJASEOUL by OJACRAFT, and Narrative Object (내러티브오브젝트) — all saved from Instagram finds.',
        notes: []
      },
      {
        label: 'Evening — Food',
        icon: '🍴',
        content: 'Buchon Yukhoe Main Store.',
        address: 'Buchon Yukhoe Main Store, Seoul',
        notes: []
      }
    ]
  },
  {
    id: 10,
    date: 'Tuesday, October 27 — Icheon Day Trip (Pottery)',
    location: 'Icheon',
    sublocation: 'Ceramics Village',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    highlights: [
      { icon: '🚌', text: 'Day trip from Seoul' },
      { icon: '🏺', text: 'Master potter workshop' },
      { icon: '🖼️', text: 'Icheon Ceramic Village' }
    ],
    sections: [
      {
        label: 'Morning — Travel to Icheon',
        icon: '🚌',
        content: 'Icheon is about 1–1.5 hrs from Seoul by car or bus. Head out early to make the most of the day.',
        notes: [
          { type: 'warning', text: 'Book transport (car service, intercity bus, or tour) once decided.' }
        ]
      },
      {
        label: 'Midday — Icheon Ceramic Village',
        icon: '🖼️',
        content: 'Browse the kilns and galleries of Icheon Ceramic Village and the Icheon World Ceramic Center — Korea\u2019s traditional ceramics hub.',
        notes: []
      },
      {
        label: 'Afternoon — Hands-On Pottery Workshop',
        icon: '🏺',
        content: 'Book a wheel-throwing or hand-building session with a local master potter — inspired by the Icheon Master Potter workshops (Master Lee Hyang-gu and similar studios).',
        notes: [
          { type: 'warning', text: 'Reserve the workshop in advance — slots fill up, and some require a deposit.' }
        ]
      },
      {
        label: 'Evening — Return to Seoul',
        icon: '🌆',
        content: 'Head back to Seoul; keep dinner simple near Myeongdong.',
        notes: []
      }
    ]
  },
  {
    id: 11,
    date: 'Wednesday, October 28 — Tea & Ceramics Shopping',
    location: 'Seoul',
    sublocation: 'Tea & Ceramics Shopping',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    highlights: [
      { icon: '☕', text: 'Anthracite Coffee Seogyo' },
      { icon: '🏺', text: 'Dapsimni Antiques Market' },
      { icon: '🍴', text: 'Jayeondo Sogeumppang' }
    ],
    sections: [
      {
        label: 'Morning — Coffee',
        icon: '☕',
        content: 'Anthracite Coffee Seogyo, from the "Want to go" list.',
        address: 'Anthracite Coffee Seogyo, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Antiques & Ceramics',
        icon: '🏺',
        content: 'Dapsimni Antiques Market (an Instagram find) and gradus (grds), sourced from the guidebook.',
        address: 'Dapsimni Antiques Market, Seoul',
        notes: []
      },
      {
        label: 'Evening — Food',
        icon: '🍴',
        content: 'Jayeondo Sogeumppang (Salt Bread) in Seongsu.',
        address: 'Jayeondo Sogeumppang, Seongsu, Seoul',
        notes: []
      }
    ]
  },
  {
    id: 12,
    date: 'Thursday, October 29 — Markets',
    location: 'Seoul',
    sublocation: 'Markets',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    highlights: [
      { icon: '☕', text: 'Cha Cha Tea Club' },
      { icon: '🛍️', text: 'DDP' },
      { icon: '🍧', text: 'Sulbing Hannam' }
    ],
    sections: [
      {
        label: 'Morning — Tea',
        icon: '☕',
        content: 'Cha Cha Tea Club.',
        address: 'Cha Cha Tea Club, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Markets',
        icon: '🛍️',
        content: 'Seoul Yangnyeongsi Medicine Market and Dongdaemun Design Plaza (DDP); Goto Mall if there\u2019s time.',
        notes: []
      },
      {
        label: 'Evening — Food',
        icon: '🍧',
        content: 'Sulbing Hannam branch.',
        address: 'Sulbing, Hannam, Seoul',
        notes: []
      }
    ]
  },
  {
    id: 13,
    date: 'Friday, October 30 — Relaxed Pace',
    location: 'Seoul',
    sublocation: 'Relaxed Pace',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    highlights: [
      { icon: '☕', text: 'Dadole' },
      { icon: '🛍️', text: 'LCDC Seoul' },
      { icon: '🍹', text: 'VIBD BLVD' }
    ],
    sections: [
      {
        label: 'Morning — Tea',
        icon: '☕',
        content: 'Slower pace toward the end of the trip. Dadole for tea.',
        address: 'Dadole, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Last-Minute Shopping',
        icon: '🛍️',
        content: 'LCDC Seoul, Beaker, NIFTYDO (a Spyplane pick), and Unipair.',
        notes: []
      },
      {
        label: 'Evening — Drinks',
        icon: '🍹',
        content: 'VIBD BLVD, an NYT pick, for a last relaxed evening.',
        address: 'VIBD BLVD, Seoul',
        notes: []
      }
    ]
  },
  {
    id: 14,
    date: 'Saturday, October 31 — Departure',
    location: 'Seoul',
    sublocation: 'Departure',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · Checkout',
    sections: [
      {
        label: 'Check-Out',
        icon: '🏨',
        content: 'Check out of the Seoul Myeongdong hotel.',
        notes: []
      },
      {
        label: 'Free Time',
        icon: '🕐',
        content: 'Last-minute shopping or errands before heading to the airport — Alkimia Seo Chon Ice Cream (an NYT pick) or Youngpoong Bookstore Jongno Main Branch are both nearby options if there\u2019s time.',
        notes: []
      },
      {
        label: 'Flight — Departure',
        icon: '✈️',
        content: 'Depart Seoul at 5:30pm.',
        notes: [
          { type: 'warning', text: 'Confirm departure airport (ICN vs GMP) and add flight number once booked.' }
        ]
      }
    ]
  }
];

// ─── QUICK REF ────────────────────────────────────────────────────────────────
const QUICK_REF = {
  reservations: [
    { name: 'Hotel Sunbee Insadong', detail: 'Confirmed · Check-in Oct 18 · Check-out Oct 21 · 26 Insadong 7-gil, Seoul' },
    { name: 'Seom Studio In Seogwipo #7', detail: 'AirBnb confirmed · Oct 21–25 · Unit #7' },
    { name: 'Seoul Myeongdong Hotel', detail: 'Confirmed · Confirmation #42971084 · Oct 25–31' }
  ],
  transit: [
    { name: 'Arrival Flight', detail: 'Lands Seoul 3:20pm, Oct 18 — add flight number once booked' },
    { name: 'Departure Flight', detail: 'Departs Seoul 5:30pm, Oct 31 — add flight number once booked' },
    { name: 'GMP → CJU (Oct 21)', detail: 'Depart Gimpo Terminal D 9:10am · Arrive Jeju 10:25am · 1h 15m' },
    { name: 'CJU → GMP (Oct 25)', detail: 'Depart Jeju 9:50am · Arrive Gimpo Terminal D 11:05am · 1h 15m' },
    { name: 'Icheon Day Trip (Oct 27)', detail: 'From Seoul, ~1–1.5 hrs each way by car or bus — transport TBD' }
  ],
  // Saved Google Maps pins not yet slotted into a specific day — pull from here when filling in TBD sections.
  pinnedSpots: {
    food: [
      { name: 'Sancheong Charcoal Garden Euljiro', note: 'Want to go · YouTube' },
      { name: 'Eulmildae', note: 'IG cold noodles' },
      { name: 'Mandong Bakery', note: 'Want to go · YouTube' },
      { name: 'Yun Seoul', note: 'Want to go · NYT' }
    ],
    cafesTea: [
      { name: 'Lao Sanghai', note: 'Tea · Reddit' },
      { name: 'Ace 4 club', note: 'Want to go · NYT' }
    ],
    shopping: [
      { name: 'Shinsegae Department Store Main Store', note: 'General shopping' },
      { name: 'Goto Mall', note: '' },
      { name: 'Musinsa Standard', note: 'Want to go' },
      { name: 'SUPY Myeongdong', note: "Men's shopping" },
      { name: 'Random Walk', note: "Men's shopping" },
      { name: 'Coor', note: 'Want to go' },
      { name: 'Ourselves', note: 'Want to go' },
      { name: 'Kyobo Book Centre Gangnam', note: '' }
    ],
    markets: [
      { name: 'COEX Convention & Exhibition Center', note: '' },
      { name: 'Koreal Color', note: 'Want to go' },
      { name: 'GU Clinic', note: 'Want to go' }
    ]
  }
};
