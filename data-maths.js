/* ============================================================
   AGORA MATHS — Données de révision
   Spé Mathématiques · Terminale générale · Programme réforme 2021 (BO 2019)
   Bac 2026. Les formules LaTeX ($...$) sont rendues par KaTeX.
   ⚙️  Fichier généré : éditer les sources dans chapters/*.json puis
       relancer  node build-data.cjs  (NE PAS éditer à la main).
   ============================================================ */

/* Écrit de spé maths 2026 : 16-18 juin */
const BAC_DATE = "2026-06-16";
const DAILY_GOAL = 30;

/* Paliers d'XP — thème mathématicien·ne */
const LEVELS = [
  { xp: 0,    name: "Élève de la table" },
  { xp: 150,  name: "Apprenti·e calculateur" },
  { xp: 400,  name: "Dériveur·euse" },
  { xp: 800,  name: "Géomètre" },
  { xp: 1400, name: "Analyste" },
  { xp: 2200, name: "Probabiliste" },
  { xp: 3200, name: "Disciple d'Euler" },
  { xp: 4600, name: "Maître·sse des fonctions" },
  { xp: 6500, name: "Légende du bac" }
];

const CHAPITRES = [
  {
    "id": "suites",
    "tag": "Analyse",
    "title": "Suites et récurrence",
    "intro": "Les suites sont <strong>le</strong> chapitre quasi-garanti à l'écrit : on y combine <em>récurrence</em>, <em>limites</em> et <em>théorèmes de convergence</em>. Maîtrise-les et tu gagnes des points sûrs.",
    "objectifs": [
      "Rédiger une récurrence propre (initialisation + hérédité + conclusion)",
      "Déterminer la limite d'une suite avec les opérations et les limites de référence",
      "Connaître et appliquer le comportement de $q^{n}$ selon $q$",
      "Utiliser les théorèmes de comparaison et des gendarmes",
      "Appliquer le théorème de convergence monotone",
      "Reconnaître et exploiter les suites arithmétiques, géométriques et du type $u_{n+1}=au_n+b$"
    ],
    "cours": [
      {
        "t": "Raisonnement par récurrence",
        "d": "Pour montrer qu'une propriété $P(n)$ est vraie pour tout $n\\geqslant n_0$, on procède en trois temps. <strong>Initialisation</strong> : on vérifie $P(n_0)$. <strong>Hérédité</strong> : on suppose $P(n)$ vraie pour un entier $n\\geqslant n_0$ fixé (hypothèse de récurrence) et on démontre $P(n+1)$. <strong>Conclusion</strong> : d'après le principe de récurrence, $P(n)$ est vraie pour tout $n\\geqslant n_0$. Les trois étapes sont <em>obligatoires</em> et rapportent chacune des points."
      },
      {
        "t": "Limite d'une suite",
        "d": "Une suite $(u_n)$ <strong>converge</strong> vers un réel $\\ell$ si tout intervalle ouvert contenant $\\ell$ contient tous les termes à partir d'un certain rang : on note $\\lim\\limits_{n\\to+\\infty}u_n=\\ell$. Sinon elle <strong>diverge</strong>. Diverger peut vouloir dire tendre vers $+\\infty$ ou $-\\infty$, mais aussi ne pas avoir de limite du tout (comme $u_n=(-1)^n$). Limites de référence : $\\lim\\limits_{n\\to+\\infty}\\dfrac{1}{n}=0$, $\\lim\\limits_{n\\to+\\infty}\\dfrac{1}{\\sqrt{n}}=0$, $\\lim\\limits_{n\\to+\\infty}n=+\\infty$, $\\lim\\limits_{n\\to+\\infty}\\sqrt{n}=+\\infty$."
      },
      {
        "t": "Limite de $q^{n}$ et opérations",
        "d": "Tout dépend de la valeur de $q$ : si $q>1$, $\\lim\\limits_{n\\to+\\infty}q^{n}=+\\infty$ ; si $-1<q<1$, $\\lim\\limits_{n\\to+\\infty}q^{n}=0$ ; si $q=1$, la suite est constante égale à $1$ ; si $q\\leqslant -1$, $q^{n}$ n'a <em>pas</em> de limite. On combine ensuite les limites par les règles d'<strong>opérations</strong> (somme, produit, quotient), en faisant attention aux formes indéterminées $+\\infty-\\infty$, $0\\times\\infty$, $\\dfrac{\\infty}{\\infty}$ et $\\dfrac{0}{0}$."
      },
      {
        "t": "Théorèmes de comparaison et des gendarmes",
        "d": "<strong>Comparaison</strong> : si $u_n\\leqslant v_n$ à partir d'un certain rang et $\\lim u_n=+\\infty$, alors $\\lim v_n=+\\infty$ (et symétriquement avec $-\\infty$). <strong>Théorème des gendarmes (encadrement)</strong> : si $u_n\\leqslant w_n\\leqslant v_n$ à partir d'un certain rang et si $(u_n)$ et $(v_n)$ convergent vers la <em>même</em> limite $\\ell$, alors $(w_n)$ converge aussi vers $\\ell$. Très utile dès qu'apparaît un $(-1)^n$, un $\\cos$ ou un $\\sin$."
      },
      {
        "t": "Convergence monotone et suites usuelles",
        "d": "<strong>Théorème de convergence monotone</strong> : toute suite <em>croissante et majorée</em> converge ; toute suite <em>décroissante et minorée</em> converge. Attention : il garantit l'existence de la limite mais ne la donne pas. Une suite croissante non majorée tend vers $+\\infty$. Pour les suites <strong>arithmétiques</strong> ($u_{n+1}=u_n+r$) : $u_n=u_0+nr$. Pour les suites <strong>géométriques</strong> ($u_{n+1}=q\\,u_n$) : $u_n=u_0\\,q^{n}$. Une suite $u_{n+1}=au_n+b$ (avec $a\\neq 1$) se ramène à une suite géométrique en posant $v_n=u_n-\\ell$ où $\\ell=\\dfrac{b}{1-a}$ est le point fixe."
      }
    ],
    "formulaireTitre": "Formules à connaître par cœur",
    "formulaire": [
      [
        "Suite arithmétique, terme général",
        "$u_n=u_0+nr$"
      ],
      [
        "Suite arithmétique, somme",
        "$\\displaystyle\\sum_{k=0}^{n}u_k=(n+1)\\dfrac{u_0+u_n}{2}$"
      ],
      [
        "Suite géométrique, terme général",
        "$u_n=u_0\\,q^{n}$"
      ],
      [
        "Somme des $q^k$ (avec $q\\neq 1$)",
        "$\\displaystyle\\sum_{k=0}^{n}q^{k}=\\dfrac{1-q^{\\,n+1}}{1-q}$"
      ],
      [
        "Limite de $q^{n}$ si $q>1$",
        "$\\lim\\limits_{n\\to+\\infty}q^{n}=+\\infty$"
      ],
      [
        "Limite de $q^{n}$ si $-1<q<1$",
        "$\\lim\\limits_{n\\to+\\infty}q^{n}=0$"
      ],
      [
        "Limites de référence",
        "$\\lim\\limits_{n\\to+\\infty}\\dfrac{1}{n}=0\\;,\\quad\\lim\\limits_{n\\to+\\infty}n=+\\infty$"
      ],
      [
        "Point fixe de $u_{n+1}=au_n+b$",
        "$\\ell=\\dfrac{b}{1-a}\\quad(a\\neq 1)$"
      ]
    ],
    "methodes": [
      {
        "t": "Démontrer une propriété par récurrence",
        "etapes": [
          "Énoncer clairement la propriété $P(n)$ à démontrer.",
          "Initialisation : vérifier que $P(n_0)$ est vraie (souvent $n_0=0$ ou $1$).",
          "Hérédité : supposer $P(n)$ vraie pour un $n\\geqslant n_0$ fixé, puis démontrer $P(n+1)$.",
          "Conclusion : invoquer le principe de récurrence pour conclure pour tout $n\\geqslant n_0$."
        ]
      },
      {
        "t": "Montrer qu'une suite converge sans calculer la limite",
        "etapes": [
          "Étudier le sens de variation (par récurrence ou en étudiant $u_{n+1}-u_n$).",
          "Montrer qu'elle est majorée (si croissante) ou minorée (si décroissante), souvent par récurrence.",
          "Appliquer le théorème de convergence monotone pour conclure à l'existence de la limite.",
          "Si on veut la valeur : résoudre l'équation de point fixe $\\ell=f(\\ell)$."
        ]
      },
      {
        "t": "Calculer la limite d'une suite avec un $(-1)^n$ ou un $\\cos/\\sin$",
        "etapes": [
          "Encadrer le terme oscillant, par exemple $-1\\leqslant(-1)^n\\leqslant 1$.",
          "En déduire un encadrement de $u_n$ par deux suites $a_n\\leqslant u_n\\leqslant b_n$.",
          "Vérifier que $(a_n)$ et $(b_n)$ ont la même limite $\\ell$.",
          "Conclure par le théorème des gendarmes : $\\lim u_n=\\ell$."
        ]
      },
      {
        "t": "Étudier une suite $u_{n+1}=au_n+b$",
        "etapes": [
          "Calculer le point fixe $\\ell=\\dfrac{b}{1-a}$.",
          "Poser $v_n=u_n-\\ell$ et montrer que $(v_n)$ est géométrique de raison $a$.",
          "Écrire $v_n=v_0\\,a^{n}$ puis revenir à $u_n=v_n+\\ell$.",
          "Conclure sur la limite via le comportement de $a^{n}$."
        ]
      }
    ],
    "annales": [
      {
        "y": 2024,
        "s": "On étudie une suite $(u_n)$ croissante et majorée par $4$ ; montrer par récurrence l'encadrement puis justifier que $(u_n)$ converge vers un réel de $[\\,0{,}7\\,;\\,4\\,]$.",
        "loc": "Métropole, jour 2"
      },
      {
        "y": 2023,
        "s": "Suite définie par $u_{n+1}=0{,}9\\,u_n+1$ ; étudier la suite auxiliaire $v_n=u_n-10$, montrer qu'elle est géométrique et en déduire $\\lim\\limits_{n\\to+\\infty}u_n$.",
        "loc": "Métropole"
      },
      {
        "y": 2025,
        "s": "Encadrer $w_n$ entre deux suites convergeant vers la même limite et conclure par le théorème des gendarmes.",
        "loc": "Centres étrangers"
      }
    ],
    "piege": "Dans une récurrence, ne JAMAIS oublier l'initialisation (une hérédité seule ne prouve rien) et ne jamais « supposer ce qu'on veut montrer » : l'hypothèse porte sur le rang $n$, la conclusion sur le rang $n+1$.",
    "qcm": [
      {
        "q": "Pour $q=\\dfrac{1}{2}$, que vaut $\\lim\\limits_{n\\to+\\infty}q^{n}$ ?",
        "opts": [
          "$+\\infty$",
          "$0$",
          "$1$",
          "n'existe pas"
        ],
        "ok": 1,
        "why": "Comme $-1<\\tfrac{1}{2}<1$, on a $\\lim\\limits_{n\\to+\\infty}q^{n}=0$."
      },
      {
        "q": "Pour $q=2$, que vaut $\\lim\\limits_{n\\to+\\infty}q^{n}$ ?",
        "opts": [
          "$0$",
          "$2$",
          "$+\\infty$",
          "$1$"
        ],
        "ok": 2,
        "why": "Comme $q>1$, $q^{n}$ tend vers $+\\infty$."
      },
      {
        "q": "Que peut-on dire de $\\lim\\limits_{n\\to+\\infty}(-1)^{n}$ ?",
        "opts": [
          "Elle vaut $0$",
          "Elle vaut $1$",
          "Elle vaut $-1$",
          "Elle n'existe pas"
        ],
        "ok": 3,
        "why": "La suite oscille entre $1$ et $-1$ : elle diverge sans limite."
      },
      {
        "q": "Une suite croissante et majorée par $5$ :",
        "opts": [
          "converge vers une limite $\\ell\\leqslant 5$",
          "converge vers $5$",
          "tend vers $+\\infty$",
          "n'a pas de limite"
        ],
        "ok": 0,
        "why": "Théorème de convergence monotone : elle converge, et sa limite vérifie $\\ell\\leqslant 5$ (pas forcément $5$)."
      },
      {
        "q": "Suite arithmétique de premier terme $u_0=3$ et de raison $r=2$. Que vaut $u_n$ ?",
        "opts": [
          "$3\\times 2^{n}$",
          "$3+2n$",
          "$2+3n$",
          "$3+2^{n}$"
        ],
        "ok": 1,
        "why": "Pour une suite arithmétique, $u_n=u_0+nr=3+2n$."
      },
      {
        "q": "Suite géométrique de premier terme $u_0=4$ et de raison $q=3$. Que vaut $u_n$ ?",
        "opts": [
          "$4+3n$",
          "$4\\times 3^{n}$",
          "$3\\times 4^{n}$",
          "$12^{n}$"
        ],
        "ok": 1,
        "why": "Pour une suite géométrique, $u_n=u_0\\,q^{n}=4\\times 3^{n}$."
      },
      {
        "q": "On a $u_n\\leqslant v_n$ à partir d'un certain rang et $\\lim\\limits_{n\\to+\\infty}u_n=+\\infty$. Alors :",
        "opts": [
          "$\\lim v_n=+\\infty$",
          "$\\lim v_n=0$",
          "$(v_n)$ converge",
          "on ne peut rien dire"
        ],
        "ok": 0,
        "why": "Théorème de comparaison : $v_n$ est au-dessus de $u_n$ qui tend vers $+\\infty$, donc $\\lim v_n=+\\infty$."
      },
      {
        "q": "Quel est le point fixe de la suite définie par $u_{n+1}=0{,}5\\,u_n+3$ ?",
        "opts": [
          "$3$",
          "$1{,}5$",
          "$6$",
          "$0$"
        ],
        "ok": 2,
        "why": "On résout $\\ell=0{,}5\\,\\ell+3$, soit $0{,}5\\,\\ell=3$, donc $\\ell=6$."
      },
      {
        "q": "Que vaut $\\displaystyle\\sum_{k=0}^{n}\\left(\\dfrac{1}{2}\\right)^{k}$ quand $n\\to+\\infty$ ?",
        "opts": [
          "$1$",
          "$+\\infty$",
          "$2$",
          "$\\dfrac{1}{2}$"
        ],
        "ok": 2,
        "why": "Somme géométrique : $\\dfrac{1-(1/2)^{n+1}}{1-1/2}\\to\\dfrac{1}{1/2}=2$ car $(1/2)^{n+1}\\to 0$."
      },
      {
        "q": "Que vaut $\\lim\\limits_{n\\to+\\infty}\\left(n+\\dfrac{1}{n}\\right)$ ?",
        "opts": [
          "$0$",
          "$1$",
          "$+\\infty$",
          "forme indéterminée"
        ],
        "ok": 2,
        "why": "$n\\to+\\infty$ et $\\tfrac{1}{n}\\to 0$, la somme tend vers $+\\infty$ (pas d'indétermination)."
      },
      {
        "q": "Une suite décroissante et minorée par $0$ :",
        "opts": [
          "tend vers $-\\infty$",
          "converge vers $0$",
          "converge vers une limite $\\ell\\geqslant 0$",
          "diverge"
        ],
        "ok": 2,
        "why": "Convergence monotone : elle converge, et comme elle est minorée par $0$, sa limite vérifie $\\ell\\geqslant 0$."
      },
      {
        "q": "Dans une récurrence, l'hypothèse de récurrence consiste à :",
        "opts": [
          "supposer $P(n)$ vraie pour un rang $n$ fixé",
          "supposer $P(n)$ vraie pour tout $n$",
          "vérifier $P(0)$",
          "démontrer directement $P(n+1)$"
        ],
        "ok": 0,
        "why": "On suppose $P(n)$ vraie à un rang $n$ donné, puis on en déduit $P(n+1)$. Supposer $P(n)$ pour tout $n$, ce serait supposer le résultat."
      }
    ],
    "flash": [
      {
        "front": "Terme général d'une suite arithmétique de raison $r$",
        "back": "$u_n=u_0+nr$"
      },
      {
        "front": "Terme général d'une suite géométrique de raison $q$",
        "back": "$u_n=u_0\\,q^{n}$"
      },
      {
        "front": "$\\lim\\limits_{n\\to+\\infty}q^{n}$ pour $q>1$",
        "back": "$+\\infty$"
      },
      {
        "front": "$\\lim\\limits_{n\\to+\\infty}q^{n}$ pour $-1<q<1$",
        "back": "$0$"
      },
      {
        "front": "$\\lim\\limits_{n\\to+\\infty}\\dfrac{1}{n}$",
        "back": "$0$"
      },
      {
        "front": "Les trois étapes d'une récurrence",
        "back": "Initialisation, hérédité, conclusion"
      },
      {
        "front": "Théorème de convergence monotone (suite croissante)",
        "back": "Toute suite croissante et majorée converge"
      },
      {
        "front": "Théorème de convergence monotone (suite décroissante)",
        "back": "Toute suite décroissante et minorée converge"
      },
      {
        "front": "Énoncé du théorème des gendarmes",
        "back": "Si $u_n\\leqslant w_n\\leqslant v_n$ et $u_n,v_n\\to\\ell$, alors $w_n\\to\\ell$"
      },
      {
        "front": "Somme $\\displaystyle\\sum_{k=0}^{n}q^{k}$ pour $q\\neq 1$",
        "back": "$\\dfrac{1-q^{\\,n+1}}{1-q}$"
      },
      {
        "front": "Point fixe de $u_{n+1}=au_n+b$ ($a\\neq 1$)",
        "back": "$\\ell=\\dfrac{b}{1-a}$"
      },
      {
        "front": "Suite auxiliaire pour étudier $u_{n+1}=au_n+b$",
        "back": "$v_n=u_n-\\ell$, géométrique de raison $a$"
      }
    ],
    "vraifaux": [
      {
        "q": "Toute suite croissante tend vers $+\\infty$.",
        "v": false,
        "why": "Faux : si elle est majorée, elle converge (théorème de convergence monotone). Exemple : $u_n=1-\\tfrac{1}{n}$ croît vers $1$."
      },
      {
        "q": "Une suite majorée est nécessairement convergente.",
        "v": false,
        "why": "Faux : il faut aussi qu'elle soit croissante. $u_n=(-1)^n$ est majorée par $1$ mais ne converge pas."
      },
      {
        "q": "Si $-1<q<1$, alors $\\lim\\limits_{n\\to+\\infty}q^{n}=0$.",
        "v": true,
        "why": "Vrai : c'est le comportement de référence de $q^{n}$ pour $|q|<1$."
      },
      {
        "q": "Dans une récurrence, on peut se passer de l'initialisation si l'hérédité est démontrée.",
        "v": false,
        "why": "Faux : sans initialisation, rien ne garantit que la propriété démarre. Les deux étapes sont indispensables."
      },
      {
        "q": "Une suite peut diverger sans tendre vers $+\\infty$ ni $-\\infty$.",
        "v": true,
        "why": "Vrai : $u_n=(-1)^n$ diverge en oscillant, sans limite infinie."
      },
      {
        "q": "Le théorème des gendarmes exige que les deux suites encadrantes aient la même limite.",
        "v": true,
        "why": "Vrai : c'est la condition clé. Si les limites diffèrent, on ne peut pas conclure."
      },
      {
        "q": "Si une suite converge vers $\\ell$, alors elle est bornée.",
        "v": true,
        "why": "Vrai : une suite convergente est toujours bornée (elle reste près de $\\ell$ à partir d'un rang, et a un nombre fini de termes avant)."
      },
      {
        "q": "$\\lim\\limits_{n\\to+\\infty}(n-n^{2})=+\\infty$.",
        "v": false,
        "why": "Faux : $n-n^{2}=n(1-n)\\to-\\infty$ car le terme dominant $-n^2$ l'emporte."
      },
      {
        "q": "Une suite géométrique de raison $q=-2$ a une limite.",
        "v": false,
        "why": "Faux : pour $q\\leqslant -1$, $q^{n}$ n'a pas de limite (les termes changent de signe et grandissent en valeur absolue)."
      },
      {
        "q": "Si une suite est croissante et non majorée, alors elle tend vers $+\\infty$.",
        "v": true,
        "why": "Vrai : une suite croissante non majorée diverge vers $+\\infty$."
      }
    ],
    "qmethode": [
      {
        "q": "« On te demande de démontrer que $u_n\\leqslant 4$ pour tout entier $n$ » — que fais-tu ?",
        "opts": [
          "Un raisonnement par récurrence",
          "Le théorème des gendarmes",
          "Le calcul de la limite",
          "Une étude de signe de $u_{n+1}-u_n$"
        ],
        "ok": 0,
        "why": "Une propriété valable « pour tout $n$ » portant sur une suite définie par récurrence se démontre par récurrence."
      },
      {
        "q": "« On te demande de montrer que $(u_n)$ converge, sans en demander la valeur » — quelle stratégie ?",
        "opts": [
          "Montrer qu'elle est croissante et majorée (convergence monotone)",
          "Calculer directement $\\lim u_n$",
          "Montrer qu'elle est géométrique",
          "Encadrer par $(-1)^n$"
        ],
        "ok": 0,
        "why": "Le théorème de convergence monotone donne l'existence de la limite sans avoir à la calculer."
      },
      {
        "q": "« On te demande $\\lim\\limits_{n\\to+\\infty}\\dfrac{\\sin n}{n}$ » — que fais-tu ?",
        "opts": [
          "Le théorème des gendarmes en encadrant $\\sin n$",
          "La convergence monotone",
          "Une récurrence",
          "Le point fixe"
        ],
        "ok": 0,
        "why": "On encadre $-\\tfrac{1}{n}\\leqslant\\tfrac{\\sin n}{n}\\leqslant\\tfrac{1}{n}$, les bornes tendent vers $0$, donc la limite est $0$."
      },
      {
        "q": "« On te demande d'étudier $u_{n+1}=0{,}8\\,u_n+5$ » — par quoi commences-tu ?",
        "opts": [
          "Calculer le point fixe puis poser $v_n=u_n-\\ell$",
          "Faire une récurrence sur la monotonie",
          "Encadrer par les gendarmes",
          "Calculer la somme des termes"
        ],
        "ok": 0,
        "why": "Pour une suite $u_{n+1}=au_n+b$, on cherche le point fixe $\\ell=\\tfrac{b}{1-a}=25$ et la suite auxiliaire $v_n=u_n-\\ell$ est géométrique."
      },
      {
        "q": "« On te demande $\\lim\\limits_{n\\to+\\infty}\\left(2^{n}-n\\right)$ » — quel outil ?",
        "opts": [
          "Les opérations sur les limites avec le terme dominant",
          "Le théorème des gendarmes",
          "Une récurrence",
          "La convergence monotone"
        ],
        "ok": 0,
        "why": "$2^{n}$ croît bien plus vite que $n$ : par opérations, $2^{n}-n\\to+\\infty$ (le terme exponentiel domine)."
      },
      {
        "q": "« On te demande de montrer qu'une suite est minorée par $0$ pour tout $n$ » — que fais-tu ?",
        "opts": [
          "Une récurrence sur $u_n\\geqslant 0$",
          "Le calcul de la limite",
          "Le théorème des gendarmes",
          "La somme géométrique"
        ],
        "ok": 0,
        "why": "Une minoration valable pour tout $n$ sur une suite récurrente se prouve par récurrence."
      },
      {
        "q": "« On te demande la somme $u_0+u_1+\\dots+u_n$ d'une suite géométrique » — quelle formule ?",
        "opts": [
          "$u_0\\dfrac{1-q^{\\,n+1}}{1-q}$",
          "$(n+1)\\dfrac{u_0+u_n}{2}$",
          "$u_0+nr$",
          "$u_0\\,q^{n}$"
        ],
        "ok": 0,
        "why": "Somme de termes géométriques : $u_0\\times\\dfrac{1-q^{\\,n+1}}{1-q}$. La deuxième formule, elle, concerne les suites arithmétiques."
      }
    ]
  },
  {
    "id": "combinatoire",
    "tag": "Probabilités",
    "title": "Combinatoire et dénombrement",
    "intro": "Dénombrer, c'est compter sans lister à la main. Le réflexe central : l'ordre compte-t-il ou non ? Si oui, on est sur des listes (p-uplets) ou des permutations ; si non, sur des combinaisons. Ce chapitre fournit aussi les coefficients binomiaux $\\binom{n}{k}$ qui réapparaissent direct dans la loi binomiale.",
    "objectifs": [
      "Maîtriser la factorielle $n!$ et le principe multiplicatif",
      "Compter les $k$-uplets ($n^k$) et les permutations ($n!$) d'un ensemble fini",
      "Calculer et interpréter $\\binom{n}{k}$ comme nombre de parties à $k$ éléments",
      "Utiliser les propriétés : valeurs particulières, symétrie, relation de Pascal",
      "Construire et lire le triangle de Pascal",
      "Choisir le bon modèle selon que l'ordre compte ou non, avec ou sans répétition"
    ],
    "cours": [
      {
        "t": "Factorielle et principe multiplicatif",
        "d": "Pour un entier $n \\geqslant 1$, la factorielle est $n! = n \\times (n-1) \\times \\cdots \\times 2 \\times 1$, avec par convention $0! = 1$. Le principe multiplicatif dit que si une situation se décompose en étapes successives offrant respectivement $a_1, a_2, \\ldots, a_p$ choix, le nombre total d'issues est le produit $a_1 \\times a_2 \\times \\cdots \\times a_p$."
      },
      {
        "t": "p-uplets (listes) et permutations",
        "d": "Soit $E$ un ensemble à $n$ éléments. Un $k$-uplet (ou $p$-liste) est une suite ordonnée de $k$ éléments de $E$, avec répétition autorisée : il y en a $n^k$. Si l'on tire sans répétition $k$ éléments ordonnés ($k \\leqslant n$), on obtient $n \\times (n-1) \\times \\cdots \\times (n-k+1) = \\dfrac{n!}{(n-k)!}$ tirages. Un cas particulier : une permutation est un rangement de tous les $n$ éléments, d'où $n!$ permutations."
      },
      {
        "t": "Combinaisons",
        "d": "Une combinaison de $k$ éléments de $E$ est une partie (un sous-ensemble) à $k$ éléments : l'ordre ne compte pas et il n'y a pas de répétition. Leur nombre est le coefficient binomial $\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$, pour $0 \\leqslant k \\leqslant n$. Il se lit « $k$ parmi $n$ »."
      },
      {
        "t": "Propriétés des coefficients binomiaux",
        "d": "On a $\\binom{n}{0} = \\binom{n}{n} = 1$ et $\\binom{n}{1} = \\binom{n}{n-1} = n$. La symétrie donne $\\binom{n}{k} = \\binom{n}{n-k}$. La relation de Pascal $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$ permet de construire chaque coefficient à partir des deux du dessus."
      },
      {
        "t": "Triangle de Pascal et lien avec la loi binomiale",
        "d": "Le triangle de Pascal range les $\\binom{n}{k}$ : ligne $n$, position $k$. Chaque coefficient (hors bords valant 1) est la somme des deux situés au-dessus de lui, ce qui est exactement la relation de Pascal. Ces coefficients sont ceux de la loi binomiale : si $X$ suit $\\mathcal{B}(n,p)$, alors $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$, où $\\binom{n}{k}$ compte les positions possibles des $k$ succès."
      }
    ],
    "formulaireTitre": "À connaître par cœur",
    "formulaire": [
      [
        "Factorielle",
        "$n! = n \\times (n-1) \\times \\cdots \\times 1,\\ 0! = 1$"
      ],
      [
        "$k$-uplets (avec répétition)",
        "$n^k$"
      ],
      [
        "Listes sans répétition",
        "$\\dfrac{n!}{(n-k)!}$"
      ],
      [
        "Permutations",
        "$n!$"
      ],
      [
        "Combinaisons",
        "$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$"
      ],
      [
        "Valeurs aux bords",
        "$\\binom{n}{0} = \\binom{n}{n} = 1$"
      ],
      [
        "Cas $k=1$",
        "$\\binom{n}{1} = n$"
      ],
      [
        "Symétrie",
        "$\\binom{n}{k} = \\binom{n}{n-k}$"
      ],
      [
        "Relation de Pascal",
        "$\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$"
      ],
      [
        "Loi binomiale",
        "$P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$"
      ]
    ],
    "methodes": [
      {
        "t": "Choisir le bon modèle de dénombrement",
        "etapes": [
          "Identifier l'ensemble de départ et combien d'éléments on prélève.",
          "Se demander : l'ordre du tirage compte-t-il ?",
          "Se demander : peut-on répéter un même élément ?",
          "Ordre + répétition $\\Rightarrow$ $k$-uplets : $n^k$.",
          "Ordre sans répétition $\\Rightarrow$ listes : $\\dfrac{n!}{(n-k)!}$.",
          "Sans ordre et sans répétition $\\Rightarrow$ combinaisons : $\\binom{n}{k}$."
        ]
      },
      {
        "t": "Calculer $\\binom{n}{k}$ à la main sans tout développer",
        "etapes": [
          "Utiliser la symétrie pour se ramener au plus petit des deux : $\\binom{n}{k} = \\binom{n}{n-k}$.",
          "Écrire $\\binom{n}{k} = \\dfrac{n \\times (n-1) \\times \\cdots \\times (n-k+1)}{k!}$ : $k$ facteurs en haut.",
          "Simplifier avant de multiplier pour éviter les grands nombres.",
          "Vérifier que le résultat est bien un entier."
        ]
      },
      {
        "t": "Dénombrer un tirage simultané (sans ordre)",
        "etapes": [
          "Repérer le mot « simultanément » ou « en même temps » : l'ordre ne compte pas.",
          "Le nombre de tirages de $k$ objets parmi $n$ est $\\binom{n}{k}$.",
          "Pour une condition (ex. exactement 2 rouges parmi $r$ rouges et $b$ bleus), multiplier les choix par catégorie : $\\binom{r}{2} \\times \\binom{b}{k-2}$.",
          "Sommer les cas disjoints si plusieurs configurations conviennent."
        ]
      }
    ],
    "annales": [
      {
        "y": 2024,
        "s": "Une urne contient 10 boules. On en tire 3 simultanément : justifier qu'il y a $\\binom{10}{3} = 120$ tirages possibles.",
        "loc": "Métropole"
      },
      {
        "y": 2023,
        "s": "Dans le cadre d'une loi binomiale $\\mathcal{B}(5;0,3)$, calculer $P(X=2) = \\binom{5}{2}(0,3)^2(0,7)^3$.",
        "loc": "Métropole"
      },
      {
        "y": 2022,
        "s": "Un code à 4 chiffres (chiffres de 0 à 9, répétition autorisée) : montrer qu'il existe $10^4 = 10\\,000$ codes possibles.",
        "loc": "Centres étrangers"
      }
    ],
    "piege": "Le piège classique : confondre l'ordre qui compte (listes/arrangements) et l'ordre qui ne compte pas (combinaisons). « Tirer 3 boules une à une » $\\neq$ « tirer 3 boules simultanément ». Autre piège : oublier de distinguer avec répétition (tirage avec remise, $n^k$) et sans répétition (sans remise, $\\binom{n}{k}$ ou $\\frac{n!}{(n-k)!}$).",
    "qcm": [
      {
        "q": "Combien vaut $5!$ ?",
        "opts": [
          "$25$",
          "$120$",
          "$25$ encore non",
          "$720$"
        ],
        "ok": 1,
        "why": "$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$."
      },
      {
        "q": "Combien de codes de 3 chiffres peut-on former avec les chiffres 0 à 9, répétition autorisée ?",
        "opts": [
          "$720$",
          "$1000$",
          "$30$",
          "$120$"
        ],
        "ok": 1,
        "why": "Ordre et répétition $\\Rightarrow$ $10^3 = 1000$ codes."
      },
      {
        "q": "Combien de parties à 2 éléments possède un ensemble de 6 éléments ?",
        "opts": [
          "$30$",
          "$36$",
          "$15$",
          "$12$"
        ],
        "ok": 2,
        "why": "$\\binom{6}{2} = \\dfrac{6 \\times 5}{2} = 15$."
      },
      {
        "q": "Que vaut $\\binom{n}{0}$ ?",
        "opts": [
          "$1$",
          "$0$",
          "$n$",
          "$n!$"
        ],
        "ok": 0,
        "why": "Il y a une seule partie à 0 élément (l'ensemble vide), donc $\\binom{n}{0} = 1$."
      },
      {
        "q": "À quoi est égal $\\binom{8}{5}$ par symétrie ?",
        "opts": [
          "$\\binom{8}{2}$",
          "$\\binom{8}{3}$",
          "$\\binom{5}{3}$",
          "$\\binom{8}{8}$"
        ],
        "ok": 1,
        "why": "$\\binom{n}{k} = \\binom{n}{n-k}$, donc $\\binom{8}{5} = \\binom{8}{3}$."
      },
      {
        "q": "Combien de façons d'ordonner 4 personnes en file ?",
        "opts": [
          "$16$",
          "$12$",
          "$4$",
          "$24$"
        ],
        "ok": 3,
        "why": "C'est une permutation : $4! = 24$."
      },
      {
        "q": "Que donne la relation de Pascal $\\binom{6}{2} + \\binom{6}{3}$ ?",
        "opts": [
          "$\\binom{7}{3}$",
          "$\\binom{6}{5}$",
          "$\\binom{12}{5}$",
          "$\\binom{7}{2}$"
        ],
        "ok": 0,
        "why": "$\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$, donc $\\binom{6}{2} + \\binom{6}{3} = \\binom{7}{3}$."
      },
      {
        "q": "Combien de mots (ordonnés, sans répétition) de 3 lettres distinctes peut-on former avec 5 lettres ?",
        "opts": [
          "$10$",
          "$125$",
          "$60$",
          "$15$"
        ],
        "ok": 2,
        "why": "Liste sans répétition : $\\dfrac{5!}{(5-3)!} = 5 \\times 4 \\times 3 = 60$."
      },
      {
        "q": "Dans le triangle de Pascal, comment obtient-on un coefficient non situé au bord ?",
        "opts": [
          "En multipliant les deux du dessus",
          "En additionnant les deux situés juste au-dessus",
          "En soustrayant les deux du dessus",
          "En doublant celui de gauche"
        ],
        "ok": 1,
        "why": "C'est la relation de Pascal : chaque coefficient est la somme des deux placés au-dessus."
      },
      {
        "q": "Pour $X \\sim \\mathcal{B}(5;0,4)$, quel facteur compte le nombre de positions des succès dans $P(X=2)$ ?",
        "opts": [
          "$\\binom{5}{2}$",
          "$5^2$",
          "$2!$",
          "$\\binom{2}{5}$"
        ],
        "ok": 0,
        "why": "$P(X=2) = \\binom{5}{2}(0,4)^2(0,6)^3$ : $\\binom{5}{2}$ compte les emplacements des 2 succès."
      },
      {
        "q": "Combien de tirages simultanés de 5 cartes dans un jeu de 32 ?",
        "opts": [
          "$32^5$",
          "$\\dfrac{32!}{27!}$",
          "$\\binom{32}{5}$",
          "$5!$"
        ],
        "ok": 2,
        "why": "Tirage simultané = sans ordre et sans répétition : $\\binom{32}{5}$."
      },
      {
        "q": "Que vaut $\\binom{n}{1}$ ?",
        "opts": [
          "$1$",
          "$n!$",
          "$n$",
          "$\\dfrac{n}{2}$"
        ],
        "ok": 2,
        "why": "Il y a $n$ parties à un seul élément, donc $\\binom{n}{1} = n$."
      }
    ],
    "flash": [
      {
        "front": "Définition de $n!$",
        "back": "$n! = n \\times (n-1) \\times \\cdots \\times 2 \\times 1$"
      },
      {
        "front": "Valeur de $0!$",
        "back": "$0! = 1$ (convention)"
      },
      {
        "front": "Nombre de $k$-uplets d'un ensemble à $n$ éléments",
        "back": "$n^k$"
      },
      {
        "front": "Nombre de permutations de $n$ éléments",
        "back": "$n!$"
      },
      {
        "front": "Nombre de listes de $k$ éléments distincts parmi $n$",
        "back": "$\\dfrac{n!}{(n-k)!}$"
      },
      {
        "front": "Formule de $\\binom{n}{k}$",
        "back": "$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$"
      },
      {
        "front": "$\\binom{n}{0}$ et $\\binom{n}{n}$",
        "back": "Tous deux égaux à $1$"
      },
      {
        "front": "$\\binom{n}{1}$",
        "back": "$\\binom{n}{1} = n$"
      },
      {
        "front": "Propriété de symétrie",
        "back": "$\\binom{n}{k} = \\binom{n}{n-k}$"
      },
      {
        "front": "Relation de Pascal",
        "back": "$\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$"
      },
      {
        "front": "Interprétation de $\\binom{n}{k}$",
        "back": "Nombre de parties à $k$ éléments d'un ensemble à $n$ éléments"
      },
      {
        "front": "$P(X=k)$ pour $X \\sim \\mathcal{B}(n,p)$",
        "back": "$\\binom{n}{k} p^k (1-p)^{n-k}$"
      }
    ],
    "vraifaux": [
      {
        "q": "$0! = 1$",
        "v": true,
        "why": "C'est une convention qui rend cohérentes les formules de dénombrement."
      },
      {
        "q": "Le nombre de $k$-uplets (avec répétition) d'un ensemble à $n$ éléments est $\\binom{n}{k}$.",
        "v": false,
        "why": "C'est $n^k$. $\\binom{n}{k}$ compte les combinaisons (sans ordre, sans répétition)."
      },
      {
        "q": "$\\binom{n}{k} = \\binom{n}{n-k}$ pour tout $0 \\leqslant k \\leqslant n$.",
        "v": true,
        "why": "Choisir $k$ éléments à garder revient à choisir les $n-k$ à écarter."
      },
      {
        "q": "Pour un tirage où l'ordre compte, on utilise les combinaisons.",
        "v": false,
        "why": "Si l'ordre compte, ce sont des listes (ou permutations), pas des combinaisons."
      },
      {
        "q": "$\\binom{n}{0} = \\binom{n}{n} = 1$.",
        "v": true,
        "why": "Une seule partie vide, une seule partie pleine."
      },
      {
        "q": "Le nombre de permutations de 5 objets est $5^5$.",
        "v": false,
        "why": "C'est $5! = 120$, pas $5^5$. $n^k$ concerne les $k$-uplets avec répétition."
      },
      {
        "q": "La relation de Pascal s'écrit $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$.",
        "v": true,
        "why": "C'est elle qui fonde la construction du triangle de Pascal."
      },
      {
        "q": "$\\binom{10}{3}$ et $\\binom{10}{7}$ sont égaux.",
        "v": true,
        "why": "Par symétrie $\\binom{10}{3} = \\binom{10}{10-3} = \\binom{10}{7} = 120$."
      },
      {
        "q": "Dans le triangle de Pascal, les nombres au bord valent toujours 1.",
        "v": true,
        "why": "Ce sont les $\\binom{n}{0}$ et $\\binom{n}{n}$, qui valent 1."
      },
      {
        "q": "Les coefficients de la loi binomiale $\\mathcal{B}(n,p)$ sont les $\\binom{n}{k}$.",
        "v": true,
        "why": "$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$ : ils comptent les positions des $k$ succès."
      }
    ],
    "qmethode": [
      {
        "q": "On tire 3 boules une à une, sans remise, dans une urne de 8 boules, en notant l'ordre. Quel modèle ?",
        "opts": [
          "Liste sans répétition : $\\dfrac{8!}{5!}$",
          "Combinaisons : $\\binom{8}{3}$",
          "$k$-uplets : $8^3$",
          "Permutations : $8!$"
        ],
        "ok": 0,
        "why": "Ordre noté + sans remise = liste sans répétition : $\\dfrac{8!}{(8-3)!} = 8 \\times 7 \\times 6$."
      },
      {
        "q": "On tire 3 boules simultanément dans une urne de 8. Quel modèle ?",
        "opts": [
          "$8^3$",
          "Combinaisons : $\\binom{8}{3}$",
          "$\\dfrac{8!}{5!}$",
          "$3!$"
        ],
        "ok": 1,
        "why": "« Simultanément » = sans ordre, sans répétition : $\\binom{8}{3}$."
      },
      {
        "q": "Un cadenas à 4 molettes de 0 à 9, chaque chiffre indépendant et répétable. Quel modèle ?",
        "opts": [
          "$\\binom{10}{4}$",
          "$\\dfrac{10!}{6!}$",
          "$k$-uplets : $10^4$",
          "$4!$"
        ],
        "ok": 2,
        "why": "Ordre compte + répétition autorisée : $k$-uplets, $10^4 = 10\\,000$."
      },
      {
        "q": "On veut ranger 6 livres distincts sur une étagère. Quel modèle ?",
        "opts": [
          "Permutations : $6!$",
          "$\\binom{6}{6}$",
          "$6^6$",
          "$\\dfrac{6!}{2!}$"
        ],
        "ok": 0,
        "why": "Ranger tous les éléments dans un ordre = permutation : $6! = 720$."
      },
      {
        "q": "Choisir un comité de 4 personnes parmi 12, sans hiérarchie entre les membres. Quel modèle ?",
        "opts": [
          "$12^4$",
          "$\\dfrac{12!}{8!}$",
          "$4!$",
          "Combinaisons : $\\binom{12}{4}$"
        ],
        "ok": 3,
        "why": "Comité sans rôle distinct = sous-ensemble, l'ordre ne compte pas : $\\binom{12}{4}$."
      },
      {
        "q": "Pour calculer $\\binom{20}{18}$ rapidement, quelle est la bonne idée ?",
        "opts": [
          "Utiliser la symétrie : $\\binom{20}{18} = \\binom{20}{2}$",
          "Calculer directement $20!$",
          "Faire $20^{18}$",
          "Faire $20 - 18 = 2$"
        ],
        "ok": 0,
        "why": "$\\binom{20}{18} = \\binom{20}{2} = \\dfrac{20 \\times 19}{2} = 190$, bien plus simple."
      },
      {
        "q": "Dans une classe de 30, élire un délégué et un suppléant (deux rôles distincts). Quel modèle ?",
        "opts": [
          "$\\binom{30}{2}$",
          "Liste sans répétition : $30 \\times 29$",
          "$30^2$",
          "$2!$"
        ],
        "ok": 1,
        "why": "Deux rôles distincts = ordre compte, sans répétition : $\\dfrac{30!}{28!} = 30 \\times 29 = 870$."
      }
    ]
  },
  {
    "id": "limites-continuite",
    "tag": "Analyse",
    "title": "Limites et continuité",
    "intro": "Étudier une limite, c'est décrire le comportement d'une fonction \"au bord\" : que devient $f(x)$ quand $x$ file vers $+\\infty$, $-\\infty$, ou s'approche d'un réel embêtant (souvent une valeur interdite) ? Ce chapitre te donne les limites de référence, les règles d'opérations, et surtout les fameuses formes indéterminées (FI) où il faut bidouiller avant de conclure. On enchaîne avec la continuité et le théorème des valeurs intermédiaires (TVI), l'outil roi pour prouver qu'une équation $f(x)=k$ a une solution — et même une seule quand $f$ est strictement monotone.",
    "objectifs": [
      "Connaître par cœur les limites de référence ($x^n$, $\\dfrac1x$, $\\sqrt{x}$, $e^x$, $\\ln x$)",
      "Appliquer les opérations sur les limites et repérer les 4 formes indéterminées",
      "Lever une FI : factoriser par le terme dominant, utiliser les croissances comparées",
      "Déterminer les asymptotes horizontales et verticales d'une courbe",
      "Énoncer et utiliser le TVI et son corollaire (existence et unicité d'une solution)",
      "Mettre en œuvre la dichotomie pour encadrer une solution"
    ],
    "cours": [
      {
        "t": "Limite en l'infini et en un réel",
        "d": "$\\lim\\limits_{x\\to+\\infty}f(x)=\\ell$ signifie que $f(x)$ devient aussi proche que l'on veut de $\\ell$ pour $x$ assez grand : la droite $y=\\ell$ est alors asymptote horizontale. $\\lim\\limits_{x\\to+\\infty}f(x)=+\\infty$ signifie que $f(x)$ dépasse tout seuil. En un réel $a$, si $\\lim\\limits_{x\\to a}f(x)=\\pm\\infty$, la droite verticale $x=a$ est asymptote verticale (typique en une valeur interdite, où un dénominateur s'annule)."
      },
      {
        "t": "Opérations sur les limites",
        "d": "On combine les limites comme pour les nombres, SAUF dans 4 cas indéterminés : $+\\infty-\\infty$, $\\dfrac{\\infty}{\\infty}$, $0\\times\\infty$ et $\\dfrac{0}{0}$. Dans ces cas, le résultat dépend de la fonction : interdiction de conclure directement, il faut transformer l'écriture. Attention aussi à la \"règle des signes\" pour les produits et quotients, et aux limites par valeurs supérieures/inférieures ($0^+$ ou $0^-$ au dénominateur) qui décident du signe de l'infini."
      },
      {
        "t": "Lever une forme indéterminée",
        "d": "Pour un polynôme ou une fonction rationnelle en $\\pm\\infty$, on factorise par le terme de plus haut degré (le terme dominant) : la limite d'un polynôme en l'infini est celle de son terme de plus haut degré. Pour une expression avec une racine, on multiplie par la quantité conjuguée. Le but est toujours de se ramener à une forme non indéterminée."
      },
      {
        "t": "Croissances comparées",
        "d": "En $+\\infty$, l'exponentielle l'emporte sur toute puissance, qui l'emporte sur le logarithme. Les résultats clés : $\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}{x}=+\\infty$, $\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}{x^n}=+\\infty$, $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}=0$, et en $-\\infty$ : $\\lim\\limits_{x\\to-\\infty}xe^{x}=0$. Ces limites lèvent directement des FI du type $\\dfrac{\\infty}{\\infty}$ ou $0\\times\\infty$."
      },
      {
        "t": "Continuité, TVI et corollaire",
        "d": "Une fonction est continue sur un intervalle si on peut tracer sa courbe \"sans lever le crayon\" ($\\lim\\limits_{x\\to a}f(x)=f(a)$ en tout point $a$). Toutes les fonctions usuelles (polynômes, $\\exp$, $\\ln$, $\\cos$, $\\sin$, racine, quotients là où ils sont définis) sont continues sur leur domaine. Théorème des valeurs intermédiaires : si $f$ est continue sur $[a,b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x)=k$ admet au moins une solution dans $[a,b]$. Corollaire (théorème de la bijection) : si de plus $f$ est strictement monotone sur $[a,b]$, alors cette solution est unique."
      }
    ],
    "formulaireTitre": "Limites de référence à connaître",
    "formulaire": [
      [
        "$\\lim\\limits_{x\\to+\\infty}x^n=+\\infty\\ (n\\ge 1)$",
        "$\\lim\\limits_{x\\to+\\infty}\\dfrac{1}{x^n}=0$"
      ],
      [
        "$\\lim\\limits_{x\\to 0^+}\\dfrac{1}{x}=+\\infty$",
        "$\\lim\\limits_{x\\to 0^-}\\dfrac{1}{x}=-\\infty$"
      ],
      [
        "$\\lim\\limits_{x\\to+\\infty}\\sqrt{x}=+\\infty$",
        "$\\lim\\limits_{x\\to+\\infty}e^{x}=+\\infty$"
      ],
      [
        "$\\lim\\limits_{x\\to-\\infty}e^{x}=0$",
        "$\\lim\\limits_{x\\to+\\infty}\\ln x=+\\infty$"
      ],
      [
        "$\\lim\\limits_{x\\to 0^+}\\ln x=-\\infty$",
        "$\\lim\\limits_{x\\to+\\infty}\\dfrac{e^{x}}{x}=+\\infty$"
      ],
      [
        "$\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}=0$",
        "$\\lim\\limits_{x\\to-\\infty}x\\,e^{x}=0$"
      ],
      [
        "$\\lim\\limits_{x\\to 0}\\dfrac{e^{x}-1}{x}=1$",
        "$\\lim\\limits_{x\\to 0^+}x\\ln x=0$"
      ],
      [
        "Les 4 FI : $\\infty-\\infty$,\\ $\\dfrac{\\infty}{\\infty}$",
        "$0\\times\\infty$,\\ $\\dfrac{0}{0}$"
      ]
    ],
    "methodes": [
      {
        "t": "Limite d'une fonction rationnelle en $\\pm\\infty$",
        "etapes": [
          "Repérer la FI (souvent $\\dfrac{\\infty}{\\infty}$).",
          "Factoriser numérateur et dénominateur par leur terme de plus haut degré.",
          "Simplifier la fraction obtenue.",
          "Utiliser $\\lim\\limits_{x\\to+\\infty}\\dfrac{1}{x^n}=0$ pour conclure."
        ]
      },
      {
        "t": "Lever une FI avec une racine (quantité conjuguée)",
        "etapes": [
          "Identifier la FI $\\infty-\\infty$ (du type $\\sqrt{x^2+x}-x$).",
          "Multiplier et diviser par l'expression conjuguée.",
          "Utiliser l'identité $(a-b)(a+b)=a^2-b^2$ au numérateur.",
          "Simplifier puis factoriser par le terme dominant pour conclure."
        ]
      },
      {
        "t": "Montrer que $f(x)=k$ a une unique solution (corollaire du TVI)",
        "etapes": [
          "Vérifier que $f$ est continue sur l'intervalle $[a,b]$.",
          "Vérifier que $f$ est strictement monotone (signe de $f'$).",
          "Vérifier que $k$ est compris entre $f(a)$ et $f(b)$.",
          "Conclure : l'équation $f(x)=k$ admet une unique solution dans $[a,b]$."
        ]
      },
      {
        "t": "Encadrer la solution par dichotomie",
        "etapes": [
          "Partir d'un intervalle $[a,b]$ contenant la solution $\\alpha$.",
          "Calculer le milieu $m=\\dfrac{a+b}{2}$ et le signe de $f(m)-k$.",
          "Garder la moitié $[a,m]$ ou $[m,b]$ qui contient encore $\\alpha$.",
          "Répéter jusqu'à obtenir l'amplitude (précision) voulue."
        ]
      }
    ],
    "annales": [
      {
        "y": 2024,
        "s": "Étudier $\\lim\\limits_{x\\to+\\infty}\\dfrac{2x^2-3x+1}{x^2+5}$ puis en déduire l'asymptote horizontale de la courbe.",
        "loc": "Métropole"
      },
      {
        "y": 2023,
        "s": "Montrer que l'équation $f(x)=0$, avec $f$ continue et strictement croissante sur $[0,2]$, admet une unique solution $\\alpha$, puis en donner un encadrement par dichotomie.",
        "loc": "Centres étrangers"
      },
      {
        "y": 2022,
        "s": "Déterminer $\\lim\\limits_{x\\to+\\infty}\\dfrac{e^{x}}{x^2}$ en utilisant une croissance comparée.",
        "loc": "Métropole"
      }
    ],
    "piege": "Ne JAMAIS conclure directement sur une forme indéterminée : $\\infty-\\infty$ ne vaut pas $0$, et $\\dfrac{\\infty}{\\infty}$ ne vaut pas $1$ ! Il faut transformer l'écriture. Et pour l'UNICITÉ d'une solution avec le TVI, ne pas oublier la stricte monotonie : la continuité seule donne l'existence d'au moins une solution, pas l'unicité.",
    "qcm": [
      {
        "q": "$\\lim\\limits_{x\\to+\\infty}\\dfrac{1}{x^2}$ vaut :",
        "opts": [
          "$+\\infty$",
          "$1$",
          "$0$",
          "n'existe pas"
        ],
        "ok": 2,
        "why": "Au dénominateur $x^2\\to+\\infty$, donc l'inverse tend vers $0$."
      },
      {
        "q": "$\\lim\\limits_{x\\to 0^+}\\dfrac{1}{x}$ vaut :",
        "opts": [
          "$+\\infty$",
          "$-\\infty$",
          "$0$",
          "$1$"
        ],
        "ok": 0,
        "why": "Pour $x>0$ proche de $0$, $\\dfrac1x$ devient très grand : limite $+\\infty$."
      },
      {
        "q": "$\\lim\\limits_{x\\to+\\infty}(3x^2-7x+4)$ vaut :",
        "opts": [
          "$4$",
          "$-\\infty$",
          "$0$",
          "$+\\infty$"
        ],
        "ok": 3,
        "why": "La limite d'un polynôme en $+\\infty$ est celle de son terme dominant $3x^2\\to+\\infty$."
      },
      {
        "q": "$\\lim\\limits_{x\\to+\\infty}\\dfrac{e^{x}}{x}$ vaut :",
        "opts": [
          "$+\\infty$",
          "$0$",
          "$1$",
          "$e$"
        ],
        "ok": 0,
        "why": "Croissance comparée : l'exponentielle l'emporte sur $x$, donc le quotient tend vers $+\\infty$."
      },
      {
        "q": "$\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}$ vaut :",
        "opts": [
          "$1$",
          "$+\\infty$",
          "$0$",
          "$-\\infty$"
        ],
        "ok": 2,
        "why": "Croissance comparée : $x$ l'emporte sur $\\ln x$, le quotient tend vers $0$."
      },
      {
        "q": "$\\lim\\limits_{x\\to-\\infty}x\\,e^{x}$ vaut :",
        "opts": [
          "$-\\infty$",
          "$0$",
          "$+\\infty$",
          "$-1$"
        ],
        "ok": 1,
        "why": "FI $0\\times\\infty$ levée par croissance comparée : $x\\,e^{x}\\to 0$ en $-\\infty$."
      },
      {
        "q": "$\\lim\\limits_{x\\to+\\infty}\\dfrac{2x^2+1}{x^2-3}$ vaut :",
        "opts": [
          "$0$",
          "$+\\infty$",
          "$2$",
          "$\\dfrac12$"
        ],
        "ok": 2,
        "why": "On factorise par $x^2$ : la limite est le rapport des coefficients dominants $\\dfrac21=2$."
      },
      {
        "q": "$\\lim\\limits_{x\\to-\\infty}e^{x}$ vaut :",
        "opts": [
          "$0$",
          "$-\\infty$",
          "$1$",
          "$+\\infty$"
        ],
        "ok": 0,
        "why": "L'exponentielle tend vers $0$ (par valeurs positives) quand $x\\to-\\infty$."
      },
      {
        "q": "La courbe de $f(x)=\\dfrac{1}{x-2}$ admet une asymptote verticale d'équation :",
        "opts": [
          "$y=0$",
          "$x=2$",
          "$x=0$",
          "$y=2$"
        ],
        "ok": 1,
        "why": "En $x=2$ le dénominateur s'annule et $f$ tend vers $\\pm\\infty$ : asymptote verticale $x=2$."
      },
      {
        "q": "Si $\\lim\\limits_{x\\to+\\infty}f(x)=3$, la courbe de $f$ admet :",
        "opts": [
          "une asymptote verticale $x=3$",
          "une asymptote horizontale $y=3$",
          "aucune asymptote",
          "une asymptote oblique"
        ],
        "ok": 1,
        "why": "Une limite finie $\\ell$ en $+\\infty$ donne une asymptote horizontale $y=\\ell$."
      },
      {
        "q": "Une fonction continue sur $[a,b]$ avec $f(a)=-1$ et $f(b)=4$ :",
        "opts": [
          "ne s'annule jamais",
          "s'annule au moins une fois sur $[a,b]$",
          "est forcément croissante",
          "vaut $0$ en $a$"
        ],
        "ok": 1,
        "why": "$0$ est entre $-1$ et $4$ : par le TVI, $f$ s'annule au moins une fois."
      },
      {
        "q": "Pour garantir l'UNICITÉ de la solution de $f(x)=k$ sur $[a,b]$, il faut que $f$ soit continue et :",
        "opts": [
          "positive",
          "dérivable deux fois",
          "strictement monotone",
          "paire"
        ],
        "ok": 2,
        "why": "Le corollaire du TVI exige la stricte monotonie pour l'unicité de la solution."
      }
    ],
    "flash": [
      {
        "front": "$\\lim\\limits_{x\\to+\\infty}\\dfrac{e^{x}}{x}$ ?",
        "back": "$+\\infty$ (croissance comparée)"
      },
      {
        "front": "$\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}$ ?",
        "back": "$0$ (croissance comparée)"
      },
      {
        "front": "$\\lim\\limits_{x\\to-\\infty}x\\,e^{x}$ ?",
        "back": "$0$"
      },
      {
        "front": "$\\lim\\limits_{x\\to 0^+}\\ln x$ ?",
        "back": "$-\\infty$"
      },
      {
        "front": "$\\lim\\limits_{x\\to-\\infty}e^{x}$ ?",
        "back": "$0$"
      },
      {
        "front": "Les 4 formes indéterminées ?",
        "back": "$\\infty-\\infty$,\\ $\\dfrac{\\infty}{\\infty}$,\\ $0\\times\\infty$,\\ $\\dfrac{0}{0}$"
      },
      {
        "front": "$\\lim\\limits_{x\\to 0^+}\\dfrac{1}{x}$ ?",
        "back": "$+\\infty$"
      },
      {
        "front": "Limite d'un polynôme en $+\\infty$ ?",
        "back": "Celle de son terme de plus haut degré"
      },
      {
        "front": "$\\lim\\limits_{x\\to 0}\\dfrac{e^{x}-1}{x}$ ?",
        "back": "$1$"
      },
      {
        "front": "$\\lim\\limits_{x\\to 0^+}x\\ln x$ ?",
        "back": "$0$"
      },
      {
        "front": "Que donne le TVI seul (sans monotonie) ?",
        "back": "L'existence d'au moins une solution"
      },
      {
        "front": "Que dit le corollaire du TVI en plus ?",
        "back": "Avec stricte monotonie : solution unique"
      }
    ],
    "vraifaux": [
      {
        "q": "$\\infty-\\infty=0$.",
        "v": false,
        "why": "C'est une forme indéterminée : le résultat dépend de la fonction, on ne peut pas conclure ainsi."
      },
      {
        "q": "Toute fonction continue sur un intervalle est dérivable sur cet intervalle.",
        "v": false,
        "why": "Faux : la valeur absolue est continue mais non dérivable en $0$. C'est la dérivabilité qui implique la continuité, pas l'inverse."
      },
      {
        "q": "Si $\\lim\\limits_{x\\to+\\infty}f(x)=5$, alors $y=5$ est asymptote horizontale.",
        "v": true,
        "why": "Une limite finie en $+\\infty$ donne bien une asymptote horizontale."
      },
      {
        "q": "Le TVI seul (continuité) suffit à prouver l'unicité d'une solution.",
        "v": false,
        "why": "Le TVI donne l'existence ; il faut la stricte monotonie en plus pour l'unicité."
      },
      {
        "q": "$\\lim\\limits_{x\\to+\\infty}\\dfrac{e^{x}}{x^3}=+\\infty$.",
        "v": true,
        "why": "L'exponentielle l'emporte sur toute puissance de $x$ : croissance comparée."
      },
      {
        "q": "Une fonction polynôme est continue sur $\\mathbb{R}$.",
        "v": true,
        "why": "Tous les polynômes sont continus sur $\\mathbb{R}$ (fonction usuelle)."
      },
      {
        "q": "$\\lim\\limits_{x\\to+\\infty}\\ln x=+\\infty$.",
        "v": true,
        "why": "Le logarithme népérien tend vers $+\\infty$, mais très lentement."
      },
      {
        "q": "Si une fonction est continue et change de signe sur $[a,b]$, elle s'annule sur $[a,b]$.",
        "v": true,
        "why": "C'est une application directe du TVI avec $k=0$."
      },
      {
        "q": "$\\dfrac{0}{0}$ vaut toujours $1$.",
        "v": false,
        "why": "C'est une forme indéterminée : il faut transformer l'expression (factoriser, simplifier) avant de conclure."
      },
      {
        "q": "La dichotomie permet d'obtenir un encadrement de la solution aussi précis qu'on veut.",
        "v": true,
        "why": "À chaque étape l'amplitude est divisée par 2 : on atteint n'importe quelle précision."
      }
    ],
    "qmethode": [
      {
        "q": "Pour calculer $\\lim\\limits_{x\\to+\\infty}\\dfrac{3x^2-x}{2x^2+5}$ (FI $\\frac{\\infty}{\\infty}$), quelle méthode ?",
        "opts": [
          "Factoriser numérateur et dénominateur par $x^2$",
          "Multiplier par la quantité conjuguée",
          "Utiliser une croissance comparée",
          "Calculer la dérivée"
        ],
        "ok": 0,
        "why": "Fonction rationnelle : on factorise par le terme dominant $x^2$, ici la limite vaut $\\dfrac32$."
      },
      {
        "q": "Pour $\\lim\\limits_{x\\to+\\infty}\\big(\\sqrt{x^2+x}-x\\big)$ (FI $\\infty-\\infty$), quelle technique ?",
        "opts": [
          "Croissance comparée",
          "Multiplier par la quantité conjuguée",
          "Théorème des valeurs intermédiaires",
          "Factoriser par $e^x$"
        ],
        "ok": 1,
        "why": "La racine appelle la quantité conjuguée $\\sqrt{x^2+x}+x$ ; la limite vaut $\\dfrac12$."
      },
      {
        "q": "Pour lever $\\lim\\limits_{x\\to+\\infty}\\dfrac{e^{x}}{x^2}$ (FI $\\frac{\\infty}{\\infty}$), quel outil ?",
        "opts": [
          "Quantité conjuguée",
          "Factorisation par $x^2$",
          "Croissance comparée exponentielle/puissance",
          "Dichotomie"
        ],
        "ok": 2,
        "why": "Croissance comparée : l'exponentielle l'emporte sur $x^2$, la limite est $+\\infty$."
      },
      {
        "q": "Pour montrer que $f(x)=2$ a au moins une solution sur $[0,3]$ avec $f$ continue, on utilise :",
        "opts": [
          "Le théorème des valeurs intermédiaires",
          "Les croissances comparées",
          "La quantité conjuguée",
          "La règle des signes"
        ],
        "ok": 0,
        "why": "Continuité + valeur intermédiaire $2$ encadrée par $f(0)$ et $f(3)$ : c'est le TVI."
      },
      {
        "q": "Pour prouver l'UNICITÉ de la solution de $f(x)=0$ sur $[a,b]$, il faut en plus de la continuité :",
        "opts": [
          "Que $f$ soit positive",
          "Que $f$ soit strictement monotone",
          "Que $f$ soit paire",
          "Que $f$ soit bornée"
        ],
        "ok": 1,
        "why": "Le corollaire du TVI exige la stricte monotonie pour garantir l'unicité."
      },
      {
        "q": "Pour trouver l'asymptote verticale de $f(x)=\\dfrac{x+1}{x-3}$, on étudie :",
        "opts": [
          "La limite en $+\\infty$",
          "La dérivée seconde",
          "La limite en $x=3$ (valeur interdite)",
          "La parité"
        ],
        "ok": 2,
        "why": "L'asymptote verticale apparaît là où le dénominateur s'annule : en $x=3$."
      },
      {
        "q": "Pour encadrer numériquement la solution $\\alpha$ de $f(x)=0$ à $10^{-2}$ près, on utilise :",
        "opts": [
          "La dichotomie (ou balayage)",
          "La quantité conjuguée",
          "La croissance comparée",
          "Le calcul de limite"
        ],
        "ok": 0,
        "why": "La dichotomie réduit l'intervalle de moitié à chaque étape jusqu'à la précision voulue."
      },
      {
        "q": "Pour $\\lim\\limits_{x\\to 0}\\dfrac{e^{x}-1}{x}$ (FI $\\frac00$), on reconnaît :",
        "opts": [
          "Une croissance comparée",
          "Le nombre dérivé de $\\exp$ en $0$ (limite égale à $1$)",
          "Une asymptote horizontale",
          "Une quantité conjuguée"
        ],
        "ok": 1,
        "why": "C'est le taux d'accroissement de $\\exp$ en $0$, donc $\\exp'(0)=e^{0}=1$."
      }
    ]
  },
  {
    "id": "derivation",
    "tag": "Analyse",
    "title": "Dérivation et convexité",
    "intro": "Le nombre dérivé, c'est la <em>pente</em> de la courbe en un point. La fonction dérivée résume toutes ces pentes — et c'est l'outil n°1 du bac pour étudier les variations, tracer une tangente, trouver un maximum ou décrire la forme d'une courbe (convexité).",
    "objectifs": [
      "Connaître par cœur le formulaire des dérivées usuelles et des opérations.",
      "Dériver une fonction composée : $e^u$, $\\ln u$, $\\sqrt{u}$, $u^n$, $u(ax+b)$.",
      "Relier le signe de $f'$ au sens de variation de $f$.",
      "Déterminer l'équation d'une tangente.",
      "Utiliser la dérivée seconde $f''$ pour étudier la convexité et trouver les points d'inflexion."
    ],
    "cours": [
      {
        "t": "Nombre dérivé & tangente",
        "d": "Le nombre dérivé $f'(a)$ est le coefficient directeur de la tangente à la courbe $C_f$ au point d'abscisse $a$. L'équation de cette tangente est : $$y = f'(a)\\,(x-a) + f(a).$$ Concrètement, $f'(a)$ mesure la vitesse de variation de $f$ en $a$."
      },
      {
        "t": "Du signe de f′ aux variations",
        "d": "C'est le cœur du chapitre. Sur un intervalle $I$ : si $f'(x) \\geq 0$ alors $f$ est <strong>croissante</strong> ; si $f'(x) \\leq 0$ alors $f$ est <strong>décroissante</strong>. Là où $f'$ s'annule en changeant de signe, $f$ admet un <strong>extremum</strong> (maximum ou minimum) local."
      },
      {
        "t": "Dériver une fonction composée",
        "d": "Cas général : $\\big(v(u(x))\\big)' = u'(x)\\,\\times\\,v'(u(x))$. En pratique, on retient les cas usuels : $(e^u)' = u'e^u$, $(\\ln u)' = \\dfrac{u'}{u}$, $(\\sqrt{u})' = \\dfrac{u'}{2\\sqrt{u}}$, $(u^n)' = n\\,u'\\,u^{n-1}$, et $(u(ax+b))' = a\\,u'(ax+b)$. <strong>On n'oublie jamais le facteur $u'$.</strong>"
      },
      {
        "t": "Dérivée seconde & convexité",
        "d": "On dérive deux fois : $f'' = (f')'$. Le signe de $f''$ donne la <strong>forme</strong> de la courbe : $f'' > 0 \\Rightarrow f$ <strong>convexe</strong> (courbe au-dessus de ses tangentes, en « vallée » $\\smile$) ; $f'' < 0 \\Rightarrow f$ <strong>concave</strong> (en « colline » $\\frown$). Un <strong>point d'inflexion</strong> est un point où $f''$ s'annule <em>en changeant de signe</em> : la courbe y change de convexité."
      }
    ],
    "formulaireTitre": "Dérivées usuelles, opérations & composées",
    "formulaire": [
      [
        "$k$ (constante)",
        "$0$"
      ],
      [
        "$x^n$",
        "$n\\,x^{n-1}$"
      ],
      [
        "$\\dfrac{1}{x}$",
        "$-\\dfrac{1}{x^2}$"
      ],
      [
        "$\\sqrt{x}$",
        "$\\dfrac{1}{2\\sqrt{x}}$"
      ],
      [
        "$e^x$",
        "$e^x$"
      ],
      [
        "$\\ln(x)$",
        "$\\dfrac{1}{x}$"
      ],
      [
        "$\\sin(x)$",
        "$\\cos(x)$"
      ],
      [
        "$\\cos(x)$",
        "$-\\sin(x)$"
      ],
      [
        "$u + v$",
        "$u' + v'$"
      ],
      [
        "$k\\,u$",
        "$k\\,u'$"
      ],
      [
        "$u\\,v$",
        "$u'v + uv'$"
      ],
      [
        "$\\dfrac{u}{v}$",
        "$\\dfrac{u'v - uv'}{v^2}$"
      ],
      [
        "$e^u$",
        "$u'\\,e^u$"
      ],
      [
        "$\\ln(u)$",
        "$\\dfrac{u'}{u}$"
      ],
      [
        "$\\sqrt{u}$",
        "$\\dfrac{u'}{2\\sqrt{u}}$"
      ],
      [
        "$u^n$",
        "$n\\,u'\\,u^{n-1}$"
      ]
    ],
    "methodes": [
      {
        "t": "Montrer que f est croissante sur I",
        "etapes": [
          "Calculer $f'(x)$.",
          "Étudier le signe de $f'$ (factoriser ; $e^{\\dots}>0$ et $\\sqrt{\\dots}>0$ toujours).",
          "Conclure : $f' \\geq 0$ sur $I \\Rightarrow f$ croissante sur $I$."
        ]
      },
      {
        "t": "Équation de la tangente en a",
        "etapes": [
          "Calculer $f(a)$ et $f'(a)$.",
          "Remplacer dans $y = f'(a)(x-a) + f(a)$."
        ]
      },
      {
        "t": "Étudier la convexité",
        "etapes": [
          "Calculer $f'$ puis $f''$.",
          "Étudier le signe de $f''$.",
          "$f''>0 \\Rightarrow$ convexe ; $f''<0 \\Rightarrow$ concave ; changement de signe $\\Rightarrow$ point d'inflexion."
        ]
      }
    ],
    "annales": [
      {
        "y": 2025,
        "s": "Étude d'une fonction avec $\\ln$ : limites, $f'(x)=\\dfrac{1-\\ln x}{x^2}$, signe, variations, maximum.",
        "loc": "Métropole"
      },
      {
        "y": 2024,
        "s": "Fonction avec $e^x$ : montrer $g'(x)=(2x-1)e^{-x}$, en déduire le sens de variation.",
        "loc": "Métropole"
      },
      {
        "y": 2024,
        "s": "Convexité & point d'inflexion : calculer $f''$, étudier le signe, position courbe/tangente.",
        "loc": "Centres étrangers"
      }
    ],
    "piege": "L'erreur n°1 du bac : croire que $(uv)' = u'v'$ — c'est FAUX, c'est $u'v + uv'$. Erreur n°2 : oublier le facteur $u'$ (ou le $a$) en dérivant une composée comme $e^{3x}$ ou $\\ln(x^2+1)$. Vérifie toujours ces deux points avant de rendre.",
    "qcm": [
      {
        "q": "Dérivée de $f(x)=x^5$ ?",
        "opts": [
          "$5x^4$",
          "$5x^6$",
          "$x^4$",
          "$4x^5$"
        ],
        "ok": 0,
        "why": "$(x^n)' = n\\,x^{n-1}$, donc $(x^5)' = 5x^4$."
      },
      {
        "q": "Dérivée de $f(x)=\\dfrac{1}{x}$ ?",
        "opts": [
          "$-\\dfrac{1}{x^2}$",
          "$\\dfrac{1}{x^2}$",
          "$-\\dfrac{1}{2x}$",
          "$\\ln(x)$"
        ],
        "ok": 0,
        "why": "$\\left(\\dfrac{1}{x}\\right)' = -\\dfrac{1}{x^2}$ sur $\\mathbb{R}^*$. C'est une formule à connaître par cœur."
      },
      {
        "q": "Dérivée de $f(x)=\\sqrt{x}$ ?",
        "opts": [
          "$\\dfrac{1}{2\\sqrt{x}}$",
          "$\\dfrac{1}{\\sqrt{x}}$",
          "$2\\sqrt{x}$",
          "$\\dfrac{1}{2}\\sqrt{x}$"
        ],
        "ok": 0,
        "why": "$(\\sqrt{x})' = \\dfrac{1}{2\\sqrt{x}}$, dérivable seulement sur $]0\\,;+\\infty[$ (pas en 0)."
      },
      {
        "q": "Dérivée de $f(x)=\\ln(x)$ ?",
        "opts": [
          "$\\dfrac{1}{x}$",
          "$\\dfrac{1}{\\ln(x)}$",
          "$x\\ln(x)$",
          "$-\\dfrac{1}{x^2}$"
        ],
        "ok": 0,
        "why": "$(\\ln x)' = \\dfrac{1}{x}$ sur $]0\\,;+\\infty[$."
      },
      {
        "q": "Dérivée de $f(x)=e^x$ ?",
        "opts": [
          "$e^x$",
          "$x\\,e^{x-1}$",
          "$\\dfrac{e^x}{x}$",
          "$e$"
        ],
        "ok": 0,
        "why": "L'exponentielle est sa propre dérivée : $(e^x)' = e^x$."
      },
      {
        "q": "Dérivée de $f(x)=\\cos(x)$ ?",
        "opts": [
          "$-\\sin(x)$",
          "$\\sin(x)$",
          "$-\\cos(x)$",
          "$\\tan(x)$"
        ],
        "ok": 0,
        "why": "$(\\cos x)' = -\\sin x$ — attention au signe « moins ». $(\\sin x)' = \\cos x$ (sans moins)."
      },
      {
        "q": "Dérivée de $f(x)=3x^2 - 5x + 7$ ?",
        "opts": [
          "$6x - 5$",
          "$6x - 5 + 7$",
          "$3x - 5$",
          "$6x^2 - 5$"
        ],
        "ok": 0,
        "why": "On dérive terme à terme : $(3x^2)'=6x$, $(-5x)'=-5$, $(7)'=0$. La constante disparaît."
      },
      {
        "q": "Dérivée de $f(x)=x\\,e^x \\quad (\\text{produit } u\\cdot v)$ ?",
        "opts": [
          "$(x+1)\\,e^x$",
          "$e^x$",
          "$x\\,e^x$",
          "$e^x + x$"
        ],
        "ok": 0,
        "why": "$(uv)'=u'v+uv'$ avec $u=x,\\ v=e^x$ : $1\\cdot e^x + x\\cdot e^x = (x+1)e^x$. Surtout pas $u'v'$ !"
      },
      {
        "q": "Dérivée de $f(x)=\\dfrac{x}{x+1} \\quad (\\text{quotient})$ ?",
        "opts": [
          "$\\dfrac{1}{(x+1)^2}$",
          "$\\dfrac{1}{x+1}$",
          "$\\dfrac{2x+1}{(x+1)^2}$",
          "$1$"
        ],
        "ok": 0,
        "why": "$\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}=\\dfrac{1\\cdot(x+1)-x\\cdot1}{(x+1)^2}=\\dfrac{1}{(x+1)^2}$."
      },
      {
        "q": "Dérivée de $f(x)=e^{3x}$ ?",
        "opts": [
          "$3e^{3x}$",
          "$e^{3x}$",
          "$3x\\,e^{3x}$",
          "$e^{3}$"
        ],
        "ok": 0,
        "why": "$(e^{ax})'=a\\,e^{ax}$. Le facteur $a=3$ est l'erreur n°1 quand on l'oublie."
      },
      {
        "q": "Dérivée de $f(x)=(2x+1)^4 \\quad (\\text{composée } u^n)$ ?",
        "opts": [
          "$8(2x+1)^3$",
          "$4(2x+1)^3$",
          "$(2x+1)^3$",
          "$8(2x+1)^4$"
        ],
        "ok": 0,
        "why": "$(u^n)'=n\\,u'\\,u^{n-1}$ avec $u=2x+1,\\ u'=2$ : $4\\cdot2\\cdot(2x+1)^3 = 8(2x+1)^3$."
      },
      {
        "q": "Dérivée de $f(x)=\\ln(x^2+1) \\quad (\\text{composée } \\ln u)$ ?",
        "opts": [
          "$\\dfrac{2x}{x^2+1}$",
          "$\\dfrac{1}{x^2+1}$",
          "$\\dfrac{1}{2x}$",
          "$\\dfrac{2x}{(x^2+1)^2}$"
        ],
        "ok": 0,
        "why": "$(\\ln u)'=\\dfrac{u'}{u}$ avec $u=x^2+1,\\ u'=2x$. On n'oublie pas le $u'$ au numérateur."
      },
      {
        "q": "Dérivée de $f(x)=e^{x^2} \\quad (\\text{composée } e^u)$ ?",
        "opts": [
          "$2x\\,e^{x^2}$",
          "$e^{x^2}$",
          "$e^{2x}$",
          "$x^2 e^{x^2-1}$"
        ],
        "ok": 0,
        "why": "$(e^u)'=u'\\,e^u$ avec $u=x^2,\\ u'=2x$ : $2x\\,e^{x^2}$."
      },
      {
        "q": "Dérivée de $f(x)=\\sqrt{3x+2} \\quad (\\text{composée } \\sqrt{u})$ ?",
        "opts": [
          "$\\dfrac{3}{2\\sqrt{3x+2}}$",
          "$\\dfrac{1}{2\\sqrt{3x+2}}$",
          "$\\dfrac{3}{\\sqrt{3x+2}}$",
          "$\\dfrac{1}{2\\sqrt{3x}}$"
        ],
        "ok": 0,
        "why": "$(\\sqrt{u})'=\\dfrac{u'}{2\\sqrt{u}}$ avec $u=3x+2,\\ u'=3$."
      },
      {
        "q": "Dérivée de $f(x)=\\dfrac{\\ln x}{x}$ ?",
        "opts": [
          "$\\dfrac{1-\\ln x}{x^2}$",
          "$\\dfrac{1}{x^2}$",
          "$\\dfrac{\\ln x - 1}{x^2}$",
          "$\\dfrac{1+\\ln x}{x^2}$"
        ],
        "ok": 0,
        "why": "Quotient avec $u=\\ln x\\ (u'=\\tfrac1x)$, $v=x\\ (v'=1)$ : $\\dfrac{\\frac1x\\cdot x-\\ln x\\cdot1}{x^2}=\\dfrac{1-\\ln x}{x^2}$. (Tombé au bac Métropole 2024/2025.)"
      }
    ],
    "flash": [
      {
        "front": "Dérivée de $x^n$ ?",
        "back": "$n\\,x^{n-1}$"
      },
      {
        "front": "Dérivée de $\\dfrac{1}{x}$ ?",
        "back": "$-\\dfrac{1}{x^2}$"
      },
      {
        "front": "Dérivée de $\\sqrt{x}$ ?",
        "back": "$\\dfrac{1}{2\\sqrt{x}}$"
      },
      {
        "front": "Dérivée de $\\ln(x)$ ?",
        "back": "$\\dfrac{1}{x}$"
      },
      {
        "front": "Dérivée de $e^x$ ?",
        "back": "$e^x$"
      },
      {
        "front": "Dérivée de $\\sin(x)$ ?",
        "back": "$\\cos(x)$"
      },
      {
        "front": "Dérivée de $\\cos(x)$ ?",
        "back": "$-\\sin(x)$"
      },
      {
        "front": "Dérivée d'un produit $(uv)'$ ?",
        "back": "$u'v + uv'$"
      },
      {
        "front": "Dérivée d'un quotient $\\left(\\dfrac{u}{v}\\right)'$ ?",
        "back": "$\\dfrac{u'v - uv'}{v^2}$"
      },
      {
        "front": "Dérivée de $e^u$ ?",
        "back": "$u'\\,e^u$"
      },
      {
        "front": "Dérivée de $\\ln(u)$ ?",
        "back": "$\\dfrac{u'}{u}$"
      },
      {
        "front": "Dérivée de $\\sqrt{u}$ ?",
        "back": "$\\dfrac{u'}{2\\sqrt{u}}$"
      },
      {
        "front": "Dérivée de $u^n$ ?",
        "back": "$n\\,u'\\,u^{n-1}$"
      },
      {
        "front": "Dérivée de $e^{ax+b}$ ?",
        "back": "$a\\,e^{ax+b}$"
      },
      {
        "front": "Équation de la tangente en $a$ ?",
        "back": "$y = f'(a)(x-a) + f(a)$"
      }
    ],
    "vraifaux": [
      {
        "q": "$(uv)' = u'\\,v'$",
        "v": false,
        "why": "Faux ! La bonne formule est $u'v + uv'$. C'est l'erreur la plus fréquente au bac."
      },
      {
        "q": "Si $f' \\geq 0$ sur un intervalle $I$, alors $f$ est croissante sur $I$.",
        "v": true,
        "why": "Vrai. Le signe de $f'$ donne le sens de variation de $f$."
      },
      {
        "q": "L'équation de la tangente à $C_f$ en $a$ est $y = f'(a)(x-a) + f(a)$.",
        "v": true,
        "why": "Vrai. $f'(a)$ est le coefficient directeur (la pente) de la tangente."
      },
      {
        "q": "$(\\cos x)' = \\sin x$",
        "v": false,
        "why": "Faux : $(\\cos x)' = -\\sin x$. Attention au signe moins."
      },
      {
        "q": "$\\sqrt{x}$ est dérivable sur $[0\\,;+\\infty[$, y compris en $0$.",
        "v": false,
        "why": "Faux : $\\sqrt{x}$ n'est dérivable que sur $]0\\,;+\\infty[$. En $0$ la tangente est verticale."
      },
      {
        "q": "Si $f'' > 0$ sur $I$, alors $f$ est convexe sur $I$.",
        "v": true,
        "why": "Vrai. $f''>0 \\Rightarrow$ convexe (courbe au-dessus de ses tangentes). $f''<0 \\Rightarrow$ concave."
      },
      {
        "q": "Si $f''(x_0) = 0$, alors $C_f$ admet forcément un point d'inflexion en $x_0$.",
        "v": false,
        "why": "Faux : il faut que $f''$ change de signe en $x_0$. Ex. $x^4$ : $f''(0)=0$ mais pas d'inflexion."
      },
      {
        "q": "Pour dériver $f(x)=e^{5x}$, on obtient $5e^{5x}$.",
        "v": true,
        "why": "Vrai : $(e^{ax})' = a\\,e^{ax}$, ici $a=5$."
      },
      {
        "q": "Une fonction dérivable sur $I$ y est nécessairement continue.",
        "v": true,
        "why": "Vrai : dérivable $\\Rightarrow$ continue. La réciproque est fausse (ex. $|x|$ en 0)."
      },
      {
        "q": "Quand $f$ est convexe, sa courbe est au-dessus de toutes ses tangentes.",
        "v": true,
        "why": "Vrai. Convexe = au-dessus des tangentes ; concave = en dessous."
      }
    ],
    "qmethode": [
      {
        "q": "On te demande de montrer que $f$ est croissante sur $I$. Que fais-tu ?",
        "opts": [
          "J'étudie le signe de $f'(x)$ sur $I$",
          "Je calcule $f(0)$",
          "Je calcule la limite de $f$ en $+\\infty$",
          "Je résous $f(x)=0$"
        ],
        "ok": 0,
        "why": "Croissance ⇔ signe de la dérivée : si $f'\\geq 0$ sur $I$, alors $f$ est croissante sur $I$."
      },
      {
        "q": "On te demande l'équation de la tangente à $C_f$ au point d'abscisse $a$.",
        "opts": [
          "J'applique $y = f'(a)(x-a) + f(a)$",
          "Je calcule $f''(a)$",
          "J'étudie la convexité",
          "Je cherche les limites de $f$"
        ],
        "ok": 0,
        "why": "La tangente en $a$ : on calcule $f(a)$ et $f'(a)$, puis $y = f'(a)(x-a)+f(a)$."
      },
      {
        "q": "On te demande d'étudier la convexité de $f$.",
        "opts": [
          "J'étudie le signe de la dérivée seconde $f''$",
          "J'étudie le signe de $f$",
          "J'étudie le signe de $f'$",
          "Je calcule $f(0)$ et $f(1)$"
        ],
        "ok": 0,
        "why": "Convexité ⇔ signe de $f''$ : $f''>0 \\Rightarrow$ convexe, $f''<0 \\Rightarrow$ concave."
      },
      {
        "q": "On veut trouver un point d'inflexion de $C_f$.",
        "opts": [
          "Je cherche où $f''$ s'annule EN CHANGEANT de signe",
          "Je cherche où $f'$ s'annule",
          "Je cherche où $f$ s'annule",
          "Je cherche le maximum de $f$"
        ],
        "ok": 0,
        "why": "Point d'inflexion = la courbe change de convexité : $f''$ s'annule et change de signe."
      },
      {
        "q": "On cherche le maximum d'une fonction $f$ dérivable sur $[a\\,;b]$ (problème d'optimisation).",
        "opts": [
          "Je dresse le tableau de variations à partir du signe de $f'$",
          "Je calcule directement $f''$",
          "Je trace la courbe au hasard",
          "Je remplace $x$ par 0"
        ],
        "ok": 0,
        "why": "Optimiser = étudier les variations : dériver, signe de $f'$, tableau, puis lire l'extremum (sans oublier les bornes)."
      },
      {
        "q": "Tu dois dériver $f(x) = (3x^2+1)^5$.",
        "opts": [
          "J'utilise $(u^n)' = n\\,u'\\,u^{n-1}$",
          "J'utilise $(uv)' = u'v + uv'$",
          "Je développe entièrement la puissance 5",
          "J'utilise $(\\ln u)' = u'/u$"
        ],
        "ok": 0,
        "why": "C'est une composée puissance : $u=3x^2+1$, donc $f'=5\\cdot 6x\\cdot(3x^2+1)^4 = 30x(3x^2+1)^4$."
      },
      {
        "q": "Tu dois dériver $f(x) = \\dfrac{2x+1}{x^2+3}$.",
        "opts": [
          "J'utilise la formule du quotient $\\dfrac{u'v-uv'}{v^2}$",
          "Je dérive le haut et le bas séparément puis je divise",
          "J'utilise $(e^u)' = u'e^u$",
          "Je multiplie les deux dérivées"
        ],
        "ok": 0,
        "why": "Un quotient se dérive avec $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v-uv'}{v^2}$ — jamais en dérivant haut et bas séparément."
      },
      {
        "q": "Pour montrer qu'une équation $f(x)=k$ a une unique solution sur $I$, quel théorème ?",
        "opts": [
          "Le théorème des valeurs intermédiaires (avec $f$ continue et strictement monotone)",
          "La formule de la tangente",
          "La règle de dérivation d'un produit",
          "Le calcul de $f''$"
        ],
        "ok": 0,
        "why": "TVI + stricte monotonie (corollaire) : $f$ continue et strictement monotone sur $I$, $k$ entre les bornes ⇒ une unique solution."
      }
    ]
  },
  {
    "id": "exponentielle",
    "tag": "Analyse",
    "title": "Fonction exponentielle",
    "intro": "La fonction exponentielle, c'est LA fonction qui est égale à sa propre dérivée. Définie comme l'unique fonction $f$ telle que $f'=f$ et $f(0)=1$, elle est strictement positive, strictement croissante, et transforme les sommes en produits ($e^{a+b}=e^a e^b$). C'est l'un des chapitres les plus rentables du bac : on la croise partout (probabilités, équations différentielles, suites). Maîtrise les propriétés algébriques, la dérivée de $e^u$ et les croissances comparées, et tu sécurises beaucoup de points.",
    "objectifs": [
      "Connaître la définition de l'exponentielle ($f'=f$, $f(0)=1$) et savoir que $e^x>0$ pour tout réel $x$",
      "Manipuler sans erreur les propriétés algébriques : $e^{a+b}$, $e^{-a}$, $e^{a-b}$, $(e^a)^n$",
      "Dériver $e^x$ et surtout $e^{u(x)}$ (ne jamais oublier le facteur $u'$)",
      "Déterminer le sens de variation et les limites en $+\\infty$ et $-\\infty$",
      "Utiliser les croissances comparées pour lever les indéterminations",
      "Résoudre équations et inéquations faisant intervenir l'exponentielle"
    ],
    "cours": [
      {
        "t": "Définition et existence",
        "d": "Il existe une unique fonction $f$ dérivable sur $\\mathbb{R}$ telle que $f'=f$ et $f(0)=1$. On l'appelle fonction exponentielle, notée $\\exp$, et on pose $\\exp(x)=e^x$. Le nombre $e=\\exp(1)\\approx 2{,}718$. Conséquence immédiate : $(e^x)'=e^x$ et $e^0=1$."
      },
      {
        "t": "Signe : strictement positive",
        "d": "Pour tout réel $x$, $e^x>0$. En particulier $e^x$ ne s'annule jamais, et pour tous réels $a,b$ : $e^a=e^b \\iff a=b$ et $e^a<e^b \\iff a<b$ (l'exponentielle est strictement croissante donc on garde le sens de l'inégalité)."
      },
      {
        "t": "Propriétés algébriques",
        "d": "Pour tous réels $a$ et $b$ et tout entier $n$ : $e^{a+b}=e^a\\,e^b$ ; $e^{-a}=\\dfrac{1}{e^a}$ ; $e^{a-b}=\\dfrac{e^a}{e^b}$ ; $\\left(e^{a}\\right)^{n}=e^{na}$. C'est la même logique que les puissances : l'exponentielle transforme les sommes en produits."
      },
      {
        "t": "Dérivée et variations",
        "d": "$(e^x)'=e^x$. Comme $e^x>0$, la fonction est strictement croissante sur $\\mathbb{R}$. Pour une fonction composée : si $u$ est dérivable, alors $(e^{u})'=u'\\,e^{u}$. Le facteur $u'$ est obligatoire : c'est la dérivée de la fonction du dessus."
      },
      {
        "t": "Limites et croissances comparées",
        "d": "$\\lim\\limits_{x\\to+\\infty}e^x=+\\infty$ et $\\lim\\limits_{x\\to-\\infty}e^x=0^+$ (asymptote horizontale $y=0$). L'exponentielle l'emporte sur toute puissance : $\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}{x}=+\\infty$ et $\\lim\\limits_{x\\to-\\infty}xe^x=0$. Enfin, le taux de variation en $0$ : $\\lim\\limits_{x\\to0}\\dfrac{e^x-1}{x}=1$ (c'est le nombre dérivé de $\\exp$ en $0$)."
      }
    ],
    "formulaireTitre": "Formulaire exponentielle",
    "formulaire": [
      [
        "$e^0$",
        "$1$"
      ],
      [
        "$e^1$",
        "$e\\approx 2{,}718$"
      ],
      [
        "$e^{a+b}$",
        "$e^a\\,e^b$"
      ],
      [
        "$e^{-a}$",
        "$\\dfrac{1}{e^a}$"
      ],
      [
        "$e^{a-b}$",
        "$\\dfrac{e^a}{e^b}$"
      ],
      [
        "$(e^a)^n$",
        "$e^{na}$"
      ],
      [
        "$(e^x)'$",
        "$e^x$"
      ],
      [
        "$(e^u)'$",
        "$u'\\,e^u$"
      ],
      [
        "$\\lim\\limits_{x\\to+\\infty}e^x$",
        "$+\\infty$"
      ],
      [
        "$\\lim\\limits_{x\\to-\\infty}e^x$",
        "$0$"
      ],
      [
        "$\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}{x}$",
        "$+\\infty$"
      ],
      [
        "$\\lim\\limits_{x\\to0}\\dfrac{e^x-1}{x}$",
        "$1$"
      ]
    ],
    "methodes": [
      {
        "t": "Dériver une fonction du type $e^{u(x)}$",
        "etapes": [
          "Identifier l'exposant $u(x)$ (ce qui est « au-dessus » du $e$).",
          "Calculer $u'(x)$.",
          "Appliquer $(e^u)'=u'\\,e^u$ : on recopie $e^u$ et on multiplie par $u'$.",
          "Exemple : $f(x)=e^{3x^2}$, $u=3x^2$, $u'=6x$, donc $f'(x)=6x\\,e^{3x^2}$."
        ]
      },
      {
        "t": "Résoudre une équation avec exponentielle",
        "etapes": [
          "Ramener à une égalité de la forme $e^{A}=e^{B}$ (ou $e^A=k$ avec $k>0$).",
          "Utiliser que $e^A=e^B \\iff A=B$ (l'exponentielle est strictement croissante donc injective).",
          "Si $e^A=k$ avec $k>0$, alors $A=\\ln k$.",
          "Attention : une équation du type $e^A=k$ avec $k\\le 0$ n'a aucune solution (car $e^x>0$)."
        ]
      },
      {
        "t": "Lever une indétermination avec les croissances comparées",
        "etapes": [
          "Repérer la forme indéterminée (souvent $\\dfrac{+\\infty}{+\\infty}$ ou $0\\times(-\\infty)$).",
          "Faire apparaître un quotient $\\dfrac{e^x}{x}$ (ou $\\dfrac{e^x}{x^n}$) ou un produit $x\\,e^x$.",
          "Appliquer la croissance comparée : $\\dfrac{e^x}{x}\\to+\\infty$ en $+\\infty$, $x\\,e^x\\to0$ en $-\\infty$.",
          "Conclure sur la limite cherchée."
        ]
      },
      {
        "t": "Étudier une inéquation avec exponentielle",
        "etapes": [
          "Se ramener à $e^A < e^B$ (ou $\\le$, $>$, $\\ge$).",
          "Comme $\\exp$ est strictement croissante, l'inégalité se conserve : $e^A<e^B \\iff A<B$.",
          "Résoudre l'inéquation sur les exposants.",
          "Vérifier qu'aucune contrainte de domaine n'est oubliée."
        ]
      }
    ],
    "annales": [
      {
        "y": 2024,
        "s": "Étude d'une fonction $f$ définie par $f(x)=(x+1)e^{-x}$ : variations, limites en $\\pm\\infty$ (via croissances comparées) et tracé.",
        "loc": "Métropole"
      },
      {
        "y": 2023,
        "s": "Fonction $f(x)=x e^{-x}$ et suite associée : dérivée, signe, limite $\\lim\\limits_{x\\to+\\infty}xe^{-x}=0$.",
        "loc": "Métropole"
      },
      {
        "y": 2022,
        "s": "Modélisation avec $g(x)=e^{0{,}5x}$ et résolution d'équations/inéquations exponentielles dans un contexte d'évolution.",
        "loc": "Centres étrangers"
      }
    ],
    "piege": "Le piège n°1 : écrire $e^{a+b}=e^a+e^b$. C'EST FAUX. L'exponentielle transforme la somme en PRODUIT : $e^{a+b}=e^a\\times e^b$. Piège n°2 : dériver $e^{u}$ en oubliant le $u'$. La dérivée de $e^{3x}$ n'est pas $e^{3x}$ mais $3e^{3x}$. Pense toujours : $(e^u)'=u'e^u$.",
    "qcm": [
      {
        "q": "Quelle est la dérivée de $f(x)=e^{5x}$ ?",
        "opts": [
          "$e^{5x}$",
          "$5e^{5x}$",
          "$5x\\,e^{5x}$",
          "$e^{5}$"
        ],
        "ok": 1,
        "why": "$(e^u)'=u'e^u$ avec $u=5x$, $u'=5$, donc $f'(x)=5e^{5x}$."
      },
      {
        "q": "Pour tout réel $x$, on a :",
        "opts": [
          "$e^x$ peut être négatif",
          "$e^x>0$",
          "$e^x\\ge 0$ avec $e^x=0$ possible",
          "$e^x \\le 1$"
        ],
        "ok": 1,
        "why": "L'exponentielle est strictement positive : $e^x>0$ pour tout $x$, elle ne s'annule jamais."
      },
      {
        "q": "Que vaut $e^{a+b}$ ?",
        "opts": [
          "$e^a+e^b$",
          "$e^a\\,e^b$",
          "$e^{ab}$",
          "$\\dfrac{e^a}{e^b}$"
        ],
        "ok": 1,
        "why": "L'exponentielle transforme une somme en produit : $e^{a+b}=e^a\\,e^b$."
      },
      {
        "q": "Combien vaut $\\lim\\limits_{x\\to-\\infty}e^x$ ?",
        "opts": [
          "$-\\infty$",
          "$1$",
          "$0$",
          "$+\\infty$"
        ],
        "ok": 2,
        "why": "En $-\\infty$, $e^x$ tend vers $0$ (par valeurs positives) : l'axe des abscisses est asymptote."
      },
      {
        "q": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}{x}$ ?",
        "opts": [
          "$0$",
          "$1$",
          "$+\\infty$",
          "$e$"
        ],
        "ok": 2,
        "why": "Croissance comparée : l'exponentielle l'emporte sur $x$, donc le quotient tend vers $+\\infty$."
      },
      {
        "q": "On simplifie $e^{-3}$ :",
        "opts": [
          "$\\dfrac{1}{e^3}$",
          "$-e^3$",
          "$e^3$",
          "$-\\dfrac{1}{e^3}$"
        ],
        "ok": 0,
        "why": "$e^{-a}=\\dfrac{1}{e^a}$, donc $e^{-3}=\\dfrac{1}{e^3}$. Le résultat reste positif."
      },
      {
        "q": "L'équation $e^x=2$ a pour solution :",
        "opts": [
          "$x=2$",
          "$x=e^2$",
          "$x=\\ln 2$",
          "aucune solution"
        ],
        "ok": 2,
        "why": "$e^x=k$ avec $k>0$ équivaut à $x=\\ln k$, donc ici $x=\\ln 2$."
      },
      {
        "q": "L'équation $e^x=-4$ admet :",
        "opts": [
          "la solution $x=\\ln 4$",
          "la solution $x=-\\ln 4$",
          "deux solutions",
          "aucune solution"
        ],
        "ok": 3,
        "why": "Comme $e^x>0$ pour tout $x$, $e^x$ ne peut jamais valoir $-4$ : pas de solution."
      },
      {
        "q": "Quelle est la dérivée de $f(x)=e^{x^2}$ ?",
        "opts": [
          "$e^{x^2}$",
          "$2x\\,e^{x^2}$",
          "$x^2 e^{x^2}$",
          "$2e^{x^2}$"
        ],
        "ok": 1,
        "why": "Avec $u=x^2$, $u'=2x$, donc $(e^{u})'=u'e^{u}=2x\\,e^{x^2}$."
      },
      {
        "q": "Que vaut $\\lim\\limits_{x\\to0}\\dfrac{e^x-1}{x}$ ?",
        "opts": [
          "$0$",
          "$1$",
          "$e$",
          "$+\\infty$"
        ],
        "ok": 1,
        "why": "C'est le nombre dérivé de $\\exp$ en $0$, c'est-à-dire $\\exp'(0)=e^0=1$."
      },
      {
        "q": "On simplifie $\\dfrac{e^{5}}{e^{2}}$ :",
        "opts": [
          "$e^{10}$",
          "$e^{2{,}5}$",
          "$e^{3}$",
          "$e^{7}$"
        ],
        "ok": 2,
        "why": "$\\dfrac{e^a}{e^b}=e^{a-b}$, donc $\\dfrac{e^5}{e^2}=e^{5-2}=e^3$."
      },
      {
        "q": "Le sens de variation de $x\\mapsto e^x$ sur $\\mathbb{R}$ est :",
        "opts": [
          "strictement décroissant",
          "constant",
          "strictement croissant",
          "croissant puis décroissant"
        ],
        "ok": 2,
        "why": "$(e^x)'=e^x>0$ pour tout $x$, donc l'exponentielle est strictement croissante sur $\\mathbb{R}$."
      }
    ],
    "flash": [
      {
        "front": "Définition de l'exponentielle ?",
        "back": "Unique fonction $f$ telle que $f'=f$ et $f(0)=1$."
      },
      {
        "front": "$(e^x)'\\ =\\ ?$",
        "back": "$e^x$"
      },
      {
        "front": "$(e^u)'\\ =\\ ?$",
        "back": "$u'\\,e^u$"
      },
      {
        "front": "Signe de $e^x$ ?",
        "back": "$e^x>0$ pour tout réel $x$ (ne s'annule jamais)."
      },
      {
        "front": "$e^{a+b}\\ =\\ ?$",
        "back": "$e^a\\,e^b$"
      },
      {
        "front": "$e^{-a}\\ =\\ ?$",
        "back": "$\\dfrac{1}{e^a}$"
      },
      {
        "front": "$e^{a-b}\\ =\\ ?$",
        "back": "$\\dfrac{e^a}{e^b}$"
      },
      {
        "front": "$\\lim\\limits_{x\\to+\\infty}e^x\\ =\\ ?$",
        "back": "$+\\infty$"
      },
      {
        "front": "$\\lim\\limits_{x\\to-\\infty}e^x\\ =\\ ?$",
        "back": "$0$"
      },
      {
        "front": "$\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}{x}\\ =\\ ?$",
        "back": "$+\\infty$ (croissance comparée)"
      },
      {
        "front": "$\\lim\\limits_{x\\to-\\infty}x\\,e^x\\ =\\ ?$",
        "back": "$0$ (croissance comparée)"
      },
      {
        "front": "$\\lim\\limits_{x\\to0}\\dfrac{e^x-1}{x}\\ =\\ ?$",
        "back": "$1$"
      }
    ],
    "vraifaux": [
      {
        "q": "Pour tous réels $a,b$ : $e^{a+b}=e^a+e^b$.",
        "v": false,
        "why": "Faux : l'exponentielle transforme la somme en produit, $e^{a+b}=e^a\\,e^b$."
      },
      {
        "q": "$e^x>0$ pour tout réel $x$.",
        "v": true,
        "why": "Vrai : l'exponentielle est strictement positive sur $\\mathbb{R}$."
      },
      {
        "q": "La dérivée de $e^{2x}$ est $e^{2x}$.",
        "v": false,
        "why": "Faux : il manque le $u'$. La dérivée est $2e^{2x}$."
      },
      {
        "q": "L'exponentielle est strictement croissante sur $\\mathbb{R}$.",
        "v": true,
        "why": "Vrai : $(e^x)'=e^x>0$, donc strictement croissante."
      },
      {
        "q": "L'équation $e^x=0$ possède une solution.",
        "v": false,
        "why": "Faux : $e^x>0$ pour tout $x$, donc $e^x$ ne vaut jamais $0$."
      },
      {
        "q": "$\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}{x}=+\\infty$.",
        "v": true,
        "why": "Vrai : par croissance comparée, l'exponentielle l'emporte sur $x$."
      },
      {
        "q": "On a $e^{-a}=-e^a$.",
        "v": false,
        "why": "Faux : $e^{-a}=\\dfrac{1}{e^a}$, qui est positif, alors que $-e^a$ est négatif."
      },
      {
        "q": "$e^a=e^b$ équivaut à $a=b$.",
        "v": true,
        "why": "Vrai : l'exponentielle est strictement croissante donc injective."
      },
      {
        "q": "$\\lim\\limits_{x\\to-\\infty}e^x=-\\infty$.",
        "v": false,
        "why": "Faux : en $-\\infty$ l'exponentielle tend vers $0$ (par valeurs positives), pas vers $-\\infty$."
      },
      {
        "q": "Pour tout entier $n$ : $(e^a)^n=e^{na}$.",
        "v": true,
        "why": "Vrai : c'est la règle des puissances appliquée à l'exponentielle."
      }
    ],
    "qmethode": [
      {
        "q": "Pour calculer la dérivée de $f(x)=e^{x^2+1}$, quelle méthode ?",
        "opts": [
          "Appliquer $(e^u)'=u'e^u$ avec $u=x^2+1$",
          "Recopier $e^{x^2+1}$ tel quel",
          "Multiplier par $\\ln$",
          "Utiliser $e^{a+b}=e^a e^b$"
        ],
        "ok": 0,
        "why": "C'est une composée : $u=x^2+1$, $u'=2x$, donc $f'(x)=2x\\,e^{x^2+1}$."
      },
      {
        "q": "Pour résoudre $e^{2x}=e^{x+3}$, on doit :",
        "opts": [
          "Diviser par $e$",
          "Égaler les exposants : $2x=x+3$",
          "Prendre le carré",
          "Dire qu'il n'y a pas de solution"
        ],
        "ok": 1,
        "why": "$\\exp$ est injective : $e^A=e^B \\iff A=B$, donc $2x=x+3$, soit $x=3$."
      },
      {
        "q": "Pour lever l'indétermination de $\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}{x^2}$, quel outil ?",
        "opts": [
          "La factorisation par $x$",
          "Les croissances comparées",
          "Le théorème des gendarmes seul",
          "La dérivation"
        ],
        "ok": 1,
        "why": "Par croissance comparée, l'exponentielle l'emporte sur toute puissance : la limite vaut $+\\infty$."
      },
      {
        "q": "Pour montrer que $e^{x}\\le e^{2}$ revient à montrer que :",
        "opts": [
          "$x\\le 2$",
          "$x\\ge 2$",
          "$x=2$",
          "$x\\le 0$"
        ],
        "ok": 0,
        "why": "$\\exp$ est strictement croissante, donc l'inégalité se conserve : $e^x\\le e^2 \\iff x\\le 2$."
      },
      {
        "q": "Pour simplifier $\\dfrac{e^{3x}\\times e^{x}}{e^{2x}}$, on utilise :",
        "opts": [
          "Les propriétés algébriques de l'exponentielle",
          "La dérivée",
          "Une limite",
          "Le logarithme"
        ],
        "ok": 0,
        "why": "$\\dfrac{e^{3x}e^{x}}{e^{2x}}=e^{3x+x-2x}=e^{2x}$, en utilisant $e^a e^b=e^{a+b}$ et $\\dfrac{e^a}{e^b}=e^{a-b}$."
      },
      {
        "q": "Pour étudier le signe de $f'(x)=(1-x)e^{x}$, quelle remarque clé ?",
        "opts": [
          "$e^x$ change le signe",
          "$e^x>0$ donc le signe ne dépend que de $1-x$",
          "Il faut résoudre $e^x=0$",
          "Le signe est toujours positif"
        ],
        "ok": 1,
        "why": "Comme $e^x>0$ pour tout $x$, le signe de $f'$ est celui de $1-x$ : positif si $x<1$, négatif si $x>1$."
      },
      {
        "q": "Pour calculer $\\lim\\limits_{x\\to-\\infty}x\\,e^{x}$ (forme $-\\infty\\times 0$), on :",
        "opts": [
          "Conclut directement $-\\infty$",
          "Utilise la croissance comparée $\\lim\\limits_{x\\to-\\infty}xe^x=0$",
          "Factorise par $e^x$",
          "Dérive l'expression"
        ],
        "ok": 1,
        "why": "C'est une croissance comparée du cours : $\\lim\\limits_{x\\to-\\infty}x\\,e^x=0$."
      },
      {
        "q": "Pour reconnaître le nombre dérivé caché dans $\\lim\\limits_{x\\to0}\\dfrac{e^x-1}{x}$, on identifie :",
        "opts": [
          "Le taux de variation de $\\exp$ en $0$, qui vaut $\\exp'(0)=1$",
          "Une asymptote",
          "Une croissance comparée",
          "Une forme $\\frac{0}{0}$ sans solution"
        ],
        "ok": 0,
        "why": "C'est $\\dfrac{\\exp(x)-\\exp(0)}{x-0}$, le taux de variation en $0$, dont la limite est $\\exp'(0)=e^0=1$."
      }
    ]
  },
  {
    "id": "logarithme",
    "tag": "Analyse",
    "title": "Logarithme népérien",
    "intro": "La fonction logarithme népérien $\\ln$ est la fonction réciproque de l'exponentielle : elle transforme les produits en sommes, ce qui en fait l'outil idéal pour résoudre des équations où l'inconnue est en exposant (croissance, demi-vie, suites...). Attention permanente au domaine : $\\ln x$ n'existe que pour $x>0$.",
    "objectifs": [
      "Connaître la définition de $\\ln$ comme réciproque de $\\exp$ et les relations $\\ln(e^x)=x$, $e^{\\ln x}=x$",
      "Maîtriser les propriétés algébriques (produit, quotient, puissance, racine)",
      "Dériver $\\ln u$ et étudier le sens de variation d'une fonction faisant intervenir $\\ln$",
      "Connaître les limites aux bornes et les croissances comparées",
      "Résoudre équations et inéquations avec $\\ln$ en pensant systématiquement au domaine de validité"
    ],
    "cours": [
      {
        "t": "Définition et premières valeurs",
        "d": "La fonction $\\ln$ est définie sur $]0;+\\infty[$ comme la réciproque de la fonction exponentielle. Ainsi, pour tout réel $x$, $\\ln(e^x)=x$, et pour tout $x>0$, $e^{\\ln x}=x$. On a $\\ln 1=0$ et $\\ln e=1$. Conséquence : $\\ln x = y \\iff x = e^y$ (avec $x>0$)."
      },
      {
        "t": "Propriétés algébriques (fonctionnelles)",
        "d": "Pour tous réels $a>0$ et $b>0$ et tout entier $n$ : $\\ln(ab)=\\ln a+\\ln b$ (relation fondamentale), $\\ln\\dfrac{a}{b}=\\ln a-\\ln b$, $\\ln\\dfrac{1}{b}=-\\ln b$, $\\ln(a^n)=n\\ln a$, et $\\ln\\sqrt{a}=\\dfrac12\\ln a$. C'est cette transformation produit $\\to$ somme qui fait toute la puissance du logarithme."
      },
      {
        "t": "Dérivée",
        "d": "La fonction $\\ln$ est dérivable sur $]0;+\\infty[$ et $(\\ln x)'=\\dfrac{1}{x}$. Par composition, si $u$ est dérivable et strictement positive sur un intervalle $I$, alors $\\ln u$ est dérivable sur $I$ et $(\\ln u)'=\\dfrac{u'}{u}$. Ne jamais oublier le $u'$ au numérateur."
      },
      {
        "t": "Sens de variation et signe",
        "d": "Comme $(\\ln x)'=\\dfrac{1}{x}>0$ sur $]0;+\\infty[$, la fonction $\\ln$ est strictement croissante sur $]0;+\\infty[$. Elle est donc bijective, ce qui justifie : pour $a>0$ et $b>0$, $\\ln a=\\ln b\\iff a=b$ et $\\ln a<\\ln b\\iff a<b$. De plus $\\ln x<0$ sur $]0;1[$, $\\ln x=0$ en $x=1$, et $\\ln x>0$ sur $]1;+\\infty[$."
      },
      {
        "t": "Limites et croissances comparées",
        "d": "Aux bornes : $\\lim\\limits_{x\\to+\\infty}\\ln x=+\\infty$ et $\\lim\\limits_{x\\to0^+}\\ln x=-\\infty$ (l'axe des ordonnées est asymptote verticale). Croissances comparées : $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}=0$ (et plus généralement $\\dfrac{\\ln x}{x^n}\\to0$) et $\\lim\\limits_{x\\to0^+}x\\ln x=0$. Enfin la limite usuelle (nombre dérivé en 1) : $\\lim\\limits_{x\\to0}\\dfrac{\\ln(1+x)}{x}=1$."
      }
    ],
    "formulaireTitre": "Formulaire — Logarithme népérien",
    "formulaire": [
      [
        "$\\ln(e^x)=x$",
        "$e^{\\ln x}=x\\ (x>0)$"
      ],
      [
        "$\\ln 1=0$",
        "$\\ln e=1$"
      ],
      [
        "$\\ln(ab)=\\ln a+\\ln b$",
        "$\\ln\\dfrac{a}{b}=\\ln a-\\ln b$"
      ],
      [
        "$\\ln(a^n)=n\\ln a$",
        "$\\ln\\sqrt{a}=\\dfrac12\\ln a$"
      ],
      [
        "$(\\ln x)'=\\dfrac{1}{x}$",
        "$(\\ln u)'=\\dfrac{u'}{u}$"
      ],
      [
        "$\\lim\\limits_{x\\to+\\infty}\\ln x=+\\infty$",
        "$\\lim\\limits_{x\\to0^+}\\ln x=-\\infty$"
      ],
      [
        "$\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}=0$",
        "$\\lim\\limits_{x\\to0^+}x\\ln x=0$"
      ],
      [
        "$\\lim\\limits_{x\\to0}\\dfrac{\\ln(1+x)}{x}=1$",
        "$\\ln a=\\ln b\\iff a=b\\ (a,b>0)$"
      ]
    ],
    "methodes": [
      {
        "t": "Résoudre une équation avec $\\ln$",
        "etapes": [
          "Déterminer le domaine de validité : tout ce qui est sous un $\\ln$ doit être strictement positif",
          "Utiliser les propriétés pour regrouper en un seul $\\ln$ de chaque côté",
          "Appliquer $\\ln a=\\ln b\\iff a=b$ (ou passer à l'exponentielle si besoin)",
          "Résoudre l'équation obtenue puis garder uniquement les solutions appartenant au domaine"
        ]
      },
      {
        "t": "Résoudre une inéquation avec $\\ln$",
        "etapes": [
          "Déterminer le domaine (arguments des $\\ln$ strictement positifs)",
          "Se ramener à $\\ln A < \\ln B$ ou $\\ln A > \\ln B$",
          "Comme $\\ln$ est strictement croissante, $\\ln A<\\ln B\\iff A<B$ (le sens est conservé)",
          "Croiser l'ensemble obtenu avec le domaine de validité pour conclure"
        ]
      },
      {
        "t": "Étudier une fonction contenant $\\ln$",
        "etapes": [
          "Préciser l'ensemble de définition (argument du $\\ln$ strictement positif)",
          "Calculer la dérivée avec $(\\ln u)'=\\dfrac{u'}{u}$ sans oublier le $u'$",
          "Étudier le signe de la dérivée pour dresser le tableau de variations",
          "Calculer les limites aux bornes (utiliser les croissances comparées en cas de forme indéterminée)"
        ]
      }
    ],
    "annales": [
      {
        "y": 2024,
        "s": "Soit $f$ définie sur $]0;+\\infty[$ par $f(x)=\\dfrac{\\ln x}{x}$. Étudier ses variations et déterminer $\\lim\\limits_{x\\to+\\infty}f(x)$.",
        "loc": "Métropole"
      },
      {
        "y": 2023,
        "s": "Résoudre dans $]0;+\\infty[$ l'inéquation $\\ln(2x-1)+\\ln(x)\\le \\ln(x+2)$ après avoir précisé le domaine.",
        "loc": "Métropole"
      },
      {
        "y": 2022,
        "s": "On considère $g(x)=x-\\ln x$ sur $]0;+\\infty[$. Montrer que $g$ admet un minimum et en déduire que pour tout $x>0$, $\\ln x\\le x-1$.",
        "loc": "Centres étrangers"
      }
    ],
    "piege": "Trois pièges classiques : (1) $\\ln(a+b)\\ne\\ln a+\\ln b$ — le logarithme transforme les PRODUITS en sommes, pas les sommes ; (2) oublier la condition d'existence $x>0$ et garder des solutions hors domaine ; (3) oublier le $u'$ dans $(\\ln u)'=\\dfrac{u'}{u}$ (écrire $\\dfrac1u$ tout seul est faux).",
    "qcm": [
      {
        "q": "Quel est l'ensemble de définition de $\\ln$ ?",
        "opts": [
          "$\\mathbb{R}$",
          "$[0;+\\infty[$",
          "$]0;+\\infty[$",
          "$\\mathbb{R}^*$"
        ],
        "ok": 2,
        "why": "$\\ln$ n'est définie que pour les réels strictement positifs : $]0;+\\infty[$."
      },
      {
        "q": "Que vaut $\\ln(e^3)$ ?",
        "opts": [
          "$3$",
          "$e^3$",
          "$\\ln 3$",
          "$\\dfrac{1}{3}$"
        ],
        "ok": 0,
        "why": "$\\ln(e^x)=x$ pour tout réel $x$, donc $\\ln(e^3)=3$."
      },
      {
        "q": "Pour $a>0$ et $b>0$, $\\ln\\dfrac{a}{b}$ est égal à :",
        "opts": [
          "$\\dfrac{\\ln a}{\\ln b}$",
          "$\\ln a-\\ln b$",
          "$\\ln a+\\ln b$",
          "$\\ln(a-b)$"
        ],
        "ok": 1,
        "why": "Propriété du quotient : $\\ln\\dfrac{a}{b}=\\ln a-\\ln b$."
      },
      {
        "q": "La dérivée de $\\ln x$ sur $]0;+\\infty[$ est :",
        "opts": [
          "$\\ln x$",
          "$x\\ln x$",
          "$\\dfrac{1}{x}$",
          "$-\\dfrac{1}{x^2}$"
        ],
        "ok": 2,
        "why": "$(\\ln x)'=\\dfrac{1}{x}$."
      },
      {
        "q": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}$ ?",
        "opts": [
          "$+\\infty$",
          "$1$",
          "$0$",
          "$-\\infty$"
        ],
        "ok": 2,
        "why": "Croissance comparée : $x$ l'emporte sur $\\ln x$, donc la limite vaut $0$."
      },
      {
        "q": "La dérivée de $f(x)=\\ln(x^2+1)$ est :",
        "opts": [
          "$\\dfrac{2x}{x^2+1}$",
          "$\\dfrac{1}{x^2+1}$",
          "$\\dfrac{1}{2x}$",
          "$2x\\ln(x^2+1)$"
        ],
        "ok": 0,
        "why": "Avec $u=x^2+1$, $u'=2x$, donc $(\\ln u)'=\\dfrac{u'}{u}=\\dfrac{2x}{x^2+1}$."
      },
      {
        "q": "Que vaut $\\lim\\limits_{x\\to0^+}\\ln x$ ?",
        "opts": [
          "$0$",
          "$1$",
          "$+\\infty$",
          "$-\\infty$"
        ],
        "ok": 3,
        "why": "En $0^+$, $\\ln x\\to-\\infty$ (asymptote verticale en $x=0$)."
      },
      {
        "q": "$\\ln(a^5)$ est égal à (pour $a>0$) :",
        "opts": [
          "$(\\ln a)^5$",
          "$5\\ln a$",
          "$5+\\ln a$",
          "$\\dfrac{\\ln a}{5}$"
        ],
        "ok": 1,
        "why": "$\\ln(a^n)=n\\ln a$, donc $\\ln(a^5)=5\\ln a$."
      },
      {
        "q": "L'équation $\\ln x = 2$ a pour solution :",
        "opts": [
          "$x=2$",
          "$x=e^2$",
          "$x=\\ln 2$",
          "$x=\\dfrac{1}{2}$"
        ],
        "ok": 1,
        "why": "$\\ln x=2\\iff x=e^2$ (en repassant à l'exponentielle)."
      },
      {
        "q": "Que vaut $\\lim\\limits_{x\\to0}\\dfrac{\\ln(1+x)}{x}$ ?",
        "opts": [
          "$0$",
          "$+\\infty$",
          "$1$",
          "$e$"
        ],
        "ok": 2,
        "why": "C'est le nombre dérivé de $\\ln(1+x)$ en $0$, qui vaut $1$."
      },
      {
        "q": "La fonction $\\ln$ est :",
        "opts": [
          "strictement décroissante sur $]0;+\\infty[$",
          "strictement croissante sur $]0;+\\infty[$",
          "constante",
          "croissante puis décroissante"
        ],
        "ok": 1,
        "why": "Sa dérivée $\\dfrac1x$ est positive sur $]0;+\\infty[$ : $\\ln$ est strictement croissante."
      },
      {
        "q": "Pour quels $x$ a-t-on $\\ln x>0$ ?",
        "opts": [
          "$x>1$",
          "$x>0$",
          "$x>e$",
          "$0<x<1$"
        ],
        "ok": 0,
        "why": "$\\ln$ s'annule en $1$ et est croissante, donc $\\ln x>0\\iff x>1$."
      }
    ],
    "flash": [
      {
        "front": "Dérivée de $\\ln x$ ?",
        "back": "$\\dfrac{1}{x}$"
      },
      {
        "front": "Dérivée de $\\ln u$ ?",
        "back": "$\\dfrac{u'}{u}$"
      },
      {
        "front": "$\\ln 1 = ?$",
        "back": "$0$"
      },
      {
        "front": "$\\ln e = ?$",
        "back": "$1$"
      },
      {
        "front": "$\\ln(ab) = ?$",
        "back": "$\\ln a+\\ln b$"
      },
      {
        "front": "$\\ln\\dfrac{a}{b} = ?$",
        "back": "$\\ln a-\\ln b$"
      },
      {
        "front": "$\\ln(a^n) = ?$",
        "back": "$n\\ln a$"
      },
      {
        "front": "$\\lim\\limits_{x\\to+\\infty}\\ln x = ?$",
        "back": "$+\\infty$"
      },
      {
        "front": "$\\lim\\limits_{x\\to0^+}\\ln x = ?$",
        "back": "$-\\infty$"
      },
      {
        "front": "$\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x} = ?$",
        "back": "$0$"
      },
      {
        "front": "$\\lim\\limits_{x\\to0^+}x\\ln x = ?$",
        "back": "$0$"
      },
      {
        "front": "Ensemble de définition de $\\ln$ ?",
        "back": "$]0;+\\infty[$"
      }
    ],
    "vraifaux": [
      {
        "q": "$\\ln(a+b)=\\ln a+\\ln b$",
        "v": false,
        "why": "Faux : $\\ln$ transforme les produits en sommes, pas les sommes. C'est $\\ln(ab)=\\ln a+\\ln b$."
      },
      {
        "q": "$\\ln$ est définie sur $]0;+\\infty[$",
        "v": true,
        "why": "Vrai : l'argument d'un logarithme doit être strictement positif."
      },
      {
        "q": "$(\\ln u)'=\\dfrac{1}{u}$",
        "v": false,
        "why": "Faux : il manque le $u'$. La bonne formule est $(\\ln u)'=\\dfrac{u'}{u}$."
      },
      {
        "q": "$\\ln$ est strictement croissante sur son ensemble de définition",
        "v": true,
        "why": "Vrai : sa dérivée $\\dfrac1x$ est strictement positive sur $]0;+\\infty[$."
      },
      {
        "q": "$\\ln(a^n)=(\\ln a)^n$",
        "v": false,
        "why": "Faux : $\\ln(a^n)=n\\ln a$, et non $(\\ln a)^n$."
      },
      {
        "q": "$\\lim\\limits_{x\\to0^+}x\\ln x=0$",
        "v": true,
        "why": "Vrai : c'est une croissance comparée, $x$ l'emporte sur $\\ln x$ en $0^+$."
      },
      {
        "q": "Pour $a>0$ et $b>0$, $\\ln a=\\ln b$ équivaut à $a=b$",
        "v": true,
        "why": "Vrai : $\\ln$ étant strictement croissante (donc injective), elle est bijective sur $]0;+\\infty[$."
      },
      {
        "q": "$\\ln x<0$ pour tout $x$ compris entre $0$ et $1$",
        "v": true,
        "why": "Vrai : $\\ln$ s'annule en $1$ et est croissante, donc négative sur $]0;1[$."
      },
      {
        "q": "$e^{\\ln x}=x$ pour tout réel $x$",
        "v": false,
        "why": "Faux : l'égalité $e^{\\ln x}=x$ n'a de sens que pour $x>0$ (sinon $\\ln x$ n'existe pas)."
      },
      {
        "q": "L'axe des ordonnées est asymptote à la courbe de $\\ln$",
        "v": true,
        "why": "Vrai : $\\lim\\limits_{x\\to0^+}\\ln x=-\\infty$, donc la droite $x=0$ est asymptote verticale."
      }
    ],
    "qmethode": [
      {
        "q": "Pour résoudre l'équation $\\ln(x-3)=\\ln(2x+1)$, quelle est la PREMIÈRE chose à faire ?",
        "opts": [
          "Déterminer le domaine : $x-3>0$ et $2x+1>0$",
          "Passer directement à $x-3=2x+1$",
          "Diviser par $\\ln$",
          "Appliquer l'exponentielle des deux côtés"
        ],
        "ok": 0,
        "why": "On commence toujours par le domaine de validité, sinon on risque de garder des solutions interdites."
      },
      {
        "q": "Pour dériver $f(x)=\\ln(3x+2)$, quelle formule appliquer ?",
        "opts": [
          "$(\\ln u)'=\\dfrac{u'}{u}$ avec $u=3x+2$",
          "$(\\ln x)'=\\dfrac1x$ directement",
          "la dérivée d'un produit",
          "$(\\ln u)'=u'\\ln u$"
        ],
        "ok": 0,
        "why": "C'est une composée : $u=3x+2$, $u'=3$, donc $f'(x)=\\dfrac{3}{3x+2}$."
      },
      {
        "q": "Pour lever l'indétermination de $\\lim\\limits_{x\\to+\\infty}(x-\\ln x)$, quelle méthode ?",
        "opts": [
          "Factoriser par $x$ : $x\\left(1-\\dfrac{\\ln x}{x}\\right)$",
          "Remplacer $\\ln x$ par $x$",
          "Dériver l'expression",
          "Conclure que la limite est $0$"
        ],
        "ok": 0,
        "why": "On factorise par le terme dominant $x$ et on utilise $\\dfrac{\\ln x}{x}\\to0$, d'où une limite $+\\infty$."
      },
      {
        "q": "Pour résoudre $\\ln x+\\ln(x-2)=\\ln 3$, quelle transformation utiliser à gauche ?",
        "opts": [
          "$\\ln x+\\ln(x-2)=\\ln\\big(x(x-2)\\big)$",
          "$\\ln x+\\ln(x-2)=\\ln(2x-2)$",
          "$\\ln x+\\ln(x-2)=\\ln(x)\\times\\ln(x-2)$",
          "On ne peut pas regrouper"
        ],
        "ok": 0,
        "why": "On utilise $\\ln a+\\ln b=\\ln(ab)$ pour obtenir un seul logarithme, puis on identifie les arguments."
      },
      {
        "q": "Pour résoudre $e^x=5$, quelle méthode est la plus directe ?",
        "opts": [
          "Appliquer $\\ln$ aux deux membres : $x=\\ln 5$",
          "Diviser par $e$",
          "Élever au carré",
          "Dériver"
        ],
        "ok": 0,
        "why": "Puisque $\\ln(e^x)=x$, appliquer $\\ln$ donne directement $x=\\ln 5$."
      },
      {
        "q": "Pour étudier le signe de $\\ln x-1$, on cherche d'abord quand cette expression s'annule. Quelle équation résoudre ?",
        "opts": [
          "$\\ln x=1$, soit $x=e$",
          "$\\ln x=0$, soit $x=1$",
          "$x=1$",
          "$\\ln x=e$"
        ],
        "ok": 0,
        "why": "$\\ln x-1=0\\iff\\ln x=1\\iff x=e$. L'expression est négative avant $e$, positive après."
      },
      {
        "q": "Une inéquation $\\ln A<\\ln B$ (avec $A,B>0$) se simplifie en :",
        "opts": [
          "$A<B$ (sens conservé)",
          "$A>B$ (sens inversé)",
          "$A=B$",
          "on ne peut rien dire"
        ],
        "ok": 0,
        "why": "$\\ln$ étant strictement croissante, l'inégalité est conservée : $\\ln A<\\ln B\\iff A<B$."
      },
      {
        "q": "Pour résoudre l'équation $2^n>1000$ d'inconnue entière $n$ (problème de seuil), quelle est la bonne approche ?",
        "opts": [
          "Appliquer $\\ln$ : $n\\ln 2>\\ln 1000$, puis $n>\\dfrac{\\ln 1000}{\\ln 2}$",
          "Diviser par $2$",
          "Élever au carré",
          "Calculer $\\ln(2^n)$ comme $(\\ln 2)^n$"
        ],
        "ok": 0,
        "why": "Le logarithme fait descendre l'exposant : $\\ln(2^n)=n\\ln 2$, ce qui ramène l'inconnue à un coefficient."
      }
    ]
  },
  {
    "id": "trigonometrie",
    "tag": "Analyse",
    "title": "Fonctions trigonométriques",
    "intro": "On enroule la droite des réels autour du cercle trigonométrique : à chaque réel $x$ correspond un point dont l'abscisse est $\\cos x$ et l'ordonnée $\\sin x$. Tout l'enjeu du chapitre, c'est de manier les valeurs remarquables, les angles associés (symétries du cercle), et de dériver $\\sin$ et $\\cos$, y compris composés avec $ax+b$. Le piège n°1 du bac : travailler en radians, jamais en degrés.",
    "objectifs": [
      "Placer un réel sur le cercle trigonométrique et convertir degrés $\\leftrightarrow$ radians",
      "Connaître par cœur les valeurs de $\\cos$ et $\\sin$ en $0,\\ \\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{4},\\ \\dfrac{\\pi}{3},\\ \\dfrac{\\pi}{2}$",
      "Utiliser parité, périodicité $2\\pi$ et formules des angles associés",
      "Dériver les fonctions $\\sin$, $\\cos$ et leurs composées $\\sin(ax+b)$, $\\cos(ax+b)$",
      "Résoudre des équations $\\cos x=\\cos a$ et $\\sin x=\\sin a$",
      "Étudier et représenter une fonction trigonométrique simple"
    ],
    "cours": [
      {
        "t": "Cercle trigonométrique et radians",
        "d": "Le cercle trigonométrique est le cercle de centre $O$ et de rayon $1$, orienté dans le sens direct (sens inverse des aiguilles d'une montre). Le radian est l'unité d'angle telle qu'un angle plat $180^\\circ$ vaut $\\pi$ rad. La conversion se fait par proportionnalité : $\\dfrac{\\text{angle en degrés}}{180}=\\dfrac{\\text{angle en radians}}{\\pi}$. Ainsi $90^\\circ=\\dfrac{\\pi}{2}$, $60^\\circ=\\dfrac{\\pi}{3}$, $45^\\circ=\\dfrac{\\pi}{4}$, $30^\\circ=\\dfrac{\\pi}{6}$, et un tour complet $360^\\circ=2\\pi$."
      },
      {
        "t": "Enroulement et définition de cos et sin",
        "d": "On enroule la droite réelle (graduée) autour du cercle : à chaque réel $x$ on associe un unique point $M(x)$ du cercle. Par définition, $\\cos x$ est l'abscisse de $M(x)$ et $\\sin x$ son ordonnée. Comme $M(x)$ est sur le cercle de rayon $1$, on a pour tout réel $x$ l'identité fondamentale $\\cos^2 x+\\sin^2 x=1$, et $-1\\le\\cos x\\le 1$, $-1\\le\\sin x\\le 1$."
      },
      {
        "t": "Parité et périodicité",
        "d": "Pour tout réel $x$ : $\\cos$ est paire, $\\cos(-x)=\\cos x$, et $\\sin$ est impaire, $\\sin(-x)=-\\sin x$. Les deux fonctions sont périodiques de période $2\\pi$ : $\\cos(x+2\\pi)=\\cos x$ et $\\sin(x+2\\pi)=\\sin x$. Conséquence graphique : la courbe de $\\cos$ est symétrique par rapport à l'axe des ordonnées, celle de $\\sin$ par rapport à l'origine."
      },
      {
        "t": "Angles associés",
        "d": "En exploitant les symétries du cercle, on relie les angles $-x$, $\\pi-x$, $\\pi+x$ et $\\dfrac{\\pi}{2}-x$ à $x$. Par exemple $\\cos(\\pi-x)=-\\cos x$ et $\\sin(\\pi-x)=\\sin x$ (symétrie par rapport à l'axe des ordonnées) ; $\\cos(\\pi+x)=-\\cos x$ et $\\sin(\\pi+x)=-\\sin x$ (symétrie centrale). Ces formules permettent de ramener tout calcul aux valeurs remarquables du premier quadrant."
      },
      {
        "t": "Dérivées",
        "d": "Les fonctions $\\sin$ et $\\cos$ sont dérivables sur $\\mathbb{R}$ et $(\\sin x)'=\\cos x$, $(\\cos x)'=-\\sin x$ (attention au signe « moins » !). Pour une composée, la règle $(u(ax+b))'=a\\,u'(ax+b)$ donne $(\\sin(ax+b))'=a\\cos(ax+b)$ et $(\\cos(ax+b))'=-a\\sin(ax+b)$. Ne jamais oublier le facteur $a$."
      }
    ],
    "formulaireTitre": "Valeurs remarquables et formules à connaître",
    "formulaire": [
      [
        "$\\cos 0=1$",
        "$\\sin 0=0$"
      ],
      [
        "$\\cos\\dfrac{\\pi}{6}=\\dfrac{\\sqrt{3}}{2}$",
        "$\\sin\\dfrac{\\pi}{6}=\\dfrac{1}{2}$"
      ],
      [
        "$\\cos\\dfrac{\\pi}{4}=\\dfrac{\\sqrt{2}}{2}$",
        "$\\sin\\dfrac{\\pi}{4}=\\dfrac{\\sqrt{2}}{2}$"
      ],
      [
        "$\\cos\\dfrac{\\pi}{3}=\\dfrac{1}{2}$",
        "$\\sin\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{3}}{2}$"
      ],
      [
        "$\\cos\\dfrac{\\pi}{2}=0$",
        "$\\sin\\dfrac{\\pi}{2}=1$"
      ],
      [
        "$\\cos^2 x+\\sin^2 x=1$",
        "$\\cos(-x)=\\cos x,\\ \\sin(-x)=-\\sin x$"
      ],
      [
        "$\\cos(\\pi-x)=-\\cos x$",
        "$\\sin(\\pi-x)=\\sin x$"
      ],
      [
        "$\\cos(\\pi+x)=-\\cos x$",
        "$\\sin(\\pi+x)=-\\sin x$"
      ],
      [
        "$(\\sin x)'=\\cos x$",
        "$(\\cos x)'=-\\sin x$"
      ],
      [
        "$(\\sin(ax+b))'=a\\cos(ax+b)$",
        "$(\\cos(ax+b))'=-a\\sin(ax+b)$"
      ]
    ],
    "methodes": [
      {
        "t": "Calculer un cosinus/sinus d'un angle « pas remarquable » via les angles associés",
        "etapes": [
          "Repérer un angle remarquable proche : écrire l'angle sous la forme $\\pi-a$, $\\pi+a$, $-a$ ou $\\dfrac{\\pi}{2}-a$ avec $a\\in\\{0,\\frac{\\pi}{6},\\frac{\\pi}{4},\\frac{\\pi}{3},\\frac{\\pi}{2}\\}$",
          "Appliquer la formule d'angle associé correspondante (attention aux signes selon le quadrant)",
          "Remplacer par la valeur remarquable de $\\cos a$ ou $\\sin a$",
          "Exemple : $\\cos\\dfrac{2\\pi}{3}=\\cos\\left(\\pi-\\dfrac{\\pi}{3}\\right)=-\\cos\\dfrac{\\pi}{3}=-\\dfrac{1}{2}$"
        ]
      },
      {
        "t": "Dériver une fonction trigonométrique composée",
        "etapes": [
          "Identifier la forme : est-ce $\\sin(ax+b)$, $\\cos(ax+b)$, ou un produit/quotient ?",
          "Pour $\\sin(ax+b)$ : la dérivée est $a\\cos(ax+b)$ ; pour $\\cos(ax+b)$ : $-a\\sin(ax+b)$",
          "Ne pas oublier le facteur $a$ et, pour $\\cos$, le signe « moins »",
          "Exemple : $f(x)=\\cos(3x+1)\\Rightarrow f'(x)=-3\\sin(3x+1)$"
        ]
      },
      {
        "t": "Résoudre $\\cos x=\\cos a$ ou $\\sin x=\\sin a$ sur $\\mathbb{R}$",
        "etapes": [
          "Pour $\\cos x=\\cos a$ : les solutions sont $x=a+2k\\pi$ ou $x=-a+2k\\pi$, $k\\in\\mathbb{Z}$",
          "Pour $\\sin x=\\sin a$ : les solutions sont $x=a+2k\\pi$ ou $x=\\pi-a+2k\\pi$, $k\\in\\mathbb{Z}$",
          "Si on cherche les solutions dans un intervalle précis (ex. $[0;2\\pi[$), faire varier $k$ et ne garder que celles qui appartiennent à l'intervalle",
          "Exemple : $\\cos x=\\dfrac{1}{2}=\\cos\\dfrac{\\pi}{3}$ donne $x=\\dfrac{\\pi}{3}+2k\\pi$ ou $x=-\\dfrac{\\pi}{3}+2k\\pi$"
        ]
      }
    ],
    "annales": [
      {
        "y": 2024,
        "s": "Soit $f(x)=\\cos(2x)$ sur $[0;\\pi]$. Calculer $f'(x)$ et étudier les variations de $f$.",
        "loc": "Métropole"
      },
      {
        "y": 2023,
        "s": "Résoudre dans $[0;2\\pi[$ l'équation $2\\cos^2 x-1=0$ (on pourra utiliser $\\cos^2 x+\\sin^2 x=1$).",
        "loc": "Centres étrangers"
      },
      {
        "y": 2022,
        "s": "Soit $g(x)=\\sin\\left(3x-\\dfrac{\\pi}{4}\\right)$. Déterminer $g'(x)$ puis une équation de la tangente en $0$.",
        "loc": "Métropole"
      }
    ],
    "piege": "Le piège classique : confondre degrés et radians (toujours travailler en radians, et régler la calculatrice sur RAD). Deux autres erreurs sanctionnées : oublier le signe « moins » dans $(\\cos x)'=-\\sin x$, et oublier le facteur $a$ dans la dérivée d'une composée, par exemple écrire $(\\sin(2x))'=\\cos(2x)$ au lieu de $2\\cos(2x)$.",
    "qcm": [
      {
        "q": "Combien vaut $\\cos\\dfrac{\\pi}{4}$ ?",
        "opts": [
          "$\\dfrac{1}{2}$",
          "$\\dfrac{\\sqrt{2}}{2}$",
          "$\\dfrac{\\sqrt{3}}{2}$",
          "$1$"
        ],
        "ok": 1,
        "why": "$\\cos\\dfrac{\\pi}{4}=\\sin\\dfrac{\\pi}{4}=\\dfrac{\\sqrt{2}}{2}$ (angle de $45^\\circ$)."
      },
      {
        "q": "Combien vaut $\\sin\\dfrac{\\pi}{6}$ ?",
        "opts": [
          "$\\dfrac{1}{2}$",
          "$\\dfrac{\\sqrt{2}}{2}$",
          "$\\dfrac{\\sqrt{3}}{2}$",
          "$0$"
        ],
        "ok": 0,
        "why": "$\\sin\\dfrac{\\pi}{6}=\\dfrac{1}{2}$ ($30^\\circ$)."
      },
      {
        "q": "Quelle est la dérivée de $f(x)=\\cos x$ ?",
        "opts": [
          "$\\cos x$",
          "$\\sin x$",
          "$-\\sin x$",
          "$-\\cos x$"
        ],
        "ok": 2,
        "why": "$(\\cos x)'=-\\sin x$ : attention au signe « moins »."
      },
      {
        "q": "Quelle est la dérivée de $f(x)=\\sin(5x)$ ?",
        "opts": [
          "$\\cos(5x)$",
          "$5\\cos(5x)$",
          "$-5\\cos(5x)$",
          "$5\\sin(5x)$"
        ],
        "ok": 1,
        "why": "$(\\sin(ax+b))'=a\\cos(ax+b)$, donc ici $5\\cos(5x)$."
      },
      {
        "q": "Combien vaut $\\cos\\dfrac{\\pi}{3}$ ?",
        "opts": [
          "$\\dfrac{\\sqrt{3}}{2}$",
          "$\\dfrac{\\sqrt{2}}{2}$",
          "$\\dfrac{1}{2}$",
          "$0$"
        ],
        "ok": 2,
        "why": "$\\cos\\dfrac{\\pi}{3}=\\dfrac{1}{2}$ et $\\sin\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{3}}{2}$."
      },
      {
        "q": "Que vaut $\\sin(\\pi+x)$ ?",
        "opts": [
          "$\\sin x$",
          "$-\\sin x$",
          "$\\cos x$",
          "$-\\cos x$"
        ],
        "ok": 1,
        "why": "Par symétrie centrale, $\\sin(\\pi+x)=-\\sin x$ (et $\\cos(\\pi+x)=-\\cos x$)."
      },
      {
        "q": "À combien de radians correspond un angle de $90^\\circ$ ?",
        "opts": [
          "$\\dfrac{\\pi}{4}$",
          "$\\dfrac{\\pi}{3}$",
          "$\\pi$",
          "$\\dfrac{\\pi}{2}$"
        ],
        "ok": 3,
        "why": "$180^\\circ=\\pi$ rad, donc $90^\\circ=\\dfrac{\\pi}{2}$."
      },
      {
        "q": "La fonction $\\cos$ est :",
        "opts": [
          "paire",
          "impaire",
          "ni paire ni impaire",
          "croissante sur $\\mathbb{R}$"
        ],
        "ok": 0,
        "why": "$\\cos(-x)=\\cos x$ : $\\cos$ est paire (et $\\sin$ est impaire)."
      },
      {
        "q": "Quelle est la dérivée de $f(x)=\\cos(2x+1)$ ?",
        "opts": [
          "$-2\\sin(2x+1)$",
          "$2\\sin(2x+1)$",
          "$-\\sin(2x+1)$",
          "$2\\cos(2x+1)$"
        ],
        "ok": 0,
        "why": "$(\\cos(ax+b))'=-a\\sin(ax+b)$, soit $-2\\sin(2x+1)$."
      },
      {
        "q": "Sachant $\\cos x=\\dfrac{3}{5}$, que vaut $\\sin^2 x$ ?",
        "opts": [
          "$\\dfrac{3}{5}$",
          "$\\dfrac{16}{25}$",
          "$\\dfrac{9}{25}$",
          "$\\dfrac{4}{5}$"
        ],
        "ok": 1,
        "why": "$\\sin^2 x=1-\\cos^2 x=1-\\dfrac{9}{25}=\\dfrac{16}{25}$."
      },
      {
        "q": "Que vaut $\\cos\\dfrac{2\\pi}{3}$ ?",
        "opts": [
          "$\\dfrac{1}{2}$",
          "$\\dfrac{\\sqrt{3}}{2}$",
          "$-\\dfrac{1}{2}$",
          "$-\\dfrac{\\sqrt{3}}{2}$"
        ],
        "ok": 2,
        "why": "$\\cos\\dfrac{2\\pi}{3}=\\cos\\left(\\pi-\\dfrac{\\pi}{3}\\right)=-\\cos\\dfrac{\\pi}{3}=-\\dfrac{1}{2}$."
      },
      {
        "q": "Quelle est la période de la fonction $\\sin$ ?",
        "opts": [
          "$\\pi$",
          "$\\dfrac{\\pi}{2}$",
          "$2\\pi$",
          "$1$"
        ],
        "ok": 2,
        "why": "$\\sin(x+2\\pi)=\\sin x$ : la période est $2\\pi$."
      }
    ],
    "flash": [
      {
        "front": "$\\cos\\dfrac{\\pi}{4}=\\ ?$",
        "back": "$\\dfrac{\\sqrt{2}}{2}$"
      },
      {
        "front": "$\\sin\\dfrac{\\pi}{6}=\\ ?$",
        "back": "$\\dfrac{1}{2}$"
      },
      {
        "front": "$\\cos\\dfrac{\\pi}{3}=\\ ?$",
        "back": "$\\dfrac{1}{2}$"
      },
      {
        "front": "$\\sin\\dfrac{\\pi}{3}=\\ ?$",
        "back": "$\\dfrac{\\sqrt{3}}{2}$"
      },
      {
        "front": "$\\cos\\dfrac{\\pi}{6}=\\ ?$",
        "back": "$\\dfrac{\\sqrt{3}}{2}$"
      },
      {
        "front": "$(\\sin x)'=\\ ?$",
        "back": "$\\cos x$"
      },
      {
        "front": "$(\\cos x)'=\\ ?$",
        "back": "$-\\sin x$"
      },
      {
        "front": "$(\\sin(ax+b))'=\\ ?$",
        "back": "$a\\cos(ax+b)$"
      },
      {
        "front": "$(\\cos(ax+b))'=\\ ?$",
        "back": "$-a\\sin(ax+b)$"
      },
      {
        "front": "Identité fondamentale ?",
        "back": "$\\cos^2 x+\\sin^2 x=1$"
      },
      {
        "front": "$\\sin(\\pi-x)=\\ ?$",
        "back": "$\\sin x$"
      },
      {
        "front": "Conversion : $180^\\circ=\\ ?$ rad",
        "back": "$\\pi$"
      }
    ],
    "vraifaux": [
      {
        "q": "$\\cos^2 x+\\sin^2 x=1$ pour tout réel $x$.",
        "v": true,
        "why": "C'est l'identité fondamentale, vraie partout sur $\\mathbb{R}$."
      },
      {
        "q": "$(\\cos x)'=\\sin x$.",
        "v": false,
        "why": "Faux : $(\\cos x)'=-\\sin x$, il y a un signe « moins »."
      },
      {
        "q": "La fonction $\\sin$ est impaire.",
        "v": true,
        "why": "$\\sin(-x)=-\\sin x$ : $\\sin$ est impaire."
      },
      {
        "q": "$\\cos\\dfrac{\\pi}{4}=\\sin\\dfrac{\\pi}{4}$.",
        "v": true,
        "why": "Les deux valent $\\dfrac{\\sqrt{2}}{2}$."
      },
      {
        "q": "Un angle de $30^\\circ$ vaut $\\dfrac{\\pi}{3}$ radians.",
        "v": false,
        "why": "Faux : $30^\\circ=\\dfrac{\\pi}{6}$. C'est $60^\\circ$ qui vaut $\\dfrac{\\pi}{3}$."
      },
      {
        "q": "$(\\sin(2x))'=\\cos(2x)$.",
        "v": false,
        "why": "Faux : il manque le facteur $2$, c'est $2\\cos(2x)$."
      },
      {
        "q": "La fonction $\\cos$ est périodique de période $2\\pi$.",
        "v": true,
        "why": "$\\cos(x+2\\pi)=\\cos x$ pour tout $x$."
      },
      {
        "q": "$\\cos(\\pi-x)=\\cos x$.",
        "v": false,
        "why": "Faux : $\\cos(\\pi-x)=-\\cos x$ (c'est $\\sin(\\pi-x)=\\sin x$)."
      },
      {
        "q": "Pour tout $x$, $-1\\le\\sin x\\le 1$.",
        "v": true,
        "why": "$\\sin x$ est une ordonnée sur le cercle de rayon $1$, donc bornée par $\\pm 1$."
      },
      {
        "q": "L'équation $\\cos x=2$ admet des solutions réelles.",
        "v": false,
        "why": "Faux : $\\cos x\\in[-1;1]$, donc $\\cos x=2$ est impossible."
      }
    ],
    "qmethode": [
      {
        "q": "On veut calculer $\\sin\\dfrac{5\\pi}{6}$ sans calculatrice. Quelle méthode ?",
        "opts": [
          "Écrire $\\dfrac{5\\pi}{6}=\\pi-\\dfrac{\\pi}{6}$ et utiliser $\\sin(\\pi-x)=\\sin x$",
          "Dériver $\\sin$",
          "Convertir en degrés puis utiliser la calculatrice",
          "Utiliser $\\cos^2+\\sin^2=1$ seul"
        ],
        "ok": 0,
        "why": "On ramène à un angle remarquable : $\\sin\\dfrac{5\\pi}{6}=\\sin\\dfrac{\\pi}{6}=\\dfrac{1}{2}$."
      },
      {
        "q": "Pour dériver $f(x)=\\sin(4x-3)$, on utilise :",
        "opts": [
          "La dérivée d'un produit",
          "La formule $(\\sin(ax+b))'=a\\cos(ax+b)$",
          "La dérivée d'un quotient",
          "L'identité $\\cos^2+\\sin^2=1$"
        ],
        "ok": 1,
        "why": "C'est une composée affine : $f'(x)=4\\cos(4x-3)$."
      },
      {
        "q": "Pour résoudre $\\sin x=\\dfrac{1}{2}$ sur $\\mathbb{R}$, on procède par :",
        "opts": [
          "Étude de signe",
          "Reconnaître $\\dfrac{1}{2}=\\sin\\dfrac{\\pi}{6}$ puis $x=\\dfrac{\\pi}{6}+2k\\pi$ ou $x=\\pi-\\dfrac{\\pi}{6}+2k\\pi$",
          "Tableau de variations",
          "Dériver les deux membres"
        ],
        "ok": 1,
        "why": "Équation $\\sin x=\\sin a$ : solutions $x=a+2k\\pi$ ou $x=\\pi-a+2k\\pi$."
      },
      {
        "q": "On donne $\\cos x=-\\dfrac{4}{5}$ avec $x\\in[0;\\pi]$. Pour trouver $\\sin x$ :",
        "opts": [
          "Utiliser $\\sin^2 x=1-\\cos^2 x$ et choisir le signe selon l'intervalle",
          "Dériver",
          "Convertir en degrés",
          "Utiliser la périodicité $2\\pi$"
        ],
        "ok": 0,
        "why": "$\\sin^2 x=1-\\dfrac{16}{25}=\\dfrac{9}{25}$, et sur $[0;\\pi]$ $\\sin x\\ge 0$ donc $\\sin x=\\dfrac{3}{5}$."
      },
      {
        "q": "Pour étudier les variations de $f(x)=\\cos x$ sur $[0;\\pi]$, on :",
        "opts": [
          "Calcule $f'(x)=-\\sin x$ et étudie son signe",
          "Calcule $f'(x)=\\sin x$",
          "Utilise la parité uniquement",
          "Affirme que $\\cos$ est toujours croissante"
        ],
        "ok": 0,
        "why": "$f'(x)=-\\sin x\\le 0$ sur $[0;\\pi]$ (car $\\sin x\\ge 0$), donc $f$ est décroissante."
      },
      {
        "q": "Pour obtenir une équation de la tangente à $f(x)=\\sin x$ en $0$, on calcule :",
        "opts": [
          "$f(0)$ et $f'(0)=\\cos 0=1$, tangente $y=x$",
          "Seulement $f(0)$",
          "La dérivée seconde",
          "La période"
        ],
        "ok": 0,
        "why": "$f(0)=0$, $f'(0)=\\cos 0=1$ : tangente $y=f'(0)(x-0)+f(0)=x$."
      },
      {
        "q": "Pour montrer que $g(x)=\\cos^2 x+\\sin^2 x$ est constante, on peut :",
        "opts": [
          "Dériver $g$ et montrer que $g'(x)=0$, ou invoquer directement l'identité fondamentale",
          "Tracer la courbe à la calculatrice",
          "Utiliser la parité",
          "Convertir en degrés"
        ],
        "ok": 0,
        "why": "L'identité donne $g(x)=1$ ; en dérivant, $g'(x)=-2\\cos x\\sin x+2\\sin x\\cos x=0$, donc $g$ constante."
      }
    ]
  },
  {
    "id": "primitives-equadiff",
    "tag": "Analyse",
    "title": "Primitives et équations différentielles",
    "intro": "Trouver une primitive, c'est faire le chemin inverse de la dérivation : on cherche une fonction $F$ dont la dérivée est la fonction $f$ donnée. C'est l'outil central pour calculer des intégrales et pour résoudre les équations différentielles $y'=ay$ et $y'=ay+b$, qui modélisent une foule de phénomènes (radioactivité, refroidissement, charge d'un condensateur...). Au bac, c'est un chapitre très rentable : les techniques sont mécaniques une fois le formulaire maîtrisé.",
    "objectifs": [
      "Savoir ce qu'est une primitive et pourquoi elle est définie « à une constante près »",
      "Connaître par cœur le tableau des primitives usuelles",
      "Reconnaître et primitiver les formes composées ($u'e^u$, $\\dfrac{u'}{u}$, $u'u^n$)",
      "Déterminer la primitive vérifiant une condition initiale donnée",
      "Résoudre $y'=ay$ puis $y'=ay+b$ et trouver la solution d'un problème de Cauchy",
      "Modéliser une situation concrète par une équation différentielle du premier ordre"
    ],
    "cours": [
      {
        "t": "Définition d'une primitive",
        "d": "Soit $f$ une fonction définie sur un intervalle $I$. Une fonction $F$ dérivable sur $I$ est une **primitive** de $f$ sur $I$ si, pour tout $x\\in I$, $F'(x)=f(x)$. Exemple : $F(x)=x^2$ est une primitive de $f(x)=2x$ sur $\\mathbb{R}$. Toute fonction continue sur un intervalle admet des primitives sur cet intervalle."
      },
      {
        "t": "Primitives « à une constante près »",
        "d": "Si $F$ est une primitive de $f$ sur $I$, alors les primitives de $f$ sur $I$ sont **exactement** les fonctions $x\\mapsto F(x)+C$, où $C\\in\\mathbb{R}$. En effet, deux primitives d'une même fonction sur un intervalle diffèrent d'une constante (car leur différence a une dérivée nulle). C'est pourquoi on n'oublie jamais le $+C$."
      },
      {
        "t": "Primitive vérifiant une condition initiale",
        "d": "Une fonction $f$ continue sur $I$ admet une **unique** primitive $F$ vérifiant une condition $F(x_0)=y_0$ donnée. En pratique : on écrit la primitive générale $F(x)+C$, puis on calcule $C$ en injectant la condition. C'est ce qui rend le problème déterminé."
      },
      {
        "t": "Équation différentielle $y'=ay$",
        "d": "Une équation différentielle relie une fonction inconnue $y$ et ses dérivées. Pour $a\\in\\mathbb{R}$, les solutions sur $\\mathbb{R}$ de $y'=ay$ sont les fonctions $x\\mapsto Ce^{ax}$, avec $C\\in\\mathbb{R}$. Il y a une infinité de solutions ; une condition initiale $y(x_0)=y_0$ en sélectionne une seule. Modèle type : la croissance/décroissance exponentielle (population, désintégration radioactive)."
      },
      {
        "t": "Équation différentielle $y'=ay+b$",
        "d": "Pour $a\\neq 0$, les solutions de $y'=ay+b$ sont $x\\mapsto Ce^{ax}-\\dfrac{b}{a}$, $C\\in\\mathbb{R}$. La méthode : la solution générale = solutions de $y'=ay$ (qui valent $Ce^{ax}$) **plus** une solution particulière constante $y_p=-\\dfrac{b}{a}$ (obtenue en cherchant $y'=0$, donc $0=ay_p+b$). C'est le modèle du refroidissement de Newton ou de la charge d'un condensateur."
      }
    ],
    "formulaireTitre": "Tableau des primitives usuelles ($C$ constante réelle)",
    "formulaire": [
      [
        "$f(x)=x^n\\ (n\\neq -1)$",
        "$F(x)=\\dfrac{x^{n+1}}{n+1}+C$"
      ],
      [
        "$f(x)=\\dfrac{1}{x}\\ (\\text{sur }]0;+\\infty[)$",
        "$F(x)=\\ln x+C$"
      ],
      [
        "$f(x)=\\dfrac{1}{x^2}$",
        "$F(x)=-\\dfrac{1}{x}+C$"
      ],
      [
        "$f(x)=\\dfrac{1}{\\sqrt{x}}$",
        "$F(x)=2\\sqrt{x}+C$"
      ],
      [
        "$f(x)=e^{ax}\\ (a\\neq 0)$",
        "$F(x)=\\dfrac{1}{a}e^{ax}+C$"
      ],
      [
        "$f(x)=\\cos x$",
        "$F(x)=\\sin x+C$"
      ],
      [
        "$f(x)=\\sin x$",
        "$F(x)=-\\cos x+C$"
      ],
      [
        "$f=u'e^{u}$",
        "$F=e^{u}+C$"
      ],
      [
        "$f=\\dfrac{u'}{u}\\ (u>0)$",
        "$F=\\ln u+C$"
      ],
      [
        "$f=u'u^{n}\\ (n\\neq -1)$",
        "$F=\\dfrac{u^{n+1}}{n+1}+C$"
      ]
    ],
    "methodes": [
      {
        "t": "Trouver la primitive vérifiant une condition $F(x_0)=y_0$",
        "etapes": [
          "Déterminer une primitive générale $F(x)+C$ à l'aide du tableau",
          "Remplacer $x$ par $x_0$ : écrire $F(x_0)+C=y_0$",
          "Résoudre pour trouver la valeur de $C$",
          "Conclure en donnant l'expression complète de la primitive cherchée"
        ]
      },
      {
        "t": "Primitiver une forme composée",
        "etapes": [
          "Repérer une fonction « intérieure » $u$ et sa dérivée $u'$ dans l'expression",
          "Identifier le modèle : $u'e^u$, $\\dfrac{u'}{u}$ ou $u'u^n$",
          "Appliquer directement la primitive du modèle ($e^u$, $\\ln u$, $\\dfrac{u^{n+1}}{n+1}$)",
          "Vérifier en dérivant le résultat : on doit retrouver $f$ exactement"
        ]
      },
      {
        "t": "Résoudre $y'=ay+b$ avec condition initiale (problème de Cauchy)",
        "etapes": [
          "Identifier $a$ et $b$, écrire la solution générale $y(x)=Ce^{ax}-\\dfrac{b}{a}$",
          "Utiliser la condition $y(x_0)=y_0$ pour poser une équation en $C$",
          "Résoudre pour obtenir $C$",
          "Donner l'unique solution, puis répondre à la question concrète (limite, valeur en un point...)"
        ]
      }
    ],
    "annales": [
      {
        "y": 2024,
        "s": "On considère l'équation différentielle $y'=0{,}5y+3$. Déterminer la solution $f$ vérifiant $f(0)=2$, puis sa limite en $+\\infty$.",
        "loc": "Métropole"
      },
      {
        "y": 2023,
        "s": "Soit $f$ définie sur $\\mathbb{R}$ par $f(x)=(2x+1)e^{x^2+x}$. Justifier que $F(x)=e^{x^2+x}$ est une primitive de $f$.",
        "loc": "Centres étrangers"
      },
      {
        "y": 2022,
        "s": "Résoudre sur $\\mathbb{R}$ l'équation différentielle $y'=-2y$, puis déterminer la solution telle que $y(0)=5$.",
        "loc": "Métropole"
      }
    ],
    "piege": "Trois oublis classiques qui coûtent des points : (1) le $+C$ dans une primitive ; (2) le facteur $\\dfrac{1}{a}$ en primitivant $e^{ax}$ — une primitive de $e^{3x}$ est $\\dfrac{1}{3}e^{3x}$, pas $e^{3x}$ ; (3) pour $y'=ay+b$, oublier la solution particulière constante $-\\dfrac{b}{a}$ et ne garder que $Ce^{ax}$.",
    "qcm": [
      {
        "q": "Une primitive de $f(x)=3x^2$ sur $\\mathbb{R}$ est :",
        "opts": [
          "$x^3$",
          "$6x$",
          "$\\dfrac{3x^3}{2}$",
          "$x^3+x$"
        ],
        "ok": 0,
        "why": "$\\displaystyle\\int 3x^2\\,dx = 3\\cdot\\dfrac{x^3}{3}=x^3$ (à une constante près). On vérifie : $(x^3)'=3x^2$."
      },
      {
        "q": "Une primitive de $f(x)=e^{2x}$ sur $\\mathbb{R}$ est :",
        "opts": [
          "$2e^{2x}$",
          "$e^{2x}$",
          "$\\dfrac{1}{2}e^{2x}$",
          "$\\dfrac{1}{2}e^{x}$"
        ],
        "ok": 2,
        "why": "Primitive de $e^{ax}$ : $\\dfrac{1}{a}e^{ax}$. Ici $a=2$ donc $\\dfrac{1}{2}e^{2x}$. On vérifie : $\\left(\\dfrac{1}{2}e^{2x}\\right)'=e^{2x}$."
      },
      {
        "q": "Sur $]0;+\\infty[$, une primitive de $f(x)=\\dfrac{1}{x}$ est :",
        "opts": [
          "$-\\dfrac{1}{x^2}$",
          "$\\ln x$",
          "$\\dfrac{1}{x^2}$",
          "$x\\ln x$"
        ],
        "ok": 1,
        "why": "Par définition $(\\ln x)'=\\dfrac{1}{x}$ sur $]0;+\\infty[$, donc $\\ln x$ en est une primitive."
      },
      {
        "q": "Les solutions de l'équation différentielle $y'=3y$ sur $\\mathbb{R}$ sont :",
        "opts": [
          "$y=Ce^{-3x}$",
          "$y=3x+C$",
          "$y=Ce^{3x}$",
          "$y=Cx^3$"
        ],
        "ok": 2,
        "why": "Les solutions de $y'=ay$ sont $y=Ce^{ax}$. Ici $a=3$, d'où $y=Ce^{3x}$."
      },
      {
        "q": "Les solutions de $y'=2y+6$ sur $\\mathbb{R}$ sont :",
        "opts": [
          "$y=Ce^{2x}-3$",
          "$y=Ce^{2x}+3$",
          "$y=Ce^{2x}-6$",
          "$y=Ce^{-2x}-3$"
        ],
        "ok": 0,
        "why": "Solution générale $y=Ce^{ax}-\\dfrac{b}{a}$ avec $a=2$, $b=6$ : $-\\dfrac{b}{a}=-3$, donc $y=Ce^{2x}-3$."
      },
      {
        "q": "Une primitive de $f(x)=\\sin x$ sur $\\mathbb{R}$ est :",
        "opts": [
          "$\\cos x$",
          "$-\\cos x$",
          "$-\\sin x$",
          "$\\sin x$"
        ],
        "ok": 1,
        "why": "$(-\\cos x)'=\\sin x$, donc $-\\cos x$ est une primitive de $\\sin x$. Attention au signe."
      },
      {
        "q": "Une primitive de $f(x)=2x\\,e^{x^2}$ sur $\\mathbb{R}$ est :",
        "opts": [
          "$x^2e^{x^2}$",
          "$2e^{x^2}$",
          "$e^{x^2}$",
          "$\\dfrac{1}{2}e^{x^2}$"
        ],
        "ok": 2,
        "why": "Forme $u'e^u$ avec $u=x^2$ et $u'=2x$. Primitive : $e^u=e^{x^2}$. On vérifie : $\\left(e^{x^2}\\right)'=2x\\,e^{x^2}$."
      },
      {
        "q": "Une primitive de $f(x)=\\dfrac{2x}{x^2+1}$ sur $\\mathbb{R}$ est :",
        "opts": [
          "$\\dfrac{1}{x^2+1}$",
          "$2\\ln(x^2+1)$",
          "$\\ln(x^2+1)$",
          "$(x^2+1)^2$"
        ],
        "ok": 2,
        "why": "Forme $\\dfrac{u'}{u}$ avec $u=x^2+1>0$ et $u'=2x$. Primitive : $\\ln u=\\ln(x^2+1)$."
      },
      {
        "q": "Quelle est la solution de $y'=-y$ vérifiant $y(0)=4$ ?",
        "opts": [
          "$y=4e^{x}$",
          "$y=4e^{-x}$",
          "$y=-4e^{-x}$",
          "$y=e^{-x}+3$"
        ],
        "ok": 1,
        "why": "Solutions de $y'=-y$ : $y=Ce^{-x}$. Avec $y(0)=C=4$, on obtient $y=4e^{-x}$."
      },
      {
        "q": "Une primitive de $f(x)=4x^3+\\dfrac{1}{x^2}$ sur $]0;+\\infty[$ est :",
        "opts": [
          "$x^4-\\dfrac{1}{x}$",
          "$12x^2-\\dfrac{2}{x^3}$",
          "$x^4+\\dfrac{1}{x}$",
          "$x^4+\\ln x$"
        ],
        "ok": 0,
        "why": "Primitive de $4x^3$ : $x^4$. Primitive de $x^{-2}$ : $\\dfrac{x^{-1}}{-1}=-\\dfrac{1}{x}$. Total : $x^4-\\dfrac{1}{x}$."
      },
      {
        "q": "Quelle est la limite en $+\\infty$ de la solution $y=Ce^{-0{,}5x}+10$ (avec $C>0$) de $y'=-0{,}5y+5$ ?",
        "opts": [
          "$+\\infty$",
          "$0$",
          "$10$",
          "$5$"
        ],
        "ok": 2,
        "why": "$e^{-0{,}5x}\\to 0$ en $+\\infty$, donc $y\\to 0+10=10$. Le terme exponentiel disparaît, la limite est la solution particulière constante."
      },
      {
        "q": "Une primitive de $f(x)=(3x^2+2)\\,(x^3+2x)^4$ sur $\\mathbb{R}$ est :",
        "opts": [
          "$(x^3+2x)^5$",
          "$5(x^3+2x)^5$",
          "$\\dfrac{(x^3+2x)^4}{4}$",
          "$\\dfrac{(x^3+2x)^5}{5}$"
        ],
        "ok": 3,
        "why": "Forme $u'u^n$ avec $u=x^3+2x$, $u'=3x^2+2$, $n=4$. Primitive : $\\dfrac{u^{5}}{5}=\\dfrac{(x^3+2x)^5}{5}$."
      }
    ],
    "flash": [
      {
        "front": "Primitive de $x^n$ ($n\\neq -1$) ?",
        "back": "$\\dfrac{x^{n+1}}{n+1}+C$"
      },
      {
        "front": "Primitive de $\\dfrac{1}{x}$ sur $]0;+\\infty[$ ?",
        "back": "$\\ln x+C$"
      },
      {
        "front": "Primitive de $e^{ax}$ ($a\\neq 0$) ?",
        "back": "$\\dfrac{1}{a}e^{ax}+C$"
      },
      {
        "front": "Primitive de $\\cos x$ ?",
        "back": "$\\sin x+C$"
      },
      {
        "front": "Primitive de $\\sin x$ ?",
        "back": "$-\\cos x+C$"
      },
      {
        "front": "Primitive de $u'e^{u}$ ?",
        "back": "$e^{u}+C$"
      },
      {
        "front": "Primitive de $\\dfrac{u'}{u}$ (avec $u>0$) ?",
        "back": "$\\ln u+C$"
      },
      {
        "front": "Primitive de $u'u^{n}$ ($n\\neq -1$) ?",
        "back": "$\\dfrac{u^{n+1}}{n+1}+C$"
      },
      {
        "front": "Solutions de $y'=ay$ ?",
        "back": "$y=Ce^{ax}$, $C\\in\\mathbb{R}$"
      },
      {
        "front": "Solutions de $y'=ay+b$ ($a\\neq 0$) ?",
        "back": "$y=Ce^{ax}-\\dfrac{b}{a}$"
      },
      {
        "front": "Primitive de $\\dfrac{1}{x^2}$ ?",
        "back": "$-\\dfrac{1}{x}+C$"
      },
      {
        "front": "Primitive de $\\dfrac{1}{\\sqrt{x}}$ sur $]0;+\\infty[$ ?",
        "back": "$2\\sqrt{x}+C$"
      }
    ],
    "vraifaux": [
      {
        "q": "Une fonction admet une infinité de primitives sur un intervalle.",
        "v": true,
        "why": "Oui : si $F$ en est une, alors $F+C$ aussi, pour tout réel $C$."
      },
      {
        "q": "Deux primitives d'une même fonction sur un intervalle sont toujours égales.",
        "v": false,
        "why": "Elles diffèrent d'une constante : $F_1-F_2=C$. Elles ne sont égales que si $C=0$."
      },
      {
        "q": "Une primitive de $e^{5x}$ est $e^{5x}$.",
        "v": false,
        "why": "Il faut le facteur $\\dfrac{1}{a}$ : une primitive est $\\dfrac{1}{5}e^{5x}$."
      },
      {
        "q": "Sur $\\mathbb{R}$, toute fonction continue admet des primitives.",
        "v": true,
        "why": "C'est un théorème du cours : la continuité sur un intervalle garantit l'existence de primitives."
      },
      {
        "q": "Les solutions de $y'=2y$ sont les fonctions $y=Ce^{2x}$.",
        "v": true,
        "why": "Forme $y'=ay$ avec $a=2$, dont les solutions sont $y=Ce^{2x}$."
      },
      {
        "q": "Pour $y'=ay+b$ avec $a\\neq 0$, la solution particulière constante est $-\\dfrac{b}{a}$.",
        "v": true,
        "why": "Une solution constante vérifie $y'=0$, donc $0=ay+b$, d'où $y=-\\dfrac{b}{a}$."
      },
      {
        "q": "Il existe une unique primitive de $f$ continue vérifiant $F(0)=3$.",
        "v": true,
        "why": "La condition initiale fixe la constante $C$ : la primitive est alors unique."
      },
      {
        "q": "Une primitive de $\\dfrac{1}{x}$ sur $]0;+\\infty[$ est $\\dfrac{-1}{x^2}$.",
        "v": false,
        "why": "$\\dfrac{-1}{x^2}$ est une primitive de $\\dfrac{2}{x^3}$. La primitive de $\\dfrac{1}{x}$ est $\\ln x$."
      },
      {
        "q": "La fonction $F(x)=\\ln(x^2+1)$ est une primitive de $\\dfrac{2x}{x^2+1}$ sur $\\mathbb{R}$.",
        "v": true,
        "why": "Forme $\\dfrac{u'}{u}$ avec $u=x^2+1>0$ : $F'=\\dfrac{2x}{x^2+1}$. Correct."
      },
      {
        "q": "Pour résoudre $y'=ay$, on n'a pas besoin de condition initiale pour avoir une solution unique.",
        "v": false,
        "why": "Sans condition initiale, il y a une infinité de solutions ($Ce^{ax}$). La condition initiale en sélectionne une seule."
      }
    ],
    "qmethode": [
      {
        "q": "On doit primitiver $f(x)=2x\\,e^{x^2}$. Quelle méthode ?",
        "opts": [
          "Reconnaître la forme $u'e^u$ avec $u=x^2$",
          "Développer puis primitiver terme à terme",
          "Utiliser une équation différentielle",
          "Primitiver $2x$ et $e^{x^2}$ séparément puis multiplier"
        ],
        "ok": 0,
        "why": "On voit $u=x^2$, $u'=2x$ : c'est exactement $u'e^u$, dont la primitive est $e^u=e^{x^2}$. On ne primitive jamais un produit facteur par facteur."
      },
      {
        "q": "Pour résoudre $y'=0{,}3y+1{,}5$ avec $y(0)=4$, on commence par :",
        "opts": [
          "Chercher la solution particulière constante puis la forme générale",
          "Calculer une primitive de $y$",
          "Dériver les deux membres",
          "Poser $y=ax+b$"
        ],
        "ok": 0,
        "why": "C'est une équation $y'=ay+b$ : solution générale $Ce^{ax}-\\dfrac{b}{a}$, puis on utilise $y(0)=4$ pour trouver $C$."
      },
      {
        "q": "On veut la primitive de $f(x)=\\dfrac{3x^2}{x^3+5}$ sur un intervalle où $x^3+5>0$. Méthode ?",
        "opts": [
          "Reconnaître $\\dfrac{u'}{u}$ avec $u=x^3+5$",
          "Reconnaître $u'e^u$",
          "Faire une division polynomiale",
          "Reconnaître $u'u^n$"
        ],
        "ok": 0,
        "why": "$u=x^3+5$, $u'=3x^2$ : c'est $\\dfrac{u'}{u}$, primitive $\\ln u=\\ln(x^3+5)$."
      },
      {
        "q": "On cherche la primitive $F$ de $f(x)=2x$ telle que $F(1)=5$. Quelle démarche ?",
        "opts": [
          "Écrire $F(x)=x^2+C$ puis résoudre $F(1)=5$",
          "Dériver $f$",
          "Résoudre une équation différentielle $y'=2y$",
          "Calculer la limite de $f$"
        ],
        "ok": 0,
        "why": "Primitive générale $x^2+C$ ; condition $1+C=5$ donc $C=4$ : $F(x)=x^2+4$."
      },
      {
        "q": "Le refroidissement d'un café suit $T'=-k(T-20)$. Comment ramener à une forme connue ?",
        "opts": [
          "Développer en $T'=-kT+20k$, forme $y'=ay+b$",
          "C'est déjà du type $y'=ay$",
          "Primitiver directement $T$",
          "Poser $T=Ce^{kt}$ sans plus"
        ],
        "ok": 0,
        "why": "En développant : $T'=-kT+20k$, donc $a=-k$ et $b=20k$. Solution $T=Ce^{-kt}+20$, qui tend vers 20°C (température ambiante)."
      },
      {
        "q": "Pour primitiver $f(x)=(2x+3)^4$ sur $\\mathbb{R}$, le plus efficace est :",
        "opts": [
          "Reconnaître $\\dfrac{1}{2}u'u^4$ avec $u=2x+3$",
          "Développer $(2x+3)^4$ entièrement",
          "Utiliser $\\ln$",
          "Reconnaître $u'e^u$"
        ],
        "ok": 0,
        "why": "$u=2x+3$, $u'=2$. On écrit $f=\\dfrac{1}{2}\\cdot 2(2x+3)^4=\\dfrac{1}{2}u'u^4$, primitive $\\dfrac{1}{2}\\cdot\\dfrac{u^5}{5}=\\dfrac{(2x+3)^5}{10}$."
      },
      {
        "q": "On a résolu $y'=ay+b$ et trouvé $y=Ce^{ax}-\\dfrac{b}{a}$ avec $a<0$. Pour la limite en $+\\infty$ :",
        "opts": [
          "$e^{ax}\\to 0$, donc $y\\to -\\dfrac{b}{a}$",
          "$y\\to +\\infty$",
          "$y\\to 0$",
          "On ne peut pas conclure"
        ],
        "ok": 0,
        "why": "Comme $a<0$, $e^{ax}\\to 0$ en $+\\infty$, le terme variable disparaît et $y$ tend vers la solution particulière constante $-\\dfrac{b}{a}$."
      }
    ]
  },
  {
    "id": "integrales",
    "tag": "Analyse",
    "title": "Calcul intégral",
    "intro": "Calculer une intégrale, c'est mesurer l'aire sous une courbe — et grâce au lien fondamental avec les primitives, ça se ramène à une simple soustraction $F(b)-F(a)$. Ce chapitre relie tout ce que tu as vu en analyse : dérivées, primitives, fonctions usuelles. Au bac, l'intégrale tombe presque toujours : calcul direct, aire entre deux courbes, intégration par parties, valeur moyenne. Maîtrise les propriétés (linéarité, Chasles, positivité) et fais bien attention au signe quand la fonction passe sous l'axe.",
    "objectifs": [
      "Interpréter $\\int_a^b f(x)\\,\\mathrm{d}x$ comme une aire (en unités d'aire) lorsque $f\\ge0$",
      "Calculer une intégrale à l'aide d'une primitive : $\\int_a^b f(x)\\,\\mathrm{d}x=F(b)-F(a)$",
      "Utiliser les propriétés : linéarité, relation de Chasles, positivité et ordre",
      "Déterminer la valeur moyenne d'une fonction sur un intervalle",
      "Appliquer la formule d'intégration par parties",
      "Calculer une aire entre deux courbes en gérant le signe"
    ],
    "cours": [
      {
        "t": "Intégrale et aire (cas $f\\ge0$)",
        "d": "Soit $f$ continue et positive sur $[a;b]$. L'intégrale $\\int_a^b f(x)\\,\\mathrm{d}x$ est l'aire, exprimée en unités d'aire, du domaine compris entre la courbe de $f$, l'axe des abscisses et les droites $x=a$ et $x=b$. Une unité d'aire (u.a.) correspond à l'aire du rectangle bâti sur les vecteurs unitaires du repère. Pour $f$ continue de signe quelconque, l'intégrale reste définie comme l'aire algébrique : les portions situées sous l'axe comptent négativement."
      },
      {
        "t": "Lien fondamental avec les primitives",
        "d": "Si $f$ est continue sur $[a;b]$ et $F$ est une primitive de $f$ sur cet intervalle, alors $\\int_a^b f(x)\\,\\mathrm{d}x=F(b)-F(a)$, qu'on note aussi $\\big[F(x)\\big]_a^b$. Le résultat ne dépend pas de la primitive choisie : si on remplace $F$ par $F+k$, la constante $k$ s'élimine dans la soustraction. C'est l'outil de calcul de base : trouver une primitive, puis évaluer entre les bornes."
      },
      {
        "t": "Propriétés : linéarité et Chasles",
        "d": "Pour $f,g$ continues et $\\lambda$ réel : $\\int_a^b\\big(f+g\\big)=\\int_a^b f+\\int_a^b g$ et $\\int_a^b \\lambda f=\\lambda\\int_a^b f$ (linéarité). Relation de Chasles : $\\int_a^c f=\\int_a^b f+\\int_b^c f$ pour tout $c$ (même hors de $[a;b]$, tant que $f$ est continue). Conventions utiles : $\\int_a^a f=0$ et $\\int_b^a f=-\\int_a^b f$ (inverser les bornes change le signe)."
      },
      {
        "t": "Positivité, ordre et valeur moyenne",
        "d": "Si $f\\ge0$ sur $[a;b]$ (avec $a\\le b$), alors $\\int_a^b f\\ge0$. Si $f\\le g$ sur $[a;b]$, alors $\\int_a^b f\\le\\int_a^b g$ (intégration des inégalités). La valeur moyenne de $f$ sur $[a;b]$ est $\\mu=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x$ : c'est la hauteur du rectangle de base $[a;b]$ ayant la même aire que celle sous la courbe."
      },
      {
        "t": "Intégration par parties",
        "d": "Si $u$ et $v$ sont dérivables à dérivées continues sur $[a;b]$, alors $\\int_a^b u'(x)v(x)\\,\\mathrm{d}x=\\big[u(x)v(x)\\big]_a^b-\\int_a^b u(x)v'(x)\\,\\mathrm{d}x$. On l'utilise quand l'intégrande est un produit (par exemple $x\\,\\mathrm{e}^x$, $x\\sin x$, $\\ln x$) : on dérive le facteur qui se simplifie et on primitive l'autre."
      }
    ],
    "formulaireTitre": "Intégrales et primitives à connaître",
    "formulaire": [
      [
        "$\\int_a^b f(x)\\,\\mathrm{d}x$",
        "$=F(b)-F(a)$ avec $F'=f$"
      ],
      [
        "$\\int_a^b \\lambda\\,\\mathrm{d}x$",
        "$=\\lambda(b-a)$"
      ],
      [
        "$\\int_a^b x^n\\,\\mathrm{d}x$",
        "$=\\left[\\dfrac{x^{n+1}}{n+1}\\right]_a^b$ ($n\\neq-1$)"
      ],
      [
        "$\\int_a^b \\dfrac{1}{x}\\,\\mathrm{d}x$",
        "$=\\big[\\ln x\\big]_a^b$ ($0<a\\le b$)"
      ],
      [
        "$\\int_a^b \\mathrm{e}^{x}\\,\\mathrm{d}x$",
        "$=\\big[\\mathrm{e}^{x}\\big]_a^b$"
      ],
      [
        "$\\int_a^b \\cos x\\,\\mathrm{d}x$",
        "$=\\big[\\sin x\\big]_a^b$"
      ],
      [
        "$\\int_a^b \\sin x\\,\\mathrm{d}x$",
        "$=\\big[-\\cos x\\big]_a^b$"
      ],
      [
        "$\\int_a^b u'(x)v(x)\\,\\mathrm{d}x$",
        "$=\\big[uv\\big]_a^b-\\int_a^b u(x)v'(x)\\,\\mathrm{d}x$"
      ],
      [
        "$\\mu=\\dfrac{1}{b-a}\\int_a^b f$",
        "valeur moyenne sur $[a;b]$"
      ],
      [
        "Aire entre $C_f$ et $C_g$ ($f\\ge g$)",
        "$=\\int_a^b\\big(f(x)-g(x)\\big)\\,\\mathrm{d}x$"
      ]
    ],
    "methodes": [
      {
        "t": "Calculer une intégrale directement",
        "etapes": [
          "Vérifier que $f$ est continue sur $[a;b]$",
          "Déterminer une primitive $F$ de $f$ (formulaire, linéarité)",
          "Évaluer $\\big[F(x)\\big]_a^b=F(b)-F(a)$",
          "Vérifier l'ordre des bornes et le signe du résultat"
        ]
      },
      {
        "t": "Intégration par parties",
        "etapes": [
          "Repérer le produit et poser $u'$ (à primitiver) et $v$ (à dériver)",
          "Choisir $v$ comme le facteur qui se simplifie en dérivant (souvent $x$ ou $\\ln x$)",
          "Calculer $u$ et $v'$, puis appliquer $\\big[uv\\big]_a^b-\\int_a^b uv'$",
          "Calculer l'intégrale restante, qui doit être plus simple"
        ]
      },
      {
        "t": "Aire entre deux courbes",
        "etapes": [
          "Déterminer sur $[a;b]$ laquelle des deux fonctions est au-dessus (étude du signe de $f-g$)",
          "L'aire vaut $\\int_a^b\\big(\\text{fonction du haut}-\\text{fonction du bas}\\big)\\,\\mathrm{d}x$",
          "Si le signe de $f-g$ change, découper avec Chasles à chaque intersection",
          "Multiplier par l'aire d'une u.a. si le repère n'est pas orthonormé d'unité 1"
        ]
      }
    ],
    "annales": [
      {
        "y": 2024,
        "s": "Calculer $\\displaystyle\\int_0^1 (2x+1)\\mathrm{e}^{x}\\,\\mathrm{d}x$ à l'aide d'une intégration par parties.",
        "loc": "Métropole"
      },
      {
        "y": 2023,
        "s": "Déterminer la valeur moyenne de la fonction $f:x\\mapsto x\\,\\mathrm{e}^{-x}$ sur l'intervalle $[0;1]$.",
        "loc": "Métropole"
      },
      {
        "y": 2022,
        "s": "On considère $f(x)=\\ln x$. Montrer, par intégration par parties, que $\\displaystyle\\int_1^{\\mathrm{e}} \\ln x\\,\\mathrm{d}x=1$.",
        "loc": "Centres étrangers"
      }
    ],
    "piege": "L'erreur n°1 : confondre intégrale et aire géométrique quand $f$ change de signe. Si $f<0$ sur une partie de $[a;b]$, l'intégrale y est négative ; l'aire géométrique réelle vaut $\\big|\\int\\big|$ (ou se calcule en découpant avec Chasles). Autres pièges classiques : oublier que $\\int_b^a=-\\int_a^b$ (bornes inversées), et se tromper de primitive (ex. la primitive de $\\sin x$ est $-\\cos x$, pas $\\cos x$).",
    "qcm": [
      {
        "q": "$\\displaystyle\\int_0^2 3\\,\\mathrm{d}x$ vaut :",
        "opts": [
          "$3$",
          "$5$",
          "$6$",
          "$2$"
        ],
        "ok": 2,
        "why": "$\\int_a^b\\lambda\\,\\mathrm{d}x=\\lambda(b-a)=3\\times(2-0)=6$."
      },
      {
        "q": "$\\displaystyle\\int_1^3 2x\\,\\mathrm{d}x$ vaut :",
        "opts": [
          "$8$",
          "$4$",
          "$9$",
          "$6$"
        ],
        "ok": 0,
        "why": "Une primitive de $2x$ est $x^2$, donc $\\big[x^2\\big]_1^3=9-1=8$."
      },
      {
        "q": "$\\displaystyle\\int_0^1 \\mathrm{e}^{x}\\,\\mathrm{d}x$ vaut :",
        "opts": [
          "$1$",
          "$\\mathrm{e}-1$",
          "$\\mathrm{e}$",
          "$\\mathrm{e}+1$"
        ],
        "ok": 1,
        "why": "$\\big[\\mathrm{e}^{x}\\big]_0^1=\\mathrm{e}^1-\\mathrm{e}^0=\\mathrm{e}-1$."
      },
      {
        "q": "La relation de Chasles s'écrit $\\displaystyle\\int_a^c f=$ :",
        "opts": [
          "$\\int_a^b f-\\int_b^c f$",
          "$\\int_a^b f\\times\\int_b^c f$",
          "$\\int_a^b f+\\int_b^c f$",
          "$\\int_b^c f-\\int_a^b f$"
        ],
        "ok": 2,
        "why": "Chasles : $\\int_a^c f=\\int_a^b f+\\int_b^c f$ (on additionne en passant par un point intermédiaire $b$)."
      },
      {
        "q": "Si $f\\le g$ sur $[a;b]$ (avec $a<b$), alors :",
        "opts": [
          "$\\int_a^b f\\le\\int_a^b g$",
          "$\\int_a^b f\\ge\\int_a^b g$",
          "$\\int_a^b f=\\int_a^b g$",
          "on ne peut rien dire"
        ],
        "ok": 0,
        "why": "L'intégrale conserve l'ordre : si $f\\le g$ alors $\\int_a^b f\\le\\int_a^b g$ (intégration des inégalités)."
      },
      {
        "q": "La valeur moyenne de $f$ sur $[a;b]$ est :",
        "opts": [
          "$\\frac{1}{2}\\int_a^b f$",
          "$\\int_a^b f$",
          "$(b-a)\\int_a^b f$",
          "$\\frac{1}{b-a}\\int_a^b f$"
        ],
        "ok": 3,
        "why": "Par définition $\\mu=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x$."
      },
      {
        "q": "$\\displaystyle\\int_2^1 f(x)\\,\\mathrm{d}x$ est égale à :",
        "opts": [
          "$\\int_1^2 f$",
          "$0$",
          "$-\\int_1^2 f$",
          "$2\\int_1^2 f$"
        ],
        "ok": 2,
        "why": "Inverser les bornes change le signe : $\\int_2^1 f=-\\int_1^2 f$."
      },
      {
        "q": "$\\displaystyle\\int_1^{\\mathrm{e}} \\frac{1}{x}\\,\\mathrm{d}x$ vaut :",
        "opts": [
          "$\\mathrm{e}-1$",
          "$1$",
          "$\\ln(\\mathrm{e}-1)$",
          "$0$"
        ],
        "ok": 1,
        "why": "$\\big[\\ln x\\big]_1^{\\mathrm{e}}=\\ln\\mathrm{e}-\\ln 1=1-0=1$."
      },
      {
        "q": "$\\displaystyle\\int_0^{\\pi} \\sin x\\,\\mathrm{d}x$ vaut :",
        "opts": [
          "$0$",
          "$1$",
          "$2$",
          "$-2$"
        ],
        "ok": 2,
        "why": "$\\big[-\\cos x\\big]_0^{\\pi}=-\\cos\\pi-(-\\cos 0)=-(-1)+1=2$."
      },
      {
        "q": "Pour $\\displaystyle\\int_0^1 x\\,\\mathrm{e}^{x}\\,\\mathrm{d}x$ par parties, on pose judicieusement :",
        "opts": [
          "$v=x$ et $u'=\\mathrm{e}^{x}$",
          "$v=\\mathrm{e}^{x}$ et $u'=x$",
          "$v=x\\mathrm{e}^{x}$",
          "$u'=x$ et $v'=\\mathrm{e}^{x}$"
        ],
        "ok": 0,
        "why": "On dérive $v=x$ (qui devient $1$) et on primitive $u'=\\mathrm{e}^{x}$ : l'intégrale restante $\\int 1\\cdot\\mathrm{e}^{x}$ est simple."
      },
      {
        "q": "L'aire entre $C_f$ et $C_g$ sur $[a;b]$, lorsque $f\\ge g$, vaut :",
        "opts": [
          "$\\int_a^b(g-f)$",
          "$\\int_a^b f+\\int_a^b g$",
          "$\\int_a^b(f-g)$",
          "$\\big|\\int_a^b f\\big|$"
        ],
        "ok": 2,
        "why": "L'aire (positive) est $\\int_a^b(\\text{haut}-\\text{bas})=\\int_a^b(f-g)$ quand $f$ est au-dessus de $g$."
      },
      {
        "q": "$\\displaystyle\\int_{-1}^{1} x^3\\,\\mathrm{d}x$ vaut :",
        "opts": [
          "$\\frac{1}{2}$",
          "$0$",
          "$2$",
          "$\\frac{1}{4}$"
        ],
        "ok": 1,
        "why": "$\\big[\\frac{x^4}{4}\\big]_{-1}^{1}=\\frac{1}{4}-\\frac{1}{4}=0$ (la fonction est impaire, intervalle symétrique)."
      }
    ],
    "flash": [
      {
        "front": "$\\int_a^b f(x)\\,\\mathrm{d}x=?$ (avec $F'=f$)",
        "back": "$F(b)-F(a)$"
      },
      {
        "front": "Primitive utilisée pour $\\int \\frac{1}{x}\\,\\mathrm{d}x$ sur $]0;+\\infty[$",
        "back": "$\\ln x$"
      },
      {
        "front": "Primitive utilisée pour $\\int \\sin x\\,\\mathrm{d}x$",
        "back": "$-\\cos x$"
      },
      {
        "front": "Primitive utilisée pour $\\int \\cos x\\,\\mathrm{d}x$",
        "back": "$\\sin x$"
      },
      {
        "front": "Formule de l'intégration par parties",
        "back": "$\\int_a^b u'v=\\big[uv\\big]_a^b-\\int_a^b uv'$"
      },
      {
        "front": "Relation de Chasles",
        "back": "$\\int_a^c f=\\int_a^b f+\\int_b^c f$"
      },
      {
        "front": "Valeur moyenne de $f$ sur $[a;b]$",
        "back": "$\\mu=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x$"
      },
      {
        "front": "Que vaut $\\int_b^a f$ ?",
        "back": "$-\\int_a^b f$ (bornes inversées)"
      },
      {
        "front": "Aire entre $C_f$ et $C_g$ si $f\\ge g$ sur $[a;b]$",
        "back": "$\\int_a^b\\big(f(x)-g(x)\\big)\\,\\mathrm{d}x$"
      },
      {
        "front": "$\\int_a^b \\lambda\\,\\mathrm{d}x=?$ ($\\lambda$ constante)",
        "back": "$\\lambda(b-a)$"
      },
      {
        "front": "Que vaut $\\int_a^a f$ ?",
        "back": "$0$"
      },
      {
        "front": "Si $f\\ge0$ sur $[a;b]$ ($a\\le b$), signe de $\\int_a^b f$ ?",
        "back": "Positif ou nul : $\\int_a^b f\\ge0$"
      }
    ],
    "vraifaux": [
      {
        "q": "Si $f$ est continue et positive sur $[a;b]$, $\\int_a^b f$ représente l'aire sous la courbe.",
        "v": true,
        "why": "C'est la définition de l'intégrale comme aire (en u.a.) pour une fonction continue positive."
      },
      {
        "q": "On a toujours $\\int_a^b f\\ge0$ pour toute fonction continue $f$.",
        "v": false,
        "why": "Faux : si $f$ prend des valeurs négatives, l'intégrale peut être négative. La positivité suppose $f\\ge0$."
      },
      {
        "q": "$\\int_a^b(f+g)=\\int_a^b f+\\int_a^b g$.",
        "v": true,
        "why": "Vrai : c'est la linéarité de l'intégrale."
      },
      {
        "q": "$\\int_a^b(f\\times g)=\\int_a^b f\\times\\int_a^b g$.",
        "v": false,
        "why": "Faux : l'intégrale n'est pas multiplicative. Aucune formule simple ne donne l'intégrale d'un produit (on utilise l'IPP)."
      },
      {
        "q": "Inverser les bornes d'une intégrale change son signe.",
        "v": true,
        "why": "Vrai : $\\int_b^a f=-\\int_a^b f$, c'est une convention cohérente avec Chasles."
      },
      {
        "q": "La valeur d'une intégrale dépend de la primitive choisie.",
        "v": false,
        "why": "Faux : deux primitives diffèrent d'une constante, qui s'élimine dans $F(b)-F(a)$."
      },
      {
        "q": "Pour une fonction négative sur $[a;b]$, l'aire géométrique vaut $\\big|\\int_a^b f\\big|$.",
        "v": true,
        "why": "Vrai : l'intégrale est négative, l'aire (toujours positive) est sa valeur absolue."
      },
      {
        "q": "L'intégration par parties s'utilise surtout pour intégrer un produit comme $x\\,\\mathrm{e}^x$.",
        "v": true,
        "why": "Vrai : l'IPP est adaptée aux produits, notamment $x\\mathrm{e}^x$, $x\\sin x$ ou $\\ln x$."
      },
      {
        "q": "Si $f\\le g$ sur $[a;b]$ avec $a<b$, alors $\\int_a^b f\\le\\int_a^b g$.",
        "v": true,
        "why": "Vrai : l'intégrale conserve l'ordre (intégration des inégalités)."
      },
      {
        "q": "$\\int_a^a f(x)\\,\\mathrm{d}x$ peut être différent de $0$.",
        "v": false,
        "why": "Faux : quand les deux bornes sont égales, l'intégrale vaut toujours $0$."
      }
    ],
    "qmethode": [
      {
        "q": "On veut calculer $\\int_0^1 x\\,\\mathrm{e}^{x}\\,\\mathrm{d}x$. Quelle méthode ?",
        "opts": [
          "Intégration par parties",
          "Chercher une primitive évidente dans le formulaire",
          "Décomposer par linéarité",
          "Calculer une valeur moyenne"
        ],
        "ok": 0,
        "why": "L'intégrande est un produit $x\\times\\mathrm{e}^x$ sans primitive immédiate : l'IPP (dériver $x$, primitiver $\\mathrm{e}^x$) est la bonne approche."
      },
      {
        "q": "Pour trouver l'aire comprise entre $C_f$ et $C_g$ sur $[a;b]$, on commence par :",
        "opts": [
          "Calculer $\\int_a^b f$ puis $\\int_a^b g$ séparément",
          "Déterminer quelle courbe est au-dessus de l'autre",
          "Inverser les bornes",
          "Calculer la valeur moyenne de $f-g$"
        ],
        "ok": 1,
        "why": "Il faut d'abord savoir laquelle des deux fonctions domine (signe de $f-g$) pour intégrer $\\text{haut}-\\text{bas}$ et obtenir une aire positive."
      },
      {
        "q": "Une fonction $f$ change de signe sur $[a;b]$ et on cherche l'aire géométrique totale. On :",
        "opts": [
          "Calcule directement $\\int_a^b f$",
          "Calcule $\\int_a^b f^2$",
          "Découpe avec Chasles aux points où $f$ s'annule, en valeurs absolues",
          "Utilise l'intégration par parties"
        ],
        "ok": 2,
        "why": "L'aire géométrique exige de séparer les portions positives et négatives (Chasles aux zéros de $f$) puis de sommer les valeurs absolues."
      },
      {
        "q": "Pour calculer $\\int_1^{\\mathrm{e}} \\ln x\\,\\mathrm{d}x$, la méthode adaptée est :",
        "opts": [
          "La linéarité",
          "L'intégration par parties avec $u'=1$ et $v=\\ln x$",
          "La relation de Chasles",
          "Le calcul de valeur moyenne"
        ],
        "ok": 1,
        "why": "$\\ln x$ n'a pas de primitive au formulaire : on l'écrit $1\\times\\ln x$ et on fait une IPP avec $u'=1$ ($u=x$) et $v=\\ln x$ ($v'=\\frac{1}{x}$)."
      },
      {
        "q": "On demande la valeur moyenne de $f$ sur $[a;b]$. On calcule :",
        "opts": [
          "$\\frac{1}{b-a}\\int_a^b f$",
          "$\\int_a^b f$",
          "$\\frac{f(a)+f(b)}{2}$",
          "$(b-a)\\int_a^b f$"
        ],
        "ok": 0,
        "why": "La valeur moyenne est $\\mu=\\frac{1}{b-a}\\int_a^b f$ ; ce n'est pas la moyenne des valeurs aux bornes."
      },
      {
        "q": "Pour $\\int_0^2 (3x^2-2x+1)\\,\\mathrm{d}x$, le plus rapide est :",
        "opts": [
          "L'intégration par parties",
          "Une primitive terme à terme par linéarité",
          "La relation de Chasles",
          "Une lecture graphique"
        ],
        "ok": 1,
        "why": "C'est un polynôme : par linéarité, on primitive chaque terme ($x^3-x^2+x$) puis on évalue entre $0$ et $2$."
      },
      {
        "q": "On connaît $\\int_0^2 f=5$ et $\\int_0^3 f=4$. Pour obtenir $\\int_2^3 f$, on utilise :",
        "opts": [
          "La linéarité",
          "L'intégration par parties",
          "La relation de Chasles",
          "La valeur moyenne"
        ],
        "ok": 2,
        "why": "Chasles : $\\int_0^3 f=\\int_0^2 f+\\int_2^3 f$, donc $\\int_2^3 f=4-5=-1$."
      }
    ]
  },
  {
    "id": "proba-conditionnelles",
    "tag": "Probabilités",
    "title": "Probabilités conditionnelles",
    "intro": "Une probabilité conditionnelle, c'est une probabilité « sachant que ». Tu sais qu'un événement $A$ s'est réalisé, et tu veux la proba que $B$ se réalise dans ce nouveau contexte : on note ça $P_A(B)$. Tout le chapitre tient dans une poignée d'outils : la formule de définition, l'arbre pondéré (ton meilleur ami pour ne pas te tromper), la formule des probabilités totales, l'indépendance, et les calculs « renversés » à la Bayes. Maîtrise l'arbre et tu gères 90 % des exos.",
    "objectifs": [
      "Calculer une probabilité conditionnelle $P_A(B)$ avec sa définition.",
      "Construire et lire un arbre pondéré (somme des branches = 1, proba d'un chemin = produit).",
      "Appliquer la formule des probabilités totales sur une partition de l'univers.",
      "Reconnaître et utiliser l'indépendance de deux événements.",
      "Calculer une probabilité « renversée » du type $P_B(A)$ à partir d'un arbre (idée de Bayes).",
      "Éviter les pièges classiques : $P_A(B)$ vs $P_B(A)$, indépendant vs incompatible."
    ],
    "cours": [
      {
        "t": "Probabilité conditionnelle",
        "d": "Soit $A$ et $B$ deux événements avec $P(A)\\ne 0$. La probabilité de $B$ sachant $A$ est $P_A(B)=\\dfrac{P(A\\cap B)}{P(A)}$. On la lit « proba de $B$ sachant $A$ ». On en déduit la formule la plus utile en pratique : $P(A\\cap B)=P(A)\\times P_A(B)$ (la proba d'une intersection se calcule en multipliant le long d'un chemin)."
      },
      {
        "t": "Arbre pondéré",
        "d": "Un arbre représente une expérience en plusieurs étapes. Règles d'or : (1) la somme des probabilités des branches issues d'un même nœud vaut $1$ ; (2) la probabilité d'un chemin (une feuille) est le produit des probabilités rencontrées le long du chemin ; (3) les branches du 2ᵉ niveau portent des probabilités conditionnelles. Exemple : la branche $A$ puis $B$ donne $P(A\\cap B)=P(A)\\times P_A(B)$."
      },
      {
        "t": "Formule des probabilités totales",
        "d": "Si $A$ et $\\bar A$ forment une partition de l'univers (cas le plus fréquent au bac), alors pour tout événement $B$ : $P(B)=P(A\\cap B)+P(\\bar A\\cap B)=P(A)\\,P_A(B)+P(\\bar A)\\,P_{\\bar A}(B)$. Concrètement : pour obtenir $P(B)$, on additionne tous les chemins de l'arbre qui aboutissent à $B$. Avec une partition plus fine $A_1,\\dots,A_n$ : $P(B)=\\sum_{k=1}^{n} P(A_k)\\,P_{A_k}(B)$."
      },
      {
        "t": "Indépendance",
        "d": "Deux événements $A$ et $B$ sont indépendants lorsque $P(A\\cap B)=P(A)\\times P(B)$. De façon équivalente (si $P(A)\\ne 0$), cela signifie $P_A(B)=P(B)$ : savoir que $A$ s'est réalisé ne change rien à la proba de $B$. Attention : indépendant n'a rien à voir avec incompatible. Si $A$ et $B$ sont incompatibles et de probas non nulles, ils sont au contraire dépendants."
      },
      {
        "t": "Probabilités renversées (Bayes)",
        "d": "Souvent l'arbre donne $P_A(B)$ mais l'énoncé demande $P_B(A)$ (par exemple : « sachant que le test est positif, quelle proba d'être malade ? »). On repart de la définition : $P_B(A)=\\dfrac{P(A\\cap B)}{P(B)}$, où le numérateur est un chemin et le dénominateur se calcule par la formule des probabilités totales. C'est l'idée de la formule de Bayes, qu'on n'a pas besoin d'apprendre par cœur : il suffit de l'arbre."
      }
    ],
    "formulaireTitre": "Formules à connaître par cœur",
    "formulaire": [
      [
        "Probabilité conditionnelle",
        "$P_A(B)=\\dfrac{P(A\\cap B)}{P(A)}$, avec $P(A)\\ne 0$"
      ],
      [
        "Proba d'une intersection (chemin)",
        "$P(A\\cap B)=P(A)\\times P_A(B)$"
      ],
      [
        "Probabilités totales (partition $A,\\bar A$)",
        "$P(B)=P(A)\\,P_A(B)+P(\\bar A)\\,P_{\\bar A}(B)$"
      ],
      [
        "Probabilités totales (cas général)",
        "$P(B)=\\displaystyle\\sum_{k=1}^{n} P(A_k)\\,P_{A_k}(B)$"
      ],
      [
        "Indépendance",
        "$P(A\\cap B)=P(A)\\times P(B)$"
      ],
      [
        "Indépendance (forme conditionnelle)",
        "$P_A(B)=P(B)$"
      ],
      [
        "Proba renversée (Bayes)",
        "$P_B(A)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{P(A)\\,P_A(B)}{P(B)}$"
      ],
      [
        "Événement contraire",
        "$P(\\bar A)=1-P(A)$"
      ],
      [
        "Union (formule du crible)",
        "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$"
      ],
      [
        "Somme des branches d'un nœud",
        "$P_A(B)+P_A(\\bar B)=1$"
      ]
    ],
    "methodes": [
      {
        "t": "Lire un énoncé et construire l'arbre",
        "etapes": [
          "Repère l'étape 1 (souvent une partition $A,\\bar A$) et place ses probas sur les premières branches.",
          "Repère l'étape 2 : ce sont des probas conditionnelles $P_A(\\cdot)$ et $P_{\\bar A}(\\cdot)$.",
          "Vérifie que la somme des branches de chaque nœud fait bien $1$ (complète avec l'événement contraire si besoin).",
          "Pour la proba d'un scénario complet, multiplie le long du chemin."
        ]
      },
      {
        "t": "Calculer $P(B)$ avec les probabilités totales",
        "etapes": [
          "Identifie tous les chemins de l'arbre qui mènent à $B$.",
          "Calcule la proba de chaque chemin (produit des branches).",
          "Additionne ces probas : $P(B)=P(A)\\,P_A(B)+P(\\bar A)\\,P_{\\bar A}(B)$.",
          "N'oublie pas de pondérer par $P(A)$ et $P(\\bar A)$ : c'est l'erreur n°1."
        ]
      },
      {
        "t": "Calculer une proba renversée $P_B(A)$",
        "etapes": [
          "Écris la définition : $P_B(A)=\\dfrac{P(A\\cap B)}{P(B)}$.",
          "Numérateur : la proba du chemin $A$ puis $B$, soit $P(A)\\,P_A(B)$.",
          "Dénominateur : calcule $P(B)$ par la formule des probabilités totales.",
          "Fais le quotient et donne une valeur approchée si l'énoncé le demande."
        ]
      },
      {
        "t": "Tester l'indépendance de deux événements",
        "etapes": [
          "Calcule séparément $P(A)$, $P(B)$ et $P(A\\cap B)$.",
          "Compare $P(A\\cap B)$ avec le produit $P(A)\\times P(B)$.",
          "Si c'est égal : $A$ et $B$ sont indépendants. Sinon : ils sont dépendants.",
          "Variante : vérifie si $P_A(B)=P(B)$ (même conclusion)."
        ]
      }
    ],
    "annales": [
      {
        "y": 2024,
        "s": "Dans une population, $4\\%$ des individus sont porteurs d'une maladie. Un test donne un résultat positif dans $97\\%$ des cas pour un malade et négatif dans $98\\%$ des cas pour un non-malade. On choisit un individu au hasard, on note $M$ « être malade » et $T$ « le test est positif ». 1) Construire l'arbre. 2) Calculer $P(T)$. 3) Une personne a un test positif : calculer $P_T(M)$ (valeur arrondie).",
        "loc": "Métropole (type sujet)"
      },
      {
        "y": 2023,
        "s": "Une urne contient des jetons gagnants et perdants. La proba qu'un joueur gagne au 1er tour est $0{,}3$. S'il a gagné, il regagne au tour suivant avec proba $0{,}6$ ; s'il a perdu, il gagne avec proba $0{,}2$. Calculer la probabilité de gagner au 2ᵉ tour à l'aide de la formule des probabilités totales.",
        "loc": "Centres étrangers (type sujet)"
      },
      {
        "y": 2025,
        "s": "Un site propose deux offres $A$ et $B$. $60\\%$ des clients choisissent $A$. Parmi ceux qui choisissent $A$, $25\\%$ reviennent ; parmi ceux qui choisissent $B$, $40\\%$ reviennent. Sachant qu'un client est revenu, quelle est la probabilité qu'il ait choisi l'offre $B$ ?",
        "loc": "Métropole (type sujet)"
      }
    ],
    "piege": "Trois pièges qui coûtent des points : (1) confondre $P_A(B)$ et $P_B(A)$ — ce ne sont PAS les mêmes (« proba d'être malade sachant test positif » $\\ne$ « proba d'avoir un test positif sachant malade »). (2) Confondre indépendants ($P(A\\cap B)=P(A)P(B)$) et incompatibles ($A\\cap B=\\varnothing$) : deux événements incompatibles de probas non nulles sont au contraire DÉPENDANTS. (3) Oublier de pondérer dans la formule des probabilités totales : on écrit $P(A)\\,P_A(B)+P(\\bar A)\\,P_{\\bar A}(B)$, et non $P_A(B)+P_{\\bar A}(B)$.",
    "qcm": [
      {
        "q": "Par définition, pour $P(A)\\ne 0$, $P_A(B)$ vaut :",
        "opts": [
          "$P(A\\cap B)\\times P(A)$",
          "$\\dfrac{P(A\\cap B)}{P(A)}$",
          "$\\dfrac{P(A)}{P(A\\cap B)}$",
          "$\\dfrac{P(A\\cap B)}{P(B)}$"
        ],
        "ok": 1,
        "why": "$P_A(B)=\\dfrac{P(A\\cap B)}{P(A)}$ : la proba de l'intersection divisée par la proba de l'événement conditionnant."
      },
      {
        "q": "On a $P(A)=0{,}4$ et $P_A(B)=0{,}3$. Alors $P(A\\cap B)$ vaut :",
        "opts": [
          "$0{,}12$",
          "$0{,}7$",
          "$0{,}75$",
          "$1{,}33$"
        ],
        "ok": 0,
        "why": "$P(A\\cap B)=P(A)\\times P_A(B)=0{,}4\\times 0{,}3=0{,}12$."
      },
      {
        "q": "Dans un arbre pondéré, la somme des probabilités des branches issues d'un même nœud vaut :",
        "opts": [
          "$0$",
          "le produit des branches",
          "$1$",
          "$P(A)$"
        ],
        "ok": 2,
        "why": "Les branches issues d'un nœud décrivent tous les cas possibles à cette étape : leur somme vaut toujours $1$."
      },
      {
        "q": "La probabilité d'un chemin complet dans un arbre s'obtient en :",
        "opts": [
          "multipliant les probabilités le long du chemin",
          "additionnant les probabilités",
          "prenant la plus grande",
          "divisant la première par la dernière"
        ],
        "ok": 0,
        "why": "Proba d'un chemin = produit des probabilités rencontrées (par ex. $P(A)\\times P_A(B)$)."
      },
      {
        "q": "Pour une partition $A,\\bar A$, la formule des probabilités totales donne $P(B)=$ :",
        "opts": [
          "$P_A(B)+P_{\\bar A}(B)$",
          "$P(A)P(B)+P(\\bar A)P(B)$",
          "$P(A)\\,P_A(B)+P(\\bar A)\\,P_{\\bar A}(B)$",
          "$P(A\\cap B)\\times P(\\bar A\\cap B)$"
        ],
        "ok": 2,
        "why": "On somme les chemins menant à $B$ en pondérant : $P(A)\\,P_A(B)+P(\\bar A)\\,P_{\\bar A}(B)$."
      },
      {
        "q": "$A$ et $B$ sont indépendants si et seulement si :",
        "opts": [
          "$A\\cap B=\\varnothing$",
          "$P(A\\cap B)=P(A)\\times P(B)$",
          "$P(A)=P(B)$",
          "$P(A\\cup B)=1$"
        ],
        "ok": 1,
        "why": "L'indépendance se traduit par $P(A\\cap B)=P(A)\\times P(B)$ (équivaut à $P_A(B)=P(B)$)."
      },
      {
        "q": "On donne $P(A)=0{,}5$, $P(B)=0{,}4$, $P(A\\cap B)=0{,}2$. Les événements $A$ et $B$ sont :",
        "opts": [
          "incompatibles",
          "indépendants",
          "dépendants",
          "contraires"
        ],
        "ok": 1,
        "why": "$P(A)\\times P(B)=0{,}5\\times 0{,}4=0{,}2=P(A\\cap B)$ : ils sont bien indépendants."
      },
      {
        "q": "Deux événements incompatibles $A$ et $B$ avec $P(A)>0$ et $P(B)>0$ sont :",
        "opts": [
          "toujours indépendants",
          "dépendants",
          "contraires",
          "équiprobables"
        ],
        "ok": 1,
        "why": "Incompatibles $\\Rightarrow P(A\\cap B)=0$, alors que $P(A)P(B)>0$ : donc dépendants. Incompatible $\\ne$ indépendant."
      },
      {
        "q": "Sachant $P(A)=0{,}2$, $P_A(B)=0{,}9$, $P(\\bar A)=0{,}8$, $P_{\\bar A}(B)=0{,}1$, la valeur de $P(B)$ est :",
        "opts": [
          "$0{,}1$",
          "$0{,}18$",
          "$0{,}26$",
          "$1$"
        ],
        "ok": 2,
        "why": "$P(B)=0{,}2\\times 0{,}9+0{,}8\\times 0{,}1=0{,}18+0{,}08=0{,}26$."
      },
      {
        "q": "Avec les données précédentes ($P(B)=0{,}26$), la proba renversée $P_B(A)$ vaut environ :",
        "opts": [
          "$0{,}90$",
          "$0{,}69$",
          "$0{,}26$",
          "$0{,}18$"
        ],
        "ok": 1,
        "why": "$P_B(A)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{0{,}18}{0{,}26}\\approx 0{,}69$."
      },
      {
        "q": "Si $A$ et $B$ sont indépendants, alors $P_A(B)$ est égal à :",
        "opts": [
          "$P(A)$",
          "$P(B)$",
          "$1$",
          "$0$"
        ],
        "ok": 1,
        "why": "L'indépendance signifie que conditionner par $A$ ne change rien : $P_A(B)=P(B)$."
      },
      {
        "q": "On lance un dé équilibré. $A$ : « obtenir un nombre pair », $B$ : « obtenir un multiple de $3$ ». $P_A(B)$ vaut :",
        "opts": [
          "$\\dfrac{1}{6}$",
          "$\\dfrac{1}{3}$",
          "$\\dfrac{1}{2}$",
          "$\\dfrac{2}{3}$"
        ],
        "ok": 1,
        "why": "$A=\\{2,4,6\\}$, $A\\cap B=\\{6\\}$. Donc $P_A(B)=\\dfrac{P(A\\cap B)}{P(A)}=\\dfrac{1/6}{1/2}=\\dfrac{1}{3}$."
      }
    ],
    "flash": [
      {
        "front": "Formule de la probabilité conditionnelle $P_A(B)$ ?",
        "back": "$P_A(B)=\\dfrac{P(A\\cap B)}{P(A)}$, avec $P(A)\\ne 0$"
      },
      {
        "front": "Proba d'une intersection $P(A\\cap B)$ ?",
        "back": "$P(A\\cap B)=P(A)\\times P_A(B)$"
      },
      {
        "front": "Règle : somme des branches d'un nœud d'un arbre ?",
        "back": "Elle vaut toujours $1$"
      },
      {
        "front": "Règle : proba d'un chemin dans un arbre ?",
        "back": "Produit des probabilités le long du chemin"
      },
      {
        "front": "Formule des probabilités totales (partition $A,\\bar A$) ?",
        "back": "$P(B)=P(A)\\,P_A(B)+P(\\bar A)\\,P_{\\bar A}(B)$"
      },
      {
        "front": "Définition de l'indépendance de $A$ et $B$ ?",
        "back": "$P(A\\cap B)=P(A)\\times P(B)$"
      },
      {
        "front": "Indépendance sous forme conditionnelle ?",
        "back": "$P_A(B)=P(B)$ (si $P(A)\\ne 0$)"
      },
      {
        "front": "Comment calculer une proba renversée $P_B(A)$ ?",
        "back": "$P_B(A)=\\dfrac{P(A\\cap B)}{P(B)}$, avec $P(B)$ par les probabilités totales"
      },
      {
        "front": "Deux événements incompatibles (probas $>0$) sont-ils indépendants ?",
        "back": "Non : ils sont dépendants ($P(A\\cap B)=0\\ne P(A)P(B)$)"
      },
      {
        "front": "Proba de l'événement contraire $\\bar A$ ?",
        "back": "$P(\\bar A)=1-P(A)$"
      },
      {
        "front": "Formule du crible $P(A\\cup B)$ ?",
        "back": "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$"
      },
      {
        "front": "$P_A(B)$ et $P_B(A)$ sont-ils égaux en général ?",
        "back": "Non, sauf cas particulier : ne jamais les confondre"
      }
    ],
    "vraifaux": [
      {
        "q": "Pour tout $A$ tel que $P(A)\\ne 0$ : $P_A(B)=\\dfrac{P(A\\cap B)}{P(A)}$.",
        "v": true,
        "why": "C'est exactement la définition de la probabilité conditionnelle."
      },
      {
        "q": "On a toujours $P_A(B)=P_B(A)$.",
        "v": false,
        "why": "Faux : les dénominateurs diffèrent ($P(A)$ contre $P(B)$). L'égalité n'a lieu que dans des cas particuliers."
      },
      {
        "q": "Dans un arbre, la somme des probabilités des branches issues d'un même nœud vaut $1$.",
        "v": true,
        "why": "Ces branches décrivent tous les cas possibles à cette étape."
      },
      {
        "q": "La probabilité d'un chemin dans un arbre est la somme des probabilités des branches.",
        "v": false,
        "why": "Faux : c'est le PRODUIT des probabilités le long du chemin."
      },
      {
        "q": "Si $A$ et $B$ sont indépendants, alors $P(A\\cap B)=P(A)\\times P(B)$.",
        "v": true,
        "why": "C'est précisément la définition de l'indépendance."
      },
      {
        "q": "Deux événements incompatibles de probabilités non nulles sont indépendants.",
        "v": false,
        "why": "Faux : incompatibles donne $P(A\\cap B)=0$, mais $P(A)P(B)>0$ ; ils sont dépendants."
      },
      {
        "q": "Si $A$ et $B$ sont indépendants, alors $P_A(B)=P(B)$.",
        "v": true,
        "why": "Vrai : conditionner par $A$ ne modifie pas la proba de $B$."
      },
      {
        "q": "Dans la formule des probabilités totales, on peut écrire $P(B)=P_A(B)+P_{\\bar A}(B)$.",
        "v": false,
        "why": "Faux : il faut pondérer par $P(A)$ et $P(\\bar A)$, soit $P(A)P_A(B)+P(\\bar A)P_{\\bar A}(B)$."
      },
      {
        "q": "Une probabilité conditionnelle peut être supérieure à $1$.",
        "v": false,
        "why": "Faux : $P_A(B)$ est une probabilité, donc comprise entre $0$ et $1$."
      },
      {
        "q": "$P_A(B)+P_A(\\bar B)=1$.",
        "v": true,
        "why": "Vrai : sachant $A$, $B$ et $\\bar B$ forment une partition, donc la somme des deux branches vaut $1$."
      }
    ],
    "qmethode": [
      {
        "q": "On connaît $P(A)$, $P_A(B)$ et $P_{\\bar A}(B)$, et on veut $P(B)$. Quelle méthode ?",
        "opts": [
          "Formule des probabilités totales",
          "Définition de l'indépendance",
          "Formule du crible $P(A\\cup B)$",
          "Calcul de $P_B(A)$ directement"
        ],
        "ok": 0,
        "why": "On dispose d'une partition $A,\\bar A$ : on somme les chemins pondérés, c'est la formule des probabilités totales."
      },
      {
        "q": "L'énoncé donne $P_A(B)$ mais demande $P_B(A)$. Quelle démarche ?",
        "opts": [
          "Dire que c'est la même chose",
          "Repartir de $P_B(A)=\\dfrac{P(A\\cap B)}{P(B)}$ et calculer $P(B)$",
          "Multiplier $P_A(B)$ par $P(A)$",
          "Utiliser l'indépendance"
        ],
        "ok": 1,
        "why": "C'est une proba renversée (Bayes) : on applique la définition avec $P(B)$ calculé par les probabilités totales."
      },
      {
        "q": "Pour montrer que deux événements $A$ et $B$ sont indépendants, on doit :",
        "opts": [
          "Vérifier qu'ils sont incompatibles",
          "Vérifier que $P(A\\cap B)=P(A)\\times P(B)$",
          "Vérifier que $P(A)=P(B)$",
          "Vérifier que $P(A\\cup B)=1$"
        ],
        "ok": 1,
        "why": "L'indépendance se prouve en comparant $P(A\\cap B)$ et le produit $P(A)\\times P(B)$."
      },
      {
        "q": "Une expérience se déroule en deux étapes successives (tirage puis tirage). Quel outil privilégier ?",
        "opts": [
          "Un arbre pondéré",
          "La loi binomiale",
          "Une intégrale",
          "Le produit scalaire"
        ],
        "ok": 0,
        "why": "Les expériences à étapes avec probas conditionnelles se modélisent naturellement par un arbre pondéré."
      },
      {
        "q": "On veut la probabilité que les DEUX événements $A$ puis $B$ se réalisent dans un arbre. On :",
        "opts": [
          "additionne les branches du chemin",
          "multiplie les probabilités le long du chemin",
          "soustrait $P(B)$ de $P(A)$",
          "divise $P(A)$ par $P(B)$"
        ],
        "ok": 1,
        "why": "La proba d'un chemin est le produit des probabilités rencontrées : $P(A\\cap B)=P(A)\\times P_A(B)$."
      },
      {
        "q": "Un énoncé dit : « parmi les clients de l'offre A, 25 % reviennent ». Cette donnée est :",
        "opts": [
          "une probabilité simple $P(R)$",
          "une probabilité conditionnelle $P_A(R)$",
          "une intersection $P(A\\cap R)$",
          "une indépendance"
        ],
        "ok": 1,
        "why": "« Parmi les clients de A » signale un conditionnement : c'est $P_A(R)=0{,}25$, à placer sur une branche du 2ᵉ niveau."
      },
      {
        "q": "Tu obtiens $P_B(A)\\approx 1{,}4$ à la fin d'un calcul de proba renversée. Que faire ?",
        "opts": [
          "Garder le résultat tel quel",
          "Détecter l'erreur : une proba ne dépasse pas $1$, revérifier le calcul de $P(B)$",
          "Soustraire $1$",
          "Conclure à l'indépendance"
        ],
        "ok": 1,
        "why": "Une probabilité est toujours dans $[0;1]$. Un résultat $>1$ signale une erreur, souvent dans $P(B)$ (probabilités totales)."
      },
      {
        "q": "Pour vérifier rapidement qu'un arbre est correct avant de calculer, on contrôle que :",
        "opts": [
          "toutes les feuilles ont la même proba",
          "la somme des branches de chaque nœud vaut $1$",
          "la première proba vaut $0{,}5$",
          "tous les chemins se multiplient"
        ],
        "ok": 1,
        "why": "Le contrôle de base : à chaque nœud, la somme des branches issues doit faire $1$ (sinon erreur de modélisation)."
      }
    ]
  },
  {
    "id": "loi-binomiale",
    "tag": "Probabilités",
    "title": "Loi binomiale et variables aléatoires",
    "intro": "Une variable aléatoire transforme le hasard en nombres : à chaque issue d'une expérience on associe une valeur, et on peut alors parler de moyenne, de dispersion, de probabilités. Le sommet du chapitre, c'est la loi binomiale : elle modélise le nombre de succès quand on répète $n$ fois la même petite expérience à deux issues (pile/face, marche/panne, bon/défectueux). Avec $\\binom{n}{k}p^k(1-p)^{n-k}$ et les formules $E(X)=np$, $V(X)=np(1-p)$, tu couvres une bonne partie des exercices de proba du bac.",
    "objectifs": [
      "Décrire la loi de probabilité d'une variable aléatoire et calculer son espérance, sa variance et son écart-type.",
      "Reconnaître une épreuve de Bernoulli et un schéma de Bernoulli, et vérifier les conditions d'application de la loi binomiale.",
      "Calculer $P(X=k)$, $P(X\\le k)$ et $P(X\\ge k)$ pour $X\\sim\\mathcal{B}(n,p)$, à la main ou à la calculatrice.",
      "Utiliser $E(X)=np$ et $V(X)=np(1-p)$ pour interpréter une situation aléatoire.",
      "Modéliser un problème concret (qualité, jeu, sondage) par une loi binomiale et le résoudre."
    ],
    "cours": [
      {
        "t": "Variable aléatoire et loi de probabilité",
        "d": "Sur un univers $\\Omega$ muni d'une probabilité, une variable aléatoire $X$ associe à chaque issue un nombre réel. Sa loi de probabilité est la donnée de toutes les valeurs $x_i$ que peut prendre $X$ avec leurs probabilités $P(X=x_i)$. La somme de toutes ces probabilités vaut toujours $1$ : $\\sum_i P(X=x_i)=1$. On présente souvent la loi dans un tableau valeurs/probabilités."
      },
      {
        "t": "Espérance, variance, écart-type",
        "d": "L'espérance $E(X)=\\sum_i x_i\\,P(X=x_i)$ est la moyenne des valeurs pondérée par leurs probabilités (la valeur \"attendue\" en moyenne sur un grand nombre de répétitions). La variance mesure la dispersion autour de $E(X)$ : $V(X)=E\\big((X-E(X))^2\\big)$, ce qui se calcule en pratique avec la formule $V(X)=E(X^2)-\\big(E(X)\\big)^2$. L'écart-type $\\sigma(X)=\\sqrt{V(X)}$ a la même unité que $X$."
      },
      {
        "t": "Épreuve et schéma de Bernoulli",
        "d": "Une épreuve de Bernoulli est une expérience à deux issues : succès (probabilité $p$) ou échec (probabilité $1-p$). Si $X$ vaut $1$ en cas de succès et $0$ sinon, alors $E(X)=p$ et $V(X)=p(1-p)$. Un schéma de Bernoulli, c'est la répétition de $n$ épreuves de Bernoulli identiques et indépendantes (mêmes conditions à chaque fois, les résultats n'influent pas les uns sur les autres)."
      },
      {
        "t": "La loi binomiale",
        "d": "Dans un schéma de Bernoulli de $n$ épreuves de paramètre $p$, on note $X$ le nombre de succès. Alors $X$ suit la loi binomiale de paramètres $n$ et $p$, notée $X\\sim\\mathcal{B}(n,p)$. Pour tout entier $k$ entre $0$ et $n$ : $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$. Le coefficient binomial $\\binom{n}{k}$ compte le nombre de façons de placer les $k$ succès parmi les $n$ épreuves : il ne faut jamais l'oublier."
      },
      {
        "t": "Espérance et variance de la loi binomiale",
        "d": "Si $X\\sim\\mathcal{B}(n,p)$, alors $E(X)=np$, $V(X)=np(1-p)$ et $\\sigma(X)=\\sqrt{np(1-p)}$. C'est cohérent : $X$ est la somme de $n$ variables de Bernoulli indépendantes, d'espérance $p$ et de variance $p(1-p)$ chacune. Attention, la variance est $np(1-p)$, pas $np$ : confondre les deux est l'erreur la plus fréquente."
      }
    ],
    "formulaireTitre": "Formules à connaître par coeur",
    "formulaire": [
      [
        "Espérance",
        "$E(X)=\\displaystyle\\sum_i x_i\\,P(X=x_i)$"
      ],
      [
        "Variance (formule de calcul)",
        "$V(X)=E(X^2)-\\big(E(X)\\big)^2$"
      ],
      [
        "Écart-type",
        "$\\sigma(X)=\\sqrt{V(X)}$"
      ],
      [
        "Bernoulli : espérance / variance",
        "$E(X)=p\\,,\\quad V(X)=p(1-p)$"
      ],
      [
        "Loi binomiale : probabilité",
        "$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$"
      ],
      [
        "Coefficient binomial",
        "$\\binom{n}{k}=\\dfrac{n!}{k!\\,(n-k)!}$"
      ],
      [
        "Binomiale : espérance",
        "$E(X)=np$"
      ],
      [
        "Binomiale : variance / écart-type",
        "$V(X)=np(1-p)\\,,\\quad \\sigma(X)=\\sqrt{np(1-p)}$"
      ],
      [
        "Au moins un succès",
        "$P(X\\ge 1)=1-P(X=0)=1-(1-p)^n$"
      ],
      [
        "Complémentaire",
        "$P(X\\ge k)=1-P(X\\le k-1)$"
      ]
    ],
    "methodes": [
      {
        "t": "Vérifier qu'une variable suit une loi binomiale",
        "etapes": [
          "Identifier l'épreuve élémentaire et son succès (avec sa probabilité $p$).",
          "Vérifier les 4 conditions : on répète $n$ fois, les répétitions sont identiques, elles sont indépendantes, chaque épreuve a deux issues.",
          "Définir précisément $X$ = nombre de succès parmi les $n$ épreuves.",
          "Conclure : $X\\sim\\mathcal{B}(n,p)$ en donnant les valeurs de $n$ et de $p$."
        ]
      },
      {
        "t": "Calculer P(X=k), P(X≤k) ou P(X≥k)",
        "etapes": [
          "Pour une valeur exacte : appliquer $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$ sans oublier le coefficient.",
          "Pour $P(X\\le k)$ : utiliser la calculatrice (binomFRép / cdf) ou additionner les $P(X=i)$ pour $i$ de $0$ à $k$.",
          "Pour $P(X\\ge k)$ : passer au complémentaire $P(X\\ge k)=1-P(X\\le k-1)$.",
          "Pour \"au moins un\" : $P(X\\ge 1)=1-P(X=0)=1-(1-p)^n$."
        ]
      },
      {
        "t": "Calculer E(X) et V(X) d'une variable quelconque",
        "etapes": [
          "Dresser le tableau de la loi de $X$ (valeurs et probabilités, somme égale à $1$).",
          "Calculer $E(X)=\\sum x_i P(X=x_i)$.",
          "Calculer $E(X^2)=\\sum x_i^2 P(X=x_i)$.",
          "En déduire $V(X)=E(X^2)-\\big(E(X)\\big)^2$ puis $\\sigma(X)=\\sqrt{V(X)}$."
        ]
      }
    ],
    "annales": [
      {
        "y": 2024,
        "s": "Une urne contient des boules dont $30\\%$ sont gagnantes. On tire successivement $10$ boules avec remise. $X$ compte les boules gagnantes. Justifier que $X\\sim\\mathcal{B}(10\\,;0,3)$, puis calculer $P(X=3)$ et $P(X\\ge 1)$.",
        "loc": "Métropole"
      },
      {
        "y": 2023,
        "s": "Une machine produit des pièces, chacune défectueuse avec probabilité $0,05$ indépendamment des autres. On prélève un lot de $20$ pièces. Déterminer la loi du nombre $X$ de pièces défectueuses, puis $E(X)$ et la probabilité $P(X\\le 2)$.",
        "loc": "Métropole"
      },
      {
        "y": 2022,
        "s": "Un QCM comporte $8$ questions à $4$ réponses, une seule correcte. Un élève répond au hasard. $X$ est le nombre de bonnes réponses. Donner la loi de $X$, calculer $E(X)$ et $P(X\\ge 4)$.",
        "loc": "Centres étrangers"
      }
    ],
    "piege": "Trois pièges classiques. (1) Avant d'écrire $\\mathcal{B}(n,p)$, vérifie les 4 conditions : $n$ répétitions identiques, indépendantes, deux issues, $n$ fixé d'avance. Un tirage SANS remise n'est PAS binomial (les épreuves ne sont plus indépendantes). (2) N'oublie jamais le coefficient $\\binom{n}{k}$ dans $P(X=k)$ : écrire seulement $p^k(1-p)^{n-k}$ est faux. (3) La variance d'une binomiale est $V(X)=np(1-p)$, pas $np$ — $np$ c'est l'espérance.",
    "qcm": [
      {
        "q": "$X\\sim\\mathcal{B}(n,p)$. Que vaut $P(X=k)$ ?",
        "opts": [
          "$p^k(1-p)^{n-k}$",
          "$\\binom{n}{k}p^k(1-p)^{n-k}$",
          "$\\binom{n}{k}p^{n-k}(1-p)^k$",
          "$\\binom{n}{k}p^k(1-p)^{k}$"
        ],
        "ok": 1,
        "why": "On compte de $\\binom{n}{k}$ façons de placer les $k$ succès, chacun de probabilité $p$, et les $n-k$ échecs de probabilité $1-p$."
      },
      {
        "q": "Si $X\\sim\\mathcal{B}(n,p)$, alors $E(X)$ vaut :",
        "opts": [
          "$np(1-p)$",
          "$p(1-p)$",
          "$np$",
          "$\\sqrt{np}$"
        ],
        "ok": 2,
        "why": "$X$ est la somme de $n$ Bernoulli d'espérance $p$, donc $E(X)=np$."
      },
      {
        "q": "Si $X\\sim\\mathcal{B}(n,p)$, alors $V(X)$ vaut :",
        "opts": [
          "$np$",
          "$np(1-p)$",
          "$\\sqrt{np(1-p)}$",
          "$n p^2$"
        ],
        "ok": 1,
        "why": "La variance d'une binomiale est $np(1-p)$ ; $np$ est l'espérance, à ne pas confondre."
      },
      {
        "q": "$X\\sim\\mathcal{B}(5\\,;0,2)$. Que vaut $P(X=0)$ ?",
        "opts": [
          "$0,8^5$",
          "$0,2^5$",
          "$5\\times 0,8^4$",
          "$0$"
        ],
        "ok": 0,
        "why": "$P(X=0)=\\binom{5}{0}0,2^0\\times 0,8^5=0,8^5\\approx 0,328$."
      },
      {
        "q": "Pour une épreuve de Bernoulli de paramètre $p$, l'espérance et la variance sont :",
        "opts": [
          "$E=p(1-p)$ et $V=p$",
          "$E=p$ et $V=p^2$",
          "$E=p$ et $V=p(1-p)$",
          "$E=1-p$ et $V=p$"
        ],
        "ok": 2,
        "why": "Une variable de Bernoulli vaut $1$ avec proba $p$, $0$ sinon : $E(X)=p$ et $V(X)=p(1-p)$."
      },
      {
        "q": "On tire $4$ cartes SANS remise dans un jeu et on compte les coeurs. Le nombre de coeurs suit-il une loi binomiale ?",
        "opts": [
          "Oui, $\\mathcal{B}(4\\,;0,25)$",
          "Non, les tirages ne sont pas indépendants",
          "Oui, $\\mathcal{B}(4\\,;0,5)$",
          "Non, il y a plus de deux issues"
        ],
        "ok": 1,
        "why": "Sans remise, la composition du jeu change à chaque tirage : les épreuves ne sont pas indépendantes, donc pas de loi binomiale."
      },
      {
        "q": "$X\\sim\\mathcal{B}(n,p)$. Comment exprimer $P(X\\ge 1)$ simplement ?",
        "opts": [
          "$np$",
          "$1-(1-p)^n$",
          "$(1-p)^n$",
          "$1-p^n$"
        ],
        "ok": 1,
        "why": "$P(X\\ge 1)=1-P(X=0)=1-(1-p)^n$ (au moins un succès = pas zéro succès)."
      },
      {
        "q": "Quel est le bon ordre de grandeur du coefficient $\\binom{6}{2}$ ?",
        "opts": [
          "$12$",
          "$15$",
          "$30$",
          "$36$"
        ],
        "ok": 1,
        "why": "$\\binom{6}{2}=\\dfrac{6!}{2!\\,4!}=\\dfrac{6\\times 5}{2}=15$."
      },
      {
        "q": "$X\\sim\\mathcal{B}(20\\,;0,5)$. Que vaut $\\sigma(X)$ ?",
        "opts": [
          "$\\sqrt{5}$",
          "$5$",
          "$10$",
          "$\\sqrt{10}$"
        ],
        "ok": 0,
        "why": "$V(X)=np(1-p)=20\\times 0,5\\times 0,5=5$, donc $\\sigma(X)=\\sqrt{5}$."
      },
      {
        "q": "Une variable $X$ prend les valeurs $0,1,2$ avec probabilités $0,5\\,;0,3\\,;0,2$. Que vaut $E(X)$ ?",
        "opts": [
          "$1$",
          "$0,7$",
          "$0,5$",
          "$1,2$"
        ],
        "ok": 1,
        "why": "$E(X)=0\\times 0,5+1\\times 0,3+2\\times 0,2=0,3+0,4=0,7$."
      },
      {
        "q": "Pour $X\\sim\\mathcal{B}(n,p)$, on a $P(X\\le k-1)=0,7$. Que vaut $P(X\\ge k)$ ?",
        "opts": [
          "$0,7$",
          "$0,3$",
          "$1,7$",
          "On ne peut pas savoir"
        ],
        "ok": 1,
        "why": "$P(X\\ge k)=1-P(X\\le k-1)=1-0,7=0,3$ (événements complémentaires)."
      },
      {
        "q": "Quelles sont les 4 conditions pour modéliser par une loi binomiale ?",
        "opts": [
          "Tirages avec ordre, distincts, dépendants, deux issues",
          "$n$ répétitions identiques, indépendantes, deux issues, $n$ fixé",
          "Une seule épreuve à plusieurs issues équiprobables",
          "Des épreuves de probabilités différentes mais indépendantes"
        ],
        "ok": 1,
        "why": "Loi binomiale = schéma de Bernoulli : $n$ fixé, répétitions identiques et indépendantes, deux issues (succès/échec)."
      }
    ],
    "flash": [
      {
        "front": "Que vaut $P(X=k)$ pour $X\\sim\\mathcal{B}(n,p)$ ?",
        "back": "$\\binom{n}{k}p^k(1-p)^{n-k}$"
      },
      {
        "front": "Espérance d'une loi binomiale $\\mathcal{B}(n,p)$ ?",
        "back": "$E(X)=np$"
      },
      {
        "front": "Variance d'une loi binomiale $\\mathcal{B}(n,p)$ ?",
        "back": "$V(X)=np(1-p)$"
      },
      {
        "front": "Écart-type d'une loi binomiale ?",
        "back": "$\\sigma(X)=\\sqrt{np(1-p)}$"
      },
      {
        "front": "Espérance d'une variable de Bernoulli de paramètre $p$ ?",
        "back": "$E(X)=p$"
      },
      {
        "front": "Variance d'une variable de Bernoulli de paramètre $p$ ?",
        "back": "$V(X)=p(1-p)$"
      },
      {
        "front": "Formule de calcul de la variance $V(X)$ ?",
        "back": "$V(X)=E(X^2)-\\big(E(X)\\big)^2$"
      },
      {
        "front": "Formule générale de l'espérance ?",
        "back": "$E(X)=\\displaystyle\\sum_i x_i\\,P(X=x_i)$"
      },
      {
        "front": "Probabilité d'au moins un succès, $X\\sim\\mathcal{B}(n,p)$ ?",
        "back": "$P(X\\ge 1)=1-(1-p)^n$"
      },
      {
        "front": "Coefficient binomial $\\binom{n}{k}$ ?",
        "back": "$\\dfrac{n!}{k!\\,(n-k)!}$"
      },
      {
        "front": "Comment relier $P(X\\ge k)$ à une probabilité cumulée ?",
        "back": "$P(X\\ge k)=1-P(X\\le k-1)$"
      },
      {
        "front": "Que vaut $\\displaystyle\\sum_i P(X=x_i)$ pour toute variable aléatoire ?",
        "back": "$1$"
      }
    ],
    "vraifaux": [
      {
        "q": "Pour $X\\sim\\mathcal{B}(n,p)$, on a $E(X)=np$.",
        "v": true,
        "why": "C'est la formule de l'espérance de la loi binomiale."
      },
      {
        "q": "Pour $X\\sim\\mathcal{B}(n,p)$, la variance vaut $np$.",
        "v": false,
        "why": "La variance vaut $np(1-p)$ ; $np$ est l'espérance."
      },
      {
        "q": "Un tirage de plusieurs boules SANS remise donne toujours une loi binomiale.",
        "v": false,
        "why": "Sans remise, les tirages ne sont pas indépendants : la loi binomiale ne s'applique pas."
      },
      {
        "q": "$P(X=k)=p^k(1-p)^{n-k}$ sans coefficient binomial.",
        "v": false,
        "why": "Il manque $\\binom{n}{k}$, qui compte les positions possibles des $k$ succès."
      },
      {
        "q": "L'écart-type s'obtient en prenant la racine carrée de la variance.",
        "v": true,
        "why": "Par définition, $\\sigma(X)=\\sqrt{V(X)}$."
      },
      {
        "q": "Dans une épreuve de Bernoulli, il y a exactement deux issues.",
        "v": true,
        "why": "Succès (proba $p$) ou échec (proba $1-p$) : deux issues seulement."
      },
      {
        "q": "La somme des probabilités $P(X=x_i)$ d'une loi peut valoir $0,9$.",
        "v": false,
        "why": "La somme de toutes les probabilités d'une loi vaut toujours $1$."
      },
      {
        "q": "Pour $X\\sim\\mathcal{B}(n,p)$, $P(X\\ge 1)=1-(1-p)^n$.",
        "v": true,
        "why": "C'est le complémentaire de $P(X=0)=(1-p)^n$."
      },
      {
        "q": "L'espérance d'une variable aléatoire est toujours l'une des valeurs prises par $X$.",
        "v": false,
        "why": "L'espérance est une moyenne pondérée : elle peut ne correspondre à aucune valeur possible (ex. $0,7$)."
      },
      {
        "q": "Dans un schéma de Bernoulli, les épreuves doivent être identiques et indépendantes.",
        "v": true,
        "why": "Ce sont deux des conditions définissant le schéma de Bernoulli."
      }
    ],
    "qmethode": [
      {
        "q": "On lance 50 fois une pièce truquée (proba pile $=0,4$) et on compte les piles. Quel modèle ?",
        "opts": [
          "Loi binomiale $\\mathcal{B}(50\\,;0,4)$",
          "Une seule épreuve de Bernoulli",
          "Loi avec espérance $0,4$",
          "Aucun modèle binomial possible"
        ],
        "ok": 0,
        "why": "50 répétitions identiques, indépendantes, à deux issues : c'est un schéma de Bernoulli, donc $\\mathcal{B}(50\\,;0,4)$."
      },
      {
        "q": "On veut la probabilité d'avoir AU MOINS un succès parmi $n$ épreuves. Meilleure méthode ?",
        "opts": [
          "Passer par le complémentaire $1-P(X=0)$",
          "Additionner $P(X=k)$ pour tous les $k$ de $1$ à $n$ à la main",
          "Utiliser $E(X)=np$",
          "Calculer $\\binom{n}{1}$"
        ],
        "ok": 0,
        "why": "Le complémentaire est bien plus rapide : $P(X\\ge 1)=1-P(X=0)=1-(1-p)^n$."
      },
      {
        "q": "On connaît la loi de $X$ par un tableau et on veut $V(X)$. Quelle démarche ?",
        "opts": [
          "Calculer $E(X)$ et $E(X^2)$ puis $V(X)=E(X^2)-E(X)^2$",
          "Faire $\\sqrt{E(X)}$",
          "Faire $np(1-p)$",
          "Additionner les probabilités"
        ],
        "ok": 0,
        "why": "Pour une loi donnée par un tableau, on applique la formule $V(X)=E(X^2)-\\big(E(X)\\big)^2$."
      },
      {
        "q": "Pour calculer $P(X\\le 8)$ avec $X\\sim\\mathcal{B}(20\\,;0,3)$ rapidement, on utilise :",
        "opts": [
          "La fonction de répartition de la calculatrice (binomFRép / cdf)",
          "La formule $\\binom{20}{8}$ seule",
          "$E(X)=np$",
          "La racine de la variance"
        ],
        "ok": 0,
        "why": "$P(X\\le k)$ est une probabilité cumulée : la calculatrice (binomFRép, cdf) la donne directement."
      },
      {
        "q": "Un problème dit : \"montrer que $X$ suit une loi binomiale\". Que faire en premier ?",
        "opts": [
          "Vérifier les 4 conditions du schéma de Bernoulli",
          "Calculer tout de suite $E(X)=np$",
          "Tracer un arbre complet à 20 niveaux",
          "Donner $\\sigma(X)$"
        ],
        "ok": 0,
        "why": "Il faut d'abord justifier la modélisation : répétitions identiques, indépendantes, deux issues, $n$ fixé."
      },
      {
        "q": "On répète une expérience à TROIS issues (rouge, vert, bleu) et on compte les rouges. Comment se ramener à une binomiale ?",
        "opts": [
          "Regrouper en deux issues : \"rouge\" (succès) et \"non rouge\" (échec)",
          "C'est impossible, trois issues interdisent la binomiale",
          "Diviser par 3",
          "Utiliser $V(X)=np$"
        ],
        "ok": 0,
        "why": "On définit le succès = \"rouge\" et l'échec = \"autre couleur\" : on retrouve deux issues, donc une binomiale est possible."
      },
      {
        "q": "On cherche $P(X=k)$ exactement à la main pour $X\\sim\\mathcal{B}(n,p)$. Quelle formule ?",
        "opts": [
          "$\\binom{n}{k}p^k(1-p)^{n-k}$",
          "$p^k$ seulement",
          "$1-(1-p)^n$",
          "$np(1-p)$"
        ],
        "ok": 0,
        "why": "La probabilité ponctuelle exacte est $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$, coefficient compris."
      }
    ]
  },
  {
    "id": "concentration",
    "tag": "Probabilités",
    "title": "Concentration et loi des grands nombres",
    "intro": "Quand on additionne plein de variables aléatoires identiques (lancer un dé 1000 fois, sonder 1000 personnes...), un truc magique se produit : la moyenne se met à coller à l'espérance théorique. C'est ça la loi des grands nombres, et l'inégalité de Bienaymé-Tchebychev permet de la prouver proprement. Au programme : linéarité de l'espérance, additivité de la variance pour des variables indépendantes, et ces inégalités qui mesurent à quel point une variable s'écarte de sa moyenne.",
    "objectifs": [
      "Maîtriser la linéarité de l'espérance $E(aX+b)=aE(X)+b$ et $E(X+Y)=E(X)+E(Y)$",
      "Connaître les règles de la variance : $V(aX+b)=a^2V(X)$ et l'additivité sous indépendance",
      "Calculer l'espérance et la variance de la moyenne empirique $M_n$ d'un échantillon i.i.d.",
      "Appliquer l'inégalité de Bienaymé-Tchebychev pour majorer une probabilité d'écart",
      "Utiliser l'inégalité de concentration $P(|M_n-\\mu|\\ge\\delta)\\le\\dfrac{\\sigma^2}{n\\delta^2}$",
      "Énoncer et interpréter la loi (faible) des grands nombres"
    ],
    "cours": [
      {
        "t": "Espérance et variance d'une somme",
        "d": "L'espérance est toujours linéaire : $E(X+Y)=E(X)+E(Y)$ et $E(aX+b)=aE(X)+b$, sans aucune condition. La variance, elle, est plus capricieuse : $V(aX+b)=a^2V(X)$ (le $+b$ disparaît car translater ne change pas la dispersion, et le coefficient sort au carré). Pour une somme, $V(X+Y)=V(X)+V(Y)$ UNIQUEMENT si $X$ et $Y$ sont indépendantes."
      },
      {
        "t": "Échantillon de variables i.i.d.",
        "d": "Un échantillon de taille $n$ est une suite $X_1,X_2,\\dots,X_n$ de variables aléatoires indépendantes et de même loi (i.i.d.). Elles ont donc toutes la même espérance $\\mu=E(X_i)$ et la même variance $\\sigma^2=V(X_i)$. C'est le modèle de la répétition d'une même expérience aléatoire."
      },
      {
        "t": "Moyenne empirique $M_n$",
        "d": "On pose $M_n=\\dfrac{X_1+X_2+\\dots+X_n}{n}$. Par linéarité, $E(M_n)=\\mu$ : en moyenne, $M_n$ vise pile l'espérance théorique. Et grâce à l'indépendance, $V(M_n)=\\dfrac{\\sigma^2}{n}$ : la variance diminue quand $n$ grandit, donc $M_n$ se resserre autour de $\\mu$."
      },
      {
        "t": "Inégalité de Bienaymé-Tchebychev",
        "d": "Pour toute variable $X$ d'espérance $E(X)$ et de variance $V(X)$, et pour tout réel $\\delta>0$ : $P(|X-E(X)|\\ge\\delta)\\le\\dfrac{V(X)}{\\delta^2}$. C'est une MAJORATION : elle borne par le haut la probabilité de s'écarter de l'espérance d'au moins $\\delta$. Plus la variance est petite (ou $\\delta$ grand), plus cette probabilité est faible."
      },
      {
        "t": "Inégalité de concentration et loi des grands nombres",
        "d": "En appliquant Tchebychev à $M_n$ (avec $E(M_n)=\\mu$ et $V(M_n)=\\sigma^2/n$), on obtient l'inégalité de concentration : $P(|M_n-\\mu|\\ge\\delta)\\le\\dfrac{\\sigma^2}{n\\delta^2}$. Quand $n\\to+\\infty$, ce majorant tend vers $0$ : c'est la loi (faible) des grands nombres. La moyenne empirique se concentre autour de l'espérance $\\mu$."
      }
    ],
    "formulaireTitre": "Formulaire à connaître par cœur",
    "formulaire": [
      [
        "$E(aX+b)$",
        "$aE(X)+b$"
      ],
      [
        "$E(X+Y)$",
        "$E(X)+E(Y)$"
      ],
      [
        "$V(aX+b)$",
        "$a^2V(X)$"
      ],
      [
        "$V(X+Y)$ (si $X,Y$ indép.)",
        "$V(X)+V(Y)$"
      ],
      [
        "$E(M_n)$ avec $M_n=\\dfrac{1}{n}\\sum X_i$",
        "$\\mu$"
      ],
      [
        "$V(M_n)$ (échantillon i.i.d.)",
        "$\\dfrac{\\sigma^2}{n}$"
      ],
      [
        "Bienaymé-Tchebychev",
        "$P(|X-E(X)|\\ge\\delta)\\le\\dfrac{V(X)}{\\delta^2}$"
      ],
      [
        "Inégalité de concentration",
        "$P(|M_n-\\mu|\\ge\\delta)\\le\\dfrac{\\sigma^2}{n\\delta^2}$"
      ],
      [
        "Écart-type",
        "$\\sigma=\\sqrt{V(X)}$"
      ]
    ],
    "methodes": [
      {
        "t": "Calculer $E(M_n)$ et $V(M_n)$ d'un échantillon",
        "etapes": [
          "Identifier que les $X_i$ sont i.i.d. : même espérance $\\mu$, même variance $\\sigma^2$.",
          "Espérance : $E(M_n)=\\dfrac{1}{n}E(X_1+\\dots+X_n)=\\dfrac{1}{n}\\cdot n\\mu=\\mu$ (linéarité).",
          "Variance : utiliser l'indépendance pour écrire $V(X_1+\\dots+X_n)=n\\sigma^2$.",
          "Puis $V(M_n)=\\dfrac{1}{n^2}\\cdot n\\sigma^2=\\dfrac{\\sigma^2}{n}$ (attention au carré du $\\frac{1}{n}$)."
        ]
      },
      {
        "t": "Majorer une probabilité avec Bienaymé-Tchebychev",
        "etapes": [
          "Repérer une probabilité du type $P(|X-E(X)|\\ge\\delta)$ ou la réécrire sous cette forme.",
          "Identifier $E(X)$, $V(X)$ et la valeur de $\\delta$ (le seuil d'écart).",
          "Appliquer $P(|X-E(X)|\\ge\\delta)\\le\\dfrac{V(X)}{\\delta^2}$ et calculer le majorant.",
          "Conclure : c'est une borne supérieure, la vraie probabilité est inférieure ou égale."
        ]
      },
      {
        "t": "Déterminer $n$ pour garantir une précision",
        "etapes": [
          "Écrire l'inégalité de concentration $P(|M_n-\\mu|\\ge\\delta)\\le\\dfrac{\\sigma^2}{n\\delta^2}$.",
          "Vouloir que ce majorant soit inférieur à un seuil donné, par exemple $\\le 0{,}05$.",
          "Résoudre $\\dfrac{\\sigma^2}{n\\delta^2}\\le 0{,}05$ en isolant $n$.",
          "Prendre $n$ entier supérieur ou égal à la valeur trouvée."
        ]
      }
    ],
    "annales": [
      {
        "y": 2024,
        "s": "Un échantillon de $n$ variables i.i.d. d'espérance $\\mu=3$ et de variance $\\sigma^2=4$. Déterminer le plus petit $n$ tel que $P(|M_n-3|\\ge 0{,}5)\\le 0{,}05$.",
        "loc": "Métropole"
      },
      {
        "y": 2023,
        "s": "Soit $X$ de variance $V(X)=2$ et $E(X)=10$. Majorer $P(|X-10|\\ge 4)$ à l'aide de l'inégalité de Bienaymé-Tchebychev.",
        "loc": "Centres étrangers"
      },
      {
        "y": 2022,
        "s": "On répète $n$ fois une épreuve de Bernoulli de paramètre $p$. Montrer que $V(M_n)=\\dfrac{p(1-p)}{n}$ et interpréter quand $n\\to+\\infty$.",
        "loc": "Métropole"
      }
    ],
    "piege": "Trois pièges classiques : (1) $V(aX)=a^2V(X)$ et PAS $aV(X)$ — le coefficient sort au carré. (2) $V(X+Y)=V(X)+V(Y)$ n'est vrai QUE si $X$ et $Y$ sont indépendantes (alors que l'espérance, elle, est toujours additive). (3) Tchebychev donne une MAJORATION ($\\le$) : on borne la probabilité par le haut, on ne la calcule pas exactement — et l'événement est $|X-E(X)|\\ge\\delta$ (s'écarter d'AU MOINS $\\delta$).",
    "qcm": [
      {
        "q": "$X$ et $Y$ sont deux variables aléatoires. Que vaut toujours $E(X+Y)$ ?",
        "opts": [
          "$E(X)\\times E(Y)$",
          "$E(X)+E(Y)$",
          "$E(X)+E(Y)$ seulement si indépendantes",
          "$\\sqrt{E(X)^2+E(Y)^2}$"
        ],
        "ok": 1,
        "why": "$L'espérance est toujours linéaire : E(X+Y)=E(X)+E(Y)$, sans condition d'indépendance."
      },
      {
        "q": "Que vaut $V(3X+5)$ ?",
        "opts": [
          "$3V(X)+5$",
          "$3V(X)$",
          "$9V(X)$",
          "$9V(X)+25$"
        ],
        "ok": 2,
        "why": "$V(aX+b)=a^2V(X)$ : le $+5$ disparaît et le $3$ sort au carré, donc $V(3X+5)=9V(X)$."
      },
      {
        "q": "Pour des variables indépendantes, que vaut $V(X+Y)$ ?",
        "opts": [
          "$V(X)+V(Y)$",
          "$V(X)\\times V(Y)$",
          "$V(X)-V(Y)$",
          "$\\sqrt{V(X)+V(Y)}$"
        ],
        "ok": 0,
        "why": "$Sous indépendance, la variance est additive : V(X+Y)=V(X)+V(Y)$."
      },
      {
        "q": "Pour un échantillon i.i.d. d'espérance $\\mu$, que vaut $E(M_n)$ ?",
        "opts": [
          "$\\dfrac{\\mu}{n}$",
          "$n\\mu$",
          "$\\mu$",
          "$\\dfrac{\\mu}{n^2}$"
        ],
        "ok": 2,
        "why": "$Par linéarité, E(M_n)=\\dfrac{1}{n}\\cdot n\\mu=\\mu$ : la moyenne empirique vise l'espérance théorique."
      },
      {
        "q": "Pour un échantillon i.i.d. de variance $\\sigma^2$, que vaut $V(M_n)$ ?",
        "opts": [
          "$\\dfrac{\\sigma^2}{n}$",
          "$\\sigma^2$",
          "$n\\sigma^2$",
          "$\\dfrac{\\sigma^2}{n^2}$"
        ],
        "ok": 0,
        "why": "$V(M_n)=\\dfrac{1}{n^2}\\cdot n\\sigma^2=\\dfrac{\\sigma^2}{n}$ : elle tend vers 0 quand n grandit."
      },
      {
        "q": "L'inégalité de Bienaymé-Tchebychev s'écrit $P(|X-E(X)|\\ge\\delta)\\le\\,?$",
        "opts": [
          "$\\dfrac{V(X)}{\\delta}$",
          "$\\dfrac{\\delta^2}{V(X)}$",
          "$\\dfrac{V(X)}{\\delta^2}$",
          "$V(X)\\,\\delta^2$"
        ],
        "ok": 2,
        "why": "$P(|X-E(X)|\\ge\\delta)\\le\\dfrac{V(X)}{\\delta^2}$ : c'est la variance divisée par $\\delta$ au carré."
      },
      {
        "q": "L'inégalité de concentration pour $M_n$ donne $P(|M_n-\\mu|\\ge\\delta)\\le\\,?$",
        "opts": [
          "$\\dfrac{\\sigma^2}{n\\delta^2}$",
          "$\\dfrac{\\sigma^2}{\\delta^2}$",
          "$\\dfrac{n\\sigma^2}{\\delta^2}$",
          "$\\dfrac{\\sigma}{n\\delta}$"
        ],
        "ok": 0,
        "why": "$On applique Tchebychev à M_n avec V(M_n)=\\sigma^2/n : P(|M_n-\\mu|\\ge\\delta)\\le\\dfrac{\\sigma^2}{n\\delta^2}$."
      },
      {
        "q": "Que dit la loi des grands nombres quand $n\\to+\\infty$ ?",
        "opts": [
          "$M_n$ diverge",
          "$M_n$ se concentre autour de $\\mu$",
          "$V(M_n)$ augmente",
          "$E(M_n)$ tend vers 0"
        ],
        "ok": 1,
        "why": "$Le majorant \\sigma^2/(n\\delta^2)\\to 0$, donc $M_n$ se concentre autour de l'espérance $\\mu$."
      },
      {
        "q": "Soit $X$ avec $E(X)=8$ et $V(X)=4$. Majorer $P(|X-8|\\ge 2)$.",
        "opts": [
          "$\\le 2$",
          "$\\le 1$",
          "$\\le 0{,}5$",
          "$\\le 0{,}25$"
        ],
        "ok": 1,
        "why": "$\\dfrac{V(X)}{\\delta^2}=\\dfrac{4}{2^2}=\\dfrac{4}{4}=1$. Le majorant vaut 1, l'inégalité est vraie mais peu informative ici."
      },
      {
        "q": "Échantillon i.i.d. avec $\\sigma^2=9$, $n=100$, $\\delta=1$. Majorant de $P(|M_n-\\mu|\\ge 1)$ ?",
        "opts": [
          "$0{,}09$",
          "$0{,}9$",
          "$9$",
          "$0{,}009$"
        ],
        "ok": 0,
        "why": "$\\dfrac{\\sigma^2}{n\\delta^2}=\\dfrac{9}{100\\times 1}=0{,}09$."
      },
      {
        "q": "Pourquoi $M_n$ devient-elle de plus en plus précise quand $n$ augmente ?",
        "opts": [
          "Car $E(M_n)$ augmente",
          "Car $V(M_n)=\\sigma^2/n$ diminue",
          "Car $\\mu$ change",
          "Car $\\delta$ augmente"
        ],
        "ok": 1,
        "why": "$V(M_n)=\\dfrac{\\sigma^2}{n}$ décroît vers 0, donc la dispersion de M_n se réduit autour de \\mu$."
      },
      {
        "q": "Dans une épreuve de Bernoulli répétée $n$ fois (paramètre $p$), que vaut $V(M_n)$ ?",
        "opts": [
          "$\\dfrac{p}{n}$",
          "$p(1-p)$",
          "$\\dfrac{p(1-p)}{n}$",
          "$\\dfrac{n}{p(1-p)}$"
        ],
        "ok": 2,
        "why": "$Chaque X_i a une variance p(1-p), donc V(M_n)=\\dfrac{p(1-p)}{n}$."
      }
    ],
    "flash": [
      {
        "front": "$E(aX+b)=\\,?$",
        "back": "$aE(X)+b$"
      },
      {
        "front": "$E(X+Y)=\\,?$ (toujours)",
        "back": "$E(X)+E(Y)$ — sans condition"
      },
      {
        "front": "$V(aX+b)=\\,?$",
        "back": "$a^2V(X)$ — le $+b$ disparaît, le $a$ au carré"
      },
      {
        "front": "$V(X+Y)=\\,?$ et sous quelle condition ?",
        "back": "$V(X)+V(Y)$ si $X,Y$ indépendantes"
      },
      {
        "front": "Moyenne empirique $M_n=\\,?$",
        "back": "$\\dfrac{X_1+X_2+\\dots+X_n}{n}$"
      },
      {
        "front": "$E(M_n)=\\,?$ (échantillon i.i.d.)",
        "back": "$\\mu$ (l'espérance commune)"
      },
      {
        "front": "$V(M_n)=\\,?$ (échantillon i.i.d.)",
        "back": "$\\dfrac{\\sigma^2}{n}$"
      },
      {
        "front": "Inégalité de Bienaymé-Tchebychev ?",
        "back": "$P(|X-E(X)|\\ge\\delta)\\le\\dfrac{V(X)}{\\delta^2}$"
      },
      {
        "front": "Inégalité de concentration ?",
        "back": "$P(|M_n-\\mu|\\ge\\delta)\\le\\dfrac{\\sigma^2}{n\\delta^2}$"
      },
      {
        "front": "Loi des grands nombres ?",
        "back": "$M_n$ se concentre autour de $\\mu$ quand $n\\to+\\infty$"
      },
      {
        "front": "Que signifie i.i.d. ?",
        "back": "Indépendantes et identiquement distribuées (même loi)"
      },
      {
        "front": "Lien écart-type / variance ?",
        "back": "$\\sigma=\\sqrt{V(X)}$"
      }
    ],
    "vraifaux": [
      {
        "q": "$E(X+Y)=E(X)+E(Y)$ pour toutes variables, même non indépendantes.",
        "v": true,
        "why": "L'espérance est toujours linéaire, l'indépendance n'est jamais requise."
      },
      {
        "q": "$V(X+Y)=V(X)+V(Y)$ pour toutes variables aléatoires.",
        "v": false,
        "why": "Faux : cette additivité n'est valable que si $X$ et $Y$ sont indépendantes."
      },
      {
        "q": "$V(2X)=2V(X)$.",
        "v": false,
        "why": "Faux : $V(2X)=2^2V(X)=4V(X)$, le coefficient sort au carré."
      },
      {
        "q": "$V(X+3)=V(X)$.",
        "v": true,
        "why": "Vrai : ajouter une constante translate la variable sans changer sa dispersion."
      },
      {
        "q": "Pour un échantillon i.i.d., $E(M_n)=\\mu$ quelle que soit la taille $n$.",
        "v": true,
        "why": "Vrai : $E(M_n)=\\mu$ par linéarité, indépendamment de $n$."
      },
      {
        "q": "$V(M_n)$ augmente quand $n$ augmente.",
        "v": false,
        "why": "Faux : $V(M_n)=\\sigma^2/n$ DIMINUE quand $n$ grandit."
      },
      {
        "q": "L'inégalité de Bienaymé-Tchebychev donne la valeur exacte de la probabilité.",
        "v": false,
        "why": "Faux : elle donne seulement une MAJORATION (borne supérieure)."
      },
      {
        "q": "Plus la variance de $X$ est petite, plus $P(|X-E(X)|\\ge\\delta)$ est majorée par une petite valeur.",
        "v": true,
        "why": "Vrai : le majorant $V(X)/\\delta^2$ diminue avec la variance."
      },
      {
        "q": "La loi des grands nombres affirme que $M_n$ se concentre autour de $\\mu$.",
        "v": true,
        "why": "Vrai : c'est exactement la conséquence de l'inégalité de concentration quand $n\\to+\\infty$."
      },
      {
        "q": "Bienaymé-Tchebychev exige que $X$ suive une loi normale.",
        "v": false,
        "why": "Faux : l'inégalité est valable pour toute variable admettant une espérance et une variance."
      }
    ],
    "qmethode": [
      {
        "q": "On veut montrer que la moyenne d'un grand échantillon se rapproche de l'espérance théorique. Quel outil ?",
        "opts": [
          "La loi des grands nombres (via l'inégalité de concentration)",
          "Le théorème des valeurs intermédiaires",
          "Une récurrence",
          "Le produit scalaire"
        ],
        "ok": 0,
        "why": "C'est précisément ce qu'affirme la loi des grands nombres, démontrée par l'inégalité de concentration."
      },
      {
        "q": "On veut majorer $P(|X-E(X)|\\ge 3)$ connaissant $V(X)$. Quelle méthode ?",
        "opts": [
          "Inégalité de Bienaymé-Tchebychev",
          "Calcul direct avec un arbre",
          "Dérivation",
          "Loi binomiale"
        ],
        "ok": 0,
        "why": "Bienaymé-Tchebychev majore directement $P(|X-E(X)|\\ge\\delta)$ par $V(X)/\\delta^2$."
      },
      {
        "q": "On cherche la taille $n$ d'échantillon garantissant $P(|M_n-\\mu|\\ge\\delta)\\le 0{,}01$. Comment faire ?",
        "opts": [
          "Résoudre $\\dfrac{\\sigma^2}{n\\delta^2}\\le 0{,}01$ en isolant $n$",
          "Dériver $M_n$",
          "Faire une récurrence sur $n$",
          "Calculer un produit scalaire"
        ],
        "ok": 0,
        "why": "On impose au majorant de concentration d'être sous le seuil, puis on isole $n$."
      },
      {
        "q": "On doit calculer $V(M_n)$ d'un échantillon i.i.d. Quelle propriété est indispensable ?",
        "opts": [
          "L'additivité de la variance sous indépendance",
          "La linéarité du logarithme",
          "Le théorème de Pythagore",
          "La continuité"
        ],
        "ok": 0,
        "why": "Il faut l'indépendance des $X_i$ pour écrire $V(X_1+\\dots+X_n)=n\\sigma^2$."
      },
      {
        "q": "On veut $E(3X-2Y)$ avec $X,Y$ quelconques. Quelle propriété ?",
        "opts": [
          "La linéarité de l'espérance",
          "L'additivité de la variance",
          "L'indépendance obligatoire",
          "L'inégalité de Tchebychev"
        ],
        "ok": 0,
        "why": "$E(3X-2Y)=3E(X)-2E(Y)$ par linéarité, valable sans condition."
      },
      {
        "q": "Une épreuve de Bernoulli de paramètre $p$ est répétée. Pour la variance d'un terme, on utilise ?",
        "opts": [
          "$V(X_i)=p(1-p)$",
          "$V(X_i)=np$",
          "$V(X_i)=p^2$",
          "$V(X_i)=\\sqrt{p}$"
        ],
        "ok": 0,
        "why": "Une variable de Bernoulli de paramètre $p$ a pour variance $p(1-p)$."
      },
      {
        "q": "On veut savoir si $V(X+Y)=V(X)+V(Y)$ est applicable dans un exercice. Que vérifier d'abord ?",
        "opts": [
          "Si $X$ et $Y$ sont indépendantes",
          "Si $X$ et $Y$ ont la même espérance",
          "Si $X$ et $Y$ sont positives",
          "Si $n$ est grand"
        ],
        "ok": 0,
        "why": "L'additivité de la variance n'est valide que sous l'hypothèse d'indépendance."
      },
      {
        "q": "Pour interpréter le comportement de $M_n$ quand $n\\to+\\infty$, on regarde ?",
        "opts": [
          "La limite du majorant $\\dfrac{\\sigma^2}{n\\delta^2}$ qui tend vers 0",
          "La dérivée de $M_n$",
          "Le signe de $\\mu$",
          "La convexité"
        ],
        "ok": 0,
        "why": "Le majorant tend vers 0, ce qui traduit la concentration de $M_n$ autour de $\\mu$."
      }
    ]
  },
  {
    "id": "geometrie-espace",
    "tag": "Géométrie",
    "title": "Géométrie dans l'espace",
    "intro": "On passe du plan à l'espace : trois coordonnées au lieu de deux, mais les mêmes réflexes. Tu vas manipuler des vecteurs en 3D, tester si deux vecteurs sont colinéaires ou si trois sont coplanaires, puis décrire une droite par une représentation paramétrique. Le but : savoir si deux droites se croisent, sont parallèles ou ne se rencontrent jamais, et caractériser un plan par deux vecteurs directeurs. Pas de produit scalaire ici (c'est un autre chapitre) : on reste sur le calcul vectoriel et les positions relatives.",
    "objectifs": [
      "Calculer les coordonnées d'un vecteur $\\overrightarrow{AB}$, du milieu d'un segment, et reconnaître une base ou un repère de l'espace",
      "Tester la colinéarité de deux vecteurs et la coplanarité de trois vecteurs",
      "Écrire et lire une représentation paramétrique de droite (point + vecteur directeur)",
      "Déterminer la position relative de deux droites (parallèles, sécantes, non coplanaires)",
      "Étudier la position relative d'une droite et d'un plan",
      "Caractériser un plan par un point et deux vecteurs directeurs non colinéaires"
    ],
    "cours": [
      {
        "t": "Vecteurs, base et repère de l'espace",
        "d": "Les vecteurs de l'espace se manipulent comme dans le plan : addition, multiplication par un réel, relation de Chasles $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$. Trois vecteurs $\\vec{i},\\vec{j},\\vec{k}$ forment une **base** de l'espace s'ils ne sont pas coplanaires : alors tout vecteur s'écrit de façon unique $\\vec{u}=x\\vec{i}+y\\vec{j}+z\\vec{k}$, et $(x;y;z)$ sont ses **coordonnées**. Un point $O$ et une base donnent un **repère** $(O;\\vec{i},\\vec{j},\\vec{k})$."
      },
      {
        "t": "Coordonnées : vecteur AB et milieu",
        "d": "Si $A(x_A;y_A;z_A)$ et $B(x_B;y_B;z_B)$, alors $\\overrightarrow{AB}\\;(x_B-x_A;\\,y_B-y_A;\\,z_B-z_A)$. Le milieu $I$ de $[AB]$ a pour coordonnées $\\left(\\dfrac{x_A+x_B}{2};\\dfrac{y_A+y_B}{2};\\dfrac{z_A+z_B}{2}\\right)$. On additionne deux vecteurs et on les multiplie par un réel coordonnée par coordonnée."
      },
      {
        "t": "Colinéarité (2 vecteurs) et coplanarité (3 vecteurs)",
        "d": "Deux vecteurs $\\vec{u}$ et $\\vec{v}$ ($\\vec{v}\\neq\\vec{0}$) sont **colinéaires** s'il existe un réel $k$ tel que $\\vec{u}=k\\,\\vec{v}$ : les coordonnées sont proportionnelles. Trois vecteurs $\\vec{u},\\vec{v},\\vec{w}$ sont **coplanaires** s'il existe des réels $a,b$ tels que $\\vec{w}=a\\vec{u}+b\\vec{v}$ (avec $\\vec{u},\\vec{v}$ non colinéaires). Attention : colinéarité concerne deux vecteurs, coplanarité concerne trois vecteurs."
      },
      {
        "t": "Représentation paramétrique d'une droite",
        "d": "La droite $\\mathcal{D}$ passant par $A(x_A;y_A;z_A)$ et de vecteur directeur $\\vec{u}\\,(a;b;c)\\neq\\vec{0}$ est l'ensemble des points $M$ tels que $\\overrightarrow{AM}=t\\,\\vec{u}$, $t\\in\\mathbb{R}$. D'où le système $\\begin{cases}x=x_A+t\\,a\\\\y=y_A+t\\,b\\\\z=z_A+t\\,c\\end{cases}$ avec $t\\in\\mathbb{R}$. Un point appartient à $\\mathcal{D}$ si et seulement s'il existe **une seule** valeur de $t$ qui marche pour les **trois** coordonnées."
      },
      {
        "t": "Positions relatives",
        "d": "Deux droites de l'espace sont : **parallèles** si leurs vecteurs directeurs sont colinéaires (confondues ou strictement parallèles), **sécantes** si elles ont exactement un point commun, ou **non coplanaires** si elles ne sont ni parallèles ni sécantes (elles ne sont pas dans un même plan). Une droite et un plan sont : sécants (un seul point commun), ou parallèles (la droite est incluse dans le plan, ou bien aucun point commun). Un plan est caractérisé par un point et **deux vecteurs directeurs non colinéaires**."
      }
    ],
    "formulaireTitre": "Formules à connaître par cœur",
    "formulaire": [
      [
        "$\\overrightarrow{AB}$",
        "$(x_B-x_A;\\,y_B-y_A;\\,z_B-z_A)$"
      ],
      [
        "Milieu de $[AB]$",
        "$\\left(\\dfrac{x_A+x_B}{2};\\dfrac{y_A+y_B}{2};\\dfrac{z_A+z_B}{2}\\right)$"
      ],
      [
        "$\\vec{u}+\\vec{v}$",
        "$(x+x';\\,y+y';\\,z+z')$"
      ],
      [
        "$k\\,\\vec{u}$",
        "$(kx;\\,ky;\\,kz)$"
      ],
      [
        "Colinéaires $\\vec{u},\\vec{v}$",
        "$\\exists k\\in\\mathbb{R},\\ \\vec{u}=k\\,\\vec{v}$"
      ],
      [
        "Coplanaires $\\vec{u},\\vec{v},\\vec{w}$",
        "$\\exists a,b\\in\\mathbb{R},\\ \\vec{w}=a\\vec{u}+b\\vec{v}$"
      ],
      [
        "Repré. param. de $\\mathcal{D}(A,\\vec{u})$",
        "$\\begin{cases}x=x_A+t a\\\\y=y_A+t b\\\\z=z_A+t c\\end{cases},\\ t\\in\\mathbb{R}$"
      ],
      [
        "Relation de Chasles",
        "$\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$"
      ],
      [
        "$\\vec{u}\\,(a;b;c)$ dans la base",
        "$\\vec{u}=a\\vec{i}+b\\vec{j}+c\\vec{k}$"
      ]
    ],
    "methodes": [
      {
        "t": "Tester si trois points $A,B,C$ sont alignés",
        "etapes": [
          "Calculer $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ en coordonnées.",
          "Chercher un réel $k$ tel que $\\overrightarrow{AC}=k\\,\\overrightarrow{AB}$ (proportionnalité des coordonnées).",
          "Si un même $k$ marche pour les 3 coordonnées : alignés. Sinon : non alignés."
        ]
      },
      {
        "t": "Vérifier qu'un point appartient à une droite",
        "etapes": [
          "Reporter les coordonnées du point dans le système paramétrique.",
          "Résoudre la 1re équation pour trouver $t$.",
          "Vérifier que ce même $t$ vérifie aussi la 2e et la 3e équation.",
          "Si oui : le point est sur la droite ; si une seule équation échoue : il n'y est pas."
        ]
      },
      {
        "t": "Position relative de deux droites",
        "etapes": [
          "Comparer les vecteurs directeurs : s'ils sont colinéaires, les droites sont parallèles (vérifier un point commun pour distinguer confondues / strictement parallèles).",
          "Sinon, égaler les deux systèmes paramétriques (paramètres $t$ et $t'$ différents) et résoudre.",
          "Si le système admet une solution : droites sécantes (calculer le point). Si pas de solution : droites non coplanaires."
        ]
      },
      {
        "t": "Montrer que trois vecteurs sont coplanaires",
        "etapes": [
          "Vérifier que deux d'entre eux, $\\vec{u}$ et $\\vec{v}$, ne sont pas colinéaires.",
          "Chercher $a,b$ tels que $\\vec{w}=a\\vec{u}+b\\vec{v}$ : poser le système sur les coordonnées.",
          "Résoudre avec deux équations, puis vérifier la 3e. Si elle est satisfaite : coplanaires."
        ]
      }
    ],
    "annales": [
      {
        "y": 2024,
        "s": "Dans un repère orthonormé, on donne $A(1;2;-1)$, $\\vec{u}\\,(2;-1;3)$. Donner une représentation paramétrique de la droite passant par $A$ de vecteur directeur $\\vec{u}$, puis dire si $B(5;0;5)$ lui appartient.",
        "loc": "Métropole"
      },
      {
        "y": 2023,
        "s": "On considère deux droites $\\mathcal{D}$ et $\\mathcal{D}'$ données par leurs représentations paramétriques. Démontrer qu'elles ne sont pas coplanaires.",
        "loc": "Métropole"
      },
      {
        "y": 2022,
        "s": "Étudier la position relative de la droite $\\mathcal{D}$ et du plan défini par trois points, en utilisant une représentation paramétrique.",
        "loc": "Centres étrangers"
      }
    ],
    "piege": "Le piège classique : confondre colinéaire (propriété de DEUX vecteurs) et coplanaire (propriété de TROIS vecteurs). Autre piège : pour vérifier qu'un point est sur une droite, il faut que le MÊME $t$ marche sur les trois coordonnées. Trouver un $t$ qui colle pour $x$ et $y$ mais pas pour $z$ signifie que le point n'est PAS sur la droite. Et deux droites de directeurs non colinéaires ne sont pas forcément sécantes : dans l'espace, elles peuvent être non coplanaires.",
    "qcm": [
      {
        "q": "Avec $A(1;3;-2)$ et $B(4;1;0)$, les coordonnées de $\\overrightarrow{AB}$ sont :",
        "opts": [
          "$(3;-2;2)$",
          "$(5;4;-2)$",
          "$(-3;2;-2)$",
          "$(3;2;2)$"
        ],
        "ok": 0,
        "why": "$\\overrightarrow{AB}=(4-1;\\,1-3;\\,0-(-2))=(3;-2;2)$."
      },
      {
        "q": "Le milieu de $[AB]$ avec $A(2;-4;6)$ et $B(0;2;-2)$ est :",
        "opts": [
          "$(2;-2;4)$",
          "$(1;-1;2)$",
          "$(1;-3;4)$",
          "$(2;-6;8)$"
        ],
        "ok": 1,
        "why": "$\\left(\\frac{2+0}{2};\\frac{-4+2}{2};\\frac{6-2}{2}\\right)=(1;-1;2)$."
      },
      {
        "q": "Les vecteurs $\\vec{u}\\,(2;-1;3)$ et $\\vec{v}\\,(-4;2;-6)$ sont :",
        "opts": [
          "coplanaires seulement",
          "ni l'un ni l'autre",
          "colinéaires",
          "orthogonaux"
        ],
        "ok": 2,
        "why": "$\\vec{v}=-2\\,\\vec{u}$, donc ils sont colinéaires (coordonnées proportionnelles de rapport $-2$)."
      },
      {
        "q": "Une représentation paramétrique de la droite passant par $A(1;0;2)$ de vecteur directeur $\\vec{u}\\,(3;-1;2)$ est :",
        "opts": [
          "$\\begin{cases}x=3+t\\\\y=-1\\\\z=2+2t\\end{cases}$",
          "$\\begin{cases}x=1+3t\\\\y=-t\\\\z=2+2t\\end{cases}$",
          "$\\begin{cases}x=3t\\\\y=-t\\\\z=2t\\end{cases}$",
          "$\\begin{cases}x=1+t\\\\y=-3t\\\\z=2+2t\\end{cases}$"
        ],
        "ok": 1,
        "why": "On part du point $A(1;0;2)$ et on ajoute $t$ fois le directeur $(3;-1;2)$ : $x=1+3t,\\ y=0-t,\\ z=2+2t$."
      },
      {
        "q": "La droite $\\mathcal{D}:\\begin{cases}x=2+t\\\\y=1-t\\\\z=3+2t\\end{cases}$ a pour vecteur directeur :",
        "opts": [
          "$(2;1;3)$",
          "$(1;1;2)$",
          "$(1;-1;2)$",
          "$(2;-1;3)$"
        ],
        "ok": 2,
        "why": "Le vecteur directeur se lit sur les coefficients de $t$ : $(1;-1;2)$."
      },
      {
        "q": "Le point $B(4;-1;7)$ appartient-il à $\\mathcal{D}:\\begin{cases}x=2+t\\\\y=1-t\\\\z=3+2t\\end{cases}$ ?",
        "opts": [
          "Oui, pour $t=2$",
          "Non",
          "Oui, pour $t=1$",
          "Oui, pour $t=4$"
        ],
        "ok": 0,
        "why": "$x=4\\Rightarrow t=2$ ; alors $y=1-2=-1$ ✓ et $z=3+4=7$ ✓. Le même $t=2$ marche partout : $B\\in\\mathcal{D}$."
      },
      {
        "q": "Deux droites dont les vecteurs directeurs ne sont PAS colinéaires et qui n'ont aucun point commun sont :",
        "opts": [
          "confondues",
          "parallèles strictes",
          "sécantes",
          "non coplanaires"
        ],
        "ok": 3,
        "why": "Directeurs non colinéaires + aucun point commun = droites non coplanaires (elles ne sont pas dans un même plan)."
      },
      {
        "q": "Un plan de l'espace est caractérisé par :",
        "opts": [
          "un point et deux vecteurs directeurs non colinéaires",
          "trois vecteurs colinéaires",
          "un seul vecteur directeur",
          "deux points seulement"
        ],
        "ok": 0,
        "why": "Un plan est défini par un point et deux vecteurs directeurs non colinéaires (qui engendrent le plan)."
      },
      {
        "q": "$\\vec{u}\\,(1;2;-1)$, $\\vec{v}\\,(0;1;1)$, $\\vec{w}\\,(2;3;-3)$. Sachant $\\vec{w}=2\\vec{u}-\\vec{v}$, ces trois vecteurs sont :",
        "opts": [
          "colinéaires",
          "tous orthogonaux",
          "coplanaires",
          "une base de l'espace"
        ],
        "ok": 2,
        "why": "$\\vec{w}$ est combinaison linéaire de $\\vec{u}$ et $\\vec{v}$ (non colinéaires) : les trois vecteurs sont coplanaires."
      },
      {
        "q": "Trois vecteurs non coplanaires de l'espace forment :",
        "opts": [
          "une droite",
          "une base de l'espace",
          "un plan",
          "rien de particulier"
        ],
        "ok": 1,
        "why": "Trois vecteurs non coplanaires forment une base : tout vecteur de l'espace s'exprime de façon unique avec eux."
      },
      {
        "q": "Les points $A(1;1;1)$, $B(3;2;0)$, $C(5;3;-1)$ sont :",
        "opts": [
          "alignés",
          "non alignés",
          "confondus",
          "impossible à déterminer"
        ],
        "ok": 0,
        "why": "$\\overrightarrow{AB}=(2;1;-1)$ et $\\overrightarrow{AC}=(4;2;-2)=2\\,\\overrightarrow{AB}$ : vecteurs colinéaires, donc $A,B,C$ alignés."
      },
      {
        "q": "Deux droites dont les directeurs sont colinéaires et qui partagent un point sont :",
        "opts": [
          "sécantes",
          "non coplanaires",
          "confondues",
          "perpendiculaires"
        ],
        "ok": 2,
        "why": "Directeurs colinéaires (donc parallèles) + un point commun ⟹ les droites sont confondues."
      }
    ],
    "flash": [
      {
        "front": "Coordonnées de $\\overrightarrow{AB}$ ?",
        "back": "$(x_B-x_A;\\,y_B-y_A;\\,z_B-z_A)$"
      },
      {
        "front": "Coordonnées du milieu de $[AB]$ ?",
        "back": "$\\left(\\dfrac{x_A+x_B}{2};\\dfrac{y_A+y_B}{2};\\dfrac{z_A+z_B}{2}\\right)$"
      },
      {
        "front": "Quand $\\vec{u}$ et $\\vec{v}$ sont-ils colinéaires ?",
        "back": "Quand $\\exists k\\in\\mathbb{R},\\ \\vec{u}=k\\,\\vec{v}$ (coordonnées proportionnelles)"
      },
      {
        "front": "Quand trois vecteurs sont-ils coplanaires ?",
        "back": "Quand $\\vec{w}=a\\vec{u}+b\\vec{v}$ avec $\\vec{u},\\vec{v}$ non colinéaires"
      },
      {
        "front": "Représentation paramétrique de $\\mathcal{D}$ passant par $A$, directeur $\\vec{u}\\,(a;b;c)$ ?",
        "back": "$\\begin{cases}x=x_A+t a\\\\y=y_A+t b\\\\z=z_A+t c\\end{cases},\\ t\\in\\mathbb{R}$"
      },
      {
        "front": "Comment lire le vecteur directeur sur une repré. paramétrique ?",
        "back": "Ce sont les coefficients du paramètre $t$ : $\\vec{u}\\,(a;b;c)$"
      },
      {
        "front": "Condition pour qu'un point soit sur une droite ?",
        "back": "Une seule valeur de $t$ vérifie les 3 équations à la fois"
      },
      {
        "front": "Deux droites parallèles : condition sur les directeurs ?",
        "back": "Leurs vecteurs directeurs sont colinéaires"
      },
      {
        "front": "Que sont deux droites non parallèles et sans point commun ?",
        "back": "Des droites non coplanaires"
      },
      {
        "front": "Qu'est-ce qui caractérise un plan ?",
        "back": "Un point et deux vecteurs directeurs non colinéaires"
      },
      {
        "front": "Trois vecteurs non coplanaires forment… ?",
        "back": "Une base de l'espace"
      },
      {
        "front": "Relation de Chasles ?",
        "back": "$\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$"
      }
    ],
    "vraifaux": [
      {
        "q": "Deux vecteurs colinéaires ont des coordonnées proportionnelles.",
        "v": true,
        "why": "C'est la définition : $\\vec{u}=k\\,\\vec{v}$ équivaut à la proportionnalité des coordonnées."
      },
      {
        "q": "La colinéarité est une propriété qui concerne trois vecteurs.",
        "v": false,
        "why": "La colinéarité concerne DEUX vecteurs. La coplanarité concerne trois vecteurs."
      },
      {
        "q": "Dans l'espace, deux droites de directeurs non colinéaires sont forcément sécantes.",
        "v": false,
        "why": "Elles peuvent être non coplanaires : aucun point commun sans être parallèles."
      },
      {
        "q": "Le vecteur directeur d'une droite donnée par sa représentation paramétrique se lit sur les coefficients de $t$.",
        "v": true,
        "why": "Dans $x=x_A+ta$, etc., les coefficients $(a;b;c)$ donnent le vecteur directeur."
      },
      {
        "q": "Une représentation paramétrique d'une droite est unique.",
        "v": false,
        "why": "Elle dépend du point choisi et du vecteur directeur (multiple non nul). Une droite a une infinité de représentations paramétriques."
      },
      {
        "q": "Pour qu'un point soit sur une droite, il suffit qu'une valeur de $t$ marche sur deux des trois coordonnées.",
        "v": false,
        "why": "Il faut que le MÊME $t$ vérifie les TROIS équations. Deux sur trois ne suffit pas."
      },
      {
        "q": "Trois vecteurs non coplanaires forment une base de l'espace.",
        "v": true,
        "why": "Tout vecteur de l'espace s'écrit alors de manière unique comme combinaison linéaire de ces trois vecteurs."
      },
      {
        "q": "Une droite incluse dans un plan est dite parallèle à ce plan.",
        "v": true,
        "why": "Au programme, une droite incluse dans un plan est un cas de parallélisme (intersection = la droite entière, pas un point unique)."
      },
      {
        "q": "Si $\\vec{w}=2\\vec{u}-3\\vec{v}$, alors $\\vec{u},\\vec{v},\\vec{w}$ sont coplanaires.",
        "v": true,
        "why": "$\\vec{w}$ est une combinaison linéaire de $\\vec{u}$ et $\\vec{v}$ : les trois vecteurs sont coplanaires."
      },
      {
        "q": "Deux droites confondues sont un cas particulier de droites parallèles.",
        "v": true,
        "why": "Parallèles = directeurs colinéaires ; avec un point commun elles sont confondues, sinon strictement parallèles."
      }
    ],
    "qmethode": [
      {
        "q": "On veut montrer que trois points $A,B,C$ sont alignés. Quelle méthode ?",
        "opts": [
          "Montrer que $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires",
          "Calculer le milieu de $[AB]$",
          "Trouver une équation de plan",
          "Vérifier qu'ils ont la même abscisse"
        ],
        "ok": 0,
        "why": "Trois points sont alignés si et seulement si $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires."
      },
      {
        "q": "Pour savoir si un point appartient à une droite donnée en paramétrique, on…",
        "opts": [
          "calcule le milieu",
          "reporte ses coordonnées et cherche un même $t$ pour les 3 équations",
          "vérifie une seule coordonnée",
          "calcule un déterminant 3×3"
        ],
        "ok": 1,
        "why": "On reporte les coordonnées du point et on cherche une valeur unique de $t$ valable pour les trois équations."
      },
      {
        "q": "Pour déterminer la position relative de deux droites non parallèles dans l'espace, on…",
        "opts": [
          "regarde juste les directeurs",
          "égalise les deux systèmes paramétriques et on résout",
          "calcule deux milieux",
          "additionne les vecteurs directeurs"
        ],
        "ok": 1,
        "why": "On égalise les systèmes (avec des paramètres distincts) : solution ⟹ sécantes ; pas de solution ⟹ non coplanaires."
      },
      {
        "q": "Pour prouver que trois vecteurs sont coplanaires, on…",
        "opts": [
          "montre qu'ils sont tous colinéaires",
          "cherche $a,b$ tels que $\\vec{w}=a\\vec{u}+b\\vec{v}$ et on vérifie les 3 coordonnées",
          "calcule trois milieux",
          "vérifie qu'ils ont la même norme"
        ],
        "ok": 1,
        "why": "On exprime $\\vec{w}$ comme combinaison linéaire de $\\vec{u},\\vec{v}$ (non colinéaires) en résolvant le système sur les coordonnées."
      },
      {
        "q": "Pour vérifier que deux droites sont parallèles, on…",
        "opts": [
          "teste si leurs vecteurs directeurs sont colinéaires",
          "calcule l'intersection",
          "additionne leurs points de base",
          "vérifie qu'elles ont le même point de départ"
        ],
        "ok": 0,
        "why": "Deux droites sont parallèles si et seulement si leurs vecteurs directeurs sont colinéaires."
      },
      {
        "q": "Pour caractériser un plan passant par un point $A$, on cherche…",
        "opts": [
          "un seul vecteur directeur",
          "deux vecteurs directeurs non colinéaires",
          "trois points alignés",
          "un vecteur colinéaire à $\\overrightarrow{OA}$"
        ],
        "ok": 1,
        "why": "Un plan est défini par un point et deux vecteurs directeurs non colinéaires qui engendrent le plan."
      },
      {
        "q": "On veut montrer qu'une droite est parallèle à un plan défini par deux directeurs $\\vec{v_1},\\vec{v_2}$. On vérifie que…",
        "opts": [
          "le directeur de la droite est colinéaire à $\\vec{v_1}$",
          "le directeur de la droite est coplanaire avec $\\vec{v_1}$ et $\\vec{v_2}$",
          "la droite passe par l'origine",
          "les directeurs sont égaux"
        ],
        "ok": 1,
        "why": "Le vecteur directeur de la droite doit être combinaison linéaire de $\\vec{v_1}$ et $\\vec{v_2}$ (coplanaire avec eux) pour que la droite soit parallèle au plan."
      },
      {
        "q": "Distinguer deux droites confondues de deux droites strictement parallèles : on…",
        "opts": [
          "compare seulement les directeurs",
          "teste si un point de l'une appartient à l'autre",
          "calcule deux milieux",
          "additionne les deux directeurs"
        ],
        "ok": 1,
        "why": "Directeurs déjà colinéaires : on vérifie si un point de la première est sur la seconde. Si oui : confondues ; sinon : strictement parallèles."
      }
    ]
  },
  {
    "id": "produit-scalaire",
    "tag": "Géométrie",
    "title": "Produit scalaire dans l'espace",
    "intro": "Le produit scalaire, tu le connais déjà du plan : on le transpose ici dans l'espace muni d'un repère orthonormé. C'est l'outil roi pour parler d'angles, d'orthogonalité et de distances. Concrètement, il va te servir à trouver des vecteurs normaux, écrire l'équation cartésienne d'un plan, calculer des projetés orthogonaux et des distances point-plan. C'est un chapitre très calculatoire mais ultra rentable au bac : une fois la méthode en main, les points tombent tout seuls.",
    "objectifs": [
      "Calculer un produit scalaire dans l'espace (formule analytique $xx'+yy'+zz'$ et formule avec le cosinus).",
      "Caractériser l'orthogonalité de deux vecteurs par $\\vec u\\cdot\\vec v=0$.",
      "Reconnaître un vecteur normal à un plan et l'utiliser.",
      "Déterminer une équation cartésienne de plan à partir d'un point et d'un vecteur normal.",
      "Déterminer le projeté orthogonal d'un point sur une droite ou un plan, et en déduire une distance.",
      "Trouver l'intersection d'une droite et d'un plan."
    ],
    "cours": [
      {
        "t": "Définition et expression analytique",
        "d": "Pour deux vecteurs $\\vec u$ et $\\vec v$ de l'espace, le produit scalaire vaut $\\vec u\\cdot\\vec v=\\|\\vec u\\|\\,\\|\\vec v\\|\\cos\\theta$, où $\\theta$ est l'angle entre les deux vecteurs (formule valable si les deux sont non nuls). Dans un repère orthonormé, si $\\vec u(x,y,z)$ et $\\vec v(x',y',z')$, alors $\\vec u\\cdot\\vec v=xx'+yy'+zz'$. En particulier $\\vec u\\cdot\\vec u=\\|\\vec u\\|^2=x^2+y^2+z^2$, d'où la norme $\\|\\vec u\\|=\\sqrt{x^2+y^2+z^2}$. Le produit scalaire est un nombre réel, pas un vecteur."
      },
      {
        "t": "Propriétés de calcul",
        "d": "Le produit scalaire est symétrique ($\\vec u\\cdot\\vec v=\\vec v\\cdot\\vec u$), bilinéaire (on peut développer comme avec une multiplication : $\\vec u\\cdot(\\vec v+\\vec w)=\\vec u\\cdot\\vec v+\\vec u\\cdot\\vec w$ et $(k\\vec u)\\cdot\\vec v=k(\\vec u\\cdot\\vec v)$). On retrouve les identités du collège : $\\|\\vec u+\\vec v\\|^2=\\|\\vec u\\|^2+2\\,\\vec u\\cdot\\vec v+\\|\\vec v\\|^2$. Ces règles permettent de calculer un produit scalaire même sans coordonnées, en décomposant les vecteurs."
      },
      {
        "t": "Orthogonalité",
        "d": "Deux vecteurs $\\vec u$ et $\\vec v$ sont orthogonaux si et seulement si $\\vec u\\cdot\\vec v=0$. Le vecteur nul est orthogonal à tous les vecteurs. Attention : orthogonal n'est PAS synonyme de parallèle (colinéaire) — c'est même le contraire géométriquement. Un vecteur $\\vec n$ est dit normal à un plan $\\mathcal P$ s'il est orthogonal à tous les vecteurs directeurs de ce plan ; il suffit qu'il soit orthogonal à deux vecteurs directeurs non colinéaires de $\\mathcal P$."
      },
      {
        "t": "Équation cartésienne d'un plan",
        "d": "Tout plan $\\mathcal P$ de l'espace admet une équation cartésienne de la forme $ax+by+cz+d=0$, où $(a,b,c)\\neq(0,0,0)$. Le vecteur $\\vec n(a,b,c)$ est alors un vecteur normal au plan : les coefficients de $x$, $y$, $z$ donnent directement les coordonnées du vecteur normal. Réciproquement, le plan passant par $A(x_A,y_A,z_A)$ et de vecteur normal $\\vec n(a,b,c)$ a pour équation $a(x-x_A)+b(y-y_A)+c(z-z_A)=0$. Un point appartient au plan si et seulement si ses coordonnées vérifient l'équation."
      },
      {
        "t": "Projeté orthogonal et distances",
        "d": "Le projeté orthogonal $H$ d'un point $M$ sur un plan $\\mathcal P$ est le point de $\\mathcal P$ le plus proche de $M$ ; la droite $(MH)$ est dirigée par un vecteur normal de $\\mathcal P$. La distance de $M$ à $\\mathcal P$ est $MH$. De même, le projeté orthogonal de $M$ sur une droite $d$ est le point $H$ de $d$ tel que $\\overrightarrow{MH}$ soit orthogonal à un vecteur directeur de $d$. Ces projetés se calculent en cherchant l'intersection d'une droite (perpendiculaire) avec le plan ou la droite cible."
      }
    ],
    "formulaireTitre": "Formules à connaître par cœur",
    "formulaire": [
      [
        "Définition (cosinus)",
        "$\\vec u\\cdot\\vec v=\\|\\vec u\\|\\,\\|\\vec v\\|\\cos\\theta$"
      ],
      [
        "Expression analytique",
        "$\\vec u\\cdot\\vec v=xx'+yy'+zz'$"
      ],
      [
        "Norme d'un vecteur",
        "$\\|\\vec u\\|=\\sqrt{x^2+y^2+z^2}$"
      ],
      [
        "Orthogonalité",
        "$\\vec u\\perp\\vec v\\iff\\vec u\\cdot\\vec v=0$"
      ],
      [
        "Carré scalaire",
        "$\\vec u\\cdot\\vec u=\\|\\vec u\\|^2$"
      ],
      [
        "Identité remarquable",
        "$\\|\\vec u+\\vec v\\|^2=\\|\\vec u\\|^2+2\\,\\vec u\\cdot\\vec v+\\|\\vec v\\|^2$"
      ],
      [
        "Équation de plan",
        "$ax+by+cz+d=0,\\ \\vec n(a,b,c)$"
      ],
      [
        "Plan par $A$ et normal $\\vec n$",
        "$a(x-x_A)+b(y-y_A)+c(z-z_A)=0$"
      ],
      [
        "Distance entre deux points",
        "$AB=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$"
      ],
      [
        "Cosinus de l'angle",
        "$\\cos\\theta=\\dfrac{\\vec u\\cdot\\vec v}{\\|\\vec u\\|\\,\\|\\vec v\\|}$"
      ]
    ],
    "methodes": [
      {
        "t": "Trouver l'équation cartésienne d'un plan (point + vecteur normal)",
        "etapes": [
          "Repérer le vecteur normal $\\vec n(a,b,c)$ : ses coordonnées sont directement les coefficients $a$, $b$, $c$.",
          "Écrire l'équation sous la forme $ax+by+cz+d=0$ avec $a$, $b$, $c$ connus, $d$ inconnu.",
          "Injecter les coordonnées du point $A$ du plan dans l'équation pour trouver $d$.",
          "Conclure en écrivant l'équation complète. Vérifier en re-substituant $A$ : on doit obtenir $0$."
        ]
      },
      {
        "t": "Trouver un vecteur normal à un plan défini par deux vecteurs directeurs",
        "etapes": [
          "Noter les deux vecteurs directeurs $\\vec u$ et $\\vec v$ non colinéaires du plan.",
          "Poser $\\vec n(a,b,c)$ inconnu et écrire le système $\\vec n\\cdot\\vec u=0$ et $\\vec n\\cdot\\vec v=0$.",
          "Résoudre le système (deux équations, trois inconnues) : on fixe une coordonnée et on déduit les autres.",
          "Donner un vecteur normal simple (quitte à multiplier pour avoir des entiers)."
        ]
      },
      {
        "t": "Calculer la distance d'un point à un plan (via le projeté)",
        "etapes": [
          "Écrire la droite $d$ passant par $M$ et dirigée par le vecteur normal $\\vec n$ du plan (représentation paramétrique).",
          "Remplacer $x$, $y$, $z$ paramétrés dans l'équation du plan pour trouver la valeur du paramètre $t$.",
          "En déduire les coordonnées du projeté orthogonal $H$ (point d'intersection droite-plan).",
          "Calculer la distance $MH=\\|\\overrightarrow{MH}\\|$."
        ]
      },
      {
        "t": "Trouver l'intersection d'une droite et d'un plan",
        "etapes": [
          "Écrire la représentation paramétrique de la droite : $x$, $y$, $z$ en fonction de $t$.",
          "Substituer ces expressions dans l'équation cartésienne $ax+by+cz+d=0$ du plan.",
          "Résoudre l'équation obtenue en $t$ : une solution donne un point d'intersection unique.",
          "Reporter la valeur de $t$ dans la paramétrisation pour obtenir les coordonnées du point."
        ]
      }
    ],
    "annales": [
      {
        "y": 2024,
        "s": "Dans un repère orthonormé, déterminer une équation cartésienne du plan passant par $A(1,0,2)$ et de vecteur normal $\\vec n(2,-1,3)$, puis calculer la distance du point $B(0,1,0)$ à ce plan.",
        "loc": "Métropole"
      },
      {
        "y": 2023,
        "s": "On donne trois points $A$, $B$, $C$ non alignés. Montrer que $\\vec n(1,1,-1)$ est normal au plan $(ABC)$, en déduire une équation du plan, puis déterminer le projeté orthogonal de l'origine sur ce plan.",
        "loc": "Métropole"
      },
      {
        "y": 2022,
        "s": "Soit la droite $d$ de représentation paramétrique donnée et le plan $\\mathcal P$ d'équation $x+2y-z+1=0$. Déterminer les coordonnées du point d'intersection de $d$ et de $\\mathcal P$.",
        "loc": "Centres étrangers"
      }
    ],
    "piege": "Le piège classique : les coefficients $a$, $b$, $c$ de l'équation $ax+by+cz+d=0$ SONT les coordonnées du vecteur normal $\\vec n(a,b,c)$ — pas besoin de calcul, on lit directement. Deuxième piège : orthogonal n'est pas parallèle ($\\vec u\\cdot\\vec v=0$ veut dire perpendiculaire, pas colinéaire). Troisième piège : ne confonds pas l'équation cartésienne d'un PLAN (une seule équation $ax+by+cz+d=0$) avec la représentation paramétrique d'une DROITE (trois équations avec un paramètre $t$).",
    "qcm": [
      {
        "q": "Soit $\\vec u(1,2,-1)$ et $\\vec v(3,-1,2)$. Que vaut $\\vec u\\cdot\\vec v$ ?",
        "opts": [
          "$-1$",
          "$3$",
          "$-3$",
          "$1$"
        ],
        "ok": 0,
        "why": "$1\\times3+2\\times(-1)+(-1)\\times2=3-2-2=-1$."
      },
      {
        "q": "Quelle est la norme du vecteur $\\vec u(2,-1,2)$ ?",
        "opts": [
          "$5$",
          "$3$",
          "$\\sqrt{5}$",
          "$9$"
        ],
        "ok": 1,
        "why": "$\\|\\vec u\\|=\\sqrt{2^2+(-1)^2+2^2}=\\sqrt{4+1+4}=\\sqrt{9}=3$."
      },
      {
        "q": "Un vecteur normal au plan d'équation $3x-2y+z-5=0$ est :",
        "opts": [
          "$\\vec n(-5,3,-2)$",
          "$\\vec n(3,2,1)$",
          "$\\vec n(3,-2,1)$",
          "$\\vec n(3,-2,-5)$"
        ],
        "ok": 2,
        "why": "Les coefficients de $x$, $y$, $z$ donnent $\\vec n(3,-2,1)$ ; le terme constant $-5$ n'intervient pas."
      },
      {
        "q": "Les vecteurs $\\vec u(1,2,3)$ et $\\vec v(2,-1,0)$ sont :",
        "opts": [
          "colinéaires",
          "orthogonaux",
          "égaux",
          "ni l'un ni l'autre"
        ],
        "ok": 1,
        "why": "$\\vec u\\cdot\\vec v=1\\times2+2\\times(-1)+3\\times0=2-2+0=0$, donc orthogonaux."
      },
      {
        "q": "Le plan passant par $A(1,1,1)$ et de vecteur normal $\\vec n(1,0,2)$ a pour équation :",
        "opts": [
          "$x+2z+3=0$",
          "$x+2z-3=0$",
          "$x+y+2z-4=0$",
          "$x+2z=0$"
        ],
        "ok": 1,
        "why": "$1(x-1)+0(y-1)+2(z-1)=0$ donne $x+2z-3=0$."
      },
      {
        "q": "Le point $M(2,0,-1)$ appartient-il au plan d'équation $x-y+2z=0$ ?",
        "opts": [
          "Oui",
          "Non, on obtient $4$",
          "Non, on obtient $-2$",
          "On ne peut pas savoir"
        ],
        "ok": 0,
        "why": "$2-0+2\\times(-1)=2-2=0$ : l'équation est vérifiée, donc $M$ appartient au plan."
      },
      {
        "q": "Si $\\|\\vec u\\|=3$, $\\|\\vec v\\|=4$ et l'angle entre eux vaut $60°$, alors $\\vec u\\cdot\\vec v$ vaut :",
        "opts": [
          "$12$",
          "$6$",
          "$6\\sqrt{3}$",
          "$0$"
        ],
        "ok": 1,
        "why": "$\\vec u\\cdot\\vec v=3\\times4\\times\\cos(60°)=12\\times\\tfrac12=6$."
      },
      {
        "q": "Deux plans sont parallèles si leurs vecteurs normaux sont :",
        "opts": [
          "orthogonaux",
          "de produit scalaire nul",
          "colinéaires",
          "de même norme"
        ],
        "ok": 2,
        "why": "Deux plans sont parallèles ssi leurs vecteurs normaux sont colinéaires (même direction normale)."
      },
      {
        "q": "Que vaut $\\vec u\\cdot\\vec u$ pour $\\vec u(1,-2,2)$ ?",
        "opts": [
          "$3$",
          "$\\sqrt{9}$",
          "$9$",
          "$0$"
        ],
        "ok": 2,
        "why": "$\\vec u\\cdot\\vec u=\\|\\vec u\\|^2=1+4+4=9$."
      },
      {
        "q": "Les plans $x+y+z=1$ et $2x+2y+2z=5$ sont :",
        "opts": [
          "confondus",
          "sécants",
          "strictement parallèles",
          "perpendiculaires"
        ],
        "ok": 2,
        "why": "Les normaux $(1,1,1)$ et $(2,2,2)$ sont colinéaires (plans parallèles), mais $2\\times1\\neq5$ donc pas confondus : strictement parallèles."
      },
      {
        "q": "Pour que $\\vec n(1,k,2)$ soit orthogonal à $\\vec u(2,1,-1)$, il faut $k=$",
        "opts": [
          "$0$",
          "$2$",
          "$-2$",
          "$4$"
        ],
        "ok": 0,
        "why": "$\\vec n\\cdot\\vec u=2+k-2=k$ ; on veut $k=0$."
      },
      {
        "q": "L'intersection d'une droite et d'un plan non parallèles est :",
        "opts": [
          "vide",
          "une droite",
          "un point",
          "un plan"
        ],
        "ok": 2,
        "why": "Si la droite n'est pas parallèle au plan, elle le perce en exactement un point."
      }
    ],
    "flash": [
      {
        "front": "Expression analytique de $\\vec u\\cdot\\vec v$ ?",
        "back": "$\\vec u\\cdot\\vec v=xx'+yy'+zz'$"
      },
      {
        "front": "Norme de $\\vec u(x,y,z)$ ?",
        "back": "$\\|\\vec u\\|=\\sqrt{x^2+y^2+z^2}$"
      },
      {
        "front": "Condition d'orthogonalité de $\\vec u$ et $\\vec v$ ?",
        "back": "$\\vec u\\cdot\\vec v=0$"
      },
      {
        "front": "Définition du produit scalaire avec l'angle ?",
        "back": "$\\vec u\\cdot\\vec v=\\|\\vec u\\|\\,\\|\\vec v\\|\\cos\\theta$"
      },
      {
        "front": "Que vaut $\\vec u\\cdot\\vec u$ ?",
        "back": "$\\|\\vec u\\|^2$"
      },
      {
        "front": "Vecteur normal au plan $ax+by+cz+d=0$ ?",
        "back": "$\\vec n(a,b,c)$"
      },
      {
        "front": "Équation du plan par $A$ de normal $\\vec n(a,b,c)$ ?",
        "back": "$a(x-x_A)+b(y-y_A)+c(z-z_A)=0$"
      },
      {
        "front": "Comment montrer que $\\vec n$ est normal à un plan ?",
        "back": "$\\vec n$ orthogonal à deux vecteurs directeurs non colinéaires du plan"
      },
      {
        "front": "Distance entre $A$ et $B$ dans l'espace ?",
        "back": "$AB=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$"
      },
      {
        "front": "Cosinus de l'angle entre $\\vec u$ et $\\vec v$ ?",
        "back": "$\\cos\\theta=\\dfrac{\\vec u\\cdot\\vec v}{\\|\\vec u\\|\\,\\|\\vec v\\|}$"
      },
      {
        "front": "Identité : $\\|\\vec u+\\vec v\\|^2=$ ?",
        "back": "$\\|\\vec u\\|^2+2\\,\\vec u\\cdot\\vec v+\\|\\vec v\\|^2$"
      },
      {
        "front": "Deux plans parallèles : que dire des normaux ?",
        "back": "Ils sont colinéaires"
      }
    ],
    "vraifaux": [
      {
        "q": "Le produit scalaire de deux vecteurs est un nombre réel.",
        "v": true,
        "why": "Oui, $\\vec u\\cdot\\vec v$ est un scalaire (réel), pas un vecteur."
      },
      {
        "q": "Si $\\vec u\\cdot\\vec v=0$ alors $\\vec u$ et $\\vec v$ sont colinéaires.",
        "v": false,
        "why": "Faux : $\\vec u\\cdot\\vec v=0$ signifie qu'ils sont orthogonaux, c'est le contraire de colinéaires (sauf si l'un est nul)."
      },
      {
        "q": "Les coefficients $a,b,c$ de $ax+by+cz+d=0$ sont les coordonnées d'un vecteur normal au plan.",
        "v": true,
        "why": "Exact : $\\vec n(a,b,c)$ est normal au plan, on le lit directement."
      },
      {
        "q": "Dans un repère orthonormé, $\\vec u\\cdot\\vec u=\\|\\vec u\\|^2$.",
        "v": true,
        "why": "Vrai : le carré scalaire est égal au carré de la norme."
      },
      {
        "q": "Un vecteur normal à un plan est parallèle à ce plan.",
        "v": false,
        "why": "Faux : un vecteur normal est orthogonal au plan, donc à tous ses vecteurs directeurs."
      },
      {
        "q": "Une équation cartésienne d'un plan est de la forme $ax+by+cz+d=0$.",
        "v": true,
        "why": "Vrai, avec $(a,b,c)\\neq(0,0,0)$."
      },
      {
        "q": "Le produit scalaire est commutatif : $\\vec u\\cdot\\vec v=\\vec v\\cdot\\vec u$.",
        "v": true,
        "why": "Vrai, le produit scalaire est symétrique."
      },
      {
        "q": "Si l'angle entre $\\vec u$ et $\\vec v$ est obtus, alors $\\vec u\\cdot\\vec v>0$.",
        "v": false,
        "why": "Faux : pour un angle obtus, $\\cos\\theta<0$ donc $\\vec u\\cdot\\vec v<0$."
      },
      {
        "q": "La distance d'un point $M$ à un plan est la longueur $MH$ où $H$ est le projeté orthogonal de $M$ sur le plan.",
        "v": true,
        "why": "Vrai : $H$ est le point du plan le plus proche de $M$."
      },
      {
        "q": "Une droite et un plan ont toujours un point d'intersection unique.",
        "v": false,
        "why": "Faux : si la droite est parallèle au plan, l'intersection est vide ou la droite est incluse dans le plan."
      }
    ],
    "qmethode": [
      {
        "q": "On veut l'équation d'un plan dont on connaît un point et un vecteur normal. Quelle méthode ?",
        "opts": [
          "Écrire $a(x-x_A)+b(y-y_A)+c(z-z_A)=0$ avec $\\vec n(a,b,c)$",
          "Faire une représentation paramétrique",
          "Calculer une norme",
          "Résoudre un système de trois équations"
        ],
        "ok": 0,
        "why": "On utilise directement le vecteur normal pour les coefficients et on injecte le point."
      },
      {
        "q": "On cherche un vecteur normal à un plan défini par deux vecteurs directeurs. Que fait-on ?",
        "opts": [
          "On additionne les deux vecteurs directeurs",
          "On résout le système $\\vec n\\cdot\\vec u=0$ et $\\vec n\\cdot\\vec v=0$",
          "On calcule la norme de chaque vecteur",
          "On prend la moyenne des coordonnées"
        ],
        "ok": 1,
        "why": "Le vecteur normal doit être orthogonal aux deux directeurs : on pose un système et on le résout."
      },
      {
        "q": "Pour montrer qu'une droite est orthogonale à un plan, on vérifie que :",
        "opts": [
          "Le vecteur directeur de la droite est colinéaire au vecteur normal du plan",
          "La droite coupe le plan",
          "Le vecteur directeur est dans le plan",
          "Les normes sont égales"
        ],
        "ok": 0,
        "why": "Une droite est orthogonale au plan ssi son vecteur directeur est colinéaire à un vecteur normal du plan."
      },
      {
        "q": "Pour trouver le projeté orthogonal d'un point sur un plan, on :",
        "opts": [
          "Calcule directement la distance",
          "Trace la droite passant par le point dirigée par le vecteur normal, puis on cherche son intersection avec le plan",
          "Prend le milieu du point et de l'origine",
          "Résout l'équation du plan seule"
        ],
        "ok": 1,
        "why": "Le projeté est l'intersection du plan avec la perpendiculaire (droite dirigée par le vecteur normal) passant par le point."
      },
      {
        "q": "Pour trouver l'intersection d'une droite et d'un plan, on :",
        "opts": [
          "Calcule un produit scalaire",
          "Substitue la paramétrisation de la droite dans l'équation du plan et on résout en $t$",
          "Vérifie l'orthogonalité",
          "Additionne les deux équations"
        ],
        "ok": 1,
        "why": "On remplace $x,y,z$ par leur expression en $t$ dans l'équation du plan, puis on résout pour trouver $t$."
      },
      {
        "q": "Pour calculer l'angle entre deux vecteurs, on utilise :",
        "opts": [
          "$\\cos\\theta=\\dfrac{\\vec u\\cdot\\vec v}{\\|\\vec u\\|\\,\\|\\vec v\\|}$",
          "Le théorème de Pythagore",
          "Une représentation paramétrique",
          "La somme des coordonnées"
        ],
        "ok": 0,
        "why": "On isole $\\cos\\theta$ dans la formule du produit scalaire, puis on en déduit $\\theta$."
      },
      {
        "q": "Pour montrer que deux droites sont orthogonales dans l'espace, on :",
        "opts": [
          "Vérifie que leurs vecteurs directeurs ont un produit scalaire nul",
          "Vérifie qu'elles se coupent",
          "Compare leurs équations cartésiennes",
          "Calcule leur distance"
        ],
        "ok": 0,
        "why": "Deux droites sont orthogonales ssi le produit scalaire de leurs vecteurs directeurs est nul (sans forcément se couper)."
      },
      {
        "q": "Pour montrer que trois points $A,B,C$ définissent un plan, on vérifie que :",
        "opts": [
          "$\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ ne sont pas colinéaires",
          "$AB=AC$",
          "Le produit scalaire $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=0$",
          "Les trois points ont la même cote $z$"
        ],
        "ok": 0,
        "why": "Trois points définissent un plan ssi ils ne sont pas alignés, c'est-à-dire $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ non colinéaires."
      }
    ]
  },
  {
    "id": "python",
    "tag": "Transversal",
    "title": "Algorithmique et Python",
    "intro": "Python n'est pas un chapitre à part : c'est un outil qui traverse tout le programme. On s'en sert pour calculer des termes d'une suite, chercher un seuil, approcher une solution de $f(x)=0$ par dichotomie, simuler le hasard ou approcher une intégrale. Au bac, on te demande surtout de LIRE un programme (« que renvoie ce script ? »), de COMPLÉTER une ligne manquante, ou de dire ce que vaut une variable à la fin. Pas besoin d'être développeur : il faut maîtriser une dizaine de briques (variables, conditions, boucles for et while, fonctions, listes) et connaître 4-5 algorithmes classiques. Le piège numéro 1 : <code>range(n)</code> s'arrête à n-1.",
    "objectifs": [
      "Lire un programme Python et prédire ce qu'il affiche ou renvoie",
      "Maîtriser les boucles for ... in range(...) et while, et savoir laquelle choisir",
      "Écrire et compléter un algorithme de recherche de seuil avec une boucle while",
      "Comprendre et compléter une dichotomie pour approcher une solution de $f(x)=0$",
      "Calculer des termes et des sommes de suites, et manipuler des listes",
      "Simuler le hasard avec le module random et approcher une intégrale (méthode des rectangles)"
    ],
    "cours": [
      {
        "t": "Variables, types et affectation",
        "d": "Une variable se crée par <b>affectation</b> avec le signe <code>=</code> : <code>x = 5</code> range la valeur 5 dans la boîte x. Attention, <code>=</code> n'a rien à voir avec l'égalité maths : <code>x = x + 1</code> veut dire « prends l'ancien x, ajoute 1, remets le résultat dans x ». Les principaux types sont <code>int</code> (entier, ex. 3) et <code>float</code> (décimal, ex. 3.5). Les opérateurs utiles : <code>+ - *</code> classiques, <code>**</code> pour la puissance ($2^{10}$ s'écrit <code>2**10</code> et vaut 1024), <code>/</code> division qui donne toujours un float (<code>7/2</code> donne 3.5), <code>//</code> division entière (<code>17//5</code> donne 3, le quotient) et <code>%</code> modulo (<code>17%5</code> donne 2, le reste). Le test <code>n%2==0</code> détecte les nombres pairs."
      },
      {
        "t": "Conditions : if / elif / else",
        "d": "On exécute un bloc selon qu'une condition est vraie ou fausse. La condition est un test : <code>==</code> (égal), <code>!=</code> (différent), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Surtout ne pas confondre <code>=</code> (affecter) et <code>==</code> (tester). Exemple :<pre><code>if note &gt;= 10:\n    print(\"recu\")\nelif note &gt;= 8:\n    print(\"rattrapage\")\nelse:\n    print(\"ajourne\")</code></pre>L'<b>indentation</b> (les espaces en début de ligne) délimite les blocs : c'est obligatoire en Python, une indentation fausse casse le programme."
      },
      {
        "t": "Boucles for et while",
        "d": "La boucle <code>for</code> répète un bloc un nombre <b>connu</b> de fois : <code>for k in range(n):</code> fait varier k de 0 à n-1. Piège majeur : <code>range(5)</code> donne 0,1,2,3,4 (cinq valeurs, la borne 5 est <b>exclue</b>) et <code>range(2,7)</code> donne 2,3,4,5,6. On peut ajouter un pas : <code>range(10,0,-2)</code> donne 10,8,6,4,2. La boucle <code>while</code> répète <b>tant qu'</b>une condition est vraie, sans savoir d'avance combien de fois : c'est elle qu'on utilise pour chercher un seuil. Il faut garantir que la condition finira par devenir fausse, sinon boucle infinie."
      },
      {
        "t": "Fonctions et listes",
        "d": "Une <b>fonction</b> se définit avec <code>def</code> et renvoie un résultat avec <code>return</code> :<pre><code>def carre(x):\n    return x * x</code></pre>On l'appelle ensuite par <code>carre(4)</code> qui vaut 16. Dès que Python rencontre <code>return</code>, il sort de la fonction. Une <b>liste</b> stocke plusieurs valeurs : <code>L = [3, 7, 2]</code>, on accède au premier élément par <code>L[0]</code> (les indices commencent à 0), on connaît sa taille avec <code>len(L)</code> et on ajoute un élément à la fin avec <code>L.append(valeur)</code>. On la parcourt avec <code>for x in L:</code>."
      },
      {
        "t": "Les algorithmes classiques en maths",
        "d": "Quatre schémas reviennent sans cesse. <b>Seuil</b> : trouver le plus petit n tel qu'une suite dépasse une valeur, avec un <code>while</code> qui calcule les termes et un compteur. <b>Dichotomie</b> : approcher la solution de $f(x)=0$ sur $[a,b]$ (avec f continue changeant de signe) en coupant l'intervalle en deux à chaque étape, et en gardant la moitié où le signe change. <b>Suites et sommes</b> : mettre à jour un terme avec <code>u = ...</code> dans une boucle, en accumulant une somme <code>S = S + u</code>. <b>Simulation aléatoire</b> : avec <code>from random import randint, random</code> on imite un lancer de dé, un échantillon, une loi binomiale, et on estime des fréquences. La <b>méthode des rectangles</b> approche une intégrale en sommant des aires de rectangles."
      }
    ],
    "formulaireTitre": "Mémo de syntaxe",
    "formulaire": [
      [
        "<code>x = 5</code>",
        "Affectation : range la valeur 5 dans la variable x (= n'est PAS un test)"
      ],
      [
        "<code>a == b</code> / <code>a != b</code>",
        "Tests d'égalité et de différence (== teste, = affecte)"
      ],
      [
        "<code>17 // 5</code> = 3, <code>17 % 5</code> = 2",
        "Division entière (quotient) et modulo (reste) ; <code>n%2==0</code> teste si n est pair"
      ],
      [
        "<code>2 ** 10</code> = 1024, <code>7 / 2</code> = 3.5",
        "Puissance, et division qui donne toujours un float"
      ],
      [
        "<code>for k in range(n):</code>",
        "Boucle qui fait varier k de 0 à n-1 (la borne n est EXCLUE)"
      ],
      [
        "<code>range(2, 7)</code> = 2,3,4,5,6",
        "De 2 inclus à 7 exclu ; <code>range(a, b, pas)</code> ajoute un pas"
      ],
      [
        "<code>while condition:</code>",
        "Répète TANT QUE la condition est vraie (nombre de tours inconnu)"
      ],
      [
        "<code>def f(x):</code> ... <code>return ...</code>",
        "Définit une fonction ; return renvoie le résultat et sort de la fonction"
      ],
      [
        "<code>L = []</code> puis <code>L.append(v)</code>",
        "Crée une liste vide puis ajoute v à la fin ; <code>L[0]</code>, <code>len(L)</code>"
      ],
      [
        "<code>from random import randint, random</code>",
        "<code>randint(1,6)</code> : entier de 1 à 6 inclus ; <code>random()</code> : flottant dans [0,1["
      ]
    ],
    "methodes": [
      {
        "t": "Écrire un algorithme de SEUIL (while)",
        "etapes": [
          "Initialise le premier terme et un compteur : <code>u = u0</code> et <code>n = 0</code>",
          "Tant que la condition de seuil n'est PAS encore atteinte, boucle : <code>while u &lt;= valeur:</code>",
          "Dans la boucle, calcule le terme suivant (<code>u = ...</code>) ET incrémente le compteur (<code>n = n + 1</code>)",
          "À la sortie, n contient le plus petit rang qui dépasse le seuil ; on l'affiche avec <code>print(n)</code>",
          "Vérifie l'ordre des deux lignes : si tu mets n+=1 avant ou après u=..., teste sur les premiers termes"
        ]
      },
      {
        "t": "Compléter une DICHOTOMIE",
        "etapes": [
          "Vérifie que f est continue sur $[a,b]$ et que $f(a)$ et $f(b)$ sont de signes contraires",
          "Calcule le milieu : <code>m = (a + b) / 2</code>",
          "Regarde où est le changement de signe : si <code>f(a) * f(m) &lt;= 0</code>, la racine est dans $[a,m]$, donc <code>b = m</code> ; sinon <code>a = m</code>",
          "Répète soit un nombre fixe de fois (<code>for</code>), soit jusqu'à la précision voulue (<code>while b - a &gt; 0.001</code>)",
          "La valeur approchée de la solution est le dernier milieu, ou <code>(a+b)/2</code>"
        ]
      },
      {
        "t": "Lire un script « que vaut la variable à la fin ? »",
        "etapes": [
          "Note la valeur initiale de chaque variable",
          "Déroule la boucle À LA MAIN sur un tableau : une ligne par tour, une colonne par variable",
          "Attention au range : compte exactement combien de tours (range(5) = 5 tours, k = 0,1,2,3,4)",
          "Repère bien l'indentation : une ligne hors de la boucle ne s'exécute qu'une fois, à la fin",
          "La dernière valeur écrite dans le tableau est la réponse"
        ]
      },
      {
        "t": "Approcher une intégrale (méthode des rectangles)",
        "etapes": [
          "Choisis le nombre de rectangles n ; calcule le pas : <code>pas = (b - a) / n</code>",
          "Initialise la somme à 0 : <code>S = 0</code>",
          "Pour k de 0 à n-1, ajoute l'aire d'un rectangle : <code>S = S + f(a + k*pas) * pas</code> (rectangles à gauche)",
          "À la fin, S approche $\\int_a^b f(x)\\,dx$ ; plus n est grand, meilleure est l'approximation"
        ]
      }
    ],
    "annales": [
      {
        "y": 2024,
        "s": "Compléter un script de dichotomie approchant la solution de f(x)=0, et donner le nombre d'itérations",
        "loc": "Métropole"
      },
      {
        "y": 2023,
        "s": "Recherche d'un seuil avec une boucle while sur une suite, lecture du résultat affiché",
        "loc": "Métropole"
      },
      {
        "y": 2022,
        "s": "Simulation d'un échantillon avec random et estimation d'une fréquence (loi binomiale)",
        "loc": "Centres étrangers"
      }
    ],
    "piege": "Le piège n°1 : <code>range(n)</code> s'arrête à n-1, donc <code>range(5)</code> ne contient PAS 5 (il donne 0,1,2,3,4). Le piège n°2 : ne confonds jamais <code>=</code> (affecter une valeur) et <code>==</code> (tester une égalité, dans un if ou un while). Le piège n°3 : l'indentation décide ce qui est DANS la boucle ou DEHORS, une ligne mal indentée change tout le résultat. Enfin <code>/</code> donne un décimal (7/2 = 3.5) alors que <code>//</code> donne le quotient entier (7//2 = 3) : ne les confonds pas.",
    "qcm": [
      {
        "q": "Que renvoie cette fonction ? <pre><code>def f(n):\n    s = 0\n    for k in range(1, 6):\n        s = s + k\n    return s\nprint(f(0))</code></pre>",
        "opts": [
          "10",
          "15",
          "21",
          "6"
        ],
        "ok": 1,
        "why": "range(1, 6) donne 1,2,3,4,5 (6 exclu). La somme 1+2+3+4+5 vaut 15."
      },
      {
        "q": "Que vaut x à la fin ? <pre><code>x = 10\nfor k in range(4):\n    x = x // 2\nprint(x)</code></pre>",
        "opts": [
          "0",
          "1",
          "2",
          "2.5"
        ],
        "ok": 0,
        "why": "// est la division entière. 10//2=5, 5//2=2, 2//2=1, 1//2=0. Après 4 tours, x = 0."
      },
      {
        "q": "Combien de tours fait cette boucle, et que vaut n à la fin ? <pre><code>n = 0\nu = 1\nwhile u &lt;= 1000:\n    u = 2*u + 3\n    n = n + 1\nprint(n)</code></pre>",
        "opts": [
          "7",
          "8",
          "9",
          "boucle infinie"
        ],
        "ok": 1,
        "why": "Les termes : 1, 5, 13, 29, 61, 125, 253, 509, 1021. Le terme 1021 > 1000 sort à n = 8."
      },
      {
        "q": "Que vaut la liste L à la fin ? <pre><code>L = []\nfor k in range(1, 5):\n    L.append(k*k)\nprint(L)</code></pre>",
        "opts": [
          "[0, 1, 4, 9]",
          "[1, 4, 9, 16, 25]",
          "[1, 4, 9, 16]",
          "[1, 2, 3, 4]"
        ],
        "ok": 2,
        "why": "range(1,5) donne 1,2,3,4. On ajoute leurs carrés : 1, 4, 9, 16. Le 25 n'apparaît pas car 5 est exclu."
      },
      {
        "q": "Que vaut <code>17 % 5</code> en Python ?",
        "opts": [
          "3",
          "2",
          "3.4",
          "12"
        ],
        "ok": 1,
        "why": "% est le modulo (le reste de la division euclidienne). 17 = 5×3 + 2, donc le reste est 2. (17 // 5 vaut 3.)"
      },
      {
        "q": "Cette dichotomie cherche une solution de f(x)=0 avec f(x)=x²-2 sur [1,2]. Que vaut environ a (ou b) à la fin ? <pre><code>def f(x):\n    return x*x - 2\na = 1\nb = 2\nfor i in range(20):\n    m = (a + b) / 2\n    if f(a)*f(m) &lt;= 0:\n        b = m\n    else:\n        a = m\nprint((a+b)/2)</code></pre>",
        "opts": [
          "1.5",
          "1.414",
          "2.0",
          "1.732"
        ],
        "ok": 1,
        "why": "L'algorithme approche la racine de x²-2 = 0, c'est-à-dire $\\sqrt{2} \\approx 1{,}414$."
      },
      {
        "q": "Quel est le rôle de la ligne <code>L.append(x)</code> ?",
        "opts": [
          "Elle supprime x de la liste L",
          "Elle ajoute x à la fin de la liste L",
          "Elle remplace L par x",
          "Elle compte combien de fois x apparaît dans L"
        ],
        "ok": 1,
        "why": "append ajoute l'élément x à la fin de la liste L. Pour la taille on utilise len(L)."
      },
      {
        "q": "Que vaut c à la fin ? <pre><code>c = 0\nfor i in range(3):\n    for j in range(2):\n        c = c + 1\nprint(c)</code></pre>",
        "opts": [
          "5",
          "6",
          "3",
          "2"
        ],
        "ok": 1,
        "why": "La boucle externe tourne 3 fois, l'interne 2 fois à chaque tour : 3 × 2 = 6 incréments."
      },
      {
        "q": "Que vaut <code>2 ** 10</code> ?",
        "opts": [
          "20",
          "100",
          "1024",
          "512"
        ],
        "ok": 2,
        "why": "** est l'opérateur puissance : $2^{10} = 1024$. (À ne pas confondre avec 2*10 = 20.)"
      },
      {
        "q": "Que renvoie ce calcul de PGCD (algorithme d'Euclide) ? <pre><code>a = 48\nb = 36\nwhile b != 0:\n    a, b = b, a % b\nprint(a)</code></pre>",
        "opts": [
          "6",
          "12",
          "4",
          "84"
        ],
        "ok": 1,
        "why": "Euclide : (48,36) → (36,12) → (12,0). On s'arrête quand b=0 et a=12 = PGCD(48,36)."
      },
      {
        "q": "Que vaut <code>list(range(2, 7))</code> ?",
        "opts": [
          "[2, 3, 4, 5, 6, 7]",
          "[2, 3, 4, 5, 6]",
          "[3, 4, 5, 6, 7]",
          "[2, 7]"
        ],
        "ok": 1,
        "why": "range(a, b) va de a inclus à b exclu : ici 2,3,4,5,6 (le 7 n'y est pas)."
      },
      {
        "q": "Combien de tours pour atteindre une précision de 0,001 par dichotomie sur un intervalle de longueur 1 ? <pre><code>a = 1\nb = 2\nc = 0\nwhile b - a &gt; 0.001:\n    m = (a + b) / 2\n    # ... mise a jour de a ou b ...\n    c = c + 1\nprint(c)</code></pre>",
        "opts": [
          "3",
          "10",
          "100",
          "1000"
        ],
        "ok": 1,
        "why": "À chaque tour la longueur est divisée par 2. Il faut $1/2^n &lt; 0{,}001$, soit $2^n &gt; 1000$ : n = 10 ($2^{10}=1024$)."
      }
    ],
    "flash": [
      {
        "front": "Que donne <code>range(5)</code> dans une boucle for ?",
        "back": "Les entiers 0, 1, 2, 3, 4 (la borne 5 est exclue) — soit 5 valeurs."
      },
      {
        "front": "Différence entre <code>=</code> et <code>==</code> ?",
        "back": "<code>=</code> affecte une valeur à une variable ; <code>==</code> teste si deux valeurs sont égales (dans un if/while)."
      },
      {
        "front": "Que vaut <code>17 // 5</code> et <code>17 % 5</code> ?",
        "back": "<code>17 // 5</code> = 3 (quotient entier) et <code>17 % 5</code> = 2 (reste)."
      },
      {
        "front": "Comment ajouter un élément à la fin d'une liste L ?",
        "back": "<code>L.append(element)</code>"
      },
      {
        "front": "Comment écrire $2^{10}$ en Python et combien ça vaut ?",
        "back": "<code>2 ** 10</code>, ce qui vaut 1024."
      },
      {
        "front": "Quand utiliser une boucle <code>while</code> plutôt qu'une boucle <code>for</code> ?",
        "back": "Quand on ne connaît pas d'avance le nombre de tours (ex. recherche d'un seuil) : on répète TANT QU'une condition est vraie."
      },
      {
        "front": "À quoi sert <code>return</code> dans une fonction ?",
        "back": "À renvoyer un résultat à l'appelant ; dès qu'il est exécuté, on sort de la fonction."
      },
      {
        "front": "Comment importer de quoi simuler un dé à 6 faces ?",
        "back": "<code>from random import randint</code> puis <code>randint(1, 6)</code> (1 et 6 inclus)."
      },
      {
        "front": "Que renvoie <code>random()</code> ?",
        "back": "Un nombre flottant aléatoire dans l'intervalle [0 ; 1[ (1 exclu)."
      },
      {
        "front": "Comment connaître la longueur d'une liste L ?",
        "back": "<code>len(L)</code> ; l'élément d'indice 0 est le premier : <code>L[0]</code>."
      },
      {
        "front": "Dans une dichotomie sur [a,b], comment calcule-t-on le milieu ?",
        "back": "<code>m = (a + b) / 2</code>"
      },
      {
        "front": "Quelle est la condition d'application de la dichotomie pour f(x)=0 ?",
        "back": "f continue sur $[a,b]$ et $f(a)$, $f(b)$ de signes contraires (changement de signe)."
      }
    ],
    "vraifaux": [
      {
        "q": "<code>range(0, 5)</code> contient le nombre 5.",
        "v": false,
        "why": "La borne supérieure est exclue : range(0,5) donne 0,1,2,3,4. 5 n'y est pas."
      },
      {
        "q": "<code>7 / 2</code> renvoie 3.5 alors que <code>7 // 2</code> renvoie 3.",
        "v": true,
        "why": "/ donne un float (division réelle), // donne le quotient entier."
      },
      {
        "q": "En Python, on peut écrire un if sans respecter l'indentation.",
        "v": false,
        "why": "L'indentation est obligatoire : elle délimite les blocs. Une indentation incorrecte provoque une erreur."
      },
      {
        "q": "Une boucle <code>while</code> peut tourner indéfiniment si sa condition ne devient jamais fausse.",
        "v": true,
        "why": "C'est la boucle infinie : il faut s'assurer que la condition finit par devenir fausse."
      },
      {
        "q": "<code>x == 3</code> range la valeur 3 dans la variable x.",
        "v": false,
        "why": "== est un TEST (renvoie vrai ou faux). Pour affecter, il faut <code>x = 3</code>."
      },
      {
        "q": "<code>L.append(4)</code> ajoute 4 à la fin de la liste L.",
        "v": true,
        "why": "C'est exactement le rôle de la méthode append."
      },
      {
        "q": "Le premier élément d'une liste L s'obtient avec <code>L[1]</code>.",
        "v": false,
        "why": "Les indices commencent à 0 : le premier élément est <code>L[0]</code>."
      },
      {
        "q": "<code>n % 2 == 0</code> est vrai exactement quand n est pair.",
        "v": true,
        "why": "n % 2 est le reste de la division par 2 ; il vaut 0 si et seulement si n est pair."
      },
      {
        "q": "Pour chercher le plus petit n tel qu'une suite dépasse un seuil, une boucle for est plus adaptée qu'une boucle while.",
        "v": false,
        "why": "On ne connaît pas le rang d'avance : c'est typiquement une boucle while (tant que le seuil n'est pas dépassé)."
      },
      {
        "q": "Augmenter le nombre de rectangles dans la méthode des rectangles améliore l'approximation de l'intégrale.",
        "v": true,
        "why": "Plus les rectangles sont fins (n grand), plus la somme de leurs aires approche l'aire sous la courbe."
      }
    ],
    "qmethode": [
      {
        "q": "On veut le plus petit rang n tel que $u_n > 10^6$, où $u_{n+1} = 1{,}5\\,u_n$. Quel outil Python ?",
        "opts": [
          "Une boucle while avec un compteur (recherche de seuil)",
          "Une dichotomie sur l'intervalle [0 ; 10^6]",
          "Une simulation avec random",
          "La méthode des rectangles"
        ],
        "ok": 0,
        "why": "On ne connaît pas le rang d'avance : boucle while tant que u ≤ 10^6, en calculant les termes et en comptant les tours."
      },
      {
        "q": "On cherche une valeur approchée de la solution de $f(x)=0$ sur $[1,2]$ avec f continue et $f(1)\\times f(2)<0$. Quelle méthode ?",
        "opts": [
          "Une simulation aléatoire",
          "La dichotomie (balayage par moitiés)",
          "Un simple calcul de moyenne",
          "Une boucle for sur range(2)"
        ],
        "ok": 1,
        "why": "Le changement de signe d'une fonction continue garantit une racine (TVI) : la dichotomie la coince en coupant l'intervalle en deux."
      },
      {
        "q": "On veut estimer la probabilité d'obtenir au moins 6 « piles » sur 10 lancers. Quelle approche en Python ?",
        "opts": [
          "Une dichotomie",
          "La méthode des rectangles",
          "Une simulation aléatoire (random) répétée de nombreuses fois",
          "Calculer 6/10"
        ],
        "ok": 2,
        "why": "On simule l'expérience un grand nombre de fois avec random, on compte les succès et on estime la fréquence (loi des grands nombres)."
      },
      {
        "q": "On veut une valeur approchée de $\\int_0^1 e^{-x^2}\\,dx$ qui n'a pas de primitive simple. Quelle méthode ?",
        "opts": [
          "La méthode des rectangles",
          "Une recherche de seuil",
          "Un test if/else",
          "La dichotomie"
        ],
        "ok": 0,
        "why": "Pas de primitive explicite : on approche l'aire par une somme d'aires de rectangles (somme de Riemann)."
      },
      {
        "q": "On veut stocker puis afficher les 20 premiers termes d'une suite. Quelle structure choisir ?",
        "opts": [
          "Une seule variable réutilisée",
          "Une liste alimentée par append dans une boucle for",
          "Un while sans compteur",
          "Une fonction sans return"
        ],
        "ok": 1,
        "why": "Pour garder tous les termes, on les ajoute un à un dans une liste avec append, dans une boucle for range(20)."
      },
      {
        "q": "On veut vérifier si un entier n est pair dans un programme. Quel test ?",
        "opts": [
          "<code>n / 2 == 0</code>",
          "<code>n % 2 == 0</code>",
          "<code>n // 2 == n</code>",
          "<code>n = 2</code>"
        ],
        "ok": 1,
        "why": "n est pair quand le reste de sa division par 2 est nul, soit <code>n % 2 == 0</code>."
      },
      {
        "q": "Pour répéter une action un nombre de fois CONNU à l'avance (ex. 100 simulations), que choisir ?",
        "opts": [
          "Une boucle for in range(100)",
          "Une boucle while sans condition",
          "Une dichotomie",
          "Une fonction récursive obligatoire"
        ],
        "ok": 0,
        "why": "Nombre de tours connu = boucle for sur range(100). Le while est réservé aux cas où le nombre de tours dépend d'une condition."
      },
      {
        "q": "Dans une dichotomie, on a coupé l'intervalle et la racine est dans la moitié gauche $[a,m]$. Quelle mise à jour ?",
        "opts": [
          "<code>a = m</code>",
          "<code>b = m</code>",
          "<code>a = b</code>",
          "<code>m = a</code>"
        ],
        "ok": 1,
        "why": "Si la racine est dans $[a,m]$, on rétrécit l'intervalle par la droite : la nouvelle borne supérieure devient m, donc <code>b = m</code>."
      }
    ]
  }
];
