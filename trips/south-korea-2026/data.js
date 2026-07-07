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
  tripId:       'korea-26',
  githubOwner:  'georgelgore',
  githubRepo:   'trip-itinerary',
  githubBranch: 'main',
  editsPath:    'trips/south-korea-2026/edits.json',
  storageKey:   'korea-26:days',
  initialTab:   'reservations',
  catLabels: {
    reservations: 'Reservations',
    transit:      'Transit',
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
    stay: 'TBD · Seoul (Oct 18–21)',
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
        content: 'TBD — accommodation for this first Seoul stay (Oct 18–21) is not yet booked. Add hotel name, address, and airport transfer details once confirmed.',
        notes: [
          { type: 'warning', text: 'Accommodation TBD — fill in before the trip.' }
        ]
      },
      {
        label: 'Evening — Settle In',
        icon: '🌆',
        content: 'TBD — keep the first evening light given the flight. First taste of Seoul food nearby.',
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
    stay: 'TBD · Seoul (Oct 18–21)',
    sections: [
      {
        label: 'Morning',
        icon: '☕',
        content: 'TBD — easy pace, jet lag buffer day.',
        notes: []
      },
      {
        label: 'Afternoon',
        icon: '🚶',
        content: 'TBD — first pass at nearby neighborhoods.',
        notes: []
      },
      {
        label: 'Evening — Food',
        icon: '🍴',
        content: 'TBD — first real food exploration.',
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
    stay: 'TBD · Seoul (Oct 18–21)',
    sections: [
      {
        label: 'Morning',
        icon: '☕',
        content: 'TBD.',
        notes: []
      },
      {
        label: 'Afternoon — Neighborhoods',
        icon: '🚶',
        content: 'TBD — continue exploring neighborhoods.',
        notes: []
      },
      {
        label: 'Evening — Food',
        icon: '🍴',
        content: 'TBD.',
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
        label: 'Check-Out',
        icon: '🏨',
        content: 'TBD — check out of the first Seoul accommodation.',
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
    sections: [
      {
        label: 'Morning',
        icon: '☕',
        content: 'TBD.',
        notes: []
      },
      {
        label: 'Afternoon — Tea & Ceramics',
        icon: '🍵',
        content: 'TBD — tea and ceramics shopping.',
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
    id: 10,
    date: 'Tuesday, October 27 — Markets',
    location: 'Seoul',
    sublocation: 'Markets',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    sections: [
      {
        label: 'Morning',
        icon: '☕',
        content: 'TBD.',
        notes: []
      },
      {
        label: 'Afternoon — Markets',
        icon: '🛍️',
        content: 'TBD — market browsing.',
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
    id: 11,
    date: 'Wednesday, October 28 — Tea & Ceramics Shopping',
    location: 'Seoul',
    sublocation: 'Tea & Ceramics Shopping',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    sections: [
      {
        label: 'Morning',
        icon: '☕',
        content: 'TBD.',
        notes: []
      },
      {
        label: 'Afternoon — Tea & Ceramics',
        icon: '🍵',
        content: 'TBD — more tea and ceramics shopping.',
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
    id: 12,
    date: 'Thursday, October 29 — Markets',
    location: 'Seoul',
    sublocation: 'Markets',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    sections: [
      {
        label: 'Morning',
        icon: '☕',
        content: 'TBD.',
        notes: []
      },
      {
        label: 'Afternoon — Markets',
        icon: '🛍️',
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
    id: 13,
    date: 'Friday, October 30 — Relaxed Pace',
    location: 'Seoul',
    sublocation: 'Relaxed Pace',
    theme: 'seoul',
    stay: 'Seoul Myeongdong Hotel · confirmation #42971084',
    sections: [
      {
        label: 'Morning',
        icon: '☕',
        content: 'TBD — slower pace toward the end of the trip.',
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
        content: 'TBD — last relaxed dinner.',
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
        content: 'TBD — last-minute shopping or errands before heading to the airport.',
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
    { name: 'Seom Studio In Seogwipo #7', detail: 'AirBnb confirmed · Oct 21–25 · Unit #7' },
    { name: 'Seoul Myeongdong Hotel', detail: 'Confirmed · Confirmation #42971084 · Oct 25–31' }
  ],
  transit: [
    { name: 'Arrival Flight', detail: 'Lands Seoul 3:20pm, Oct 18 — add flight number once booked' },
    { name: 'Departure Flight', detail: 'Departs Seoul 5:30pm, Oct 31 — add flight number once booked' },
    { name: 'GMP → CJU (Oct 21)', detail: 'Depart Gimpo Terminal D 9:10am · Arrive Jeju 10:25am · 1h 15m' },
    { name: 'CJU → GMP (Oct 25)', detail: 'Depart Jeju 9:50am · Arrive Gimpo Terminal D 11:05am · 1h 15m' }
  ]
};
