/* ============================================================
   AGORA MATHS — moteur multi-chapitres (adapté d'AGORA philo)
   Réutilise : XP/niveaux, records localStorage (préfixe agora_maths_),
   navigation par data-nav, écran de fin générique, RNG seedé.
   Nouveauté maths : contenu data-driven (CHAPITRES) + rendu KaTeX.
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
const chapById = id => CHAPITRES.find(c => c.id === id);

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

/* ---------- stockage (préfixe maths : n'écrase pas la philo) ---------- */
const store = {
  get xp() { return Number(localStorage.getItem("agora_maths_xp") || 0); },
  set xp(v) { localStorage.setItem("agora_maths_xp", v); },
  best(key) { return localStorage.getItem("agora_maths_best_" + key); },
  setBest(key, v) { localStorage.setItem("agora_maths_best_" + key, v); }
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

function gainXp(amount) {
  const before = levelFor(store.xp).name;
  store.xp = store.xp + amount;
  refreshHud();
  return levelFor(store.xp).name !== before;
}

function updateBest(key, value, lowerIsBetter = false) {
  const prev = store.best(key);
  const isRecord = prev === null || (lowerIsBetter ? value < Number(prev) : value > Number(prev));
  if (isRecord) store.setBest(key, value);
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

/* ---------- grille des chapitres (accueil) ---------- */
const TAG_PICTO = { "Analyse": "📈", "Probabilités": "🎲", "Géométrie": "📐", "Transversal": "🐍" };

function renderChapGrid() {
  const grid = $("#chap-grid");
  if (!grid) return;
  grid.innerHTML = CHAPITRES.map((c, i) => {
    const best = store.best(c.id + ":qcm");
    return `
    <button class="game-card chap-card" data-nav="fiche:${c.id}">
      <span class="pictogram">${TAG_PICTO[c.tag] || "🧮"}</span>
      <span class="num">CHAP. ${String(i + 1).padStart(2, "0")} · ${c.tag}</span>
      <h3>${c.title}</h3>
      <p>${c.qcm.length} QCM · ${c.flash.length} flashcards · ${c.vraifaux.length} vrai/faux · ${c.qmethode.length} méthodes</p>
      <span class="best">${best !== null ? "★ Record QCM : " + best + "/10" : "Fiche + 4 jeux →"}</span>
    </button>`;
  }).join("");
}

/* ============================================================
   PARTIE EN COURS (RNG seedé)
   ============================================================ */
let currentChapId = null;
function beginRun() { rand = mulberry32(Math.floor(Math.random() * 2147483647)); }

/* ============================================================
   NAVIGATION
   ============================================================ */
function show(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  $("#" + viewId).classList.add("active");
  window.scrollTo({ top: 0 });
}

const GAME_TITLES = { qcm: "Le QCM", flash: "Flashcards", vf: "Vrai ou Faux", qm: "Quelle méthode ?", mix: "Le Grand Mélange" };

function play(game, chapId) {
  currentChapId = chapId === "all" ? null : chapId;
  const chap = chapById(chapId);
  const prefix = chap ? chap.title + " · " : "";
  $("#game-title").textContent = prefix + (GAME_TITLES[game] || "Jeu");
  setMeta("", ""); setProgress(0);
  show("view-game");
  beginRun();
  if (game === "qcm") startMCQ(chap.qcm, chapId, "qcm", "Choisis la bonne réponse");
  else if (game === "qm") startMCQ(chap.qmethode, chapId, "qm", "Quelle est la bonne méthode ?");
  else if (game === "flash") startFlash(chap, chapId);
  else if (game === "vf") startVF(chap, chapId);
  else if (game === "mix") startMix();
}

document.addEventListener("click", e => {
  const jump = e.target.closest("[data-jump]");
  if (jump) {
    show("view-home"); renderChapGrid();
    requestAnimationFrame(() => document.getElementById(jump.dataset.jump)?.scrollIntoView({ behavior: "smooth" }));
    return;
  }
  const btn = e.target.closest("[data-nav]");
  if (!btn) return;
  const target = btn.dataset.nav;
  if (target === "home") { renderChapGrid(); show("view-home"); }
  else if (target.startsWith("fiche:")) openFiche(target.slice(6));
  else if (target.startsWith("play:")) { const [, g, id] = target.split(":"); play(g, id); }
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
  return `<div class="explain"><span class="verdict ${good ? "good" : "bad"}">${verdict}</span>${text}</div>`;
}

/* Échappe < et > UNIQUEMENT à l'intérieur des formules $...$ / $$...$$.
   Sinon le navigateur prend « <B » pour une balise HTML et avale la suite.
   Le HTML volontaire hors formule (<strong>, <code>, <pre>…) est préservé. */
function mathHtml(s) {
  if (s == null) return "";
  return String(s).replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g,
    m => m.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
}

function mentionFor(score, total) {
  const r = total ? score / total : 0;
  if (r === 1) return ["20/20 — copie parfaite", "Le correcteur range son stylo rouge. Respect."];
  if (r >= 0.8) return ["Mention Très Bien", "Solide comme un théorème."];
  if (r >= 0.7) return ["Mention Bien", "Très bon niveau. Encore un effort sur les pièges."];
  if (r >= 0.6) return ["Mention Assez Bien", "Les bases sont là, il reste à fiabiliser."];
  if (r >= 0.5) return ["Admis·e de justesse", "Ça passe — relis la fiche avant juin."];
  return ["Rattrapage en vue", "Pas de panique : relis la fiche et rejoue, ça rentre vite."];
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
  const ficheBtn = currentChapId ? `<button class="btn" data-nav="fiche:${currentChapId}">Relire la fiche</button>` : "";
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
        ${ficheBtn}
        <button class="btn" data-nav="home">Retour à l'arène</button>
      </div>
    </div>`;
  $("#btn-replay").addEventListener("click", replay);
  $("#btn-share").addEventListener("click", () =>
    shareScore(`🧮 ${score}/${total} en révision de maths sur AGORA. Tu fais mieux ?`));
}

/* ============================================================
   JEU GÉNÉRIQUE · QCM à 4 options (sert pour "qcm" et "qm")
   ============================================================ */
function startMCQ(pool, chapId, gameKey, labelText) {
  const rounds = pick(pool, Math.min(10, pool.length));
  const recordKey = chapId + ":" + gameKey;
  let i = 0, score = 0, streak = 0, maxStreak = 0;
  const replay = () => { beginRun(); play(gameKey, chapId); };

  function round() {
    const cur = rounds[i];
    const order = shuffle(cur.opts.map((o, k) => ({ o, k })));
    const okPos = order.findIndex(x => x.k === cur.ok);
    setMeta(`${i + 1} / ${rounds.length}`, streak > 1 ? `🔥 série ×${streak}` : "");
    setProgress(i / rounds.length);
    stage().innerHTML = `
      <div class="q-card">
        <div class="label">${labelText}</div>
        <div class="question">${mathHtml(cur.q)}</div>
      </div>
      <div class="options">${order.map((x, idx) => optionButton(mathHtml(x.o), idx)).join("")}</div>
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
      $("#feedback").innerHTML = explainBlock(good, good ? "Exact !" : "Raté", mathHtml(cur.why || ""));
      $("#next-zone").innerHTML = `<button class="btn primary" id="btn-next">${i + 1 < rounds.length ? "Suivant →" : "Voir le verdict"}</button>`;
      renderMath($("#feedback"));
      $("#btn-next").addEventListener("click", () => { i++; i < rounds.length ? round() : finish(); });
    }));
  }
  function finish() {
    setProgress(1);
    const isRecord = updateBest(recordKey, score);
    endScreen({
      score, total: rounds.length, xp: score * 10 + maxStreak * 5,
      bestLine: isRecord ? "★ Nouveau record !" : `Record : ${store.best(recordKey)}/${rounds.length}`,
      replay
    });
  }
  round();
}

