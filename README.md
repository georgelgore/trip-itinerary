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

- **Two-level trip view**
  - **Overview** — a one-pager: legs strip (stays, nights, flights) + every day's agenda grouped by stay, with a TOC rail on desktop
  - **Unfurl a day** — tap any day to expand its full schedule in place (accordion); `?day=N` deep-links to it
  - **"Today" highlight** — colored ring + auto-scroll when viewing the trip mid-flight
- Mobile-first PWA — installs to home screen per trip
- **Offline-capable** — service worker: network-first for HTML (updates land without cache bumps), cache-first for icons/manifest
- **Share** — native share sheet on mobile, clipboard fallback on desktop. `?day=N` URLs are deep-linkable.
- Full-text search across itinerary + quick reference
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
