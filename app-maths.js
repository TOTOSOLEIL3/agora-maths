/* ============================================================
   AGORA MATHS — moteur (adapté du moteur AGORA philo)
   Réutilise : XP/niveaux, records localStorage (préfixe agora_maths_),
   navigation par data-nav, écran de fin générique, RNG seedé.
   Nouveauté maths : rendu des formules avec KaTeX.
   ============================================================ */

const $ = sel => document.querySelector(sel);

/* ---------- utilitaires ---------- */
let rand = Math.random;
const mulberry32 = a => () => {
  a |= 0; a = (a + 0x6D2B79F5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const shuffle = arr => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const pick = (arr, n) => shuffle(arr).slice(0, n);

/* ---------- rendu des formules (KaTeX) ---------- */
function renderMath(el) {
  if (!el || !window.renderMathInElement) return;
  try {
    window.renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  } catch (e) { /* silencieux */ }
}

/* ---------- stockage (préfixe maths pour ne pas écraser la philo) ---------- */
const store = {
  get xp() { return Number(localStorage.getItem("agora_maths_xp") || 0); },
  set xp(v) { localStorage.setItem("agora_maths_xp", v); },
  best(game) { return localStorage.getItem("agora_maths_best_" + game); },
  setBest(game, v) { localStorage.setItem("agora_maths_best_" + game, v); }
};

function levelFor(xp) {
  let lvl = LEVELS[0];
  for (const l of LEVELS) if (xp >= l.xp) lvl = l;
  return lvl;
}

function refreshHud() {
  $("#hud-xp").textContent = store.xp;
  $("#hud-level").textContent = levelFor(store.xp).name;
}

function refreshBests() {
  document.querySelectorAll("[data-best]").forEach(el => {
    const g = el.dataset.best;
    const b = store.best(g);
    if (b === null) return;
    if (g === "flash") el.textContent = `Maîtrisées : ${b}/${FORMULES.length}`;
    else el.textContent = `Record : ${b}/10`;
  });
}

function gainXp(amount) {
  const before = levelFor(store.xp).name;
  store.xp = store.xp + amount;
  refreshHud();
  return levelFor(store.xp).name !== before;
}

function updateBest(game, value, lowerIsBetter = false) {
  const prev = store.best(game);
  const isRecord = prev === null || (lowerIsBetter ? value < Number(prev) : value > Number(prev));
  if (isRecord) store.setBest(game, value);
  return isRecord;
}

/* ---------- compteur de jours avant le bac ---------- */
function renderCountdown() {
  const el = $("#countdown");
  if (!el) return;
  const bac = new Date(BAC_DATE + "T08:00:00");
  const days = Math.ceil((bac - new Date()) / 86400000);
  el.textContent = days > 0 ? `J−${days} avant l'écrit de spé maths` : "C'est le jour J — courage 💪";
}

/* ============================================================
   PARTIE EN COURS (RNG seedé, comme AGORA — utile pour défis plus tard)
   ============================================================ */
let currentRun = null;
function beginRun(key) {
  currentRun = { game: key, seed: Math.floor(Math.random() * 2147483647) };
  rand = mulberry32(currentRun.seed);
}

/* ============================================================
   NAVIGATION
   ============================================================ */
const GAMES = {
  derivees: { title: "Trouve la dérivée", start: startDerivees },
  flash:    { title: "Flashcards de formules", start: startFlash },
  vf:       { title: "Vrai ou Faux", start: startVF },
  methodes: { title: "Quelle méthode ?", start: startMethodes }
};

function show(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  $("#" + viewId).classList.add("active");
  window.scrollTo({ top: 0 });
}

function nav(target) {
  if (target === "home") { refreshBests(); show("view-home"); return; }
  const game = GAMES[target];
  if (!game) return;
  $("#game-title").textContent = game.title;
  setMeta("", "");
  setProgress(0);
  show("view-game");
  game.start();
}

document.addEventListener("click", e => {
  const jump = e.target.closest("[data-jump]");
  if (jump) {
    refreshBests();
    show("view-home");
    requestAnimationFrame(() => document.getElementById(jump.dataset.jump)?.scrollIntoView({ behavior: "smooth" }));
    return;
  }
  const btn = e.target.closest("[data-nav]");
  if (!btn) return;
  const target = btn.dataset.nav;
  if (target.startsWith("fiche:")) openFiche(target.slice(6));
  else nav(target);
});

/* ============================================================
   HELPERS D'AFFICHAGE
   ============================================================ */
const stage = () => $("#game-stage");
function setMeta(counter, streak) { $("#game-counter").textContent = counter; $("#game-streak").textContent = streak; }
function setProgress(ratio) { $("#game-progress").style.width = Math.min(100, ratio * 100) + "%"; }

function optionButton(label, idx) {
  return `<button class="opt" data-idx="${idx}">
    <span class="key">${String.fromCharCode(65 + idx)}</span><span class="opt-body">${label}</span>
  </button>`;
}

function explainBlock(good, verdict, text) {
  return `<div class="explain">
    <span class="verdict ${good ? "good" : "bad"}">${verdict}</span>
    ${text}
  </div>`;
}

function mentionFor(score, total) {
  const r = score / total;
  if (r === 1) return ["20/20 — copie parfaite", "Le correcteur range son stylo rouge. Respect."];
  if (r >= 0.8) return ["Mention Très Bien", "Les dérivées n'ont plus aucun secret."];
  if (r >= 0.7) return ["Mention Bien", "Solide. Encore un effort sur les composées."];
  if (r >= 0.6) return ["Mention Assez Bien", "Les bases sont là, il reste à fiabiliser."];
  if (r >= 0.5) return ["Admis·e de justesse", "Ça passe — mais relis le formulaire avant juin."];
  return ["Rattrapage en vue", "Pas de panique : relis la fiche et rejoue. Ça rentre vite."];
}

function shareScore(text) {
  const url = location.origin + location.pathname;
  if (navigator.share) navigator.share({ title: "AGORA Maths", text, url }).catch(() => {});
  else { navigator.clipboard?.writeText(text + " " + url); toast("Score copié — colle-le à tes potes 📋"); }
}

function toast(msg) {
  let t = $("#toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2600);
}

function endScreen({ score, total, xp, bestLine, replay }) {
  const [mention, comment] = mentionFor(score, total);
  const lvlUp = gainXp(xp);
  stage().innerHTML = `
    <div class="endscreen">
      <span class="xp-gain">+${xp} XP${lvlUp ? " · NIVEAU SUPÉRIEUR : " + levelFor(store.xp).name + " !" : ""}</span>
      <div class="big-score">${score}/${total}</div>
      <div class="mention">${mention}</div>
      <p class="comment">${comment}</p>
      ${bestLine ? `<p class="mono" style="margin-bottom:1.4rem">${bestLine}</p>` : ""}
      <div class="actions">
        <button class="btn primary" id="btn-replay">Rejouer</button>
        <button class="btn" id="btn-share">Partager 📤</button>
        <button class="btn" data-nav="fiche:derivation">Relire la fiche</button>
        <button class="btn" data-nav="home">Retour à l'arène</button>
      </div>
    </div>`;
  $("#btn-replay").addEventListener("click", replay);
  $("#btn-share").addEventListener("click", () =>
    shareScore(`🧮 ${score}/${total} en révision de dérivation sur AGORA Maths. Tu fais mieux ?`));
}

/* ============================================================
   JEU 01 · TROUVE LA DÉRIVÉE
   ============================================================ */
function startDerivees() {
  beginRun("derivees");
  const rounds = pick(DERIVEES, Math.min(10, DERIVEES.length));
  let i = 0, score = 0, streak = 0, maxStreak = 0;

  function round() {
    const cur = rounds[i];
    const order = shuffle(cur.opts.map((o, k) => ({ o, k })));
    const okPos = order.findIndex(x => x.k === cur.ok);
    setMeta(`${i + 1} / ${rounds.length}`, streak > 1 ? `🔥 série ×${streak}` : "");
    setProgress(i / rounds.length);
    stage().innerHTML = `
      <div class="q-card">
        <div class="label">Calcule la dérivée de</div>
        <div class="question">$${cur.q}$</div>
      </div>
      <div class="options">${order.map((x, idx) => optionButton(x.o, idx)).join("")}</div>
      <div id="feedback"></div>
      <div class="next-zone" id="next-zone"></div>`;
    renderMath(stage());

    document.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
      const good = Number(btn.dataset.idx) === okPos;
      document.querySelectorAll(".opt").forEach((b, idx) => {
        b.disabled = true;
        if (idx === okPos) b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
        else b.classList.add("dimmed");
      });
      if (good) { score++; streak++; maxStreak = Math.max(maxStreak, streak); }
      else streak = 0;
      $("#feedback").innerHTML = explainBlock(good, good ? "Exact !" : "Raté", cur.why);
      $("#next-zone").innerHTML = `<button class="btn primary" id="btn-next">${i + 1 < rounds.length ? "Suivant →" : "Voir le verdict"}</button>`;
      renderMath($("#feedback"));
      $("#btn-next").addEventListener("click", () => { i++; i < rounds.length ? round() : finish(); });
    }));
  }

  function finish() {
    setProgress(1);
    const isRecord = updateBest("derivees", score);
    endScreen({
      score, total: rounds.length,
      xp: score * 10 + maxStreak * 5,
      bestLine: isRecord ? "★ Nouveau record !" : `Record : ${store.best("derivees")}/${rounds.length}`,
      replay: startDerivees
    });
  }
  round();
}

