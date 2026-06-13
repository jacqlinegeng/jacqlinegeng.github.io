// @ts-nocheck
/* ============================================================
   Jacqline Geng — terminal + diary portfolio (page logic)
   Vanilla-DOM module driven from React via initPortfolio().
   ============================================================ */
import { loadContent } from "./content";

export function initPortfolio() {
  loadContent();
  init();
}

/* ============================================================
 Jacqline Geng — terminal + diary portfolio  (logic)
 ============================================================ */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const wait = (ms) => new Promise(r => setTimeout(r, ms));

/* resolve a URL to an inlined blob (standalone build) or fall back to the URL */
const R = (u) => (u && window.__resources && window.__resources[u]) || u;

/* Robust clipboard copy with execCommand fallback for sandboxed iframes */
function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  } catch (e) { fallbackCopy(text); }
}
function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none;';
  document.body.appendChild(ta);
  ta.focus(); ta.select(); ta.setSelectionRange(0, text.length);
  try { document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(ta);
}

const ICON = {
  about:   '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="7" r="3"/><path d="M4 17c1-3.4 3.4-5 6-5s5 1.6 6 5"/></svg>',
  projects:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6.5C3 5.7 3.7 5 4.5 5H8l1.5 1.6H15.5c.8 0 1.5.7 1.5 1.5v6.4c0 .8-.7 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5z"/></svg>',
  writing: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 16l1-3.6L13.2 4.2a1.6 1.6 0 0 1 2.3 0l.3.3a1.6 1.6 0 0 1 0 2.3L7.6 15z"/><path d="M12.5 5.5l2 2"/></svg>',
  reading: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 5.5C8.5 4.3 6.6 4 4.5 4.2v10c2-.2 3.9 .1 5.5 1.3 1.6-1.2 3.5-1.5 5.5-1.3v-10C13.4 4 11.5 4.3 10 5.5z"/><path d="M10 5.5v10"/></svg>',
  contact: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="14" height="11" rx="2"/><path d="m3.5 6.5 6.5 5 6.5-5"/></svg>',
  github:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v4H4V4Zm0 6h4v10H4V10Zm6 0h4v1.7c.6-.9 1.8-2 3.8-2 3.2 0 4.2 2.1 4.2 4.8V20h-4v-4.9c0-1.2-.4-2.1-1.5-2.1s-1.7.8-2 1.6c-.1.3-.1.7-.1 1V20h-4V10Z"/></svg>',
  x:       '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  substack:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v2.6H4zM4 9.1h16V21l-8-4-8 4z"/></svg>',
  spotify: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M7 10c3-1 7-1 10 1M7.5 13c2.5-.8 5.5-.5 8 1M8 16c2-.6 4-.4 6 .7"/></svg>',
  mail:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6.5L20.5 7"/></svg>',
  arrow:   '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8h8M8.5 4l4 4-4 4"/></svg>'
};

const ROUTES = ['about', 'projects', 'writing', 'reading', 'contact'];
const PROMPT = '<span class="t-prompt">jacqline@portfolio <span class="at">~</span> %</span>';
let typeToken = 0;

