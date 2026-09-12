(() => {
  const banks = {
    'prakticke-pocitani.html': [
      ['easy','Kolik je 30 % z 250?',['65','75','85'],1,'250 · 0,30 = 75.'],
      ['cermat','Cena po slevě 15 % je 1 700 Kč. Původní cena byla:',['1 955 Kč','2 000 Kč','2 550 Kč'],1,'Po slevě zůstalo 85 %, tedy 1 700 : 0,85 = 2 000.'],
      ['cermat','Šest lidí udělá práci za 10 hodin. Za kolik hodin ji udělá 12 stejně výkonných lidí?',['5','12','20'],0,'Jde o nepřímou úměrnost: 6 · 10 : 12 = 5.']],
    'logika-mnoziny.html': [
      ['easy','Negace výroku „Všichni studenti uspěli“ je:',['Nikdo neuspěl','Alespoň jeden student neuspěl','Všichni neuspěli'],1,'Negace obecného tvrzení říká, že existuje alespoň jedna výjimka.'],
      ['cermat','Pro A={1,2,3,4} a B={3,4,5} je A ∩ B:',['{1,2,5}','{3,4}','{1,2,3,4,5}'],1,'Průnik obsahuje prvky, které jsou současně v obou množinách.']],
    'mocniny.html': [
      ['easy','Hodnota 2⁻³ je:',['−8','1/8','8'],1,'Záporný exponent převrátí zlomek: 2⁻³ = 1/2³.'],
      ['cermat','Výraz 3⁵ · 3⁻² se rovná:',['3³','3⁷','9³'],0,'Při násobení stejného základu exponenty sečteme: 5 + (−2) = 3.'],
      ['cermat','Pro a>0 je √(a⁶):',['a³','a⁴','a¹²'],0,'√(a⁶)=a³ pro kladné a.']],
    'algebraicke-vyrazy.html': [
      ['easy','Roznásobení (x−3)² je:',['x²−9','x²−6x+9','x²+6x+9'],1,'Použij (a−b)²=a²−2ab+b².'],
      ['cermat','Rozklad x²−16 je:',['(x−4)(x+4)','(x−8)(x+2)','(x−4)²'],0,'Jde o rozdíl čtverců.'],
      ['cermat','Pro x≠0,2 je (x²−2x)/(x²−4x+4):',['x/(x−2)','x/(x+2)','(x−2)/x'],0,'Čitatel x(x−2), jmenovatel (x−2)²; po krácení x/(x−2).']],
    'funkce.html': [
      ['easy','Pro f(x)=2x−5 je f(4):',['3','8','13'],0,'f(4)=8−5=3.'],
      ['cermat','Lineární funkce prochází body [0;3] a [2;7]. Její směrnice je:',['2','3','5'],0,'Směrnice je (7−3)/(2−0)=2.'],
      ['cermat','Definiční obor y=1/(x+4) je:',['R','R bez −4','R bez 4'],1,'Jmenovatel nesmí být nula, proto x≠−4.']],
    'kvadraticke.html': [
      ['easy','Kořeny x²−9=0 jsou:',['−9 a 9','−3 a 3','0 a 9'],1,'x²=9, tedy x=±3.'],
      ['cermat','Vrchol y=x²−4x+1 má x-ovou souřadnici:',['−2','2','4'],1,'xᵥ=−b/(2a)=4/2=2.'],
      ['cermat','Rovnice x²+2x+5=0 má v R:',['dva kořeny','jeden kořen','žádný kořen'],2,'Diskriminant 4−20 je záporný.']],
    'soustavy.html': [
      ['easy','Řešení x+y=5, x−y=1 je:',['[2;3]','[3;2]','[4;1]'],1,'Sečtením rovnic: 2x=6, x=3 a y=2.'],
      ['cermat','Dvě vstupenky stojí 340 Kč. Dospělá je o 80 Kč dražší než dětská. Dětská stojí:',['90 Kč','130 Kč','210 Kč'],1,'d+(d+80)=340, tedy d=130.']],
    'exp-log-funkce.html': [
      ['easy','Funkce y=2ˣ je na R:',['rostoucí','klesající','konstantní'],0,'Exponenciální funkce se základem větším než 1 roste.'],
      ['cermat','Definiční obor y=log(x−3) je:',['x≥3','x>3','x≠3'],1,'Argument logaritmu musí být kladný: x−3>0.']],
    'exp-log-rovnice.html': [
      ['easy','Řešení 2ˣ=16 je:',['2','4','8'],1,'16=2⁴.'],
      ['cermat','Řešení log₃x=2 je:',['x=6','x=8','x=9'],2,'Z definice logaritmu x=3²=9.']],
    'goniometrie.html': [
      ['easy','sin 30° je:',['0','1/2','√3/2'],1,'Základní hodnota sin 30°=1/2.'],
      ['cermat','V pravoúhlém trojúhelníku je sin α roven:',['přilehlá/přepona','protilehlá/přepona','protilehlá/přilehlá'],1,'Sinus je poměr protilehlé odvěsny k přeponě.']],
    'gon-vzorce.html': [
      ['easy','Identita sin²x+cos²x se rovná:',['0','1','2'],1,'Jde o základní goniometrickou identitu.'],
      ['cermat','V intervalu ⟨0°;360°) má rovnice sin x=0 řešení:',['0° a 180°','90° a 270°','jen 0°'],0,'Sinus je nulový pro 0° a 180°; 360° už do intervalu nepatří.']],
    'posloupnosti.html': [
      ['easy','Aritmetická posloupnost 4,7,10,… má diferenci:',['2','3','4'],1,'Rozdíl sousedních členů je 3.'],
      ['cermat','Pro a₁=5, d=4 je a₈:',['28','33','37'],1,'a₈=5+7·4=33.'],
      ['cermat','Vklad 20 000 Kč po roce při úroku 5 % vzroste na:',['20 500 Kč','21 000 Kč','25 000 Kč'],1,'20 000·1,05=21 000.']],
    'planimetrie.html': [
      ['easy','Obsah trojúhelníku s a=10 cm a vₐ=6 cm je:',['30 cm²','60 cm²','16 cm²'],0,'S=a·vₐ/2=30 cm².'],
      ['cermat','Pravoúhlý trojúhelník má odvěsny 5 a 12. Přepona je:',['13','15','17'],0,'√(25+144)=13.'],
      ['cermat','Obsahy podobných obrazců při měřítku k=3 jsou v poměru:',['1:3','1:6','1:9'],2,'Obsah se mění s druhou mocninou měřítka.']],
    'stereometrie.html': [
      ['easy','Objem kvádru 2×3×5 je:',['10','30','60'],1,'V=abc=30.'],
      ['cermat','Objem válce s r=2 a v=5 je:',['10π','20π','40π'],1,'V=πr²v=π·4·5=20π.'],
      ['cermat','Zdvojnásobíme všechny hrany krychle. Objem bude:',['2× větší','4× větší','8× větší'],2,'Objem se mění s třetí mocninou měřítka.']],
    'analyticka-geometrie-rovina.html': [
      ['easy','Vektor AB pro A[1;2], B[4;6] je:',['(3;4)','(5;8)','(−3;−4)'],0,'Odečteme souřadnice B−A.'],
      ['cermat','Délka vektoru (6;8) je:',['10','12','14'],0,'√(6²+8²)=10.'],
      ['cermat','Přímka y=−3x+2 má směrnici:',['−3','2','3'],0,'Ve tvaru y=kx+q je směrnice koeficient k.']],
    'kombinatorika-pravdepodobnost.html': [
      ['easy','Kolik je 5!?',['25','60','120'],2,'5!=5·4·3·2·1=120.'],
      ['cermat','Pravděpodobnost hodit na kostce číslo větší než 4 je:',['1/6','1/3','1/2'],1,'Vyhovují 5 a 6: dva výsledky ze šesti.'],
      ['cermat','Medián dat 1,3,3,8,10 je:',['3','5','8'],0,'Po seřazení je prostřední hodnota 3.']],
    'absolutni-hodnoty.html': [
      ['easy','Hodnota |−7| je:',['−7','0','7'],2,'Absolutní hodnota je vzdálenost od nuly.'],
      ['cermat','Rovnice |x−2|=3 má řešení:',['−1 a 5','1 a 5','−1 a 3'],0,'x−2=3 nebo x−2=−3.']]
  };
  const file = location.pathname.split('/').pop().toLowerCase();
  const bank = banks[file];
  if (!bank || document.querySelector('.cermat-practice-section')) return;
  const section = document.createElement('section');
  section.className = 'cermat-practice-section';
  const awardedKey = `maturita-cermat-xp:${file}`;
  let awarded = {};
  try { awarded = JSON.parse(localStorage.getItem(awardedKey) || '{}'); } catch (_) {}
  section.innerHTML = `<div class="cermat-practice-head"><div><h2>Procvičování CERMAT</h2><p>Nejdřív lehčí rozjezd, potom úlohy blízké testu. XP dostaneš jen za správnou odpověď bez otevřeného řešení.</p></div><span class="cermat-xp">${Object.keys(awarded).length * 10} XP</span></div>` + bank.map((q,i)=>`<article class="cermat-task ${awarded[i]?'is-correct':''}" data-index="${i}"><div class="cermat-task-top"><span>Úloha ${i+1}</span><span class="cermat-difficulty">${q[0]==='easy'?'lehčí rozjezd':'úroveň CERMAT'}</span></div><div class="cermat-question">${q[1]}</div><div class="cermat-options">${q[2].map((o,j)=>`<label class="cermat-option"><input type="radio" name="cp-${file}-${i}" value="${j}"> ${o}</label>`).join('')}</div><button class="cermat-check" type="button">Zkontrolovat</button><span class="cermat-feedback">${awarded[i]?'splněno':''}</span><details class="cermat-solution"><summary>Zobrazit řešení</summary>${q[4]}</details></article>`).join('');
  const main = document.querySelector('main');
  const footer = main?.querySelector('footer');
  if (!main) return;
  main.insertBefore(section, footer || null);
  section.querySelectorAll('.cermat-task').forEach(task => {
    const i = Number(task.dataset.index), feedback = task.querySelector('.cermat-feedback'), details = task.querySelector('details');
    let usedHelp = false;
    details.addEventListener('toggle', () => { if (details.open) usedHelp = true; });
    task.querySelector('.cermat-check').addEventListener('click', () => {
      const selected = task.querySelector('input:checked');
      if (!selected) { feedback.textContent = 'vyber odpověď'; return; }
      if (Number(selected.value) !== bank[i][3]) { feedback.textContent = 'zatím ne — zkus znovu'; return; }
      task.classList.add('is-correct');
      if (!awarded[i] && !usedHelp) {
        awarded[i] = true;
        let total = 0;
        try { total = Number(localStorage.getItem('maturita-xp') || 0) + 10; localStorage.setItem('maturita-xp', String(total)); localStorage.setItem(awardedKey, JSON.stringify(awarded)); } catch (_) {}
        feedback.textContent = 'správně · +10 XP';
        section.querySelector('.cermat-xp').textContent = `${Object.keys(awarded).length * 10} XP`;
      } else feedback.textContent = usedHelp && !awarded[i] ? 'správně · po řešení bez XP' : 'správně · už započítáno';
    });
  });
})();
