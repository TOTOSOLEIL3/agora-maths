/* ============================================================
   AGORA MATHS — Données de révision
   Spé Mathématiques · Terminale générale · Bac 2026
   Démo : chapitre DÉRIVATION (+ convexité)
   Formules vérifiées (BO 2019 / Eduscol). Le LaTeX est rendu par KaTeX.
   ============================================================ */

/* Écrit de spé maths 2026 : 16-18 juin */
const BAC_DATE = "2026-06-16";
const DAILY_GOAL = 30;

/* Paliers d'XP — thème mathématicien·ne (réutilise le moteur AGORA) */
const LEVELS = [
  { xp: 0,    name: "Élève de la table" },
  { xp: 120,  name: "Apprenti·e dériveur" },
  { xp: 320,  name: "Calculateur·rice" },
  { xp: 650,  name: "Géomètre" },
  { xp: 1100, name: "Analyste" },
  { xp: 1700, name: "Disciple d'Euler" },
  { xp: 2600, name: "Maître·sse des tangentes" },
  { xp: 4000, name: "Légende du bac" }
];

/* Chapitres (pour la démo, seul « Dérivation » est complet) */
const CHAPITRES = ["Dérivation"];

/* ============================================================
   JEU 01 · TROUVE LA DÉRIVÉE  (QCM)
   q = fonction (LaTeX), opts = 4 dérivées candidates, ok = index correct
   Les distracteurs reprennent les VRAIES erreurs d'élèves.
   ============================================================ */
