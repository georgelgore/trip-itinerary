// ─── WORKER CONFIG ───────────────────────────────────────────────────────────

const WORKER_URL = 'https://trip-itinerary-edits.georgelgore.workers.dev';
const PASSPHRASE_KEY = 'trip-edit-passphrase';

// ─── STATE ───────────────────────────────────────────────────────────────────

const state = { searchOpen: false, sheetOpen: false, currentTab: EDIT_CFG.initialTab, ddOpen: false, overviewPaneRendered: false, openDayId: null };

// ─── EDIT MODE: LOAD OVERRIDES AT BOOT ───────────────────────────────────────
// Synchronous overlay from localStorage (instant; offline-safe)
(function applyCachedEdits() {
  try {
    const cached = localStorage.getItem(EDIT_CFG.storageKey);
    if (!cached) return;
    const parsed = JSON.parse(cached);
    if (Array.isArray(parsed) && parsed.length) DAYS = parsed;
  } catch (e) { /* swallow */ }
})();

// ─── EDIT MODE: STATE ────────────────────────────────────────────────────────
Object.assign(state, { editing: null, settingsOpen: false, saving: false });

// ─── INIT ─────────────────────────────────────────────────────────────────────

function init() {
  setupSearch();
  setupSheet();
  document.getElementById('deep-dive-close-btn').addEventListener('click', closeDeepDive);
  window.addEventListener('popstate', renderRoute);
  window.addEventListener('scroll', onWindowScroll, { passive: true });
  window.addEventListener('online',  updateOnlineBadge);
  window.addEventListener('offline', updateOnlineBadge);
  updateOnlineBadge();
  setupServiceWorker();
  bindEditButtons();
  renderRoute();
  fetchRemoteEdits();

  const mq = window.matchMedia('(min-width: 1024px)');
  const onMq = () => {
    state.overviewPaneRendered = false;
    const pane = document.getElementById('overview-pane');
    if (pane) pane.innerHTML = '';
    renderRoute();
  };
  if (mq.addEventListener) mq.addEventListener('change', onMq);
  else mq.addListener(onMq);
}

// ─── RENDER DAYS ──────────────────────────────────────────────────────────────

function renderSection(dayId, section) {
  const alertBadges = (section.notes || [])
    .filter(n => n.type !== 'info')
    .slice(0, 3)
    .map(n => `<span class="badge">${noteIcon(n.type)}</span>`)
    .join('');

  const notesHtml = (section.notes || []).map(n =>
    `<div class="note ${noteClass(n.type, section.label)}"><span class="note-icon">${noteIcon(n.type)}</span><span class="note-text">${esc(n.text)}</span></div>`
  ).join('');

  return `
    <div class="section" data-day="${dayId}" data-label="${esc(section.label)}">
      <div class="section-header" onclick="toggleSection(this.parentElement)">
        <span class="section-icon">${section.icon}</span>
        <span class="section-label-text">${esc(section.label)}</span>
        ${alertBadges ? `<div class="section-badges">${alertBadges}</div>` : ''}
        <span class="section-chev">▼</span>
      </div>
      <div class="section-body">
        <div class="section-content">${esc(section.content)}</div>
        ${section.address ? `<div class="section-address"><span>📍</span><span>${esc(section.address)}</span></div>` : ''}
        ${section.url ? `<div class="section-address"><span>🔗</span><a href="${esc(section.url)}" target="_blank" rel="noopener">${esc(section.url)}</a></div>` : ''}
        ${notesHtml ? `<div class="section-notes">${notesHtml}</div>` : ''}
      </div>
    </div>
  `;
}

function toggleSection(el) {
  el.classList.toggle('open');
}

// ─── SEARCH ───────────────────────────────────────────────────────────────────

function setupSearch() {
  const toggleBtn = document.getElementById('search-toggle');
  const input     = document.getElementById('search-input');
  const closeBtn  = document.getElementById('search-close-btn');
  const bar       = document.getElementById('search-bar');
  const results   = document.getElementById('search-results');
  const history   = document.getElementById('search-history');
  const main      = document.getElementById('main-content');

  toggleBtn.addEventListener('click', () => {
    state.searchOpen = !state.searchOpen;
    bar.classList.toggle('hidden', !state.searchOpen);
    if (state.searchOpen) {
      input.focus();
      showHistory();
    } else {
      closeSearch();
    }
  });

  closeBtn.addEventListener('click', closeSearch);

  input.addEventListener('input', () => {
    const q = input.value.trim();
    history.classList.add('hidden');
    if (q.length >= 2) {
      const res = doSearch(q);
      renderSearchResults(res, q);
      results.classList.remove('hidden');
      main.classList.add('hidden');
    } else if (q.length === 0) {
      results.classList.add('hidden');
      main.classList.remove('hidden');
      showHistory();
    }
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim()) saveHistory(input.value.trim());
    if (e.key === 'Escape') closeSearch();
  });
}

function closeSearch() {
  state.searchOpen = false;
  document.getElementById('search-bar').classList.add('hidden');
  document.getElementById('search-history').classList.add('hidden');
  document.getElementById('search-results').classList.add('hidden');
  document.getElementById('main-content').classList.remove('hidden');
  document.getElementById('search-input').value = '';
}

function doSearch(query) {
  const q = query.toLowerCase();
  const results = [];

  DAYS.forEach(day => {
    day.sections.forEach(section => {
      const haystack = [
        section.label, section.content, section.address || '',
        day.location, day.sublocation || '', day.stay, day.date,
        ...(section.notes || []).map(n => n.text)
      ].join(' ').toLowerCase();

      if (haystack.includes(q)) {
        results.push({ type: 'section', day, section });
      }
    });
  });

  const catLabels = EDIT_CFG.catLabels;
  Object.entries(QUICK_REF).forEach(([cat, items]) => {
    items.forEach(item => {
      if (`${item.name} ${item.detail}`.toLowerCase().includes(q)) {
        results.push({ type: 'ref', cat, catLabel: catLabels[cat], item });
      }
    });
  });

  return results;
}