/* ============================================================
   JEU 02 · FLASHCARDS DE FORMULES
   ============================================================ */
function startFlash() {
  beginRun("flash");
  const cards = shuffle(FORMULES);
  let i = 0, known = 0;

  function round() {
    const c = cards[i];
    setMeta(`${i + 1} / ${cards.length}`, known ? `✓ ${known} sues` : "");
    setProgress(i / cards.length);
    stage().innerHTML = `
      <div class="flash-scene">
        <div class="flash-card" id="flash">
          <div class="flash-face front">
            <span class="hint">La formule…</span>
            <span class="term">${c.front}</span>
            <span class="hint">tape pour retourner ↺</span>
          </div>
          <div class="flash-face back">
            <span class="hint">Réponse</span>
            <div class="flash-answer">${c.back}</div>
          </div>
        </div>
      </div>
      <div class="flash-grade" id="grade" style="display:none">
        <button class="btn danger" id="g-no">À revoir 🔁</button>
        <button class="btn primary" id="g-yes">Je la savais ✓</button>
      </div>
      <p class="mono flash-tip" id="flash-tip" style="text-align:center;opacity:.7">Touche la carte pour voir la réponse</p>`;
    renderMath(stage());

    const card = $("#flash");
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
      const flipped = card.classList.contains("flipped");
      $("#grade").style.display = flipped ? "grid" : "none";
      $("#flash-tip").style.display = flipped ? "none" : "block";
    });
    $("#g-yes").addEventListener("click", () => { known++; advance(); });
    $("#g-no").addEventListener("click", advance);
  }

  function advance() { i++; i < cards.length ? round() : finish(); }

  function finish() {
    setProgress(1);
    updateBest("flash", known);
    endScreen({
      score: known, total: cards.length,
      xp: known * 8,
      bestLine: `Formules sues d'affilée : ${known}/${cards.length}`,
      replay: startFlash
    });
  }
  round();
}