const DERIVEES = [
  {
    q: "f(x) = x^5",
    opts: ["$5x^4$", "$5x^6$", "$x^4$", "$4x^5$"],
    ok: 0,
    why: "$(x^n)' = n\\,x^{n-1}$, donc $(x^5)' = 5x^4$."
  },
  {
    q: "f(x) = \\dfrac{1}{x}",
    opts: ["$-\\dfrac{1}{x^2}$", "$\\dfrac{1}{x^2}$", "$-\\dfrac{1}{2x}$", "$\\ln(x)$"],
    ok: 0,
    why: "$\\left(\\dfrac{1}{x}\\right)' = -\\dfrac{1}{x^2}$ sur $\\mathbb{R}^*$. C'est une formule à connaître par cœur."
  },
  {
    q: "f(x) = \\sqrt{x}",
    opts: ["$\\dfrac{1}{2\\sqrt{x}}$", "$\\dfrac{1}{\\sqrt{x}}$", "$2\\sqrt{x}$", "$\\dfrac{1}{2}\\sqrt{x}$"],
    ok: 0,
    why: "$(\\sqrt{x})' = \\dfrac{1}{2\\sqrt{x}}$, dérivable seulement sur $]0\\,;+\\infty[$ (pas en 0)."
  },
  {
    q: "f(x) = \\ln(x)",
    opts: ["$\\dfrac{1}{x}$", "$\\dfrac{1}{\\ln(x)}$", "$x\\ln(x)$", "$-\\dfrac{1}{x^2}$"],
    ok: 0,
    why: "$(\\ln x)' = \\dfrac{1}{x}$ sur $]0\\,;+\\infty[$."
  },
  {
    q: "f(x) = e^x",
    opts: ["$e^x$", "$x\\,e^{x-1}$", "$\\dfrac{e^x}{x}$", "$e$"],
    ok: 0,
    why: "L'exponentielle est sa propre dérivée : $(e^x)' = e^x$."
  },
  {
    q: "f(x) = \\cos(x)",
    opts: ["$-\\sin(x)$", "$\\sin(x)$", "$-\\cos(x)$", "$\\tan(x)$"],
    ok: 0,
    why: "$(\\cos x)' = -\\sin x$ — attention au signe « moins ». $(\\sin x)' = \\cos x$ (sans moins)."
  },
  {
    q: "f(x) = 3x^2 - 5x + 7",
    opts: ["$6x - 5$", "$6x - 5 + 7$", "$3x - 5$", "$6x^2 - 5$"],
    ok: 0,
    why: "On dérive terme à terme : $(3x^2)'=6x$, $(-5x)'=-5$, $(7)'=0$. La constante disparaît."
  },
  {
    q: "f(x) = x\\,e^x \\quad (\\text{produit } u\\cdot v)",
    opts: ["$(x+1)\\,e^x$", "$e^x$", "$x\\,e^x$", "$e^x + x$"],
    ok: 0,
    why: "$(uv)'=u'v+uv'$ avec $u=x,\\ v=e^x$ : $1\\cdot e^x + x\\cdot e^x = (x+1)e^x$. Surtout pas $u'v'$ !"
  },
  {
    q: "f(x) = \\dfrac{x}{x+1} \\quad (\\text{quotient})",
    opts: ["$\\dfrac{1}{(x+1)^2}$", "$\\dfrac{1}{x+1}$", "$\\dfrac{2x+1}{(x+1)^2}$", "$1$"],
    ok: 0,
    why: "$\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}=\\dfrac{1\\cdot(x+1)-x\\cdot1}{(x+1)^2}=\\dfrac{1}{(x+1)^2}$."
  },
  {
    q: "f(x) = e^{3x}",
    opts: ["$3e^{3x}$", "$e^{3x}$", "$3x\\,e^{3x}$", "$e^{3}$"],
    ok: 0,
    why: "$(e^{ax})'=a\\,e^{ax}$. Le facteur $a=3$ est l'erreur n°1 quand on l'oublie."
  },
  {
    q: "f(x) = (2x+1)^4 \\quad (\\text{composée } u^n)",
    opts: ["$8(2x+1)^3$", "$4(2x+1)^3$", "$(2x+1)^3$", "$8(2x+1)^4$"],
    ok: 0,
    why: "$(u^n)'=n\\,u'\\,u^{n-1}$ avec $u=2x+1,\\ u'=2$ : $4\\cdot2\\cdot(2x+1)^3 = 8(2x+1)^3$."
  },
  {
    q: "f(x) = \\ln(x^2+1) \\quad (\\text{composée } \\ln u)",
    opts: ["$\\dfrac{2x}{x^2+1}$", "$\\dfrac{1}{x^2+1}$", "$\\dfrac{1}{2x}$", "$\\dfrac{2x}{(x^2+1)^2}$"],
    ok: 0,
    why: "$(\\ln u)'=\\dfrac{u'}{u}$ avec $u=x^2+1,\\ u'=2x$. On n'oublie pas le $u'$ au numérateur."
  },
  {
    q: "f(x) = e^{x^2} \\quad (\\text{composée } e^u)",
    opts: ["$2x\\,e^{x^2}$", "$e^{x^2}$", "$e^{2x}$", "$x^2 e^{x^2-1}$"],
    ok: 0,
    why: "$(e^u)'=u'\\,e^u$ avec $u=x^2,\\ u'=2x$ : $2x\\,e^{x^2}$."
  },
  {
    q: "f(x) = \\sqrt{3x+2} \\quad (\\text{composée } \\sqrt{u})",
    opts: ["$\\dfrac{3}{2\\sqrt{3x+2}}$", "$\\dfrac{1}{2\\sqrt{3x+2}}$", "$\\dfrac{3}{\\sqrt{3x+2}}$", "$\\dfrac{1}{2\\sqrt{3x}}$"],
    ok: 0,
    why: "$(\\sqrt{u})'=\\dfrac{u'}{2\\sqrt{u}}$ avec $u=3x+2,\\ u'=3$."
  },
  {
    q: "f(x) = \\dfrac{\\ln x}{x}",
    opts: ["$\\dfrac{1-\\ln x}{x^2}$", "$\\dfrac{1}{x^2}$", "$\\dfrac{\\ln x - 1}{x^2}$", "$\\dfrac{1+\\ln x}{x^2}$"],
    ok: 0,
    why: "Quotient avec $u=\\ln x\\ (u'=\\tfrac1x)$, $v=x\\ (v'=1)$ : $\\dfrac{\\frac1x\\cdot x-\\ln x\\cdot1}{x^2}=\\dfrac{1-\\ln x}{x^2}$. (Tombé au bac Métropole 2024/2025.)"
  }
];

