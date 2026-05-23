
// ─── EDIT MODE: CONFIG ───────────────────────────────────────────────────────
const EDIT_CFG = {
  tripId: '__TRIP_ID__',
  githubOwner: 'georgelgore',
  githubRepo: 'trip-itinerary',
  githubBranch: 'main',
  editsPath: '__EDITS_PATH__',
  storageKey: '__STORAGE_KEY__',
  patKey: 'trip-gh-pat',
};

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

// Async overlay from edits.json (published to GitHub). Called from init().
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
    if (!state.editing && state.route) renderRoute();
  } catch (e) { /* offline, swallow */ }
}

// ─── EDIT MODE: STATE ────────────────────────────────────────────────────────
Object.assign(state, { editing: null, settingsOpen: false, saving: false });

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

  const hasPAT = !!getPAT();
  const noticeText = hasPAT
    ? 'Hitting Done will save & publish to GitHub.'
    : 'Hitting Done saves to this browser only. Tap ⚙ to add a GitHub token to publish.';

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

  const pat = getPAT();
  if (pat) {
    showToast('Publishing to GitHub…', 'info');
    try {
      await commitToGitHub(DAYS, pat);
      showToast('Saved & published ✓', 'ok');
    } catch (e) {
      console.error('GitHub commit failed', e);
      showToast('Saved here, but GitHub publish failed: ' + (e.message || 'unknown'), 'warn');
    }
  } else {
    showToast('Saved in this browser', 'ok');
  }

  state.saving = false;
  exitEditMode();
}

async function commitToGitHub(days, pat) {
  const apiUrl = 'https://api.github.com/repos/'
    + EDIT_CFG.githubOwner + '/' + EDIT_CFG.githubRepo
    + '/contents/' + EDIT_CFG.editsPath;

  // Get current SHA (file may not exist)
  let sha;
  const getRes = await fetch(apiUrl + '?ref=' + EDIT_CFG.githubBranch, {
    headers: { 'Authorization': 'Bearer ' + pat, 'Accept': 'application/vnd.github+json' },
  });
  if (getRes.ok) {
    const d = await getRes.json();
    sha = d.sha;
  } else if (getRes.status !== 404) {
    throw new Error('GET ' + getRes.status);
  }

  const newPayload = JSON.stringify({
    updatedAt: new Date().toISOString(),
    days: days,
  }, null, 2);

  // Base64-encode the UTF-8 bytes
  const base64 = btoa(unescape(encodeURIComponent(newPayload)));

  const putRes = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer ' + pat,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Edit Day ' + (state.editing ? state.editing.draft.id : '?') + ' on ' + TRIP_META.shortName,
      content: base64,
      sha: sha,
      branch: EDIT_CFG.githubBranch,
    }),
  });
  if (!putRes.ok) {
    const t = await putRes.text();
    throw new Error('PUT ' + putRes.status + ': ' + t.slice(0, 120));
  }
}

// ─── EDIT MODE: SETTINGS SHEET ───────────────────────────────────────────────
function openSettings() {
  const sheet = document.getElementById('settings-sheet');
  const backdrop = document.getElementById('sheet-backdrop');
  document.getElementById('pat-input').value = getPAT() || '';
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
  const pat = getPAT();
  if (pat) {
    el.className = 'settings-status ok';
    el.textContent = 'Token saved on this device (' + pat.length + ' chars). Edits will publish to GitHub.';
  } else {
    el.className = 'settings-status';
    el.textContent = 'No token set. Edits save to this browser only.';
  }
}

function savePAT() {
  const pat = document.getElementById('pat-input').value.trim();
  if (pat) localStorage.setItem(EDIT_CFG.patKey, pat);
  else localStorage.removeItem(EDIT_CFG.patKey);
  closeSettings();
  showToast(pat ? 'Token saved' : 'Token cleared', 'ok');
}

function getPAT() {
  try { return localStorage.getItem(EDIT_CFG.patKey); } catch (e) { return null; }
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
    if (state.route && state.route.view === 'day') enterEditMode(state.route.id);
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
  document.getElementById('settings-save-btn').addEventListener('click', savePAT);
}