/* ============================================================
   JEU · FLASHCARDS DE FORMULES
   ============================================================ */
function startFlash(chap, chapId) {
  const cards = shuffle(chap.flash);
  let i = 0, known = 0;
  const replay = () => { beginRun(); play("flash", chapId); };

  function round() {
    const c = cards[i];
    setMeta(`${i + 1} / ${cards.length}`, known ? `✓ ${known} sues` : "");
    setProgress(i / cards.length);
    stage().innerHTML = `
      <div class="flash-scene">
        <div class="flash-card" id="flash">
          <div class="flash-face front">
            <span class="hint">Recto</span>
            <span class="term">${mathHtml(c.front)}</span>
            <span class="hint">tape pour retourner ↺</span>
          </div>
          <div class="flash-face back">
            <span class="hint">Réponse</span>
            <div class="flash-answer">${mathHtml(c.back)}</div>
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
    updateBest(chapId + ":flash", known);
    endScreen({
      score: known, total: cards.length, xp: known * 8,
      bestLine: `Formules sues : ${known}/${cards.length}`, replay
    });
  }
  round();
}

/* ============================================================
   JEU · VRAI / FAUX
   ============================================================ */
function startVF(chap, chapId) {
  const rounds = pick(chap.vraifaux, Math.min(10, chap.vraifaux.length));
  let i = 0, score = 0, streak = 0, maxStreak = 0;
  const replay = () => { beginRun(); play("vf", chapId); };

  function round() {
    const cur = rounds[i];
    setMeta(`${i + 1} / ${rounds.length}`, streak > 1 ? `🔥 série ×${streak}` : "");
    setProgress(i / rounds.length);
    stage().innerHTML = `
      <div class="q-card">
        <div class="label">Vrai ou faux ?</div>
        <div class="question">${mathHtml(cur.q)}</div>
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
      $("#feedback").innerHTML = explainBlock(good, good ? "Bien vu !" : "Raté", mathHtml(cur.why || ""));
      $("#next-zone").innerHTML = `<button class="btn primary" id="btn-next">${i + 1 < rounds.length ? "Suivant →" : "Voir le verdict"}</button>`;
      renderMath($("#feedback"));
      $("#btn-next").addEventListener("click", () => { i++; i < rounds.length ? round() : finish(); });
    }));
  }
  function finish() {
    setProgress(1);
    const isRecord = updateBest(chapId + ":vf", score);
    endScreen({
      score, total: rounds.length, xp: score * 10 + maxStreak * 5,
      bestLine: isRecord ? "★ Nouveau record !" : `Record : ${store.best(chapId + ":vf")}/${rounds.length}`,
      replay
    });
  }
  round();
}

