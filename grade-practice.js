(() => {
  const banks = {
    'cisla-zs.html': [
      ['Zaokrouhli číslo 47 582 na stovky.', ['47 500', '47 600', '48 000'], 1, 'Číslice desítek je 8, proto stovky zvýšíme: 47 600.'],
      ['Vypočítej −18 + 7 · 3.', ['−33', '3', '39'], 1, 'Nejprve 7 · 3 = 21, potom −18 + 21 = 3.'],
      ['Nejmenší společný násobek čísel 18 a 24 je:', ['6', '72', '432'], 1, '18 = 2 · 3² a 24 = 2³ · 3. Pro NSN vezmeme nejvyšší mocniny: 2³ · 3² = 72.'],
      ['Které číslo je největší?', ['−0,8', '−3/4', '−0,72'], 2, '−3/4 = −0,75. U záporných čísel je největší hodnota nejblíže nule, tedy −0,72.']
    ],
    'zlomky-odmocniny.html': [
      ['Zkrať zlomek 21/28.', ['3/4', '7/9', '4/3'], 0, 'Čitatele i jmenovatele vydělíme 7: 21/28 = 3/4.'],
      ['Vypočítej 5/6 − 1/4.', ['1/2', '7/12', '4/10'], 1, 'Společný jmenovatel je 12: 10/12 − 3/12 = 7/12.'],
      ['Vypočítej (3/5 + 1/2) : 11/10.', ['1', '11/10', '121/100'], 0, 'Součet v závorce je 11/10. Dělení stejného nenulového čísla dává 1.'],
      ['Které číslo leží mezi 2/3 a 3/4?', ['0,6', '0,7', '0,8'], 1, '2/3 je přibližně 0,667 a 3/4 je 0,75, proto vyhovuje 0,7.']
    ],
    'rovinne-utvary.html': [
      ['Obvod čtverce se stranou 7 cm je:', ['14 cm', '28 cm', '49 cm²'], 1, 'Obvod čtverce je 4 · 7 = 28 cm.'],
      ['Trojúhelník má dva vnitřní úhly 48° a 67°. Třetí úhel měří:', ['55°', '65°', '75°'], 1, 'Součet vnitřních úhlů je 180°, tedy 180 − 48 − 67 = 65°.'],
      ['Lichoběžník má základny 8 cm a 14 cm a výšku 6 cm. Jeho obsah je:', ['44 cm²', '66 cm²', '132 cm²'], 1, 'S = (8 + 14) · 6 : 2 = 66 cm².'],
      ['Podobný obrazec má všechny délky třikrát větší. Jeho obsah je:', ['3× větší', '6× větší', '9× větší'], 2, 'Obsahy podobných obrazců se mění s druhou mocninou poměru: 3² = 9.']
    ],
    'telesa.html': [
      ['Objem krychle s hranou 3 cm je:', ['9 cm³', '18 cm³', '27 cm³'], 2, 'V = 3³ = 27 cm³.'],
      ['Kvádr 4 cm × 5 cm × 8 cm má objem:', ['80 cm³', '160 cm³', '320 cm³'], 1, 'V = 4 · 5 · 8 = 160 cm³.'],
      ['Válec má poloměr 3 cm a výšku 10 cm. Jeho objem je:', ['30π cm³', '60π cm³', '90π cm³'], 2, 'V = πr²v = π · 3² · 10 = 90π cm³.'],
      ['Zdvojnásobíme všechny rozměry tělesa. Objem bude:', ['2× větší', '4× větší', '8× větší'], 2, 'Objem se mění s třetí mocninou měřítka: 2³ = 8.']
    ],
    'prevody-jednotek.html': [
      ['2,4 m je kolik centimetrů?', ['24 cm', '240 cm', '2 400 cm'], 1, 'Jeden metr má 100 cm, proto 2,4 · 100 = 240 cm.'],
      ['0,35 m² je:', ['350 cm²', '3 500 cm²', '35 000 cm²'], 1, '1 m² = 10 000 cm², takže 0,35 m² = 3 500 cm².'],
      ['Nádrž o objemu 0,72 m³ je naplněna ze 3/4. Obsahuje:', ['540 l', '720 l', '960 l'], 0, '0,72 m³ = 720 l a tři čtvrtiny ze 720 jsou 540 l.'],
      ['Rychlost 72 km/h odpovídá:', ['10 m/s', '20 m/s', '25 m/s'], 1, 'Při převodu z km/h na m/s dělíme 3,6: 72 : 3,6 = 20 m/s.']
    ],
    'slovni-ulohy-pomer-umernost-vice.html': [
      ['Rozděl 320 v poměru 3 : 5. Menší část je:', ['80', '120', '200'], 1, 'Celkem je 8 dílů, jeden díl je 40 a menší část 3 · 40 = 120.'],
      ['Na mapě v měřítku 1 : 50 000 měří cesta 6 cm. Ve skutečnosti měří:', ['300 m', '3 km', '30 km'], 1, '6 · 50 000 cm = 300 000 cm = 3 km.'],
      ['Pět strojů vyrobí zakázku za 12 hodin. Deset stejně výkonných strojů ji vyrobí za:', ['6 hodin', '17 hodin', '24 hodin'], 0, 'Jde o nepřímou úměrnost: dvojnásobek strojů potřebuje polovinu času.'],
      ['Poměr chlapců a dívek je 4 : 5. Ve třídě je 27 žáků. Dívek je:', ['12', '15', '20'], 1, 'Celkem je 9 dílů, jeden díl jsou 3 žáci. Dívek je 5 · 3 = 15.']
    ],
    'procenta-uloha-8-vice.html': [
      ['Kolik je 15 % z 240?', ['24', '36', '40'], 1, '240 · 0,15 = 36.'],
      ['Po slevě 20 % stojí zboží 1 440 Kč. Původní cena byla:', ['1 152 Kč', '1 728 Kč', '1 800 Kč'], 2, '1 440 Kč představuje 80 %, proto 1 440 : 0,8 = 1 800 Kč.'],
      ['Cena 2 000 Kč vzrostla o 10 % a poté klesla o 10 %. Konečná cena je:', ['1 980 Kč', '2 000 Kč', '2 020 Kč'], 0, '2 000 · 1,10 · 0,90 = 1 980 Kč. Druhá změna se počítá z nové ceny.'],
      ['Ve směsi je 80 g soli, což jsou 4 % hmotnosti. Směs váží:', ['320 g', '2 000 g', '3 200 g'], 1, 'Základ je 80 : 0,04 = 2 000 g.']
    ],
    'geometrie.html': [
      ['Obsah obdélníku 8 cm × 5 cm je:', ['13 cm²', '26 cm²', '40 cm²'], 2, 'S = 8 · 5 = 40 cm².'],
      ['Pravoúhlý trojúhelník má odvěsny 6 cm a 8 cm. Přepona je:', ['10 cm', '12 cm', '14 cm'], 0, 'c = √(6² + 8²) = √100 = 10 cm.'],
      ['Obdélník má obsah 96 cm² a jedna strana měří 8 cm. Jeho obvod je:', ['20 cm', '40 cm', '48 cm'], 1, 'Druhá strana je 96 : 8 = 12 cm. Obvod je 2 · (8 + 12) = 40 cm.'],
      ['Žebřík dlouhý 13 m stojí 5 m od zdi. Do jaké výšky dosáhne?', ['8 m', '12 m', '18 m'], 1, 'Výška je odvěsna: √(13² − 5²) = √144 = 12 m.']
    ],
    'vyrazy.html': [
      ['Zjednoduš 3x + 5x.', ['8', '8x', '15x'], 1, 'Sčítáme koeficienty stejných členů: 3x + 5x = 8x.'],
      ['Zjednoduš 4(2x − 3) − 5x.', ['3x − 12', '8x − 8', '13x − 3'], 0, 'Roznásobíme závorku: 8x − 12 − 5x = 3x − 12.'],
      ['Pro x = −2 má výraz x² − 3x + 1 hodnotu:', ['−1', '7', '11'], 2, 'Dosadíme: (−2)² − 3 · (−2) + 1 = 4 + 6 + 1 = 11.'],
      ['Rozklad x² − 25 je:', ['(x − 5)²', '(x − 5)(x + 5)', '(x − 25)(x + 1)'], 1, 'Použijeme rozdíl čtverců a² − b² = (a − b)(a + b).']
    ],
    'konstrukcni-ulohy.html': [
      ['Kterým nástrojem při konstrukci přesně přenášíme délku?', ['Kružítkem', 'Úhloměrem', 'Pouhým odhadem podle pravítka'], 0, 'Přesnou délku při konstrukci přenášíme kružítkem.'],
      ['Množinu bodů stejně vzdálených od A a B tvoří:', ['přímka AB', 'osa úsečky AB', 'kružnice se středem A'], 1, 'Každý bod osy úsečky má od obou krajních bodů stejnou vzdálenost.'],
      ['Vrchol pravého úhlu nad úsečkou AB leží na:', ['Thaletově kružnici nad AB', 'ose úsečky AB', 'libovolné rovnoběžce s AB'], 0, 'Podle Thaletovy věty je úhel ACB pravý právě pro C na kružnici s průměrem AB.'],
      ['Kolik řešení může mít průsečík přímky s kružnicí?', ['jen jedno', 'jen dvě', '0, 1 nebo 2'], 2, 'Přímka může kružnici minout, být tečnou nebo sečnou.']
    ],
    'statistika-funkce-zs.html': [
      ['Průměr čísel 3, 5 a 10 je:', ['6', '8', '18'], 0, 'Součet 18 vydělíme třemi: průměr je 6.'],
      ['Medián dat 1, 4, 4, 7, 12 je:', ['4', '5,6', '7'], 0, 'Prostřední seřazená hodnota je 4.'],
      ['Pro f(x) = 3x − 2 je f(5):', ['8', '13', '17'], 1, 'f(5) = 3 · 5 − 2 = 13.'],
      ['Přímka prochází body [0; 3] a [2; 7]. Její předpis je:', ['y = 2x + 3', 'y = 3x + 2', 'y = 4x − 1'], 0, 'Směrnice je (7 − 3) : 2 = 2 a průsečík s osou y je 3.']
    ],
    'rovnice.html': [
      ['Vyřeš 3x = 21.', ['x = 7', 'x = 18', 'x = 63'], 0, 'Obě strany vydělíme 3: x = 7.'],
      ['Vyřeš 5x − 7 = 3x + 9.', ['x = 1', 'x = 8', 'x = 16'], 1, '2x = 16, tedy x = 8.'],
      ['Vyřeš (3x − 2)/4 + (x + 1)/2 = 5.', ['x = 2', 'x = 4', 'x = 5'], 1, 'Vynásobíme čtyřmi: 3x − 2 + 2x + 2 = 20, tedy x = 4.'],
      ['Řešení nerovnice −2x > 8 je:', ['x > −4', 'x < −4', 'x < 4'], 1, 'Při dělení záporným číslem se znaménko nerovnosti obrátí: x < −4.']
    ],
    'soustavy-rovnic-zs.html': [
      ['Řešení x + y = 7 a x − y = 1 je:', ['[3; 4]', '[4; 3]', '[6; 1]'], 1, 'Sečtením rovnic dostaneme 2x = 8, tedy x = 4 a y = 3.'],
      ['Soustava y = 2x a x + y = 12 má řešení:', ['[3; 6]', '[4; 8]', '[6; 12]'], 1, 'Dosadíme y = 2x: 3x = 12, x = 4 a y = 8.'],
      ['Soustava 2x + 2y = 6 a x + y = 3 má:', ['žádné řešení', 'jedno řešení', 'nekonečně mnoho řešení'], 2, 'První rovnice je dvojnásobkem druhé, popisují stejnou přímku.'],
      ['V pokladně je 18 desetikorunových a dvacetikorunových mincí v celkové hodnotě 250 Kč. Kolik je mezi nimi dvacetikorun?', ['7', '9', '11'], 0, '20x + 10(18 − x) = 250, tedy 10x = 70 a x = 7.']
    ],
    'financni-matematika-zs.html': [
      ['Roční úrok 5 % z 10 000 Kč je:', ['50 Kč', '500 Kč', '5 000 Kč'], 1, '10 000 · 0,05 = 500 Kč.'],
      ['Vklad 8 000 Kč se jednoduše úročí 4 % ročně. Za dva roky přibude:', ['320 Kč', '640 Kč', '653 Kč'], 1, 'Jeden roční úrok je 320 Kč, za dva roky při jednoduchém úročení 640 Kč.'],
      ['Za 1 euro zaplatíš 25,20 Kč. Kolik stojí 80 eur?', ['2 016 Kč', '2 520 Kč', '3 150 Kč'], 0, '80 · 25,20 = 2 016 Kč.'],
      ['Směnárna prodává euro za 25,40 Kč a účtuje poplatek 80 Kč. Za 200 eur zaplatíš:', ['5 000 Kč', '5 080 Kč', '5 160 Kč'], 2, '200 · 25,40 + 80 = 5 080 + 80 = 5 160 Kč.']
    ],
    'rysovani.html': [
      ['Kóta ve výkresu vyjadřuje:', ['barvu objektu', 'skutečný rozměr', 'pouze rozměr na papíře'], 1, 'Kóta uvádí skutečný rozměr bez ohledu na měřítko výkresu.'],
      ['Dvě různé rovnoběžky mají:', ['všude stejnou vzdálenost', 'jeden společný bod', 'vždy navzájem kolmý směr'], 0, 'Dvě různé rovnoběžky se neprotínají a jejich vzdálenost je stálá.'],
      ['V pravoúhlém promítání se běžně používá:', ['nárys, půdorys a bokorys', 'jen perspektivní obrázek', 'pouze síť tělesa'], 0, 'Tři základní pohledy jsou nárys, půdorys a bokorys.'],
      ['Výkres v měřítku 1 : 20 zobrazuje délku 6 cm. Skutečná délka je:', ['30 cm', '120 cm', '12 m'], 1, '6 · 20 = 120 cm.']
    ],
    'analyticka-geometrie-prostor.html': [
      ['Vektor AB pro A[1; 2; 3] a B[4; 6; 3] je:', ['(3; 4; 0)', '(5; 8; 6)', '(−3; −4; 0)'], 0, 'Odečteme souřadnice B − A: (3; 4; 0).'],
      ['Délka vektoru (2; −3; 6) je:', ['7', '9', '49'], 0, '√(2² + (−3)² + 6²) = √49 = 7.'],
      ['Přímky s řídicími vektory (1;2;3) a (2;4;6) jsou:', ['kolmé', 'rovnoběžné', 'mimoběžné vždy'], 1, 'Druhý vektor je dvojnásobkem prvního, proto jsou směry rovnoběžné.'],
      ['Rovina 2x − y + 3z − 5 = 0 má normálový vektor:', ['(2; −1; 3)', '(2; 1; −5)', '(x; y; z)'], 0, 'Koeficienty u x, y a z tvoří normálový vektor roviny.']
    ],
    'komplexni-cisla.html': [
      ['Pro z = 3 − 4i je reálná část:', ['−4', '3', '4'], 1, 'V algebraickém tvaru a + bi je reálná část a.'],
      ['Součet (2 + 3i) + (4 − i) je:', ['6 + 2i', '6 + 4i', '−2 + 4i'], 0, 'Sečteme zvlášť reálné a imaginární části.'],
      ['Součin (1 + i)(1 − i) je:', ['0', '1', '2'], 2, 'Jde o součin sdružených čísel: 1² − i² = 2.'],
      ['Absolutní hodnota čísla 3 − 4i je:', ['1', '5', '7'], 1, '|z| = √(3² + (−4)²) = 5.']
    ],
    'komplexni-rovnice.html': [
      ['Rovnice z + 2 = 5 + i má řešení:', ['3 + i', '7 + i', '3 − i'], 0, 'Odečteme 2: z = 3 + i.'],
      ['Kořeny rovnice z² + 1 = 0 jsou:', ['±1', '±i', 'jen i'], 1, 'z² = −1, proto z = i nebo z = −i.'],
      ['Rovnice z² − 4z + 13 = 0 má kořeny:', ['2 ± 3i', '−2 ± 3i', '4 ± 13i'], 0, 'Diskriminant je 16 − 52 = −36, kořeny jsou (4 ± 6i)/2 = 2 ± 3i.'],
      ['Kolik různých komplexních třetích odmocnin má nenulové číslo?', ['1', '2', '3'], 2, 'Nenulové komplexní číslo má právě tři různé třetí odmocniny.']
    ],
    'kruznice.html': [
      ['Kružnice se středem [2; −1] a poloměrem 3 má rovnici:', ['(x−2)²+(y+1)²=9', '(x+2)²+(y−1)²=3', 'x²+y²=9'], 0, 'Použijeme (x−m)² + (y−n)² = r².'],
      ['Bod [3; 4] leží na kružnici x² + y² = 25:', ['ano', 'ne', 'nelze určit'], 0, '3² + 4² = 25, proto bod na kružnici leží.'],
      ['Vzdálenost středu kružnice od tečny je:', ['menší než poloměr', 'rovna poloměru', 'větší než průměr'], 1, 'Poloměr vedený do bodu dotyku je na tečnu kolmý.'],
      ['Kružnice x² + y² − 6x + 4y − 3 = 0 má střed:', ['[3; −2]', '[−3; 2]', '[6; −4]'], 0, 'Doplněním na čtverce získáme (x−3)² + (y+2)² = 16.']
    ],
    'elipsa.html': [
      ['Elipsa x²/25 + y²/9 = 1 má hlavní poloosu:', ['3', '4', '5'], 2, 'Větší jmenovatel je a² = 25, tedy a = 5.'],
      ['Pro elipsu s a = 5 a b = 4 je výstřednost c:', ['1', '3', '9'], 1, 'c² = a² − b² = 25 − 16 = 9, tedy c = 3.'],
      ['Bod [0; 3] na elipse x²/16 + y²/9 = 1:', ['leží', 'neleží', 'je ohnisko'], 0, 'Po dosazení dostaneme 0 + 9/9 = 1.'],
      ['Elipsa se středem [2;−1] a poloosami 4 a 3 má rovnici:', ['(x−2)²/16+(y+1)²/9=1', '(x+2)²/4+(y−1)²/3=1', 'x²/16+y²/9=1'], 0, 'Souřadnice středu se objeví uvnitř závorek s opačnými znaménky.']
    ],
    'hyperbola-parabola.html': [
      ['Graf funkce y = x² je:', ['parabola', 'hyperbola', 'kružnice'], 0, 'Základní kvadratická funkce má graf paraboly.'],
      ['Parabola y² = 8x má parametr p v zápisu y² = 2px:', ['2', '4', '8'], 1, '2p = 8, proto p = 4.'],
      ['Hyperbola x²/9 − y²/16 = 1 má vrcholy:', ['[±3;0]', '[0;±4]', '[±9;0]'], 0, 'a² = 9, tedy a = 3 a vrcholy leží na ose x.'],
      ['Asymptoty hyperboly x²/9 − y²/4 = 1 jsou:', ['y=±2x/3', 'y=±3x/2', 'x=±3'], 0, 'Pro tento tvar platí y = ±(b/a)x = ±(2/3)x.']
    ],
    'vzajemna-poloha-kuzelosecky.html': [
      ['Přímka a kružnice mohou mít společných bodů:', ['jen 0 nebo 2', '0, 1 nebo 2', 'libovolně mnoho vždy'], 1, 'Přímka může být vnější, tečna nebo sečna.'],
      ['Je-li vzdálenost středu kružnice od přímky rovna poloměru, přímka je:', ['sečna', 'tečna', 'vnější'], 1, 'Rovnost vzdálenosti a poloměru znamená právě jeden bod dotyku.'],
      ['Po dosazení rovnice přímky do kuželosečky vznikne kvadratická rovnice s D > 0. Počet průsečíků je:', ['0', '1', '2'], 2, 'Kladný diskriminant dává dvě různá reálná řešení.'],
      ['Přímka y = 3 protíná parabolu y = x² v bodech s x:', ['±√3', '±3', 'jen √3'], 0, 'Z x² = 3 dostaneme dvě řešení x = ±√3.']
    ],
    'derivace.html': [
      ['Derivace funkce f(x)=x² je:', ['x', '2x', 'x³/3'], 1, 'Podle mocninného pravidla je (x²)′ = 2x.'],
      ['Derivace konstanty 7 je:', ['0', '1', '7'], 0, 'Konstantní funkce se nemění, její derivace je nula.'],
      ['Derivace f(x)=3x⁴−2x je:', ['12x³−2', '3x³−2', '12x⁴'], 0, 'Derivujeme člen po členu: (3x⁴)′=12x³ a (−2x)′=−2.'],
      ['Tečna ke grafu f(x)=x² v bodě x=2 má směrnici:', ['2', '4', '8'], 1, 'f′(x)=2x, tedy f′(2)=4.']
    ],
    'uziti-derivaci.html': [
      ['Je-li f′(x) > 0 na intervalu, funkce na něm:', ['roste', 'klesá', 'je konstantní'], 0, 'Kladná derivace znamená růst funkce.'],
      ['Stacionární body hledáme řešením:', ['f(x)=0', 'f′(x)=0', 'f″(x)=0 vždy'], 1, 'Ve vnitřním bodě definičního oboru je nutnou podmínkou extrému f′(x)=0.'],
      ['Funkce f(x)=x²−6x má minimum pro x:', ['−3', '3', '6'], 1, 'f′(x)=2x−6. Z f′(x)=0 vyjde x=3 a f″=2>0.'],
      ['Obdélník má obvod 20. Největší obsah má při rozměrech:', ['1 a 9', '4 a 6', '5 a 5'], 2, 'Při pevném obvodu má největší obsah čtverec.']
    ],
    'neurcity-integral.html': [
      ['∫x dx je:', ['x²/2 + C', '1 + C', 'x² + C'], 0, 'Zvýšíme exponent o 1 a vydělíme novým exponentem.'],
      ['∫3 dx je:', ['3x + C', 'x³ + C', '3 + C'], 0, 'Primitivní funkce ke konstantě 3 je 3x + C.'],
      ['∫(2x + 1) dx je:', ['x² + x + C', '2 + C', '2x² + x + C'], 0, 'Integrujeme člen po členu: ∫2x dx = x² a ∫1 dx = x.'],
      ['Který člen nesmí chybět u neurčitého integrálu?', ['absolutní hodnota vždy', 'integrační konstanta C', 'dolní mez'], 1, 'Všechny primitivní funkce se mohou lišit o konstantu.']
    ],
    'urcity-integral.html': [
      ['∫₀¹ 1 dx je:', ['0', '1', '2'], 1, 'Obsah obdélníku šířky 1 a výšky 1 je 1.'],
      ['∫₀² x dx je:', ['1', '2', '4'], 1, '[x²/2]₀² = 4/2 = 2.'],
      ['Je-li f(x) ≥ 0 na ⟨a,b⟩, určitý integrál představuje:', ['obsah pod grafem', 'délku grafu vždy', 'směrnici tečny'], 0, 'Pro nezápornou funkci odpovídá integrál obsahu mezi grafem a osou x.'],
      ['Hodnota ∫₋₁¹ x³ dx je:', ['−1/2', '0', '1/2'], 1, 'x³ je lichá funkce a integrujeme přes souměrný interval, proto je integrál nulový.']
    ]
  };

  const file = location.pathname.split('/').pop().toLowerCase();
  const bank = banks[file];
  if (!bank || document.querySelector('.grade-practice-section')) return;
  const sectionName = location.pathname.includes('/ss/') ? 'ss' : 'zs';
  const progressKey = 'mj_rocniky_progress_v1';
  const answerKey = `mj_rocniky_answers_v1:${sectionName}/${file}`;
  let solved = {};
  try { solved = JSON.parse(localStorage.getItem(answerKey) || '{}'); } catch (_) {}
  const section = document.createElement('section');
  section.className = 'cermat-practice-section grade-practice-section';
  section.id = 'rocnik-procvicovani';
  const score = () => Object.keys(solved).filter(key => solved[key]).length;
  if (score() === bank.length) {
    try {
      const verified = JSON.parse(localStorage.getItem('mj_grade_verified_v1') || '{}');
      verified[`${sectionName}/${file}`] = true;
      localStorage.setItem('mj_grade_verified_v1', JSON.stringify(verified));
    } catch (_) {}
  }
  section.innerHTML = `<div class="cermat-practice-head"><div><h2>Kontrolní procvičování</h2><p>První úloha je lehčí rozjezd, další odpovídají úrovni tématu. Pro započítání odpověz správně na první pokus bez otevření postupu a potom použij kontrolu.</p></div><span class="cermat-xp">${score()} / ${bank.length} správně na první pokus</span></div>` + bank.map((item, index) => `<article class="cermat-task ${solved[index] ? 'is-correct' : ''}" data-index="${index}"><div class="cermat-task-top"><span>Úloha ${index + 1}</span><span class="cermat-difficulty">${index ? 'úroveň ročníku' : 'lehký rozjezd'}</span></div><div class="cermat-question">${item[0]}</div><div class="cermat-options">${item[1].map((option, optionIndex) => `<label class="cermat-option"><input type="radio" name="gp-${file}-${index}" value="${optionIndex}"> ${option}</label>`).join('')}</div><button class="cermat-check" type="button">Zkontrolovat</button><span class="cermat-feedback">${solved[index] ? 'správně' : ''}</span><details class="cermat-solution"><summary>Zobrazit postup</summary>${item[3]}</details></article>`).join('');
  const main = document.querySelector('main') || document.querySelector('body > .wrap');
  const footer = main?.querySelector('footer');
  if (!main) return;
  if (!main.querySelector('.priklad, .example, .worked-example, .grade-worked-example')) {
    const worked = document.createElement('section');
    worked.className = 'grade-worked-example';
    worked.id = 'reseny-vzor';
    worked.innerHTML = `<div class="lesson-section-label">Řešený vzor</div><h2>Nejdřív se podívej na postup</h2><p><strong>Zadání:</strong> ${bank[0][0]}</p><p><strong>Výsledek:</strong> ${bank[0][1][bank[0][2]]}</p><p>${bank[0][3]}</p>`;
    main.insertBefore(worked, footer || null);
    const guideNav = main.querySelector('.grade-study-path nav');
    const practiceLink = guideNav?.querySelector('a[href="#rocnik-procvicovani"]');
    const hasSolvedLink = [...(guideNav?.querySelectorAll('a') || [])].some(anchor => /řešený vzor/i.test(anchor.textContent));
    if (guideNav && !hasSolvedLink) {
      const link = document.createElement('a');
      link.href = '#reseny-vzor';
      link.textContent = 'Řešený vzor';
      guideNav.insertBefore(link, practiceLink || null);
    }
  }
  main.insertBefore(section, footer || null);
  const nextStep = document.createElement('section');
  nextStep.className = 'grade-next-step';
  const overview = sectionName === 'ss' ? 'ss-rocniky.html' : 'rocniky.html';
  nextStep.innerHTML = `<div><span>Co dál</span><strong>${score() === bank.length ? 'Téma máš procvičené.' : 'Nejdřív oprav všechny chyby.'}</strong><p>Po správném vyřešení všech úloh na první pokus bez otevření postupu se téma uloží jako zvládnuté. Potom pokračuj následující kartou ve svém ročníku.</p></div><a href="${overview}">Zpět na svůj ročník →</a>`;
  main.insertBefore(nextStep, footer || null);
  const updateScore = () => {
    section.querySelector('.cermat-xp').textContent = `${score()} / ${bank.length} správně na první pokus`;
    const headline = nextStep.querySelector('strong');
    if (headline) headline.textContent = score() === bank.length ? 'Téma máš procvičené.' : 'Nejdřív oprav všechny chyby.';
  };
  section.querySelectorAll('.cermat-task').forEach(task => {
    const index = Number(task.dataset.index);
    const feedback = task.querySelector('.cermat-feedback');
    const solution = task.querySelector('.cermat-solution');
    let usedSolution = false, hadWrongAttempt = false;
    solution.addEventListener('toggle', () => { if (solution.open) usedSolution = true; });
    task.querySelector('.cermat-check').addEventListener('click', () => {
      const selected = task.querySelector('input:checked');
      if (!selected) { feedback.textContent = 'nejdřív vyber odpověď'; return; }
      if (Number(selected.value) !== bank[index][2]) {
        task.classList.remove('is-correct');
        hadWrongAttempt = true; feedback.textContent = 'Zatím ne. Zkus jinou možnost; tato úloha se teď do zvládnutí nezapočítá.';
        return;
      }
      if ((usedSolution || solution.open || hadWrongAttempt) && !solved[index]) {
        feedback.textContent = 'Správná možnost, ale po chybě nebo nápovědě bez započítání. Vrať se k úloze později a vyřeš ji samostatně.';
        return;
      }
      solved[index] = true;
      task.classList.add('is-correct');
      feedback.textContent = 'správně';
      try { localStorage.setItem(answerKey, JSON.stringify(solved)); } catch (_) {}
      updateScore();
      if (score() === bank.length) {
        let progress = {};
        try { progress = JSON.parse(localStorage.getItem(progressKey) || '{}'); } catch (_) {}
        const exactKey = `${sectionName}/${file}${location.hash && location.hash !== '#rocnik-procvicovani' ? location.hash : ''}`;
        progress[exactKey] = true;
        progress[`${sectionName}/${file}`] = true;
        try {
          localStorage.setItem(progressKey, JSON.stringify(progress));
          const verified = JSON.parse(localStorage.getItem('mj_grade_verified_v1') || '{}');
          verified[`${sectionName}/${file}`] = true;
          localStorage.setItem('mj_grade_verified_v1', JSON.stringify(verified));
        } catch (_) {}
        const guide = document.querySelector('.grade-study-path');
        const button = guide?.querySelector('button');
        guide?.classList.add('is-complete');
        if (button) {
          button.setAttribute('aria-pressed', 'true');
          button.textContent = '✓ Téma zvládnuto';
        }
      }
    });
  });
})();