/* ============================================================
   JEU 02 · FLASHCARDS DE FORMULES
   recto (front) = question, verso (back) = la formule (LaTeX)
   ============================================================ */
const FORMULES = [
  { front: "Dérivée de $x^n$ ?",            back: "$n\\,x^{n-1}$" },
  { front: "Dérivée de $\\dfrac{1}{x}$ ?",  back: "$-\\dfrac{1}{x^2}$" },
  { front: "Dérivée de $\\sqrt{x}$ ?",      back: "$\\dfrac{1}{2\\sqrt{x}}$" },
  { front: "Dérivée de $\\ln(x)$ ?",        back: "$\\dfrac{1}{x}$" },
  { front: "Dérivée de $e^x$ ?",            back: "$e^x$" },
  { front: "Dérivée de $\\sin(x)$ ?",       back: "$\\cos(x)$" },
  { front: "Dérivée de $\\cos(x)$ ?",       back: "$-\\sin(x)$" },
  { front: "Dérivée d'un produit $(uv)'$ ?",     back: "$u'v + uv'$" },
  { front: "Dérivée d'un quotient $\\left(\\dfrac{u}{v}\\right)'$ ?", back: "$\\dfrac{u'v - uv'}{v^2}$" },
  { front: "Dérivée de $e^u$ ?",            back: "$u'\\,e^u$" },
  { front: "Dérivée de $\\ln(u)$ ?",        back: "$\\dfrac{u'}{u}$" },
  { front: "Dérivée de $\\sqrt{u}$ ?",      back: "$\\dfrac{u'}{2\\sqrt{u}}$" },
  { front: "Dérivée de $u^n$ ?",            back: "$n\\,u'\\,u^{n-1}$" },
  { front: "Dérivée de $e^{ax+b}$ ?",       back: "$a\\,e^{ax+b}$" },
  { front: "Équation de la tangente en $a$ ?", back: "$y = f'(a)(x-a) + f(a)$" }
];

/* ============================================================
   JEU 03 · VRAI / FAUX — théorèmes & pièges
   ============================================================ */
const VRAIFAUX = [
  { q: "$(uv)' = u'\\,v'$", v: false,
    why: "Faux ! La bonne formule est $u'v + uv'$. C'est l'erreur la plus fréquente au bac." },
  { q: "Si $f' \\geq 0$ sur un intervalle $I$, alors $f$ est croissante sur $I$.", v: true,
    why: "Vrai. Le signe de $f'$ donne le sens de variation de $f$." },
  { q: "L'équation de la tangente à $C_f$ en $a$ est $y = f'(a)(x-a) + f(a)$.", v: true,
    why: "Vrai. $f'(a)$ est le coefficient directeur (la pente) de la tangente." },
  { q: "$(\\cos x)' = \\sin x$", v: false,
    why: "Faux : $(\\cos x)' = -\\sin x$. Attention au signe moins." },
  { q: "$\\sqrt{x}$ est dérivable sur $[0\\,;+\\infty[$, y compris en $0$.", v: false,
    why: "Faux : $\\sqrt{x}$ n'est dérivable que sur $]0\\,;+\\infty[$. En $0$ la tangente est verticale." },
  { q: "Si $f'' > 0$ sur $I$, alors $f$ est convexe sur $I$.", v: true,
    why: "Vrai. $f''>0 \\Rightarrow$ convexe (courbe au-dessus de ses tangentes). $f''<0 \\Rightarrow$ concave." },
  { q: "Si $f''(x_0) = 0$, alors $C_f$ admet forcément un point d'inflexion en $x_0$.", v: false,
    why: "Faux : il faut que $f''$ change de signe en $x_0$. Ex. $x^4$ : $f''(0)=0$ mais pas d'inflexion." },
  { q: "Pour dériver $f(x)=e^{5x}$, on obtient $5e^{5x}$.", v: true,
    why: "Vrai : $(e^{ax})' = a\\,e^{ax}$, ici $a=5$." },
  { q: "Une fonction dérivable sur $I$ y est nécessairement continue.", v: true,
    why: "Vrai : dérivable $\\Rightarrow$ continue. La réciproque est fausse (ex. $|x|$ en 0)." },
  { q: "Quand $f$ est convexe, sa courbe est au-dessus de toutes ses tangentes.", v: true,
    why: "Vrai. Convexe = au-dessus des tangentes ; concave = en dessous." }
];