/* ============================================================
   JEU · LE GRAND MÉLANGE (QCM de tous les chapitres)
   ============================================================ */
function startMix() {
  const allQ = CHAPITRES.flatMap(c => c.qcm.map(q => ({ ...q, _chap: c.title })));
  const rounds = pick(allQ, 12);
  let i = 0, score = 0, streak = 0, maxStreak = 0;
  const replay = () => { beginRun(); play("mix", "all"); };

  function round() {
    const cur = rounds[i];
    const order = shuffle(cur.opts.map((o, k) => ({ o, k })));
    const okPos = order.findIndex(x => x.k === cur.ok);
    setMeta(`${i + 1} / ${rounds.length}`, streak > 1 ? `🔥 série ×${streak}` : "");
    setProgress(i / rounds.length);
    stage().innerHTML = `
      <div class="q-card">
        <div class="label">${cur._chap}</div>
        <div class="question">${mathHtml(cur.q)}</div>
      </div>
      <div class="options">${order.map((x, idx) => optionButton(mathHtml(x.o), idx)).join("")}</div>
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
      $("#feedback").innerHTML = explainBlock(good, good ? "Exact !" : "Raté", mathHtml(cur.why || ""));
      $("#next-zone").innerHTML = `<button class="btn primary" id="btn-next">${i + 1 < rounds.length ? "Suivant →" : "Voir le verdict"}</button>`;
      renderMath($("#feedback"));
      $("#btn-next").addEventListener("click", () => { i++; i < rounds.length ? round() : finish(); });
    }));
  }
  function finish() {
    setProgress(1);
    const isRecord = updateBest("mix:all", score);
    endScreen({
      score, total: rounds.length, xp: score * 12 + maxStreak * 6,
      bestLine: isRecord ? "★ Nouveau record toutes catégories !" : `Record : ${store.best("mix:all")}/${rounds.length}`,
      replay
    });
  }
  round();
}

/* ============================================================
   FICHE DE COURS (générique)
   ============================================================ */
function openFiche(id) {
  const c = chapById(id);
  if (!c) return;
  const idx = CHAPITRES.indexOf(c);
  const prev = CHAPITRES[(idx - 1 + CHAPITRES.length) % CHAPITRES.length];
  const next = CHAPITRES[(idx + 1) % CHAPITRES.length];

  const formTable = (c.formulaire && c.formulaire.length) ? `
    <section class="fiche-sec">
      <div class="sec-title">${c.formulaireTitre || "Le formulaire à connaître"}</div>
      <table class="formulaire"><tbody>
        ${c.formulaire.map(([a, b]) => `<tr><td>${mathHtml(a)}</td><td>${mathHtml(b)}</td></tr>`).join("")}
      </tbody></table>
    </section>` : "";

  $("#fiche-stage").innerHTML = `
    <div class="fiche-back"><button class="btn ghost" data-nav="home">← Tous les chapitres</button></div>
    <header class="fiche-head">
      <span class="tag">${c.tag} · Chapitre ${String(idx + 1).padStart(2, "0")}/${CHAPITRES.length}</span>
      <h1>${c.title}</h1>
      <p class="lead">${mathHtml(c.intro)}</p>
      <div class="fiche-games">
        <button class="btn primary" data-nav="play:qcm:${c.id}">📈 QCM</button>
        <button class="btn" data-nav="play:flash:${c.id}">🃏 Flashcards</button>
        <button class="btn" data-nav="play:vf:${c.id}">⚖️ Vrai/Faux</button>
        <button class="btn" data-nav="play:qm:${c.id}">🧭 Quelle méthode ?</button>
      </div>
    </header>

    <section class="fiche-sec">
      <div class="sec-title">Ce qu'il faut savoir faire</div>
      <ul class="prob-list">${c.objectifs.map(o => `<li>${mathHtml(o)}</li>`).join("")}</ul>
    </section>

    <section class="fiche-sec">
      <div class="sec-title">L'essentiel du cours</div>
      ${c.cours.map(p => `<article class="cours-part"><h3>${mathHtml(p.t)}</h3><p>${mathHtml(p.d)}</p></article>`).join("")}
    </section>

    ${formTable}

    <section class="fiche-sec">
      <div class="sec-title">Les méthodes types</div>
      ${c.methodes.map(m => `
        <article class="methode-card">
          <h3>${mathHtml(m.t)}</h3>
          <ol class="methode-steps">${m.etapes.map(e => `<li>${mathHtml(e)}</li>`).join("")}</ol>
        </article>`).join("")}
    </section>

    ${(c.annales && c.annales.length) ? `
    <section class="fiche-sec">
      <div class="sec-title">Tombé au bac — les types de sujets</div>
      <ul class="annales-list">
        ${c.annales.map(a => `<li><span class="an-year">${a.y}</span><span class="an-sub">${mathHtml(a.s)}</span><span class="an-loc">${a.loc}</span></li>`).join("")}
      </ul>
    </section>` : ""}

    <section class="fiche-sec">
      <div class="piege-box">
        <div class="ttl">⚠ Le piège à éviter</div>
        <p>${mathHtml(c.piege)}</p>
      </div>
    </section>

    <nav class="fiche-nav">
      <button class="btn" data-nav="fiche:${prev.id}">← ${prev.title}</button>
      <button class="btn danger" data-nav="play:qcm:${c.id}">⚔ S'entraîner</button>
      <button class="btn primary" data-nav="fiche:${next.id}">${next.title} →</button>
    </nav>`;

  renderMath($("#fiche-stage"));
  show("view-fiche");
}

/* ============================================================
   INIT
   ============================================================ */
refreshHud();
renderChapGrid();
renderCountdown();
/* KaTeX est chargé en defer : on rend le math statique (hero, cartes) une fois prêt */
window.addEventListener("load", () => renderMath(document.body));
