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
    sublocation: 'Insadong',
    theme: 'seoul',
    stay: 'Hotel Sunbee Insadong · Seoul (Oct 18–21)',
    highlights: [
      { icon: '✈️', text: 'Land 3:20pm' },
      { icon: '🏨', text: 'Hotel Sunbee Insadong' },
      { icon: '🍴', text: 'Sinsajeon' }
    ],
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
        label: 'Late Afternoon — Insadong-gil & Ssamziegil',
        icon: '🚶',
        content: 'Once settled, walk Insadong-gil itself — the pedestrian street lined with galleries, stationery shops, and tea houses — and duck into Ssamziegil, a spiral-ramped complex of small design and craft shops. Easy, jet-lag-friendly, and right outside the hotel.',
        address: 'Ssamziegil, Insadong, Seoul',
        notes: []
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
    date: 'Monday, October 19 — Bukchon & Samcheong-dong',
    location: 'Seoul',
    sublocation: 'Bukchon & Samcheong-dong',
    theme: 'seoul',
    stay: 'Hotel Sunbee Insadong · Seoul (Oct 18–21)',
    highlights: [
      { icon: '🏯', text: 'Gyeongbokgung Palace' },
      { icon: '🏛️', text: 'National Folk Museum' },
      { icon: '🍵', text: 'Osulloc Bukchon' },
      { icon: '🎨', text: 'Seoul Museum of Craft Art' }
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
        label: 'Late Morning — Gyeongbokgung Palace & National Folk Museum',
        icon: '🏯',
        content: 'Walk to Gyeongbokgung Palace, the largest of Seoul\u2019s Five Grand Palaces, and duck into the National Folk Museum of Korea on the palace grounds — a good overview of Korean daily life and craft history before diving into Bukchon\u2019s workshops.',
        address: 'Gyeongbokgung Palace, Jongno-gu, Seoul',
        notes: [
          { type: 'warning', text: 'Palace is closed on Tuesdays — fine for this Monday visit, but worth double-checking closer to the date.' }
        ]
      },
      {
        label: 'Afternoon — Bukchon Hanok Village Walk',
        icon: '🏘️',
        content: 'Wander the sloped lanes of Bukchon Hanok Village, one of Seoul\u2019s best-preserved traditional neighborhoods — a mix of centuries-old hanok homes, small craft studios, and photo-friendly overlooks toward the palace and Namsan.',
        address: 'Bukchon Hanok Village, Jongno-gu, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Seoul Museum of Craft Art & Samcheong-dong Shopping',
        icon: '🎨',
        content: 'Browse the Seoul Museum of Craft Art (Anguk area) — the guidebook flags a good gift shop here, worth it early in the trip. Afterward, pop into the boutiques along Samcheong-dong-gil for ceramics, stationery, and small galleries.',
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
    date: 'Tuesday, October 20 — Jongno & Ikseon-dong',
    location: 'Seoul',
    sublocation: 'Jongno & Ikseon-dong',
    theme: 'seoul',
    stay: 'Hotel Sunbee Insadong · Seoul (Oct 18–21)',
    highlights: [
      { icon: '🏘️', text: 'Ikseon-dong-gil' },
      { icon: '🛒', text: 'Gwangjang Market' },
      { icon: '🛕', text: 'Jogyesa Temple' },
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
        label: 'Late Morning — Ikseon-dong-gil',
        icon: '🏘️',
        content: 'Walk over to Ikseon-dong-gil — Seoul\u2019s smallest hanok village, now packed with boutique cafes, indie fashion shops, and small galleries tucked into century-old houses. Good for browsing before the market crowds pick up.',
        address: 'Ikseon-dong-gil, Jongno-gu, Seoul',
        notes: []
      },
      {
        label: 'Midday — Jogyesa Temple',
        icon: '🛕',
        content: 'Short stop at Jogyesa Temple, the head temple of the Jogye Order — a quiet, colorful contrast to the market streets around it, and only a few minutes\u2019 walk from Insadong.',
        address: 'Jogyesa Temple, Jongno-gu, Seoul',
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
    date: 'Monday, October 26 — Seongsu-dong',
    location: 'Seoul',
    sublocation: 'Seongsu-dong',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    highlights: [
      { icon: '🍵', text: 'Sumuqa Tea Room' },
      { icon: '🌳', text: 'Seoul Forest' },
      { icon: '🏺', text: 'Seongsu ceramics run' },
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
        label: 'Late Morning — Seoul Forest',
        icon: '🌳',
        content: 'Walk through Seoul Forest — a large riverside park with a deer enclosure, wetlands, and a bike/walking path along the Han River. A good breather before the shopping-heavy afternoon.',
        address: 'Seoul Forest, Seongdong-gu, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Ceramics & Design Shopping',
        icon: '🏺',
        content: 'Ceramics run: EDEN POTTERY, OJASEOUL by OJACRAFT, and Narrative Object (내러티브오브젝트) — all saved from Instagram finds. Seongsu is also full of converted-warehouse concept stores and design galleries (Daelim Changgo Warehouse, Common Ground container mall) worth a wander between stops.',
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
        content: 'Browse the kilns and galleries of Icheon Ceramic Village and the Icheon World Ceramic Center — Korea\u2019s traditional ceramics hub. The Haegang Ceramics Museum is also here if there\u2019s time for one more stop.',
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
    date: 'Wednesday, October 28 — Hongdae & Yeonnam-dong',
    location: 'Seoul',
    sublocation: 'Hongdae & Yeonnam-dong',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    highlights: [
      { icon: '☕', text: 'Anthracite Coffee Seogyo' },
      { icon: '🌳', text: 'Yeonnam-dong Forest Park' },
      { icon: '🖼️', text: 'Trick Eye Museum' },
      { icon: '🍴', text: 'Yeonnam-dong dinner' }
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
        label: 'Late Morning — Yeonnam-dong Forest Park Walk',
        icon: '🌳',
        content: 'Walk the Gyeongui Line Forest Park through Yeonnam-dong — a converted rail line turned narrow park, lined with indie boutiques, secondhand shops, and cafes on either side.',
        address: 'Gyeongui Line Forest Park, Yeonnam-dong, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Trick Eye Museum & Hongdae Shopping',
        icon: '🖼️',
        content: 'The Trick Eye Museum in Hongdae is a playful, photo-driven 3D art museum — a fun change of pace from the day\u2019s craft-and-tea itinerary. Follow with a browse through Hongdae\u2019s indie fashion and street-style shops.',
        address: 'Trick Eye Museum, Hongdae, Seoul',
        notes: []
      },
      {
        label: 'Evening — Food',
        icon: '🍴',
        content: 'Dinner among Yeonnam-dong\u2019s food street — a dense strip of casual Korean and Korean-Chinese spots, easy walking distance from the afternoon\u2019s stops.',
        address: 'Yeonnam-dong, Mapo-gu, Seoul',
        notes: []
      }
    ]
  },
  {
    id: 12,
    date: 'Thursday, October 29 — Dongdaemun & Jegi-dong',
    location: 'Seoul',
    sublocation: 'Dongdaemun & Jegi-dong',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    highlights: [
      { icon: '☕', text: 'Cha Cha Tea Club' },
      { icon: '🌿', text: 'Yangnyeongsi Medicine Market' },
      { icon: '🛍️', text: 'DDP' },
      { icon: '🧸', text: 'Dapsimni Antiques Market' }
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
        label: 'Late Morning — Seoul Yangnyeongsi Medicine Market',
        icon: '🌿',
        content: 'Seoul Yangnyeongsi Medicine Market in Jegi-dong is Korea\u2019s largest traditional herbal medicine market — narrow lanes stacked with dried roots and herbs. The small Herbal Medicine Museum on site gives good context before wandering the stalls.',
        notes: []
      },
      {
        label: 'Midday — Dapsimni Antiques Market',
        icon: '🧸',
        content: 'Dapsimni Antiques Market (an Instagram find), just down the road — a sprawling, less-touristed market for antiques, vintage furniture, and curios.',
        address: 'Dapsimni Antiques Market, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — DDP & Goto Mall',
        icon: '🛍️',
        content: 'Dongdaemun Design Plaza (DDP), Zaha Hadid\u2019s landmark building, for architecture and design exhibits, followed by gradus (grds), sourced from the guidebook. Goto Mall\u2019s underground shopping arcade is close by if there\u2019s time.',
        notes: []
      },
      {
        label: 'Evening — Food',
        icon: '🍧',
        content: 'Sulbing, Dongdaemun branch, for shaved ice to close out the day.',
        address: 'Sulbing, Dongdaemun, Seoul',
        notes: []
      }
    ]
  },
  {
    id: 13,
    date: 'Friday, October 30 — Jamsil',
    location: 'Seoul',
    sublocation: 'Jamsil',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    highlights: [
      { icon: '🎨', text: 'Color Analysis — Hybrid Rainbow Studio' },
      { icon: '🗼', text: 'Lotte World Tower / Seoul Sky' },
      { icon: '🛍️', text: 'Lotte World Mall' },
      { icon: '🍹', text: 'VIBD BLVD' }
    ],
    sections: [
      {
        label: 'Morning — Color Analysis',
        icon: '🎨',
        content: 'Personal color analysis at Hybrid Rainbow Studio — run by a native English-speaking, dual-licensed (Korean/Japanese system) consultant, no interpreter needed. Sessions run 45–90 minutes depending on package (fashion-only vs. fashion + makeup) and use full draping with 500+ fabric colors.',
        address: 'Hybrid Rainbow Studio · Unit 204, Jeongmyeong Building, 24 Baekjaegobunro 45-gil, Songpa-gu, Seoul',
        notes: [
          { type: 'warning', text: 'Book several weeks ahead — English sessions fill up fast, especially in October. Reserve via their booking site and confirm which package (fashion vs. fashion + makeup).' }
        ]
      },
      {
        label: 'Midday — Lotte World Tower / Seoul Sky',
        icon: '🗼',
        content: 'Jamsil is anchored by Lotte World Tower — Korea\u2019s tallest building. Head up to the Seoul Sky observation deck for panoramic views over the Han River while you\u2019re already in the neighborhood.',
        address: 'Lotte World Tower, Jamsil, Songpa-gu, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Lotte World Mall & Seokchon Lake',
        icon: '🛍️',
        content: 'Shop Lotte World Mall (duty-free, department store, and a wide mix of Korean and international brands), then walk off the color-analysis high with a loop around Seokchon Lake next door.',
        address: 'Lotte World Mall, Jamsil, Seoul',
        notes: []
      },
      {
        label: 'Evening — Drinks',
        icon: '🍹',
        content: 'VIBD BLVD, an NYT pick, for a last relaxed evening — worth the short subway ride back toward Gangnam from Jamsil.',
        address: 'VIBD BLVD, Seoul',
        notes: []
      }
    ]
  },
  {
    id: 14,
    date: 'Saturday, October 31 — Departure',
    location: 'Seoul',
    sublocation: 'Namdaemun',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · Checkout',
    highlights: [
      { icon: '🛒', text: 'Namdaemun Market' },
      { icon: '📚', text: 'Youngpoong Bookstore' },
      { icon: '✈️', text: 'Depart 5:30pm' }
    ],
    sections: [
      {
        label: 'Check-Out',
        icon: '🏨',
        content: 'Check out of the Seoul Myeongdong hotel.',
        notes: []
      },
      {
        label: 'Morning — Namdaemun Market',
        icon: '🛒',
        content: 'Namdaemun Market is a 10-minute walk from the hotel — Korea\u2019s oldest and largest traditional market, good for last-minute food stalls, kitchenware, and souvenirs without needing to go far on a travel day.',
        address: 'Namdaemun Market, Jung-gu, Seoul',
        notes: []
      },
      {
        label: 'Late Morning — Free Time',
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
    { name: 'Seoul Myeongdong Hotel', detail: 'Confirmed · Confirmation #42971084 · Oct 25–31' },
    { name: 'Hybrid Rainbow Studio — Color Analysis', detail: 'Not yet booked · Oct 30 · Jamsil, Songpa-gu · book several weeks ahead' }
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
      { name: 'Yun Seoul', note: 'Want to go · NYT' },
      { name: 'Jayeondo Sogeumppang', note: 'Salt bread, Seongsu — pair with a return trip to the neighborhood' }
    ],
    cafesTea: [
      { name: 'Lao Sanghai', note: 'Tea · Reddit' },
      { name: 'Ace 4 club', note: 'Want to go · NYT' },
      { name: 'Dadole', note: 'Tea · not yet slotted' }
    ],
    shopping: [
      { name: 'Shinsegae Department Store Main Store', note: 'General shopping' },
      { name: 'Musinsa Standard', note: 'Want to go' },
      { name: 'SUPY Myeongdong', note: "Men's shopping" },
      { name: 'Random Walk', note: "Men's shopping" },
      { name: 'Coor', note: 'Want to go' },
      { name: 'Ourselves', note: 'Want to go' },
      { name: 'Kyobo Book Centre Gangnam', note: '' },
      { name: 'LCDC Seoul', note: 'Concept store, Seongsu — not yet slotted' },
      { name: 'Beaker', note: 'Concept store, Hannam/Itaewon — not yet slotted' },
      { name: 'NIFTYDO', note: 'Spyplane pick, Hannam/Itaewon — not yet slotted' },
      { name: 'Unipair', note: 'Hannam/Itaewon — not yet slotted' }
    ],
    markets: [
      { name: 'COEX Convention & Exhibition Center', note: '' },
      { name: 'Koreal Color', note: 'Want to go' },
      { name: 'GU Clinic', note: 'Want to go' }
    ]
  }
};