/* ============================================================
   JEU 04 · QUELLE MÉTHODE ?  (QCM de stratégie)
   ============================================================ */
const METHODES = [
  {
    q: "On te demande de montrer que $f$ est croissante sur $I$. Que fais-tu ?",
    opts: [
      "J'étudie le signe de $f'(x)$ sur $I$",
      "Je calcule $f(0)$",
      "Je calcule la limite de $f$ en $+\\infty$",
      "Je résous $f(x)=0$"
    ],
    ok: 0,
    why: "Croissance ⇔ signe de la dérivée : si $f'\\geq 0$ sur $I$, alors $f$ est croissante sur $I$."
  },
  {
    q: "On te demande l'équation de la tangente à $C_f$ au point d'abscisse $a$.",
    opts: [
      "J'applique $y = f'(a)(x-a) + f(a)$",
      "Je calcule $f''(a)$",
      "J'étudie la convexité",
      "Je cherche les limites de $f$"
    ],
    ok: 0,
    why: "La tangente en $a$ : on calcule $f(a)$ et $f'(a)$, puis $y = f'(a)(x-a)+f(a)$."
  },
  {
    q: "On te demande d'étudier la convexité de $f$.",
    opts: [
      "J'étudie le signe de la dérivée seconde $f''$",
      "J'étudie le signe de $f$",
      "J'étudie le signe de $f'$",
      "Je calcule $f(0)$ et $f(1)$"
    ],
    ok: 0,
    why: "Convexité ⇔ signe de $f''$ : $f''>0 \\Rightarrow$ convexe, $f''<0 \\Rightarrow$ concave."
  },
  {
    q: "On veut trouver un point d'inflexion de $C_f$.",
    opts: [
      "Je cherche où $f''$ s'annule EN CHANGEANT de signe",
      "Je cherche où $f'$ s'annule",
      "Je cherche où $f$ s'annule",
      "Je cherche le maximum de $f$"
    ],
    ok: 0,
    why: "Point d'inflexion = la courbe change de convexité : $f''$ s'annule et change de signe."
  },
  {
    q: "On cherche le maximum d'une fonction $f$ dérivable sur $[a\\,;b]$ (problème d'optimisation).",
    opts: [
      "Je dresse le tableau de variations à partir du signe de $f'$",
      "Je calcule directement $f''$",
      "Je trace la courbe au hasard",
      "Je remplace $x$ par 0"
    ],
    ok: 0,
    why: "Optimiser = étudier les variations : dériver, signe de $f'$, tableau, puis lire l'extremum (sans oublier les bornes)."
  },
  {
    q: "Tu dois dériver $f(x) = (3x^2+1)^5$.",
    opts: [
      "J'utilise $(u^n)' = n\\,u'\\,u^{n-1}$",
      "J'utilise $(uv)' = u'v + uv'$",
      "Je développe entièrement la puissance 5",
      "J'utilise $(\\ln u)' = u'/u$"
    ],
    ok: 0,
    why: "C'est une composée puissance : $u=3x^2+1$, donc $f'=5\\cdot 6x\\cdot(3x^2+1)^4 = 30x(3x^2+1)^4$."
  },
  {
    q: "Tu dois dériver $f(x) = \\dfrac{2x+1}{x^2+3}$.",
    opts: [
      "J'utilise la formule du quotient $\\dfrac{u'v-uv'}{v^2}$",
      "Je dérive le haut et le bas séparément puis je divise",
      "J'utilise $(e^u)' = u'e^u$",
      "Je multiplie les deux dérivées"
    ],
    ok: 0,
    why: "Un quotient se dérive avec $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v-uv'}{v^2}$ — jamais en dérivant haut et bas séparément."
  },
  {
    q: "Pour montrer qu'une équation $f(x)=k$ a une unique solution sur $I$, quel théorème ?",
    opts: [
      "Le théorème des valeurs intermédiaires (avec $f$ continue et strictement monotone)",
      "La formule de la tangente",
      "La règle de dérivation d'un produit",
      "Le calcul de $f''$"
    ],
    ok: 0,
    why: "TVI + stricte monotonie (corollaire) : $f$ continue et strictement monotone sur $I$, $k$ entre les bornes ⇒ une unique solution."
  }
];

