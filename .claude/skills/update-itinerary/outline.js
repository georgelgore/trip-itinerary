#!/usr/bin/env node
// Compact view + sanity check of a trip's itinerary, so edits don't need the whole data.js in context.
//
//   node .claude/skills/update-itinerary/outline.js <trip-folder>            all days, one line per section
//   node .claude/skills/update-itinerary/outline.js <trip-folder> --day 9    one day in full (content + notes)
//   node .claude/skills/update-itinerary/outline.js <trip-folder> --check    validate after editing
//
// <trip-folder> is the folder name under trips/, e.g. south-korea-2026.
// If trips/<trip>/edits.json exists, its days are what the live app shows, so they are used here too.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const [trip, ...rest] = process.argv.slice(2);
if (!trip) { console.error('Usage: outline.js <trip-folder> [--day N | --check]'); process.exit(2); }
const root = path.resolve(__dirname, '../../..');
const dir = path.join(root, 'trips', trip);
const dataPath = path.join(dir, 'data.js');
const editsPath = path.join(dir, 'edits.json');

function loadData() {
  const src = fs.readFileSync(dataPath, 'utf8') +
    '\n;globalThis.__out = { TRIP_META, DAYS, QUICK_REF: typeof QUICK_REF !== "undefined" ? QUICK_REF : {} };';
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(src, ctx, { filename: dataPath });
  return ctx.__out;
}

let data;
try { data = loadData(); } catch (e) { console.error('data.js failed to load: ' + e.message); process.exit(1); }

let days = data.DAYS, source = 'data.js';
if (fs.existsSync(editsPath)) {
  try {
    const edits = JSON.parse(fs.readFileSync(editsPath, 'utf8'));
    if (Array.isArray(edits.days)) { days = edits.days; source = `edits.json (updatedAt ${edits.updatedAt})`; }
  } catch (e) { console.error('edits.json is not valid JSON: ' + e.message); process.exit(1); }
}

const flag = rest[0];
if (flag === '--day') {
  const n = Number(rest[1]);
  const d = days.find(x => x.id === n);
  if (!d) { console.error(`No day with id ${n}`); process.exit(1); }
  console.log(`Source: ${source}\n# Day ${d.id}: ${d.date} | ${d.location}${d.sublocation ? ' / ' + d.sublocation : ''}\nStay: ${d.stay || ''}`);
  console.log('Highlights: ' + (d.highlights || []).map(h => `${h.icon} ${h.text}`).join(' · '));
  (d.sections || []).forEach((s, i) => {
    console.log(`\n[${i}] ${s.icon || ''} ${s.label}`);
    if (s.content) console.log('    ' + s.content.replace(/\n/g, '\n    '));
    if (s.address) console.log('    📍 ' + s.address + (s.mapQuery ? `  (map: ${s.mapQuery})` : ''));
    (s.notes || []).forEach(n => console.log(`    - ${n.type}: ${n.text}`));
  });
  process.exit(0);
}

if (flag === '--check') {
  const problems = [];
  const sensitive = /(confirmation|conf\.?|booking|reservation)\s*(#|no\.?|number|code|ref)\s*[:#]?\s*[A-Z0-9-]{4,}|\bPNR\b|card ending in \d{4}/i;
  const ids = days.map(d => d.id);
  ids.forEach((id, i) => { if (id !== i + 1) problems.push(`Day ids not sequential at position ${i + 1} (found ${id})`); });
  days.forEach(d => {
    if (!d.sections || !d.sections.length) problems.push(`Day ${d.id} has no sections`);
    (d.sections || []).forEach((s, i) => {
      if (!s.label) problems.push(`Day ${d.id} section [${i}] has no label`);
      (s.notes || []).forEach(n => {
        if (!['info', 'warning', 'cash', 'reservation'].includes(n.type)) problems.push(`Day ${d.id} [${i}] unknown note type "${n.type}"`);
      });
    });
    const text = JSON.stringify(d);
    if (sensitive.test(text)) problems.push(`Day ${d.id} may contain a confirmation number or other private detail (the page is public)`);
  });
  if (sensitive.test(JSON.stringify(data.QUICK_REF))) problems.push('QUICK_REF may contain a confirmation number or other private detail');
  console.log(`Source: ${source}`);
  if (problems.length) { console.log('Problems:\n- ' + problems.join('\n- ')); process.exit(1); }
  console.log(`OK: ${days.length} days, ${days.reduce((a, d) => a + (d.sections || []).length, 0)} sections.`);
  process.exit(0);
}

console.log(`Source: ${source}   (${data.TRIP_META.name}, ${data.TRIP_META.dates})`);
days.forEach(d => {
  console.log(`\nDay ${d.id}: ${d.date} | ${d.location}${d.sublocation ? ' / ' + d.sublocation : ''} | ${(d.stay || '').split('·')[0].trim()}`);
  (d.sections || []).forEach((s, i) => {
    const marks = (s.notes || []).map(n => n.type === 'warning' ? '⚠' : n.type === 'reservation' ? '📋' : '').join('');
    const tbd = /^TBD/i.test(s.content || '') ? ' (TBD)' : '';
    console.log(`  [${i}] ${s.label}${tbd} ${marks}`.trimEnd());
  });
});
