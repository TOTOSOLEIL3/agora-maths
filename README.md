# AGORA Maths 🧮

Site de révision du **bac de spécialité Mathématiques (Terminale générale, programme post-réforme 2021)**, dans le prolongement d'[AGORA philo](https://agora-philo.fr). Mini-jeux + fiches de cours + formulaires, pour réviser en jouant.

**Tout le programme : 15 chapitres**, ~630 questions. Pour chaque chapitre, une fiche (cours, formulaire, méthodes, annales, piège) + 4 mini-jeux.

## Les 4 jeux (par chapitre)
- **QCM** — choisis la bonne réponse parmi les pièges classiques.
- **Flashcards de formules** — recto/verso, le formulaire à retourner.
- **Vrai / Faux** — démonte les contresens sur les théorèmes.
- **Quelle méthode ?** — la bonne stratégie pour chaque type d'exo.

Plus **Le Grand Mélange** : 12 questions tirées au sort dans tous les chapitres.

## Les chapitres
Suites & récurrence · Combinatoire · Limites & continuité · Dérivation & convexité · Exponentielle · Logarithme · Trigonométrie · Primitives & équa. diff. · Calcul intégral · Probabilités conditionnelles · Loi binomiale · Concentration & LGN · Géométrie dans l'espace · Produit scalaire · Algorithmique & Python.

XP, niveaux et records sont conservés en local (`localStorage`, préfixe `agora_maths_`).

## Technique
- HTML/CSS/JS statiques, **aucune dépendance de build**.
- Formules rendues avec **KaTeX** (CDN).
- Design « éditorial néo-brutaliste » repris d'AGORA philo (`styles.css`).
- Hébergé sur **GitHub Pages**.

### Contenu (architecture data-driven)
Tout le contenu est dans `data-maths.js` (un tableau = un jeu). Le moteur est dans `app-maths.js`.

### Lancer en local
```
python -m http.server 5599
```
puis ouvrir http://localhost:5599

> ⚠️ À chaque mise en prod : bumper `?v=N` sur les `<script>`/`<link>` dans `index.html` pour casser le cache.
