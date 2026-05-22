# Trip Itinerary

Mobile-optimized, offline-capable trip planner. One repo, one folder per trip.

## Live

Landing page: `https://georgelgore.github.io/trip-itinerary/`

| Trip | URL |
|------|-----|
| California 2026 | `trips/california-2026/` |

## Adding a trip

Copy `_template/` into `trips/destination-year/`, fill in the data, then add a card to the root `index.html`. See `CLAUDE.md` for the full schema.

## Features

- Mobile-first PWA — installs to home screen per trip
- Offline-capable after first load (service worker, cache-first)
- Full-text search across itinerary + quick reference
- Expandable day cards with section-level detail
- Quick Reference sheet: cash-only, hours, reservations, transit
- Deep Dive sheets for complex days (optional)

## Local testing

```bash
cd trips/california-2026
python3 -m http.server 8080
# open http://localhost:8080
```

## Tech

Vanilla JS · PWA service worker · Mobile-first CSS · No build step