/* ============================================================
   FICHE DE COURS · DÉRIVATION
   Rendue dans la vue « fiche ». Le LaTeX ($...$) est traité par KaTeX.
   ============================================================ */
const FICHE_DERIVATION = {
  id: "derivation",
  tag: "Analyse",
  title: "La dérivation",
  intro: "Le nombre dérivé, c'est la <em>pente</em> de la courbe en un point. La fonction dérivée résume toutes ces pentes — et c'est l'outil n°1 du bac pour étudier les variations, tracer une tangente, trouver un maximum ou décrire la forme d'une courbe (convexité).",

  objectifs: [
    "Connaître par cœur le formulaire des dérivées usuelles et des opérations.",
    "Dériver une fonction composée : $e^u$, $\\ln u$, $\\sqrt{u}$, $u^n$, $u(ax+b)$.",
    "Relier le signe de $f'$ au sens de variation de $f$.",
    "Déterminer l'équation d'une tangente.",
    "Utiliser la dérivée seconde $f''$ pour étudier la convexité et trouver les points d'inflexion."
  ],

  cours: [
    {
      t: "Nombre dérivé & tangente",
      d: "Le nombre dérivé $f'(a)$ est le coefficient directeur de la tangente à la courbe $C_f$ au point d'abscisse $a$. L'équation de cette tangente est : $$y = f'(a)\\,(x-a) + f(a).$$ Concrètement, $f'(a)$ mesure la vitesse de variation de $f$ en $a$."
    },
    {
      t: "Du signe de f′ aux variations",
      d: "C'est le cœur du chapitre. Sur un intervalle $I$ : si $f'(x) \\geq 0$ alors $f$ est <strong>croissante</strong> ; si $f'(x) \\leq 0$ alors $f$ est <strong>décroissante</strong>. Là où $f'$ s'annule en changeant de signe, $f$ admet un <strong>extremum</strong> (maximum ou minimum) local."
    },
    {
      t: "Dériver une fonction composée",
      d: "Cas général : $\\big(v(u(x))\\big)' = u'(x)\\,\\times\\,v'(u(x))$. En pratique, on retient les cas usuels : $(e^u)' = u'e^u$, $(\\ln u)' = \\dfrac{u'}{u}$, $(\\sqrt{u})' = \\dfrac{u'}{2\\sqrt{u}}$, $(u^n)' = n\\,u'\\,u^{n-1}$, et $(u(ax+b))' = a\\,u'(ax+b)$. <strong>On n'oublie jamais le facteur $u'$.</strong>"
    },
    {
      t: "Dérivée seconde & convexité",
      d: "On dérive deux fois : $f'' = (f')'$. Le signe de $f''$ donne la <strong>forme</strong> de la courbe : $f'' > 0 \\Rightarrow f$ <strong>convexe</strong> (courbe au-dessus de ses tangentes, en « vallée » $\\smile$) ; $f'' < 0 \\Rightarrow f$ <strong>concave</strong> (en « colline » $\\frown$). Un <strong>point d'inflexion</strong> est un point où $f''$ s'annule <em>en changeant de signe</em> : la courbe y change de convexité."
    }
  ],

  /* Formulaire : deux tableaux rendus à part */
  usuelles: [
    ["$k$ (constante)", "$0$"],
    ["$x^n$", "$n\\,x^{n-1}$"],
    ["$\\dfrac{1}{x}$", "$-\\dfrac{1}{x^2}$"],
    ["$\\sqrt{x}$", "$\\dfrac{1}{2\\sqrt{x}}$"],
    ["$e^x$", "$e^x$"],
    ["$\\ln(x)$", "$\\dfrac{1}{x}$"],
    ["$\\sin(x)$", "$\\cos(x)$"],
    ["$\\cos(x)$", "$-\\sin(x)$"]
  ],
  operations: [
    ["$u + v$", "$u' + v'$"],
    ["$k\\,u$", "$k\\,u'$"],
    ["$u\\,v$", "$u'v + uv'$"],
    ["$\\dfrac{u}{v}$", "$\\dfrac{u'v - uv'}{v^2}$"],
    ["$e^u$", "$u'\\,e^u$"],
    ["$\\ln(u)$", "$\\dfrac{u'}{u}$"],
    ["$\\sqrt{u}$", "$\\dfrac{u'}{2\\sqrt{u}}$"],
    ["$u^n$", "$n\\,u'\\,u^{n-1}$"]
  ],

  methodes: [
    { t: "Montrer que f est croissante sur I", etapes: [
      "Calculer $f'(x)$.",
      "Étudier le signe de $f'$ (factoriser ; $e^{\\dots}>0$ et $\\sqrt{\\dots}>0$ toujours).",
      "Conclure : $f' \\geq 0$ sur $I \\Rightarrow f$ croissante sur $I$."
    ]},
    { t: "Équation de la tangente en a", etapes: [
      "Calculer $f(a)$ et $f'(a)$.",
      "Remplacer dans $y = f'(a)(x-a) + f(a)$."
    ]},
    { t: "Étudier la convexité", etapes: [
      "Calculer $f'$ puis $f''$.",
      "Étudier le signe de $f''$.",
      "$f''>0 \\Rightarrow$ convexe ; $f''<0 \\Rightarrow$ concave ; changement de signe $\\Rightarrow$ point d'inflexion."
    ]}
  ],

  /* Types d'exos qui tombent vraiment (annales 2024/2025) */
  annales: [
    { y: 2025, s: "Étude d'une fonction avec $\\ln$ : limites, $f'(x)=\\dfrac{1-\\ln x}{x^2}$, signe, variations, maximum.", loc: "Métropole" },
    { y: 2024, s: "Fonction avec $e^x$ : montrer $g'(x)=(2x-1)e^{-x}$, en déduire le sens de variation.", loc: "Métropole" },
    { y: 2024, s: "Convexité & point d'inflexion : calculer $f''$, étudier le signe, position courbe/tangente.", loc: "Centres étrangers" }
  ],

  piege: "L'erreur n°1 du bac : croire que $(uv)' = u'v'$ — c'est FAUX, c'est $u'v + uv'$. Erreur n°2 : oublier le facteur $u'$ (ou le $a$) en dérivant une composée comme $e^{3x}$ ou $\\ln(x^2+1)$. Vérifie toujours ces deux points avant de rendre."
};
