# Trip Itinerary — Claude Guide

## Repo structure

```
trip-itinerary/
├── index.html              ← landing page (list of trips)
├── _template/              ← copy this to start a new trip
│   ├── index.html          ← app shell with placeholder DAYS + QUICK_REF
│   ├── manifest.json
│   ├── sw.js
│   └── icon-192.svg
└── trips/
    └── destination-year/   ← one folder per trip
        ├── index.html
        ├── manifest.json
        ├── sw.js
        └── icon-192.svg
```

## Adding a new trip

1. Copy `_template/` → `trips/destination-year/` (e.g. `trips/japan-2027/`)
2. In `trips/destination-year/manifest.json`: update `name`, `short_name`, `description`
3. In `trips/destination-year/sw.js`: rename `CACHE` (e.g. `'japan-2027-v1'`) — must be unique per trip
4. In `trips/destination-year/index.html`:
   - Replace `TRIP_NAME YYYY` in `<title>` and the header `app-title`
   - Replace `DATES · TRAVELERS` in `app-dates`
   - Replace `TRIP_ID` in the two localStorage key strings with a short unique id (e.g. `japan-27`)
   - Update the `<style>` region color variables (`.sf`, `.yosemite`, etc.) to match new regions
   - Update the legend block in the HTML body
   - Update the `sheet-tabs` HTML block to match the QUICK_REF keys you've chosen
   - Set `state.currentTab` (line ~862) to the first tab key
   - Update `catLabels` inside `doSearch()` to include any new tab keys with their display labels
   - Fill in `DAYS` and `QUICK_REF` (see schemas below)
5. Add a card for the new trip in the root `index.html`:

```html
<a class="trip-card" href="trips/destination-year/">
  <div class="card-accent" style="background: linear-gradient(90deg, COLOR1 0%, COLOR2 100%)"></div>
  <div class="card-body">
    <div class="card-arrow">→</div>
    <div class="card-name">Destination Year</div>
    <div class="card-dates">Dates · Travelers</div>
    <div class="card-tags">
      <span class="tag"><span class="tag-dot" style="background:COLOR1"></span>Area 1</span>
      <span class="tag"><span class="tag-dot" style="background:COLOR2"></span>Area 2</span>
    </div>
  </div>
</a>
```

The gradient colors in `card-accent` should match the day-header theme colors, in the order they appear through the trip.

## DAYS schema

Each element of the `DAYS` array is a day object:

```js
{
  id: 1,                          // sequential integer
  date: 'Friday, May 29',         // full display string
  location: 'City / Region',      // primary location label
  sublocation: 'Neighborhood',    // optional — shown after a ·
  theme: 'sf',                    // matches a CSS class with a colored .day-header
  stay: 'Hotel Name · Address',   // shown under 🏨

  sections: [                     // ordered list of activities for the day
    {
      label: 'Morning',           // section title
      icon: '☕',                  // emoji shown in the section header
      content: 'Narrative text.\nSupports newlines.',
      address: 'Venue, Address',  // optional — shown under 📍
      url: 'https://...',         // optional — shown under 🔗
      notes: [                    // optional badges + callout boxes
        { type: 'info',        text: 'General note' },
        { type: 'warning',     text: 'Time-sensitive / caution' },
        { type: 'cash',        text: 'Cash-only reminder' },
        { type: 'reservation', text: 'Booking reminder' }
      ]
    }
  ],

  deepDive: {                     // optional — only add for days with complex logistics
    title: 'Deep Dive Title',     //   (e.g. a multi-hike park, a driving route with many stops)
    subtitle: 'Subtitle line',
    timeline: [
      { time: '9:00 AM', activity: 'Activity name', note: 'optional note' }
    ],
    stops: [                      // detailed info cards — same shape used for logistics
      {
        icon: '🏛️',
        label: 'Stop Name',
        meta: 'optional meta (distance, hours, etc.)',
        address: 'optional — shown under 📍',
        content: 'Markdown-ish text.\nNewlines with \\n.',
        tips: ['Tip 1', 'Tip 2'],  // optional bullet list of tips
        notes: [                   // same note types as section.notes
          { type: 'warning', text: 'Caution text' }
        ]
      }
    ],
    logistics: [],                // same shape as stops — use for transport/entry/practical info
    checklists: [
      { id: 'pack', label: 'Packing List', items: ['Item 1', 'Item 2'] }
    ]
  }
}
```

## QUICK_REF schema

Tabs are configurable per trip — only include the keys that apply:

