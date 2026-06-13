# AGORA Maths 🧮

Site de révision du **bac de spécialité Mathématiques (Terminale générale, programme post-réforme 2021)**, dans le prolongement d'[AGORA philo](https://agora-philo.fr). Mini-jeux + fiche de cours + formulaire, pour réviser en jouant.

> **Démo en cours** : seul le chapitre **Dérivation** (+ convexité) est complet pour l'instant.

## Ce qu'il y a dedans
- **Trouve la dérivée** — QCM, repère la bonne dérivée parmi les pièges classiques.
- **Flashcards de formules** — recto/verso, le formulaire à retourner.
- **Vrai / Faux** — démonte les contresens sur les théorèmes.
- **Quelle méthode ?** — la bonne stratégie pour chaque type d'exo.
- **La fiche Dérivation** — cours, formulaire complet, méthodes types, annales 2024-2025, le piège à éviter.

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
