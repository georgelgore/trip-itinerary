// ─── TRIP META ────────────────────────────────────────────────────────────────
const TRIP_META = {
  name: 'South Korea 2026',
  shortName: 'South Korea 2026',
  dates: 'Oct 18 – 31',
  travelers: 'George & Doug',
  startDate: '2026-10-18',
  mapLinks: 'naver',   // 📍 addresses link to NAVER Map
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
    hours: 'Hours',
    cashOnly: 'Cash Only',
    transit: 'Transit',
    pinnedSpots: 'Saved Pins',
    tips: 'Tips',
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
        mapQuery: '인천국제공항',
        notes: [
          { type: 'warning', text: 'Add flight number and terminal once booked.' }
        ]
      },
      {
        label: 'Transfer & Check-In',
        icon: '🏨',
        content: 'ICN to Insadong is about an hour: AREX express train to Seoul Station (~45 min), then Line 1 two stops to Jonggak and a 5-min walk; or a taxi straight to the hotel (~60–80 min, more in rush hour). Check in to Hotel Sunbee Insadong — a quiet side street just off the main Insadong pedestrian street, 5 min walk to Jonggak Station (Line 1) and 7 min to Anguk Station (Line 3).',
        address: 'Hotel Sunbee Insadong · 26 Insadong 7-gil, Seoul',
        mapQuery: '인사동7길 26',
        notes: [
          { type: 'reservation', text: 'Confirmed · Check-in Oct 18 · Check-out Oct 21' }
        ]
      },
      {
        label: 'Late Afternoon — Insadong-gil & Ssamziegil',
        icon: '🚶',
        content: 'Once settled, walk Insadong-gil itself — the pedestrian street lined with galleries, stationery shops, and tea houses — and duck into Ssamziegil, a spiral-ramped complex of small design and craft shops. The KCDF Gallery Shop, right on Insadong-gil, is worth a look too — a well-curated selection of contemporary Korean craft. Easy, jet-lag-friendly, and right outside the hotel.',
        address: 'Ssamziegil, Insadong, Seoul',
        mapQuery: '쌈지길',
        notes: []
      },
      {
        label: 'Evening — Settle In',
        icon: '🌆',
        content: 'Keep it light given the flight. Dinner at Koong (Gaeseong Mandu Koong), the Michelin Bib Gourmand dumpling house on Insadong-gil, a few minutes from the hotel. Walk-in only; expect a short queue.',
        address: 'Gaeseong Mandu Koong, Insadong-gil, Jongno-gu, Seoul',
        mapQuery: '개성만두 궁',
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
        mapQuery: '청진옥',
        notes: [
          { type: 'info', text: 'Open daily 6am\u201310pm, no closing days. Walk-in only.' }
        ]
      },
      {
        label: 'Morning — Gyeongbokgung Palace & National Folk Museum',
        icon: '🏯',
        content: 'Be at Gwanghwamun for the 9:00am opening, while the courtyards are still quiet. Gyeongbokgung is the largest of Seoul’s Five Grand Palaces. Then duck into the National Folk Museum of Korea on the palace grounds, a good overview of Korean daily life and craft history before diving into Bukchon’s workshops. The changing of the guard runs at Gwanghwamun at 10:00am, so you can catch it on the way out.',
        address: 'Gyeongbokgung Palace, Jongno-gu, Seoul',
        mapQuery: '경복궁',
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
        mapQuery: '토속촌삼계탕',
        notes: [
          { type: 'info', text: 'Both are walk-in only. Tosokchon is open daily 10am\u201310pm. Muguok runs a waitlist: sign up on site from 10:30am, or remotely in the Catch Table app from noon.' }
        ]
      },
      {
        label: 'Afternoon — Bukchon Hanok Village Walk',
        icon: '🏘️',
        content: 'Wander the sloped lanes of Bukchon Hanok Village, one of Seoul\u2019s best-preserved traditional neighborhoods — a mix of centuries-old hanok homes, small craft studios, and photo-friendly overlooks toward the palace and Namsan.',
        address: 'Bukchon Hanok Village, Jongno-gu, Seoul',
        mapQuery: '북촌한옥마을',
        notes: [
          { type: 'info', text: 'Follow the Bukchon walk on page 61 of the tour book.' }
        ]
      },
      {
        label: 'Afternoon — Bukchon Craft Shops',
        icon: '🐚',
        content: 'Two craft stops along the Bukchon walk:\n\u2022 Jinjoo Shell: a three-generation najeonchilgi (mother-of-pearl inlay) maker in Gahoe-dong. Browse and buy here: small mirrors, boxes and card cases are the easy-to-pack pieces.\n\u2022 Saeksil Nubi: a traditional colored-thread quilting workshop in a public hanok. You can see finished pieces, and they offer a 50-minute quilting experience (\u20a915,000).\nFor more mother-of-pearl, the Insadong side alleys (8-gil, 10-gil, 12-gil) back near the hotel are full of craft and antique shops, and the KCDF Gallery Shop on Insadong-gil carries contemporary pieces.',
        address: 'Jinjoo Shell \u00b7 #301, 172-1 Gahoe-dong (Anguk Station exit 2) \u00b7 Saeksil Nubi \u00b7 17 Bukchon-ro 12-gil, Jongno-gu, Seoul',
        mapQuery: '가회동 172-1',
        notes: [
          { type: 'info', text: 'Jinjoo Shell is an upstairs workshop (#301), so check on Naver Map that the shop is open before walking up. Najeon pricing guide: card cases roughly \u20a920,000\u201335,000, small jewelry boxes \u20a945,000\u201380,000. Real shell shifts color when you tilt it; painted imitations stay flat white or silver.' },
          { type: 'warning', text: 'Saeksil Nubi is listed as open 10am\u20135pm, but closed days aren\u2019t published. Call +82 2-733-2577 to confirm it\u2019s open on a Monday.' }
        ]
      },
      {
        label: '3:00pm — Seal Carving Class',
        icon: '🪨',
        content: 'Carve your own dojang (Korean name seal) into stone with a traditional engraving knife, guided by an English-speaking calligrapher at Feel So Good Calli Studio. Two hours; you leave with the finished seal in a case. The studio is by Anguk Station, between Bukchon and Samcheong-dong.',
        address: 'Feel So Good Calli Studio · 3F, 147 Gwanhun-dong, Jongno-gu, Seoul (Anguk Station exit 6)',
        mapQuery: '관훈동 147',
        notes: [
          { type: 'reservation', text: 'Book online ahead (Trazy lists it). Monday session starts at 3pm and runs 2 hours. Closed Sundays.' }
        ]
      },
      {
        label: 'Late Afternoon — Samcheong-dong-gil Shopping',
        icon: '🛍️',
        content: 'Pop into the boutiques along Samcheong-dong-gil for ceramics, stationery, and small galleries. (The Seoul Museum of Craft Art is right nearby, but it\u2019s closed Mondays — it moves to Oct 28, when it\u2019s open, along with the rest of this neighborhood cluster.)',
        address: 'Samcheong-dong-gil, Jongno-gu, Seoul',
        mapQuery: '삼청동길',
        notes: []
      },
      {
        label: 'Evening — Food',
        icon: '🍴',
        content: 'Dinner at Pildong Myeonok, from the "Want to go" list.',
        address: 'Pildong Myeonok, Seoul',
        mapQuery: '필동면옥',
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
        mapQuery: '월드컵북로4길 15',
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
        mapQuery: '화해당',
        notes: [
          { type: 'reservation', text: 'Confirmed via AutoReserve: Tue Oct 20 at 12:45, 2 people, table, seating only (order on the day). Listed there as "Hanakando Yeouido Branch" under the name "Goa George." Booking fee already paid to AutoReserve; pay for food and drinks at the restaurant. A card hold for possible cancellation fees may show and is released when you arrive. Questions go to AutoReserve, not the restaurant.' },
          { type: 'warning', text: 'Leave Vic’s Lab by about 12:15 for the ~20-min taxi. If the color analysis runs long, keep an eye on the 3pm close.' }
        ]
      },
      {
        label: 'Afternoon — Mangridan-gil & Mangwon Market',
        icon: '🛍️',
        content: 'Taxi back over the river (about 15 minutes) to Mangwon-dong for Mangridan-gil — a low-key alley of independent boutiques, record shops, and cafes, a step quieter than Hongdae itself. Mangwon Market, the traditional market it grew up around, is right there too.',
        address: 'Mangridan-gil, Mangwon-dong, Mapo-gu, Seoul',
        mapQuery: '망리단길',
        notes: []
      },
      {
        label: 'Afternoon — Geochang Yugi Showroom',
        icon: '🥣',
        content: 'Seoul showroom of Geochang Yugi, a four-generation, 100-year family maker of yugi (Korean hand-forged brass tableware). It\u2019s in Mangwon-dong, a few minutes from Mangridan-gil.',
        address: 'Geochang Yugi \u00b7 1F Banseok Building, 23 Huiujeong-ro 3-gil, Mapo-gu, Seoul',
        mapQuery: '거창유기',
        notes: [
          { type: 'info', text: 'Weekdays 9am\u20136pm, closed 12:30\u20131:30pm for lunch and on weekends. Phone +82 2-332-6249; worth calling ahead.' }
        ]
      },
      {
        label: 'Late Afternoon — Yeonnam-dong Forest Park Walk',
        icon: '🌳',
        content: 'Walk the Gyeongui Line Forest Park through Yeonnam-dong — a converted rail line turned narrow park, lined with indie boutiques, secondhand shops, and cafes on either side. It ends near Yeonhui-dong, where dinner is.',
        address: 'Gyeongui Line Forest Park, Yeonnam-dong, Seoul',
        mapQuery: '경의선숲길',
        notes: []
      },
      {
        label: 'Snacks — Mandong Bakery & Ramen Library',
        icon: '🥖',
        content: 'Two Hongdae snack stops to work in when you pass through: Mandong Bakery, known for its garlic bread, and the CU "Ramen Library" convenience store, a wall of instant ramyeon you cook yourself at the in-store machines.',
        address: 'Hongdae, Mapo-gu, Seoul',
        mapQuery: '홍대',
        notes: []
      },
      {
        label: 'Dinner — Ipum',
        icon: '🥟',
        content: 'Ipum in Yeonhui-dong, right next to Yeonnam: a Korean-Chinese spot known for jjajangmyeon and crispy dumplings.',
        address: 'Ipum · 20 Yeonhui-ro 11-gil, Seodaemun-gu, Seoul',
        mapQuery: '연희로11길 20',
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
    sublocation: 'Jeju City · drive south to Seogwipo',
    theme: 'seoul',
    stay: 'Seom Studio In Seogwipo #7 · check-in',
    highlights: [
      { icon: '🍜', text: 'Ollae Guksu' },
      { icon: '🖼️', text: 'Arario Museum' },
      { icon: '🍵', text: 'Seogwi Dawon' }
    ],
    sections: [
      {
        label: 'Check-Out — Hotel Sunbee',
        icon: '🏨',
        content: 'Check out of Hotel Sunbee Insadong.',
        address: 'Hotel Sunbee Insadong · 26 Insadong 7-gil, Seoul',
        mapQuery: '인사동7길 26',
        notes: []
      },
      {
        label: 'Flight — GMP to CJU',
        icon: '✈️',
        content: 'Domestic flight from Seoul/Gimpo to Jeju. Depart 9:10am, arrive 10:25am — 1h 15m.',
        address: 'Seoul/Gimpo (GMP) · Terminal D (Domestic) → Jeju (CJU)',
        mapQuery: '김포국제공항 국내선',
        notes: []
      },
      {
        label: 'Arrival — Rental Car Pickup',
        icon: '🚗',
        content: 'Pick up the rental car at the airport. Budget 30–45 minutes for the shuttle to the rental lot and the paperwork, so figure on being on the road by about 11:00.\nA car is effectively required for this leg: the tea farms, Jeoji, Bonte, the Seongeup studios and the east-coast stops are all poorly served by bus.',
        notes: [
          { type: 'warning', text: 'An International Driving Permit is required alongside your US license and passport, and it cannot be issued in Korea. Get it from AAA before leaving the US.' },
          { type: 'info', text: 'Rough budget is ₩50,000–100,000 per day for a compact plus full insurance (estimate, not a quote). Speed cameras are everywhere on Jeju and fines follow the rental. Use Naver Map rather than Google Maps for driving directions and current hours.' }
        ]
      },
      {
        label: 'Lunch — Ollae Guksu',
        icon: '🍜',
        content: 'Gogi guksu, the Jeju pork-bone noodle soup, about 10 minutes from the airport. It is the only dish on the menu, ₩10,000. This is the benchmark bowl on the island.',
        address: 'Ollae Guksu (올래국수) · 24 Guiarang-gil, Yeon-dong, Jeju City · 064-742-7355',
        notes: [
          { type: 'warning', text: 'Open 08:00–15:00, last order about 14:55, closed Sundays. Since your departure day is a Sunday, today is the only chance at it. Walk-in queue only; blogs report a few groups waiting even on weekday mornings.' },
          { type: 'info', text: 'No parking of its own, but nearby paid lots give ₩1,000 off. Do not confuse it with 제주올래국수 at 39 Wolseong-ro, a different restaurant that closes Saturdays.' }
        ]
      },
      {
        label: 'Afternoon — Arario Museum',
        icon: '🖼️',
        content: 'Collector Kim Chang-il put his collection into a disused multiplex and two old motels in downtown Jeju City, barely renovating them. Over 5,000 works, strong on contemporary: Nam June Paik, Kohei Nawa, Keith Haring, Barbara Kruger. The reuse of the buildings is half the point.\nStart at Tapdong Cinema, which has the lift and a cafe, then walk to Dongmun Motel I. Visitors say the first motel you reach is the more interesting one, so cut Dongmun Motel II if time runs short (five flights of stairs each).',
        address: 'Tapdong Cinema · 14 Tapdong-ro, Jeju City · 064-720-8201 (Dongmun Motel I · 37-5 Sanji-ro)',
        mapQuery: '탑동시네마',
        notes: [
          { type: 'info', text: 'Open 10:00–19:00, last entry 18:00, closed Mondays. Three-museum ticket about ₩24,000 for adults; bought separately Tapdong is ₩15,000 and each motel ₩20,000. Audio guide in Korean and English.' },
          { type: 'info', text: 'Dongmun Market is right next door if you have 20 minutes for the fish stalls.' }
        ]
      },
      {
        label: 'Late Afternoon — Seogwi Dawon',
        icon: '🍵',
        content: 'Take Route 1131 (the 516 road) south over the Hallasan saddle, about 50 minutes, and stop at this family tea garden 250m up the slope. It was a tangerine farm until Heo Sang-jong and Ahn Haeng-ja converted it to tea in 2005. You drink by the window looking at the rows and the mountain. The quiet counterpoint to O’Sulloc, and it sits right on your route south.',
        address: 'Seogwi Dawon (서귀다원) · 717 516-ro, Seogwipo (Sanghyo-dong)',
        notes: [
          { type: 'warning', text: 'Open 09:00–17:00, closed Tuesdays (Wednesday is fine). Arrive by 16:15 at the latest. ₩5,000 per person, which includes the green and yellow tea.' }
        ]
      },
      {
        label: 'Check-In — Seom Studio',
        icon: '🏡',
        content: 'Check in to Seom Studio In Seogwipo #7.',
        address: 'Seom Studio In Seogwipo #7',
        notes: [
          { type: 'reservation', text: 'AirBnb confirmed · Oct 21–25 · Unit #7' }
        ]
      },
      {
        label: 'Dinner — Ungdam Sikdang',
        icon: '🍖',
        content: 'Jeju heukdwaeji (black pork) grilled over charcoal briquettes on a pot-lid griddle. Essentially one meat, one option, which makes it easy without Korean. About 3 minutes on foot from the market.',
        address: 'Ungdam Sikdang (웅담식당) · 5 Jungang-ro 59beon-gil, Seogwipo · 0507-1379-6442',
        notes: [
          { type: 'warning', text: 'Mon–Sat 15:00–22:00, closed Sundays. An older listing says noon–23:00 but recent reports agree on a 15:00 open, so do not arrive early. Roughly ₩20,000–30,000 per person (estimate). Walk-in; lot next door.' }
        ]
      },
      {
        label: 'Evening — Olle Market Night Stalls',
        icon: '🌃',
        content: 'Wander the night-market run at Seogwipo Maeil Olle Market after dinner: grilled abalone skewers, galchi rolls, tangerine hotteok. Buy omegi tteok and fruit while you are here if you want a car breakfast for Sunday\u2019s early departure.',
        address: 'Seogwipo Maeil Olle Market · 18 Jungang-ro 62beon-gil, Seogwipo',
        mapQuery: '서귀포매일올레시장',
        notes: [
          { type: 'info', text: 'Market runs 07:00–20:00 or 21:00 depending on season; the night stalls (1965 Olle Market 54th Street) run 17:00–22:00.' },
          { type: 'cash', text: 'Some of the older vendors are cash-only. Carry ₩50,000–100,000 in small notes for the market.' }
        ]
      }
    ]
  },
  {
    id: 5,
    date: 'Thursday, October 22 — East Coast',
    location: 'Jeju',
    sublocation: 'Seongsan · Gujwa · Jocheon',
    theme: 'jeju',
    stay: 'Seom Studio In Seogwipo #7',
    highlights: [
      { icon: '🌅', text: 'Seongsan Ilchulbong' },
      { icon: '🕳️', text: 'Manjanggul (reopened 2026)' },
      { icon: '🍵', text: 'Dahee-yeon lava-cave tea' },
      { icon: '🍖', text: 'Ungdam Sikdang' }
    ],
    sections: [
      {
        label: '07:00 — Drive East',
        icon: '🚗',
        content: 'Leave Seogwipo by 07:00 for Seongsan, about an hour. The early start gets you up the cone before the tour buses and leaves room for the full run.',
        notes: [
          { type: 'info', text: 'Moved here from Saturday for the weather. Thursday is the one dry day of the leg (clear, about 10–17°C, light wind), which suits the open tuff cone and the coast. Rain is forecast from Friday midday or evening through Sunday.' }
        ]
      },
      {
        label: 'Morning — Seongsan Ilchulbong',
        icon: '🌅',
        content: 'A 20–30 minute climb up the tuff cone rising straight out of the sea, best done before the tour buses arrive.',
        address: 'Seongsan Ilchulbong · Seongsan-eup, Seogwipo',
        mapQuery: '성산일출봉',
        notes: [
          { type: 'info', text: 'October hours 05:00–19:00, last ticket 18:00, ₩5,000 for adults. Closed only on the first Monday of the month. Checked Oct 21; reconfirm on Naver.' }
        ]
      },
      {
        label: 'Breakfast — Fritz Coffee Seongsan',
        icon: '☕',
        content: 'The Seoul roaster’s Jeju branch, with floor-to-ceiling views of the peak you just climbed, a rooftop, and croissants out of the oven. Americano ₩5,700, latte ₩6,200.',
        address: 'Fritz Coffee, Jeju Seongsan (프릳츠 제주성산점) · 222 Ilchul-ro, Seongsan-eup · 0507-1468-2045',
        notes: [
          { type: 'info', text: 'Open daily 08:00–19:00 (some listings say 20:00), no closing day. Weekend mornings are crowded with sunrise visitors.' }
        ]
      },
      {
        label: 'Late Morning — Myeongjin Jeonbok',
        icon: '🦪',
        content: 'Jeonbok dolsotbap, abalone stone-pot rice, which is the dish people drive to this coast for. Grilled abalone too. Eat it as an early lunch, before the pottery lab and Manjanggul.\nAbalone rice runs about ₩15,000 and up, grilled abalone about ₩30,000 and up (older figures, so expect more).',
        address: 'Myeongjin Jeonbok (명진전복) · 1282 Haemajihaean-ro, Pyeongdae-ri, Gujwa-eup · 064-782-9944',
        notes: [
          { type: 'info', text: 'Open 09:30–20:30, last order 20:00, closed Tuesdays. Walk-in with a waiting ticket; 30-minute waits are normal.' }
        ]
      },
      {
        label: 'Midday — Jeju Clay Pottery Lab',
        icon: '🏺',
        content: 'Kim Kyungchan’s studio, on the way from lunch to Manjanggul. He makes contemporary onggi from Jeju clay (shown at Maison & Objet in 2022): the unglazed, breathable earthenware the island is known for. This is the pottery-buying stop of the Jeju leg, in place of a class. Tea cups and small vessels are the easiest to carry home.',
        address: 'Jeju Clay Pottery Lab · 28 Haengwon-ro 2-gil, Gujwa-eup',
        mapQuery: '행원로2길 28',
        notes: [
          { type: 'warning', text: 'A working studio with no published hours. Contact them (Instagram or the number on Naver) a few days ahead to confirm someone will be there on Thursday.' },
          { type: 'info', text: 'Instagram DM sent Oct 21 asked about Saturday. Send a new message asking for Thursday (Oct 22) around midday and a rough price on small cups. Prices are not published anywhere online.' },
          { type: 'warning', text: 'Fallback: if there is no reply by Thursday morning, skip this stop and go straight from lunch to Manjanggul. It is optional.' },
          { type: 'info', text: 'Wrap pieces in clothes and pack them in your carry-on for the flights back.' }
        ]
      },
      {
        label: 'Afternoon — Manjanggul Lava Tube',
        icon: '🕳️',
        content: 'The UNESCO lava tube reopened on May 30, 2026, after two years and five months closed following a December 2023 rockfall. ₩12.1 billion went into a new flat stainless-steel walkway. Only Section 1, about 1km of the roughly 7.4km tube, is open.',
        address: 'Manjanggul (만장굴) · Gujwa-eup, Jeju · +82-64-710-7903',
        notes: [
          { type: 'info', text: 'Open 09:00–18:00, last entry 17:10, closed the 1st Wednesday of each month (next closure Nov 4), so Thursday is clear. ₩4,000 for adults; free guided tours can be requested on site.' },
          { type: 'warning', text: 'Expect crowds now that it has reopened.' }
        ]
      },
      {
        label: 'Afternoon — Dahee-yeon',
        icon: '🍵',
        content: 'A 60,000-pyeong eco-friendly tea farm with a cafe built inside a lava cave. You can taste and buy the farm’s own tea. The tea foot-bath needs a booking if you want it.\nSpace Seooh, a tea-and-pastry cafe with pottery workshops, is a few minutes away at 1948-6 Seonheul-ri if you want a pastry stop.',
        address: 'Dahee-yeon (다희연) · 266-4 Seongyo-ro, Jocheon-eup · 064-783-0882 · Alt address (Google Maps listing): 117 Seongyo-ro, Jocheon-eup',
        notes: [
          { type: 'warning', text: 'Not confirmed that it is still operating: a 2022 review says it closed, and a separate light-art park (Jeju LAF) is on the same road. Call 064-783-0882 or check Naver Map before going. If it is gone, skip it or go to Space Seooh instead.' }
        ]
      },
      {
        label: 'Late Afternoon — Drive Back',
        icon: '🚗',
        content: 'About 1 hour 10 minutes back to Seogwipo. Leave Dahee-yeon by about 4:00 to reach Ungdam Sikdang around 5:30, after it opens at 3:00. Take Route 1136 or 97 rather than the coast road.',
        notes: []
      },
      {
        label: 'Dinner — Ungdam Sikdang',
        icon: '🍖',
        content: 'Back in Seogwipo for Jeju heukdwaeji (black pork) grilled over charcoal briquettes on a pot-lid griddle. Essentially one meat, one option, which makes it easy without Korean. About 3 minutes on foot from the Olle Market. Replaces Haenyeo’s Kitchen tonight.',
        address: 'Ungdam Sikdang (웅담식당) · 5 Jungang-ro 59beon-gil, Seogwipo · 0507-1379-6442',
        notes: [
          { type: 'warning', text: 'Mon–Sat 15:00–22:00, closed Sundays, so Thursday works. Do not arrive before 15:00 (an older listing says noon, but recent reports agree on a 15:00 open). Roughly ₩20,000–30,000 per person (estimate). Walk-in; lot next door.' },
          { type: 'info', text: 'Ungdam Sikdang is also listed for the Oct 21 dinner.' }
        ]
      }
    ],
    deepDive: {
      title: 'East Coast Run',
      subtitle: 'Thursday Oct 22 · the dry day, so the full east coast run',
      stops: [],
      timeline: [
        { time: '7:00 AM',  activity: 'Leave Seogwipo',            note: '~1 hr to Seongsan via 1136/97' },
        { time: '8:00 AM',  activity: 'Seongsan Ilchulbong',       note: '20–30 min climb, before the buses' },
        { time: '9:30 AM',  activity: 'Fritz Coffee Seongsan',     note: 'Breakfast with a view of the peak' },
        { time: '11:00 AM', activity: 'Myeongjin Jeonbok',         note: 'Early lunch; ~30 min wait is normal' },
        { time: '12:15 PM', activity: 'Jeju Clay Pottery Lab',     note: 'Browse and buy onggi; confirm it is open' },
        { time: '1:00 PM',  activity: 'Manjanggul Lava Tube',      note: 'Section 1 only, ~1 km' },
        { time: '2:30 PM',  activity: 'Dahee-yeon tea farm',       note: 'Lava-cave cafe, tasting and buying' },
        { time: '4:00 PM',  activity: 'Drive back to Seogwipo',    note: '~1 hr 10 min via 1136 or 97' },
        { time: '5:30 PM',  activity: 'Ungdam Sikdang',            note: 'Black pork; opens 3:00 PM, closed Sundays' }
      ],
      logistics: [
        {
          icon: '📋',
          label: 'What to confirm',
          content: 'Nothing today is a hard reservation, but two stops need a quick check.',
          tips: [
            'Dahee-yeon: call 064-783-0882 to confirm entry times; foot-bath needs booking',
            'Jeju Clay Pottery Lab: message ahead to confirm someone is there to sell'
          ]
        },
        {
          icon: '🚗',
          label: 'Driving',
          meta: 'Seogwipo ↔ east coast',
          content: 'Roughly an hour each way. Parking is easy at all of today’s stops.',
          tips: [
            'Use Naver Map, not Google Maps, for directions and live hours',
            'Return on Route 1136 or 97, not the coast road',
            'Speed cameras are everywhere and fines follow the rental'
          ]
        },
        {
          icon: '⚠️',
          label: 'Weather',
          content: 'Thursday is the dry day: clear and light wind. It is the right day for the open tuff cone and the coast, because Friday evening through Sunday is wet. There is no good dry swap day if something forces a change.',
          notes: [
            { type: 'info', text: 'Winds were strong into Thursday morning and seas stay high, so check conditions at the Seongsan trailhead before climbing.' }
          ]
        }
      ],
      checklists: [
        {
          id: 'east-prep',
          label: 'Before Thursday',
          items: [
            'Jeju Clay Pottery Lab confirmed for Thursday (010-2124-1598)',
            'Dahee-yeon confirmed still operating (064-783-0882 or Naver Map)',
            'Seongsan Ilchulbong hours checked on Naver',
            'Manjanggul confirmed open (1st Wednesday closures)',
            'Thursday forecast re-checked the night before (clear expected)',
            'Cash on hand for the day',
            'Fuel topped up the night before'
          ]
        }
      ]
    }
  },
  {
    id: 6,
    date: 'Friday, October 23 — Tea Fields & the West',
    location: 'Jeju',
    sublocation: 'Seogwang-ri · Jeoji · Andeok',
    theme: 'jeju',
    stay: 'Seom Studio In Seogwipo #7',
    highlights: [
      { icon: '🍵', text: 'O’Sulloc Tea Stone' },
      { icon: '🎨', text: 'Jeoji Artists’ Village' },
      { icon: '🏛️', text: 'Bonte Museum (Ando)' },
      { icon: '🐟', text: 'Negeori galchi' },
      { icon: '☕', text: 'Lavarr' },
      { icon: '🐟', text: 'Miyoungine mackerel sashimi' }
    ],
    sections: [
      {
        label: 'Breakfast — Sambo Sikdang',
        icon: '🥘',
        content: 'The classic Seogwipo seafood breakfast. Order the jeonbok ttukbaegi (abalone seafood hot pot) or the jeonbokjuk (abalone porridge). Aim for the 08:00 open, then coffee at Lavarr when it opens at 9:00, so you are on the road west by about 10:00.',
        address: 'Sambo Sikdang (삼보식당) · 25 Jungjeong-ro, Seogwi-dong, Seogwipo · 064-762-3620',
        notes: [
          { type: 'info', text: 'Open 08:00–21:00, last order 20:00. Closed the 2nd and 4th Wednesday of the month (Oct 14 and 28), so Friday is clear. Walk-in, cards accepted.' },
          { type: 'warning', text: 'There is a second Sambo Sikdang in Shin-Jeju that closes the 2nd and 4th Tuesday. Make sure you go to the Seogwipo one.' },
          { type: 'info', text: 'Moved up to Friday because of the storm that is due to hit Jeju over the weekend. The day is built around indoor stops: the tea museum, the art museums and Bonte. Allow extra time for the drives and watch the forecast.' }
        ]
      },
      {
        label: 'Morning — Lavarr',
        icon: '☕',
        content: 'Coffee at Lavarr (라바르), a bathhouse that opened in 1971, closed in 2017 and was reimagined in 2022 as a cafe and arts space in central Seogwipo. Each floor is different, so go up to the roof before picking a seat. It opens at 9:00, so go straight after Sambo Sikdang, then head west.',
        address: 'Lavarr (라바르) · 13 Jungang-ro, Seogwipo',
        mapQuery: '서귀포시 중앙로 13',
        notes: [
          { type: 'info', text: 'Open daily 9:00–22:00, no closing day listed (from a travel blog; confirm on Naver).' },
          { type: 'warning', text: 'This pushes O’Sulloc to about 10:30, when it gets busy. Keep the coffee to about 40 minutes.' }
        ]
      },
      {
        label: 'Morning — O’Sulloc Tea Museum & Seogwang Fields',
        icon: '🍵',
        content: 'About 40 minutes west. Amorepacific opened this in 2001 as Korea’s first tea museum, and the fields behind it are the largest organic tea farm in the country.\nWhat is actually worth your time: the Tea Stone building, where tea masters prepare and serve tea and the cellar staff pour tastings (one reviewer singled out the Jeju Cedar Wood Aged Tea Vintage, the closest thing to an aged Jeju tea you will find here); the walk out into the fields; and buying sejak-grade loose leaf.\nBe clear-eyed about the scale. O’Sulloc’s Jeju tea is machine-planted, machine-tended and machine-harvested. It is a large commercial operation, not artisanal, which is why the small farms are on this itinerary too.',
        address: 'O’Sulloc Tea Museum · 15 Sinhwayeoksa-ro, Andeok-myeon, Seogwipo · +82-64-794-5312',
        mapQuery: '오설록티뮤지엄',
        notes: [
          { type: 'info', text: 'Open 09:00–18:00 daily (some listings say 19:00 in summer), no closing day, free entry. Visitors report it gets very busy by 10:30, so arrive near the 09:00 open. Rain is building: keep the fields walk short and spend the time in the Tea Stone building.' },
          { type: 'reservation', text: 'Tea Stone classes are bookable in advance at osulloc.com. Worth doing a few days ahead if you want the guided pour rather than just the cellar tasting.' },
          { type: 'info', text: 'Late October is off-season: ujeon is picked before late April and sejak late April to early May, so nothing is being harvested. The plants are usually in flower and the shops are selling this spring’s stock. Good for tasting and buying, not for picking. Skip the Innisfree Jeju House next door unless you want skincare; it adds nothing on tea.' }
        ]
      },
      {
        label: 'Late Morning — Jeoji Culture & Arts Village',
        icon: '🎨',
        content: 'About 15 minutes north of O’Sulloc, a village where artists actually live and work, with studios and small galleries down the lanes. Two anchors, and the walk between them is the point:\n• Jeju Museum of Contemporary Art (제주현대미술관), 35 Jeoji 14-gil, ₩2,000.\n• Kim Tschang-Yeul Museum of Art, 883-5 Yonggeum-ro, Hallim-eup, ₩2,000. Around 220 of the water-drop painter’s major works, which he donated; he lived on Jeju from 1951 to 1953 during the war. The building itself is strong.\nThis is your best shot at works on paper on the island.',
        address: 'Jeju Museum of Contemporary Art · 35 Jeoji 14-gil, Hangyeong-myeon',
        mapQuery: '제주현대미술관',
        notes: [
          { type: 'info', text: 'Both open 09:00–18:00. The Kim Tschang-Yeul is closed Mondays. Sources disagree on the Contemporary Art museum’s closing day (most say Monday, one older listing says Wednesday); Friday is safe either way.' },
          { type: 'warning', text: 'Visitors report surprise closures at the Contemporary Art museum during exhibition changeovers. Check on Naver the day before.' }
        ]
      },
      {
        label: 'Lunch — Miyoungine Mackerel Sashimi',
        icon: '🐟',
        content: 'Miyoungine (미영이네) is known for raw Jeju mackerel sashimi (고등어회), often served as a set with a mackerel stew. This is the Hamo branch in Daejeong-eup on the southwest coast, so plan a drive south from Jeoji and then back toward Bonte (allow about 35–40 minutes from Jeoji and 20–25 from Bonte; estimates). A reviewer paid ₩85,000 for a sashimi and stew set at the Jocheon branch; Hamo prices may differ.',
        address: 'Miyoungine (미영이네식당) · 42 Hamohanggu-ro, Daejeong-eup, Seogwipo',
        mapQuery: '하모항구로 42',
        notes: [
          { type: 'warning', text: 'Opening hours, closed days and reservation rules were not found. Check Naver Map or call before driving down, and have a fallback in mind. One review calls the service slow.' }
        ]
      },
      {
        label: 'Optional — Jestory',
        icon: '🏺',
        content: 'A shop stocking work from about 300 local Jeju makers, ceramics included, alongside gifts and accessories. A quick browse on the way to the Bonte Museum if you want more pottery options than Thursday’s studio.',
        address: 'Jestory (제스토리) · 60 Maksukpo-ro, Seogwipo',
        notes: [
          { type: 'info', text: 'Listed as open 09:00–21:00 with no closing day. Hours came from a travel listing, so check Naver before you go.' }
        ]
      },
      {
        label: 'Afternoon — Bonte Museum',
        icon: '🏛️',
        content: 'Tadao Ando in concrete, water and light, housing a collection of traditional Korean craft: bojagi wrapping cloths, lacquer, furniture, funerary objects. That combination lands squarely on both the ceramics and the interiors interest. There is also a Kusama Infinity Mirrored Room and an Ando meditation room.\nAfterwards walk down the street to see the exterior of Itami Jun’s Bangju Church, the "Noah’s Ark" church. Itami also designed the PODO Hotel nearby.',
        address: 'Bonte Museum (본태박물관) · 69 Sallongnam-ro 762beon-gil, Andeok-myeon · +82-64-792-8108',
        notes: [
          { type: 'warning', text: 'Open 10:00–18:00 but last admission is 17:00, so arrive by 16:30 at the latest. Listed as open daily, though one listing says closed on public holidays.' },
          { type: 'info', text: 'Permanent exhibition ₩30,000 adults on the official site; Naver booking is reported around ₩29,000 including a coffee and postcard. Visitor access to the PODO Hotel itself was not verifiable for 2026, so treat it as a drive-by.' }
        ]
      },
      {
        label: 'Dinner — Negeori Sikdang',
        icon: '🐟',
        content: 'Seogwipo is the galchi (cutlassfish) town and this is the place for it. Order the jorim to share and add a galchi guk to compare the clear-soup version.\nGalchi jorim is ₩55,000 medium or ₩65,000 large, galchi guk ₩16,000, sea-urchin seaweed soup ₩16,000.',
        address: 'Negeori Sikdang (네거리식당) · 20 Seomun-ro 29beon-gil, Seogwi-dong · 064-762-5513',
        notes: [
          { type: 'info', text: 'Open daily 07:00–21:40, last order 20:40, closed only on Korean holidays. Walk-in. Tablet ordering at the table makes it easy without Korean, and there is a free public lot nearby.' }
        ]
      }
    ]
  },
  {
    id: 7,
    date: 'Saturday, October 24 — Jeju City → Busan',
    location: 'Jeju → Busan',
    sublocation: 'Jeju City · flight to Busan',
    theme: 'busan',
    stay: 'The Westin Josun Busan · check-in 3:00 PM',
    highlights: [
      { icon: '🎨', text: 'Arario Dongmun Motel II' },
      { icon: '🏺', text: 'D&Department Jeju' },
      { icon: '🍜', text: 'Jamae Guksu' },
      { icon: '✈️', text: 'KE1550 CJU → PUS, 18:20' }
    ],
    sections: [
      {
        label: 'Check-Out — Seom Studio',
        icon: '🏡',
        content: 'Around 8:30, check out of Seom Studio In Seogwipo #7 and put the bags in the car. You will not be back, because the flight to Busan leaves CJU at 18:20.',
        notes: [
          { type: 'warning', text: 'The storm is expected to arrive this weekend. Check flight status that morning and allow extra time for the drives.' }
        ]
      },
      {
        label: 'Morning — Drive to Jeju City',
        icon: '🚗',
        content: 'Leave around 9:00 for the drive north, about an hour (estimate). Today is forecast to be wet, and Arario and D&Department are both indoors.',
        notes: [
          { type: 'warning', text: 'Forecast sources disagree on timing. Check Naver or the KMA app before you leave.' }
        ]
      },
      {
        label: 'Morning — Arario Dongmun Motel II',
        icon: '🎨',
        content: 'Around 10:00, when it opens. Contemporary art in an old-town Jeju City building. Allow about an hour.',
        address: 'Arario Dongmun Motel II · 23 Sanji-ro, Jeju City',
        mapQuery: '아라리오 동문모텔II',
        notes: [
          { type: 'info', text: 'Reported open Tuesday to Sunday 10:00 to 19:00, closed Mondays, adult entry around ₩20,000. One older source differs, so confirm on Naver.' }
        ]
      },
      {
        label: 'Late Morning — D&Department Jeju',
        icon: '🏺',
        content: 'Around 11:15. The 2nd floor store sells Jeju crafts, tableware, furniture and books, which suits the ceramics and handmade goods interest. The 1st floor cafe serves brunch made with Jeju ingredients; coffee is enough here, since lunch is next.',
        address: 'D&Department Jeju · 3 Tapdong-ro 2-gil, Jeju City',
        mapQuery: '디앤디파트먼트 제주',
        notes: [
          { type: 'info', text: 'Open 10:30 to 18:30, closed Wednesdays, free entry. Check the cafe kitchen’s last order on Naver if you want to eat there.' }
        ]
      },
      {
        label: 'Lunch — Jamae Guksu',
        icon: '🍜',
        content: 'Around 12:30. Pork noodles (gogi guksu) and spicy mixed noodles, on Tapdong-ro 11-gil, the same road as D&Department. The walking distance between them was not verified.',
        address: 'Jamae Guksu · Tapdong-ro 11-gil, Jeju City',
        mapQuery: '자매국수',
        notes: [
          { type: 'warning', text: 'Hours come from a single local-favorites article: 09:00 to 14:20 and 16:00 to 19:40, closed Wednesdays. Confirm on Naver before you commit.' }
        ]
      },
      {
        label: 'Optional — Dongmun Market',
        icon: '🛍️',
        content: 'Around 1:00 if it is close and the rain holds off. A covered traditional market with street food and seafood, so it also works as a rain stop. The walk from Tapdong was not checked.',
        notes: [
          { type: 'info', text: 'Check the distance on Naver Map before you plan around it.' }
        ]
      },
      {
        label: 'Afternoon — Drive to CJU & Return the Car',
        icon: '🚗',
        content: 'Head to the airport after lunch or the market and return the rental car. Jeju City is close to CJU (estimate, check Naver), so this day has slack. The check-in counter closes 30 minutes before departure (17:50), so aim to be at CJU by about 4:45 PM.',
        address: 'Jeju International Airport (CJU)',
        mapQuery: '제주국제공항',
        notes: [
          { type: 'info', text: 'The Jeju rental car now goes back Oct 24, not Oct 25.' }
        ]
      },
      {
        label: 'Flight — KE1550 Jeju to Busan',
        icon: '✈️',
        content: 'Korean Air KE1550. Depart Jeju (CJU) 18:20, arrive Busan (Gimhae, PUS) 19:20, Terminal D (domestic). Economy, 20 kg checked bag.',
        address: 'Jeju International Airport (CJU) → Gimhae International Airport (PUS)',
        mapQuery: '김해국제공항',
        notes: [
          { type: 'warning', text: 'Bring your passport: the airline checks ID at check-in and boarding. Check flight status that morning because of the storm.' }
        ]
      },
      {
        label: 'Check-In — The Westin Josun Busan',
        icon: '🏨',
        content: 'Check-in is from 3:00 PM. You land at 19:20, so expect to arrive around 20:30 (estimate). Check-out is Sunday at 12:00 PM.',
        address: 'The Westin Josun Busan · 67 Dongbaek-ro, Haeundae-gu, Busan 48100 · +82-51-749-7000',
        mapQuery: '웨스틴 조선 부산',
        notes: [
          { type: 'reservation', text: 'Hotel confirmed · Oct 24–25' }
        ]
      },
      {
        label: 'Late Dinner — Haeundae Market Gomjangeo',
        icon: '🍽️',
        content: 'Around 21:00, a short taxi from the hotel. Gomjangeo (grilled hagfish) is Busan’s signature drinking food. Haeundae Sangomjangeo (해운대산곰장어) is inside the market: salt-grilled or marinated, from ₩40,000 for 300g, and finish with fried rice in the leftover sauce. Before or after, Sangguk Ine (상국이네) for market tteokbokki, eomuk and twigim.',
        address: '해운대산곰장어 · 14-1 Gunam-ro 41beon-gil, Haeundae-gu, Busan · 051-747-6004',
        mapQuery: '해운대산곰장어',
        notes: [
          { type: 'info', text: 'Haeundae Sangomjangeo: 11:30 to 23:00, open year-round. Backup if the flight runs late: Haegeumgang Gomjangeo (해금강곰장어), 37 Gunam-ro 41beon-gil, open until 02:00 daily, 051-746-5054.' },
          { type: 'info', text: 'Sangguk Ine: listed as 24 hours on a Korean market guide · 40-1 Gunam-ro 41beon-gil · 051-742-9001.' },
          { type: 'warning', text: 'Heavy rain and gusts are forecast tonight, so take a taxi rather than walking the beach.' }
        ]
      }
    ]
  },
  {
    id: 8,
    date: 'Sunday, October 25 — Busan → Seoul',
    location: 'Busan → Seoul',
    sublocation: 'Haeundae · KTX 080 at 21:41',
    theme: 'busan',
    stay: 'Seoul Myeongdong Hotel · late check-in after midnight',
    highlights: [
      { icon: '🐡', text: 'Kumsu Bokguk' },
      { icon: '🖼️', text: 'Space Lee Ufan' },
      { icon: '🛍️', text: 'Haeridan-gil' },
      { icon: '🏭', text: 'F1963' },
      { icon: '☕', text: 'Aery Coffee' },
      { icon: '🥢', text: 'Jungang Momil' },
      { icon: '🥩', text: 'Choryang galbi' },
      { icon: '🚄', text: 'KTX 080 to Seoul' }
    ],
    sections: [
      {
        label: 'Breakfast — Kumsu Bokguk',
        icon: '🐡',
        content: 'Around 8:30. Michelin-listed blowfish soup, the classic Haeundae breakfast. Eunbok guk (silver puffer soup) is ₩15,000; bok bulgogi if you want something bigger.',
        address: 'Kumsu Bokguk · 23 Jung-dong 1-ro 43beon-gil, Haeundae-gu, Busan · 051-742-3600',
        mapQuery: '금수복국 해운대',
        notes: [
          { type: 'warning', text: 'Tagged 24 hours and open year-round, but no posted schedule. Call to confirm.' }
        ]
      },
      {
        label: 'Morning — Space Lee Ufan & Busan Museum of Art',
        icon: '🖼️',
        content: '10:00 to 11:00, about 10 minutes by taxi. Start at Space Lee Ufan (이우환공간), the dedicated Lee Ufan building on the museum grounds, with his From Line, From Point and Relatum works. If time is left, the main building reopened in September 2026; its best show is the 1945 to 1953 exhibition on Busan as the wartime capital.',
        address: 'Busan Museum of Art · 58 APEC-ro, Haeundae-gu, Busan · BEXCO station exit 5',
        mapQuery: '이우환공간',
        notes: [
          { type: 'info', text: 'Space Lee Ufan: 10:00 to 18:00, last entry 17:30, closed Mondays, free. Main building last entry 17:00. Info 051-740-2601.' }
        ]
      },
      {
        label: 'Late Morning — Haeridan-gil',
        icon: '🛍️',
        content: '11:15 to 12:00. A lane of indie shops by the old Haeundae Station, about 10 minutes from the Westin and a good rainy-day browse. Omyohan Sangjeom (오묘한 상점) for European vintage kitchenware and ceramics. Loft Mansion (루프트맨션) for tableware, vases and its own textiles in a converted house. Orleans Store (올리언스 스토어) for remade 1950s to 1990s vintage clothing and bags.',
        address: 'Haeridan-gil · around 1-ro 38beon-gil, U-dong, Haeundae-gu, Busan',
        mapQuery: '해리단길',
        notes: [
          { type: 'info', text: 'Omyohan Sangjeom 11:00 to 19:00 · Loft Mansion from 11:00 · Orleans Store 12:00 to 20:00 daily. London Sanghoe is closed Sundays.' }
        ]
      },
      {
        label: 'Check-Out — The Westin Josun Busan',
        icon: '🏨',
        content: 'Back by 12:00 PM to check out, or ask the front desk tonight for a 1:00 PM late checkout to take the pressure off. The train is not until 21:41, so ask them to hold your bags until mid-afternoon.',
        address: 'The Westin Josun Busan · 67 Dongbaek-ro, Haeundae-gu, Busan',
        mapQuery: '웨스틴 조선 부산',
        notes: []
      },
      {
        label: 'Lunch & Gallery — F1963',
        icon: '🏭',
        content: '12:30 to 14:30. A former wire factory turned culture complex. Kukje Gallery Busan has Korakrit Arunanondchai’s "Post Ritual Bodies" (ends Oct 31). Yes24 used bookstore and the F1963 library are in the same complex. Lunch at Boksoondoga, the makgeolli brewery restaurant (₩80,000 set, à la carte from ₩38,000), or keep it casual with Terarosa coffee in the old factory hall.',
        address: 'F1963 · 20 Gurak-ro 123beon-gil, Suyeong-gu, Busan',
        mapQuery: 'F1963',
        notes: [
          { type: 'info', text: 'Kukje Gallery: Tue to Sun 10:00 to 18:00. Terarosa: 9:00 to 21:00 daily.' },
          { type: 'warning', text: 'Boksoondoga hours not found. Call 051-757-2963. Terarosa is the fallback.' },
          { type: 'info', text: 'If there is time, wander Mangmi-dong (망리단길), the local cafe neighborhood around F1963. Moto Coffee (모토커피, 16 Gwajeong-ro) is open Sundays 11:00 to 21:00.' }
        ]
      },
      {
        label: 'Afternoon — Bags & Busan Station',
        icon: '🧳',
        content: 'Around 14:45, taxi back to the Westin for the bags, then on to Busan Station. Allow 45+ minutes in rain traffic. Store the bags at the station.',
        address: 'Busan Station, Dong-gu, Busan',
        mapQuery: '부산역',
        notes: [
          { type: 'warning', text: 'Station luggage lockers not confirmed. Check sizes and availability when you arrive.' }
        ]
      },
      {
        label: 'Afternoon — Jung-gu: Aery Coffee & Modern History',
        icon: '☕',
        content: 'Around 16:00, one subway stop to Jungang Station. Aery Coffee: owner won the 2024 Korea barista championship; get a single-origin latte. Yeongyeongjae is a 3-minute walk, with yuja makgeolli and plum tea. The Busan Modern History Museum (former Bank of Korea building, free) is nearby. Snack stop: Jungang Momil (중앙모밀), open since 1956, for buckwheat soba or momil hot pot. Then the covered Gukje Market and Bosu-dong book alley if time allows.',
        address: 'Aery Coffee · 47 Jungang-daero, Jung-gu, Busan',
        mapQuery: '애리커피',
        notes: [
          { type: 'warning', text: 'Aery Coffee: 10:00 to 19:00, last order 18:30. Modern History Museum closes 18:00. Yeongyeongjae listed until 20:00.' },
          { type: 'info', text: 'Jungang Momil: 9-1 Jungang-daero 49beon-gil · 11:00 to 20:00, closed Wednesdays. Skip Ttungbojip (closed the 4th Sunday, which is Oct 25) and Jungang Sikdang (closed Sundays).' },
          { type: 'info', text: 'Shopping: GOYOU (고유), a Japanese-archive vintage shop in Gwangbok-dong with Yohji Yamamoto and Junya Watanabe, hand-picked in Japan by the owner. 14 Gwangbok-jungang-ro 34beon-gil, Jung-gu · 13:00 to 20:00 · short walk from Jungang.' },
          { type: 'warning', text: 'GOYOU closed day not listed. Check its Instagram or call before going.' },
          { type: 'info', text: 'If the rain lets up: swap to Yeongdo for Momos Coffee’s harbor warehouse roastery, Busan Biennale at Space Wonji (free, last entry 17:30, through Nov 1), and Huinnyeoul village.' }
        ]
      },
      {
        label: 'Dinner — Choryang Six Flavors Street',
        icon: '🥩',
        content: 'Around 19:00, across the 8-lane road from Busan Station (초량육미거리). Local pick: Miryang Galbi (밀양갈비), pork galbi, one of DiningCode’s top-rated Choryang old-timers. Gukbap option: Uri Dwaeji Gukbap (우리돼지국밥). Safe fallback with confirmed hours: Sinbalwon dumplings in Chinatown. Be at the platform area by 21:15.',
        address: '밀양갈비 · Choryang-ro, Dong-gu, Busan · 051-466-4546',
        mapQuery: '밀양갈비 초량',
        notes: [
          { type: 'warning', text: 'Miryang Galbi Sunday hours not confirmed. Call ahead.' },
          { type: 'info', text: 'Sinbalwon (신발원): 62 Daeyeong-ro 243beon-gil · 11:00 to 20:00, closed Tuesdays · sit down by 19:00.' },
          { type: 'warning', text: 'Skip Pyeongsanok (closed Sundays) and Choryang Milmyeon (Korean reviewers find the broth oddly sweet).' }
        ]
      },
      {
        label: 'Train — KTX 080 to Seoul',
        icon: '🚄',
        content: 'Busan 21:41 → Seoul 00:21 (2h 40m). First Class, forward-facing, adult. Car 4, seats 6B and 6C.',
        notes: [
          { type: 'info', text: 'Platform information is released 15 minutes before departure. Show each QR code at the gate.' },
          { type: 'warning', text: 'The train gets in at 00:21, so the subway may be finished for the night. Plan on a taxi to Myeongdong.' }
        ]
      },
      {
        label: 'Late Check-In — Seoul Myeongdong',
        icon: '🏨',
        content: 'Expect to reach the hotel around 1:00 AM. Tell the hotel you are arriving after midnight so the front desk is staffed.',
        address: 'Seoul Myeongdong',
        notes: [
          { type: 'reservation', text: 'Hotel confirmed · Oct 25–31' }
        ]
      }
    ]
  },
  {
    id: 9,
    date: 'Monday, October 26 — Yongsan & Samgakji',
    location: 'Seoul',
    sublocation: 'Yongsan & Samgakji',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · Oct 25–31',
    highlights: [
      { icon: '🏛️', text: 'National Museum of Korea' },
      { icon: '🍖', text: 'Mongtan late lunch' },
      { icon: '🍜', text: 'Dinner at I Love ShinDangDong' }
    ],
    sections: [
      {
        label: 'Afternoon — National Museum of Korea',
        icon: '🏛️',
        content: 'Korea\u2019s largest museum, covering everything from prehistory through the Joseon dynasty — worth budgeting a few hours. Open daily except major holidays; closed one Monday per quarter (March, June, September, December), which doesn\u2019t fall on this date in 2026.',
        address: 'National Museum of Korea, Yongsan-gu, Seoul',
        mapQuery: '국립중앙박물관',
        notes: []
      },
      {
        label: 'Late Lunch — Mongtan',
        icon: '🍖',
        content: 'Late lunch at Mongtan near Samgakji Station, a short hop from Ichon: straw-fire-grilled beef short ribs (udae galbi) and smoky pork belly. One of the most sought-after barbecue spots in Seoul. Moved from dinner to lunch; already on the waitlist.',
        address: 'Mongtan · 50 Baekbeom-ro 99-gil, Yongsan-gu, Seoul',
        mapQuery: '몽탄',
        notes: [
          { type: 'warning', text: 'No reservations: on-site waitlist only (open daily 12\u201310pm). Register in person about 2\u20133 hours before you want to eat, e.g. around 3:30pm during the museum visit (Samgakji is one stop from Ichon). They call when your table is ready and you must be back within 10 minutes. Without a Korean phone number, tell the staff when you register.' }
        ]
      },
      {
        label: 'Afternoon – Namdaemun Market',
        icon: '🛍️',
        content: 'Head straight from Samgakji on Line 4 to Hoehyeon Station (about 10 minutes), right at the market. Browse the stalls and alleys, and look for kitchenware and small ceramics. A walk, not a mission, after a big lunch.',
        address: 'Namdaemun Market, Jung-gu, Seoul',
        mapQuery: '남대문시장',
        notes: [
          { type: 'warning', text: 'Many stalls wind down in the early evening, so go first. Hours not verified, check Naver Map.' }
        ]
      },
      {
        label: 'Early Evening – Rest at the Hotel',
        icon: '🏨',
        content: 'Walk back to Seoul Myeongdong Hotel (about 10 to 15 minutes from the market) to rest and freshen up before dinner.',
        address: 'Seoul Myeongdong Hotel, Seoul',
        notes: []
      },
      {
        label: 'Dinner – I Love ShinDangDong',
        icon: '🍜',
        content: 'Dinner done at I Love ShinDangDong (replaced the earlier Myeongdong Kyoja plan).',
        mapQuery: '아이러브신당동',
        notes: []
      }
    ]
  },
  {
    id: 10,
    date: 'Tuesday, October 27 — Noryangjin & Dosan Park',
    location: 'Seoul',
    sublocation: 'Noryangjin & Dosan Park',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · Oct 25–31',
    highlights: [
      { icon: '🐟', text: 'Noryangjin Fish Market (breakfast)' },
      { icon: '👞', text: 'Dosan Park menswear loop' },
      { icon: '🏺', text: 'Pottery drop-off at hotel, 7 to 8pm' }
    ],
    sections: [
      {
        label: 'Early Morning — Noryangjin Fish Market Breakfast',
        icon: '🐟',
        content: 'Moved from Oct 26. Go early for the real wholesale-market energy: pick your own fish, shellfish, or octopus on the market floor, then have it prepared sashimi-style at one of the upstairs restaurants for an unusual breakfast.',
        address: 'Noryangjin Fish Market, Dongjak-gu, Seoul',
        mapQuery: '노량진수산시장',
        notes: [
          { type: 'info', text: 'The clinic appointment that was planned for today moved to Thursday, Oct 29 at 10:30am, so nothing is fixed before the afternoon.' },
          { type: 'info', text: 'Upstairs restaurant hours and whether they serve a sashimi breakfast this early are not verified. Check on Naver Map, and have a backup breakfast in mind.' }
        ]
      },
      {
        label: 'Lunch – Keep It Simple',
        icon: '🥢',
        content: 'Something easy before the menswear loop. Mu-gu-ok and Neung-dong Minari were dropped from this day since both are detours from Gangnam. They stay on the friend\u2019s list for another day.',
        notes: [
          { type: 'info', text: 'No venue picked yet. Check Naver Map for something near Dosan Park or on the way.' }
        ]
      },
      {
        label: 'Afternoon – Menswear Loop: Dosan Park & Apgujeong',
        icon: '👞',
        content: 'Head to Dosan Park by taxi or subway (check Naver Map for the route from where you are). Four shops from the Permanent Style Seoul guide sit within a few blocks of each other:\n• Unipair: the widest range of classic shoes in Seoul, with Alden and more.\n• Random Walk: smart-casual multibrand with JM Weston, Coherence and Esk. Same alley as Unipair.\n• Joe’s Garage: Japanese repro brands such as Toys McCoy, Full Count and Warehouse.\n• San Francisco Market: Korea’s first menswear multibrand, with Nepenthes, Engineered Garments and Alden.\nSuggested order: Unipair, Random Walk, Joe’s Garage, San Francisco Market. Allow about 2 hours.',
        address: 'Unipair · 37-1 Eonju-ro 164-gil · Random Walk · 40 Eonju-ro 164-gil · Joe’s Garage · 75 Apgujeong-ro 46-gil · San Francisco Market · 29-10 Dosan-daero 49-gil, Gangnam-gu, Seoul',
        mapQuery: '언주로164길 37-1',
        notes: [
          { type: 'warning', text: 'Everything closes early. Listed hours: Random Walk 12:30 to 20:00 daily, Unipair 11:00 to 20:00, Joe’s Garage 11:00 to 20:00, San Francisco Market 11:00 to 20:30 on one listing (an older one says 22:00). Start by about 4:00pm and wrap up by about 6:00pm so you can reach the hotel before the pottery drop-off at 7pm.' },
          { type: 'info', text: 'Hours come from third-party listings, not the shops. Check Naver Map the day before. San Francisco Market’s address differs between listings (the other is 11 Eonju-ro 170-gil), so confirm on Naver.' },
          { type: 'info', text: 'None of these is confirmed to stock Gitman Bros. Ask at Joe’s Garage and Random Walk. If the loop runs long, shorten it rather than skipping the pottery drop-off.' }
        ]
      },
      {
        label: 'Evening – Pottery Drop-Off at Hotel, 7 to 8pm',
        icon: '🏺',
        content: 'Fixed: the pottery drop-off at Seoul Myeongdong Hotel is between 7 and 8pm. Leave Dosan Park by about 6:00 to 6:15 (about 35 to 40 minutes by subway, check Naver Map). Dinner afterward, near the hotel.',
        address: 'Seoul Myeongdong Hotel, Seoul',
        notes: [
          { type: 'warning', text: 'Hard constraint. If the afternoon runs long, trim the menswear loop, not this.' }
        ]
      }
    ]
  },
  {
    id: 11,
    date: 'Wednesday, October 28 — Jongno & Seongsu',
    location: 'Seoul',
    sublocation: 'Jongno & Seongsu',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · Oct 25–31',
    highlights: [
      { icon: '☕', text: 'Fritz Coffee Wonseo, 9am' },
      { icon: '🌳', text: 'Huwon Secret Garden' },
      { icon: '🍱', text: 'A Flower Blossom on the Rice, 12pm' },
      { icon: '🎨', text: 'KCDF Gallery Shop' },
      { icon: '🛍️', text: 'Seongsu: pins, Ader Error, Boundary' }
    ],
    sections: [
      {
        label: '9:00am – Breakfast at Fritz Coffee Wonseo',
        icon: '☕',
        content: 'Breakfast at Fritz Coffee Wonseo, between Changdeokgung and Anguk. A hanok-style cafe where separate buildings wrap around a courtyard, with a wooden porch to sit out on if the weather holds. It is the Seoul roaster you also met at Seongsan on Jeju, in a much older setting. A few minutes on foot from the palace gate, so it leads straight into the 10:30 tour.',
        address: 'Fritz Coffee Company Wonseo · 83 Yulgok-ro, Jongno-gu, Seoul (1F, Arario Space)',
        mapQuery: '프릳츠 원서점',
        notes: [
          { type: 'info', text: 'Moved from a post-tour coffee to a 9:00am breakfast. Opening hours and food menu are not verified, so check Naver Map tonight that it is open by 9:00.' }
        ]
      },
      {
        label: 'Morning — Changdeokgung & Huwon Secret Garden',
        icon: '🌳',
        content: 'After breakfast, get to Changdeokgung around 10:00 to buy the palace ticket and see the main halls, then join the 10:30 English tour of Huwon, the Secret Garden: the royal family’s wooded back garden of pavilions and ponds, open only by guided tour (about 90 minutes). Late October should be near peak autumn color.',
        address: 'Changdeokgung Palace · 99 Yulgok-ro, Jongno-gu, Seoul',
        mapQuery: '창덕궁',
        notes: [
          { type: 'reservation', text: 'Book the 10:30 English Secret Garden tour at ticket.uforus.co.kr (account required). Booking opens Oct 22 at 10:00am KST (6 days ahead) and closes 3 days before. 5,000 KRW, plus a separate palace ticket. 50 walk-up spots per tour if online sells out.' },
          { type: 'warning', text: 'Changdeokgung is closed Mondays. English tours run 10:30, 11:30, 14:30 and 15:30.' },
          { type: 'warning', text: 'The 10:30 Huwon tour runs about 90 minutes and ends around 12:00, while lunch is booked for 12:00 in Gwanhun-dong (about 15 minutes away). Expect to be a little late and tell the restaurant, or keep the tour on 10:30 and ask for 12:15.' }
        ]
      },
      {
        label: '12:00pm – Lunch at A Flower Blossom on the Rice',
        icon: '🍱',
        content: 'Reservation at 12:00pm. A Michelin-recommended modern Korean tasting menu in Gwanhun-dong, about a 15-minute walk or a short taxi from Changdeokgung.',
        address: 'A Flower Blossom on the Rice · Gwanhun-dong, Jongno-gu, Seoul',
        mapQuery: 'A Flower Blossom on the Rice',
        notes: [
          { type: 'reservation', text: 'Reservation for 12:00pm. Confirm it is held: +82 2-732-0276. Open daily 11:30am to 3pm.' }
        ]
      },
      {
        label: 'Early Afternoon – KCDF Gallery Shop',
        icon: '🎨',
        content: 'Stop at the KCDF Gallery Shop on Insadong-gil, the Korea Craft & Design Foundation shop: a well-curated selection of contemporary Korean craft and design objects. A short walk from lunch, and easy to do before heading east to Seongsu.',
        address: 'KCDF Gallery Shop · Insadong-gil, Jongno-gu, Seoul',
        mapQuery: 'KCDF 갤러리숍 인사동',
        notes: [
          { type: 'info', text: 'Hours not verified. Check Naver Map.' }
        ]
      },
      {
        label: 'Afternoon – Seongsu (Seongdong-gu)',
        icon: '🛍️',
        content: 'Head east to Seongsu (about 30 minutes from Insadong by subway or taxi; check Naver Map). Work the loop from George\u2019s saved pins:\n\u2022 LCDC Seoul: concept store, saved to Want to go in April.\n\u2022 Jayeondo Sogeumppang: the salt bread bakery in Seongsu.\n\u2022 Coor: clothing store.\n\u2022 DOCUMENT Flagship Store: clothing store from the Korea list.\n\u2022 Narrative Object (내러티브오브젝트): household goods store.\n\u2022 Forest Seoulsup: fruit parlor, a good sweet stop.\nAlso add Ader Error and Boundary to the loop.',
        address: 'Seongsu-dong, Seongdong-gu, Seoul',
        mapQuery: '성수동',
        notes: [
          { type: 'warning', text: 'Store addresses and hours are not verified for any of these. Check each on Naver Map before slotting an order, since Seongsu shops often open late morning to noon and some close one weekday.' },
          { type: 'info', text: 'Ader Error and Boundary were added from feedback with no address. Confirm which Seongsu locations before heading out.' }
        ]
      },
      {
        label: 'Evening – Dinner (placeholder)',
        icon: '🍽️',
        content: 'TBD. George to review the saved pins and pick dinner. Grandmother\u2019s Recipe, a Korean restaurant saved to Want to go on Sep 21, is the one restaurant pin from the Seongsu list.',
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
    stay: 'Seoul Myeongdong Hotel · Oct 25–31',
    highlights: [
      { icon: '📅', text: 'GU Clinic, 10:30am (until about 1pm)' },
      { icon: '🌿', text: 'Yangnyeongsi Medicine Market' },
      { icon: '☕', text: 'Cha Cha Tea Club' },
      { icon: '🛍️', text: 'DDP' },
      { icon: '🌊', text: 'Cheonggyecheon walk' },
      { icon: '💆', text: 'EcoJardin 7pm (may move to Fri 9pm)' }
    ],
    sections: [
      {
        label: '10:30am – GU Clinic Appointment',
        icon: '📅',
        content: 'Moved from Tuesday, Oct 27. Appointment for both of you at 10:30am, on the 4th floor of the building. Consultation is in English. Treatment is expected to run until about 1pm (estimate, so confirm with the clinic). Go by subway or taxi from the hotel (check Naver Map for timing) and aim to arrive a little early.',
        address: 'W Tower, 3~4F · 54 Seocho-daero 77-gil, Seocho-gu, Seoul (서울특별시 서초구 서초대로77길 54 더블유타워 3~4층)',
        mapQuery: '서울특별시 서초구 서초대로77길 54 더블유타워',
        notes: [
          { type: 'reservation', text: 'Rescheduled from Oct 27, 12:30pm to Oct 29, 10:30am, 4F. Bring your passports.' },
          { type: 'warning', text: 'The clinic says there may be extended waiting times depending on the day. The only fixed commitment after it is EcoJardin at 7:00 PM, so the afternoon below is flexible and can be trimmed.' },
          { type: 'info', text: 'Nearest stations: Sinnonhyeon Station Exit 7 (Line 9), a 2-minute walk, or Gangnam Station Exit 10 (Line 2), a 6-minute walk. No parking, so go by subway or taxi.' },
          { type: 'warning', text: 'The clinic sent pre-visit instructions on WhatsApp. Reread them tomorrow (Oct 28), since something may need doing the day before, and check with the clinic that nothing changed with the new date.' }
        ]
      },
      {
        label: 'Lunch – Near the Clinic',
        icon: '🥢',
        content: 'Keep lunch simple and close to Sinnonhyeon after the appointment, before heading east to Jegi-dong.',
        notes: [
          { type: 'info', text: 'No venue picked yet. Check Naver Map for something near Sinnonhyeon Station.' }
        ]
      },
      {
        label: 'Afternoon — Seoul Yangnyeongsi Medicine Market',
        icon: '🌿',
        content: 'Seoul Yangnyeongsi Medicine Market in Jegi-dong is Korea\u2019s largest traditional herbal medicine market — narrow lanes stacked with dried roots and herbs. The small Herbal Medicine Museum on site gives good context before wandering the stalls. Stop in at the Seoul K-Medi Center on the market for the Bojewon massage: a heated massage bed with hand and foot massage (\u20a95,000). The medicinal foot bath (\u20a96,000) is also here.',
        address: 'Seoul K-Medi Center · 26 Yangnyeongjungang-ro, Dongdaemun-gu, Seoul',
        mapQuery: '서울한방진흥센터',
        notes: [
          { type: 'info', text: 'K-Medi Center: 10am–6pm, closed Mondays. With the clinic first, aim to be here by about 3pm so there is time before it closes. Experiences are first-come, first-served, booked on site.' }
        ]
      },
      {
        label: 'Afternoon — Tea at Cha Cha Tea Club',
        icon: '☕',
        content: 'Cha Cha Tea Club, a hidden hanok tea house down an alley near Dongdaemun Station, where you brew your own tea. It\u2019s a few minutes from DDP, so it fits between the medicine market and DDP.',
        address: 'Cha Cha Tea Club \u00b7 13 Jong-ro 46ga-gil, Jongno-gu, Seoul (Dongdaemun Station exit 6)',
        mapQuery: '차차티클럽',
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
        mapQuery: '설빙',
        notes: []
      },
      {
        label: 'Early Evening – Cheonggyecheon Stream Walk (optional)',
        icon: '🌊',
        content: 'Cheonggyecheon is the man-made stream running through central Seoul, nice to walk along. It passes right by Dongdaemun, so you can walk it west toward Myeongdong after DDP (about 40 to 50 minutes to the Gwanggyo area, then a short walk to the hotel). Or just do a stretch of it and take the subway.',
        address: 'Cheonggyecheon Stream, Jung-gu / Jongno-gu, Seoul',
        mapQuery: '청계천',
        notes: [
          { type: 'warning', text: 'EcoJardin is booked for 7:00 PM. Leave the stream by about 6:15 so you are not rushed.' }
        ]
      },
      {
        label: 'Evening — Hair/Scalp Treatment at EcoJardin',
        icon: '💆',
        content: 'Booked for 7:00 PM. Head back toward the hotel for EcoJardin Myeongdong \u2014 a 3-minute walk from Myeongdong Station, a few subway stops from Dongdaemun. English-speaking staff (English, Japanese, and Chinese service). Open until 10pm on weekdays. Offers K-style cuts, 9/15/18-step scalp treatments, keratin treatment, perms, and coloring.',
        address: 'EcoJardin Myeongdong \u00b7 3F, 8-10 Myeongdong 8-gil, Jung-gu, Seoul',
        mapQuery: '명동8길 8-10',
        notes: [
          { type: 'reservation', text: 'Confirmed via WhatsApp: Oct 29 at 7:00 PM, 2 people. Contact EcoJardin on WhatsApp at +82 10-8332-6980 to make changes.' },
          { type: 'warning', text: 'Possible move: Friday Oct 30 at 9:00 PM (EcoJardin is open until 10pm). Not confirmed yet, so this 7:00 PM booking stands until EcoJardin agrees to the change.' }
        ]
      },
      {
        label: 'Dinner — Doug to Decide',
        icon: '🍽️',
        content: 'TBD. Doug is choosing dinner. EcoJardin starts at 7:00 PM, so this will be a late dinner after the treatment, in or near Myeongdong.',
        notes: []
      }
    ]
  },
  {
    id: 13,
    date: 'Friday, October 30 — Hannam-dong & Itaewon',
    location: 'Seoul',
    sublocation: 'Hannam-dong & Itaewon',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · Oct 25–31',
    highlights: [
      { icon: '🖼️', text: 'Leeum Museum of Art' },
      { icon: '🎨', text: 'Pace Gallery' },
      { icon: '🛍️', text: 'Beaker & NIFTYDO' },
      { icon: '🪑', text: 'Itaewon Antique Furniture St.' },
      { icon: '🛕', text: 'Jogyesa Temple, 5:30pm' },
      { icon: '🍱', text: 'Balwoo Gongyang, 6pm' },
      { icon: '💆', text: 'EcoJardin 9pm (pending)' },
      { icon: '🍹', text: 'VIBD BLVD / Shortbus' }
    ],
    sections: [
      {
        label: 'Late Morning — Leeum Museum of Art',
        icon: '🖼️',
        content: 'Samsung\u2019s museum of traditional and contemporary Korean art in Hannam-dong — three buildings designed by Mario Botta, Jean Nouvel, and Rem Koolhaas. Closed Mondays, so today works fine.',
        address: 'Leeum Museum of Art, Hannam-dong, Yongsan-gu, Seoul',
        mapQuery: '리움미술관',
        notes: []
      },
      {
        label: 'Late Morning – Pace Gallery Seoul',
        icon: '🎨',
        content: 'Pace Gallery is a short walk from the Leeum in Hannam-dong, so it fits before the Kwangjuyo stop. Check the current show before you go.',
        address: 'Pace Gallery Seoul, Hannam-dong, Yongsan-gu, Seoul',
        mapQuery: '페이스갤러리 서울',
        notes: [
          { type: 'info', text: 'Hours and exact address not verified. Confirm on Naver Map.' }
        ]
      },
      {
        label: 'Midday — Kwangjuyo Showroom',
        icon: '🏺',
        content: 'Kwangjuyo\u2019s Hannam showroom, a short walk from the Leeum. Kwangjuyo is a well-known Korean ceramics brand making refined, minimal white porcelain and celadon meant for everyday use.',
        address: 'Kwangjuyo Hannam Showroom \u00b7 28 Hannam-daero 20-gil, Yongsan-gu, Seoul',
        mapQuery: '광주요 한남',
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
        mapQuery: '이태원 앤틱가구거리',
        notes: []
      },
      {
        label: '5:30pm – Jogyesa Temple',
        icon: '🛕',
        content: 'Short visit to Jogyesa, the head temple of the Jogye Order, before dinner. A few minutes on foot from Balwoo Gongyang. From Hannam and Itaewon it is roughly 30 to 40 minutes, so leave the antiques street by about 4:45.',
        address: 'Jogyesa Temple · 55 Ujeongguk-ro, Jongno-gu, Seoul',
        mapQuery: '조계사',
        notes: [
          { type: 'info', text: 'Moved here from Wednesday.' }
        ]
      },
      {
        label: '6:00pm – Dinner at Balwoo Gongyang',
        icon: '🍱',
        content: 'Reservation at 6:00pm. Balwoo Gongyang is the Michelin-starred temple-cuisine restaurant a few minutes from Jogyesa.',
        address: 'Balwoo Gongyang · Ujeongguk-ro, Jongno-gu, Seoul',
        mapQuery: '발우공양',
        notes: [
          { type: 'reservation', text: 'Reservation for 6:00pm. Confirm it is held: +82 2-733-2081. Closed Sundays, so Friday is fine.' },
          { type: 'info', text: 'Moved here from the Wednesday lunch plan.' }
        ]
      },
      {
        label: '9:00pm – Scalp Treatment at EcoJardin (pending)',
        icon: '💆',
        content: 'Proposed move from Thursday 7:00 PM. EcoJardin Myeongdong is open until 10pm, and a 6:00pm dinner should wrap up around 8:00, leaving time to get back to Myeongdong. Offers 9/15/18-step scalp treatments, so pick a length that finishes before close.',
        address: 'EcoJardin Myeongdong · 3F, 8-10 Myeongdong 8-gil, Jung-gu, Seoul',
        mapQuery: '명동8길 8-10',
        notes: [
          { type: 'warning', text: 'Not confirmed. Ask EcoJardin on WhatsApp (+82 10-8332-6980) whether Friday Oct 30 at 9:00 PM works for 2 people, and whether the treatment will finish by their 10pm close. Until they confirm, Thursday 7:00 PM stands.' }
        ]
      },
      {
        label: 'Evening — Drinks',
        icon: '🍹',
        content: 'VIBD BLVD, an NYT pick, for a last relaxed evening — or Shortbus, a cozy LGBTQ+ corner bar also in Itaewon, if you\u2019re after something more low-key and neighborhood-y. Gyeongridan-gil is right next door for a bar crawl: Berry Very Much, Sool Club, and craft makgeolli.',
        address: 'VIBD BLVD / Shortbus, Itaewon, Seoul',
        notes: []
      },
      {
        label: 'Evening – Itaewon Back Alleys & Halloween Crowds',
        icon: '🎃',
        content: 'A friend\u2019s tip for Itaewon: wander the back alleys for bars and restaurants. The same friend advised avoiding Itaewon around Halloween, and Oct 30 is the Friday before Halloween weekend. Plan to be done by early evening or keep to the quieter Hannam side if it gets rowdy.',
        address: 'Itaewon, Yongsan-gu, Seoul',
        mapQuery: '이태원',
        notes: [
          { type: 'warning', text: 'Halloween weekend crowds. If the streets are packed, swap the drinks for Hannam-dong or head back to Myeongdong early.' }
        ]
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
      { icon: '🥟', text: 'Myeongdong Gyoza' },
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
        mapQuery: '남대문시장',
        notes: [
          { type: 'info', text: 'Kitchenware floors open 8:30am\u20136:30pm, closed Sundays (Saturday is fine). Brass and stoneware are heavy, so save room in a checked bag.' }
        ]
      },
      {
        label: 'Optional – Deoksugung Palace',
        icon: '🏯',
        content: 'Deoksugung is the palace between City Hall and Myeongdong. It opens at 9:00am, so it fits before Namdaemun Market if you want a quiet last palace visit. Only do this if you drop MMMG, since the morning is tight with a 1:30pm departure from Myeongdong.',
        address: 'Deoksugung Palace, Jung-gu, Seoul',
        mapQuery: '덕수궁',
        notes: [
          { type: 'warning', text: 'Closed Mondays, so Saturday is fine. Verify hours on Naver Map.' }
        ]
      },
      {
        label: 'Optional – MMMG',
        icon: '✏️',
        content: 'MMMG (Millimeter Milligram), a stationery and everyday-objects brand that works closely with small workshops and material suppliers in Seoul’s older districts. The store is on Sowol-ro at the foot of Namsan, a short taxi or about a 20-minute walk from Namdaemun Market. It opens at 11:30, so it slots between the market and Myeongdong. If the morning runs long, drop Myeongdong shopping instead.',
        address: 'MMMG · 31-1 Sowol-ro, Jung-gu, Seoul',
        mapQuery: '소월로 31-1',
        notes: [
          { type: 'info', text: 'Listed as open 11:30am to 8pm, closed the last Monday of each month (Oct 26 this year, so Saturday is fine). The listing is from a Time Out article and the store has moved before, so confirm the address and hours on Naver Map.' },
          { type: 'warning', text: 'Leave Myeongdong by about 1:30pm for the 5:30pm flight. Keep this to 30 to 40 minutes.' }
        ]
      },
      {
        label: 'Late Morning — Myeongdong Shopping',
        icon: '🛍️',
        content: 'Myeongdong is right next to Namdaemun and to the hotel, so it\u2019s an easy last stop — Aland\u2019s flagship for multi-brand Korean fashion, and Su;py (SUPY) for menswear. Alkimia Seo Chon Ice Cream (an NYT pick) or Youngpoong Bookstore Jongno Main Branch are also nearby if there\u2019s time.',
        address: 'Myeongdong, Jung-gu, Seoul',
        mapQuery: '명동',
        notes: []
      },
      {
        label: 'Lunch – Myeongdong Gyoza or Galchi Jorim Alley',
        icon: '🥟',
        content: 'Myeongdong Gyoza (명동교자) is the original location and an institution: knife-cut noodles (kalguksu) in a rich beefy broth, very garlicky kimchi, and best with an order of steamed dumplings. The alternative is the Galchi Jorim Alley (갈치조림 골목) by Namdaemun Market, an alley of restaurants all serving the same dish, spicy braised cutlassfish, with lots of side dishes.',
        address: 'Myeongdong Gyoza, Myeongdong, Jung-gu, Seoul',
        mapQuery: '명동교자',
        notes: [
          { type: 'info', text: 'Very popular, so expect a line at peak lunch. Go around 11:00 to be out by 12:15. The alley is next to Namdaemun Market, so it fits naturally after the market.' }
        ]
      },
      {
        label: 'Optional – Skincare Stops',
        icon: '💄',
        content: 'Skincare options from the same friend\u2019s list, in order of how close they are to the hotel: Olive Young (the Korean Sephora, everywhere in Myeongdong), Readyyoung Pharmacy (products you would be prescribed by a dermatologist and also find in pharmacies), and OFF Beauty (a warehouse-style beauty store). Check where the nearest Readyyoung and OFF Beauty branches are on Naver Map. Gangnam options if you ever have a spare half day: Optima Wellness Museum (also in Sinsa, Bukchon and Itaewon) and Wellness House Seoul (clinic, products curated to your skin concern, and an Erewhon-style wellness smoothie).',
        mapQuery: '올리브영 명동',
        notes: [
          { type: 'info', text: 'Branch addresses and hours not verified. Shinsegae Twelve in Apgujeong (the Korean Erewhon smoothie) is another option, an Apgujeong stop if you add one.' }
        ]
      },
      {
        label: 'Flight — Departure from Incheon',
        icon: '✈️',
        content: 'Depart Incheon International Airport (ICN) at 5:30pm. Leave Myeongdong by ~1:30pm — AREX from Seoul Station (~45 min to ICN) or taxi (~60–80 min) — to be at the airport 3 hours ahead for an international departure.',
        address: 'Incheon International Airport (ICN)',
        mapQuery: '인천국제공항',
        notes: [
          { type: 'warning', text: 'Add flight number and terminal once booked. Leave the hotel bags at reception after check-out so the morning stays hands-free.' }
        ]
      }
    ]
  }
];

// ─── QUICK REF ────────────────────────────────────────────────────────────────
const QUICK_REF = {
  tips: [
    { name: 'Gwangjang Market (Oct 28)', detail: 'A friend warns the vendors are notorious for overcharging tourists. Worth seeing, but check prices before you order.' },
    { name: 'Itaewon around Halloween (Oct 30)', detail: 'A friend advises avoiding Itaewon near Halloween. Oct 30 is the eve of Halloween weekend, so expect crowds.' }
  ],
  reservations: [
    { name: 'Hotel Sunbee Insadong', detail: 'Confirmed · Check-in Oct 18 · Check-out Oct 21 · 26 Insadong 7-gil, Seoul' },
    { name: 'Seom Studio In Seogwipo #7', detail: 'AirBnb confirmed · Oct 21–24 · Unit #7' },
    { name: 'KE1550 · Jeju to Busan', detail: 'Confirmed · Sat Oct 24, 18:20 → 19:20 · Korean Air · Terminal D at Gimhae' },
    { name: 'The Westin Josun Busan', detail: 'Confirmed · Oct 24–25 · check-in 3:00 PM, check-out 12:00 PM · 67 Dongbaek-ro, Haeundae-gu · +82-51-749-7000' },
    { name: 'KTX 080 · Busan → Seoul', detail: 'Confirmed · Sun Oct 25, 21:41 → 00:21 · First Class, Car 4, seats 6B & 6C · QR codes in the KORAIL web tickets · platform shown 15 min before departure' },
    { name: 'Seoul Myeongdong Hotel', detail: 'Confirmed · Oct 25–31 · arriving after midnight on the KTX, tell the hotel' },
    { name: 'Vic\u2019s Lab Korea — Color Analysis', detail: 'Confirmed · Oct 20, 10:50 AM (1 hr 10 min) · 2 people · [1:2] Signature Color Analysis · Hongdae, Mapo-gu · prepaid via EXIMLink, balance due at studio (KRW cash or overseas credit card via EXIMLink)' },
    { name: 'Seal Carving Class — Feel So Good Calli Studio', detail: 'Not yet booked · Mon Oct 19, 3–5pm · Anguk Station exit 6 · book online (Trazy)' },
    { name: 'Hwahaedang', detail: 'Confirmed via AutoReserve · Lunch Oct 20 (Tue), 12:45 · 2 people, seating only · Yeouido · listed as "Hanakando Yeouido Branch" · fee prepaid, pay for the meal at the restaurant · +82 2-785-4422' },
    { name: 'GU Clinic appointment', detail: 'Rescheduled · Oct 29 (Thu), 10:30am (was Oct 27, 12:30pm) · 4F of the building · bring passports · waits can run long' },
    { name: 'Mongtan', detail: 'No reservations · Dinner Oct 26 (Mon) · Samgakji, Yongsan · on-site waitlist: register in person ~2–3 hrs ahead' },
    { name: 'Balwoo Gongyang', detail: 'Not yet booked · Lunch Oct 28 (Wed), 1:30pm seating · +82 2-733-2081 · closed Sundays' },
    { name: 'Huwon Secret Garden — 10:30 English Tour', detail: 'Not yet booked · Oct 28 · Changdeokgung · booking opens Oct 22, 10:00am KST at ticket.uforus.co.kr · 5,000 KRW + palace ticket' },
    { name: 'EcoJardin Myeongdong — Hair/Scalp Treatment', detail: 'Confirmed · Oct 29, 7:00 PM · 2 people · 3F, 8-10 Myeongdong 8-gil · changes via WhatsApp +82 10-8332-6980' },
    { name: 'Sumangdawon — tea & matcha class', detail: 'Not yet booked · Dropped for now, no time before the Oct 24 flight · ₩30,000 pp, 1 hr · phone only, 0504-1340-3033, likely Korean-only · have the 1330 English line or your Airbnb host call' },
    { name: 'O’Sulloc Tea Stone class', detail: 'Optional · Morning Oct 23 (Fri) · book a few days ahead at osulloc.com · otherwise the cellar tasting is walk-up' },
    { name: 'International Driving Permit', detail: 'BEFORE YOU FLY · Get from AAA in the US; it cannot be issued in Korea · carry it with your US license and passport · required for the Jeju rental car' },
    { name: 'Jeju rental car', detail: 'Not yet booked · Pick up CJU Oct 21, return CJU Oct 24 before the Busan flight · effectively required for this leg · budget ₩50,000–100,000/day for a compact plus full insurance (estimate)' }
  ],
  hours: [
    { name: 'Ollae Guksu (Oct 21)', detail: '08:00–15:00, last order ~14:55 · closed Sundays, so Oct 21 is the only chance' },
    { name: 'Seogwi Dawon (Oct 21)', detail: 'Closes 17:00 · arrive by 16:15 · closed Tuesdays' },
    { name: 'Ungdam Sikdang (Oct 21, Oct 22)', detail: 'Opens 15:00, to 22:00 · closed Sundays · an older listing says noon, do not rely on it' },
    { name: 'Arario Museum (Oct 21)', detail: '10:00–19:00, last entry 18:00 · closed Mondays' },
    { name: 'Sambo Sikdang (Oct 23)', detail: '08:00–21:00, last order 20:00 · closed 2nd & 4th Wednesday (Oct 14, 28) · go to the Seogwipo branch, not Shin-Jeju' },
    { name: 'Lavarr (Oct 23)', detail: 'Open daily 09:00–22:00 · former bathhouse, go up to the roof · 13 Jungang-ro, Seogwipo' },
    { name: 'Miyoungine, Hamo (Oct 23)', detail: 'Hours and closed days not found · check Naver or call before going · mackerel sashimi (고등어회) · 42 Hamohanggu-ro, Daejeong-eup' },
    { name: 'Bonte Museum (Oct 23)', detail: '10:00–18:00 but last admission 17:00 · arrive by 16:30' },
    { name: 'Jeju Museum of Contemporary Art (Oct 23)', detail: '09:00–18:00 · sources disagree on the closing day (most say Mon, one says Wed); Friday is safe · surprise closures during exhibition changeovers, check Naver the day before' },
    { name: 'Arario Dongmun Motel II (Oct 24)', detail: 'Reported Tue–Sun 10:00–19:00, closed Mondays · adult ~₩20,000 · one older source differs, confirm on Naver · 23 Sanji-ro, Jeju City' },
    { name: 'D&Department Jeju (Oct 24)', detail: '10:30–18:30 · closed Wednesdays · free entry · 3 Tapdong-ro 2-gil, Jeju City' },
    { name: 'Jamae Guksu (Oct 24)', detail: '09:00–14:20 and 16:00–19:40 · closed Wednesdays · single source, confirm on Naver · Tapdong-ro 11-gil, Jeju City' },
    { name: 'Myeongjin Jeonbok (Oct 22)', detail: '09:30–20:30, last order 20:00 · closed Tuesdays · waiting ticket, ~30 min' },
    { name: 'Manjanggul (Oct 22)', detail: '09:00–18:00, last entry 17:10 · closed the 1st Wednesday · reopened May 30, 2026, Section 1 only (~1 km of 7.4 km)' },
    { name: 'Seongsan Ilchulbong (Oct 22)', detail: 'Oct hours 05:00–19:00, last ticket 18:00 · ₩5,000 adults · closed only the first Monday of the month (checked Oct 21) · confirm on Naver' },
    { name: 'Haeundae Sangomjangeo (Oct 24)', detail: '11:30–23:00 · open year-round · Haeundae Market · 051-747-6004' },
    { name: 'Haegeumgang Gomjangeo (Oct 24)', detail: '11:00–02:00 daily · late backup · 051-746-5054' },
    { name: 'Sangguk Ine (Oct 24)', detail: 'Listed 24 hours · Haeundae Market · 051-742-9001' },
    { name: 'Haeridan-gil shops (Oct 25)', detail: 'Most open 11:00–12:00 · Omyohan Sangjeom 11–19 · Loft Mansion from 11 · Orleans Store 12–20 · London Sanghoe closed Sundays' },
    { name: 'Jungang Momil (Oct 25)', detail: '11:00–20:00 · closed Wednesdays · Jung-gu, since 1956' },
    { name: 'Moto Coffee, Mangmi-dong (Oct 25)', detail: 'Sun 11:00–21:00' },
    { name: 'Miryang Galbi, Choryang (Oct 25)', detail: 'Sunday hours not confirmed · call 051-466-4546' },
    { name: 'Ttungbojip, Jungang Sikdang (Oct 25)', detail: 'Both closed Oct 25 (4th Sunday / Sundays) · skip' },
    { name: 'Kumsu Bokguk (Oct 25)', detail: 'Tagged 24 hours, year-round, no posted schedule · call 051-742-3600' },
    { name: 'Space Lee Ufan / Busan Museum of Art (Oct 25)', detail: '10:00–18:00 · closed Mondays · Lee Ufan last entry 17:30, free · main building last entry 17:00' },
    { name: 'GOYOU, Gwangbok-dong (Oct 25)', detail: '13:00–20:00 · closed day not listed, check first · Japanese-archive vintage incl. Yohji' },
    { name: 'Kukje Gallery Busan, F1963 (Oct 25)', detail: 'Tue–Sun 10:00–18:00 · Korakrit Arunanondchai show ends Oct 31' },
    { name: 'Boksoondoga, F1963 (Oct 25)', detail: 'Hours not found · call 051-757-2963 · Terarosa (9:00–21:00 daily) is the fallback' },
    { name: 'Aery Coffee (Oct 25)', detail: '10:00–19:00 daily, last order 18:30 · 47 Jungang-daero, Jung-gu' },
    { name: 'Busan Modern History Museum (Oct 25)', detail: 'Tue–Sun 9:00–18:00 · free' },
    { name: 'Busan Biennale (through Nov 1)', detail: '10:00–18:00, closed Mondays · Space Wonji last entry 17:30, free · MOCA Busan last entry 17:00' },
    { name: 'Sinbalwon (Oct 25)', detail: '11:00–20:00 · closed Tuesdays · sit down by 19:00' }
  ],
  cashOnly: [
    { name: 'Seogwipo Maeil Olle Market', detail: 'Older vendors are cash-only · carry ₩50,000–100,000 in small notes · night stalls run 17:00–22:00' },
    { name: 'Everything else on Jeju', detail: 'None of the Jeju restaurants on this itinerary was reported cash-only; Sambo Sikdang takes cards. Card acceptance at the smaller spots was not confirmed, so keep some cash.' }
  ],
  transit: [
    { name: 'Arrival Flight', detail: 'Lands Incheon (ICN) 3:20pm, Oct 18 — add flight number once booked' },
    { name: 'ICN → Insadong', detail: 'AREX express to Seoul Station (~45 min) + Line 1 to Jonggak · or taxi ~60–80 min' },
    { name: 'Departure Flight', detail: 'Departs Incheon (ICN) 5:30pm, Oct 31 — leave Myeongdong by ~1:30pm · add flight number once booked' },
    { name: 'GMP → CJU (Oct 21)', detail: 'Depart Gimpo Terminal D 9:10am · Arrive Jeju 10:25am · 1h 15m' },
    { name: 'KE1550 CJU → PUS (Oct 24)', detail: 'Korean Air · depart Jeju 18:20, arrive Gimhae 19:20 · Terminal D · check-in counter closes 17:50 · return the rental car first' },
    { name: 'KTX 080 (Oct 25)', detail: 'Busan 21:41 → Seoul 00:21 · First Class, Car 4, seats 6B & 6C · taxi from Seoul to Myeongdong, the subway may be done' },
    { name: 'Jeju — car required', detail: 'Rent at CJU. Buses connect the main towns but the tea farms, Jeoji, Bonte, the Seongeup studios and the east coast are poorly served. Alternatives: a hired car with driver for one day (Friday is the best candidate, via Klook or Trazy), Kakao T taxis for evenings in Seogwipo town.' },
    { name: 'Drive times from Seogwipo', detail: 'O’Sulloc / Seogwang-ri ~40 min · Bonte & Jungmun ~25–30 min · Jeoji ~45 min · Seongeup ~35–40 min · Jeju City or CJU ~1 hr · Seongsan ~1 hr · Yeongsil trailhead ~30 min' },
    { name: 'Jeju driving notes', detail: 'Right-hand traffic. Speed cameras everywhere and fines follow the rental. The Hallasan roads (1131, 1100) are winding and can be foggy. Parking is easy except in central Seogwipo. Use Naver Map, not Google Maps.' },
    { name: 'Departure day (Oct 24)', detail: 'Check out of Seogwipo around 8:30 and drive to Jeju City · at CJU by ~4:45pm for the 18:20 flight · return the rental car · check flight status first thing, the storm is due this weekend' },
    { name: 'Help lines', detail: '1330 is the 24-hour travel line in English and will phone a venue for you — useful for the Sumangdawon booking. Consider a Korean eSIM: Hallasan booking may need Korean SMS verification.' },
    { name: 'Late-October weather (climate averages)', detail: '~20°C by day, ~14°C at night, often windy, typhoon season mostly over. Bring a windproof layer. Forecast as of Oct 21: Oct 22 is the one dry day, so the East Coast run is on Thursday. Rain from Friday midday or evening through Sunday, with Oct 24 and 25 the wettest.' },
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
    { name: 'Seoul Botanic Park', detail: 'Needs a day — Gangseo-gu, next to Gimpo Airport (GMP), the opposite side of the city from ICN, so not a pre-departure stop.' },
    { name: 'Jeju Doyewon / Gueok Onggi Village', detail: 'Jeju ceramics alternate · Kang Chang-eon’s centre in Yeongnak, Daejeong (founded 1996), restored the traditional stone kilns; Gueok-ri nearby has an onggi experience school and a village museum built from 700+ donated pieces. Appointment only, hours unverified. Swap for Jeoji on Oct 22 if onggi matters more than painting.' },
    { name: 'Damhwaheon (Jeju Sum Onggi)', detail: 'Jeju ceramics alternate · Kang Seung-chul, grand prize at the 10th Korea Onggi Contest; cafe, workshop and gallery, teaches onggi classes. Unglazed brown and black tea ware. Jeju City area, exact address unconfirmed — check Naver.' },
    { name: 'Dansong Recipe', detail: 'Jeju alternate · Gimnyeong, northeast coast · a potter and cook: local-ingredient meal then a pottery session · Airbnb Experience in Korean, German and English, 4.94 from 359 reviews' },
    { name: 'Orteas tea farm', detail: 'Jeju tea alternate · Jeju-si · Airbnb tea session hosted in Korean and English by owner Wonhee Lee, 4.94 from 307 reviews, max 2 guests · the best English-language farm tasting found' },
    { name: 'Jeju Dawon tea maze', detail: 'Jeju tea alternate · 1246 Sallongnam-ro · 09:50–18:00 · ₩12,000 including tea and snacks · 500m up with ocean views' },
    { name: 'O’Sulloc Tea House Tea Factory (Hannam)', detail: 'Jeju tea alternate · newer O’Sulloc site at the Hannam tea field, reported opened 2026, with an open field and a processing plant · better for production-minded visitors · confirm hours' },
    { name: 'Hueree Natural Park', detail: 'Jeju alternate · Namwon · pink muhly grass, but it usually peaks late Sept to mid-Oct so it may be fading by Oct 21–24' },
    { name: 'Udo Island', detail: 'Jeju — skipped on purpose · ferry, rental bike and return take half a day, which would cost Manjanggul and Dahee-yeon on Oct 22' },
    { name: 'BongSoon’s Black Pork', detail: 'Jeju food swap · 1010 Gueok-ri, Daejeong · 064-792-2030 · black pork with abalone and prawn · a west-side meal' },
    { name: 'Somban', detail: 'Jeju food swap · Seohong-dong, Seogwipo · gogi guksu in town if you miss Ollae Guksu' },
    { name: 'Muroi', detail: 'Jeju food swap · 21 Donggwangbondong-ro, Andeok · bread and coffee near O’Sulloc' },
    { name: 'Dosun Dawon', detail: 'Jeju — NOT visitable · a private Amorepacific field; VisitJeju says entry is prohibited' },
    { name: 'Daeo Bookstore', detail: 'Seochon, near Gyeongbokgung · 55 Jahamun-ro 7-gil (Gyeongbokgung Stn exit 2) · open since 1951, now a book cafe with old books and used objects · older listing says 11am to 10pm, closed days not found, check Naver · Seochon is not on a current day (Day 2 has passed), so Oct 27 open day fits · pairs with Arumjigi' },
    { name: 'Arumjigi', detail: 'Seochon / Anguk · research, exhibitions and design programs on clothing, food and how people live · HQ in Tongui-dong (older report says ₩10,000 entry) plus a free hanok in Anguk-dong · hours not verified · pairs with Daeo Bookstore on the Oct 27 open day' },
    { name: 'Point of View', detail: 'Seongsu · 18 Yeonmujang-gil, Seongdong-gu · three-floor stationery space: tools and art books, curated objects, art paper and fountain pens · listed 12pm to 8pm · Seongsu is not on a current day; pair with Jayeondo Sogeumppang and LCDC Seoul if Oct 27 becomes a Seongsu day' },
    { name: 'Eastern Edition Atelier', detail: 'Gangnam · 17 Eonju-ro 133-gil, Gangnam-gu · furniture brand atelier built around an archive, tea, books and nature · Mon to Sat 10am to 7pm, CLOSED SUNDAYS · fits Oct 27 or any weekday' },
    { name: 'Gentle Monster & Blue Elephant', detail: 'Seongsu eyewear · moved off Oct 27 · needs its own Seongsu half-day, pair with Musinsa, EQL, Point of View, LCDC Seoul and Jayeondo Sogeumppang · confirm store addresses on Naver Map' },
    { name: 'Mu-gu-ok & Neung-dong Minari', detail: 'Traditional Korean lunch options (chicken soup, minari soup) from a friend\u2019s list · moved off Oct 27 · addresses and hours not verified' },
    { name: 'Starfield COEX Mall & Starfield Library', detail: 'Gangnam · optional, not a must · free, 10 to 20 minutes for the library · only if a Gangnam stop ends early · hours not confirmed' },
    { name: 'Parked from Oct 28', detail: 'Moved off Wednesday when the afternoon became Seongsu: Ikseon-dong-gil, Seoul Museum of Craft Art (closed Mondays), Take Ivy and Tannery in Seochon, Jidaebang tea in Insadong, Gwangjang Market with Buchon Yukhoe, Galmaegisal Alley (Ikseon-dong Wando Matjib), Saeseoul cocktail bar. Jogyesa and Balwoo Gongyang moved to Friday Oct 30.' },
    { name: 'Parked from Oct 29', detail: 'Removed from Thursday: Seoul Folk Flea Market (Sinseol-dong, open 10am to 7pm, closed Tuesdays) and Dapsimni Antiques Market (open 9am to 7pm, closed the 1st and 3rd Sundays).' },
    { name: 'Sikijang', detail: 'Functional objects and exhibitions by younger craftspeople · could not confirm the address or hours, check Naver Map before slotting' }
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
