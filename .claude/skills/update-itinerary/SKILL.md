---
name: update-itinerary
description: Update an existing trip in this repo, especially mid-trip. Use when George or Doug asks to move, add, drop, fill in, or re-plan anything on a trip page (a restaurant, a booking, a day around weather, a friend's recs), even in a short message like "move dinner to Friday".
---

# Update an itinerary

George and Doug edit their trip pages from a phone, often mid-trip, in short messages. This skill holds the context they shouldn't have to repeat. Make the change, keep the rest of the trip consistent, check it, and push. Ask only when the request is truly ambiguous (which day, which venue); otherwise pick the sensible reading and say what you assumed.

## 1. Orient (quietly, every time)

1. **Which trip:** the one named, else the trip whose dates include today, else the most recently edited folder in `trips/`.
2. **What day it is there:** get today's date in the trip's local time zone and map it to a day `id` (`TRIP_META.startDate` + id - 1). "Today", "tomorrow", and "Friday" mean the trip's local dates. Never change days that are already past unless asked.
3. **Where the live data is:** if `trips/<trip>/edits.json` exists, the app shows its `days` instead of `DAYS` in `data.js`. Edit `edits.json` (and set its `updatedAt` to the current ISO time so devices pick it up). Otherwise edit `data.js`. `QUICK_REF` always lives in `data.js`.
4. **Get a compact view first** instead of reading all of `data.js`:

```bash
node .claude/skills/update-itinerary/outline.js <trip-folder>           # every day, one line per section
node .claude/skills/update-itinerary/outline.js <trip-folder> --day 9   # one day in full
```

Read `TRAVEL_PLAYBOOK.md` when the request is about planning or filling days, not for a simple time change.

## 2. Make the change

Common requests and what each one touches:

| Request | Do this |
| --- | --- |
| **Move** an item to another day or time | Remove it from the old day, insert it in time order on the new day. Start its `content` with `Moved from <old day/time>.` Update both days' `highlights`, any day title or `sublocation` it changes, and its `QUICK_REF` entry. If the old day now has a gap, say so in your reply. |
| **Add** a place or activity | New section in time order with `label`, `icon`, `content`, `address`, `mapQuery`, and notes for hours, booking, and cash. Add it to `highlights` if it's a main stop. |
| **Confirmed booking** (time, party size) | Add a `reservation` note with day, time, party size, and how to change it (phone, WhatsApp, Kakao). Add or update the `QUICK_REF.reservations` entry. Re-flow the rest of that day around the fixed time. |
| **Fill a TBD / placeholder** | Research real options near where they'll be at that hour, pick one, and keep one fallback in a note. |
| **Drop** an item | Delete the section and its highlight. Remove reminders tied to it (a booking-opens note, a `QUICK_REF` row). |
| **Weather or disruption pivot** | Check the forecast. Move outdoor anchors to the driest day, swap rainy slots for indoor ones, and add a short `info` note saying why. Re-check opening days for every moved item. If cities or flights change, update `stay`, `location` (`A → B` on travel days), the region CSS in the trip's `index.html`, and the trip card in the root `index.html`. |
| **Friend's recs / a list to merge** | Additive only unless told otherwise. Place each rec on the day they're nearest to; put the rest in `QUICK_REF.pinnedSpots` (or the trip's saved-pins tab). |
| **Feedback on a day** ("too much", "skip X") | Apply it to that day and to later days with the same problem. List what you changed. |

### Conventions in the data

- **Labels:** `'<Time> — <Venue>'`, e.g. `'Lunch — Mongtan'` or `'7:00pm — Dinner at Mukjung'`. The overview takes the part after the dash as the title, so keep it short.
- **Sections stay in time order** within a day.
- **`highlights`** (the day's summary chips) must match the sections after every change.
- **Note types:** `info`, `warning` (hours, timing risks, closures), `cash`, `reservation`. Nothing else.
- **Maps:** these trips use NAVER Map in Korea (`TRIP_META.mapLinks`). Set `mapQuery` to the venue's local-language name, and put English-only venues' street address in `address`. Use whatever map the trip's `TRIP_META` names.
- **Timing between stops:** when two fixed times are close, add a `warning` with travel time and what to cut if it runs long.
- Day `date` strings look like `'Friday, October 30 — Hannam-dong & Itaewon'`; update the part after the dash when the day's focus changes.

### Facts and honesty

- Look up hours, closing days, prices, and addresses before writing them. Cite nothing you didn't check.
- When you couldn't confirm something, say so in a note: `Not verified; check Naver Map before going.`
- Check the trip's dates against closing days (many places close Mondays or Sundays).
- Check for concerts, marathons, festivals, or holidays that affect a day's plans.

### Privacy (the site is public)

Never write confirmation numbers, booking codes, passport or card details, or room numbers into the trip files. A booking is "confirmed for 2 at 6:00pm", not its code. If the user pastes a confirmation, keep only the time, party size, and contact method.

## 3. Check

```bash
node .claude/skills/update-itinerary/outline.js <trip-folder> --check
node .claude/skills/update-itinerary/outline.js <trip-folder> --day <each day you touched>
```

`--check` confirms the file still loads, ids are sequential, note types are valid, and nothing looks like a confirmation number. Read the touched days once to confirm time order and highlights.

## 4. Commit and push

Push straight to `main`; GitHub Pages deploys in a minute or two, and the phone app picks it up on reload (HTML and data are network-first, so no cache bump).

- Commit message: `<Trip>: <what changed>`, e.g. `Korea: move Noryangjin to Oct 27 breakfast`.
- One commit per request.

## 5. Reply

Keep it to a few lines they can read on a phone:

- What changed, by day.
- Anything you assumed, anything still unverified, and any gap or conflict the change created.
- No recap of unchanged days.
