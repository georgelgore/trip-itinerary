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
      { icon: '🎨', text: 'KCDF Gallery' },
      { icon: '🍴', text: 'Sinsajeon / Koong' }
    ],
    sections: [
      {
        label: 'Flight — Arrival at Incheon',
        icon: '✈️',
        content: 'Arrive Incheon International Airport (ICN) at 3:20pm.',
        address: 'Incheon International Airport (ICN)',
        notes: [
          { type: 'warning', text: 'Add flight number and terminal once booked.' }
        ]
      },
      {
        label: 'Transfer & Check-In',
        icon: '🏨',
        content: 'ICN to Insadong is about an hour: AREX express train to Seoul Station (~45 min), then Line 1 two stops to Jonggak and a 5-min walk; or a taxi straight to the hotel (~60–80 min, more in rush hour). Check in to Hotel Sunbee Insadong — a quiet side street just off the main Insadong pedestrian street, 5 min walk to Jonggak Station (Line 1) and 7 min to Anguk Station (Line 3).',
        address: 'Hotel Sunbee Insadong · 26 Insadong 7-gil, Seoul',
        notes: [
          { type: 'reservation', text: 'Confirmed · Check-in Oct 18 · Check-out Oct 21' }
        ]
      },
      {
        label: 'Late Afternoon — Insadong-gil & Ssamziegil',
        icon: '🚶',
        content: 'Once settled, walk Insadong-gil itself — the pedestrian street lined with galleries, stationery shops, and tea houses — and duck into Ssamziegil, a spiral-ramped complex of small design and craft shops. The KCDF Gallery Shop, right on Insadong-gil, is worth a look too — a well-curated selection of contemporary Korean craft. Easy, jet-lag-friendly, and right outside the hotel.',
        address: 'Ssamziegil, Insadong, Seoul',
        notes: []
      },
      {
        label: 'Evening — Settle In',
        icon: '🌆',
        content: 'Keep it light given the flight. Dinner at Sinsajeon, an easy walk from Insadong — saved from the "Want to go" list. Koong (Gaeseong Mandu Koong), the Michelin Bib Gourmand dumpling house also in Insadong, is a good alternative if you\u2019d rather eat lighter after the flight.',
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
      { icon: '🍲', text: 'Tosokchon Samgyetang' },
      { icon: '🛍️', text: 'Samcheong-dong-gil' }
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
          { type: 'warning', text: 'Palace is closed on Tuesdays, so it has to be today — worth double-checking hours closer to the date.' }
        ]
      },
      {
        label: 'Lunch — Tosokchon Samgyetang',
        icon: '🍲',
        content: 'Tosokchon Samgyetang, a few minutes from the palace\u2019s west gate — one of Seoul\u2019s best-known spots for ginseng chicken soup, and about as traditional a lunch as it gets in this neighborhood. Ogawa, a well-regarded sushi counter tucked into a small underground mall in nearby Dangju-dong, is a good alternative if you\u2019d rather do Japanese.',
        address: 'Tosokchon Samgyetang, Jongno-gu, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Bukchon Hanok Village Walk',
        icon: '🏘️',
        content: 'Wander the sloped lanes of Bukchon Hanok Village, one of Seoul\u2019s best-preserved traditional neighborhoods — a mix of centuries-old hanok homes, small craft studios, and photo-friendly overlooks toward the palace and Namsan.',
        address: 'Bukchon Hanok Village, Jongno-gu, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Samcheong-dong-gil Shopping',
        icon: '🛍️',
        content: 'Pop into the boutiques along Samcheong-dong-gil for ceramics, stationery, and small galleries. (The Seoul Museum of Craft Art is right nearby, but it\u2019s closed Mondays — it moves to Oct 28, when it\u2019s open, along with the rest of this neighborhood cluster.)',
        address: 'Samcheong-dong-gil, Jongno-gu, Seoul',
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
    date: 'Tuesday, October 20 — Hongdae & Yeonnam-dong',
    location: 'Seoul',
    sublocation: 'Hongdae & Yeonnam-dong',
    theme: 'seoul',
    stay: 'Hotel Sunbee Insadong · Seoul (Oct 18–21)',
    highlights: [
      { icon: '🎨', text: 'Color Analysis — Vic\u2019s Lab Korea' },
      { icon: '🌳', text: 'Yeonnam-dong Forest Park' },
      { icon: '🛍️', text: 'Mangridan-gil' },
      { icon: '🍴', text: 'Yeonnam-dong dinner' }
    ],
    sections: [
      {
        label: 'Morning — Color Analysis',
        icon: '🎨',
        content: 'Personal color analysis at Vic\u2019s Lab Korea — founded 2016 as Korea\u2019s only personal-color consultancy dedicated exclusively to international clients, so it\u2019s English throughout, no interpreter needed. Full draping session plus makeup and product recommendations.',
        address: 'Vic\u2019s Lab Korea \u00b7 15 World Cup buk-ro 4-gil, Mapo-gu, Seoul [3F]',
        notes: [
          { type: 'warning', text: 'Book several weeks ahead via Kakao (vicslabkorea) or WhatsApp (+82 10 6455 2010) \u2014 published hours aren\u2019t listed online, so confirm the exact appointment time and session length when you reserve.' }
        ]
      },
      {
        label: 'Late Morning — Yeonnam-dong Forest Park Walk',
        icon: '🌳',
        content: 'Walk the Gyeongui Line Forest Park through Yeonnam-dong — a converted rail line turned narrow park, lined with indie boutiques, secondhand shops, and cafes on either side. An easy stroll back toward Hongdae from the studio.',
        address: 'Gyeongui Line Forest Park, Yeonnam-dong, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Mangridan-gil & Mangwon Market',
        icon: '🛍️',
        content: 'A short subway hop (or a 15-min walk) north to Mangwon-dong for Mangridan-gil — a low-key alley of independent boutiques, record shops, and cafes, a step quieter than Hongdae itself. Mangwon Market, the traditional market it grew up around, is right there too.',
        address: 'Mangridan-gil, Mangwon-dong, Mapo-gu, Seoul',
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
    stay: 'voco Seoul Myeongdong · check-in',
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
        label: 'Check-In — voco Seoul Myeongdong',
        icon: '🏨',
        content: 'Check in to voco Seoul Myeongdong. Right on Toegye-ro in Jung-gu — Myeongdong Station (Line 4) and Namdaemun Market are both a short walk away.',
        address: 'voco Seoul Myeongdong · 52, Toegye-ro, Jung-gu, Seoul 04634, Korea',
        notes: [
          { type: 'reservation', text: 'Hotel confirmed · Confirmation #42971084 · Oct 25–31' }
        ]
      }
    ]
  },
  {
    id: 9,
    date: 'Monday, October 26 — Yongsan & Noryangjin',
    location: 'Seoul',
    sublocation: 'Yongsan & Noryangjin',
    theme: 'seoul',
    stay: 'voco Seoul Myeongdong · 52 Toegye-ro, Jung-gu · confirmation #42971084',
    highlights: [
      { icon: '🐟', text: 'Noryangjin Fish Market' },
      { icon: '🏛️', text: 'National Museum of Korea' },
      { icon: '🍴', text: 'Fresh seafood lunch' }
    ],
    sections: [
      {
        label: 'Morning — Noryangjin Fish Market',
        icon: '🐟',
        content: 'Go early for the real wholesale-market energy — pick your own fish, shellfish, or octopus on the market floor, then have it prepared sashimi-style at one of the upstairs restaurants for an unusual breakfast or early lunch.',
        address: 'Noryangjin Fish Market, Dongjak-gu, Seoul',
        notes: []
      },
      {
        label: 'Midday — Travel to Yongsan',
        icon: '🚇',
        content: 'Short subway hop from Noryangjin to Ichon Station (Jungang Line or Line 4) — about 15–20 minutes door to door.',
        notes: []
      },
      {
        label: 'Afternoon — National Museum of Korea',
        icon: '🏛️',
        content: 'Korea\u2019s largest museum, covering everything from prehistory through the Joseon dynasty — worth budgeting a few hours. Open daily except major holidays; closed one Monday per quarter (March, June, September, December), which doesn\u2019t fall on this date in 2026.',
        address: 'National Museum of Korea, Yongsan-gu, Seoul',
        notes: []
      },
      {
        label: 'Evening — Food',
        icon: '🍴',
        content: 'Dinner near Ichon or Yongsan Station, or head back toward Myeongdong — not yet pinned down.',
        notes: [
          { type: 'warning', text: 'Dinner spot still TBD for this day.' }
        ]
      }
    ]
  },
  {
    id: 10,
    date: 'Tuesday, October 27 — Icheon Day Trip (Pottery)',
    location: 'Icheon',
    sublocation: 'Ceramics Village',
    theme: 'seoul',
    stay: 'voco Seoul Myeongdong · 52 Toegye-ro, Jung-gu · confirmation #42971084',
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
    date: 'Wednesday, October 28 — Jongno & Ikseon-dong',
    location: 'Seoul',
    sublocation: 'Jongno & Ikseon-dong',
    theme: 'seoul',
    stay: 'voco Seoul Myeongdong · 52 Toegye-ro, Jung-gu · confirmation #42971084',
    highlights: [
      { icon: '🏘️', text: 'Ikseon-dong-gil' },
      { icon: '🎨', text: 'Seoul Museum of Craft Art' },
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
        label: 'Late Morning — Ikseon-dong-gil',
        icon: '🏘️',
        content: 'Walk over to Ikseon-dong-gil — Seoul\u2019s smallest hanok village, now packed with boutique cafes, indie fashion shops, and small galleries tucked into century-old houses.',
        address: 'Ikseon-dong-gil, Jongno-gu, Seoul',
        notes: []
      },
      {
        label: 'Lunch — Temple Cuisine or Modern Korean',
        icon: '🍱',
        content: 'Three good options right in this cluster: Balwoo Gongyang, the Michelin-starred temple-cuisine restaurant a few minutes from Jogyesa Temple; A Flower Blossom on the Rice, a Michelin-recommended modern Korean tasting menu nearby in Gwanhun-dong; or Koong (Gaeseong Mandu Koong), a Michelin Bib Gourmand spot for North Korean-style dumplings, if you\u2019d rather save the sit-down meal for dinner and keep lunch casual.',
        address: 'Insadong / Gwanhun-dong, Jongno-gu, Seoul',
        notes: [
          { type: 'warning', text: 'Balwoo Gongyang and A Flower Blossom on the Rice both take reservations \u2014 worth booking ahead given the Michelin attention.' }
        ]
      },
      {
        label: 'Midday — Seoul Museum of Craft Art',
        icon: '🎨',
        content: 'A short walk to the Seoul Museum of Craft Art near Anguk — it\u2019s closed Mondays, so it moves here from earlier in the trip. The guidebook flags a good gift shop on site.',
        address: 'Seoul Museum of Craft Art, Jongno-gu, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Jogyesa Temple',
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
    id: 12,
    date: 'Thursday, October 29 — Dongdaemun & Jegi-dong',
    location: 'Seoul',
    sublocation: 'Dongdaemun & Jegi-dong',
    theme: 'seoul',
    stay: 'voco Seoul Myeongdong · 52 Toegye-ro, Jung-gu · confirmation #42971084',
    highlights: [
      { icon: '☕', text: 'Cha Cha Tea Club' },
      { icon: '🌿', text: 'Yangnyeongsi Medicine Market' },
      { icon: '🛍️', text: 'DDP' },
      { icon: '💆', text: 'EcoJardin Myeongdong' }
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
        content: 'Sulbing, Dongdaemun branch, for shaved ice on the way out of the neighborhood.',
        address: 'Sulbing, Dongdaemun, Seoul',
        notes: []
      },
      {
        label: 'Evening — Hair/Scalp Treatment at EcoJardin',
        icon: '💆',
        content: 'Head back toward the hotel for EcoJardin Myeongdong \u2014 a 3-minute walk from Myeongdong Station, a few subway stops from Dongdaemun. Lighter day than Icheon, so there\u2019s room for this without it feeling like too much. English-speaking staff (English, Japanese, and Chinese service). Open until 10pm on weekdays. Offers K-style cuts, 9/15/18-step scalp treatments, keratin treatment, perms, and coloring.',
        address: 'EcoJardin Myeongdong \u00b7 3F, 8-10 Myeongdong 8-gil, Jung-gu, Seoul',
        notes: [
          { type: 'warning', text: 'Book ahead \u2014 reserve online or by phone, and confirm which treatment/how long it runs so it comfortably fits before the 10pm close.' }
        ]
      }
    ]
  },
  {
    id: 13,
    date: 'Friday, October 30 — Hannam-dong & Itaewon',
    location: 'Seoul',
    sublocation: 'Hannam-dong & Itaewon',
    theme: 'seoul',
    stay: 'voco Seoul Myeongdong · 52 Toegye-ro, Jung-gu · confirmation #42971084',
    highlights: [
      { icon: '🖼️', text: 'Leeum Museum of Art' },
      { icon: '🛍️', text: 'Beaker & NIFTYDO' },
      { icon: '🪑', text: 'Itaewon Antique Furniture St.' },
      { icon: '🍹', text: 'VIBD BLVD / Shortbus' }
    ],
    sections: [
      {
        label: 'Morning — Leeum Museum of Art',
        icon: '🖼️',
        content: 'Samsung\u2019s museum of traditional and contemporary Korean art in Hannam-dong — three buildings designed by Mario Botta, Jean Nouvel, and Rem Koolhaas. Closed Mondays, so today works fine.',
        address: 'Leeum Museum of Art, Hannam-dong, Yongsan-gu, Seoul',
        notes: []
      },
      {
        label: 'Midday — Concept Store Shopping',
        icon: '🛍️',
        content: 'Hannam-dong and neighboring Itaewon are dense with concept and design stores — Beaker, NIFTYDO (a Spyplane pick), and Unipair, all saved finds worth working into a loop.',
        notes: []
      },
      {
        label: 'Afternoon — Itaewon Antique Furniture Street',
        icon: '🪑',
        content: 'A cluster of multi-level antique and vintage furniture shops along the street behind the Hamilton Hotel — Korean, Japanese, and European pieces, plus smaller decorative antiques. Worth a browse even if you\u2019re not shipping furniture home.',
        address: 'Itaewon Antique Furniture Street, Itaewon-dong, Yongsan-gu, Seoul',
        notes: []
      },
      {
        label: 'Evening — Drinks',
        icon: '🍹',
        content: 'VIBD BLVD, an NYT pick, for a last relaxed evening — or Shortbus, a cozy LGBTQ+ corner bar also in Itaewon, if you\u2019re after something more low-key and neighborhood-y.',
        address: 'VIBD BLVD / Shortbus, Itaewon, Seoul',
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
    stay: 'voco Seoul Myeongdong · Checkout',
    highlights: [
      { icon: '🛒', text: 'Namdaemun Market' },
      { icon: '🧵', text: 'Kukje Embroidery' },
      { icon: '🛍️', text: 'Aland & Su;py' },
      { icon: '✈️', text: 'Depart 5:30pm' }
    ],
    sections: [
      {
        label: 'Check-Out',
        icon: '🏨',
        content: 'Check out of voco Seoul Myeongdong.',
        notes: []
      },
      {
        label: 'Morning — Namdaemun Market',
        icon: '🛒',
        content: 'Namdaemun Market is a 10-minute walk from the hotel — Korea\u2019s oldest and largest traditional market, good for last-minute food stalls, kitchenware, and souvenirs without needing to go far on a travel day. Look for Kukje Embroidery inside the market for traditional Korean embroidery and notions.',
        address: 'Namdaemun Market, Jung-gu, Seoul',
        notes: []
      },
      {
        label: 'Late Morning — Myeongdong Shopping',
        icon: '🛍️',
        content: 'Myeongdong is right next to Namdaemun and to the hotel, so it\u2019s an easy last stop — Aland\u2019s flagship for multi-brand Korean fashion, and Su;py (SUPY) for menswear. Alkimia Seo Chon Ice Cream (an NYT pick) or Youngpoong Bookstore Jongno Main Branch are also nearby if there\u2019s time.',
        address: 'Myeongdong, Jung-gu, Seoul',
        notes: []
      },
      {
        label: 'Flight — Departure from Incheon',
        icon: '✈️',
        content: 'Depart Incheon International Airport (ICN) at 5:30pm. Leave Myeongdong by ~1:30pm — AREX from Seoul Station (~45 min to ICN) or taxi (~60–80 min) — to be at the airport 3 hours ahead for an international departure.',
        address: 'Incheon International Airport (ICN)',
        notes: [
          { type: 'warning', text: 'Add flight number and terminal once booked. Leave the hotel bags at reception after check-out so the morning stays hands-free.' }
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
    { name: 'voco Seoul Myeongdong', detail: 'Confirmed · Confirmation #42971084 · Oct 25–31 · 52, Toegye-ro, Jung-gu, Seoul 04634' },
    { name: 'Vic\u2019s Lab Korea — Color Analysis', detail: 'Not yet booked · Oct 20 · Hongdae, Mapo-gu · book via Kakao/WhatsApp several weeks ahead' },
    { name: 'EcoJardin Myeongdong — Hair/Scalp Treatment', detail: 'Not yet booked · Evening of Oct 29 · 3F, 8-10 Myeongdong 8-gil · open to 10pm weekdays' }
  ],
  transit: [
    { name: 'Arrival Flight', detail: 'Lands Incheon (ICN) 3:20pm, Oct 18 — add flight number once booked' },
    { name: 'ICN → Insadong', detail: 'AREX express to Seoul Station (~45 min) + Line 1 to Jonggak · or taxi ~60–80 min' },
    { name: 'Departure Flight', detail: 'Departs Incheon (ICN) 5:30pm, Oct 31 — leave Myeongdong by ~1:30pm · add flight number once booked' },
    { name: 'GMP → CJU (Oct 21)', detail: 'Depart Gimpo Terminal D 9:10am · Arrive Jeju 10:25am · 1h 15m' },
    { name: 'CJU → GMP (Oct 25)', detail: 'Depart Jeju 9:50am · Arrive Gimpo Terminal D 11:05am · 1h 15m' },
    { name: 'Icheon Day Trip (Oct 27)', detail: 'From Seoul, ~1–1.5 hrs each way by car or bus — transport TBD' }
  ],
  // Saved Google Maps pins not yet slotted into a specific day — pull from here when filling in TBD sections.
  // Flat array of { name, detail } — QUICK_REF categories must be flat arrays like this;
  // shared/app.js's search indexer does `items.forEach(...)` on every top-level QUICK_REF
  // key without checking its shape, so a nested object here (or in any category) throws
  // and breaks search sitewide the moment someone types a query.
  pinnedSpots: [
    { name: 'Sancheong Charcoal Garden Euljiro', detail: 'Food · Want to go · YouTube' },
    { name: 'Eulmildae', detail: 'Food · IG cold noodles' },
    { name: 'Mandong Bakery', detail: 'Food · Want to go · YouTube' },
    { name: 'Yun Seoul', detail: 'Food · Want to go · NYT' },
    { name: 'Jayeondo Sogeumppang', detail: 'Food · Salt bread, Seongsu — pair with a return trip to the neighborhood' },
    { name: 'Lao Sanghai', detail: 'Cafe/Tea · Reddit' },
    { name: 'Ace 4 club', detail: 'Cafe/Tea · Want to go · NYT' },
    { name: 'Dadole', detail: 'Cafe/Tea · not yet slotted' },
    { name: 'Shinsegae Department Store Main Store', detail: 'Shopping · General shopping' },
    { name: 'Musinsa Standard', detail: 'Shopping · Want to go' },
    { name: 'Random Walk', detail: "Shopping · Men's shopping" },
    { name: 'Coor', detail: 'Shopping · Want to go' },
    { name: 'Ourselves', detail: 'Shopping · Want to go' },
    { name: 'Kyobo Book Centre Gangnam', detail: 'Shopping' },
    { name: 'LCDC Seoul', detail: 'Shopping · Concept store, Seongsu — not yet slotted' },
    { name: 'COEX Convention & Exhibition Center', detail: 'Market/Venue' },
    { name: 'Koreal Color', detail: 'Market/Venue · Want to go' },
    { name: 'GU Clinic', detail: 'Market/Venue · Want to go' },
    { name: 'The Hyundai Seoul', detail: 'Needs a day \u2014 flagship department store in Yeouido, architecturally notable, but across the river from every current day.' },
    { name: 'Seoul Botanic Park', detail: 'Needs a day \u2014 Gangseo-gu, next to Gimpo Airport (GMP), the opposite side of the city from ICN, so not a pre-departure stop.' }
  ]
};

// Day 9 was originally a Seongsu-dong day (tea, Seoul Forest, ceramics shopping, dinner)
// before it was swapped for Yongsan & Noryangjin on Oct 26. This isn't a feature the app
// renders — just a working note in case you want to swap back manually:
//   Morning — Tea: Sumuqa Tea Room
//   Late Morning — Seoul Forest (Seongdong-gu)
//   Afternoon — Ceramics & Design Shopping: EDEN POTTERY, OJASEOUL by OJACRAFT, Narrative
//     Object, plus Seongsu's converted-warehouse concept stores (Daelim Changgo Warehouse,
//     Common Ground container mall)
//   Evening — Food: Buchon Yukhoe Main Store
