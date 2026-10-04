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
      { icon: '🥟', text: 'Gaeseong Mandu Koong' }
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
        content: 'Keep it light given the flight. Dinner at Koong (Gaeseong Mandu Koong), the Michelin Bib Gourmand dumpling house on Insadong-gil, a few minutes from the hotel. Walk-in only; expect a short queue.',
        address: 'Gaeseong Mandu Koong, Insadong-gil, Jongno-gu, Seoul',
        notes: [
          { type: 'warning', text: 'Sunday hours are 11:30am\u20138pm, last order 7:10pm, so go by about 6:30. Sinsajeon (from the "Want to go" list) turned out to be in Sinsa-dong, Gangnam, about 30 minutes away, not near Insadong.' }
        ]
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
        label: 'Breakfast — Cheongjinok',
        icon: '🍲',
        content: 'Haejangguk (beef-bone soup) at Cheongjinok, a Jongno institution since 1937 and a Seoul Future Heritage site. The broth simmers for over a day. Aim for about 8:00am. It’s a short walk from the hotel and about 10 minutes on foot to Gwanghwamun, the palace’s main gate.',
        address: 'Cheongjinok · 32 Jong-ro 3-gil, Jongno-gu, Seoul',
        notes: [
          { type: 'info', text: 'Open daily 6am\u201310pm, no closing days. Walk-in only.' }
        ]
      },
      {
        label: 'Morning — Gyeongbokgung Palace & National Folk Museum',
        icon: '🏯',
        content: 'Be at Gwanghwamun for the 9:00am opening, while the courtyards are still quiet. Gyeongbokgung is the largest of Seoul’s Five Grand Palaces. Then duck into the National Folk Museum of Korea on the palace grounds, a good overview of Korean daily life and craft history before diving into Bukchon’s workshops. The changing of the guard runs at Gwanghwamun at 10:00am, so you can catch it on the way out.',
        address: 'Gyeongbokgung Palace, Jongno-gu, Seoul',
        notes: [
          { type: 'warning', text: 'Opens 9:00am (Oct hours 9:00–18:00, last entry 17:00). Closed Tuesdays, so it has to be today. Double-check hours closer to the date.' },
          { type: 'info', text: 'National Folk Museum: open Mondays, but its Exhibition Hall 1 is closed for maintenance from Sep 30 to about Dec 21.' }
        ]
      },
      {
        label: 'Lunch — Tosokchon Samgyetang',
        icon: '🍲',
        content: 'Tosokchon Samgyetang, a few minutes from the palace\u2019s west gate — one of Seoul\u2019s best-known spots for ginseng chicken soup, and about as traditional a lunch as it gets in this neighborhood. Ogawa, a well-regarded sushi counter tucked into a small underground mall in nearby Dangju-dong, is a good alternative if you\u2019d rather do Japanese. Muguok, near Anguk Station, is the other samgyetang option: a Michelin-listed spot doing a North Korean-style version, and an easy walk from the palace\u2019s east side.',
        address: 'Tosokchon Samgyetang, Jongno-gu, Seoul',
        notes: [
          { type: 'info', text: 'Both are walk-in only. Tosokchon is open daily 10am\u201310pm. Muguok runs a waitlist: sign up on site from 10:30am, or remotely in the Catch Table app from noon.' }
        ]
      },
      {
        label: 'Afternoon — Bukchon Hanok Village Walk',
        icon: '🏘️',
        content: 'Wander the sloped lanes of Bukchon Hanok Village, one of Seoul\u2019s best-preserved traditional neighborhoods — a mix of centuries-old hanok homes, small craft studios, and photo-friendly overlooks toward the palace and Namsan.',
        address: 'Bukchon Hanok Village, Jongno-gu, Seoul',
        notes: [
          { type: 'info', text: 'Follow the Bukchon walk on page 61 of the tour book.' }
        ]
      },
      {
        label: 'Afternoon — Bukchon Craft Shops',
        icon: '🐚',
        content: 'Two craft stops along the Bukchon walk:\n\u2022 Jinjoo Shell: a three-generation najeonchilgi (mother-of-pearl inlay) maker with a shop in Gahoe-dong. They also run 60-minute classes where you inlay a small piece like a mirror, box or card case.\n\u2022 Saeksil Nubi: a traditional colored-thread quilting workshop in a public hanok. You can see finished pieces, and they offer a 50-minute quilting experience (\u20a915,000).',
        address: 'Jinjoo Shell \u00b7 #301, 172-1 Gahoe-dong (Anguk Station exit 2) \u00b7 Saeksil Nubi \u00b7 17 Bukchon-ro 12-gil, Jongno-gu, Seoul',
        notes: [
          { type: 'info', text: 'Jinjoo Shell classes run Mon/Wed/Fri/Sat at 11:30am and 2pm; book online at least 2 days ahead. The 2pm class would run right up to the 3pm seal class.' },
          { type: 'warning', text: 'Saeksil Nubi is listed as open 10am\u20135pm, but closed days aren\u2019t published. Call +82 2-733-2577 to confirm it\u2019s open on a Monday.' }
        ]
      },
      {
        label: '3:00pm — Seal Carving Class',
        icon: '🪨',
        content: 'Carve your own dojang (Korean name seal) into stone with a traditional engraving knife, guided by an English-speaking calligrapher at Feel So Good Calli Studio. Two hours; you leave with the finished seal in a case. The studio is by Anguk Station, between Bukchon and Samcheong-dong.',
        address: 'Feel So Good Calli Studio · 3F, 147 Gwanhun-dong, Jongno-gu, Seoul (Anguk Station exit 6)',
        notes: [
          { type: 'reservation', text: 'Book online ahead (Trazy lists it). Monday session starts at 3pm and runs 2 hours. Closed Sundays.' }
        ]
      },
      {
        label: 'Late Afternoon — Samcheong-dong-gil Shopping',
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
        notes: [
          { type: 'warning', text: 'Closes early: last order 7:50pm, with a 3\u20135pm break. Closed Sundays. Walk-in only.' }
        ]
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
      { icon: '🎨', text: 'Color Analysis — Vic’s Lab Korea' },
      { icon: '🦀', text: 'Hwahaedang (crab lunch)' },
      { icon: '🛍️', text: 'Mangridan-gil' },
      { icon: '🥟', text: 'Ipum dinner' }
    ],
    sections: [
      {
        label: 'Morning — Color Analysis',
        icon: '🎨',
        content: '10:50 AM to about 12:00 PM (1 hr 10 min): [1:2] Signature Color Analysis for two at Vic’s Lab Korea — founded 2016 as Korea’s only personal-color consultancy dedicated exclusively to international clients, so it’s English throughout, no interpreter needed. Full draping session plus makeup and product recommendations.',
        address: 'Vic’s Lab Korea · 15 World Cup buk-ro 4-gil, Mapo-gu, Seoul [3F]',
        notes: [
          { type: 'reservation', text: 'Confirmed by email: Oct 20 at 10:50 AM, 2 people. Prepayment already made through EXIMLink.' },
          { type: 'cash', text: 'Remaining balance is due at the studio: pay in KRW cash, or with your own overseas credit card through EXIMLink (same system as the prepayment).' },
          { type: 'warning', text: 'Arrive by 10:40 AM. More than 20 minutes late and the appointment is cancelled with no refund of the prepayment.' },
          { type: 'info', text: 'Prep: no color makeup or colored lenses (non-tinted sunscreen and clear lenses are fine). Skip any treatment that leaves skin red or flushed beforehand. Wear something that shows your neck, no turtlenecks or high collars.' },
          { type: 'info', text: 'Contact: Kakao (vicslabkorea) or WhatsApp (+82 10 6455 2010).' }
        ]
      },
      {
        label: 'Lunch — Hwahaedang',
        icon: '🦀',
        content: 'Taxi across the river to Yeouido (about 20 minutes from Hongdae) for ganjang gejang, soy-marinated raw blue crab, at Hwahaedang. It’s the Seoul branch of a well-known restaurant in Taean on the west coast, where the crabs are caught and marinated before being shipped up. Michelin Bib Gourmand, with a spread of seafood side dishes.',
        address: 'Hwahaedang · 15 Gukhoe-daero 62-gil, Yeongdeungpo-gu (Yeouido), Seoul',
        notes: [
          { type: 'reservation', text: 'Book by phone: +82 2-785-4422. Lunch only, 11am–3pm, Tue–Sat (closed Sun & Mon), so today is the only day it fits.' },
          { type: 'warning', text: 'If the color analysis runs long, keep an eye on the 3pm close.' }
        ]
      },
      {
        label: 'Afternoon — Mangridan-gil & Mangwon Market',
        icon: '🛍️',
        content: 'Taxi back over the river (about 15 minutes) to Mangwon-dong for Mangridan-gil — a low-key alley of independent boutiques, record shops, and cafes, a step quieter than Hongdae itself. Mangwon Market, the traditional market it grew up around, is right there too.',
        address: 'Mangridan-gil, Mangwon-dong, Mapo-gu, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Geochang Yugi Showroom',
        icon: '🥣',
        content: 'Seoul showroom of Geochang Yugi, a four-generation, 100-year family maker of yugi (Korean hand-forged brass tableware). It\u2019s in Mangwon-dong, a few minutes from Mangridan-gil.',
        address: 'Geochang Yugi \u00b7 1F Banseok Building, 23 Huiujeong-ro 3-gil, Mapo-gu, Seoul',
        notes: [
          { type: 'info', text: 'Weekdays 9am\u20136pm, closed 12:30\u20131:30pm for lunch and on weekends. Phone +82 2-332-6249; worth calling ahead.' }
        ]
      },
      {
        label: 'Late Afternoon — Yeonnam-dong Forest Park Walk',
        icon: '🌳',
        content: 'Walk the Gyeongui Line Forest Park through Yeonnam-dong — a converted rail line turned narrow park, lined with indie boutiques, secondhand shops, and cafes on either side. It ends near Yeonhui-dong, where dinner is.',
        address: 'Gyeongui Line Forest Park, Yeonnam-dong, Seoul',
        notes: []
      },
      {
        label: 'Snacks — Mandong Bakery & Ramen Library',
        icon: '🥖',
        content: 'Two Hongdae snack stops to work in when you pass through: Mandong Bakery, known for its garlic bread, and the CU "Ramen Library" convenience store, a wall of instant ramyeon you cook yourself at the in-store machines.',
        address: 'Hongdae, Mapo-gu, Seoul',
        notes: []
      },
      {
        label: 'Dinner — Ipum',
        icon: '🥟',
        content: 'Ipum in Yeonhui-dong, right next to Yeonnam: a Korean-Chinese spot known for jjajangmyeon and crispy dumplings.',
        address: 'Ipum · 20 Yeonhui-ro 11-gil, Seodaemun-gu, Seoul',
        notes: [
          { type: 'info', text: 'Dinner service 5–9pm (lunch 11am–3pm). Closed Sundays.' }
        ]
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
        label: '10:00am — Book Secret Garden Tour',
        icon: '📲',
        content: 'Booking for the Oct 28 Huwon Secret Garden tour opens at 10:00am KST today. Book the 10:30 English tour at ticket.uforus.co.kr before heading out. The popular slots go quickly.',
        url: 'https://ticket.uforus.co.kr/web/main?shopEncode=&lang=en',
        notes: [
          { type: 'reservation', text: 'Book right at 10:00am. 5,000 KRW, plus a separate Changdeokgung ticket on the day.' }
        ]
      },
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
      },
      {
        label: 'Lunch — Apgujeong Sanghoe',
        icon: '🍜',
        content: 'Drop the bags at the hotel, then head to Apgujeong (about 30 minutes by subway or taxi) for a late lunch at Apgujeong Sanghoe: buckwheat makguksu dressed in freshly pressed perilla oil, plus chicken. Then on to the Gangnam and Songpa side for the afternoon.',
        address: 'Apgujeong Sanghoe · 13-2 Seolleung-ro 155-gil, Gangnam-gu, Seoul (near Apgujeong Rodeo Station)',
        notes: [
          { type: 'info', text: 'Open daily 11am–10pm (last order 9pm). Takes reservations: +82 50-71426-8999.' }
        ]
      },
      {
        label: 'Afternoon — Bongeunsa & COEX',
        icon: '🛕',
        content: 'About 15 minutes from Apgujeong to Samseong. Bongeunsa is a 1,200-year-old Buddhist temple set right among Gangnam’s towers, with a giant standing Maitreya statue. COEX is directly across the street: the Starfield Library’s two-story bookshelf atrium is the main draw.',
        address: 'Bongeunsa · 531 Bongeunsa-ro, Gangnam-gu, Seoul (Bongeunsa Station, Line 9) · COEX across the street',
        notes: [
          { type: 'warning', text: 'Bongeunsa’s Templelife program (tea ceremony, meditation with a monk, lotus-lantern craft; ₩20,000, foreigners only) runs only on Thursdays, 2–4pm. Today is just a walk-through. To do the program, it would need to move to Thu Oct 29.' }
        ]
      },
      {
        label: 'Late Afternoon — Songpa Walk',
        icon: '🚶',
        content: 'Line 2 east to Jamsil (about 10 minutes) and follow the Songpa walking tour on page 117 of the tour book.',
        address: 'Jamsil, Songpa-gu, Seoul',
        notes: [
          { type: 'info', text: 'Follow the Songpa walk on page 117 of the tour book.' }
        ]
      },
      {
        label: 'Evening — Lotte World & Magic Island (optional)',
        icon: '🎢',
        content: 'Lotte World is at Jamsil, where the walk ends. The indoor Adventure dome is open 10am–9pm on Sundays; Magic Island, the outdoor section on Seokchon Lake, lights up after dark. Even without rides, the walk around the lake and the Magic Island castle at night is worth it. Take Line 2 straight back to Euljiro for dinner (about 35 minutes, no transfers).',
        address: 'Lotte World · 240 Olympic-ro, Songpa-gu, Seoul (Jamsil Station)',
        notes: [
          { type: 'warning', text: 'Magic Island rides close in rain, strong wind, or temperatures outside 0–30°C.' }
        ]
      },
      {
        label: 'Evening — Sancheong Charcoal Garden',
        icon: '🔥',
        content: 'A late dinner at Sancheong Charcoal Garden in Euljiro, a short walk or one subway stop from the hotel, and a direct Line 2 ride from Jamsil. Saved from the "Want to go" list.',
        address: 'Sancheong Charcoal Garden \u00b7 114-6 Eulji-ro, Jung-gu, Seoul',
        notes: [
          { type: 'info', text: 'Open daily 11:30am\u201311pm. Long waits at peak times; join the waitlist in the Catch Table app.' }
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
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
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
        label: 'Evening — Mongtan',
        icon: '🍖',
        content: 'Dinner at Mongtan near Samgakji Station, a short hop from Ichon: straw-fire-grilled beef short ribs (udae galbi) and smoky pork belly. One of the most sought-after barbecue spots in Seoul.',
        address: 'Mongtan · 50 Baekbeom-ro 99-gil, Yongsan-gu, Seoul',
        notes: [
          { type: 'warning', text: 'No reservations: on-site waitlist only (open daily 12\u201310pm). Register in person about 2\u20133 hours before you want to eat, e.g. around 3:30pm during the museum visit (Samgakji is one stop from Ichon). They call when your table is ready and you must be back within 10 minutes. Without a Korean phone number, tell the staff when you register.' }
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
        label: 'Lunch — Ssalbap',
        icon: '🍚',
        content: 'Icheon is famous for its rice, once sent to the royal court. Have ssalbap jeongsik: stone-pot Icheon rice with a full spread of banchan, grilled fish and stews. Two ideas, both open Tuesdays and a few minutes from the ceramics village on Gyeongchung-daero:\n• Imgeumnim Ssalbap-jip (임금님쌀밥집), 3134 Gyeongchung-daero, Sindun-myeon. Sets ₩19,000–46,000; the “Sura” set adds soy-marinated crab, bulgogi and dried fish. Open 10:30–21:00, closed Wednesdays.\n• Naratnim Icheon Ssalbap (나랏님이천쌀밥), 3044 Gyeongchung-daero. The whole meal arrives on one pre-set table slid into place. Sets ₩19,000–41,000. Open 10:30–20:30, break 4–5pm.',
        address: 'Gyeongchung-daero rice restaurant street, Icheon',
        notes: [
          { type: 'warning', text: 'Icheon Ssalbap-jip and Eohyangmiga are closed Tuesdays, so skip them. Naratnim’s closing day isn’t listed online; confirm before going.' }
        ]
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
        content: 'Head back to Seoul and keep dinner simple at Myeongdong Kyoja, a few minutes from the hotel: the classic kalguksu (knife-cut noodle soup) and mandu house.',
        address: 'Myeongdong Kyoja, Myeongdong, Jung-gu, Seoul',
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
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    highlights: [
      { icon: '🌳', text: 'Huwon Secret Garden' },
      { icon: '🏘️', text: 'Ikseon-dong-gil' },
      { icon: '🎨', text: 'Seoul Museum of Craft Art' },
      { icon: '🛒', text: 'Gwangjang Market' },
      { icon: '🍖', text: 'Galmaegisal Alley' }
    ],
    sections: [
      {
        label: 'Morning — Changdeokgung & Huwon Secret Garden',
        icon: '🌳',
        content: 'Start the day here: get to Changdeokgung around 10:00 to buy the palace ticket and see the main halls, then join the 10:30 English tour of Huwon, the Secret Garden: the royal family’s wooded back garden of pavilions and ponds, open only by guided tour (about 90 minutes). Late October should be near peak autumn color.',
        address: 'Changdeokgung Palace · 99 Yulgok-ro, Jongno-gu, Seoul',
        notes: [
          { type: 'reservation', text: 'Book the 10:30 English Secret Garden tour at ticket.uforus.co.kr (account required). Booking opens Oct 22 at 10:00am KST (6 days ahead) and closes 3 days before. 5,000 KRW, plus a separate palace ticket. 50 walk-up spots per tour if online sells out.' },
          { type: 'warning', text: 'Changdeokgung is closed Mondays. English tours run 10:30, 11:30, 14:30 and 15:30.' }
        ]
      },
      {
        label: 'Midday — Ikseon-dong-gil',
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
          { type: 'reservation', text: 'Balwoo Gongyang: book the 1:30pm lunch seating (closed Sundays; reserve up to a month ahead, +82 2-733-2081). A Flower Blossom on the Rice: open daily 11:30am\u20133pm, call +82 2-732-0276. Koong is walk-in only.' }
        ]
      },
      {
        label: 'Afternoon — Seoul Museum of Craft Art',
        icon: '🎨',
        content: 'A short walk to the Seoul Museum of Craft Art near Anguk — it\u2019s closed Mondays, so it moves here from earlier in the trip. The guidebook flags a good gift shop on site.',
        address: 'Seoul Museum of Craft Art, Jongno-gu, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Tea at Jidaebang',
        icon: '☕',
        content: 'Tea at Jidaebang, sourced from an Instagram find: a traditional tea house in Insadong that has been there for over 35 years, a few minutes from Jogyesa.',
        address: 'Jidaebang, Insadong, Jongno-gu, Seoul',
        notes: [
          { type: 'info', text: 'Moved from the morning: it opens at 10:30am, after you need to be at Changdeokgung. Open daily.' }
        ]
      },
      {
        label: 'Late Afternoon — Jogyesa Temple',
        icon: '🛕',
        content: 'Short stop at Jogyesa Temple, the head temple of the Jogye Order — a quiet, colorful contrast to the market streets around it, and only a few minutes\u2019 walk from Insadong.',
        address: 'Jogyesa Temple, Jongno-gu, Seoul',
        notes: []
      },
      {
        label: 'Early Evening — Gwangjang Market',
        icon: '🛒',
        content: 'Gwangjang Market — the NYT pick from the "Want to go" list. Street food, textiles, and one of Seoul\u2019s oldest markets. Get yukhoe (seasoned raw beef) at Buchon Yukhoe, the market\u2019s best-known spot for it.',
        address: 'Gwangjang Market, Seoul',
        notes: []
      },
      {
        label: 'Evening — Galmaegisal Alley (Street BBQ)',
        icon: '🍖',
        content: 'One stop from Gwangjang, the Jongno 3-ga galmaegisal alley: a lane of old-school spots grilling pork skirt meat at plastic tables out on the street. Ikseon-dong Wando Matjib is a well-known pick there; it grills aged kimchi alongside the meat. Order somaek (soju + beer). The Jongno 3-ga pojangmacha tent stalls are next door for another drink after.',
        address: 'Galmaegisal Alley · behind Jongno 3-ga Station exit 6 (Ikseon-dong Wando Matjib: 29 Donhwamun-ro 11ga-gil), Jongno-gu, Seoul',
        notes: [
          { type: 'info', text: 'Walk-in only. The alley\u2019s grills open mid-afternoon (Mi Galmaegisal: 2:30\u201311pm, closed Mondays). Gets packed after about 7pm, so go early for an outdoor table.' }
        ]
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
      { icon: '🌿', text: 'Yangnyeongsi Medicine Market' },
      { icon: '☕', text: 'Cha Cha Tea Club' },
      { icon: '🛍️', text: 'DDP' },
      { icon: '💆', text: 'EcoJardin Myeongdong' }
    ],
    sections: [
      {
        label: 'Morning — Seoul Yangnyeongsi Medicine Market',
        icon: '🌿',
        content: 'Seoul Yangnyeongsi Medicine Market in Jegi-dong is Korea\u2019s largest traditional herbal medicine market — narrow lanes stacked with dried roots and herbs. The small Herbal Medicine Museum on site gives good context before wandering the stalls. Stop in at the Seoul K-Medi Center on the market for the Bojewon massage: a heated massage bed with hand and foot massage (\u20a95,000). The medicinal foot bath (\u20a96,000) is also here.',
        address: 'Seoul K-Medi Center · 26 Yangnyeongjungang-ro, Dongdaemun-gu, Seoul',
        notes: [
          { type: 'info', text: 'K-Medi Center: 10am–6pm, closed Mondays, so start here around 10. Experiences are first-come, first-served, booked on site.' }
        ]
      },
      {
        label: 'Midday — Dapsimni Antiques Market',
        icon: '🧸',
        content: 'Dapsimni Antiques Market (an Instagram find), just down the road — a sprawling, less-touristed market for antiques, vintage furniture, and curios.',
        address: 'Dapsimni Antiques Market, Seoul',
        notes: []
      },
      {
        label: 'Afternoon — Seoul Folk Flea Market',
        icon: '🏺',
        content: 'Seoul Folk Flea Market in Sinseol-dong, on the way from Dapsimni back toward Dongdaemun: a big covered market of antiques, secondhand goods, vintage clothes and old electronics.',
        address: 'Seoul Folk Flea Market · 21 Cheonho-daero 4-gil, Dongdaemun-gu, Seoul',
        notes: [
          { type: 'info', text: 'Open 10am–7pm. Closed Tuesdays. Sinseol-dong Station exit 9. (Dapsimni Antiques Market is open 9am\u20137pm, closed only the 1st and 3rd Sundays.)' }
        ]
      },
      {
        label: 'Afternoon — Tea at Cha Cha Tea Club',
        icon: '☕',
        content: 'Cha Cha Tea Club, a hidden hanok tea house down an alley near Dongdaemun Station, where you brew your own tea. It\u2019s a few minutes from DDP, so it fits between the flea market and DDP.',
        address: 'Cha Cha Tea Club \u00b7 13 Jong-ro 46ga-gil, Jongno-gu, Seoul (Dongdaemun Station exit 6)',
        notes: [
          { type: 'info', text: 'Moved from the morning: it opens at 1pm (Wed\u2013Sun, 1\u201310pm; closed Mon & Tue).' }
        ]
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
        content: 'Booked for 7:00 PM. Head back toward the hotel for EcoJardin Myeongdong \u2014 a 3-minute walk from Myeongdong Station, a few subway stops from Dongdaemun. Lighter day than Icheon, so there\u2019s room for this without it feeling like too much. English-speaking staff (English, Japanese, and Chinese service). Open until 10pm on weekdays. Offers K-style cuts, 9/15/18-step scalp treatments, keratin treatment, perms, and coloring.',
        address: 'EcoJardin Myeongdong \u00b7 3F, 8-10 Myeongdong 8-gil, Jung-gu, Seoul',
        notes: [
          { type: 'reservation', text: 'Confirmed via WhatsApp: Oct 29 at 7:00 PM, 2 people. Contact EcoJardin on WhatsApp at +82 10-8332-6980 to make changes.' }
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
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    highlights: [
      { icon: '⛰️', text: 'Namsan hike' },
      { icon: '🖼️', text: 'Leeum Museum of Art' },
      { icon: '🛍️', text: 'Beaker & NIFTYDO' },
      { icon: '🪑', text: 'Itaewon Antique Furniture St.' },
      { icon: '🍹', text: 'VIBD BLVD / Shortbus' }
    ],
    sections: [
      {
        label: 'Early Morning — Namsan Hike & Botanical Garden',
        icon: '⛰️',
        content: 'Start from the hotel around 8:00 and walk up Namsan from the Myeongdong side, about 45–60 minutes up the trail and stairs to N Seoul Tower and the city views. Then go down the south side toward Hannam-dong through the Namsan Outdoor Botanical Garden, a quiet terraced garden on the old foreign-residence site. It comes out near the Leeum. Budget 2–2.5 hours total at an easy pace.',
        address: 'Namsan Park (from Myeongdong) → N Seoul Tower → Namsan Outdoor Botanical Garden, Hannam-dong',
        notes: [
          { type: 'info', text: 'Wear real shoes; the Myeongdong-side climb is mostly stairs. Leeum opens at 10am.' }
        ]
      },
      {
        label: 'Late Morning — Leeum Museum of Art',
        icon: '🖼️',
        content: 'Samsung\u2019s museum of traditional and contemporary Korean art in Hannam-dong — three buildings designed by Mario Botta, Jean Nouvel, and Rem Koolhaas. Closed Mondays, so today works fine.',
        address: 'Leeum Museum of Art, Hannam-dong, Yongsan-gu, Seoul',
        notes: []
      },
      {
        label: 'Midday — Kwangjuyo Showroom',
        icon: '🏺',
        content: 'Kwangjuyo\u2019s Hannam showroom, a short walk from the Leeum. Kwangjuyo is a well-known Korean ceramics brand making refined, minimal white porcelain and celadon meant for everyday use.',
        address: 'Kwangjuyo Hannam Showroom \u00b7 28 Hannam-daero 20-gil, Yongsan-gu, Seoul',
        notes: [
          { type: 'info', text: 'Hours aren\u2019t published; call +82 2-3446-4800 before going. Kwangjuyo also has a counter on 7F of Shinsegae\u2019s main store in Myeongdong, next to the hotel.' }
        ]
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
        content: 'VIBD BLVD, an NYT pick, for a last relaxed evening — or Shortbus, a cozy LGBTQ+ corner bar also in Itaewon, if you\u2019re after something more low-key and neighborhood-y. Gyeongridan-gil is right next door for a bar crawl: Berry Very Much, Sool Club, and craft makgeolli.',
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
    stay: 'Seoul Myeongdong Hotel · Checkout',
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
        content: 'Check out of the Seoul Myeongdong hotel.',
        notes: []
      },
      {
        label: 'Morning — Namdaemun Market',
        icon: '🛒',
        content: 'Namdaemun Market is a 10-minute walk from the hotel — Korea\u2019s oldest and largest traditional market, good for last-minute food stalls, kitchenware, and souvenirs without needing to go far on a travel day. Look for Kukje Embroidery inside the market for traditional Korean embroidery and notions. Grab kimchi buns at Gamekol Son Wangmandu, a YouTube find, inside the market.\nFor tableware, head up to the wholesale kitchenware floors on the 3rd floor of buildings C and D (connected, so it works as one big floor). They sell restaurant-style Korean tableware, like brass, stoneware and simple porcelain, at very low prices. It\u2019s the place to buy a full set. Walk the whole floor before buying, since many shops carry the same pieces. The basement under buildings C\u2013E has imported dishware and kitchen tools.',
        address: 'Namdaemun Market, Jung-gu, Seoul \u00b7 kitchenware: 3F of buildings C & D',
        notes: [
          { type: 'info', text: 'Kitchenware floors open 8:30am\u20136:30pm, closed Sundays (Saturday is fine). Brass and stoneware are heavy, so save room in a checked bag.' }
        ]
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
    { name: 'Seoul Myeongdong Hotel', detail: 'Confirmed · Confirmation #42971084 · Oct 25–31' },
    { name: 'Vic\u2019s Lab Korea — Color Analysis', detail: 'Confirmed · Oct 20, 10:50 AM (1 hr 10 min) · 2 people · [1:2] Signature Color Analysis · Hongdae, Mapo-gu · prepaid via EXIMLink, balance due at studio (KRW cash or overseas credit card via EXIMLink)' },
    { name: 'Seal Carving Class — Feel So Good Calli Studio', detail: 'Not yet booked · Mon Oct 19, 3–5pm · Anguk Station exit 6 · book online (Trazy)' },
    { name: 'Hwahaedang', detail: 'Not yet booked · Lunch Oct 20 (Tue) · Yeouido · book by phone +82 2-785-4422 · lunch only, 11am–3pm' },
    { name: 'Mongtan', detail: 'No reservations · Dinner Oct 26 (Mon) · Samgakji, Yongsan · on-site waitlist: register in person ~2–3 hrs ahead' },
    { name: 'Balwoo Gongyang', detail: 'Not yet booked · Lunch Oct 28 (Wed), 1:30pm seating · +82 2-733-2081 · closed Sundays' },
    { name: 'Huwon Secret Garden — 10:30 English Tour', detail: 'Not yet booked · Oct 28 · Changdeokgung · booking opens Oct 22, 10:00am KST at ticket.uforus.co.kr · 5,000 KRW + palace ticket' },
    { name: 'EcoJardin Myeongdong — Hair/Scalp Treatment', detail: 'Confirmed · Oct 29, 7:00 PM · 2 people · 3F, 8-10 Myeongdong 8-gil · changes via WhatsApp +82 10-8332-6980' }
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
    { name: 'Eulmildae', detail: 'Food · IG cold noodles' },
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
