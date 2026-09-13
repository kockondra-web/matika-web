(() => {
  const banks = {
    'prakticke-pocitani.html': [
      ['easy','Kolik je 30 % z 250?',['65','75','85'],1,'250 · 0,30 = 75.'],
      ['cermat','Cena po slevě 15 % je 1 700 Kč. Původní cena byla:',['1 955 Kč','2 000 Kč','2 550 Kč'],1,'Po slevě zůstalo 85 %, tedy 1 700 : 0,85 = 2 000.'],
      ['cermat','Šest lidí udělá práci za 10 hodin. Za kolik hodin ji udělá 12 stejně výkonných lidí?',['5','12','20'],0,'Jde o nepřímou úměrnost: 6 · 10 : 12 = 5.'],
      ['cermat','Směs o hmotnosti 800 g obsahuje 12 % soli. Kolik gramů vody musíme přidat, aby směs obsahovala 8 % soli?',['200 g','300 g','400 g'],2,'Soli je 96 g. Ta má tvořit 8 % nové hmotnosti, tedy nová hmotnost je 96 : 0,08 = 1 200 g. Přidáme 400 g vody.'],
      ['cermat','Automobil spotřebuje 6,4 l na 100 km. Kolik zaplatíme za palivo na 375 km při ceně 38,50 Kč/l?',['886 Kč','924 Kč','1 016 Kč'],1,'Spotřeba je 6,4 · 3,75 = 24 l a cena 24 · 38,50 = 924 Kč.'],
      ['cermat','Nádrž byla naplněna ze 3/5. Po odebrání 120 litrů zůstala naplněna ze 3/10. Objem nádrže je:',['300 l','400 l','600 l'],1,'Odebraná část je 3/5−3/10=3/10 objemu. Jestliže 3/10 odpovídají 120 l, celý objem je 400 l.']],
    'logika-mnoziny.html': [
      ['easy','Negace výroku „Všichni studenti uspěli“ je:',['Nikdo neuspěl','Alespoň jeden student neuspěl','Všichni neuspěli'],1,'Negace obecného tvrzení říká, že existuje alespoň jedna výjimka.'],
      ['cermat','Pro A={1,2,3,4} a B={3,4,5} je A ∩ B:',['{1,2,5}','{3,4}','{1,2,3,4,5}'],1,'Průnik obsahuje prvky, které jsou současně v obou množinách.'],
      ['cermat','Množina řešení nerovnice −2 < x ≤ 4 se zapíše:',['⟨−2;4⟩','(−2;4⟩','(−∞;−2) ∪ ⟨4;∞)'],1,'Číslo −2 do intervalu nepatří, ale číslo 4 ano.'],
      ['cermat','Ve třídě je 30 žáků. Angličtinu se učí 24, němčinu 11 a oba jazyky 8. Kolik žáků se neučí ani jeden z nich?',['3','5','11'],0,'Alespoň jeden jazyk se učí 24 + 11 − 8 = 27 žáků. Ani jeden tedy 3.'],
      ['cermat','Který výrok je ekvivalentní výroku „Jestliže prší, vezmu si deštník“?',['Jestliže neprší, nevezmu si deštník','Jestliže si nevezmu deštník, neprší','Jestliže mám deštník, prší'],1,'Obměněný výrok „nemám-li deštník, neprší“ je s původní implikací ekvivalentní.'],
      ['cermat','Množina A má 18 prvků, B má 15 prvků a jejich sjednocení 25 prvků. Kolik prvků má průnik A∩B?',['8','10','12'],0,'Použijeme |A∪B|=|A|+|B|−|A∩B|. Průnik má 18+15−25=8 prvků.']],
    'mocniny.html': [
      ['easy','Hodnota 2⁻³ je:',['−8','1/8','8'],1,'Záporný exponent převrátí zlomek: 2⁻³ = 1/2³.'],
      ['cermat','Výraz 3⁵ · 3⁻² se rovná:',['3³','3⁷','9³'],0,'Při násobení stejného základu exponenty sečteme: 5 + (−2) = 3.'],
      ['cermat','Pro a>0 je √(a⁶):',['a³','a⁴','a¹²'],0,'√(a⁶)=a³ pro kladné a.'],
      ['cermat','Číslo 0,000072 zapsané v normovaném tvaru je:',['7,2 · 10⁻⁵','72 · 10⁻⁶','0,72 · 10⁻⁴'],0,'V normovaném tvaru je před desetinnou čárkou právě jedna nenulová číslice.'],
      ['cermat','Hodnota výrazu (√12 − √3)² je:',['3','9','15'],0,'√12 = 2√3, takže rozdíl je √3 a jeho druhá mocnina je 3.'],
      ['cermat','Pro kladné a je výraz a³ · √a / a^(1/2) roven:',['a²','a³','a⁴'],1,'Odmocnina i a^(1/2) se vykrátí, zůstane a³.']],
    'algebraicke-vyrazy.html': [
      ['easy','Roznásobení (x−3)² je:',['x²−9','x²−6x+9','x²+6x+9'],1,'Použij (a−b)²=a²−2ab+b².'],
      ['cermat','Rozklad x²−16 je:',['(x−4)(x+4)','(x−8)(x+2)','(x−4)²'],0,'Jde o rozdíl čtverců.'],
      ['cermat','Pro x≠0,2 je (x²−2x)/(x²−4x+4):',['x/(x−2)','x/(x+2)','(x−2)/x'],0,'Čitatel x(x−2), jmenovatel (x−2)²; po krácení x/(x−2).'],
      ['cermat','Pro x = −2 má výraz 2x² − 3x − 1 hodnotu:',['1','9','13'],2,'Dosadíme: 2 · 4 − 3 · (−2) − 1 = 13.'],
      ['cermat','Výraz (a/b − b/a) : (a²−b²)/(ab) pro nenulová a, b a a²≠b² je:',['−1','1','a−b'],1,'První závorka je (a²−b²)/(ab), takže dělíme výraz sebou samým.'],
      ['cermat','Je-li x+1/x=5, potom x²+1/x² se rovná:',['21','23','25'],1,'Umocníme vztah: (x+1/x)²=x²+2+1/x²=25, tedy hledaný výraz je 23.'],
      ['cermat','Pro x≠−3,3 uprav výraz (x²−9)/(x²+6x+9) · (x+3)/(x−3).',['1','(x−3)/(x+3)','x²−9'],0,'Rozložíme x²−9=(x−3)(x+3) a x²+6x+9=(x+3)². Všechny povolené společné činitele se vykrátí a zůstane 1.','Nejdřív rozlož oba kvadratické výrazy na součin.'],
      ['cermat','Platí a+b=7 a ab=10. Hodnota a²+b² je:',['19','29','39'],1,'Ze vztahu (a+b)²=a²+2ab+b² dostaneme a²+b²=7²−2·10=29.','Použij druhou mocninu součtu a dosaď známý součet i součin.']],
    'funkce.html': [
      ['easy','Pro f(x)=2x−5 je f(4):',['3','8','13'],0,'f(4)=8−5=3.'],
      ['cermat','Lineární funkce prochází body [0;3] a [2;7]. Její směrnice je:',['2','3','5'],0,'Směrnice je (7−3)/(2−0)=2.'],
      ['cermat','Definiční obor y=1/(x+4) je:',['R','R bez −4','R bez 4'],1,'Jmenovatel nesmí být nula, proto x≠−4.'],
      ['cermat','Lineární funkce f má f(−1)=5 a f(3)=−3. Předpis funkce je:',['f(x)=−2x+3','f(x)=2x+3','f(x)=−x+4'],0,'Směrnice je (−3−5)/(3−(−1)) = −2 a po dosazení vyjde absolutní člen 3.'],
      ['cermat','Pro funkci f(x)=|x−2|+1 je nejmenší funkční hodnota:',['0','1','2'],1,'Absolutní hodnota je nejméně 0, a to pro x=2. Minimum funkce je tedy 1.'],
      ['cermat','Funkce f(x)=(2x−1)/3. Hodnota f⁻¹(5) je:',['7','8','9'],1,'Hledáme x, pro které f(x)=5: (2x−1)/3=5, tedy 2x=16 a x=8.']],
    'kvadraticke.html': [
      ['easy','Kořeny x²−9=0 jsou:',['−9 a 9','−3 a 3','0 a 9'],1,'x²=9, tedy x=±3.'],
      ['cermat','Vrchol y=x²−4x+1 má x-ovou souřadnici:',['−2','2','4'],1,'xᵥ=−b/(2a)=4/2=2.'],
      ['cermat','Rovnice x²+2x+5=0 má v R:',['dva kořeny','jeden kořen','žádný kořen'],2,'Diskriminant 4−20 je záporný.'],
      ['cermat','Kvadratická rovnice s kořeny −2 a 5 je:',['x²−3x−10=0','x²+3x−10=0','x²−7x+10=0'],0,'Rovnice je (x+2)(x−5)=0, po roznásobení x²−3x−10=0.'],
      ['cermat','Graf funkce y=−2(x−3)²+8 protíná osu x v bodech se souřadnicemi x:',['−1 a 7','1 a 5','2 a 4'],1,'Položíme y=0: (x−3)²=4, tedy x=1 nebo x=5.'],
      ['cermat','Rovnice x²−kx+12=0 má jeden kořen 3. Druhý kořen a hodnota k jsou:',['4 a 7','4 a 1','9 a 12'],0,'Součin kořenů je 12, proto druhý kořen je 4. Součet kořenů je k, tedy k=7.']],
    'soustavy.html': [
      ['easy','Řešení x+y=5, x−y=1 je:',['[2;3]','[3;2]','[4;1]'],1,'Sečtením rovnic: 2x=6, x=3 a y=2.'],
      ['cermat','Dvě vstupenky stojí 340 Kč. Dospělá je o 80 Kč dražší než dětská. Dětská stojí:',['90 Kč','130 Kč','210 Kč'],1,'d+(d+80)=340, tedy d=130.'],
      ['cermat','Soustava 2x−y=7 a 3x+2y=7 má řešení:',['[1;−5]','[3;−1]','[2;−3]'],1,'Z první rovnice y=2x−7. Dosazením do druhé dostaneme 7x=21, tedy x=3 a y=−1.'],
      ['cermat','V pokladně je 18 mincí po 10 Kč a 20 Kč v celkové hodnotě 250 Kč. Kolik je dvacetikorun?',['7','9','11'],0,'Pro počet dvacetikorun x platí 20x+10(18−x)=250, takže x=7.'],
      ['cermat','Soustava x+2y=4 a 2x+4y=9 má:',['právě jedno řešení','nekonečně mnoho řešení','žádné řešení'],2,'Levá strana druhé rovnice je dvojnásobkem první, pravá by ale musela být 8, nikoli 9.'],
      ['cermat','Součet číslice desítek a jednotek dvojciferného čísla je 11. Po záměně číslic vznikne číslo o 27 menší. Původní číslo je:',['47','74','83'],1,'Pro desítky d a jednotky j platí d+j=11 a 10j+d=10d+j−27. Vyjde d=7, j=4.']],
    'exp-log-funkce.html': [
      ['easy','Funkce y=2ˣ je na R:',['rostoucí','klesající','konstantní'],0,'Exponenciální funkce se základem větším než 1 roste.'],
      ['cermat','Definiční obor y=log(x−3) je:',['x≥3','x>3','x≠3'],1,'Argument logaritmu musí být kladný: x−3>0.'],
      ['cermat','Který bod leží na grafu funkce y=log₂x?',['[2;1]','[1;2]','[−2;1]'],0,'Platí log₂2=1.'],
      ['cermat','Funkce y=(1/3)ˣ je:',['rostoucí a kladná','klesající a kladná','klesající a záporná'],1,'Exponenciální funkce se základem mezi 0 a 1 je klesající, její hodnoty jsou kladné.'],
      ['cermat','Graf y=2ˣ⁻¹+3 vznikne z grafu y=2ˣ posunutím:',['o 1 doleva a 3 dolů','o 1 doprava a 3 nahoru','o 3 doprava a 1 nahoru'],1,'Nahrazení x výrazem x−1 posouvá graf doprava o 1, přičtení 3 nahoru o 3.'],
      ['cermat','Funkce y=log₂(x+1) má s osou x společný bod:',['[−1;0]','[0;0]','[1;0]'],1,'Na ose x je y=0. Z log₂(x+1)=0 plyne x+1=1, tedy x=0.']],
    'exp-log-rovnice.html': [
      ['easy','Řešení 2ˣ=16 je:',['2','4','8'],1,'16=2⁴.'],
      ['cermat','Řešení log₃x=2 je:',['x=6','x=8','x=9'],2,'Z definice logaritmu x=3²=9.'],
      ['cermat','Řešení 3²ˣ⁻¹=27 je:',['x=1','x=2','x=3'],1,'27=3³, takže 2x−1=3 a x=2.'],
      ['cermat','Rovnice log₂(x−1)+log₂(x+1)=3 má řešení:',['x=3','x=−3','x=√7'],0,'Podmínka je x>1. Platí log₂(x²−1)=3, tedy x²−1=8 a z podmínky x=3.'],
      ['cermat','Řešení rovnice 5ˣ=2 lze zapsat jako:',['x=log₂5','x=log₅2','x=5/2'],1,'Podle definice logaritmu z 5ˣ=2 plyne x=log₅2.'],
      ['cermat','Rovnice 2ˣ+2ˣ⁺¹=24 má řešení:',['x=2','x=3','x=4'],1,'Vytkneme 2ˣ: 2ˣ(1+2)=24, tedy 2ˣ=8 a x=3.']],
    'goniometrie.html': [
      ['easy','sin 30° je:',['0','1/2','√3/2'],1,'Základní hodnota sin 30°=1/2.'],
      ['cermat','V pravoúhlém trojúhelníku je sin α roven:',['přilehlá/přepona','protilehlá/přepona','protilehlá/přilehlá'],1,'Sinus je poměr protilehlé odvěsny k přeponě.'],
      ['cermat','Žebřík dlouhý 5 m svírá se zemí úhel 68°. Do jaké výšky přibližně dosáhne?',['1,87 m','4,64 m','5,39 m'],1,'Výška je protilehlá odvěsna: 5 · sin 68° ≈ 4,64 m.'],
      ['cermat','V trojúhelníku jsou a=7 cm, b=9 cm a úhel mezi nimi 60°. Délka třetí strany je:',['√67 cm','8 cm','√193 cm'],0,'Kosinová věta: c²=7²+9²−2·7·9·cos60°=67.'],
      ['cermat','Z bodu vzdáleného 20 m od paty věže je vrchol vidět pod úhlem 41°. Výška věže je přibližně:',['13,1 m','17,4 m','26,5 m'],1,'Výška je 20 · tan41° ≈ 17,4 m.'],
      ['cermat','V trojúhelníku ABC je a=8 cm, α=30° a β=45°. Podle sinové věty je délka b:',['4√2 cm','8√2 cm','16 cm'],1,'Platí b/sin45°=8/sin30°, proto b=8·(√2/2)/(1/2)=8√2 cm.']],
    'gon-vzorce.html': [
      ['easy','Identita sin²x+cos²x se rovná:',['0','1','2'],1,'Jde o základní goniometrickou identitu.'],
      ['cermat','V intervalu ⟨0°;360°) má rovnice sin x=0 řešení:',['0° a 180°','90° a 270°','jen 0°'],0,'Sinus je nulový pro 0° a 180°; 360° už do intervalu nepatří.'],
      ['cermat','Výraz 1−cos²x lze upravit na:',['sin²x','−sin²x','2sin x'],0,'Ze vztahu sin²x+cos²x=1 plyne 1−cos²x=sin²x.'],
      ['cermat','V intervalu ⟨0°;360°) jsou řešení rovnice cos x=−1/2:',['60° a 300°','120° a 240°','150° a 210°'],1,'Kosinus je záporný ve druhém a třetím kvadrantu; referenční úhel je 60°.'],
      ['cermat','Je-li tan α=3/4 a α je ostrý, potom sin α je:',['3/5','4/5','3/4'],0,'Odvěsny mohou mít délky 3 a 4, přepona pak podle Pythagorovy věty 5.'],
      ['cermat','V intervalu ⟨0°;360°) má rovnice 2sin²x−1=0 řešení:',['45°, 135°, 225°, 315°','45° a 225°','90° a 270°'],0,'sin²x=1/2, takže sin x=±√2/2. V daném intervalu dostaneme čtyři řešení.']],
    'posloupnosti.html': [
      ['easy','Aritmetická posloupnost 4,7,10,… má diferenci:',['2','3','4'],1,'Rozdíl sousedních členů je 3.'],
      ['cermat','Pro a₁=5, d=4 je a₈:',['28','33','37'],1,'a₈=5+7·4=33.'],
      ['cermat','Vklad 20 000 Kč po roce při úroku 5 % vzroste na:',['20 500 Kč','21 000 Kč','25 000 Kč'],1,'20 000·1,05=21 000.'],
      ['cermat','Aritmetická posloupnost má a₄=11 a a₉=26. Její diference je:',['2','3','5'],1,'Mezi členy je pět kroků, proto d=(26−11)/5=3.'],
      ['cermat','Geometrická posloupnost má a₁=2 a kvocient 3. Součet prvních pěti členů je:',['162','242','486'],1,'S₅=2·(3⁵−1)/(3−1)=242.'],
      ['cermat','V aritmetické posloupnosti platí a₃=8 a a₇=20. Součet prvních deseti členů je:',['145','155','165'],1,'Diference je 3 a a₁=2. Potom a₁₀=29 a S₁₀=10·(2+29)/2=155.'],
      ['cermat','V geometrické posloupnosti s kladným kvocientem platí a₃=12 a a₅=48. Součet prvních šesti členů je:',['93','189','192'],1,'Z a₅/a₃=q²=4 a q>0 plyne q=2. Potom a₁=3 a S₆=3·(2⁶−1)/(2−1)=189.','Nejprve vyděl a₅ členem a₃. Získáš q².'],
      ['cermat','Vklad 50 000 Kč se dva roky úročí sazbou 4 % ročně. Úroky se připisují vždy na konci roku. Konečná částka je:',['54 000 Kč','54 080 Kč','58 000 Kč'],1,'Každý rok násobíme 1,04: 50 000·1,04²=54 080 Kč.','Jde o dvě po sobě jdoucí procentní změny, ne o jednorázových 8 % z původní částky.']],
    'planimetrie.html': [
      ['easy','Obsah trojúhelníku s a=10 cm a vₐ=6 cm je:',['30 cm²','60 cm²','16 cm²'],0,'S=a·vₐ/2=30 cm².'],
      ['cermat','Pravoúhlý trojúhelník má odvěsny 5 a 12. Přepona je:',['13','15','17'],0,'√(25+144)=13.'],
      ['cermat','Obsahy podobných obrazců při měřítku k=3 jsou v poměru:',['1:3','1:6','1:9'],2,'Obsah se mění s druhou mocninou měřítka.'],
      ['cermat','Lichoběžník má základny 8 cm a 14 cm a obsah 66 cm². Jeho výška je:',['3 cm','6 cm','11 cm'],1,'Z rovnice 66=(8+14)·v/2 vyjde v=6 cm.'],
      ['cermat','Kruh má stejný obvod jako čtverec se stranou 6 cm. Poloměr kruhu je:',['6/π cm','12/π cm','24/π cm'],1,'Obvod čtverce je 24 cm. Z 2πr=24 plyne r=12/π cm.'],
      ['cermat','Pravidelný šestiúhelník má stranu 4 cm. Jeho obsah je:',['12√3 cm²','24√3 cm²','48√3 cm²'],1,'Šestiúhelník tvoří šest rovnostranných trojúhelníků. Obsah je 6·(4²√3/4)=24√3 cm².'],
      ['cermat','Výška na přeponu rozdělí přeponu pravoúhlého trojúhelníku na úseky 4 cm a 9 cm. Délka této výšky je:',['6 cm','6,5 cm','13 cm'],0,'Pro výšku na přeponu platí v²=4·9=36, tedy v=6 cm.','Použij Eukleidovu větu o výšce.'],
      ['cermat','Dva podobné trojúhelníky mají obsahy 25 cm² a 64 cm². Strana menšího má 10 cm. Odpovídající strana většího měří:',['12,8 cm','16 cm','25,6 cm'],1,'Poměr obsahů je 64/25, poměr délek je jeho odmocnina 8/5. Hledaná strana je 10·8/5=16 cm.','Poměr obsahů je druhou mocninou poměru odpovídajících délek.']],
    'stereometrie.html': [
      ['easy','Objem kvádru 2×3×5 je:',['10','30','60'],1,'V=abc=30.'],
      ['cermat','Objem válce s r=2 a v=5 je:',['10π','20π','40π'],1,'V=πr²v=π·4·5=20π.'],
      ['cermat','Zdvojnásobíme všechny hrany krychle. Objem bude:',['2× větší','4× větší','8× větší'],2,'Objem se mění s třetí mocninou měřítka.'],
      ['cermat','Kužel má poloměr podstavy 3 cm a výšku 8 cm. Jeho objem je:',['24π cm³','48π cm³','72π cm³'],0,'V=(1/3)πr²v=(1/3)·π·9·8=24π cm³.'],
      ['cermat','Tělesová úhlopříčka krychle má délku 6√3 cm. Povrch krychle je:',['36 cm²','144 cm²','216 cm²'],2,'Pro úhlopříčku platí u=a√3, takže a=6 cm a povrch 6a²=216 cm².'],
      ['cermat','Koule má objem 288π cm³. Její poloměr je:',['4 cm','6 cm','8 cm'],1,'Z 4/3·πr³=288π plyne r³=216, tedy r=6 cm.'],
      ['cermat','Kvádr se stranami 3 cm, 4 cm a x cm má povrch 94 cm². Jeho objem je:',['48 cm³','60 cm³','72 cm³'],1,'Z 2(3·4+3x+4x)=94 dostaneme 24+14x=94, tedy x=5. Objem je 3·4·5=60 cm³.','Nejdřív sestav rovnici pro povrch kvádru a dopočítej třetí hranu.'],
      ['cermat','Válec a kužel mají shodný poloměr podstavy i výšku. Objem válce 150 cm³ odpovídá objemu kužele:',['50 cm³','150 cm³','450 cm³'],0,'Kužel se stejnou podstavou a výškou má třetinový objem válce: 150:3=50 cm³.','Porovnej vzorce πr²v a (1/3)πr²v.']],
    'analyticka-geometrie-rovina.html': [
      ['easy','Vektor AB pro A[1;2], B[4;6] je:',['(3;4)','(5;8)','(−3;−4)'],0,'Odečteme souřadnice B−A.'],
      ['cermat','Délka vektoru (6;8) je:',['10','12','14'],0,'√(6²+8²)=10.'],
      ['cermat','Přímka y=−3x+2 má směrnici:',['−3','2','3'],0,'Ve tvaru y=kx+q je směrnice koeficient k.'],
      ['cermat','Střed úsečky s krajními body A[−3;5] a B[7;−1] je:',['[2;2]','[4;4]','[5;−3]'],0,'Souřadnice středu jsou průměry souřadnic krajních bodů: [2;2].'],
      ['cermat','Přímka procházející bodem [2;−1] a rovnoběžná s přímkou y=3x+4 má rovnici:',['y=3x−7','y=−3x+5','y=3x+5'],0,'Rovnoběžná přímka má směrnici 3. Z −1=3·2+q dostaneme q=−7.'],
      ['cermat','Vzdálenost bodu A[2;−1] od přímky x−2y+4=0 je:',['4/√5','8/√5','√5'],1,'Dosadíme do vzorce: |2−2·(−1)+4|/√(1²+(−2)²)=8/√5.'],
      ['cermat','Průsečík přímek y=2x−1 a y=−x+8 je:',['[2;3]','[3;5]','[5;3]'],1,'Položíme pravé strany sobě rovné: 2x−1=−x+8, tedy x=3. Dosazením y=5.','V průsečíku mají obě rovnice stejnou hodnotu y.'],
      ['cermat','Která přímka prochází bodem [2;3] a je kolmá k přímce 3x−y+4=0?',['x+3y−11=0','3x−y−3=0','x−3y+7=0'],0,'Daná přímka má směrnici 3, kolmá tedy −1/3. Rovnice x+3y−11=0 po úpravě dává y=−x/3+11/3 a bod [2;3] ji splňuje.','Směrnice kolmých přímek mají součin −1; potom ověř zadaný bod.']],
    'kombinatorika-pravdepodobnost.html': [
      ['easy','Kolik je 5!?',['25','60','120'],2,'5!=5·4·3·2·1=120.'],
      ['cermat','Pravděpodobnost hodit na kostce číslo větší než 4 je:',['1/6','1/3','1/2'],1,'Vyhovují 5 a 6: dva výsledky ze šesti.'],
      ['cermat','Medián dat 1,3,3,8,10 je:',['3','5','8'],0,'Po seřazení je prostřední hodnota 3.'],
      ['cermat','Kolik různých tříčlenných týmů lze vybrat z 8 lidí?',['24','56','336'],1,'Na pořadí nezáleží, proto počítáme C(8,3)=56.'],
      ['cermat','V osudí jsou 3 bílé a 2 černé koule. Dvě taháme bez vracení. Pravděpodobnost, že budou stejné barvy, je:',['2/5','1/2','3/5'],0,'Příznivé dvojice: C(3,2)+C(2,2)=4, všech dvojic C(5,2)=10. Pravděpodobnost je 4/10=2/5.'],
      ['cermat','Z číslic 1, 2, 3, 4, 5 tvoříme trojciferná čísla bez opakování. Kolik z nich je sudých?',['12','24','36'],1,'Na posledním místě jsou 2 možnosti (2 nebo 4), na prvním 4 a na prostředním 3. Celkem 2·4·3=24.'],
      ['cermat','Čtyřikrát hodíme mincí. Pravděpodobnost, že padnou právě dva líce, je:',['1/4','3/8','1/2'],1,'Všech výsledků je 2⁴=16. Dvě pozice pro líc lze vybrat C(4,2)=6 způsoby, takže pravděpodobnost je 6/16=3/8.','Spočítej všechny stejně pravděpodobné výsledky a vyber dvě pozice pro líc.'],
      ['cermat','Pět studentů se řadí do řady. Kolika způsoby se mohou seřadit, jestliže Adam a Bára nesmějí stát vedle sebe?',['48','72','96'],1,'Celkem je 5!=120 pořadí. Adam s Bárou stojí vedle sebe ve 2·4!=48 pořadích. Vyhovuje 120−48=72 pořadí.','Od všech uspořádání odečti ta, kde Adam a Bára tvoří jeden dvoučlenný blok.']],
    'absolutni-hodnoty.html': [
      ['easy','Hodnota |−7| je:',['−7','0','7'],2,'Absolutní hodnota je vzdálenost od nuly.'],
      ['cermat','Rovnice |x−2|=3 má řešení:',['−1 a 5','1 a 5','−1 a 3'],0,'x−2=3 nebo x−2=−3.'],
      ['cermat','Nerovnice |x+1|≤4 má řešení:',['⟨−5;3⟩','(−5;3)','⟨−3;5⟩'],0,'Platí −4≤x+1≤4, tedy −5≤x≤3.'],
      ['cermat','Rovnice |2x−1|=x+2 má řešení:',['jen x=3','x=−1/3 a x=3','x=−3 a x=1/3'],1,'Pro 2x−1≥0 vyjde x=3. Pro 2x−1<0 vyjde x=−1/3; obě hodnoty splní příslušné podmínky.'],
      ['cermat','Minimum výrazu |x−4|+|x+2| je:',['2','6','8'],1,'Pro libovolné x mezi −2 a 4 je součet vzdáleností od krajních bodů roven 6.'],
      ['cermat','Rovnice |x−1|+|x+3|=6 má řešení:',['x=−4 a x=2','x=−3 a x=1','jen x=−1'],0,'Mimo interval ⟨−3;1⟩ součet vzdáleností roste. Výpočtem v krajních oblastech vyjdou x=−4 a x=2.']]
  };
  const guides = {
    'prakticke-pocitani.html': ['procenta, poměr, přímá a nepřímá úměrnost a bezpečné převody jednotek', 'počítání druhé procentní změny z původního základu nebo záměna přímé a nepřímé úměrnosti'],
    'logika-mnoziny.html': ['základní množinové operace, intervaly, výroky a jejich negace', 'negace výroku „všichni“ není „nikdo“, ale „alespoň jeden ne“'],
    'mocniny.html': ['pravidla pro mocniny, odmocniny, záporný exponent a zápis v normovaném tvaru', 'sčítání exponentů při sčítání mocnin nebo zapomenutí podmínky u sudé odmocniny'],
    'algebraicke-vyrazy.html': ['podmínky, rozklad na součin, vzorce a krácení lomených výrazů', 'krácení členů v součtu místo společných činitelů'],
    'funkce.html': ['definiční obor, obor hodnot, čtení grafu a lineární funkce', 'záměna směrnice a absolutního členu nebo přehlédnutí vyloučeného bodu'],
    'kvadraticke.html': ['kvadratická rovnice, diskriminant, kořeny, vrchol a základní vlastnosti paraboly', 'chyba ve znaménku u koeficientu b nebo zaměnění kořenů s vrcholem'],
    'soustavy.html': ['soustavy dvou lineárních rovnic a převod slovního zadání na dvě podmínky', 'úprava jen jedné strany rovnice nebo odpověď bez kontroly v původním zadání'],
    'exp-log-funkce.html': ['vlastnosti exponenciální a logaritmické funkce, graf a definiční obor', 'zapomenutí podmínky kladného argumentu logaritmu'],
    'exp-log-rovnice.html': ['jednoduché exponenciální a logaritmické rovnice a kontrola podmínek', 'mechanické logaritmování bez ověření definičního oboru'],
    'goniometrie.html': ['sinus, kosinus a tangens v pravoúhlém trojúhelníku a práce s kalkulačkou', 'špatný režim stupně/radiány nebo záměna protilehlé a přilehlé odvěsny'],
    'gon-vzorce.html': ['základní identity a jednoduché goniometrické rovnice v daném intervalu', 'uvedení jen jednoho řešení nebo zahrnutí koncového bodu mimo interval'],
    'posloupnosti.html': ['aritmetická a geometrická posloupnost, n-tý člen, součet a základní finanční aplikace', 'použití n místo n − 1 ve vzorci pro n-tý člen'],
    'planimetrie.html': ['úhly, podobnost, Pythagorova věta, obvody a obsahy základních útvarů', 'lineární změna obsahu při podobnosti místo druhé mocniny měřítka'],
    'stereometrie.html': ['objemy a povrchy hranolů, jehlanu, válce, kužele a koule včetně jednotek', 'záměna povrchu s objemem nebo chybný převod krychlových jednotek'],
    'analyticka-geometrie-rovina.html': ['body, vektory, vzdálenosti, střed úsečky a rovnice přímky v rovině', 'opačné pořadí při odečítání souřadnic nebo neověřená rovnice přímky'],
    'kombinatorika-pravdepodobnost.html': ['základní kombinatorická pravidla, pravděpodobnost a popisná statistika', 'počítání uspořádání tam, kde na pořadí nezáleží, nebo špatný počet všech možností'],
    'absolutni-hodnoty.html': ['význam absolutní hodnoty a jednoduché rovnice a nerovnice s absolutní hodnotou', 'zapomenutí druhé větve řešení nebo chybné otočení nerovnosti']
  };
  const file = location.pathname.split('/').pop().toLowerCase();
  const bank = banks[file];
  if (!bank || document.querySelector('.cermat-practice-section')) return;
  const guide = document.createElement('section');
  guide.className = 'cermat-lesson-guide';
  const guideData = guides[file];
  guide.innerHTML = `<div><span>Minimum pro CERMAT</span><p>${guideData[0]}.</p></div><div><span>Typická chyba</span><p>${guideData[1]}.</p></div><div><span>Rozšíření</span><p>Podrobná odvození a náročnější teorie používej až po zvládnutí minima a kontrolních úloh.</p></div>`;
  const section = document.createElement('section');
  section.className = 'cermat-practice-section';
  const awardedKey = `maturita-cermat-xp:${file}`;
  let awarded = {};
  try { awarded = JSON.parse(localStorage.getItem(awardedKey) || '{}'); } catch (_) {}
  section.innerHTML = `<div class="cermat-practice-head"><div><h2>Procvičování CERMAT</h2><p>Nejdřív lehčí rozjezd, potom úlohy blízké testu. XP dostaneš jen za správnou odpověď bez otevřené nápovědy nebo řešení.</p></div><span class="cermat-xp">${Object.keys(awarded).length * 10} XP</span></div>` + bank.map((q,i)=>`<article class="cermat-task ${awarded[i]?'is-correct':''}" data-index="${i}"><div class="cermat-task-top"><span>Úloha ${i+1}</span><span class="cermat-difficulty">${q[0]==='easy'?'lehčí rozjezd':'úroveň CERMAT'}</span></div><div class="cermat-question">${q[1]}</div><div class="cermat-options">${q[2].map((o,j)=>`<label class="cermat-option"><input type="radio" name="cp-${file}-${i}" value="${j}"> ${o}</label>`).join('')}</div><button class="cermat-check" type="button">Zkontrolovat</button><span class="cermat-feedback">${awarded[i]?'splněno':''}</span>${q[5]?`<details class="cermat-hint"><summary>Nápověda</summary>${q[5]}</details>`:''}<details class="cermat-solution"><summary>Zobrazit řešení</summary>${q[4]}</details></article>`).join('');
  const main = document.querySelector('main');
  const footer = main?.querySelector('footer');
  if (!main) return;
  main.insertBefore(guide, footer || null);
  main.insertBefore(section, footer || null);
  section.querySelectorAll('.cermat-task').forEach(task => {
    const i = Number(task.dataset.index), feedback = task.querySelector('.cermat-feedback'), details = task.querySelectorAll('details');
    let usedHelp = false;
    details.forEach(detail => detail.addEventListener('toggle', () => { if (detail.open) usedHelp = true; }));
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
