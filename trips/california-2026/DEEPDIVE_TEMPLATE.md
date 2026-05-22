# Deep Dive Template & Instructions

## Overview
Deep dives are expandable bottom sheets that slide up from day cards. They provide detailed, structured information for complex activities. Currently implemented for Days 2, 3, 4, and 6.

## Location in Code
- **HTML structure**: `index.html` lines ~750–770 (the `#deep-dive-sheet` div and backdrop)
- **CSS**: `index.html` lines ~536–668 (all `.dd-*` and `.checklist-*` styles)
- **JavaScript functions**: `index.html` lines ~2089–2178 (openDeepDive, closeDeepDive, render functions)
- **Data structure**: Each day object in the `DAYS` array can have an optional `deepDive` field

## Data Structure

```javascript
deepDive: {
  title: 'Main Title',                    // Shows in sheet header + day card button
  subtitle: 'Subtitle / Context',         // Shows below title in sheet header
  
  timeline: [                             // Optional: renders as a timeline table
    { time: '8:00–9:00am', activity: 'What', note: 'Details' },
    { time: '9:30–11am', activity: 'What', note: 'Details' },
    // ... more rows
  ],
  
  stops: [                                // Optional: expandable sections (hiking, restaurants, etc.)
    {
      icon: '🥾',                         // Emoji for the section
      label: 'Section Title',             // Shows in the collapsed header
      meta: 'Time / Distance / Notes',    // Small gray text below label
      address: 'Location (optional)',     // Shows with 📍 icon
      content: 'Main text\n\nWith line breaks',
      tips: [                             // Optional: bullet points
        'Tip 1',
        'Tip 2',
      ],
      notes: [                            // Optional: colored alert boxes
        { type: 'warning', text: 'Watch out for X' },
        { type: 'cash', text: 'Cash only' },
        { type: 'reservation', text: 'Book in advance' },
        { type: 'info', text: 'FYI' },
      ],
    },
    // ... more stops
  ],
  
  logistics: [                            // Optional: non-expandable sections (weather, packing, etc.)
    {
      icon: '🌤️',
      label: 'Weather',
      content: 'Multi-line content with details.',
    },
    // ... more logistics
  ],
  
  checklists: [                           // Optional: interactive checkboxes (localStorage-backed)
    {
      id: 'unique-id',                    // Must be unique per app
      label: '🎒 Packing List',
      items: [
        'Item 1',
        'Item 2',
        // ... more items
      ],
    },
    // ... more checklists
  ],
}
```

## Note Types & Colors
- `warning` → Orange/tan background (⚠️)
- `cash` → Yellow background (💵)
- `reservation` → Blue background (📋)
- `info` → Gray background (ℹ️)

## How to Add a Deep Dive

### Step 1: Find the day in `index.html`
Search for `id: N,` where N is the day number (e.g., `id: 7,` for Day 7).

### Step 2: Locate the closing `]` of the `sections` array
The structure looks like:
```javascript
{
  id: 7,
  date: '...',
  // ...
  sections: [
    { /* section 1 */ },
    { /* section 2 */ },
    // ...
  ]    // <-- THIS closing bracket
},
```

### Step 3: Replace `]` with `], deepDive: { ... }`
Paste the full `deepDive` object before the closing `},` of the day.

Example:
```javascript
sections: [
  // ... all sections ...
]    // <-- Change this to:
],
deepDive: {
  title: 'My Deep Dive',
  // ... rest of structure ...
},
```

### Step 4: Test & commit
```bash
cd /Users/georgegore/california-trip-planner
# Verify no syntax errors — open in browser
git add index.html
git commit -m "Add deep dive for Day X: [Title]"
git push
```

Service worker will auto-update if you bump the cache version in `sw.js` (change `ca-trip-vN` to `ca-trip-v(N+1)`), but browser caching may delay it.

## Examples Already in Code

### Day 2: Full Master Guide
- **Type**: Multi-section reference with timeline, 6+ stops (entry, shuttle, 5 hikes), logistics, packing checklist
- **Lines**: ~915–1130
- **Use this as a template** for comprehensive guides covering a multi-day activity

### Day 3: Mist Trail Focus
- **Type**: Single hike with timeline, stops, logistics
- **Lines**: ~1130–1216
- **Use this template** for focused single-activity deep dives

### Day 4: Choice Between Options
- **Type**: Two competing activities (Glacier Point vs. Clouds Rest) with side-by-side comparison
- **Lines**: ~1267–1338
- **Use this template** when offering alternative day plans

### Day 6: Urban Exploration
- **Type**: Multi-stop neighborhood walk with timeline, detailed stops, logistics, interactive checklist
- **Lines**: ~1456–1680 (in older version; check current line numbers)
- **Use this template** for food/cultural exploration days

## Styling Reference

### Timeline
- Renders as two-column layout (time | activity + note)
- Automatically styled with monospace time column

### Stops (Expandable Sections)
- Tap to expand/collapse
- Icon, label, meta text, address, content, tips, notes all auto-render
- Tips show as bullet points with gray dots

### Logistics (Non-Expandable)
- Simpler: icon, label, content only
- No expand/collapse — single block

### Checklists
- Items are clickable — toggles a checkmark
- State persists in `localStorage` (survives page reload, even offline)
- Key format: `ca-check-[checklist-id]-[item-index]`

## Search Integration
Deep dive content is **not** searchable via the 🔍 search bar (search only hits day sections and Quick Ref).

To make deep dive content searchable, you'd need to add it to the search index in the `doSearch()` function around line ~1860. Not required for current use but possible future enhancement.

## Browser Caching & Updates

### Service Worker Cache
- Cache name: `ca-trip-v2` (or higher)
- On first visit: caches `index.html`, `manifest.json`, `sw.js`
- Subsequent visits: serves from cache
- To force refresh: bump cache version in `sw.js` and push to GitHub

### GitHub Pages Build
- Takes ~1 minute after `git push`
- Check status: go to repo → Actions tab

### On User's Device
- Users: close and reopen the browser tab, or hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
- PWA (installed app): may take a few minutes to check for updates

## Future Enhancements (Not Yet Implemented)
- Nested expandable sections within stops
- Image galleries in stops
- Map embed support
- Time-based filtering (highlight "do this now")
- Offline download for deep dives with large content

## Questions Before Next Chat?
When you return to add a new deep dive, paste:
1. **The day number** (e.g., "Day 7")
2. **The deep dive content** (structure or prose — I'll format it)
3. **The desired layout** (timeline? stops? logistics? checklist?)
4. **Any special styling needs** (colors, alerts, etc.)

Then I can build it in ~2 minutes with no codebase context needed.