/* ============================================================
   JEU 03 · VRAI / FAUX
   ============================================================ */
function startVF() {
  beginRun("vf");
  const rounds = pick(VRAIFAUX, Math.min(10, VRAIFAUX.length));
  let i = 0, score = 0, streak = 0, maxStreak = 0;

  function round() {
    const cur = rounds[i];
    setMeta(`${i + 1} / ${rounds.length}`, streak > 1 ? `🔥 série ×${streak}` : "");
    setProgress(i / rounds.length);
    stage().innerHTML = `
      <div class="q-card">
        <div class="label">Vrai ou faux ?</div>
        <div class="question">${cur.q}</div>
      </div>
      <div class="options vf-buttons">
        <button class="opt" data-v="true"><span class="key">V</span><span>Vrai</span></button>
        <button class="opt" data-v="false"><span class="key">F</span><span>Faux</span></button>
      </div>
      <div id="feedback"></div>
      <div class="next-zone" id="next-zone"></div>`;
    renderMath(stage());

    document.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
      const choice = btn.dataset.v === "true";
      const good = choice === cur.v;
      document.querySelectorAll(".opt").forEach(b => {
        b.disabled = true;
        const v = b.dataset.v === "true";
        if (v === cur.v) b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
        else b.classList.add("dimmed");
      });
      if (good) { score++; streak++; maxStreak = Math.max(maxStreak, streak); }
      else streak = 0;
      $("#feedback").innerHTML = explainBlock(good, good ? "Bien vu !" : "Raté", cur.why);
      $("#next-zone").innerHTML = `<button class="btn primary" id="btn-next">${i + 1 < rounds.length ? "Suivant →" : "Voir le verdict"}</button>`;
      renderMath($("#feedback"));
      $("#btn-next").addEventListener("click", () => { i++; i < rounds.length ? round() : finish(); });
    }));
  }

  function finish() {
    setProgress(1);
    const isRecord = updateBest("vf", score);
    endScreen({
      score, total: rounds.length,
      xp: score * 10 + maxStreak * 5,
      bestLine: isRecord ? "★ Nouveau record !" : `Record : ${store.best("vf")}/${rounds.length}`,
      replay: startVF
    });
  }
  round();
}

/* ============================================================
   JEU 04 · QUELLE MÉTHODE ?
   ============================================================ */