| Tab key | Include when |
|---------|-------------|
| `cashOnly` | Any venue is cash-only |
| `hours` | Any venue has a quirky closing time or needs early arrival |
| `reservations` | Any venue requires or strongly recommends booking ahead |
| `transit` | Any route needs an Uber, specific directions, or non-obvious transport |
| `tips` | Short actionable tips that don't fit elsewhere (order X, sit in section Y) |

```js
const QUICK_REF = {
  cashOnly:     [ { name: 'Venue', detail: 'Details' } ],
  hours:        [ { name: 'Venue', detail: 'Hours note' } ],
  reservations: [ { name: 'Venue', detail: 'Reservation note' } ],
  transit:      [ { name: 'Route', detail: 'Details' } ],
  tips:         [ { name: 'Tip', detail: 'One-liner' } ]
};
```

Three things must stay in sync when you add or remove tabs:
1. The `QUICK_REF` object keys
2. The `<div class="sheet-tabs">` HTML block (same keys, same order)
3. The `catLabels` map inside `doSearch()` — maps each key to its search result label (e.g. `cashOnly: 'Cash Only'`). Missing entries will silently omit those results from search.

## Ingesting itinerary content

Itineraries can be passed as **YAML** (preferred going forward), raw HTML, or plain text. YAML maps directly to the JS schema — parse it and write the `DAYS`/`QUICK_REF` data straight in. For HTML or plain text, extract content only (no markup) and infer structure from context.

Useful signals regardless of format:

- **Times** → `section.label` (or included in `content`)
- **Venue names** → `section.label` title portion
- **Addresses** → `section.address`
- **Italic tips / "Note:" callouts** → `notes` array with appropriate type (`info`, `warning`, `reservation`, `cash`)
- **"Book ahead" / "reservation required"** → `{ type: 'reservation', text: '...' }` note + entry in `QUICK_REF.reservations`
- **Closing times / "arrive early"** → `{ type: 'warning', text: '...' }` note + entry in `QUICK_REF.hours`

### YAML input shape

```yaml
trip:
  name: "Tokyo 2027"
  dates: "March 14–21"
  travelers: "George & Doug"
  hotel: "Trunk Hotel · Shibuya"

days:
  - id: 1
    date: "Saturday, March 14"
    location: "Shibuya"
    sublocation: "Arrival"
    theme: shibuya
    sections:
      - label: "Check-In"
        icon: "🏨"
        content: "Narrative text here."
        address: "Trunk Hotel · 5-31 Jingumae, Shibuya"
        notes:
          - type: info
            text: "Room may not be ready until 3pm."
          - type: reservation
            text: "Dinner at Narisawa — confirm reservation."

quick_ref:
  hours:
    - name: "Tsukiji Outer Market"
      detail: "Most stalls close by noon — arrive by 9am"
  reservations:
    - name: "Narisawa"
      detail: "Reservation required · confirm 48hrs ahead"
  transit:
    - name: "Shibuya → Tsukiji"
      detail: "Tokyo Metro Ginza Line · 20 min · ¥200"
```

Run `/project:new-trip` for the full step-by-step workflow.

## Region theme colors

Add a CSS rule in `<style>` for each region used in `day.theme`:

```css
.sf         .day-header { background: #1a6bac; }
.yosemite   .day-header { background: #4a7c59; }
.marin      .day-header { background: #2a8080; }
.healdsburg .day-header { background: #7c5339; }
/* Add new regions here */
```

## Naming conventions

| Thing | Convention |
|-------|------------|
| Trip folder | `trips/destination-year/` — lowercase, hyphenated |
| SW cache name | `destination-year-v1` — bump the version number on any cache-affecting change |
| localStorage prefix | Short unique id, e.g. `japan-27:` |

## Local testing

Service workers require HTTP (not `file://`):

```bash
cd trips/destination-year
python3 -m http.server 8080
# open http://localhost:8080
```

## Deployment

Push to `main` — GitHub Actions deploys the entire repo root to GitHub Pages automatically.
- Landing page: `georgelgore.github.io/trip-itinerary/`
- Each trip: `georgelgore.github.io/trip-itinerary/trips/destination-year/`

Bump the `CACHE` version in `sw.js` (e.g. `v1` → `v2`) any time you change content that should be re-fetched by users who already have the PWA installed. If you only changed the JS data (`DAYS`/`QUICK_REF`) the service worker will still serve the cached shell — bump the version to force a cache refresh.