let started = false;
function init() {
  if (started) return;   // guard against double-mount (React StrictMode)
  started = true;
  buildSidebar();
  const hash = location.hash.replace('#', '');
  if (ROUTES.includes(hash)) {
    // land directly on the requested page; boot terminal silently in background
    $('#terminal-screen').classList.remove('active');
    $('#site-screen').classList.add('active');
    $$('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.go === hash));
    renderPage(hash);
    // still run terminal boot so snapshot is captured (off-screen)
    bootTerminal();
  } else {
    bootTerminal();
  }
  window.addEventListener('hashchange', syncHash);
}

/* ---------- typing helper ---------- */
async function typeInto(el, text, speed, token) {
  el.textContent = '';
  const caret = document.createElement('span');
  caret.className = 'term-caret';
  el.after(caret);
  for (let i = 0; i < text.length; i++) {
    if (token !== typeToken) { caret.remove(); return false; }
    el.textContent += text[i];
    scrollTermBottom();
    await wait(speed + (text[i] === ' ' ? 8 : Math.random() * 22));
  }
  caret.remove();
  return true;
}
function scrollTermBottom() {
  const b = $('#term-body'); if (b) b.scrollTop = b.scrollHeight;
}

/* ============================================================
   TERMINAL boot
   ============================================================ */
let bootDone = false;
let bootSnapshot = '';
let skip = false;

async function bootTerminal() {
  const body = $('#term-body');
  body.innerHTML = '';
  const token = ++typeToken;

  // last login
  const d = new Date();
  const stamp = d.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  addLine(body, `<span class="t-dim">last login: ${stamp} on console</span>`);

  // command: welcome
  const l1 = addLine(body, `${PROMPT}<span class="cmd"></span>`);
  await typeInto(l1.querySelector('.cmd'), ' ./welcome', 34, token);
  if (token !== typeToken) return;
  await wait(skip ? 0 : 260);

  // output: welcome message (program output — distinct color)
  const o1 = addLine(body, `<span class="t-out"></span>`);
  await typeInto(o1.querySelector('.t-out'), "welcome to Jacqline's terminal", 38, token);
  if (token !== typeToken) return;
  await wait(skip ? 0 : 420);

  // command: ls
  const l2 = addLine(body, `${PROMPT}<span class="cmd"></span>`);
  await typeInto(l2.querySelector('.cmd'), ' ls', 40, token);
  if (token !== typeToken) return;
  await wait(skip ? 0 : 200);

  // output: question
  const o2 = addLine(body, `<span class="t-accent"></span>`);
  await typeInto(o2.querySelector('.t-accent'), 'where would you like to go next?', 30, token);
  if (token !== typeToken) return;

  // options
  const opts = document.createElement('div');
  opts.className = 'term-options';
  opts.innerHTML = ROUTES.map(r => `<button class="term-opt" data-go="${r}"><span class="arrow">&rsaquo;</span>${r}</button>`).join('');
  body.appendChild(opts);
  const optEls = $$('.term-opt', opts);
  for (let i = 0; i < optEls.length; i++) {
    await wait(skip ? 0 : 90);
    optEls[i].classList.add('show');
  }
  scrollTermBottom();

  // snapshot of the clean booted state (used to reset on Enter)
  bootSnapshot = body.innerHTML;

  // live input
  makeInputLine(body, true);
  $('#term-hint').classList.add('show');
  bootDone = true;
}

function addLine(parent, html) {
  const el = document.createElement('div');
  el.className = 't-line';
  el.innerHTML = html;
  parent.appendChild(el);
  scrollTermBottom();
  return el;
}

function makeInputLine(parent, focus) {
  const line = document.createElement('div');
  line.className = 'term-input-line show';
  line.innerHTML = `${PROMPT}<span class="term-input" contenteditable="true" spellcheck="false"></span><span class="term-caret"></span>`;
  parent.appendChild(line);
  const input = line.querySelector('.term-input');
  input.addEventListener('keydown', onInputKey);
  if (focus) setTimeout(() => focusEnd(input), 50);
  scrollTermBottom();
  return input;
}

function onInputKey(e) {
  const input = e.target;
  if (e.key === 'Enter') {
    e.preventDefault();
    const val = input.textContent.trim().toLowerCase();
    // freeze current line
    input.setAttribute('contenteditable', 'false');
    input.closest('.term-input-line').querySelector('.term-caret').remove();
    // valid command -> navigate (delightful, still no text output)
    if (ROUTES.includes(val)) { go(val); return; }
    // otherwise: clear the terminal back to the booted state, fresh prompt
    const body = $('#term-body');
    if (bootSnapshot) body.innerHTML = bootSnapshot;
    makeInputLine(body, true);
  }
}

function focusEnd(el) {
  el.focus();
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  const sel = window.getSelection();
  sel.removeAllRanges(); sel.addRange(range);
}

// click anywhere in terminal: skip boot OR focus input
function wireTerminal() {
  const screen = $('#terminal-screen');
  screen.addEventListener('click', (e) => {
    const opt = e.target.closest('[data-go]');
    if (opt) { go(opt.dataset.go); return; }
    if (!bootDone) { skip = true; return; }
    const input = $('.term-input[contenteditable="true"]');
    if (input && !window.getSelection().toString()) focusEnd(input);
  });
}

/* ============================================================
   ROUTER
   ============================================================ */
function buildSidebar() {
  $('#side-nav').innerHTML = ROUTES.map(r =>
    `<div class="nav-item" data-go="${r}"><span class="ico">${ICON[r]}</span>${r}</div>`
  ).join('');
  $('#side-nav').addEventListener('click', (e) => {
    const it = e.target.closest('[data-go]'); if (it) go(it.dataset.go);
  });
  $('#brand').addEventListener('click', home);
  $('#back-term').addEventListener('click', home);

  const L = window.LINKS;
  $('#side-socials').innerHTML = `
    <a href="${L.github}" target="_blank" title="GitHub">${ICON.github}</a>
    <a href="${L.linkedin}" target="_blank" title="LinkedIn">${ICON.linkedin}</a>
    <a href="${L.x}" target="_blank" title="X">${ICON.x}</a>
    <a href="${L.substack}" target="_blank" title="Substack">${ICON.substack}</a>`;
  wireTerminal();
}

function go(route) {
  if (!ROUTES.includes(route)) return;
  typeToken++; // cancel any terminal typing
  document.querySelector('.modal-bg')?.remove();
  $('#terminal-screen').classList.remove('active');
  $('#site-screen').classList.add('active');
  $$('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.go === route));
  if (location.hash !== '#' + route) history.replaceState(null, '', '#' + route);
  renderPage(route);
  $('.content').scrollTop = 0;
}

function home() {
  document.querySelector('.modal-bg')?.remove();
  $('#site-screen').classList.remove('active');
  $('#terminal-screen').classList.add('active');
  history.replaceState(null, '', location.pathname);
  const input = $('.term-input[contenteditable="true"]');
  if (input) setTimeout(() => focusEnd(input), 60);
}

function syncHash() {
  const r = location.hash.replace('#', '');
  if (ROUTES.includes(r)) go(r);
  else home();
}

/* ============================================================
   PAGES
   ============================================================ */
function renderPage(route) {
  const c = $('#page-content');
  if (route === 'about')    return renderAbout(c);
  if (route === 'projects') return renderProjects(c);
  if (route === 'writing')  return renderWriting(c);
  if (route === 'reading')  return renderReading(c);
  if (route === 'contact')  return renderContact(c);
}

/* ---------- ABOUT ---------- */
function renderAbout(c) {
  const A = window.ABOUT;
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  c.innerHTML = `
    <div class="page">
      <div class="page-eyebrow">dear diary</div>
      <h1 class="page-title">About me</h1>
      <div class="about-grid" style="margin-top: 34px;">
        <div class="diary">
          <div class="diary-date">${today}</div>
          <h2 class="diary-greeting">${A.greeting}</h2>
          <div class="diary-body" id="diary-body"></div>
          <div class="diary-pen" id="diary-pen" aria-hidden="true">
            <svg viewBox="0 0 120 120" width="92" height="92" fill="none">
              <defs>
                <linearGradient id="pcBody" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stop-color="#6A57A8"/>
                  <stop offset="0.26" stop-color="#A78EDF"/>
                  <stop offset="0.5" stop-color="#C7B2EE"/>
                  <stop offset="0.74" stop-color="#9077D2"/>
                  <stop offset="1" stop-color="#5E4C98"/>
                </linearGradient>
                <linearGradient id="pcWood" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stop-color="#CBA877"/>
                  <stop offset="0.5" stop-color="#F1DEBB"/>
                  <stop offset="1" stop-color="#BE9869"/>
                </linearGradient>
                <linearGradient id="pcFerrule" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stop-color="#8E90A6"/>
                  <stop offset="0.5" stop-color="#E9EAF1"/>
                  <stop offset="1" stop-color="#83859B"/>
                </linearGradient>
                <linearGradient id="pcEraser" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stop-color="#B274A6"/>
                  <stop offset="0.5" stop-color="#E2B6D6"/>
                  <stop offset="1" stop-color="#A767A0"/>
                </linearGradient>
              </defs>
              <g>
                <!-- eraser -->
                <path d="M50 20 L50 13 Q50 6 60 6 Q70 6 70 13 L70 20 Z" fill="url(#pcEraser)"/>
                <!-- metal ferrule -->
                <rect x="50" y="20" width="20" height="13" fill="url(#pcFerrule)"/>
                <rect x="50" y="23.4" width="20" height="1.1" fill="rgba(0,0,0,0.16)"/>
                <rect x="50" y="28.6" width="20" height="1.1" fill="rgba(0,0,0,0.16)"/>
                <!-- hex barrel -->
                <rect x="50" y="33" width="20" height="49" fill="url(#pcBody)"/>
                <rect x="55.8" y="33" width="0.9" height="49" fill="rgba(30,20,50,0.16)"/>
                <rect x="63.3" y="33" width="0.9" height="49" fill="rgba(30,20,50,0.18)"/>
                <rect x="58.4" y="33" width="2.4" height="49" fill="rgba(255,255,255,0.26)"/>
                <!-- sharpened wood cone -->
                <polygon points="50,82 70,82 60,101" fill="url(#pcWood)"/>
                <polygon points="60,82 70,82 60,101" fill="rgba(90,58,28,0.18)"/>
                <polygon points="56,82 64,82 60,101" fill="rgba(255,255,255,0.20)"/>
                <!-- graphite tip -->
                <polygon points="56.6,93 63.4,93 60,110" fill="#3a3452"/>
                <polygon points="60,93 63.4,93 60,110" fill="rgba(0,0,0,0.30)"/>
              </g>
            </svg>
          </div>
          <div class="diary-sign" id="diary-sign" style="opacity:0;">${A.signature}</div>
          <div class="about-facts" id="about-facts" style="opacity:0;">
            ${A.facts.map(f => `<span class="fact"><span class="k">${f.k}</span><b>${f.v}</b></span>`).join('')}
          </div>
        </div>
        <div class="photobooth">
          <div class="pb-machine">
            <div class="pb-clip" id="pb-clip">
              <div class="pb-strip" id="pb-strip">
                ${A.photos.map(p => `<div class="pb-frame"><img src="${R(p)}" alt="Jacqline"></div>`).join('')}
                <div class="pb-cap">jacq &#9825; 2026</div>
              </div>
            </div>
            <div class="pb-slot"><div class="pb-mouth"><div class="pb-mouth-inner"></div></div></div>
          </div>
        </div>
      </div>
    </div>`;

  // photobooth: grow the strip height from 0
  setTimeout(playPhotobooth, 250);

  // diary typewriter
  const token = ++typeToken;
  typeDiary($('#diary-body'), A.entry, token).then(ok => {
    liftPen($('#diary-pen'));
    if (!ok) return;
    const sign = $('#diary-sign'); const facts = $('#about-facts');
    if (sign) { sign.style.transition = 'opacity .5s'; sign.style.opacity = '1'; }
    if (facts) { facts.style.transition = 'opacity .6s .2s'; facts.style.opacity = '1'; }
  });
}

/* ---------- wooden pencil that writes the diary out, stroke by stroke ---------- */
/* the SVG graphite tip is at local point (60,110); transform-origin matches it,
   so translating the element pins the tip onto the writing line. On top of the
   left-to-right drift we layer fast micro-strokes + hand articulation so it
   reads like a real hand forming each letter rather than gliding. */
let penChars = 0;
function movePen(diary, pen, lift) {
  if (!pen || !diary) return;
  const caret = diary.querySelector('.type-caret');
  if (!caret) return;
  const dr = diary.getBoundingClientRect();
  const cr = caret.getBoundingClientRect();
  const x = cr.left - dr.left;
  const baseTop = cr.top - dr.top + cr.height - 2;     // tip on the writing line
  const t = penChars++;
  // writing micro-motion: the tip bobs up/down forming strokes, drifts a touch
  const strokeY = Math.sin(t * 2.3) * 2.1 + Math.sin(t * 5.3) * 0.9;
  const strokeX = Math.cos(t * 3.1) * 1.3;
  const tilt    = Math.sin(t * 1.7) * 3.4;             // wrist articulation (deg)
  const upY     = lift ? -9 : 0;                        // lift between words
  const upTilt  = lift ? 5 : 0;
  pen.style.opacity = '1';
  pen.style.transform =
    `translate(${x - 46 + strokeX}px, ${baseTop - 84 + strokeY + upY}px) ` +
    `rotate(${40 + tilt + upTilt}deg)`;   // 40° base hold + wrist articulation
}
function liftPen(pen) {
  if (!pen) return;
  pen.style.transition = 'transform .6s cubic-bezier(.3,.55,.25,1), opacity .55s ease';
  pen.style.opacity = '0';
  pen.style.transform = (pen.style.transform || '') + ' translate(18px,-30px) rotate(7deg)';
}

/* photobooth: the strip grows from 0 height to full (grid 0fr -> 1fr) */
function playPhotobooth() {
  const clip = $('#pb-clip'), strip = $('#pb-strip');
  if (!clip || !strip) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { clip.classList.add('open'); return; }

  // wait for the images so the final height is correct, then animate open
  const imgs = $$('img', strip);
  Promise.all(imgs.map(img => img.complete ? null : new Promise(r => { img.onload = img.onerror = r; })))
    .then(() => {
      if (!document.body.contains(clip)) return;
      requestAnimationFrame(() => requestAnimationFrame(() => clip.classList.add('open')));
    });
}

async function typeDiary(host, paragraphs, token) {
  host.innerHTML = '';
  penChars = 0;
  const diary = host.closest('.diary');
  const pen = diary ? diary.querySelector('.diary-pen') : null;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  for (let pi = 0; pi < paragraphs.length; pi++) {
    const segs = paragraphs[pi];
    const p = document.createElement('p');
    if (pi === paragraphs.length - 1) p.className = 'muted';
    host.appendChild(p);
    const caret = document.createElement('span');
    caret.className = 'type-caret';
    p.appendChild(caret);
    for (const seg of segs) {
      let node;
      if (seg.href) {
        node = document.createElement('a');
        node.href = seg.href; node.target = '_blank'; node.className = 'dlink';
      } else {
        node = document.createElement('span');
      }
      caret.before(node);
      for (let i = 0; i < seg.t.length; i++) {
        if (token !== typeToken) return false;
        const ch = seg.t[i];
        const isSpace = ch === ' ';
        if (isSpace) {
          node.appendChild(document.createTextNode(' '));
        } else {
          // each glyph blooms in like ink settling onto paper
          const s = document.createElement('span');
          s.className = 'ink';
          s.textContent = ch;
          node.appendChild(s);
          requestAnimationFrame(() => { s.style.opacity = '1'; });
        }
        if (!reduce) movePen(diary, pen, isSpace);
        await wait(
          (isSpace ? 26 : 15 + Math.random() * 18) +     // unhurried, slightly uneven hand
          (/[.,;]/.test(ch) ? 120 : 0)                   // pause at punctuation
        );
      }
    }
    caret.remove();
    await wait(160);
  }
  return true;
}

/* ---------- PROJECTS ---------- */
function renderProjects(c) {
  const P = window.PROJECTS;
  c.innerHTML = `
    <div class="page">
      <div class="page-eyebrow">things I've made</div>
      <h1 class="page-title">Projects</h1>
      <p class="page-sub">A working notebook of products, experiments, and the studio I founded. Click any entry to visit it.</p>
      <div class="proj-list">
        ${P.map(p => `
          <div class="proj-row" data-link="${p.link}">
            <div>
              <h3 class="ttl">${p.title}${p.featured ? '<span class="badge">FOUNDER</span>' : ''}</h3>
              <div class="dsc">${p.desc}</div>
              <div class="tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
            </div>
            <div class="proj-meta">
              <div class="yr">${p.year}</div>
              <div class="tg">${p.tag}</div>
              <div class="go">visit &rarr;</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
  c.querySelectorAll('[data-link]').forEach(r => r.addEventListener('click', () => {
    const u = r.dataset.link; if (u && u !== 'null') window.open(u, '_blank');
  }));
}

/* ---------- WRITING ---------- */
function renderWriting(c) {
  const N = window.NOTES;
  const L = window.LINKS;
  const listView = () => {
    c.innerHTML = `
      <div class="page">
        <div class="page-eyebrow">field notes</div>
        <h1 class="page-title">Writing</h1>
        <p class="page-sub">Essays and journal entries on building, attention, and first principles. Longer pieces live on <a href="${L.substack}" target="_blank" style="color:var(--lav-deep);border-bottom:1px solid var(--lav-mid);">Substack</a>.</p>
        <div class="note-list">
          ${N.map(n => `
            <div class="note-row" data-note="${n.id}">
              <div><span class="nd">${n.date}</span><span class="nk">${n.kind}</span></div>
              <div>
                <h3 class="nt">${n.title}</h3>
                <div class="np">${n.preview}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>`;
    c.querySelectorAll('[data-note]').forEach(r => r.addEventListener('click', () => detailView(r.dataset.note)));
  };
  const detailView = (id) => {
    const n = N.find(x => x.id === id);
    const today = n.date;
    c.innerHTML = `
      <div class="page">
        <div class="note-back" id="note-back">&larr;&nbsp; back to all notes</div>
        <div class="diary note-full">
          <div class="diary-date">${today}</div>
          <h2 class="diary-greeting">${n.title}</h2>
          <div class="diary-body">
            ${n.body.map(b => typeof b === 'string' ? `<p>${b}</p>` : `<blockquote>${b.quote}</blockquote>`).join('')}
          </div>
          <div class="note-foot">filed under ${n.kind} &middot; read more at <a href="${L.substack}" target="_blank">incosmicdust.substack.com</a></div>
        </div>
      </div>`;
    $('#note-back').addEventListener('click', listView);
    $('.content').scrollTop = 0;
  };
  listView();
}

/* ---------- READING ---------- */
function renderReading(c) {
  const B = window.BOOKS;
  const reading = B.filter(b => b.s === 'reading');
  const done = B.filter(b => b.s === 'done');
  const want = B.filter(b => b.s === 'want');
  const PAL = [
    'linear-gradient(160deg,#DEE2F5,#AEB6E2)',
    'linear-gradient(160deg,#E7E4EE,#C2BED2)',
    'linear-gradient(160deg,#C9CFF0,#9AA0D4)',
    'linear-gradient(160deg,#EAE6DC,#CBC3AE)',
    'linear-gradient(160deg,#DCE3E0,#AEC4B8)'
  ];
  const cover = (b, i) => `
    <div class="bk" data-bk="${encodeURIComponent(b.t)}">
      <div class="cov" style="background:${PAL[i % PAL.length]}">
        <div class="cov-spine"><span>${b.t}</span></div>
        <div class="cov-face">
          <span class="covt"><b>${b.t}</b><i>${b.a}</i></span>
          ${b.c ? `<img src="${R(b.c)}" alt="" onerror="this.remove()">` : ''}
          ${b.s === 'reading' ? `<div class="prog" style="width:${b.p}%"></div>` : ''}
        </div>
      </div>
      <div class="bt">${b.t}</div>
      <div class="ba">${b.a}</div>
    </div>`;
  c.innerHTML = `
    <div class="page">
      <div class="page-eyebrow">currently on my desk</div>
      <h1 class="page-title">Reading</h1>
      <p class="page-sub">${B.length} books logged &middot; ${reading.length} in progress &middot; ${done.length} finished. A reading journal kept honestly.</p>

      <div class="read-sec">
        <div class="read-h"><span class="lbl">currently reading</span><span class="ct">${reading.length}</span><span class="rule"></span><button class="expand-btn" id="shelf-toggle">expand</button></div>
        <div class="shelf" id="cur-shelf">${reading.map(cover).join('')}</div>
      </div>

      <div class="read-sec">
        <div class="read-h"><span class="lbl">finished</span><span class="ct">${done.length}</span><span class="rule"></span></div>
        ${done.map(b => `
          <div class="read-row" data-bk="${encodeURIComponent(b.t)}">
            <div class="rt">${b.t}</div>
            <div class="ra">${b.a}</div>
            <div class="rs">${b.done || ''}</div>
          </div>`).join('')}
      </div>

      ${want.length ? `
      <div class="read-sec">
        <div class="read-h"><span class="lbl">want to read</span><span class="ct">${want.length}</span><span class="rule"></span></div>
        ${want.map(b => `
          <div class="read-row" data-bk="${encodeURIComponent(b.t)}">
            <div class="rt">${b.t}</div>
            <div class="ra">${b.a}</div>
            <div class="rs">queued</div>
          </div>`).join('')}
      </div>` : ''}
    </div>`;
  c.querySelectorAll('[data-bk]').forEach(el => el.addEventListener('click', () => {
    const b = B.find(x => x.t === decodeURIComponent(el.dataset.bk)); if (b) openBook(b);
  }));
  const tog = $('#shelf-toggle'), sh = $('#cur-shelf');
  if (tog && sh) tog.addEventListener('click', () => {
    const on = sh.classList.toggle('expanded');
    tog.textContent = on ? 'collapse' : 'expand';
  });
}

function openBook(b) {
  const bg = document.createElement('div');
  bg.className = 'modal-bg';
  const kind = b.s === 'reading' ? 'currently reading' : b.s === 'done' ? 'finished &middot; ' + (b.done || '') : 'want to read';
  bg.innerHTML = `
    <div class="modal">
      <div class="mtop">
        ${b.c ? `<div class="mcov"><img src="${R(b.c)}" alt="" onerror="this.parentElement.style.display='none'"></div>` : ''}
        <div style="flex:1;">
          <div class="mk">${kind}</div>
          <h2 class="mt">${b.t}</h2>
          <div class="mauth">${b.a}</div>
          ${b.s === 'reading' ? `<div class="mbar"><i style="width:${b.p}%"></i></div><div class="mpct">${b.p}% through</div>` : ''}
        </div>
      </div>
      <div class="mnote">&ldquo;${b.n}&rdquo;</div>
      <div class="mfoot"><button class="btn primary" data-close>Close</button></div>
    </div>`;
  bg.addEventListener('click', (e) => { if (e.target === bg || e.target.closest('[data-close]')) bg.remove(); });
  document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { bg.remove(); document.removeEventListener('keydown', esc); } });
  document.body.appendChild(bg);
}

/* ---------- CONTACT (folder gallery) ---------- */
function renderContact(c) {
  const L = window.LINKS;
  const otherItems = [
    { k: 'substack', v: 'incosmicdust', href: L.substack, c1: '#EAE4D8', c2: '#C4B495', ico: ICON.substack },
    { k: 'github', v: 'jacqlinegeng', href: L.github, c1: '#DBD7E8', c2: '#B3AECB', ico: ICON.github },
    { k: 'linkedin', v: 'jacqlinegeng', href: L.linkedin, c1: '#D6DEEB', c2: '#A4B7D1', ico: ICON.linkedin },
    { k: 'x / twitter', v: 'inthecosmicdust', href: L.x, c1: '#E5E2E8', c2: '#BAB6C2', ico: ICON.x },
    { k: 'spotify', v: 'on rotation', href: L.spotify, c1: '#DCE5DF', c2: '#A9C2B0', ico: ICON.spotify }
  ];
  const folderEl = (it) => `
    <a class="fol" href="${it.href || '#'}" ${it.href ? 'target="_blank"' : ''} ${it.act ? `data-act="${it.act}"` : ''} style="--f1:${it.c1};--f2:${it.c2}">
      <span class="folder">
        <span class="f-back"><span class="f-tab"></span></span>
        <span class="f-paper p1"></span>
        <span class="f-paper p2"></span>
        <span class="f-front"><span class="f-ico">${it.ico}</span></span>
      </span>
      <span class="f-name">${it.k}</span>
      <span class="f-sub">${it.v}</span>
    </a>`;

  const emailFolder = { k: 'email', v: 'open to read', act: 'email', c1: '#C9CFF0', c2: '#8FA4E3', ico: ICON.mail };

  c.innerHTML = `
    <div class="page">
      <div class="page-eyebrow">say hi</div>
      <h1 class="page-title">Let&rsquo;s talk</h1>
      <p class="page-sub">The fastest way to reach me is email. Otherwise, I&rsquo;m filed away in the usual places. Hover a folder to peek inside, click to open.</p>
      <div class="folder-grid">
        ${[emailFolder, ...otherItems].map(folderEl).join('')}
      </div>
    </div>`;

  // email folder opens a popup
  const emailFol = c.querySelector('[data-act="email"]');
  if (emailFol) emailFol.addEventListener('click', (e) => { e.preventDefault(); openEmailModal(); });
}

function openEmailModal() {
  const L = window.LINKS;
  const gmail = (addr) => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(addr)}&su=${encodeURIComponent('Hello Jacq')}`;
  const bg = document.createElement('div');
  bg.className = 'modal-bg';
  const row = (addr) => `
    <div class="em-row">
      <span class="em-ico">${ICON.mail}</span>
      <span class="em-addr">${addr}</span>
      <button class="em-copy" data-copy="${addr}">Copy</button>
    </div>`;
  bg.innerHTML = `
    <div class="modal email-modal">
      <div class="em-body">
        <div class="page-eyebrow">contact</div>
        <h2 class="em-title">Say hi.</h2>
        <p class="em-desc">The fastest way to reach me is email. Open in Gmail, or copy the address and drop me a line whenever.</p>
        ${row(L.email)}
      </div>
      <div class="em-foot">
        <button class="btn" data-close>Close</button>
        <a class="btn primary" href="${gmail(L.email)}" target="_blank">Open in Gmail</a>
      </div>
    </div>`;
  bg.addEventListener('click', (e) => { if (e.target === bg || e.target.closest('[data-close]')) bg.remove(); });
  bg.querySelectorAll('.em-copy').forEach(b => b.addEventListener('click', (e) => {
    e.preventDefault(); e.stopPropagation();
    copyText(b.dataset.copy);
    const old = b.textContent; b.textContent = 'Copied ✓';
    setTimeout(() => { b.textContent = old; }, 1500);
  }));
  document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { bg.remove(); document.removeEventListener('keydown', esc); } });
  document.body.appendChild(bg);
}
