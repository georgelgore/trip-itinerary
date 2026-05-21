# California Trip Planner 2026

Mobile-optimized, offline-capable trip planner for the California road trip (May 29 – June 5, 2026).

## Features
- Mobile-first (works great on phone & desktop)
- Offline-capable — works without cell service after first load
- Search anything: restaurants, times, addresses, notes
- Expandable day cards with section-level detail
- Quick Reference sheet: cash-only spots, hours, reservations, transit

## Live App
Visit: `https://yourusername.github.io/california-trip-planner/`

## Add to Home Screen

**iOS (Safari):** Open link → Share → Add to Home Screen → Add  
**Android (Chrome):** Open link → Menu (⋮) → Install app

## Deploy to GitHub Pages

### Step 1: Create GitHub repository
1. github.com → New repository
2. Name: `california-trip-planner`
3. Public visibility (required for free GitHub Pages)
4. Create repository

### Step 2: Push files
```bash
git clone https://github.com/yourusername/california-trip-planner.git
cd california-trip-planner
# copy index.html, manifest.json, sw.js, icon-192.svg here
git add index.html manifest.json sw.js icon-192.svg README.md
git commit -m "Initial trip planner app"
git push origin main
```

### Step 3: Enable GitHub Pages
1. Repo → Settings → Pages (left sidebar)
2. Source: Deploy from a branch → Branch: main → Folder: / (root)
3. Save → wait ~1 minute → your site is live

### Step 4: Share with Doug
Send: `https://yourusername.github.io/california-trip-planner/`  
He opens once → it caches → works offline → optionally add to home screen.

## Local Testing (service worker requires HTTP, not file://)
```bash
cd california-trip-planner
python3 -m http.server 8080
# open http://localhost:8080 in browser
```

## Tech Stack
- Vanilla JavaScript — no frameworks, fast load
- PWA with service worker (cache-first, offline-ready)
- Mobile-first responsive design (320px+)
- LocalStorage for search history
