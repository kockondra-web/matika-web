(()=>{
  const $=selector=>document.querySelector(selector), $$=selector=>[...document.querySelectorAll(selector)];
  const storage={get(key,fallback=''){try{return localStorage.getItem(key)??fallback}catch(_){return fallback}},set(key,value){try{localStorage.setItem(key,value)}catch(_){}},remove(key){try{localStorage.removeItem(key)}catch(_){}}};
  const diagnosticScore=()=>Number(storage.get('mj_prijimacky_diagnostika_score_v2','0'));
  const topicCount=()=>{try{return Object.values(JSON.parse(storage.get('mj_progress_v1','{}')).topicDone||{}).filter(Boolean).length}catch(_){return 0}};
  const attempts=()=>{try{const data=JSON.parse(storage.get('mj_exam_history_v1','{}'));return Array.isArray(data.attempts)?data.attempts:[]}catch(_){return []}};
  const states=()=>[storage.get('mj_prijimacky_diagnostika_score_v2')!=='',storage.get('mj_prijimacky_plan_hotov')==='1',topicCount()>0,attempts().length>0];
  function renderSteps(){const values=states(),doneCount=values.filter(Boolean).length;$$('.flow-step').forEach((step,index)=>{step.classList.toggle('done',values[index]);const state=step.querySelector('.state');if(state)state.textContent=values[index]?'✓':''});const done=$('#flow-done');if(done)done.textContent=`Zahájené kroky: ${doneCount} ze 4`;const bar=$('.practice-bar i');if(bar)bar.style.width=`${doneCount*25}%`}
  renderSteps();

  if(document.body.dataset.page==='hub'){
    const oldHashes=['slovni-ulohy','prevody','zlomky','mocniny','rovnice','slovni-ulohy-rovnice','slovni-ulohy-pomer-umernost','procenta-uloha-8','konstrukcni-ulohy','geometrie','objemy','ano-ne','vyber-a-e','procenta','logicka-uloha'];
    const hash=location.hash.slice(1);
    if(hash==='cele-testy'){location.replace('prijimacky-testy.html');return}
    if(hash==='rychly-start'||hash==='diagnostic'){location.replace('prijimacky-diagnostika.html');return}
    if(oldHashes.includes(hash)){location.replace(`prijimacky-temata.html#${hash}`);return}
    const diag=$('#hub-diag');if(diag)diag.textContent=storage.get('mj_prijimacky_diagnostika_score_v2')!==''?`${diagnosticScore()} z 12 správně`:'zatím nevyplněná';
    const topics=$('#hub-topics');if(topics)topics.textContent=`${topicCount()} z 15 témat`;
    const tests=$('#hub-tests');if(tests)tests.textContent=attempts().length?`${attempts().length} dokončených pokusů`:'zatím bez výsledku';
  }

  if(document.body.dataset.page==='diagnostika'){
    const inputs=$$('.diagnostic-question input'), result=$('#diag-result'), count=$('#diag-count'), bar=$('#diag-progress');
    const normalize=value=>String(value||'').trim().toLocaleLowerCase('cs').replace(/\s+/g,'').replace(',','.');
    try{const saved=JSON.parse(storage.get('mj_prijimacky_diagnostika_v2',storage.get('mj_prijimacky_diagnostika_v1','[]')));inputs.forEach((input,index)=>input.value=saved[index]||'')}catch(_){}
    function update(){const answered=inputs.filter(input=>input.value.trim()).length;if(count)count.textContent=`${answered} z ${inputs.length} zodpovězeno`;if(bar)bar.style.width=`${answered/inputs.length*100}%`;storage.set('mj_prijimacky_diagnostika_v2',JSON.stringify(inputs.map(input=>input.value)))}
    inputs.forEach(input=>input.addEventListener('input',update));
    $('#diag-submit')?.addEventListener('click',()=>{const missing=inputs.filter(input=>!input.value.trim()).length;if(missing){result.innerHTML=`<strong>Ještě chybí ${missing} ${missing===1?'odpověď':missing<5?'odpovědi':'odpovědí'}.</strong> Pro přesné doporučení dokonči všech 12 úloh.`;return}const wrong=[];inputs.forEach(input=>{const accepted=input.dataset.answer.split('|').map(normalize),correct=accepted.includes(normalize(input.value));input.closest('.diagnostic-question').classList.toggle('is-correct',correct);input.closest('.diagnostic-question').classList.toggle('is-wrong',!correct);if(!correct)wrong.push(input.dataset.topic)});const score=inputs.length-wrong.length;storage.set('mj_prijimacky_diagnostika_score_v2',String(score));const labels={zlomky:'Zlomky',rovnice:'Rovnice',procenta:'Procenta',pomer:'Poměr a úměrnost',prevody:'Převody jednotek',geometrie:'Planimetrie',mocniny:'Mocniny a odmocniny',objemy:'Objemy těles'};const counts=wrong.reduce((all,topic)=>(all[topic]=(all[topic]||0)+1,all),{});const order=Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([topic])=>topic);const anchors={zlomky:'zlomky',rovnice:'rovnice',procenta:'procenta-uloha-8',pomer:'slovni-ulohy-pomer-umernost',prevody:'prevody',geometrie:'geometrie',mocniny:'mocniny',objemy:'objemy'};const links=order.slice(0,4).map((topic,index)=>`<a href="prijimacky-temata.html#${anchors[topic]}">${index+1}. ${labels[topic]}</a>`).join(' · ');result.innerHTML=wrong.length?`<strong>${score} z 12 správně.</strong> Začni v tomto pořadí: ${links}. Potom pokračuj studijním plánem.`:`<strong>12 z 12 správně.</strong> Základy máš jisté. Pokračuj plánem a co nejdřív si napiš celý test.`;result.insertAdjacentHTML('beforeend','<br><br><a href="prijimacky-plan.html">Pokračovat na studijní plán →</a>');renderSteps();result.scrollIntoView({behavior:'smooth',block:'center'})});
    $('#diag-reset')?.addEventListener('click',()=>{inputs.forEach(input=>{input.value='';input.closest('.diagnostic-question').classList.remove('is-correct','is-wrong')});storage.remove('mj_prijimacky_diagnostika_v2');storage.remove('mj_prijimacky_diagnostika_score_v2');result.textContent='Odpověz na všechny úlohy a potom diagnostiku vyhodnoť.';update();renderSteps()});
    update();
  }

  if(document.body.dataset.page==='plan'){
    const input=$('#exam-date'), output=$('#date-plan-result'), cards=$$('.plan-card');
    const today=new Date(), local=date=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
    input.min=local(today);input.value=storage.get('mj_prijimacky_datum_zkousky');
    function render(){if(!input.value)return;const start=new Date();start.setHours(0,0,0,0);const target=new Date(`${input.value}T12:00:00`),days=Math.ceil((target-start)/86400000);cards.forEach(card=>card.classList.remove('recommended'));if(!Number.isFinite(days)||days<1){output.innerHTML='<strong>Vyber budoucí datum.</strong>';return}let index=2,text='tři až čtyři kratší bloky týdně a jeden test každé dva týdny';if(days<=14){index=0;text='každý den 45–60 minut a alespoň tři celé testy'}else if(days<=45){index=1;text='čtyři studijní bloky týdně a jeden celý test týdně'}cards[index].classList.add('recommended');output.innerHTML=`<strong>Zbývá ${days} ${days===1?'den':days<5?'dny':'dní'}.</strong> Doporučení: ${text}.`;storage.set('mj_prijimacky_datum_zkousky',input.value);storage.set('mj_prijimacky_plan_hotov','1');renderSteps()}
    input.addEventListener('change',render);$('#plan-done')?.addEventListener('click',()=>storage.set('mj_prijimacky_plan_hotov','1'));render();
  }

  if(document.body.dataset.page==='testy'){
    const history=attempts(), latest=history.slice().sort((a,b)=>(b.submittedAt||0)-(a.submittedAt||0))[0];
    const summary=$('#test-history-summary');if(summary)summary.innerHTML=latest?`<strong>Poslední výsledek:</strong> ${latest.title||'Cvičný test'} · ${latest.score}/${latest.max} bodů. Celkem máš ${history.length} dokončených pokusů.`:'<strong>Zatím bez výsledku.</strong> Vyber si test A a začni bez nápovědy.';
    $$('.test-card[data-exam-id]').forEach(card=>{const own=history.filter(item=>item.testId===card.dataset.examId),status=card.querySelector('.test-status');if(own.length&&status){const best=Math.max(...own.map(item=>Number(item.score)||0));status.textContent=`Nejlepší výsledek: ${best}/${own[0].max} bodů`}});
  }
})();