function renderSearchResults(results, query) {
  const container = document.getElementById('search-results');
  if (results.length === 0) {
    container.innerHTML = `<div class="search-empty">No results for "<strong>${esc(query)}</strong>"</div>`;
    return;
  }

  container.innerHTML = results.map(r => {
    if (r.type === 'section') {
      const snippet = r.section.content.replace(/\n/g, ' ').slice(0, 120);
      return `
        <div class="search-result" onclick="jumpTo(${r.day.id}, ${JSON.stringify(r.section.label).replace(/"/g, '&quot;')})">
          <div class="result-tag">Day ${r.day.id} · ${esc(r.day.date)}</div>
          <div class="result-main">${hilite(r.section.label, query)}</div>
          <div class="result-sub">${hilite(snippet, query)}${r.section.content.length > 120 ? '…' : ''}</div>
          ${r.section.address ? `<div class="result-sub">📍 ${hilite(r.section.address, query)}</div>` : ''}
        </div>
      `;
    } else {
      return `
        <div class="search-result" onclick="openSheet('${r.cat}')">
          <div class="result-tag">Quick Ref · ${esc(r.catLabel)}</div>
          <div class="result-main">${hilite(r.item.name, query)}</div>
          <div class="result-sub">${hilite(r.item.detail, query)}</div>
        </div>
      `;
    }
  }).join('');
}

function jumpTo(dayId, sectionLabel) {
  closeSearch();
  expandDay(dayId);
  const card = document.getElementById('op-day-' + dayId);
  if (!card) return;
  const sel = `.section[data-label="${sectionLabel.replace(/"/g, '\\"')}"]`;
  const section = card.querySelector(sel);
  requestAnimationFrame(() => {
    if (section) {
      section.classList.add('open');
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

function hilite(text, query) {
  const safe = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.split(new RegExp(`(${safe})`, 'gi'))
    .map(p => p.toLowerCase() === query.toLowerCase() ? `<mark>${esc(p)}</mark>` : esc(p))
    .join('');
}

// ─── SEARCH HISTORY ───────────────────────────────────────────────────────────

function saveHistory(q) {
  let h = getHistory().filter(x => x !== q);
  h.unshift(q);
  localStorage.setItem(EDIT_CFG.tripId + ':history', JSON.stringify(h.slice(0, 6)));
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(EDIT_CFG.tripId + ':history') || '[]'); } catch { return []; }
}

function showHistory() {
  const div = document.getElementById('search-history');
  const h = getHistory();
  if (!h.length) { div.classList.add('hidden'); return; }
  div.innerHTML = h.map(q =>
    `<button class="history-chip" onclick="applyHistory(${JSON.stringify(q)})">${esc(q)}</button>`
  ).join('');
  div.classList.remove('hidden');
}

function applyHistory(q) {
  const input = document.getElementById('search-input');
  input.value = q;
  input.dispatchEvent(new Event('input'));
}

// ─── QUICK REF SHEET ──────────────────────────────────────────────────────────

function setupSheet() {
  document.getElementById('sheet-close-btn').addEventListener('click', closeSheet);
  document.getElementById('sheet-backdrop').addEventListener('click', () => {
    if (state.sheetOpen) closeSheet();
    else if (state.ddOpen) closeDeepDive();
  });

  document.querySelectorAll('.sheet-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      state.currentTab = tab.dataset.tab;
      document.querySelectorAll('.sheet-tab').forEach(t => t.classList.toggle('active', t === tab));
      renderSheetContent(state.currentTab);
    });
  });
}

function openSheet(tab) {
  if (state.ddOpen) closeDeepDive();
  if (tab) {
    state.currentTab = tab;
    document.querySelectorAll('.sheet-tab').forEach(t =>
      t.classList.toggle('active', t.dataset.tab === tab)
    );
  }
  renderSheetContent(state.currentTab);

  const backdrop = document.getElementById('sheet-backdrop');
  const sheet    = document.getElementById('quick-ref-sheet');

  backdrop.style.display = 'block';
  sheet.style.display = 'flex';

  requestAnimationFrame(() => requestAnimationFrame(() => {
    backdrop.classList.add('vis');
    sheet.classList.add('vis');
  }));

  state.sheetOpen = true;
}

function closeSheet() {
  const backdrop = document.getElementById('sheet-backdrop');
  const sheet    = document.getElementById('quick-ref-sheet');
  backdrop.classList.remove('vis');
  sheet.classList.remove('vis');
  setTimeout(() => {
    backdrop.style.display = 'none';
    sheet.style.display = 'none';
  }, 260);
  state.sheetOpen = false;
}

function renderSheetContent(tab) {
  const items = QUICK_REF[tab] || [];
  document.getElementById('sheet-content').innerHTML = items.map(item => `
    <div class="ref-item">
      <div class="ref-name">${esc(item.name)}</div>
      <div class="ref-detail">${esc(item.detail)}</div>
    </div>
  `).join('');
}

// ─── SERVICE WORKER ───────────────────────────────────────────────────────────

function setupServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

// ─── UTILS ────────────────────────────────────────────────────────────────────

const VALID_NOTE_TYPES = new Set(['cash', 'warning', 'reservation', 'info']);

function noteClass(type, sectionTitle) {
  if (!VALID_NOTE_TYPES.has(type)) console.warn(`Unknown note type "${type}" in section "${sectionTitle}"`);
  return type === 'cash' ? 'note-cash' : type === 'warning' ? 'note-warn' : type === 'reservation' ? 'note-res' : 'note-info';
}

function noteIcon(type) {
  return type === 'cash' ? '💵' : type === 'warning' ? '⚠️' : type === 'reservation' ? '📋' : 'ℹ️';
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ─── DEEP DIVE ────────────────────────────────────────────────────────────────

function openDeepDive(dayId) {
  if (state.sheetOpen) closeSheet();
  const day = DAYS.find(d => d.id === dayId);
  if (!day || !day.deepDive) return;
  const dd = day.deepDive;

  document.getElementById('dd-day-badge').textContent = `Day ${day.id} · ${day.date}`;
  document.getElementById('dd-title').textContent = dd.title;
  document.getElementById('dd-subtitle').textContent = dd.subtitle;

  const content = document.getElementById('dd-content');
  content.innerHTML = [
    renderDDTimeline(dd.timeline),
    dd.stops.length ? `<div class="dd-group-label">Stop-by-Stop</div>` + dd.stops.map(renderDDSection).join('') : '',
    dd.logistics.length ? `<div class="dd-group-label">Logistics</div>` + dd.logistics.map(renderDDSection).join('') : '',
    dd.checklists.length ? `<div class="dd-group-label">Checklists</div>` + dd.checklists.map(renderChecklist).join('') : '',
  ].join('');

  const backdrop = document.getElementById('sheet-backdrop');
  const sheet    = document.getElementById('deep-dive-sheet');
  backdrop.style.display = 'block';
  sheet.style.display = 'flex';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    backdrop.classList.add('vis');
    sheet.classList.add('vis');
  }));
  state.ddOpen = true;
}

function closeDeepDive() {
  const backdrop = document.getElementById('sheet-backdrop');
  const sheet    = document.getElementById('deep-dive-sheet');
  backdrop.classList.remove('vis');
  sheet.classList.remove('vis');
  setTimeout(() => {
    backdrop.style.display = 'none';
    sheet.style.display = 'none';
  }, 260);
  state.ddOpen = false;
}

