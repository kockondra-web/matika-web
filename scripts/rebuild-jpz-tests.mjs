import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const f = (label, answers, points, type, options) => ({ label, answers, points, ...(type ? { type, options } : {}) });
const select = (label, answer, points, options = ['', 'A', 'B', 'C', 'D', 'E']) => f(label, [answer], points, 'select', options);
const task = (num, topic, points, question, answer, fields, extra = {}) => ({ num, topic, points, question, answer, fields, ...extra });

const tests = {
  a: [
    task('1','Jednotky',2,'Obdélníková deska má obsah 2,4 m². Přidáme k ní čtvercovou desku o obsahu 3 600 cm². Určete celkový obsah obou desek v dm².','276 dm²',[f('Obsah v dm²',['276','276dm2','276dm²'],2)]),
    task('2','Početní operace',3,'Vypočtěte a výsledky zapište v základním tvaru.<br>2.1 \(\frac34-\frac5{12}\)<br>2.2 \(\frac25:\frac6{25}\)<br>2.3 \(1-\left(\frac38+\frac16\right)\)','2.1 \(\frac13\) &nbsp; 2.2 \(\frac53\) &nbsp; 2.3 \(\frac{11}{24}\)',[f('2.1',['1/3'],1),f('2.2',['5/3'],1),f('2.3',['11/24'],1)]),
    task('3','Algebraické výrazy',3,'Upravte výrazy.<br>3.1 Roznásobte \((2x-3)(x+4)\).<br>3.2 Rozložte na součin \(6a^2-24\).<br>3.3 Vypočtěte hodnotu \(2n^2-3n+1\) pro \(n=-2\).','3.1 \(2x^2+5x-12\) &nbsp; 3.2 \(6(a-2)(a+2)\) &nbsp; 3.3 15',[f('3.1',['2x^2+5x-12','2x²+5x-12'],1),f('3.2',['6(a-2)(a+2)','6(a+2)(a-2)'],1),f('3.3',['15'],1)]),
    task('4','Rovnice',4,'Vyřešte rovnici a soustavu.<br>4.1 \(3(x-2)+5=2x+9\)<br>4.2 \(2x+y=11,\quad x-y=1\)','4.1 \(x=10\) &nbsp; 4.2 \(x=4, y=3\)',[f('4.1 x',['10'],2),f('4.2 x',['4'],1),f('4.2 y',['3'],1)]),
    task('5','Procenta',3,'V nádobě je 18 litrů nápoje, který obsahuje 30 % ovocné šťávy. Kolik litrů čisté vody musíme přidat, aby šťáva tvořila 20 % výsledného nápoje? Určete také množství šťávy v nádobě.','Šťávy je 5,4 l; přidáme 9 l vody.',[f('Množství šťávy v litrech',['5.4','5,4','5.4l','5,4l'],1),f('Přidaná voda v litrech',['9','9l'],2)]),
    task('6','Slovní úloha',4,'Zásobník na vodu obsahoval na začátku \(x\) litrů. Dopoledne zahradníci spotřebovali tři osminy původního množství. Potom přitekla voda o objemu jedné čtvrtiny původního množství. Večer spotřebovali dalších 95 litrů a zůstaly dvě pětiny původního množství.<br><br>6.1 Vyjádřete množství po dopoledním odběru.<br>6.2 Vyjádřete množství po přítoku.<br>6.3 Kolik litrů vody během dne celkem spotřebovali?','6.1 \(\frac58x\) &nbsp; 6.2 \(\frac78x\) &nbsp; 6.3 170 litrů',[f('6.1',['5x/8','5/8x','x*5/8'],1),f('6.2',['7x/8','7/8x','x*7/8'],1),f('6.3',['170','170l'],2)]),
    task('7','Rychlost práce',3,'Tiskárna A vytiskne 120 listů za 8 minut. Společně s tiskárnou B vytisknou za 12 minut 300 listů. Kolik listů vytiskne tiskárna B za minutu a za jak dlouho by sama vytiskla 300 listů?','10 listů za minutu; 30 minut.',[f('Listů za minutu',['10'],1),f('Čas v minutách',['30','30min'],2)]),
    task('8','Planimetrie',3,'Pravoúhlý obdélník má úhlopříčku 13 cm a jednu stranu 5 cm. Vypočtěte délku druhé strany, obsah a obvod obdélníku.','12 cm; 60 cm²; 34 cm.',[f('Druhá strana',['12','12cm'],1),f('Obsah',['60','60cm2','60cm²'],1),f('Obvod',['34','34cm'],1)]),
    task('9','Konstrukce',3,'Je dána úsečka AB délky 7 cm. Sestrojte všechny trojúhelníky ABC, v nichž je AC = 5 cm a výška na stranu AB má délku 3 cm. Popište použité množiny bodů.','Vrchol C leží na kružnici se středem A a poloměrem 5 cm a současně na jedné ze dvou rovnoběžek s AB ve vzdálenosti 3 cm. V celé rovině vzniknou až čtyři řešení.',[],{manual:true,rubric:'3 body za správné množiny bodů a všechna řešení, 2 body za správnou konstrukci bez úplného popisu, 1 bod za správně založený postup.'}),
    task('10','Konstrukce',3,'Je dána kružnice k a přímka p, která kružnici neprotíná. Sestrojte všechny kružnice o poloměru 2 cm, které se dotýkají přímky p a vnějším dotykem také kružnice k.','Středy hledaných kružnic leží na rovnoběžkách s p ve vzdálenosti 2 cm a zároveň na kružnici soustředné s k, jejíž poloměr je o 2 cm větší.',[],{manual:true,rubric:'3 body za správné pomocné množiny a všechna existující řešení, 2 body za správnou myšlenku s drobnou nepřesností, 1 bod za jednu správnou pomocnou množinu.'}),
    task('11','Práce s daty',3,'Knihovna zaznamenala v jednotlivých týdnech 120, 150, 90 a 180 výpůjček. Rozhodněte (A–ano, N–ne).<br>11.1 Průměr byl 135 výpůjček týdně.<br>11.2 Ve druhém týdnu bylo o 50 % více výpůjček než v prvním.<br>11.3 Ve třetím týdnu byla polovina výpůjček oproti čtvrtému.','11.1 A &nbsp; 11.2 N &nbsp; 11.3 A',[select('11.1','A',1,['','A','N']),select('11.2','N',1,['','A','N']),select('11.3','A',1,['','A','N'])]),
    task('12','Procenta',2,'Cena batohu 800 Kč se nejprve zvýšila o 25 % a poté se nová cena snížila o 20 %. Jaká je konečná cena?<br>A) 760 Kč &nbsp; B) 800 Kč &nbsp; C) 840 Kč &nbsp; D) 1 000 Kč &nbsp; E) jiná cena','B) 800 Kč',[select('Možnost','B',2)]),
    task('13','Geometrie',2,'Ve čtverci o straně 10 cm je vepsán kruh. Jaký je obsah části čtverce ležící mimo kruh?<br>A) \(100-10\pi\) cm² &nbsp; B) \(100-20\pi\) cm² &nbsp; C) \(100-25\pi\) cm² &nbsp; D) \(25\pi\) cm² &nbsp; E) jiný obsah','C) \(100-25\pi\) cm²',[select('Možnost','C',2)]),
    task('14','Kombinatorika',2,'Z číslic 1, 2, 3, 4, 5 tvoříme trojciferná sudá čísla bez opakování číslic. Kolik jich je?<br>A) 12 &nbsp; B) 18 &nbsp; C) 24 &nbsp; D) 30 &nbsp; E) jiný počet','C) 24',[select('Možnost','C',2)]),
    task('15','Přiřazování',6,'Přiřaďte výsledky A–F.<br>15.1 Bunda za 1 500 Kč je zlevněna o 20 %.<br>15.2 Osmnáct kilogramů tvoří 60 % celku.<br>15.3 Číslo 80 se zvýší na 100. O kolik procent se zvýšilo?<br>A) 1 200 &nbsp; B) 30 &nbsp; C) 25 &nbsp; D) 20 &nbsp; E) 80 &nbsp; F) jiný výsledek','15.1 A &nbsp; 15.2 B &nbsp; 15.3 C',[select('15.1','A',2,['','A','B','C','D','E','F']),select('15.2','B',2,['','A','B','C','D','E','F']),select('15.3','C',2,['','A','B','C','D','E','F'])]),
    task('16','Periodická úloha',4,'Dvě linky vyjíždějí ze zastávky společně v 7:00. Linka A odjíždí každých 6 minut, linka B každých 8 minut.<br>16.1 Za kolik minut odjedou znovu současně?<br>16.2 Kolikrát odjedou současně od 7:00 do 7:48 včetně?<br>16.3 Kolik odjezdů obou linek dohromady nastane od 7:01 do 8:00, počítáme-li každý autobus zvlášť?','16.1 24 minut &nbsp; 16.2 třikrát &nbsp; 16.3 17 odjezdů',[f('16.1',['24','24min'],1),f('16.2',['3'],1),f('16.3',['17'],2)])
  ],
  b: [
    task('1','Čas',2,'Převeďte 1,75 hodiny na minuty.','105 minut',[f('Minuty',['105','105min'],2)]),
    task('2','Početní operace',3,'Vypočtěte.<br>2.1 \(\frac56+\frac7{15}\)<br>2.2 \(\frac37\cdot\frac{14}{9}\)<br>2.3 \(\left(\frac54-\frac12\right):\frac38\)','2.1 \(\frac{13}{10}\) &nbsp; 2.2 \(\frac23\) &nbsp; 2.3 2',[f('2.1',['13/10'],1),f('2.2',['2/3'],1),f('2.3',['2'],1)]),
    task('3','Algebraické výrazy',3,'Upravte.<br>3.1 \((3x+2)(x-5)\)<br>3.2 Rozložte \(4a^2-12a\).<br>3.3 Určete \(m^2-4m-5\) pro \(m=-1\).','3.1 \(3x^2-13x-10\) &nbsp; 3.2 \(4a(a-3)\) &nbsp; 3.3 0',[f('3.1',['3x^2-13x-10','3x²-13x-10'],1),f('3.2',['4a(a-3)','4(a-3)a'],1),f('3.3',['0'],1)]),
    task('4','Rovnice',4,'Vyřešte.<br>4.1 \(5-2(x-1)=x+1\)<br>4.2 \(x+2y=8,\quad 3x-y=3\)','4.1 \(x=2\) &nbsp; 4.2 \(x=2,y=3\)',[f('4.1 x',['2'],2),f('4.2 x',['2'],1),f('4.2 y',['3'],1)]),
    task('5','Slovní úloha',3,'Tři stejné sešity a pět stejných per stojí 300 Kč. Jeden sešit je o 20 Kč dražší než jedno pero. Určete cenu pera a cenu sešitu.','Pero 30 Kč; sešit 50 Kč.',[f('Pero',['30','30kc','30kč'],1),f('Sešit',['50','50kc','50kč'],2)]),
    task('6','Poměr',4,'Modrá a červená barva jsou smíchány v poměru 3 : 2. Směsi je 25 litrů.<br>6.1 Kolik litrů je modré barvy?<br>6.2 Kolik litrů je červené barvy?<br>6.3 Odebereme rovnoměrně promíchaných 5 litrů. Kolik litrů modré barvy zůstane?','15 l; 10 l; zůstane 12 l modré.',[f('6.1',['15','15l'],1),f('6.2',['10','10l'],1),f('6.3',['12','12l'],2)]),
    task('7','Rychlost',3,'Cyklista ujede první polovinu 54km trasy rychlostí 18 km/h. Celá cesta trvá 4 hodiny. Určete čas první poloviny a průměrnou rychlost na druhé polovině.','1,5 hodiny; 10,8 km/h.',[f('Čas první poloviny',['1.5','1,5','1.5h','1,5h'],1),f('Rychlost druhé poloviny',['10.8','10,8','10.8km/h','10,8km/h'],2)]),
    task('8','Planimetrie',3,'Lichoběžník má základny 10 cm a 18 cm a výšku 6 cm. Určete délku střední příčky a obsah lichoběžníku.','Střední příčka 14 cm; obsah 84 cm².',[f('Střední příčka',['14','14cm'],1),f('Obsah',['84','84cm2','84cm²'],2)]),
    task('9','Konstrukce',3,'Je dána přímka p a bod A mimo ni. Sestrojte všechny body X, které mají od přímky p vzdálenost 3 cm a od bodu A vzdálenost 5 cm.','Průsečíky kružnice se středem A a poloměrem 5 cm se dvěma rovnoběžkami s p ve vzdálenosti 3 cm.',[],{manual:true,rubric:'3 body za obě rovnoběžky, kružnici a všechna řešení, 2 body za neúplný počet řešení, 1 bod za správný začátek.'}),
    task('10','Konstrukce',3,'Je dána úsečka AB = 6 cm a úhel α = 55°. Sestrojte všechny trojúhelníky ABC, pro které AC = 4 cm a velikost úhlu ABC je α.','V bodě B sestrojte rameno úhlu 55° a protněte je kružnicí se středem A a poloměrem 4 cm; zvažte obě poloroviny.',[],{manual:true,rubric:'3 body za přesnou konstrukci všech řešení, 2 body za jedno správné řešení, 1 bod za správně sestrojený úhel nebo kružnici.'}),
    task('11','Práce s daty',3,'Teploty ve čtyřech dnech byly 12 °C, 16 °C, 14 °C a 18 °C. Rozhodněte A/N.<br>11.1 Průměr je 15 °C.<br>11.2 Třetí den bylo o 25 % chladněji než druhý.<br>11.3 Čtvrtý den bylo o 50 % tepleji než první.','A, N, A',[select('11.1','A',1,['','A','N']),select('11.2','N',1,['','A','N']),select('11.3','A',1,['','A','N'])]),
    task('12','Měřítko',2,'Na mapě v měřítku 1 : 25 000 měří cesta 6,4 cm. Jak dlouhá je ve skutečnosti?<br>A) 0,16 km &nbsp; B) 0,64 km &nbsp; C) 1,6 km &nbsp; D) 16 km &nbsp; E) jiná délka','C) 1,6 km',[select('Možnost','C',2)]),
    task('13','Pravděpodobnost',2,'V sáčku je 5 červených a 3 modré žetony. Náhodně vytáhneme jeden. Jaká je pravděpodobnost červeného?<br>A) \(\frac38\) &nbsp; B) \(\frac12\) &nbsp; C) \(\frac58\) &nbsp; D) \(\frac35\) &nbsp; E) jiná','C) \(\frac58\)',[select('Možnost','C',2)]),
    task('14','Tělesa',2,'Povrch krychle je 150 cm². Jaký je její objem?<br>A) 25 cm³ &nbsp; B) 75 cm³ &nbsp; C) 100 cm³ &nbsp; D) 125 cm³ &nbsp; E) jiný','D) 125 cm³',[select('Možnost','D',2)]),
    task('15','Přiřazování',6,'Přiřaďte výsledky.<br>15.1 Kolik je 60 % ze 120?<br>15.2 Číslo po zvýšení o 25 % je 100. Jaké bylo původně?<br>15.3 Číslo 45 tvoří 30 % celku.<br>A) 48 &nbsp; B) 72 &nbsp; C) 80 &nbsp; D) 120 &nbsp; E) 150 &nbsp; F) jiný výsledek','B, C, E',[select('15.1','B',2,['','A','B','C','D','E','F']),select('15.2','C',2,['','A','B','C','D','E','F']),select('15.3','E',2,['','A','B','C','D','E','F'])]),
    task('16','Číselný vzor',4,'V n-té řadě obrazce je \(3n+1\) dlaždic.<br>16.1 Kolik dlaždic je v 10. řadě?<br>16.2 Kolik jich je dohromady v prvních 10 řadách?<br>16.3 Ve které řadě je 64 dlaždic?','31; 175; 21. řada',[f('16.1',['31'],1),f('16.2',['175'],1),f('16.3',['21'],2)])
  ],
  c: [
    task('1','Čas',2,'Výlet začal v 9:35. Čistá doba chůze byla 2 hodiny 48 minut a přestávka trvala 37 minut. V kolik hodin výlet skončil?','13:00',[f('Čas',['13:00','13.00','1300'],2)]),
    task('2','Početní operace',3,'Vypočtěte.<br>2.1 \(\frac78-\frac13\)<br>2.2 \(\frac56:\frac{25}{18}\)<br>2.3 \(\left(\frac12+\frac3{10}\right)\cdot\frac54\)','\(\frac{13}{24}\); \(\frac35\); 1',[f('2.1',['13/24'],1),f('2.2',['3/5'],1),f('2.3',['1'],1)]),
    task('3','Algebraické výrazy',3,'Upravte.<br>3.1 \((4x-1)^2\)<br>3.2 Rozložte \(9a^2-25\).<br>3.3 Určete \(3m^2+2m-4\) pro \(m=2\).','\(16x^2-8x+1\); \((3a-5)(3a+5)\); 12',[f('3.1',['16x^2-8x+1','16x²-8x+1'],1),f('3.2',['(3a-5)(3a+5)','(3a+5)(3a-5)'],1),f('3.3',['12'],1)]),
    task('4','Rovnice',4,'Vyřešte.<br>4.1 \(\frac{x-3}{4}+\frac{x+1}{2}=5\)<br>4.2 \(2x-3y=1,\quad x+y=8\)','4.1 \(x=7\); 4.2 \(x=5,y=3\)',[f('4.1 x',['7'],2),f('4.2 x',['5'],1),f('4.2 y',['3'],1)]),
    task('5','Slovní úloha',3,'Člen sportovního centra platí 240 Kč měsíčně a 70 Kč za návštěvu. Nečlen platí 100 Kč za návštěvu. Při kolika návštěvách jsou měsíční náklady stejné a jaká je tato částka?','8 návštěv; 800 Kč.',[f('Počet návštěv',['8'],1),f('Částka',['800','800kc','800kč'],2)]),
    task('6','Procenta',4,'Zahrada má obsah 240 m². Květiny zabírají 35 % zahrady, trávník 96 m² a zbytek tvoří bylinky.<br>6.1 Obsah květin?<br>6.2 Obsah bylinek?<br>6.3 Jakou část zahrady tvoří bylinky?','84 m²; 60 m²; \(\frac14\)',[f('6.1',['84','84m2','84m²'],1),f('6.2',['60','60m2','60m²'],1),f('6.3',['1/4','0.25','0,25'],2)]),
    task('7','Výkon',3,'První tiskárna tiskne 18 stran za minutu. Po pěti minutách se přidá druhá tiskárna s výkonem 12 stran za minutu a obě tisknou dalších 10 minut. Kolik stran vytisknou celkem a kolik z nich vytiskne první tiskárna?','Celkem 390 stran; první 270 stran.',[f('Celkem',['390'],1),f('První tiskárna',['270'],2)]),
    task('8','Geometrie',3,'Pravidelný šestiúhelník má stranu 6 cm a apotému 5,2 cm. Vypočtěte jeho obvod a obsah podle vztahu \(S=\frac{o\cdot a}{2}\).','Obvod 36 cm; obsah 93,6 cm².',[f('Obvod',['36','36cm'],1),f('Obsah',['93.6','93,6','93.6cm2','93,6cm²'],2)]),
    task('9','Konstrukce',3,'Jsou dány tři nekolineární body A, B, C. Sestrojte kružnici, která prochází všemi třemi body.','Střed je průsečík os dvou stran trojúhelníku ABC; poloměr je vzdálenost středu od kteréhokoli vrcholu.',[],{manual:true,rubric:'3 body za obě osy, správný střed a kružnici, 2 body za správný střed bez dokončení, 1 bod za jednu správnou osu.'}),
    task('10','Konstrukce',3,'Je dána úsečka AC délky 6 cm. Sestrojte všechny kosočtverce ABCD se stranou 5 cm, jejichž úhlopříčkou je AC.','Vrcholy B a D jsou průsečíky kružnic se středy A a C a poloměrem 5 cm.',[],{manual:true,rubric:'3 body za obě kružnice a správný kosočtverec, 2 body za správné vrcholy, 1 bod za správnou pomocnou kružnici.'}),
    task('11','Práce s daty',3,'Počty návštěvníků byly 24, 30, 18 a 36. Rozhodněte A/N.<br>11.1 Průměr je 28.<br>11.2 Nejvyšší hodnota je dvojnásobkem nejnižší.<br>11.3 Součet prvních dvou hodnot se rovná součtu posledních dvou.','N, A, A',[select('11.1','N',1,['','A','N']),select('11.2','A',1,['','A','N']),select('11.3','A',1,['','A','N'])]),
    task('12','Nepřímá úměrnost',2,'Osm pracovníků dokončí stejnou zakázku za 15 dní. Za kolik dní ji dokončí 12 stejně výkonných pracovníků?<br>A) 8 &nbsp; B) 10 &nbsp; C) 12 &nbsp; D) 18 &nbsp; E) jiný počet','B) 10 dní',[select('Možnost','B',2)]),
    task('13','Procenta',2,'Cena po slevě 15 % je 1 020 Kč. Jaká byla původní cena?<br>A) 1 150 Kč &nbsp; B) 1 180 Kč &nbsp; C) 1 200 Kč &nbsp; D) 1 250 Kč &nbsp; E) jiná','C) 1 200 Kč',[select('Možnost','C',2)]),
    task('14','Geometrie',2,'Strany obdélníku jsou v poměru 3 : 5 a jeho obsah je 240 cm². Jaký je obvod?<br>A) 32 cm &nbsp; B) 48 cm &nbsp; C) 56 cm &nbsp; D) 64 cm &nbsp; E) jiný','D) 64 cm',[select('Možnost','D',2)]),
    task('15','Přiřazování',6,'Přiřaďte výsledky.<br>15.1 Chlapci a dívky jsou v poměru 2 : 3, celkem je 30 žáků. Kolik je chlapců?<br>15.2 Číslo 12 tvoří 40 % celku.<br>15.3 Cena vzrostla ze 120 Kč na 144 Kč. O kolik korun?<br>A) 12 &nbsp; B) 18 &nbsp; C) 24 &nbsp; D) 30 &nbsp; E) 36 &nbsp; F) jiný','A, D, C',[select('15.1','A',2,['','A','B','C','D','E','F']),select('15.2','D',2,['','A','B','C','D','E','F']),select('15.3','C',2,['','A','B','C','D','E','F'])]),
    task('16','Periodická úloha',4,'Tři světla bliknou společně v čase 0. Potom blikají každé 4, 6 a 9 sekund.<br>16.1 Za kolik sekund bliknou opět všechna současně?<br>16.2 Kolikrát bliknou všechna současně od 0 do 180 sekund včetně?<br>16.3 Kolik jednotlivých bliknutí nastane po čase 0 do času 180 sekund včetně, počítáme-li každé světlo zvlášť?','36 sekund; šestkrát; 95 bliknutí.',[f('16.1',['36','36s'],1),f('16.2',['6'],1),f('16.3',['95'],2)])
  ],
  d: [
    task('1','Procenta',2,'Částka 500 Kč se zvýší o 10 % a poté se nová částka sníží o 10 %. Určete konečnou částku a rozdíl oproti původní.','495 Kč; o 5 Kč méně.',[f('Konečná částka',['495','495kc','495kč'],1),f('Rozdíl',['5','5kc','5kč'],1)]),
    task('2','Početní operace',3,'Vypočtěte.<br>2.1 \(\frac{11}{12}-\frac5{18}\)<br>2.2 \(\frac49:\frac8{27}\)<br>2.3 \(\left(\frac35+\frac14\right):\frac{17}{20}\)','\(\frac{23}{36}\); \(\frac32\); 1',[f('2.1',['23/36'],1),f('2.2',['3/2','1.5','1,5'],1),f('2.3',['1'],1)]),
    task('3','Algebraické výrazy',3,'Upravte.<br>3.1 \((2x+5)(2x-5)\)<br>3.2 Rozložte \(5a^2+15a\).<br>3.3 Určete \(n^2-2n+7\) pro \(n=-3\).','\(4x^2-25\); \(5a(a+3)\); 22',[f('3.1',['4x^2-25','4x²-25'],1),f('3.2',['5a(a+3)','5(a+3)a'],1),f('3.3',['22'],1)]),
    task('4','Rovnice',4,'Vyřešte.<br>4.1 \(0{,}3(10x-5)=1{,}5(x+3)\)<br>4.2 \(3x+y=14,\quad x-y=2\)','4.1 \(x=4\); 4.2 \(x=4,y=2\)',[f('4.1 x',['4'],2),f('4.2 x',['4'],1),f('4.2 y',['2'],1)]),
    task('5','Poměr',3,'Klára a Lukáš mají dohromady 3 000 Kč. Klára má tři pětiny celé částky. O kolik korun má Klára více než Lukáš a kolik korun má Lukáš?','Klára má o 600 Kč více; Lukáš má 1 200 Kč.',[f('Rozdíl',['600','600kc','600kč'],1),f('Lukáš',['1200','1200kc','1200kč'],2)]),
    task('6','Geometrie',4,'Strany obdélníku jsou v poměru 2 : 5 a obvod je 70 cm.<br>6.1 Určete kratší stranu.<br>6.2 Určete delší stranu.<br>6.3 Vypočtěte obsah.','10 cm; 25 cm; 250 cm².',[f('6.1',['10','10cm'],1),f('6.2',['25','25cm'],1),f('6.3',['250','250cm2','250cm²'],2)]),
    task('7','Přítok a odtok',3,'V nádrži je 30 litrů vody. Přítok dodává 12 litrů za minutu a současně odtékají 4 litry za minutu. Určete čistou změnu za minutu a množství vody po 15 minutách.','Přibývá 8 l/min; po 15 minutách je 150 l.',[f('Změna za minutu',['8','8l'],1),f('Po 15 minutách',['150','150l'],2)]),
    task('8','Planimetrie',3,'Trojúhelník má strany 13 cm, 14 cm a 15 cm. Určete jeho obvod a obsah. Pro obsah můžete použít Heronův vzorec.','Obvod 42 cm; obsah 84 cm².',[f('Obvod',['42','42cm'],1),f('Obsah',['84','84cm2','84cm²'],2)]),
    task('9','Konstrukce',3,'Je dána úsečka AB = 6 cm. Sestrojte všechny trojúhelníky ABC, pro které AC = 4 cm a vzdálenost bodu C od přímky AB je 3 cm.','Vrchol C je průsečík kružnice se středem A a poloměrem 4 cm s rovnoběžkami s AB ve vzdálenosti 3 cm.',[],{manual:true,rubric:'3 body za správné množiny a všechna řešení, 2 body za jedno správné řešení, 1 bod za správnou pomocnou konstrukci.'}),
    task('10','Konstrukce',3,'Je dána kružnice k se středem S a bod P vně kružnice. Sestrojte obě tečny z bodu P ke kružnici k.','Sestrojte kružnici nad průměrem SP; její průsečíky s k jsou body dotyku.',[],{manual:true,rubric:'3 body za pomocnou kružnici a obě tečny, 2 body za jeden správný bod dotyku, 1 bod za správnou myšlenku Thaletovy kružnice.'}),
    task('11','Práce s daty',3,'Prodeje byly 80, 120, 100 a 140 kusů. Rozhodněte A/N.<br>11.1 Průměr je 110 kusů.<br>11.2 Druhá hodnota je o 50 % vyšší než první.<br>11.3 Medián hodnot je 100.','A, A, N',[select('11.1','A',1,['','A','N']),select('11.2','A',1,['','A','N']),select('11.3','N',1,['','A','N'])]),
    task('12','Rychlost',2,'Vlak ujede 180 km za 2 hodiny 15 minut. Jaká je jeho průměrná rychlost?<br>A) 72 km/h &nbsp; B) 75 km/h &nbsp; C) 80 km/h &nbsp; D) 90 km/h &nbsp; E) jiná','C) 80 km/h',[select('Možnost','C',2)]),
    task('13','Zlomky',2,'Chlapci tvoří \(\frac38\) třídy a je jich 15. Kolik žáků je ve třídě?<br>A) 32 &nbsp; B) 36 &nbsp; C) 40 &nbsp; D) 45 &nbsp; E) jiný počet','C) 40',[select('Možnost','C',2)]),
    task('14','Tělesa',2,'Válec má poloměr 3 cm a výšku 10 cm. Jaký je jeho objem?<br>A) \(30\pi\) cm³ &nbsp; B) \(60\pi\) cm³ &nbsp; C) \(90\pi\) cm³ &nbsp; D) \(180\pi\) cm³ &nbsp; E) jiný','C) \(90\pi\) cm³',[select('Možnost','C',2)]),
    task('15','Přiřazování',6,'Přiřaďte výsledky.<br>15.1 Kolik je 30 % z 80?<br>15.2 Po zlevnění o 20 % stojí výrobek 32 Kč. Kolik stál původně?<br>15.3 Dvě části jsou v poměru 2 : 3 a jejich součet je 50. Jaká je menší část?<br>A) 15 &nbsp; B) 20 &nbsp; C) 24 &nbsp; D) 30 &nbsp; E) 40 &nbsp; F) jiný','C, E, B',[select('15.1','C',2,['','A','B','C','D','E','F']),select('15.2','E',2,['','A','B','C','D','E','F']),select('15.3','B',2,['','A','B','C','D','E','F'])]),
    task('16','Číselný vzor',4,'V n-tém patře obrazce je \(2n-1\) kostek.<br>16.1 Kolik kostek je v 15. patře?<br>16.2 Kolik kostek je v prvních 15 patrech dohromady?<br>16.3 Kolik pater má obrazec tvořený celkem 400 kostkami?','29; 225; 20 pater.',[f('16.1',['29'],1),f('16.2',['225'],1),f('16.3',['20'],2)])
  ]
};

