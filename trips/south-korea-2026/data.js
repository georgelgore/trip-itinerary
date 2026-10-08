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
    hours: 'Hours',
    cashOnly: 'Cash Only',
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
          { type: 'reservation', text: 'Confirmed via AutoReserve: Tue Oct 20 at 12:45, 2 people, table, seating only (order on the day). Listed there as "Hanakando Yeouido Branch" under the name "Goa George." Booking fee already paid to AutoReserve; pay for food and drinks at the restaurant. A card hold for possible cancellation fees may show and is released when you arrive. Questions go to AutoReserve, not the restaurant.' },
          { type: 'warning', text: 'Leave Vic’s Lab by about 12:15 for the ~20-min taxi. If the color analysis runs long, keep an eye on the 3pm close.' }
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
        notes: [
          { type: 'info', text: 'Market runs 07:00–20:00 or 21:00 depending on season; the night stalls (1965 Olle Market 54th Street) run 17:00–22:00.' },
          { type: 'cash', text: 'Some of the older vendors are cash-only. Carry ₩50,000–100,000 in small notes for the market.' }
        ]
      }
    ]
  },
  {
    id: 5,
    date: 'Thursday, October 22 — Tea Fields & the West',
    location: 'Jeju',
    sublocation: 'Seogwang-ri · Jeoji · Andeok',
    theme: 'jeju',
    stay: 'Seom Studio In Seogwipo #7',
    highlights: [
      { icon: '🍵', text: 'O’Sulloc Tea Stone' },
      { icon: '🎨', text: 'Jeoji Artists’ Village' },
      { icon: '🏛️', text: 'Bonte Museum (Ando)' },
      { icon: '🐟', text: 'Negeori galchi' }
    ],
    sections: [
      {
        label: '10:00am — Book Seoul Secret Garden Tour (Oct 28)',
        icon: '📲',
        content: 'This is only the booking reminder. The Huwon Secret Garden is at Changdeokgung in Seoul, and the visit itself is on Oct 28 (Day 11). Booking for that tour opens at 10:00am KST today. Book the 10:30 English tour at ticket.uforus.co.kr before heading out. The popular slots go quickly.',
        url: 'https://ticket.uforus.co.kr/web/main?shopEncode=&lang=en',
        notes: [
          { type: 'reservation', text: 'Book right at 10:00am. 5,000 KRW, plus a separate Changdeokgung ticket on the day.' },
          { type: 'warning', text: 'You will be at O’Sulloc at 10:00am under this plan, so do it on your phone the moment it opens rather than waiting until you are back. Have the site loaded and logged in beforehand.' }
        ]
      },
      {
        label: 'Breakfast — Sambo Sikdang',
        icon: '🥘',
        content: 'The classic Seogwipo seafood breakfast. Order the jeonbok ttukbaegi (abalone seafood hot pot) or the jeonbokjuk (abalone porridge). Aim for the 08:00 open so you are on the road west by about 09:00.',
        address: 'Sambo Sikdang (삼보식당) · 25 Jungjeong-ro, Seogwi-dong, Seogwipo · 064-762-3620',
        notes: [
          { type: 'info', text: 'Open 08:00–21:00, last order 20:00. Closed the 2nd and 4th Wednesday of the month (Oct 14 and 28), so today is clear. Walk-in, cards accepted.' },
          { type: 'warning', text: 'There is a second Sambo Sikdang in Shin-Jeju that closes the 2nd and 4th Tuesday. Make sure you go to the Seogwipo one.' }
        ]
      },
      {
        label: 'Morning — O’Sulloc Tea Museum & Seogwang Fields',
        icon: '🍵',
        content: 'About 40 minutes west. Amorepacific opened this in 2001 as Korea’s first tea museum, and the fields behind it are the largest organic tea farm in the country.\nWhat is actually worth your time: the Tea Stone building, where tea masters prepare and serve tea and the cellar staff pour tastings (one reviewer singled out the Jeju Cedar Wood Aged Tea Vintage, the closest thing to an aged Jeju tea you will find here); the walk out into the fields; and buying sejak-grade loose leaf.\nBe clear-eyed about the scale. O’Sulloc’s Jeju tea is machine-planted, machine-tended and machine-harvested. It is a large commercial operation, not artisanal, which is why the small farms are on this itinerary too.',
        address: 'O’Sulloc Tea Museum · 15 Sinhwayeoksa-ro, Andeok-myeon, Seogwipo · +82-64-794-5312',
        notes: [
          { type: 'info', text: 'Open 09:00–18:00 daily (some listings say 19:00 in summer), no closing day, free entry. Visitors report it gets very busy by 10:30, so arrive near the 09:00 open.' },
          { type: 'reservation', text: 'Tea Stone classes are bookable in advance at osulloc.com. Worth doing a few days ahead if you want the guided pour rather than just the cellar tasting.' },
          { type: 'info', text: 'Late October is off-season: ujeon is picked before late April and sejak late April to early May, so nothing is being harvested. The plants are usually in flower and the shops are selling this spring’s stock. Good for tasting and buying, not for picking. Skip the Innisfree Jeju House next door unless you want skincare; it adds nothing on tea.' }
        ]
      },
      {
        label: 'Late Morning — Jeoji Culture & Arts Village',
        icon: '🎨',
        content: 'About 15 minutes north of O’Sulloc, a village where artists actually live and work, with studios and small galleries down the lanes. Two anchors, and the walk between them is the point:\n• Jeju Museum of Contemporary Art (제주현대미술관), 35 Jeoji 14-gil, ₩2,000.\n• Kim Tschang-Yeul Museum of Art, 883-5 Yonggeum-ro, Hallim-eup, ₩2,000. Around 220 of the water-drop painter’s major works, which he donated; he lived on Jeju from 1951 to 1953 during the war. The building itself is strong.\nThis is your best shot at works on paper on the island.',
        address: 'Jeju Museum of Contemporary Art · 35 Jeoji 14-gil, Hangyeong-myeon',
        notes: [
          { type: 'info', text: 'Both open 09:00–18:00. The Kim Tschang-Yeul is closed Mondays. Sources disagree on the Contemporary Art museum’s closing day (most say Monday, one older listing says Wednesday); Thursday is safe either way.' },
          { type: 'warning', text: 'Visitors report surprise closures at the Contemporary Art museum during exhibition changeovers. Check on Naver the day before.' }
        ]
      },
      {
        label: 'Lunch — Gozip Dol Wooluck',
        icon: '🐠',
        content: 'A Jeju hansang set table built around braised and fried rockfish, and the island’s top-rated restaurant on Tripadvisor. About 30 minutes from Jeoji, on the Jungmun side.',
        address: 'Gozip Dol Wooluck, Jungmun branch (고집돌우럭 중문점) · 879 Iljuseo-ro, Seogwipo · 0507-1408-1540',
        notes: [
          { type: 'warning', text: 'Open 10:00–21:30 with a 15:00–17:00 break, and lunch last order is 14:50. You must be in the door before then. Lunch is walk-in only: join the line in person, order while you wait, and it moves fast.' },
          { type: 'info', text: 'Dinner seats can be reserved on Catchtable (about 10% of them, released on the 1st and 15th at 11:00 for the next two weeks) if you ever want to swap lunch for dinner.' }
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
      },
      {
        label: 'Alternate — Yeongsil Trail',
        icon: '⛰️',
        content: 'TBD as a swap, not an addition. If Thursday’s weather is unusually clear, Yeongsil on Hallasan is the most dramatic scenery for the shortest hike on the island, needs no reservation, and is about 30 minutes from Seogwipo. It would replace either Jeoji or Bonte, not squeeze in alongside them.',
        notes: [
          { type: 'info', text: 'Only the Seongpanak and Gwaneumsa trails reach the summit and both require a reservation at visithalla.jeju.go.kr, released on the 1st of each month. The Gwaneumsa summit section was closed Aug 1 to Sep 30, 2026 for rockfall work; confirm it reopened if you go that way.' }
        ]
      }
    ]
  },
  {
    id: 6,
    date: 'Friday, October 23 — Seogwipo & Seongeup',
    location: 'Jeju',
    sublocation: 'Seogwipo town · Olle 7 · Seongeup',
    theme: 'jeju',
    stay: 'Seom Studio In Seogwipo #7',
    highlights: [
      { icon: '☕', text: 'Ohsayo Coffee' },
      { icon: '🥾', text: 'Olle Route 7 to Oedolgae' },
      { icon: '🏺', text: 'Seongji Pottery wheel session' },
      { icon: '🍵', text: 'Sumangdawon tea class' }
    ],
    sections: [
      {
        label: 'Breakfast — Olle Market',
        icon: '🍡',
        content: 'Morning is when the produce side of the market is open. Omegi tteok (millet rice cakes), Hallabong and tangerines, and whatever is being griddled. The market’s own signatures are omegi tteok, tilefish, cutlassfish and black pork.',
        address: 'Seogwipo Maeil Olle Market · 18 Jungang-ro 62beon-gil, Seogwipo',
        notes: [
          { type: 'cash', text: 'Bring cash for the older stalls.' }
        ]
      },
      {
        label: 'Coffee — Ohsayo Coffee',
        icon: '☕',
        content: 'Seogwipo’s specialty coffee stop, singled out by Sprudge. Espresso pulled on a Decent DE-1 and good pour-overs.',
        address: 'Ohsayo Coffee (오세요커피) · 17 Sinjung-ro 13beon-gil, 1F, Seogwipo (opposite Daesin Middle School)',
        notes: [
          { type: 'warning', text: 'Open 10:00–18:30, closed Sundays. It is on the ground floor of a house with almost no sign and there is no lot, so pin it on Naver Map before you go.' }
        ]
      },
      {
        label: 'Late Morning — Olle Route 7 to Oedolgae',
        icon: '🥾',
        content: 'The best half-day walk from your door. From central Seogwipo past Samaebong park out to the Oedolgae sea stack: roughly 5km and 1.5–2 hours on easy coastal paths, with basalt coast and the Beomseom and Munseom islets offshore. The full Route 7 runs about 17km west to Wolpyeong if you want more.\nJeongbang Falls, which drops straight into the sea, is about 1.3km from the market, and Cheonjiyeon Falls is also close.',
        notes: [
          { type: 'info', text: 'Distances are approximate; check jejuolle.org for the current route map. The 2026 hours and fees for the waterfalls were not verified, so confirm before detouring.' }
        ]
      },
      {
        label: 'Lunch — Yetnal Patjuk',
        icon: '🍲',
        content: 'About 35–40 minutes northeast, among the stone houses of Seongeup Folk Village. A tiny mother-and-daughter shop that makes its own doenjang. Order the saeal patjuk (red-bean porridge with rice balls) and the siraegi gukbap.\nChef Woongchul Park of London’s Michelin-starred Sollip told Suitcase: "I’d say this is my and Bomee’s favourite place to eat in all of Korea."',
        address: 'Yetnal Patjuk (옛날팥죽) · 130 Seongeupminsok-ro, Pyoseon-myeon · 0507-1358-3479',
        notes: [
          { type: 'warning', text: 'Open 10:00–17:00, closed Mondays. Walk-in. Around ₩10,000–11,000 per dish (unverified).' }
        ]
      },
      {
        label: 'Afternoon — Seongji Pottery',
        icon: '🏺',
        content: 'A wheel-throwing or hand-building session with Na Myeong-kwon, who has 25 years in traditional pottery and has run sessions for 13 years. It is the closest hands-on studio to your base that takes foreign visitors, and it is a few minutes from lunch.\nThe Jeju-specific thing to look for while you are on the island is onggi: unglazed earthenware made from volcanic-ash soil and fired in stone kilns, which breathes because it is not lacquered. The craft nearly died out after the 1960s and was revived by a small group of potters.',
        address: 'Seongji Pottery (성지도예) · 85 Seongeupiri-ro, Pyoseon-myeon',
        notes: [
          { type: 'reservation', text: 'Book through KKday (product 104114) and confirm with the studio at least a day ahead. Listed 09:00–18:00, last entry 17:00.' },
          { type: 'warning', text: 'Pieces need weeks to dry and fire, so ask about international shipping before you book. Seogwipo’s Haeng Bok Pottery Studio, for comparison, only ships within Korea and only after about a month.' }
        ]
      },
      {
        label: 'Late Afternoon — Sumangdawon Tea Class',
        icon: '🍵',
        content: 'On the way back toward Seogwipo. A one-hour tea and matcha class at a farm run by a local farming association: you taste their own organic green, black and matcha, whisk matcha, and get tea snacks. They sell leaf and teaware made on the farm, and the black tea is the one worth attention for a pu-erh and white-tea drinker. ₩30,000 per person.',
        address: 'Sumangdawon (수망다원) · Sumang-ri, Namwon-eup, Seogwipo · 0504-1340-3033',
        notes: [
          { type: 'reservation', text: 'Phone booking only, and plan on Korean-only staff. Call 1330 (the 24-hour English travel line) and have them phone the farm for you, or ask your Airbnb host.' },
          { type: 'info', text: 'If no class slot works, Oneureun Nokcha Hanjan, the field cafe at the Seongeup intersection, is a walk-in alternative.' }
        ]
      },
      {
        label: 'Dinner — Ppolsaljib',
        icon: '🍖',
        content: 'A second black-pork lesson, different from Ungdam. The specialty is ppolsal, pork cheek and jowl, and the mixed set brings six cuts with unlimited sides including kimchi jjigae and steamed egg. English menu.',
        address: 'Ppolsaljib (뽈살집), main branch · 41 Jungjeong-ro 91beon-gil, Seogwipo · 064-763-6860',
        notes: [
          { type: 'warning', text: 'Open daily 15:00–24:00 with no regular closing day, but it can close early when the meat runs out. No reservations; expect about a 30-minute wait after 17:00.' },
          { type: 'info', text: 'If you would rather not eat pork twice this leg, go back to Sambo Sikdang for okdom gui (grilled tilefish) and jari mulhoe (cold raw-fish soup) instead.' }
        ]
      }
    ]
  },
  {
    id: 7,
    date: 'Saturday, October 24 — East Coast',
    location: 'Jeju',
    sublocation: 'Seongsan · Gujwa · Jocheon',
    theme: 'jeju',
    stay: 'Seom Studio In Seogwipo #7',
    highlights: [
      { icon: '🌅', text: 'Seongsan Ilchulbong' },
      { icon: '🕳️', text: 'Manjanggul (reopened 2026)' },
      { icon: '🍵', text: 'Dahee-yeon lava-cave tea' },
      { icon: '🤿', text: 'Haenyeo’s Kitchen' }
    ],
    sections: [
      {
        label: '07:00 — Drive East',
        icon: '🚗',
        content: 'Leave Seogwipo by 07:00 for Seongsan, about an hour. This is the one day with a hard anchor at the far end of it, so the early start is doing real work.',
        notes: [
          { type: 'warning', text: 'This is the most weather-exposed day of the leg (an open tuff cone and a coastal dinner). If Saturday’s forecast is bad, swap it with Friday.' }
        ]
      },
      {
        label: 'Morning — Seongsan Ilchulbong',
        icon: '🌅',
        content: 'A 20–30 minute climb up the tuff cone rising straight out of the sea, best done before the tour buses arrive.',
        address: 'Seongsan Ilchulbong · Seongsan-eup, Seogwipo',
        notes: [
          { type: 'warning', text: '2026 hours and admission were not verifiable, so confirm on Naver the day before.' }
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
        content: 'Jeonbok dolsotbap, abalone stone-pot rice, which is the dish people drive to this coast for. Grilled abalone too. Eat it as an early lunch so you are hungry again for the haenyeo dinner.\nAbalone rice runs about ₩15,000 and up, grilled abalone about ₩30,000 and up (older figures, so expect more).',
        address: 'Myeongjin Jeonbok (명진전복) · 1282 Haemajihaean-ro, Pyeongdae-ri, Gujwa-eup · 064-782-9944',
        notes: [
          { type: 'info', text: 'Open 09:30–20:30, last order 20:00, closed Tuesdays. Walk-in with a waiting ticket; 30-minute waits are normal.' }
        ]
      },
      {
        label: 'Afternoon — Manjanggul Lava Tube',
        icon: '🕳️',
        content: 'The UNESCO lava tube reopened on May 30, 2026, after two years and five months closed following a December 2023 rockfall. ₩12.1 billion went into a new flat stainless-steel walkway. Only Section 1, about 1km of the roughly 7.4km tube, is open.',
        address: 'Manjanggul (만장굴) · Gujwa-eup, Jeju · +82-64-710-7903',
        notes: [
          { type: 'info', text: 'Open 09:00–18:00, last entry 17:10, closed the 1st Wednesday of each month. Saturday is clear.' },
          { type: 'warning', text: 'Expect crowds now that it has reopened.' }
        ]
      },
      {
        label: 'Afternoon — Dahee-yeon',
        icon: '🍵',
        content: 'A 60,000-pyeong eco-friendly tea farm with a cafe built inside a lava cave. You can taste and buy the farm’s own tea. The tea foot-bath needs a booking if you want it.\nSpace Seooh, a tea-and-pastry cafe with pottery workshops, is a few minutes away at 1948-6 Seonheul-ri if you want a second clay session (book ahead).',
        address: 'Dahee-yeon (다희연) · 266-4 Seongyo-ro, Jocheon-eup · 064-783-0882',
        notes: [
          { type: 'info', text: 'Open 09:00–18:00 year-round. Call ahead to check entry times.' }
        ]
      },
      {
        label: 'Dinner — Haenyeo’s Kitchen',
        icon: '🤿',
        content: 'The anchor of the whole Jeju leg. A staged performance and Q&A with a haenyeo diver in her 90s, followed by a buffet of the seafood the divers caught. About 140 minutes, ₩59,000 per person. It is the most direct way to meet the island’s women divers.',
        address: 'Haenyeo’s Kitchen, Jongdal branch (해녀의부엌 종달점) · 2265 Haemajihaean-ro, Gujwa-eup · 070-5224-1828',
        notes: [
          { type: 'reservation', text: 'Reservation required via Catchtable, linked from en.haenyeokitchen.com. Thu–Sun only, seatings at 12:00 and 17:00. Book this first: it runs only four days a week and the rest of Saturday is built around the 17:00 seating.' },
          { type: 'info', text: 'The Q&A is in Jeju dialect, so expect to lean on interpretation. If you ever switch to the noon seating, the free haenyeo diving show below Ilchulbong runs about 13:30 and 15:00 for 20 minutes, weather permitting (times vary by source).' }
        ]
      },
      {
        label: 'Evening — Drive Back',
        icon: '🌙',
        content: 'About 1 hour 10 minutes back to Seogwipo, in the dark. Take Route 1136 or 97 rather than the coast road.',
        notes: []
      }
    ],
    deepDive: {
      title: 'East Coast Run',
      subtitle: 'Saturday Oct 24 · the one day with a hard anchor at the far end',
      stops: [],
      timeline: [
        { time: '7:00 AM',  activity: 'Leave Seogwipo',            note: '~1 hr to Seongsan via 1136/97' },
        { time: '8:00 AM',  activity: 'Seongsan Ilchulbong',       note: '20–30 min climb, before the buses' },
        { time: '9:30 AM',  activity: 'Fritz Coffee Seongsan',     note: 'Breakfast with a view of the peak' },
        { time: '11:00 AM', activity: 'Myeongjin Jeonbok',         note: 'Early lunch; ~30 min wait is normal' },
        { time: '12:45 PM', activity: 'Manjanggul Lava Tube',      note: 'Section 1 only, ~1 km' },
        { time: '2:30 PM',  activity: 'Dahee-yeon tea farm',       note: 'Lava-cave cafe, tasting and buying' },
        { time: '5:00 PM',  activity: 'Haenyeo’s Kitchen Jongdal', note: 'Booked seating, ~140 min' },
        { time: '7:30 PM',  activity: 'Drive back to Seogwipo',    note: '~1 hr 10 min in the dark' }
      ],
      logistics: [
        {
          icon: '📋',
          label: 'What has to be booked',
          content: 'Haenyeo’s Kitchen is the only hard reservation today, and it decides the shape of the day.',
          tips: [
            'Haenyeo’s Kitchen: Catchtable, ₩59,000 pp, 17:00 seating, Thu–Sun only',
            'Dahee-yeon: call 064-783-0882 to confirm entry times; foot-bath needs booking',
            'Space Seooh pottery session (optional second clay stop): book ahead'
          ]
        },
        {
          icon: '🚗',
          label: 'Driving',
          meta: 'Seogwipo ↔ east coast',
          content: 'Roughly an hour each way. Parking is easy at all of today’s stops.',
          tips: [
            'Use Naver Map, not Google Maps, for directions and live hours',
            'Return on Route 1136 or 97, not the coast road, after dark',
            'Speed cameras are everywhere and fines follow the rental'
          ]
        },
        {
          icon: '⚠️',
          label: 'If the weather turns',
          content: 'This is the most exposed day of the leg: an open tuff cone and a coastal dinner. Swap the whole day with Friday if the forecast is bad, and move the Haenyeo’s Kitchen booking to match (it runs Thu–Sun, so Friday works).',
          notes: [
            { type: 'warning', text: 'Change the Catchtable booking before you swap days, not after.' }
          ]
        }
      ],
      checklists: [
        {
          id: 'east-prep',
          label: 'Before Saturday',
          items: [
            'Haenyeo’s Kitchen booked on Catchtable for the 17:00 seating',
            'Dahee-yeon called (064-783-0882) to confirm entry times',
            'Seongsan Ilchulbong hours checked on Naver',
            'Manjanggul confirmed open (1st Wednesday closures)',
            'Saturday forecast checked — swap with Friday if it looks bad',
            'Cash on hand for the day',
            'Fuel topped up the night before'
          ]
        }
      ]
    }
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
        content: 'Check out of Seom Studio In Seogwipo #7 and leave by 07:00 to be at CJU around 08:20 for the 9:50am flight.',
        notes: [
          { type: 'warning', text: 'Ollae Guksu is closed Sundays and most places near the airport will not be open in time. Buy omegi tteok and fruit at the Olle Market on Saturday night for a car breakfast. Negeori Sikdang opens at 07:00 if you would rather sit down quickly before leaving.' }
        ]
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
    date: 'Tuesday, October 27 — Open Day',
    location: 'Seoul',
    sublocation: 'Open Day',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    highlights: [
      { icon: '🗓️', text: 'Open day' }
    ],
    sections: [
      {
        label: 'Open Day',
        icon: '🗓️',
        content: 'TBD — nothing planned yet.',
        notes: [
          { type: 'info', text: 'Open day: kept free on purpose. Fill in or leave flexible. See pinnedSpots for unslotted ideas.' }
        ]
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
        content: 'Booked for 7:00 PM. Head back toward the hotel for EcoJardin Myeongdong \u2014 a 3-minute walk from Myeongdong Station, a few subway stops from Dongdaemun. English-speaking staff (English, Japanese, and Chinese service). Open until 10pm on weekdays. Offers K-style cuts, 9/15/18-step scalp treatments, keratin treatment, perms, and coloring.',
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
    { name: 'Hwahaedang', detail: 'Confirmed via AutoReserve · Lunch Oct 20 (Tue), 12:45 · 2 people, seating only · Yeouido · listed as "Hanakando Yeouido Branch" · fee prepaid, pay for the meal at the restaurant · +82 2-785-4422' },
    { name: 'Mongtan', detail: 'No reservations · Dinner Oct 26 (Mon) · Samgakji, Yongsan · on-site waitlist: register in person ~2–3 hrs ahead' },
    { name: 'Balwoo Gongyang', detail: 'Not yet booked · Lunch Oct 28 (Wed), 1:30pm seating · +82 2-733-2081 · closed Sundays' },
    { name: 'Huwon Secret Garden — 10:30 English Tour', detail: 'Not yet booked · Oct 28 · Changdeokgung · booking opens Oct 22, 10:00am KST at ticket.uforus.co.kr · 5,000 KRW + palace ticket' },
    { name: 'EcoJardin Myeongdong — Hair/Scalp Treatment', detail: 'Confirmed · Oct 29, 7:00 PM · 2 people · 3F, 8-10 Myeongdong 8-gil · changes via WhatsApp +82 10-8332-6980' },
    { name: 'Haenyeo’s Kitchen, Jongdal', detail: 'BOOK FIRST · Not yet booked · Dinner Oct 24 (Sat), 17:00 seating · ₩59,000 pp · Thu–Sun only, so the whole Saturday is built around it · Catchtable via en.haenyeokitchen.com, or KakaoTalk / 070-5224-1828' },
    { name: 'Seongji Pottery — wheel session', detail: 'Not yet booked · Afternoon Oct 23 (Fri) · 85 Seongeupiri-ro, Pyoseon-myeon · book on KKday (product 104114) and confirm with the studio ≥1 day ahead · ask about international shipping, pieces take weeks to fire' },
    { name: 'Sumangdawon — tea & matcha class', detail: 'Not yet booked · Late afternoon Oct 23 (Fri) · ₩30,000 pp, 1 hr · phone only, 0504-1340-3033, likely Korean-only · have the 1330 English line or your Airbnb host call' },
    { name: 'O’Sulloc Tea Stone class', detail: 'Optional · Morning Oct 22 (Thu) · book a few days ahead at osulloc.com · otherwise the cellar tasting is walk-up' },
    { name: 'International Driving Permit', detail: 'BEFORE YOU FLY · Get from AAA in the US; it cannot be issued in Korea · carry it with your US license and passport · required for the Jeju rental car' },
    { name: 'Jeju rental car', detail: 'Not yet booked · Pick up CJU Oct 21, return Oct 25 · effectively required for this leg · budget ₩50,000–100,000/day for a compact plus full insurance (estimate)' }
  ],
  hours: [
    { name: 'Ollae Guksu (Oct 21)', detail: '08:00–15:00, last order ~14:55 · closed Sundays, so Oct 21 is the only chance' },
    { name: 'Seogwi Dawon (Oct 21)', detail: 'Closes 17:00 · arrive by 16:15 · closed Tuesdays' },
    { name: 'Ungdam Sikdang (Oct 21)', detail: 'Opens 15:00, to 22:00 · closed Sundays · an older listing says noon, do not rely on it' },
    { name: 'Arario Museum (Oct 21)', detail: '10:00–19:00, last entry 18:00 · closed Mondays' },
    { name: 'Sambo Sikdang (Oct 22)', detail: '08:00–21:00, last order 20:00 · closed 2nd & 4th Wednesday (Oct 14, 28) · go to the Seogwipo branch, not Shin-Jeju' },
    { name: 'Gozip Dol Wooluck (Oct 22)', detail: 'Lunch last order 14:50, then closed 15:00–17:00 · be in the door before 14:50 · lunch is walk-in only' },
    { name: 'Bonte Museum (Oct 22)', detail: '10:00–18:00 but last admission 17:00 · arrive by 16:30' },
    { name: 'Jeju Museum of Contemporary Art (Oct 22)', detail: '09:00–18:00 · sources disagree on the closing day (most say Mon, one says Wed); Thursday is safe · surprise closures during exhibition changeovers, check Naver the day before' },
    { name: 'Ohsayo Coffee (Oct 23)', detail: '10:00–18:30 · closed Sundays · almost no sign, pin it on Naver Map' },
    { name: 'Yetnal Patjuk (Oct 23)', detail: '10:00–17:00 · closed Mondays' },
    { name: 'Ppolsaljib (Oct 23)', detail: 'Opens 15:00 to midnight · no closing day but can close early when the meat sells out · ~30 min wait after 17:00' },
    { name: 'Myeongjin Jeonbok (Oct 24)', detail: '09:30–20:30, last order 20:00 · closed Tuesdays · waiting ticket, ~30 min' },
    { name: 'Manjanggul (Oct 24)', detail: '09:00–18:00, last entry 17:10 · closed the 1st Wednesday · reopened May 30, 2026, Section 1 only (~1 km of 7.4 km)' },
    { name: 'Haenyeo’s Kitchen (Oct 24)', detail: 'Thu–Sun only · seatings 12:00 and 17:00 · ~140 min' },
    { name: 'Seongsan Ilchulbong (Oct 24)', detail: '2026 hours and admission not verified — confirm on Naver the day before' }
  ],
  cashOnly: [
    { name: 'Seogwipo Maeil Olle Market', detail: 'Older vendors are cash-only · carry ₩50,000–100,000 in small notes · night stalls run 17:00–22:00' },
    { name: 'Everything else on Jeju', detail: 'None of the Jeju restaurants on this itinerary was reported cash-only; Sambo Sikdang and Gozip Dol Wooluck take cards. Card acceptance at the smaller spots was not confirmed, so keep some cash.' }
  ],
  transit: [
    { name: 'Arrival Flight', detail: 'Lands Incheon (ICN) 3:20pm, Oct 18 — add flight number once booked' },
    { name: 'ICN → Insadong', detail: 'AREX express to Seoul Station (~45 min) + Line 1 to Jonggak · or taxi ~60–80 min' },
    { name: 'Departure Flight', detail: 'Departs Incheon (ICN) 5:30pm, Oct 31 — leave Myeongdong by ~1:30pm · add flight number once booked' },
    { name: 'GMP → CJU (Oct 21)', detail: 'Depart Gimpo Terminal D 9:10am · Arrive Jeju 10:25am · 1h 15m' },
    { name: 'CJU → GMP (Oct 25)', detail: 'Depart Jeju 9:50am · Arrive Gimpo Terminal D 11:05am · 1h 15m' },
    { name: 'Jeju — car required', detail: 'Rent at CJU. Buses connect the main towns but the tea farms, Jeoji, Bonte, the Seongeup studios and the east coast are poorly served. Alternatives: a hired car with driver for one day (Saturday is the best candidate, via Klook or Trazy), Kakao T taxis for evenings in Seogwipo town.' },
    { name: 'Drive times from Seogwipo', detail: 'O’Sulloc / Seogwang-ri ~40 min · Bonte & Jungmun ~25–30 min · Jeoji ~45 min · Seongeup ~35–40 min · Jeju City or CJU ~1 hr · Seongsan ~1 hr · Yeongsil trailhead ~30 min' },
    { name: 'Jeju driving notes', detail: 'Right-hand traffic. Speed cameras everywhere and fines follow the rental. The Hallasan roads (1131, 1100) are winding and can be foggy. Parking is easy except in central Seogwipo. Use Naver Map, not Google Maps.' },
    { name: 'Departure morning (Oct 25)', detail: 'Leave Seogwipo by 07:00 to be at CJU ~08:20 for the 9:50am flight' },
    { name: 'Help lines', detail: '1330 is the 24-hour travel line in English and will phone a venue for you — useful for the Sumangdawon booking. Consider a Korean eSIM: Hallasan booking may need Korean SMS verification.' },
    { name: 'Late-October weather (climate averages)', detail: '~20°C by day, ~14°C at night, often windy, typhoon season mostly over. Bring a windproof layer. Oct 24 is the most weather-exposed day; swap it with Oct 23 if the forecast is bad.' },
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
    { name: 'Jeju Clay Pottery Lab', detail: 'Jeju ceramics alternate · Kim Kyungchan · 28 Haengwon-ro 2-gil, Gujwa · contemporary onggi from Jeju clay, shown at Maison & Objet 2022 · contact before visiting · fits the Oct 24 east-coast day' },
    { name: 'Dansong Recipe', detail: 'Jeju alternate · Gimnyeong, northeast coast · a potter and cook: local-ingredient meal then a pottery session · Airbnb Experience in Korean, German and English, 4.94 from 359 reviews' },
    { name: 'Orteas tea farm', detail: 'Jeju tea alternate · Jeju-si · Airbnb tea session hosted in Korean and English by owner Wonhee Lee, 4.94 from 307 reviews, max 2 guests · the best English-language farm tasting found' },
    { name: 'Jeju Dawon tea maze', detail: 'Jeju tea alternate · 1246 Sallongnam-ro · 09:50–18:00 · ₩12,000 including tea and snacks · 500m up with ocean views' },
    { name: 'O’Sulloc Tea House Tea Factory (Hannam)', detail: 'Jeju tea alternate · newer O’Sulloc site at the Hannam tea field, reported opened 2026, with an open field and a processing plant · better for production-minded visitors · confirm hours' },
    { name: 'Hueree Natural Park', detail: 'Jeju alternate · Namwon · pink muhly grass, but it usually peaks late Sept to mid-Oct so it may be fading by Oct 21–24' },
    { name: 'Udo Island', detail: 'Jeju — skipped on purpose · ferry, rental bike and return take half a day, which would cost Manjanggul and Dahee-yeon on Oct 24' },
    { name: 'BongSoon’s Black Pork', detail: 'Jeju food swap · 1010 Gueok-ri, Daejeong · 064-792-2030 · black pork with abalone and prawn · a west-side meal' },
    { name: 'Somban', detail: 'Jeju food swap · Seohong-dong, Seogwipo · gogi guksu in town if you miss Ollae Guksu' },
    { name: 'Muroi', detail: 'Jeju food swap · 21 Donggwangbondong-ro, Andeok · bread and coffee near O’Sulloc' },
    { name: 'Dosun Dawon', detail: 'Jeju — NOT visitable · a private Amorepacific field; VisitJeju says entry is prohibited' }
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
