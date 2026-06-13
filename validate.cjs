const fs = require('fs');
const dir = 'chapters';
const files = fs.readdirSync(dir).filter(f=>f.endsWith('.json'));
let problems = 0;
const req = ['id','tag','title','intro','objectifs','cours','formulaire','methodes','annales','piege','qcm','flash','vraifaux','qmethode'];
for (const f of files.sort()) {
  let d;
  try { d = JSON.parse(fs.readFileSync(dir+'/'+f,'utf8')); }
  catch(e){ console.log('❌ PARSE '+f+' : '+e.message); problems++; continue; }
  const miss = req.filter(k=>!(k in d));
  const issues = [];
  if (miss.length) issues.push('clés manquantes: '+miss.join(','));
  (d.qcm||[]).forEach((q,i)=>{ if(!Array.isArray(q.opts)||q.opts.length!==4) issues.push('qcm['+i+'] opts!=4'); if(typeof q.ok!=='number'||q.ok<0||q.ok>3) issues.push('qcm['+i+'] ok='+q.ok); });
  (d.qmethode||[]).forEach((q,i)=>{ if(!Array.isArray(q.opts)||q.opts.length!==4) issues.push('qmethode['+i+'] opts='+ (q.opts?q.opts.length:'?')); if(typeof q.ok!=='number'||q.ok<0||q.ok>3) issues.push('qmethode['+i+'] ok='+q.ok); });
  (d.vraifaux||[]).forEach((q,i)=>{ if(typeof q.v!=='boolean') issues.push('vf['+i+'] v non-bool'); });
  const counts = `qcm:${(d.qcm||[]).length} flash:${(d.flash||[]).length} vf:${(d.vraifaux||[]).length} qm:${(d.qmethode||[]).length} cours:${(d.cours||[]).length} form:${(d.formulaire||[]).length}`;
  // distribution of ok
  const okDist = {};(d.qcm||[]).forEach(q=>okDist[q.ok]=(okDist[q.ok]||0)+1);
  if(issues.length){ console.log('⚠️  '+f+' ['+d.id+'] '+counts+'  ok:'+JSON.stringify(okDist)); issues.forEach(x=>console.log('     - '+x)); problems++; }
  else console.log('✅ '+f.padEnd(28)+counts+'  ok:'+JSON.stringify(okDist));
}
console.log('\n'+files.length+' fichiers, '+problems+' avec problème(s)');