function renderTask(item) {
  return `  <div class="pure-example">
    <div class="pe-head"><div class="task-num-badge">${item.num}</div><a href="prijimacky.html" class="topic-tag">${item.topic}</a><div class="points-tag">max. ${item.points} ${item.points === 1 ? 'bod' : item.points < 5 ? 'body' : 'bodů'}</div></div>
    <div class="pe-q">${item.question}</div>
    <div class="pe-footer"><button type="button" class="pe-answer-btn">${item.manual ? 'Zobrazit postup' : 'Zobrazit výsledek'}</button><div class="pe-answer">${item.answer}</div></div>
  </div>`;
}

for (const [variant, items] of Object.entries(tests)) {
  const file = resolve(root, `zs/jpz-2026-test-${variant}.html`);
  let html = readFileSync(file, 'utf8');
  const resultEnd = html.indexOf('</section>', html.indexOf('id="exam-result"')) + '</section>'.length;
  const firstTask = html.indexOf('<div class="pure-example">', resultEnd);
  const footer = html.indexOf('<footer>', firstTask);
  if (firstTask < 0 || footer < 0) throw new Error(`Nelze najít blok úloh v testu ${variant.toUpperCase()}`);
  html = `${html.slice(0, firstTask)}${items.map(renderTask).join('\n\n')}\n\n  ${html.slice(footer)}`;

  const config = {
    id: `jpz-original-20260913-${variant}`,
    durationMinutes: 70,
    totalPoints: 50,
    tasks: Object.fromEntries(items.map(item => [item.num, item.manual
      ? { max: item.points, manual: true, rubric: item.rubric }
      : { max: item.points, fields: item.fields }]))
  };
  const configSource = `window.JPZ_EXAM_CONFIG = ${JSON.stringify(config, null, 2)};`;
  if (/window\.JPZ_EXAM_CONFIG\s*=\s*\{/.test(html)) {
    html = html.replace(/window\.JPZ_EXAM_CONFIG\s*=\s*\{[\s\S]*?\n\};/, configSource);
  } else {
    html = html.replace(/window\.JPZ_EXAM_CONFIG\s*=\s*window\.JPZ_EXAM_CONFIGS\.[a-d];/, configSource);
  }
  writeFileSync(file, html, 'utf8');
}

console.log('Čtyři přijímačkové testy byly nahrazeny nezávislými autorskými sadami.');