function renderDDTimeline(rows) {
  return `
    <div class="dd-timeline">
      <div class="dd-group-label" style="padding:0 0 8px">Timeline</div>
      ${rows.map(r => `
        <div class="timeline-row">
          <div class="timeline-time">${esc(r.time)}</div>
          <div class="timeline-info">
            <div class="timeline-activity">${esc(r.activity)}</div>
            ${r.note ? `<div class="timeline-note">${esc(r.note)}</div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderDDSection(s) {
  const notesHtml = (s.notes || []).map(n =>
    `<div class="note ${noteClass(n.type, s.label)}" style="margin-top:6px"><span class="note-icon">${noteIcon(n.type)}</span><span class="note-text">${esc(n.text)}</span></div>`
  ).join('');

  const tipsHtml = (s.tips || []).length
    ? `<div class="dd-tips">${s.tips.map(t => `<div class="dd-tip"><div class="dd-tip-dot"></div><span>${esc(t)}</span></div>`).join('')}</div>`
    : '';

  return `
    <div class="dd-section">
      <div class="dd-section-header" onclick="this.parentElement.classList.toggle('open')">
        <span class="dd-section-icon">${s.icon}</span>
        <div class="dd-section-label-wrap">
          <div class="dd-section-label">${esc(s.label)}</div>
          ${s.meta ? `<div class="dd-section-meta">${esc(s.meta)}</div>` : ''}
        </div>
        <span class="dd-chev">▼</span>
      </div>
      <div class="dd-section-body">
        ${s.address ? `<div class="dd-address"><span>📍</span><span>${esc(s.address)}</span></div>` : ''}
        <div class="dd-content-text">${esc(s.content)}</div>
        ${tipsHtml}
        ${notesHtml}
      </div>
    </div>
  `;
}

function renderChecklist(cl) {
  return `
    <div class="dd-checklist">
      <div class="dd-group-label" style="padding:8px 0 6px;font-size:13px">${esc(cl.label)}</div>
      ${cl.items.map((item, i) => {
        const key = EDIT_CFG.tripId + ':check:' + cl.id + '-' + i;
        const checked = localStorage.getItem(key) === '1';
        return `
          <div class="checklist-item${checked ? ' checked' : ''}" onclick="toggleCheck('${key}', this)">
            <div class="checklist-cb">${checked ? '✓' : ''}</div>
            <div class="checklist-text">${esc(item)}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function toggleCheck(key, el) {
  const isChecked = el.classList.toggle('checked');
  el.querySelector('.checklist-cb').textContent = isChecked ? '✓' : '';
  localStorage.setItem(key, isChecked ? '1' : '0');
}

// ─── ROUTING (Overview ↔ Day Detail) ──────────────────────────────────────────

function getRoute() {
  const params = new URLSearchParams(location.search);
  const rawDay = params.get('day');
  if (rawDay) {
    const id = parseInt(rawDay, 10);
    if (Number.isFinite(id) && DAYS.some(d => d.id === id)) return { dayId: id };
  }
  return { dayId: null };
}

function renderRoute() {
  if (state.searchOpen) closeSearch();

  const route   = getRoute();
  state.route   = route;
  const desktop = isDesktop();

  document.body.classList.toggle('desktop-mode', desktop);

  if (desktop && !state.overviewPaneRendered) renderOverviewPane();

  if (state.editing) {
    renderDayEdit();
    updateEditTitle();
    return;
  }

  // Single view: the one-pager, with at most one day unfurled (the URL's ?day=N, else today).
  renderOnePager();
  state.spyDayId = null;
  const todayId = getTodayDayId();
  if (route.dayId) {
    expandDay(route.dayId, { scroll: true, instant: true });     // page load / deep link: jump, don't animate
  } else if (todayId) {
    expandDay(todayId, { scroll: true, instant: true, updateUrl: false });
  } else {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  if (desktop) onWindowScroll();
}

// ─── REGION COLORS ───────────────────────────────────────────────────────────
// Each trip's index.html defines `.<theme> { --region-color: #xxx; }`. Resolve it
// once per theme so JS can build two-colour gradients for transition days.

const themeColorCache = {};
function themeColor(theme) {
  if (!theme) return '#888';
  if (themeColorCache[theme]) return themeColorCache[theme];
  const probe = document.createElement('div');
  probe.className = theme;
  probe.style.display = 'none';
  document.body.appendChild(probe);
  const c = getComputedStyle(probe).getPropertyValue('--region-color').trim() || '#888';
  probe.remove();
  themeColorCache[theme] = c;
  return c;
}

// ─── TRIP STRUCTURE (legs, day titles, agenda lines) ─────────────────────────

const TOD_LABELS = /^(early\s*morning|morning|late\s*morning|midday|noon|afternoon|late\s*afternoon|evening|late\s*evening|night|late\s*night|breakfast|brunch|coffee|lunch|late\s*lunch|dinner|drinks|free|rest)$/i;
// Label suffixes too generic to stand alone ("Evening — Food") — try the content for a venue instead.
const GENERIC_TITLES = /^(food|drinks|dinner|lunch|breakfast|brunch|tea|coffee|tbd)$/i;
// "Dinner at Sinsajeon, an easy walk…" → "Sinsajeon"
const VENUE_AT = /\b(?:[Dd]inner|[Ll]unch|[Bb]reakfast|[Bb]runch|[Tt]ea|[Cc]offee|[Dd]rinks|[Aa] drink)\s+(?:at|from)\s+([A-Z][^,.;:—\n]{2,40}?)(?=\s*[,.;:—\n(]|$)/;

function stayKey(day)     { return (day.stay || '').split('·')[0].split(',')[0].trim(); }
function labelLeft(s)     { return (s.label || '').replace(/\s*[—–]\s*.*$/, '').trim(); }
function labelRight(s)    { const i = (s.label || '').search(/[—–]/); return i >= 0 ? (s.label || '').slice(i + 1).trim() : ''; }
function arrivalPlace(loc){ return (loc || '').split('→').pop().split('·')[0].split(',')[0].trim(); }
function isTBD(text)      { return /^tbd\b/i.test((text || '').trim()); }

// Day headline: "Sunday, October 18 — Arrival" → "Arrival"; otherwise the location.
function dayTitle(day) {
  const m = (day.date || '').match(/[—–]\s*(.+)$/);
  return m ? m[1].trim() : (day.location || `Day ${day.id}`);
}

// Group consecutive days that share a stay into legs (Seoul 3n → Jeju 4n → Seoul 6n).
function buildLegs() {
  const legs = [];
  DAYS.forEach((day, i) => {
    const key  = stayKey(day);
    const last = legs[legs.length - 1];
    if (last && last.key === key) last.idxs.push(i);
    else legs.push({ key, idxs: [i] });
  });
  legs.forEach((leg, li) => {
    const days   = leg.idxs.map(i => DAYS[i]);
    const counts = {};
    days.forEach(d => { counts[d.theme] = (counts[d.theme] || 0) + 1; });
    leg.theme  = days.map(d => d.theme).sort((a, b) => counts[b] - counts[a])[0];
    leg.city   = arrivalPlace(days[0].location) || leg.key;
    leg.nights = leg.idxs.length - (li === legs.length - 1 ? 1 : 0);   // last leg ends with a departure day
    leg.from   = getDayDate(days[0], leg.idxs[0]);
    leg.to     = getDayDate(days[days.length - 1], leg.idxs[leg.idxs.length - 1]);
    leg.byAir  = (days[0].sections || []).some(s => s.icon === '✈️');
  });
  return legs;
}

// Transition days (stay changes, or location contains →) get a two-colour stripe: departing → arriving.
function dayStripeStyle(day, i, legs) {
  const prev        = i > 0 ? DAYS[i - 1] : null;
  const leg         = legs.find(l => l.idxs.includes(i));
  const stayChanged = !!prev && stayKey(prev) !== stayKey(day);
  const hasArrow    = (day.location || '').includes('→');
  if (!stayChanged && !hasArrow) return '';
  let from, to;
  if (stayChanged) {
    to   = themeColor(leg.theme);
    from = day.theme !== leg.theme ? themeColor(day.theme) : themeColor(prev.theme);
  } else {
    // Same stay but travelling (e.g. final-day drive to the airport): fade toward the destination leg, else neutral.
    from = themeColor(day.theme);
    const dest   = arrivalPlace(day.location).toLowerCase();
    const target = legs.find(l => l.city.toLowerCase() === dest);
    to = target ? themeColor(target.theme) : '#9a9a9a';
  }
  return from === to ? '' : `--region-color:${from};--region-color-to:${to}`;
}

// One agenda line per section: icon + short title. Prefers the label suffix ("Lunch — Tosokchon"),
// then a venue pulled from the content for generic labels ("Evening — Food" / "Morning").
function agendaLine(s) {
  const left  = labelLeft(s);
  const right = labelRight(s);
  const tod   = TOD_LABELS.test(left) ? left : '';
  const tbd   = isTBD(right) || (!right && isTBD(s.content)) || (GENERIC_TITLES.test(right) && isTBD(s.content));
  let text, showTod = tod;
  if (tbd) {
    text = `${tod || left} — TBD`;
    showTod = '';
  } else if (right && /^check[- ]?(in|out)\b/i.test(left)) {
    text = `${left} — ${right}`;           // "Check-Out — Park MGM" keeps its meaning without the time column
  } else if (right && !GENERIC_TITLES.test(right)) {
    text = right;
  } else if (!right && !tod) {
    text = left;
  } else {
    const venue = ((s.content || '').match(VENUE_AT) || [])[1];
    const fromContent = venue ? venue.trim() : extractContentTitle(s.content);
    text = (fromContent && fromContent.length <= 44) ? fromContent : (right || left);
  }
  const partial = !tbd && isTBD(s.content);   // titled section whose plan is still a placeholder
  const note = (s.notes || []).find(n => n.type === 'warning' || n.type === 'reservation');
  return `<div class="op-line${s.icon === '✈️' ? ' flight' : ''}${tbd || partial ? ' tbd' : ''}">`
    + `<span class="op-line-i">${s.icon || '·'}</span>`
    + (showTod ? `<span class="op-tod">${esc(showTod)}</span>` : '')
    + `<span class="op-line-t">${esc(text)}</span>`
    + (note ? `<span class="op-badge ${note.type}" title="${esc(note.text || '')}">${note.type === 'reservation' ? '📋' : '⚠'}</span>` : '')
    + `</div>`;
}

function formatMonthDay(d) {
  if (!d) return '';
  return `${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()]} ${d.getDate()}`;
}

// ─── OVERVIEW VIEW (one-pager) ────────────────────────────────────────────────

function buildOnePagerHTML() {
  const legs     = buildLegs();
  const todayId  = getTodayDayId();
  const todayIdx = todayId ? DAYS.findIndex(d => d.id === todayId) : -1;
  const flights  = DAYS.reduce((n, d) => n + (d.sections || []).filter(s => s.icon === '✈️').length, 0);

  const legsHtml = legs.map((leg, li) => `
    ${li ? `<div class="leg-gap">${leg.byAir ? '✈️' : '→'}</div>` : ''}
    <button type="button" class="leg" style="--region-color:${themeColor(leg.theme)};--n:${Math.max(leg.nights, 1)}" onclick="scrollToLeg(${li})">
      <div class="leg-city">${esc(leg.city)}</div>
      <div class="leg-meta">${esc(formatMonthDay(leg.from))}–${esc(formatMonthDay(leg.to))} · ${leg.nights} night${leg.nights === 1 ? '' : 's'}</div>
      <div class="leg-hotel">${esc(leg.key)}</div>
    </button>`).join('');

  const summary = `${DAYS.length} days · ${legs.length} stay${legs.length === 1 ? '' : 's'}${flights ? ` · ${flights} flight${flights === 1 ? '' : 's'}` : ''}`;

  const body = legs.map((leg, li) => {
    const head = `
      <div class="op-leg-head" id="op-leg-${li}" style="--region-color:${themeColor(leg.theme)}">
        <span class="op-leg-dot"></span>
        <span class="op-leg-city">${esc(leg.city)}</span>
        <span class="op-leg-meta">🏨 ${esc(leg.key)} · ${esc(formatMonthDay(leg.from))}–${esc(formatMonthDay(leg.to))}</span>
      </div>`;
    const days = leg.idxs.map(i => {
      const day      = DAYS[i];
      const isToday  = day.id === todayId;
      const isPast   = todayIdx >= 0 && i < todayIdx;
      const title    = dayTitle(day);
      const sub      = day.sublocation && day.sublocation !== title ? day.sublocation : '';
      const sections = day.sections || [];
      return `
        <div class="op-day ${day.theme}${isToday ? ' today' : ''}${isPast ? ' past' : ''}"
             id="op-day-${day.id}" data-op-day="${day.id}"
             style="${dayStripeStyle(day, i, legs)}">
          <div class="op-stripe"></div>
          <div class="op-body">
            <a class="op-toggle" href="?day=${day.id}" onclick="onDayToggle(event, ${day.id})" aria-expanded="false">
              <div class="op-head">
                <span class="op-n">Day ${day.id}</span>
                <span class="op-date">${esc(formatShortDate(day.date, getDayDate(day, i)))}</span>
                ${isToday ? '<span class="op-today-pill">Today</span>' : ''}
                <span class="op-chev">▼</span>
              </div>
              <div class="op-title">${esc(title)}</div>
              ${sub ? `<div class="op-sub">${esc(sub)}</div>` : ''}
              <div class="op-agenda" style="--rows:${Math.ceil(sections.length / 2)}">${sections.map(agendaLine).join('')}</div>
            </a>
          </div>
        </div>`;
    }).join('');
    return head + days;
  }).join('');

  return `
    <div class="legs">${legsHtml}</div>
    <div class="legs-summary">${esc(summary)}</div>
    <div class="one-pager">${body}</div>`;
}

function renderOnePager() {
  document.getElementById('main-content').innerHTML = buildOnePagerHTML();
  state.openDayId = null;
  document.body.classList.remove('has-open-day');
}

// ─── EXPAND / COLLAPSE A DAY IN PLACE (accordion: one open at a time) ────────

function buildDaySectionsHTML(day) {
  return `
    <div class="op-sections">
      ${day.stay ? `<div class="op-stay">🏨 ${esc(day.stay)}</div>` : ''}
      ${(day.sections || []).map(s => renderSection(day.id, s).replace('<div class="section"', '<div class="section open"')).join('')}
      ${day.deepDive ? `
      <div class="deep-dive-btn-wrap">
        <button class="deep-dive-btn" onclick="openDeepDive(${day.id})">
          <span>📖</span><span>${esc(day.deepDive.title)}</span><span class="deep-dive-btn-arrow">→</span>
        </button>
      </div>` : ''}
      <button type="button" class="op-collapse" onclick="collapseDay({ scroll: true })">▲ Collapse Day ${day.id}</button>
    </div>`;
}

function expandDay(dayId, opts = {}) {
  const card = document.getElementById('op-day-' + dayId);
  const day  = DAYS.find(d => d.id === dayId);
  if (!card || !day) return;
  if (state.openDayId && state.openDayId !== dayId) collapseDay({ updateUrl: false });
  if (!card.classList.contains('open')) {
    card.classList.add('open');
    card.querySelector('.op-toggle').setAttribute('aria-expanded', 'true');
    card.querySelector('.op-body').insertAdjacentHTML('beforeend', buildDaySectionsHTML(day));
  }
  state.openDayId = dayId;
  document.body.classList.add('has-open-day');
  if (opts.updateUrl !== false) history.replaceState({}, '', '?day=' + dayId);
  if (opts.scroll) requestAnimationFrame(() => card.scrollIntoView({ behavior: opts.instant ? 'auto' : 'smooth', block: 'start' }));
}

function collapseDay(opts = {}) {
  const card = state.openDayId ? document.getElementById('op-day-' + state.openDayId) : null;
  if (card) {
    card.classList.remove('open');
    card.querySelector('.op-toggle').setAttribute('aria-expanded', 'false');
    const secs = card.querySelector('.op-sections');
    if (secs) secs.remove();
    if (opts.scroll) requestAnimationFrame(() => card.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }
  state.openDayId = null;
  document.body.classList.remove('has-open-day');
  if (opts.updateUrl !== false) history.replaceState({}, '', './');
}

function onDayToggle(e, dayId) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;   // let the deep link open in a new tab
  e.preventDefault();
  if (state.openDayId === dayId) collapseDay();
  else expandDay(dayId, { scroll: true });
}

function scrollToLeg(li) {
  const el = document.getElementById('op-leg-' + li);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── DESKTOP: TABLE-OF-CONTENTS RAIL ─────────────────────────────────────────

function renderOverviewPane() {
  const pane = document.getElementById('overview-pane');
  if (!pane) return;
  const legs     = buildLegs();
  const todayId  = getTodayDayId();
  const todayIdx = todayId ? DAYS.findIndex(d => d.id === todayId) : -1;
  pane.innerHTML = legs.map(leg => `
    <div class="toc-leg" style="--region-color:${themeColor(leg.theme)}">${esc(leg.city)} · ${leg.nights}n</div>
    ${leg.idxs.map(i => {
      const day = DAYS[i];
      const isToday = day.id === todayId;
      const isPast  = todayIdx >= 0 && i < todayIdx;
      return `
        <a class="toc-day ${day.theme}${isToday ? ' today' : ''}${isPast ? ' past' : ''}"
           data-ov-day="${day.id}" href="?day=${day.id}"
           onclick="onTocClick(event, ${day.id})"
           style="${dayStripeStyle(day, i, legs)}">
          <span class="toc-n">Day ${day.id}</span>
          <span class="toc-date">${esc(formatShortDate(day.date, getDayDate(day, i)))}</span>
          <span class="toc-title">${esc(dayTitle(day))}</span>
        </a>`;
    }).join('')}`).join('');
  state.overviewPaneRendered = true;
  const activeId = state.openDayId || todayId;
  if (activeId) setActiveDayInPane(activeId);
}

// Rail click: scroll to the day and unfurl it.
function onTocClick(e, dayId) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
  e.preventDefault();
  expandDay(dayId, { scroll: true });
}

function setActiveDayInPane(dayId) {
  const pane = document.getElementById('overview-pane');
  if (!pane) return;
  let active = null;
  pane.querySelectorAll('.toc-day').forEach(row => {
    const on = parseInt(row.dataset.ovDay, 10) === dayId;
    row.classList.toggle('is-active', on);
    if (on) active = row;
  });
  if (active) {
    const top = active.offsetTop, bottom = top + active.offsetHeight;
    if (top < pane.scrollTop || bottom > pane.scrollTop + pane.clientHeight) {
      pane.scrollTo({ top: Math.max(0, top - pane.clientHeight / 2 + active.offsetHeight / 2), behavior: 'smooth' });
    }
  }
}

// Scroll-spy: while reading the one-pager on desktop, highlight the day nearest the top.
let scrollSpyTicking = false;
function onWindowScroll() {
  if (scrollSpyTicking) return;
  scrollSpyTicking = true;
  requestAnimationFrame(() => {
    scrollSpyTicking = false;
    if (state.editing || !isDesktop()) return;
    const cards = document.querySelectorAll('.op-day');
    if (!cards.length) return;
    // Reading line: just under the sticky headers at the top of the page, sliding down to the
    // bottom of the viewport by the end — so the last days (which never reach the top) still
    // activate one by one as they come into view.
    const headerH   = 56 + 48 + 24;   // header + sticky leg head + slack
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress  = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    const line      = headerH + (window.innerHeight - headerH) * progress;
    let current = cards[0];
    for (const c of cards) {
      if (c.getBoundingClientRect().top <= line) current = c;
      else break;
    }
    const id = parseInt(current.dataset.opDay, 10);
    if (id !== state.spyDayId) { state.spyDayId = id; setActiveDayInPane(id); }
  });
}

// Pull a short title from a section's content text — first phrase before — or .
// Used when a section has a distinctive icon but a generic label like "Morning".
function extractContentTitle(content) {
  if (!content) return '';
  // Strip leading whitespace + take the first line
  let firstLine = content.replace(/^[\s\n]+/, '').split(/\n/)[0];
  // Strip "Option A —" / "Option 1 —" / "Choice B —" prefixes
  const opt = firstLine.match(/^(?:Option|Choice|Pick|Plan)\s+[A-Z0-9]\s*[—–-]\s*(.+)/i);
  if (opt) firstLine = opt[1];
  // Break at em-dash, period, comma, or colon — whichever comes first
  const m = firstLine.match(/^[^—.,:]+/);
  let title = (m ? m[0] : firstLine).trim();
  // Strip trailing decorative punctuation
  title = title.replace(/[:\s]+$/, '');
  return title;
}

// ─── TODAY DETECTION ─────────────────────────────────────────────────────────

function getTodayDayId() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < DAYS.length; i++) {
    const d = getDayDate(DAYS[i], i);
    if (d && d.getTime() === today.getTime()) return DAYS[i].id;
  }
  return null;
}

function getDayDate(day, idx) {
  // Priority: explicit day.dateISO > parsed day.date > inferred from TRIP_META.startDate
  if (day.dateISO) {
    const parts = day.dateISO.split('-');
    if (parts.length === 3) return new Date(+parts[0], +parts[1] - 1, +parts[2]);
  }
  const parsed = parseDateString(day.date);
  if (parsed) return parsed;
  if (TRIP_META.startDate) {
    const p = TRIP_META.startDate.split('-');
    if (p.length === 3) {
      const d = new Date(+p[0], +p[1] - 1, +p[2]);
      d.setDate(d.getDate() + idx);
      return d;
    }
  }
  return null;
}

const MONTH_MAP = {
  jan:0,january:0, feb:1,february:1, mar:2,march:2, apr:3,april:3,
  may:4, jun:5,june:5, jul:6,july:6, aug:7,august:7,
  sep:8,sept:8,september:8, oct:9,october:9, nov:10,november:10, dec:11,december:11
};

function parseDateString(s) {
  if (!s) return null;
  // "Friday, May 29" / "Thursday, August 13 — Departure"
  const m = s.match(/\b(jan|january|feb|february|mar|march|apr|april|may|jun|june|jul|july|aug|august|sep|sept|september|oct|october|nov|november|dec|december)\s+(\d{1,2})\b/i);
  if (!m) return null;
  const month = MONTH_MAP[m[1].toLowerCase()];
  const day = parseInt(m[2], 10);

  // Determine year: prefer TRIP_META start year; else current year
  let year = (new Date()).getFullYear();
  if (TRIP_META.startDate) {
    year = parseInt(TRIP_META.startDate.split('-')[0], 10);
  }
  return new Date(year, month, day);
}

function formatShortDate(rawDate, isoDate) {
  // Prefer ISO-derived "Sat · May 30" when available; else trim the raw "Friday, May 29" → "Fri · May 29"
  if (isoDate) {
    const dow = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][isoDate.getDay()];
    const mon = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][isoDate.getMonth()];
    return `${dow} · ${mon} ${isoDate.getDate()}`;
  }
  if (!rawDate) return '';
  // Strip suffix after — and shorten weekday
  const noSuffix = rawDate.replace(/\s*[—–]\s*.*$/, '').trim();
  const m = noSuffix.match(/^([A-Za-z]+),?\s*(.*)$/);
  if (m) {
    const dow = m[1].slice(0, 3);
    return `${dow} · ${m[2]}`.replace(/\s+·\s*$/, '');
  }
  return noSuffix;
}

// ─── DESKTOP DETECTION ───────────────────────────────────────────────────────

function isDesktop() {
  return window.matchMedia('(min-width: 1024px)').matches;
}

// ─── ONLINE / OFFLINE ─────────────────────────────────────────────────────────

function updateOnlineBadge() {
  document.body.classList.toggle('is-offline', !navigator.onLine);
}

// ─── EDIT MODE: ENTRY/EXIT ───────────────────────────────────────────────────
function enterEditMode(dayId) {
  const day = DAYS.find(d => d.id === dayId);
  if (!day) return;
  state.editing = { dayId, draft: JSON.parse(JSON.stringify(day)) };
  document.body.classList.add('editing');
  updateEditTitle();
  renderRoute();
}

function exitEditMode() {
  state.editing = null;
  document.body.classList.remove('editing');
  state.overviewPaneRendered = false;
  renderRoute();
}

function updateEditTitle() {
  if (!state.editing) return;
  const d = state.editing.draft;
  document.getElementById('edit-title-main').textContent = 'Edit Day ' + d.id;
  document.getElementById('edit-title-sub').textContent = d.date || '';
}

// ─── EDIT MODE: RENDER ───────────────────────────────────────────────────────
function renderDayEdit() {
  const draft = state.editing.draft;
  const theme = draft.theme || '';
  const totalSections = (draft.sections || []).length;

  const NOTE_TYPES = [
    { key: 'info',        label: 'ℹ️ Info',     cls: 'pill-info' },
    { key: 'warning',     label: '⚠️ Warning',  cls: 'pill-warning' },
    { key: 'cash',        label: '💵 Cash',      cls: 'pill-cash' },
    { key: 'reservation', label: '📋 Res\'n',    cls: 'pill-reservation' },
  ];

  const sectionsHtml = (draft.sections || []).map(function (sec, i) {
    // Note pills + active text inputs
    var activeNotes = {};
    (sec.notes || []).forEach(function (n) { activeNotes[n.type] = n.text; });
    var pillsHtml = NOTE_TYPES.map(function (t) {
      var isActive = t.key in activeNotes;
      return '<button type="button" class="note-pill ' + t.cls + (isActive ? ' active' : '') + '" onclick="toggleEditNote(' + i + ', \'' + t.key + '\')">' + t.label + '</button>';
    }).join('');
    var textInputsHtml = NOTE_TYPES.filter(function (t) { return t.key in activeNotes; }).map(function (t) {
      return '<div class="note-active-row">'
        + '<span class="note-type-icon">' + noteIcon(t.key) + '</span>'
        + '<input type="text" class="edit-input" data-note-sec="' + i + '" data-note-type="' + t.key + '" value="' + esc(activeNotes[t.key] || '') + '" placeholder="' + t.key + ' note…">'
        + '</div>';
    }).join('');

    return ''
      + '<div class="section editing-section" data-sec="' + i + '">'
      +   '<div class="section-header" onclick="toggleSection(this.parentElement)">'
      +     '<div class="section-move-group" onclick="event.stopPropagation()">'
      +       '<button class="section-move-btn" ' + (i === 0 ? 'disabled' : '') + ' onclick="moveEditSection(' + i + ', -1)" aria-label="Move up">↑</button>'
      +       '<button class="section-move-btn" ' + (i === totalSections - 1 ? 'disabled' : '') + ' onclick="moveEditSection(' + i + ', 1)" aria-label="Move down">↓</button>'
      +     '</div>'
      +     '<span class="section-icon">' + esc(sec.icon || '·') + '</span>'
      +     '<span class="section-label-text">' + esc(sec.label || '(untitled section)') + '</span>'
      +     '<span class="section-chev">▼</span>'
      +   '</div>'
      +   '<div class="section-body section-edit-body">'
      +     '<div class="edit-field-row">'
      +       '<div class="edit-field icon-field">'
      +         '<label>Icon</label>'
      +         '<input type="text" class="edit-input" data-path="sections.' + i + '.icon" value="' + esc(sec.icon || '') + '" maxlength="4" placeholder="·">'
      +       '</div>'
      +       '<div class="edit-field" style="flex:1">'
      +         '<label>Label</label>'
      +         '<input type="text" class="edit-input" data-path="sections.' + i + '.label" value="' + esc(sec.label || '') + '" placeholder="Morning — Activity">'
      +       '</div>'
      +     '</div>'
      +     '<div class="edit-field">'
      +       '<label>Content</label>'
      +       '<textarea class="edit-input edit-textarea" data-path="sections.' + i + '.content" placeholder="Narrative — what you\'re doing, time, vibe…">' + esc(sec.content || '') + '</textarea>'
      +     '</div>'
      +     '<div class="edit-field">'
      +       '<label>Address (optional)</label>'
      +       '<input type="text" class="edit-input" data-path="sections.' + i + '.address" value="' + esc(sec.address || '') + '" placeholder="Venue · 123 Address">'
      +     '</div>'
      +     '<div class="edit-field">'
      +       '<label>Notes (optional)</label>'
      +       '<div class="note-type-pills">' + pillsHtml + '</div>'
      +       (textInputsHtml ? '<div class="note-active-inputs">' + textInputsHtml + '</div>' : '')
      +     '</div>'
      +     '<button class="edit-section-delete" onclick="deleteEditSection(' + i + ')">🗑 Delete this section</button>'
      +   '</div>'
      + '</div>';
  }).join('');

  const hasPassphrase = !!getPassphrase();
  const noticeText = hasPassphrase
    ? 'Hitting Done will save & publish to GitHub.'
    : 'Hitting Done saves to this browser only. Tap ⚙ to add the trip passphrase to publish.';

  const noticeHtml = ''
    + '<div class="edit-mode-notice">'
    +   '<b>Editing Day ' + draft.id + '.</b> ' + noticeText
    + '</div>';

  const html = noticeHtml
    + '<div class="day-card editing-card ' + theme + '" data-day="' + draft.id + '">'
    +   '<div class="edit-day-header">'
    +     '<div class="edit-day-num">Day ' + draft.id + '</div>'
    +     '<div class="edit-field">'
    +       '<label>Date</label>'
    +       '<input type="text" class="edit-input" data-path="date" value="' + esc(draft.date || '') + '" placeholder="Friday, May 29">'
    +     '</div>'
    +     '<div class="edit-field">'
    +       '<label>Location</label>'
    +       '<input type="text" class="edit-input" data-path="location" value="' + esc(draft.location || '') + '" placeholder="City / Region">'
    +     '</div>'
    +     '<div class="edit-field">'
    +       '<label>Sublocation (optional)</label>'
    +       '<input type="text" class="edit-input" data-path="sublocation" value="' + esc(draft.sublocation || '') + '" placeholder="Neighborhood">'
    +     '</div>'
    +     '<div class="edit-field">'
    +       '<label>Stay (hotel · address)</label>'
    +       '<input type="text" class="edit-input" data-path="stay" value="' + esc(draft.stay || '') + '" placeholder="Hotel Name · Address">'
    +     '</div>'
    +   '</div>'
    +   '<div class="edit-sections">'
    +     sectionsHtml
    +     '<button class="edit-add-section" onclick="addEditSection()">+ Add section</button>'
    +   '</div>'
    + '</div>';

  document.getElementById('main-content').innerHTML = html;

  // Wire up data-path inputs
  document.querySelectorAll('#main-content [data-path]').forEach(function (input) {
    input.addEventListener('input', onEditInput);
  });
  // Wire up note text inputs
  document.querySelectorAll('#main-content [data-note-sec]').forEach(function (input) {
    input.addEventListener('input', function (e) {
      var secIdx = parseInt(e.target.dataset.noteSec, 10);
      var type = e.target.dataset.noteType;
      var sec = state.editing.draft.sections[secIdx];
      if (!sec.notes) sec.notes = [];
      var note = sec.notes.find(function (n) { return n.type === type; });
      if (note) note.text = e.target.value;
    });
  });
}

function onEditInput(e) {
  setDraftField(e.target.dataset.path, e.target.value);
}

function setDraftField(path, value) {
  const draft = state.editing.draft;
  const parts = path.split('.');
  let obj = draft;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    const num = parseInt(key, 10);
    obj = (!isNaN(num) && String(num) === key) ? obj[num] : obj[key];
  }
  const last = parts[parts.length - 1];
  if (value === '' && (last === 'sublocation' || last === 'address' || last === 'stay')) {
    delete obj[last];
    return;
  }
  obj[last] = value;
}

function addEditSection() {
  const draft = state.editing.draft;
  if (!draft.sections) draft.sections = [];
  const newIdx = draft.sections.length;
  draft.sections.push({ label: '', icon: '·', content: '' });
  renderDayEdit();
  requestAnimationFrame(function () {
    const el = document.querySelector('.editing-section[data-sec="' + newIdx + '"]');
    if (el) {
      el.classList.add('open');
      const labelInput = el.querySelector('.edit-input[data-path*="label"]');
      if (labelInput) labelInput.focus();
    }
  });
}

function deleteEditSection(idx) {
  const draft = state.editing.draft;
  const sec = draft.sections[idx];
  const label = sec.label || '(untitled section)';
  if (!confirm('Delete "' + label + '"?')) return;
  draft.sections.splice(idx, 1);
  renderDayEdit();
}

function moveEditSection(idx, dir) {
  const draft = state.editing.draft;
  const newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= draft.sections.length) return;
  const tmp = draft.sections[idx];
  draft.sections[idx] = draft.sections[newIdx];
  draft.sections[newIdx] = tmp;
  renderDayEdit();
  requestAnimationFrame(function () {
    const el = document.querySelector('.editing-section[data-sec="' + newIdx + '"]');
    if (el) { el.classList.add('open'); el.scrollIntoView({ block: 'nearest' }); }
  });
}

function toggleEditNote(secIdx, type) {
  const sec = state.editing.draft.sections[secIdx];
  if (!sec.notes) sec.notes = [];
  const existing = sec.notes.findIndex(function (n) { return n.type === type; });
  if (existing >= 0) {
    sec.notes.splice(existing, 1);
  } else {
    sec.notes.push({ type: type, text: '' });
  }
  renderDayEdit();
  requestAnimationFrame(function () {
    // Keep the section open and focus the new text input
    const secEl = document.querySelector('.editing-section[data-sec="' + secIdx + '"]');
    if (secEl) secEl.classList.add('open');
    const input = document.querySelector('[data-note-sec="' + secIdx + '"][data-note-type="' + type + '"]');
    if (input) input.focus();
  });
}

// ─── EDIT MODE: SAVE ─────────────────────────────────────────────────────────
async function saveEdits() {
  if (state.saving) return;
  if (!state.editing) return;
  state.saving = true;

  const draft = state.editing.draft;
  const idx = DAYS.findIndex(function (d) { return d.id === draft.id; });
  if (idx < 0) {
    state.saving = false;
    showToast('Day not found — could not save', 'err');
    return;
  }
  DAYS[idx] = draft;

  try {
    localStorage.setItem(EDIT_CFG.storageKey, JSON.stringify(DAYS));
  } catch (e) { console.warn('localStorage save failed', e); }

  const passphrase = getPassphrase();
  if (passphrase) {
    showToast('Publishing to GitHub…', 'info');
    try {
      await commitViaWorker(DAYS, passphrase);
      showToast('Saved & published ✓', 'ok');
    } catch (e) {
      console.error('Worker commit failed', e);
      showToast('Saved here, but publish failed: ' + (e.message || 'unknown'), 'warn');
    }
  } else {
    showToast('Saved in this browser', 'ok');
  }

  state.saving = false;
  exitEditMode();
}

async function commitViaWorker(days, passphrase) {
  const res = await fetch(WORKER_URL + '/commit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Edit-Passphrase': passphrase,
    },
    body: JSON.stringify({
      editsPath: EDIT_CFG.editsPath,
      days: days,
      message: 'Edit Day ' + (state.editing ? state.editing.draft.id : '?') + ' on ' + TRIP_META.shortName,
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(res.status + ': ' + t.slice(0, 120));
  }
}

// ─── EDIT MODE: SETTINGS SHEET ───────────────────────────────────────────────
function openSettings() {
  const sheet = document.getElementById('settings-sheet');
  const backdrop = document.getElementById('sheet-backdrop');
  document.getElementById('pat-input').value = getPassphrase() || '';
  updateSettingsStatus();
  backdrop.style.display = 'block';
  sheet.style.display = 'flex';
  requestAnimationFrame(function () {
    backdrop.classList.add('vis');
    sheet.classList.add('vis');
  });
  state.settingsOpen = true;
}

function closeSettings() {
  const sheet = document.getElementById('settings-sheet');
  const backdrop = document.getElementById('sheet-backdrop');
  sheet.classList.remove('vis');
  backdrop.classList.remove('vis');
  setTimeout(function () {
    sheet.style.display = 'none';
    backdrop.style.display = 'none';
  }, 220);
  state.settingsOpen = false;
}

function updateSettingsStatus() {
  const el = document.getElementById('settings-status');
  const p = getPassphrase();
  if (p) {
    el.className = 'settings-status ok';
    el.textContent = 'Passphrase set on this device. Edits will publish to GitHub.';
  } else {
    el.className = 'settings-status';
    el.textContent = 'No passphrase set. Edits save to this browser only.';
  }
}

function savePassphrase() {
  const p = document.getElementById('pat-input').value.trim();
  if (p) localStorage.setItem(PASSPHRASE_KEY, p);
  else localStorage.removeItem(PASSPHRASE_KEY);
  closeSettings();
  showToast(p ? 'Passphrase saved' : 'Passphrase cleared', 'ok');
}

function getPassphrase() {
  try { return localStorage.getItem(PASSPHRASE_KEY); } catch (e) { return null; }
}

// ─── EDIT MODE: TOAST ────────────────────────────────────────────────────────
let toastTimer = null;
function showToast(msg, kind) {
  let t = document.getElementById('edit-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'edit-toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = 'toast-' + (kind || 'info');
  requestAnimationFrame(function () { t.classList.add('vis'); });
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.classList.remove('vis'); }, 3800);
}

// ─── EDIT MODE: WIRE UP ──────────────────────────────────────────────────────
function bindEditButtons() {
  document.getElementById('edit-btn').addEventListener('click', function () {
    if (state.openDayId) enterEditMode(state.openDayId);
  });
  document.getElementById('edit-cancel-btn').addEventListener('click', function () {
    if (state.saving) return;
    exitEditMode();
  });
  document.getElementById('edit-save-btn').addEventListener('click', function () {
    saveEdits().catch(function (e) { console.error(e); showToast('Save error: ' + e.message, 'err'); });
  });
  document.getElementById('edit-settings-btn').addEventListener('click', openSettings);
  document.getElementById('settings-cancel-btn').addEventListener('click', closeSettings);
  document.getElementById('settings-save-btn').addEventListener('click', savePassphrase);
}

// ─── EDIT MODE: ASYNC OVERLAY FROM REMOTE ────────────────────────────────────
async function fetchRemoteEdits() {
  try {
    const res = await fetch('edits.json', { cache: 'no-cache' });
    if (!res.ok) return; // 404 is fine — no published edits yet
    const data = await res.json();
    if (!data || !Array.isArray(data.days) || !data.days.length) return;
    const incoming = JSON.stringify(data.days);
    const cached = localStorage.getItem(EDIT_CFG.storageKey);
    if (cached === incoming) return; // No change
    DAYS = data.days;
    try { localStorage.setItem(EDIT_CFG.storageKey, incoming); } catch (e) {}
    state.overviewPaneRendered = false;
    if (!state.editing && state.route) renderRoute();
  } catch (e) { /* offline, swallow */ }
}

document.addEventListener('DOMContentLoaded', init);
