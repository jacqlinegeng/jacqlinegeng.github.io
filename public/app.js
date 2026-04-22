/* Portfolio desktop app */
(function () {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  // Global dash-killer: strip em/en dashes that may sneak into any text node
  const DASH_RE = /[—–]/g;
  function clean(s) { return String(s == null ? '' : s).replace(DASH_RE, ','); }

  // ---------- Icons ----------
  const ICON = {
    folder: '<svg viewBox="0 0 28 28" fill="none"><path d="M3 8.5C3 7.67 3.67 7 4.5 7H11l2 2h10.5c.83 0 1.5.67 1.5 1.5V20.5c0 .83,.67 1.5,1.5 1.5,1.5h-19A1.5 1.5 0 0 1 3 20.5V8.5Z" fill="currentColor" opacity=".92"/></svg>',
    folderSimple: '<svg viewBox="0 0 28 28" fill="none"><path d="M3 8.5C3 7.67 3.67 7 4.5 7H11l2 2h10.5c.83 0 1.5.67 1.5 1.5V20.5c0 .83-.67 1.5-1.5 1.5h-19A1.5 1.5 0 0 1 3 20.5V8.5Z" fill="currentColor" opacity=".92"/></svg>',
    note: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="6" y="4" width="16" height="20" rx="1.5" fill="white" opacity=".9"/><path d="M9 10h10M9 14h10M9 18h6"/></svg>',
    book: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M5 5h8v18H6a1 1 0 0 1-1-1V5ZM15 5h7a1 1 0 0 1 1 1v17h-8V5Z" fill="white" opacity=".9"/></svg>',
    person: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="14" cy="10" r="4" fill="white" opacity=".9"/><path d="M5 23c1.5-4 5-6 9-6s7.5 2 9 6" fill="white" opacity=".9"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m3 11 9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v4H4V4Zm0 6h4v10H4V10Zm6 0h4v1.7c.6-.9 1.8-2 3.8-2 3.2 0 4.2 2.1 4.2 4.8V20h-4v-4.9c0-1.2-.4-2.1-1.5-2.1s-1.7.8-2 1.6c-.1.3-.1.7-.1 1V20h-4V10Z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 3H21l-6.6 7.6L22 21h-6.3l-4.8-6.3L5.4 21H2.6l7-8.1L2 3h6.4l4.4 5.8L18.2 3Zm-2.2 16h1.7L7.1 5H5.3l10.7 14Z"/></svg>',
    music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M7 10c3 -1 7 -1 10 1M7.5 13c2.5 -0.8 5.5 -0.5 8 1M8 16c2 -0.6 4 -0.4 6 0.7"/></svg>',
    search: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="7" cy="7" r="4.5"/><path d="m14 14-3.5-3.5"/></svg>',
    genesis: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16"/></svg>',
    copy: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="4" y="4" width="9" height="9" rx="1.5"/><path d="M11 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1"/></svg>'
  };

  // ---------- Apps ----------
  const APPS = {
    about:    { title: "About Jacqline", name: "About", icon: ICON.person, render: renderAbout,    size: { w: 980, h: 620 } },
    projects: { title: "Projects",           name: "Projects", icon: ICON.folderSimple, render: renderProjects, size: { w: 940, h: 620 } },
    writing:  { title: "Notes, Writing",     name: "Writing",  icon: ICON.note,         render: renderWriting,  size: { w: 980, h: 620 } },
    reading:  { title: "Reading list",       name: "Reading",  icon: ICON.book,         render: renderReading,  size: { w: 920, h: 620 } },
    genesis:  { title: "Genesis Labs",       name: "Genesis",  icon: ICON.genesis,      render: renderGenesis,  size: { w: 740, h: 540 } }
  };

  const openWindows = {}; // id -> { el }
  const minimized = {};   // id -> true
  let zTop = 100;
  const state = { active: null };

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    applyTweaks();
    renderDesktopIcons();
    renderDock();
    wireMenubar();
    wireTweaks();
    wireGlobal();
    startTypewriter();
    tickClock();
    setInterval(tickClock, 15000);
  }

  function tickClock() {
    const d = new Date();
    const day = d.toLocaleDateString('en-US', { weekday: 'short' });
    const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    const el = $('#mb-clock'); if (el) el.textContent = `${day} ${time}`;
  }

  // ---------- Typewriter hero ----------
  function startTypewriter() {
    const el = $('#type'); if (!el) return;
    const phrase = "hi, i'm Jacqline";
    let ci = 0;
    function tick() {
      ci++;
      el.textContent = phrase.slice(0, ci);
      if (ci < phrase.length) setTimeout(tick, 95);
    }
    tick();
  }

  // ---------- Tweaks ----------
  function applyTweaks() {
    document.body.classList.toggle('dark', TWEAKS.theme === 'dark');
    const h = TWEAKS.accent;
    document.documentElement.style.setProperty('--accent', `oklch(0.62 0.13 ${h})`);
    document.documentElement.style.setProperty('--accent-soft', `oklch(0.62 0.13 ${h} / 0.14)`);
    $('#desktop-icons').style.display = TWEAKS.icons === 'off' ? 'none' : 'grid';
    $$('.tw-seg').forEach(seg => {
      const key = seg.dataset.tw;
      seg.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === TWEAKS[key]));
    });
    $$('.tw-swatch').forEach(sw => {
      const key = sw.dataset.tw;
      sw.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === TWEAKS[key]));
    });
  }

  function wireTweaks() {
    $$('[data-tw]').forEach(seg => {
      const key = seg.dataset.tw;
      seg.addEventListener('click', e => {
        const btn = e.target.closest('button'); if (!btn) return;
        TWEAKS[key] = btn.dataset.v;
        applyTweaks();
        Object.keys(openWindows).forEach(id => reRenderApp(id));
        try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: TWEAKS }, '*'); } catch (e) {}
      });
    });
    $('#tw-close').addEventListener('click', () => toggleTweaks(false));
  }

  function toggleTweaks(on) {
    const panel = $('#tweaks');
    if (on === undefined) panel.classList.toggle('open');
    else panel.classList.toggle('open', on);
  }

  window.addEventListener('message', (e) => {
    const d = e.data || {};
    if (d.type === '__activate_edit_mode') toggleTweaks(true);
    if (d.type === '__deactivate_edit_mode') toggleTweaks(false);
  });
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}

  // ---------- Desktop icons ----------
  function renderDesktopIcons() {
    const root = $('#desktop-icons');
    const items = [
      { id: 'projects', kind: 'folder' },
      { id: 'writing',  kind: 'folder' },
      { id: 'reading',  kind: 'folder' },
      { id: 'about',    kind: 'file' },
      { id: 'genesis',  kind: 'file' }
    ];
    root.innerHTML = items.map(it => `
      <div class="d-icon" data-app="${it.id}">
        <div class="glyph ${it.kind === 'folder' ? 'folder' : ''}">${it.kind === 'folder' ? ICON.folderSimple : APPS[it.id].icon}</div>
        <div class="label">${APPS[it.id].name}</div>
      </div>`).join('');
    root.addEventListener('click', e => {
      const ic = e.target.closest('.d-icon'); if (!ic) return;
      $$('.d-icon').forEach(x => x.classList.remove('selected'));
      ic.classList.add('selected');
    });
    root.addEventListener('dblclick', e => {
      const ic = e.target.closest('.d-icon'); if (!ic) return;
      openApp(ic.dataset.app);
    });
    // double-tap detection
    root.querySelectorAll('.d-icon').forEach(ic => {
      let t = 0;
      ic.addEventListener('click', () => {
        const now = Date.now();
        if (now - t < 400) openApp(ic.dataset.app);
        t = now;
      });
    });
  }

  // ---------- Dock ----------
  function renderDock() {
    const items = [
      { id: 'home',     icon: ICON.home,     label: 'Desktop',     action: () => closeAll() },
      { id: 'about',    icon: ICON.person,   label: 'About',       action: () => openApp('about') },
      { id: 'projects', icon: ICON.folderSimple, label: 'Projects', action: () => openApp('projects') },
      { id: 'writing',  icon: ICON.note,     label: 'Writing',     action: () => openApp('writing') },
      { id: 'reading',  icon: ICON.book,     label: 'Reading',     action: () => openApp('reading') },
      { sep: true },
      { id: 'genesis',  icon: ICON.genesis,  label: 'Genesis Labs', action: () => openApp('genesis'), cls: 'genesis' },
      { sep: true },
      { id: 'mail',     icon: ICON.mail,     label: 'Contact',     action: openMailModal }
    ];
    const dock = $('#dock');
    dock.innerHTML = items.map(it => it.sep ? '<div class="dock-sep"></div>' :
      `<div class="dock-item ${it.cls || ''}" data-dock="${it.id}"><span class="tip">${it.label}</span>${it.icon}</div>`
    ).join('');
    dock.addEventListener('click', e => {
      const d = e.target.closest('.dock-item'); if (!d) return;
      const item = items.find(i => i.id === d.dataset.dock);
      item && item.action();
    });
    refreshDockDots();
  }

  function refreshDockDots() {
    $$('.dock-item').forEach(el => {
      const id = el.dataset.dock;
      const has = el.querySelector('.dot');
      const on = openWindows[id] && !minimized[id];
      if (on && !has) { const dot = document.createElement('span'); dot.className = 'dot'; el.appendChild(dot); }
      else if (!on && has) has.remove();
    });
  }

  function refreshMinTray() {
    const tray = $('#min-tray');
    const ids = Object.keys(minimized);
    tray.classList.toggle('has', ids.length > 0);
    tray.innerHTML = ids.map(id => `<div class="min-item" data-min="${id}" title="${APPS[id].name}">${APPS[id].icon}</div>`).join('');
    tray.onclick = (e) => {
      const m = e.target.closest('[data-min]'); if (!m) return;
      const id = m.dataset.min;
      delete minimized[id];
      const w = openWindows[id]; if (w) { w.el.style.display = ''; focusWindow(id); }
      refreshMinTray(); refreshDockDots();
    };
  }

  // ---------- Windows ----------
  function openApp(id) {
    if (openWindows[id]) {
      if (minimized[id]) {
        delete minimized[id];
        openWindows[id].el.style.display = '';
        refreshMinTray();
      }
      focusWindow(id);
      return;
    }
    const app = APPS[id]; if (!app) return;
    const wEl = document.createElement('div');
    wEl.className = 'window';
    const { w, h } = app.size;
    const count = Object.keys(openWindows).length;
    wEl.style.left = (90 + count * 28) + 'px';
    wEl.style.top  = (56 + count * 22) + 'px';
    wEl.style.width = w + 'px';
    wEl.style.height = h + 'px';
    wEl.dataset.app = id;
    wEl.innerHTML = `
      <div class="titlebar">
        <div class="tl-lights">
          <div class="tl close" title="Close"><svg viewBox="0 0 8 8"><path d="M1 1l6 6M7 1l-6 6" stroke="black" stroke-width="1.2"/></svg></div>
          <div class="tl min" title="Minimize"><svg viewBox="0 0 8 8"><path d="M1 4h6" stroke="black" stroke-width="1.2"/></svg></div>
          <div class="tl max" title="Zoom"><svg viewBox="0 0 8 8"><path d="M1 4h6M4 1v6" stroke="black" stroke-width="1.2"/></svg></div>
        </div>
        <div class="tl-title">${clean(app.title)}</div>
        <div class="tl-actions"></div>
      </div>
      <div class="win-body" data-body></div>
    `;
    $('#windows').appendChild(wEl);
    app.render(wEl.querySelector('[data-body]'), wEl);

    // Drag
    const tb = wEl.querySelector('.titlebar');
    let drag = null;
    tb.addEventListener('mousedown', (e) => {
      if (e.target.closest('.tl')) return;
      focusWindow(id);
      const rect = wEl.getBoundingClientRect();
      drag = { ox: e.clientX - rect.left, oy: e.clientY - rect.top };
      e.preventDefault();
    });
    window.addEventListener('mousemove', (e) => {
      if (!drag) return;
      wEl.style.left = Math.max(0, e.clientX - drag.ox) + 'px';
      wEl.style.top  = Math.max(26, e.clientY - drag.oy) + 'px';
    });
    window.addEventListener('mouseup', () => { drag = null; });

    // Lights, with proper closing
    wEl.querySelector('.tl.close').addEventListener('click', (e) => { e.stopPropagation(); closeApp(id); });
    wEl.querySelector('.tl.min').addEventListener('click', (e) => {
      e.stopPropagation();
      wEl.classList.add('minimizing');
      setTimeout(() => {
        wEl.style.display = 'none';
        wEl.classList.remove('minimizing');
        minimized[id] = true;
        refreshMinTray();
        refreshDockDots();
      }, 200);
    });
    wEl.querySelector('.tl.max').addEventListener('click', (e) => { e.stopPropagation(); toggleMax(wEl); });

    wEl.addEventListener('mousedown', () => focusWindow(id));

    openWindows[id] = { el: wEl };
    focusWindow(id);
    refreshDockDots();
    const appLabel = $('[data-app]'); if (appLabel) appLabel.textContent = app.name;
    state.active = id;
  }

  function focusWindow(id) {
    const w = openWindows[id]; if (!w) return;
    if (w.el.style.display === 'none') { w.el.style.display = ''; delete minimized[id]; refreshMinTray(); }
    zTop += 1;
    w.el.style.zIndex = zTop;
    const appLabel = $('[data-app]'); if (appLabel) appLabel.textContent = APPS[id].name;
    state.active = id;
    refreshDockDots();
  }

  function closeApp(id) {
    const w = openWindows[id]; if (!w) return;
    w.el.remove();
    delete openWindows[id];
    delete minimized[id];
    refreshDockDots();
    refreshMinTray();
    const next = Object.keys(openWindows).pop();
    const appLabel = $('[data-app]');
    if (appLabel) appLabel.textContent = next ? APPS[next].name : 'Jacqline Geng';
    state.active = next || null;
  }

  function closeAll() {
    Object.keys(openWindows).forEach(id => {
      openWindows[id].el.style.display = 'none';
      minimized[id] = true;
    });
    refreshMinTray(); refreshDockDots();
  }

  function toggleMax(wEl) {
    if (wEl.dataset.max === '1') {
      wEl.dataset.max = '';
      const p = JSON.parse(wEl.dataset.prev || '{}');
      Object.assign(wEl.style, p);
    } else {
      wEl.dataset.prev = JSON.stringify({ left: wEl.style.left, top: wEl.style.top, width: wEl.style.width, height: wEl.style.height });
      wEl.dataset.max = '1';
      wEl.style.left = '0'; wEl.style.top = '26px'; wEl.style.width = '100vw'; wEl.style.height = 'calc(100vh - 26px)';
    }
  }

  function reRenderApp(id) {
    const w = openWindows[id]; if (!w) return;
    const body = w.el.querySelector('[data-body]');
    body.innerHTML = '';
    APPS[id].render(body, w.el);
  }

  // ---------- Renderers ----------
  function renderAbout(body) {
    const exp = window.EXPERIENCE;
    body.innerHTML = `
      <div class="content" style="flex:1;">
        <div class="about-grid">
          <div>
            <div class="genesis-pill"><span class="dot"></span>Founder, Genesis Labs</div>
            <div class="hero-eyebrow">Jacqline Geng · Toronto / New York</div>
            <h1 class="about-title">Finance, tech,<br>and <em>creativity</em>,<br>in that order.</h1>
            <p class="about-sub">I'm a consultant by day and a builder by night. I make tools at the intersection of AI, financial systems, and attention, currently through <a href="#" data-open="genesis">Genesis Labs</a>, an experimental studio I founded in 2025.</p>
            <p class="about-sub">Currently reading Feynman. Writing on <a href="https://incosmicdust.substack.com/" target="_blank">Substack</a>. Shipping Genesis.</p>
          </div>
          <div class="about-photo">
            <img src="portfolio_pic.png" alt="Jacqline Geng" onerror="this.parentElement.innerHTML='<div style=&quot;width:100%;height:100%;display:grid;place-items:center;font-family:var(--serif);font-size:120px;font-style:italic;color:var(--ink-3);&quot;>J</div>'"/>
          </div>
        </div>

        <div class="exp-section">
          <div class="exp-hd">
            <span class="kicker">Experience</span>
            <span class="hd">A working life, so far</span>
            <span class="rule"></span>
          </div>
          ${exp.map(x => `
            <div class="exp-row">
              <div class="period">${clean(x.period)}</div>
              <div>
                <div class="role">${x.highlight ? `<em>${clean(x.role)}</em>` : clean(x.role)}</div>
                <div class="org">${clean(x.org)}</div>
                <div class="note">${clean(x.note)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>`;
    body.addEventListener('click', e => {
      const o = e.target.closest('[data-open]');
      if (o) { e.preventDefault(); openApp(o.dataset.open); }
    });
  }

  function renderProjects(body) {
    const list = window.PROJECTS;
    const layout = TWEAKS.layout;
    body.innerHTML = `
      <div class="content">
        <div class="section-hd">
          <span class="kicker">01 / Work</span>
          <span class="hd">Projects &amp; experiments</span>
          <span class="rule"></span>
          <span style="font-family: var(--mono); font-size: 11px; color: var(--ink-3);">${list.length} items</span>
        </div>
        ${layout === 'grid' ? renderGallery(list) : renderList(list)}
      </div>`;
    body.addEventListener('click', e => {
      const row = e.target.closest('[data-project]'); if (!row) return;
      const p = list.find(x => x.id === row.dataset.project); if (!p) return;
      if (p.id === 'genesis') { openApp('genesis'); return; }
      if (p.link) window.open(p.link, '_blank');
    });
  }

  function renderList(list) {
    return `<div class="projects-grid">${list.map((p, i) => `
      <div class="list-row" data-project="${p.id}">
        <div class="row-idx">${String(i + 1).padStart(2,'0')}</div>
        <div>
          <h3 class="row-title">${clean(p.title)}${p.featured ? ' <span style="font-family:var(--mono);font-size:10px;color:var(--accent);vertical-align:middle;margin-left:8px;padding:3px 7px;border:0.5px solid var(--accent); border-radius:3px;letter-spacing:.08em;">FOUNDER</span>' : ''}</h3>
          <div class="row-desc">${clean(p.desc)}</div>
        </div>
        <div class="row-tech">${p.tech.map(t => `<span>${clean(t)}</span>`).join('')}</div>
        <div class="row-year">${p.year}<br><span style="color:var(--ink-2);text-transform:uppercase;letter-spacing:.06em;font-size:10px;">${clean(p.tag)}</span></div>
      </div>`).join('')}</div>`;
  }

  function renderGallery(list) {
    return `<div class="gallery">${list.map(p => `
      <div class="gal-card" data-project="${p.id}">
        <div class="gal-thumb">
          <div class="big-letter">${p.letter}</div>
          <div class="tag">${clean(p.tag)}</div>
        </div>
        <div class="gal-body">
          <h3 class="gal-title">${clean(p.title)}</h3>
          <p class="gal-desc">${clean(p.desc)}</p>
          <div class="gal-meta"><span>${p.year}</span><span>/</span><span>${p.tech.slice(0,3).join(' / ')}</span></div>
        </div>
      </div>`).join('')}</div>`;
  }

  function renderWriting(body) {
    const notes = window.NOTES;
    body.innerHTML = `
      <div class="notes-pane">
        <div class="notes-list">
          <div class="nl-head">All notes · ${notes.length}</div>
          ${notes.map((n,i) => `
            <div class="nl-item ${i===0?'active':''}" data-note="${n.id}">
              <div class="nl-title">${clean(n.title)}</div>
              <div class="nl-date">${n.date} · ${n.kind}</div>
              <div class="nl-preview">${clean(n.preview)}</div>
            </div>`).join('')}
          <div style="padding: 14px 16px; font-size: 12px; color: var(--ink-3); border-top: 0.5px solid var(--line-2);">
            More essays at <a href="https://incosmicdust.substack.com/" target="_blank" style="color:var(--accent); text-decoration: none; border-bottom: 1px solid var(--accent);">incosmicdust.substack.com</a>
          </div>
        </div>
        <div class="notes-reader" data-reader></div>
      </div>`;
    const show = (id) => {
      const n = notes.find(x => x.id === id);
      const r = body.querySelector('[data-reader]');
      r.innerHTML = `
        <div class="reader-meta"><span>${n.date}</span><span>·</span><span>${n.kind}</span><span>·</span><span>5 min read</span></div>
        <h1 class="reader-title">${clean(n.title)}</h1>
        <div class="reader-body">
          ${n.body.map(b => typeof b === 'string' ? `<p>${clean(b)}</p>` : `<blockquote>${clean(b.quote)}</blockquote>`).join('')}
        </div>
        <div class="reader-footer">
          <span>Jacqline G.</span>
          <a href="https://incosmicdust.substack.com/" target="_blank">Read more on Substack</a>
        </div>`;
      r.scrollTop = 0;
      body.querySelectorAll('.nl-item').forEach(el => el.classList.toggle('active', el.dataset.note === id));
    };
    body.addEventListener('click', e => {
      const it = e.target.closest('[data-note]'); if (!it) return;
      show(it.dataset.note);
    });
    show(notes[0].id);
  }

  function renderReading(body) {
    const books = window.BOOKS;
    const reading = books.filter(b => b.s === 'reading');
    const want = books.filter(b => b.s === 'want');
    const done = books.filter(b => b.s === 'done');
    const shelfHTML = (items) => items.map(b => `
      <div class="book" data-book="${encodeURIComponent(b.t)}">
        <div class="cover">
          <img src="${b.c}" alt="" onerror="this.style.display='none'"/>
          ${b.s === 'reading' ? `<div class="progress" style="width:${b.p}%"></div>` : ''}
          ${b.s === 'done' ? `<div class="check"><svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 5l2 2 4-4"/></svg></div>` : ''}
        </div>
        <div class="title">${clean(b.t)}</div>
        <div class="author">${clean(b.a)}</div>
      </div>`).join('');
    body.innerHTML = `
      <div class="content">
        <div class="reading-body">
          <div class="shelf-head">
            <div>
              <div class="ctr">02 / Reading</div>
              <h2>What I'm reading</h2>
            </div>
            <div class="ctr">${books.length} books · ${reading.length} active · ${done.length} completed</div>
          </div>

          <div class="scroll-hint">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M10 4l4 4-4 4"/></svg>
            Scroll horizontally
          </div>
          <div class="section-hd" style="padding: 0 0 10px;">
            <span class="kicker">Currently</span>
            <span class="rule"></span>
          </div>
          <div class="shelf-wrap">
            <div class="shelf">${shelfHTML(reading)}</div>
          </div>

          <div class="section-hd" style="padding: 6px 0 10px;">
            <span class="kicker">Completed</span>
            <span class="rule"></span>
          </div>
          <div class="booklist">
            <div class="booklist-head"><span>Title</span><span>Author</span><span>Progress</span><span>Finished</span></div>
            ${done.map(b => `
              <div class="br" data-book="${encodeURIComponent(b.t)}">
                <span class="bt">${clean(b.t)}</span>
                <span class="ba">${clean(b.a)}</span>
                <span class="bstat done">Done</span>
                <span class="bstat">${b.done || ''}</span>
              </div>`).join('')}
          </div>

          ${want.length ? `
            <div class="section-hd" style="padding: 24px 0 10px;">
              <span class="kicker">Want to read</span>
              <span class="rule"></span>
            </div>
            <div class="booklist">
              ${want.map(b => `
                <div class="br" data-book="${encodeURIComponent(b.t)}">
                  <span class="bt">${clean(b.t)}</span>
                  <span class="ba">${clean(b.a)}</span>
                  <span class="bstat">,</span>
                  <span class="bstat">queued</span>
                </div>`).join('')}
            </div>` : ''}
        </div>
      </div>`;
    body.addEventListener('click', e => {
      const b = e.target.closest('[data-book]'); if (!b) return;
      const title = decodeURIComponent(b.dataset.book);
      const book = books.find(x => x.t === title); if (!book) return;
      openBookModal(book);
    });
  }

  function openBookModal(b) {
    const bg = document.createElement('div');
    bg.className = 'modal-bg';
    bg.innerHTML = `
      <div class="modal" onclick="event.stopPropagation()">
        <div style="padding: 28px 30px 10px; display:flex; gap: 22px;">
          <div style="flex: 0 0 120px;">
            <div style="width:120px;height:175px;border-radius:3px;overflow:hidden;box-shadow:2px 3px 12px rgba(0,0,0,.2);">
              <img src="${b.c}" style="width:100%;height:100%;object-fit:cover;"/>
            </div>
          </div>
          <div style="flex:1;">
            <div style="font-family: var(--mono); font-size: 10.5px; text-transform: uppercase; letter-spacing: .08em; color: var(--ink-3); margin-bottom: 6px;">
              ${b.s === 'reading' ? 'Currently reading' : b.s === 'done' ? 'Completed · ' + (b.done || '') : 'Want to read'}
            </div>
            <h2 style="font-family: var(--serif); font-size: 32px; margin: 0 0 6px; letter-spacing: -0.01em; font-weight: 400;">${clean(b.t)}</h2>
            <div style="font-family: var(--serif); font-style: italic; font-size: 16px; color: var(--ink-2); margin-bottom: 18px;">${clean(b.a)}</div>
            ${b.s === 'reading' ? `
              <div style="margin-bottom: 18px;">
                <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--ink-3); margin-bottom:6px;">
                  <span style="font-family: var(--mono); text-transform: uppercase; letter-spacing: .06em;">Progress</span>
                  <span style="font-family: var(--mono);">${b.p}%</span>
                </div>
                <div style="height:3px; background: var(--line); border-radius: 2px; overflow: hidden;">
                  <div style="height:100%; background: var(--accent); width: ${b.p}%;"></div>
                </div>
              </div>` : ''}
            <div style="font-family: var(--serif); font-style: italic; font-size: 17px; line-height: 1.5; color: var(--ink-2); padding-left: 14px; border-left: 2px solid var(--accent);">"${clean(b.n)}"</div>
          </div>
        </div>
        <div style="padding: 20px 30px 26px; display: flex; justify-content: flex-end; border-top: 0.5px solid var(--line-2); margin-top: 18px;">
          <button class="btn primary" data-close-modal>Close</button>
        </div>
      </div>`;
    bg.addEventListener('click', e => {
      if (e.target === bg) bg.remove();
      if (e.target.closest('[data-close-modal]')) bg.remove();
    });
    document.body.appendChild(bg);
  }

  function renderGenesis(body) {
    body.innerHTML = `
      <div class="content" style="flex:1;">
        <div style="padding: 52px 56px 56px;">
          <div style="display:inline-flex; gap:10px; align-items:center; font-family:var(--mono); font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-3); margin-bottom: 22px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" style="width:16px;height:16px;"><circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16"/></svg>
            Genesis Labs, est. 2025
          </div>
          <h1 style="font-family: var(--serif); font-weight: 400; letter-spacing: -0.02em; font-size: 64px; line-height: 0.98; margin: 0 0 22px;">Intelligent<br>infrastructure<br>for <em style="color:var(--accent);">finance.</em></h1>
          <p style="font-size: 16px; color: var(--ink-2); line-height: 1.55; max-width: 560px; margin: 0 0 28px;">Genesis Labs is an experimental studio I founded in 2025, an AI workflow systems studio for financial institutions and fintech companies. We design and implement intelligent infrastructure across fintech, risk, and compliance.</p>
          <div style="display:flex; gap: 10px; margin-top: 8px;">
            <button class="btn primary" id="gen-contact">Get in touch</button>
            <a class="btn" href="https://genesis-ai-labs.vercel.app/" target="_blank">Visit site</a>
            <a class="btn" href="#" data-open="projects">See the work</a>
          </div>
          <div style="margin-top: 44px; padding-top: 20px; border-top: 0.5px solid var(--line); display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; font-size: 13px;">
            <div>
              <div style="font-family: var(--mono); font-size: 10.5px; color: var(--ink-3); text-transform: uppercase; letter-spacing: .08em; margin-bottom: 6px;">Focus</div>
              <div>Fintech, risk, and compliance workflows</div>
            </div>
            <div>
              <div style="font-family: var(--mono); font-size: 10.5px; color: var(--ink-3); text-transform: uppercase; letter-spacing: .08em; margin-bottom: 6px;">Stage</div>
              <div>Stealth · Pre-seed · Building v0</div>
            </div>
            <div>
              <div style="font-family: var(--mono); font-size: 10.5px; color: var(--ink-3); text-transform: uppercase; letter-spacing: .08em; margin-bottom: 6px;">Founder</div>
              <div>Jacqline Geng</div>
            </div>
          </div>
        </div>
      </div>`;
    body.addEventListener('click', e => {
      const o = e.target.closest('[data-open]');
      if (o) { e.preventDefault(); openApp(o.dataset.open); }
      if (e.target.closest('#gen-contact')) openMailModal();
    });
  }

  // ---------- Contact modal (gmail) ----------
  function openMailModal() {
    const bg = document.createElement('div');
    bg.className = 'modal-bg';
    bg.innerHTML = `
      <div class="modal" style="width: 480px;" onclick="event.stopPropagation()">
        <div style="padding: 36px 36px 10px;">
          <div style="font-family: var(--mono); font-size: 10.5px; text-transform: uppercase; letter-spacing: .08em; color: var(--ink-3); margin-bottom: 10px;">Contact</div>
          <h2 style="font-family: var(--serif); font-size: 36px; line-height: 1.05; letter-spacing: -0.015em; margin: 0 0 12px; font-weight: 400;">Say hi.</h2>
          <p style="font-size: 14px; color: var(--ink-2); line-height: 1.55; margin: 0 0 22px;">The fastest way to reach me is email. Open in Gmail, or copy the address and drop me a line whenever.</p>
          <div style="display: flex; align-items: center; gap: 10px; padding: 14px 16px; background: var(--bg-2); border: 0.5px solid var(--line); border-radius: 8px; margin-bottom: 20px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:18px;height:18px;color:var(--ink-2);"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            <span id="mail-addr" style="flex:1; font-family: var(--mono); font-size: 13.5px; color: var(--ink); letter-spacing: -0.01em;">${EMAIL}</span>
            <button class="btn" id="mail-copy" style="padding: 5px 10px; font-size: 11.5px;">Copy</button>
          </div>
        </div>
        <div style="padding: 0 36px 32px; display: flex; justify-content: space-between; align-items: center;">
          <a class="btn" data-close-modal>Close</a>
          <a class="btn primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent('Hello Jacq')}" target="_blank">Open in Gmail</a>
        </div>
      </div>`;
    bg.addEventListener('click', e => {
      if (e.target === bg) bg.remove();
      if (e.target.closest('[data-close-modal]')) bg.remove();
      if (e.target.closest('#mail-copy')) {
        navigator.clipboard?.writeText(EMAIL);
        const btn = bg.querySelector('#mail-copy');
        const old = btn.textContent; btn.textContent = 'Copied';
        setTimeout(() => btn.textContent = old, 1400);
      }
    });
    document.body.appendChild(bg);
  }

  // ---------- Menubar / Spotlight ----------
  function wireMenubar() {
    $('#mb-search').addEventListener('click', openSpotlight);
    $('#mb-genesis').addEventListener('click', () => openApp('genesis'));
    $('#hero-mail').addEventListener('click', (e) => { e.preventDefault(); openMailModal(); });
  }

  function openSpotlight() {
    if ($('.spotlight')) return;
    const el = document.createElement('div');
    el.className = 'spotlight';
    el.innerHTML = `
      <div class="sp-input">${ICON.search}<input type="text" placeholder="Search projects, notes, books..." autofocus></div>
      <div class="sp-results"></div>`;
    document.body.appendChild(el);
    const input = el.querySelector('input');
    const results = el.querySelector('.sp-results');
    const index = [
      ...window.PROJECTS.map(p => ({ t: p.title, sub: p.tag, kind: 'project', go: () => openApp('projects') })),
      ...window.NOTES.map(n => ({ t: n.title, sub: n.date, kind: 'note', go: () => openApp('writing') })),
      ...window.BOOKS.map(b => ({ t: b.t, sub: b.a, kind: 'book', go: () => openApp('reading') })),
      { t: 'Genesis Labs', sub: 'Founder', kind: 'studio', go: () => openApp('genesis') },
      { t: 'About', sub: 'jacqline geng', kind: 'page', go: () => openApp('about') },
      { t: 'Contact', sub: 'email me', kind: 'mail', go: () => openMailModal() },
      { t: 'Substack, In Cosmic Dust', sub: 'incosmicdust.substack.com', kind: 'link', go: () => window.open('https://incosmicdust.substack.com/', '_blank') }
    ];
    let sel = 0;
    const render = (q) => {
      const qq = q.toLowerCase();
      const matches = !q ? index.slice(0, 6) : index.filter(x => (x.t + ' ' + x.sub).toLowerCase().includes(qq)).slice(0, 8);
      results.innerHTML = matches.map((m, i) => `
        <div class="sp-item ${i === sel ? 'on' : ''}" data-i="${i}">
          <span>${clean(m.t)}${m.sub ? ` <span style="color:var(--ink-3); margin-left:8px;">${clean(m.sub)}</span>` : ''}</span>
          <span class="kind">${m.kind}</span>
        </div>`).join('') || '<div class="sp-item" style="color:var(--ink-3);">No matches</div>';
      results._matches = matches;
    };
    render('');
    input.addEventListener('input', () => { sel = 0; render(input.value); });
    input.addEventListener('keydown', (e) => {
      const ms = results._matches || [];
      if (e.key === 'Escape') { el.remove(); }
      else if (e.key === 'ArrowDown') { sel = Math.min(sel + 1, ms.length - 1); render(input.value); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { sel = Math.max(sel - 1, 0); render(input.value); e.preventDefault(); }
      else if (e.key === 'Enter') { ms[sel] && ms[sel].go(); el.remove(); }
    });
    results.addEventListener('click', (e) => {
      const it = e.target.closest('.sp-item'); if (!it) return;
      const ms = results._matches || []; const m = ms[+it.dataset.i]; if (!m) return;
      m.go(); el.remove();
    });
  }

  // ---------- Global ----------
  function wireGlobal() {
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSpotlight(); }
      if (e.key === 'Escape') {
        const sp = $('.spotlight'); if (sp) sp.remove();
        const md = $('.modal-bg'); if (md) md.remove();
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'w' && state.active) { e.preventDefault(); closeApp(state.active); }
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.d-icon')) $$('.d-icon').forEach(x => x.classList.remove('selected'));
    });
  }
})();