function startMethodes() {
  beginRun("methodes");
  const rounds = pick(METHODES, Math.min(10, METHODES.length));
  let i = 0, score = 0, streak = 0, maxStreak = 0;

  function round() {
    const cur = rounds[i];
    const order = shuffle(cur.opts.map((o, k) => ({ o, k })));
    const okPos = order.findIndex(x => x.k === cur.ok);
    setMeta(`${i + 1} / ${rounds.length}`, streak > 1 ? `🔥 série ×${streak}` : "");
    setProgress(i / rounds.length);
    stage().innerHTML = `
      <div class="q-card">
        <div class="label">Quelle est la bonne méthode ?</div>
        <div class="question">${cur.q}</div>
      </div>
      <div class="options">${order.map((x, idx) => optionButton(x.o, idx)).join("")}</div>
      <div id="feedback"></div>
      <div class="next-zone" id="next-zone"></div>`;
    renderMath(stage());

    document.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
      const good = Number(btn.dataset.idx) === okPos;
      document.querySelectorAll(".opt").forEach((b, idx) => {
        b.disabled = true;
        if (idx === okPos) b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
        else b.classList.add("dimmed");
      });
      if (good) { score++; streak++; maxStreak = Math.max(maxStreak, streak); }
      else streak = 0;
      $("#feedback").innerHTML = explainBlock(good, good ? "Exact !" : "Pas la bonne", cur.why);
      $("#next-zone").innerHTML = `<button class="btn primary" id="btn-next">${i + 1 < rounds.length ? "Suivant →" : "Voir le verdict"}</button>`;
      renderMath($("#feedback"));
      $("#btn-next").addEventListener("click", () => { i++; i < rounds.length ? round() : finish(); });
    }));
  }

  function finish() {
    setProgress(1);
    const isRecord = updateBest("methodes", score);
    endScreen({
      score, total: rounds.length,
      xp: score * 10 + maxStreak * 5,
      bestLine: isRecord ? "★ Nouveau record !" : `Record : ${store.best("methodes")}/${rounds.length}`,
      replay: startMethodes
    });
  }
  round();
}

/* ============================================================
   FICHE DE COURS · DÉRIVATION
   ============================================================ */
function openFiche(id) {
  const c = FICHE_DERIVATION; // une seule fiche pour la démo
  const tbl = rows => `<table class="formulaire"><thead><tr><th>Fonction</th><th>Dérivée</th></tr></thead>
    <tbody>${rows.map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join("")}</tbody></table>`;

  $("#fiche-stage").innerHTML = `
    <div class="fiche-back"><button class="btn ghost" data-nav="home">← L'arène</button></div>
    <header class="fiche-head">
      <span class="tag">${c.tag} · Chapitre 01</span>
      <h1>${c.title}</h1>
      <p class="lead">${c.intro}</p>
      <div class="fiche-cta">
        <button class="btn primary" data-nav="derivees">⚔ Trouve la dérivée · 10 questions</button>
        <button class="btn" data-nav="flash">🃏 Flashcards</button>
      </div>
    </header>

    <section class="fiche-sec">
      <div class="sec-title">Ce qu'il faut savoir faire</div>
      <ul class="prob-list">${c.objectifs.map(o => `<li>${o}</li>`).join("")}</ul>
    </section>

    <section class="fiche-sec">
      <div class="sec-title">L'essentiel du cours</div>
      ${c.cours.map(p => `<article class="cours-part"><h3>${p.t}</h3><p>${p.d}</p></article>`).join("")}
    </section>

    <section class="fiche-sec">
      <div class="sec-title">Le formulaire à connaître par cœur</div>
      <div class="form-grid">
        <div><h3 class="form-h">Dérivées usuelles</h3>${tbl(c.usuelles)}</div>
        <div><h3 class="form-h">Opérations & composées</h3>${tbl(c.operations)}</div>
      </div>
    </section>

    <section class="fiche-sec">
      <div class="sec-title">Les méthodes types</div>
      ${c.methodes.map(m => `
        <article class="methode-card">
          <h3>${m.t}</h3>
          <ol class="methode-steps">${m.etapes.map(e => `<li>${e}</li>`).join("")}</ol>
        </article>`).join("")}
    </section>

    <section class="fiche-sec">
      <div class="sec-title">Tombé au bac — les vrais sujets</div>
      <ul class="annales-list">
        ${c.annales.map(a => `<li><span class="an-year">${a.y}</span><span class="an-sub">${a.s}</span><span class="an-loc">${a.loc}</span></li>`).join("")}
      </ul>
    </section>

    <section class="fiche-sec">
      <div class="piege-box">
        <div class="ttl">⚠ Le piège à éviter</div>
        <p>${c.piege}</p>
      </div>
    </section>

    <nav class="fiche-nav">
      <button class="btn" data-nav="vf">⚖️ Vrai / Faux</button>
      <button class="btn danger" data-nav="derivees">⚔ S'entraîner</button>
      <button class="btn primary" data-nav="methodes">🧭 Quelle méthode ?</button>
    </nav>`;

  renderMath($("#fiche-stage"));
  show("view-fiche");
}

/* ============================================================
   INIT
   ============================================================ */
refreshHud();
refreshBests();
renderCountdown();
/* KaTeX est chargé en defer : on rend le math statique (hero, cartes) une fois prêt */
window.addEventListener("load", () => renderMath(document.body));
