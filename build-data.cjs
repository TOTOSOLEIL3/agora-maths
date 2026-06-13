const fs=require('fs');
const order=['suites','combinatoire','limites-continuite','derivation','exponentielle','logarithme','trigonometrie','primitives-equadiff','integrales','proba-conditionnelles','loi-binomiale','concentration','geometrie-espace','produit-scalaire','python'];
const chaps=order.map(id=>{
  const d=JSON.parse(fs.readFileSync('chapters/'+id+'.json','utf8'));
  if(d.id!==id) throw new Error('id mismatch '+id+' vs '+d.id);
  return d;
});
const header=`/* ============================================================
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

`;
const body='const CHAPITRES = '+JSON.stringify(chaps,null,2)+';\n';
fs.writeFileSync('data-maths.js', header+body);
// sanity: load it
const fn=new Function(header+body+'\nreturn {BAC_DATE,LEVELS,CHAPITRES};');
const r=fn();
console.log('OK data-maths.js — '+r.CHAPITRES.length+' chapitres');
let tq=0,tf=0,tv=0,tm=0;
r.CHAPITRES.forEach(c=>{tq+=c.qcm.length;tf+=c.flash.length;tv+=c.vraifaux.length;tm+=c.qmethode.length;});
console.log('Total contenu : '+tq+' QCM, '+tf+' flashcards, '+tv+' vrai/faux, '+tm+' « quelle méthode »');
console.log('Soit '+(tq+tf+tv+tm)+' items jouables.');
