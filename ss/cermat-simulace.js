(() => {
  const procedure = '<span class="procedure-note">Na papír uveď celý postup řešení.</span>';
  const tests = {
    1: [
      { topic: 'Číselné obory', points: 1, type: 'short', prompt: 'Vypočítej: (3/5 − 0,25) : (7/20).', answer: 1, solution: '3/5 = 0,6 a 7/20 = 0,35. Platí (0,6 − 0,25) : 0,35 = 1.' },
      { topic: 'Algebraické výrazy', points: 1, type: 'short', prompt: 'Urči koeficient u členu x po úpravě výrazu (2x − 3)² − (x − 4)(x + 4).', answer: -12, solution: 'Výraz se upraví na 3x² − 12x + 25, hledaný koeficient je −12.' },
      { topic: 'Rovnice', points: 1, type: 'short', prompt: 'Vyřeš rovnici (3x − 5)/4 − (x + 1)/3 = 2.', answers: ['43/5', '8.6'], solution: 'Po vynásobení číslem 12: 9x − 15 − 4x − 4 = 24, tedy 5x = 43 a x = 43/5.' },
      { topic: 'Číselné obory', points: 1, type: 'short', prompt: 'Po slevě 15 % a následném připočtení 21% daně stojí výrobek 2 057 Kč. Jaká byla cena před slevou a daní?', answer: 2000, solution: 'Původní cena p splňuje p · 0,85 · 1,21 = 2 057. Odtud p = 2 000 Kč.' },
      { topic: 'Rovnice', points: 1, type: 'short', prompt: 'Vyřeš rovnici 2/(x − 1) = 3/(x + 2).', answer: 7, solution: 'Pro x ≠ 1, −2 platí 2(x + 2) = 3(x − 1), tedy x = 7.' },
      { topic: 'Algebraické výrazy', points: 2, type: 'multi', prompt: 'Je dán výraz E = (x² − 25)/(x² − x − 20). Výraz zkrať a pracuj s původními podmínkami. ' + procedure, parts: [
        { label: 'Hodnota E pro x = 0', answer: 1.25 }, { label: 'Vyloučené hodnoty x (odděl středníkem)', answers: ['-4;5', '5;-4'], placeholder: 'např. -4;5' }
      ], solution: 'E = (x − 5)(x + 5)/[(x − 5)(x + 4)] = (x + 5)/(x + 4), přičemž x ≠ 5 a x ≠ −4. Proto E(0) = 5/4 = 1,25.' },
      { topic: 'Rovnice a slovní úlohy', points: 2, type: 'multi', prompt: 'Tři vstupenky pro dospělé a dvě studentské stojí 860 Kč. Vstupenka pro dospělého je o 70 Kč dražší než studentská. ' + procedure, parts: [
        { label: 'Studentská vstupenka v Kč', answer: 130 }, { label: 'Vstupenka pro dospělého v Kč', answer: 200 }
      ], solution: 'Označme studentskou cenu s. Pak 3(s + 70) + 2s = 860, takže 5s = 650, s = 130 Kč a dospělý zaplatí 200 Kč.' },
      { topic: 'Funkce', points: 2, type: 'multi', prompt: 'Exponenciální funkce f(x) = a · 2ˣ prochází bodem [1; 12].', parts: [
        { label: 'Hodnota parametru a', answer: 6 }, { label: 'Hodnota f(4)', answer: 96 }
      ], solution: 'Z rovnosti 12 = a · 2 plyne a = 6. Potom f(4) = 6 · 16 = 96.' },
      { topic: 'Funkce', points: 2, type: 'multi', prompt: 'Je dána kvadratická funkce f(x) = x² − 4x − 5.', parts: [
        { label: 'Souřadnice vrcholu ve tvaru x;y', answer: '2;-9', placeholder: 'x;y' }, { label: 'Kladný nulový bod', answer: 5 }
      ], solution: 'f(x) = (x − 2)² − 9, vrchol je V[2; −9]. Rozklad f(x) = (x − 5)(x + 1) dává kladný nulový bod 5.' },
      { topic: 'Pravděpodobnost', points: 2, type: 'multi', prompt: 'V krabici je 5 bílých a 3 černé kuličky. Náhodně vytáhneme dvě bez vracení.', parts: [
        { label: 'Pravděpodobnost dvou černých', answers: ['3/28', '0.107142857'] }, { label: 'Pravděpodobnost různých barev', answers: ['15/28', '0.535714286'] }
      ], solution: 'P(dvě černé) = 3/8 · 2/7 = 3/28. Různé barvy lze vytáhnout ve dvou pořadích: 2 · 5/8 · 3/7 = 15/28.' },
      { topic: 'Analytická geometrie', points: 2, type: 'multi', prompt: 'Jsou dány body A[−2; 1] a B[4; 9].', parts: [
        { label: 'Střed úsečky AB ve tvaru x;y', answer: '1;5', placeholder: 'x;y' }, { label: 'Délka úsečky AB', answer: 10 }
      ], solution: 'Střed je [(−2 + 4)/2; (1 + 9)/2] = [1; 5]. Délka je √(6² + 8²) = 10.' },
      { topic: 'Posloupnosti', points: 3, type: 'multi', prompt: 'V aritmetické posloupnosti platí a₃ = 11 a a₈ = 31. ' + procedure, parts: [
        { label: 'Diference d', answer: 4 }, { label: 'První člen a₁', answer: 3 }, { label: 'Součet prvních 10 členů S₁₀', answer: 210 }
      ], solution: 'Mezi a₃ a a₈ je pět kroků, proto d = (31 − 11)/5 = 4. a₁ = 3, a₁₀ = 39 a S₁₀ = 10(3 + 39)/2 = 210.' },
      { topic: 'Planimetrie', points: 2, type: 'multi', prompt: 'Pravoúhlý trojúhelník má odvěsny délky 9 cm a 12 cm. ' + procedure, parts: [
        { label: 'Délka přepony v cm', answer: 15 }, { label: 'Poloměr vepsané kružnice v cm', answer: 3 }
      ], solution: 'Přepona je √(9² + 12²) = 15. Poloměr vepsané kružnice je (9 + 12 − 15)/2 = 3.' },
      { topic: 'Číselné obory', points: 3, type: 'multi', prompt: 'Nádrž má objem 0,72 m³ a je naplněna z 65 %. Poté se odčerpá 84 litrů. ' + procedure, parts: [
        { label: 'Původní množství vody v litrech', answer: 468 }, { label: 'Množství po odčerpání v litrech', answer: 384 }, { label: 'Zaplnění nádrže po odčerpání v %', answer: 53.33, tolerance: 0.02 }
      ], solution: '0,72 m³ = 720 l. Původně je 468 l, po odčerpání 384 l. Podíl 384/720 je přibližně 53,33 %.' },
      { topic: 'Statistika', points: 3, type: 'statements', prompt: 'Hodnoty 2, 4, 6, 8 mají postupně četnosti 1, 3, 4, 2. Rozhodni o tvrzeních.', statements: [
        { text: 'Aritmetický průměr je 5,4.', answer: true }, { text: 'Medián je 5.', answer: false }, { text: 'Modus je 6.', answer: true }
      ], solution: 'Součet deseti hodnot je 54, průměr 5,4. Pátá i šestá hodnota je 6, takže medián i modus jsou 6.' },
      { topic: 'Algebraické výrazy', points: 2, type: 'choice', prompt: 'Která úprava výrazu (x² − 9)/(x² + 5x + 6) je správná včetně podmínek?', options: ['(x − 3)/(x + 2), x ≠ −3; −2', '(x + 3)/(x + 2), x ≠ 3; −2', '(x − 3)/(x + 2), x ≠ −3', '(x − 3)/(x − 2), x ≠ −3; 2', 'x − 3, x ≠ −2'], answer: '(x − 3)/(x + 2), x ≠ −3; −2', solution: 'Rozložením a krácením dostaneme (x − 3)/(x + 2), původní podmínky jsou x ≠ −3 a x ≠ −2.' },
      { topic: 'Rovnice a nerovnice', points: 2, type: 'choice', prompt: 'Množina řešení nerovnice x² − 5x + 6 ≤ 0 je:', options: ['(−∞; 2⟩', '⟨2; 3⟩', '(2; 3)', '⟨3; +∞)', '(−∞; 2⟩ ∪ ⟨3; +∞)'], answer: '⟨2; 3⟩', solution: 'Výraz je (x − 2)(x − 3). Parabola je nekladná mezi kořeny včetně.' },
      { topic: 'Analytická geometrie', points: 2, type: 'choice', prompt: 'Která rovnice určuje přímku procházející bodem P[2; −1] a kolmou k přímce 3x − 2y + 4 = 0?', options: ['2x + 3y − 1 = 0', '3x − 2y − 8 = 0', '2x − 3y − 7 = 0', '3x + 2y − 4 = 0', 'x + y − 1 = 0'], answer: '2x + 3y − 1 = 0', solution: 'Kolmá směrnice je −2/3. Po dosazení bodu P vyjde 2x + 3y − 1 = 0.' },
      { topic: 'Posloupnosti', points: 2, type: 'choice', prompt: 'Geometrická posloupnost má a₁ = 5 a q = 2. Pro které n je aₙ = 160?', options: ['n = 5', 'n = 6', 'n = 7', 'n = 8', 'Takový člen neexistuje.'], answer: 'n = 6', solution: '5 · 2ⁿ⁻¹ = 160, tedy 2ⁿ⁻¹ = 32 = 2⁵ a n = 6.' },
      { topic: 'Funkce', points: 2, type: 'choice', prompt: 'Řešením rovnice log₃(x − 1) = 2 je:', options: ['x = 3', 'x = 7', 'x = 8', 'x = 10', 'x = 28'], answer: 'x = 10', solution: 'x − 1 = 3² = 9, tedy x = 10.' },
      { topic: 'Planimetrie', points: 2, type: 'choice', prompt: 'Dvě strany trojúhelníku mají délky 8 cm a 11 cm a jimi sevřený úhel má 60°. Jaký je obsah trojúhelníku?', options: ['11√3 cm²', '22√3 cm²', '44√3 cm²', '88√3 cm²', '44 cm²'], answer: '22√3 cm²', solution: 'S = 1/2 · 8 · 11 · sin 60° = 22√3 cm².' },
      { topic: 'Stereometrie', points: 2, type: 'choice', prompt: 'Do válcové nádoby s poloměrem podstavy 5 cm je zcela ponořena kovová koule o poloměru 3 cm. O kolik se zvýší hladina?', options: ['0,72 cm', '1,20 cm', '1,44 cm', '2,16 cm', '3,60 cm'], answer: '1,44 cm', solution: 'Objem koule je 36π cm³. Z rovnice 25πh = 36π vyjde h = 1,44 cm.' },
      { topic: 'Stereometrie', points: 2, type: 'choice', prompt: 'Pravidelný čtyřboký jehlan má hranu podstavy 10 cm a výšku 12 cm. Jaký je jeho povrch?', options: ['260 cm²', '300 cm²', '340 cm²', '360 cm²', '480 cm²'], answer: '360 cm²', solution: 'Stěnová výška je 13. Povrch je 100 + 4 · (10 · 13/2) = 360 cm².' },
      { topic: 'Planimetrie', points: 2, type: 'choice', prompt: 'Jaký je obsah kruhové výseče s poloměrem 9 cm a středovým úhlem 80°?', options: ['9π cm²', '18π cm²', '20π cm²', '27π cm²', '36π cm²'], answer: '18π cm²', solution: 'S = 80/360 · π · 9² = 18π cm².' },
      { topic: 'Planimetrie a analytika', points: 4, type: 'match', prompt: 'V soustavě souřadnic jsou vrcholy obdélníku A[0; 0], B[8; 0], C[8; 6], D[0; 6]. Bod P je střed strany AB. Přiřaď hodnoty.', choices: [['A', '6'], ['B', '8'], ['C', '10'], ['D', '24'], ['E', '2√13'], ['F', '48']], items: [
        { text: 'Délka úhlopříčky AC', answer: 'C' }, { text: 'Délka úsečky PD', answer: 'E' }, { text: 'Vzdálenost bodu P od přímky CD', answer: 'A' }, { text: 'Obsah trojúhelníku PCD', answer: 'D' }
      ], solution: '|AC| = 10, |PD| = 2√13, vzdálenost P od CD je 6 a obsah trojúhelníku PCD je 24.' }
    ],
    2: [
      { topic: 'Číselné obory', points: 1, type: 'short', prompt: 'Vypočítej: (√144 − 2³) : 0,5.', answer: 8, solution: '(12 − 8) : 0,5 = 8.' },
      { topic: 'Algebraické výrazy', points: 1, type: 'short', prompt: 'Urči koeficient u členu x po úpravě výrazu (x + 2)(3x − 5) − 3x(x − 1).', answer: 4, solution: 'Po roznásobení zůstane 4x − 10, koeficient je 4.' },
      { topic: 'Rovnice', points: 1, type: 'short', prompt: 'Vyřeš rovnici (2x + 3)/5 + (x − 1)/2 = 7.', answers: ['23/3', '7.666666667'], solution: 'Po vynásobení 10 dostaneme 9x + 1 = 70, tedy x = 23/3.' },
      { topic: 'Číselné obory', points: 1, type: 'short', prompt: 'Ovoce sušením ztratí 18 % své hmotnosti. Jakou hmotnost v kg mělo před sušením, jestliže sušené váží 369 kg?', answer: 450, solution: '0,82m = 369, tedy m = 450 kg.' },
      { topic: 'Rovnice', points: 1, type: 'short', prompt: 'Vyřeš rovnici 5/(x + 1) = 2/(x − 2).', answer: 4, solution: '5(x − 2) = 2(x + 1), tedy 3x = 12 a x = 4.' },
      { topic: 'Algebraické výrazy', points: 2, type: 'multi', prompt: 'Je dán výraz E = (x² − 9)/(x² − 5x + 6). Výraz zkrať a pracuj s původními podmínkami. ' + procedure, parts: [
        { label: 'Hodnota E pro x = 1', answer: -4 }, { label: 'Vyloučené hodnoty x', answers: ['2;3', '3;2'] }
      ], solution: 'E = (x + 3)/(x − 2), x ≠ 2, 3. Proto E(1) = −4.' },
      { topic: 'Rovnice a slovní úlohy', points: 2, type: 'multi', prompt: 'Tři sešity a dvě pera stojí 250 Kč. Sešit je o 30 Kč dražší než pero. ' + procedure, parts: [
        { label: 'Cena pera v Kč', answer: 32 }, { label: 'Cena sešitu v Kč', answer: 62 }
      ], solution: '3(p + 30) + 2p = 250, odtud p = 32 Kč a sešit stojí 62 Kč.' },
      { topic: 'Funkce', points: 2, type: 'multi', prompt: 'Pro základ a > 1 platí logₐ81 = 4.', parts: [
        { label: 'Hodnota základu a', answer: 3 }, { label: 'Hodnota logₐ(1/27)', answer: -3 }
      ], solution: 'a⁴ = 81, tedy a = 3. Proto log₃(1/27) = −3.' },
      { topic: 'Funkce', points: 2, type: 'multi', prompt: 'Je dána kvadratická funkce f(x) = −x² + 6x − 5.', parts: [
        { label: 'Souřadnice vrcholu ve tvaru x;y', answer: '3;4' }, { label: 'Menší nulový bod', answer: 1 }
      ], solution: 'f(x) = −(x − 3)² + 4, vrchol je V[3; 4]. Nulové body jsou 1 a 5.' },
      { topic: 'Pravděpodobnost', points: 2, type: 'multi', prompt: 'V sáčku jsou 4 červené a 6 modrých žetonů. Vytáhneme dva bez vracení.', parts: [
        { label: 'Pravděpodobnost stejné barvy', answers: ['7/15', '0.466666667'] }, { label: 'Pravděpodobnost alespoň jednoho červeného', answers: ['2/3', '0.666666667'] }
      ], solution: 'Stejná barva má pravděpodobnost [C(4,2) + C(6,2)]/C(10,2) = 7/15. Alespoň jeden červený: 1 − C(6,2)/C(10,2) = 2/3.' },
      { topic: 'Analytická geometrie', points: 2, type: 'multi', prompt: 'Jsou dány body A[1; −2] a B[7; 6].', parts: [
        { label: 'Střed úsečky AB ve tvaru x;y', answer: '4;2' }, { label: 'Délka úsečky AB', answer: 10 }
      ], solution: 'Střed je [4; 2] a délka √(6² + 8²) = 10.' },
      { topic: 'Posloupnosti', points: 3, type: 'multi', prompt: 'V geometrické posloupnosti s kladným kvocientem platí a₂ = 6 a a₅ = 162. ' + procedure, parts: [
        { label: 'Kvocient q', answer: 3 }, { label: 'První člen a₁', answer: 2 }, { label: 'Součet prvních 5 členů S₅', answer: 242 }
      ], solution: 'q³ = 162/6 = 27, proto q = 3. a₁ = 2 a S₅ = 242.' },
      { topic: 'Planimetrie', points: 2, type: 'multi', prompt: 'Rovnoramenný lichoběžník má základny 16 cm a 10 cm a rameno 5 cm. ' + procedure, parts: [
        { label: 'Výška lichoběžníku v cm', answer: 4 }, { label: 'Obsah lichoběžníku v cm²', answer: 52 }
      ], solution: 'Odchylka ramene je 3 cm, výška √(5² − 3²) = 4 cm a obsah je 52 cm².' },
      { topic: 'Číselné obory', points: 3, type: 'multi', prompt: 'Na mapě v měřítku 1 : 25 000 měří trasa 7,2 cm. Chodec jde rychlostí 4,5 km/h. Náhradní trasa je o 25 % delší. ' + procedure, parts: [
        { label: 'Délka původní trasy v km', answer: 1.8 }, { label: 'Čas původní trasy v minutách', answer: 24 }, { label: 'Délka náhradní trasy v km', answer: 2.25 }
      ], solution: 'Původní trasa měří 1,8 km, chůze trvá 24 minut a náhradní trasa měří 2,25 km.' },
      { topic: 'Statistika', points: 3, type: 'statements', prompt: 'Hodnoty 1, 3, 5, 7 mají postupně četnosti 2, 4, 3, 1. Rozhodni o tvrzeních.', statements: [
        { text: 'Aritmetický průměr je 3,6.', answer: true }, { text: 'Medián je 4.', answer: false }, { text: 'Modus je 3.', answer: true }
      ], solution: 'Součet je 36, průměr 3,6. Pátá i šestá hodnota je 3, takže medián i modus jsou 3.' },
      { topic: 'Algebraické výrazy', points: 2, type: 'choice', prompt: 'Která úprava výrazu (4x² − 1)/(2x² + 5x + 2) je správná včetně podmínek?', options: ['(2x − 1)/(x + 2), x ≠ −1/2; −2', '(2x + 1)/(x + 2), x ≠ 1/2; −2', '(2x − 1)/(x − 2), x ≠ −1/2; 2', '(2x − 1)/(x + 2), x ≠ −2', '2x − 1, x ≠ −1/2'], answer: '(2x − 1)/(x + 2), x ≠ −1/2; −2', solution: 'Po rozkladu a krácení vyjde (2x − 1)/(x + 2), x ≠ −1/2 a x ≠ −2.' },
      { topic: 'Rovnice a nerovnice', points: 2, type: 'choice', prompt: 'Množina řešení nerovnice (x + 1)/(x − 3) > 0 je:', options: ['(−∞; −1) ∪ (3; +∞)', '(−1; 3)', '⟨−1; 3⟩', '(−∞; 3)', '(−1; +∞)'], answer: '(−∞; −1) ∪ (3; +∞)', solution: 'Podíl je kladný nalevo od −1 a napravo od 3.' },
      { topic: 'Analytická geometrie', points: 2, type: 'choice', prompt: 'Jaká je vzdálenost bodu P[3; −1] od přímky 4x − 3y + 5 = 0?', options: ['2', '3', '4', '5', '20'], answer: '4', solution: 'Vzdálenost je |12 + 3 + 5|/5 = 4.' },
      { topic: 'Posloupnosti', points: 2, type: 'choice', prompt: 'Aritmetická posloupnost má a₁ = 4 a d = 3. Jaký je součet prvních 20 členů?', options: ['610', '620', '640', '650', '670'], answer: '650', solution: 'a₂₀ = 61 a S₂₀ = 20(4 + 61)/2 = 650.' },
      { topic: 'Funkce', points: 2, type: 'choice', prompt: 'Řešením rovnice 2ˣ⁺¹ = 8ˣ⁻¹ je:', options: ['x = −2', 'x = −1', 'x = 1', 'x = 2', 'x = 4'], answer: 'x = 2', solution: 'x + 1 = 3x − 3, tedy x = 2.' },
      { topic: 'Planimetrie', points: 2, type: 'choice', prompt: 'Obsahy dvou podobných trojúhelníků jsou v poměru 25 : 49. Strana menšího má 15 cm. Jak dlouhá je odpovídající strana většího?', options: ['18 cm', '20 cm', '21 cm', '24 cm', '29,4 cm'], answer: '21 cm', solution: 'Poměr délek je 5 : 7, proto větší strana měří 15 · 7/5 = 21 cm.' },
      { topic: 'Stereometrie', points: 2, type: 'choice', prompt: 'Rotační kužel má poloměr podstavy 6 cm a výšku 8 cm. Jaký je jeho povrch?', options: ['48π cm²', '60π cm²', '72π cm²', '96π cm²', '120π cm²'], answer: '96π cm²', solution: 'Strana kužele je 10 cm. Povrch je 36π + 60π = 96π cm².' },
      { topic: 'Stereometrie', points: 2, type: 'choice', prompt: 'Poloměr koule se zvětší o 20 %. O kolik procent se zvětší její objem?', options: ['20 %', '44 %', '60 %', '72,8 %', '120 %'], answer: '72,8 %', solution: 'Objem se násobí 1,2³ = 1,728, tedy vzroste o 72,8 %.' },
      { topic: 'Planimetrie', points: 2, type: 'choice', prompt: 'Jaký je obsah pravidelného šestiúhelníku se stranou 4 cm?', options: ['12√3 cm²', '16√3 cm²', '20√3 cm²', '24√3 cm²', '48√3 cm²'], answer: '24√3 cm²', solution: 'Šest trojúhelníků má dohromady obsah 6 · (4²√3/4) = 24√3 cm².' },
      { topic: 'Planimetrie a analytika', points: 4, type: 'match', prompt: 'V soustavě souřadnic jsou vrcholy obdélníku A[−2; 1], B[4; 1], C[4; 5], D[−2; 5]. Bod P je střed strany BC. Přiřaď hodnoty.', choices: [['A', '6'], ['B', '12'], ['C', '2√10'], ['D', '2√13'], ['E', '24'], ['F', '10']], items: [
        { text: 'Délka úhlopříčky AC', answer: 'D' }, { text: 'Délka úsečky DP', answer: 'C' }, { text: 'Vzdálenost bodu P od přímky AD', answer: 'A' }, { text: 'Obsah trojúhelníku APD', answer: 'B' }
      ], solution: '|AC| = 2√13, |DP| = 2√10, vzdálenost P od AD je 6 a obsah trojúhelníku APD je 12.' }
    ]
  };

  const variant = Number(document.body.dataset.variant);
  const tasks = tests[variant];
  const host = document.querySelector('#tasks');
  if (!tasks || !host) return;
  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const clean = value => String(value ?? '').trim().replace(/\s/g, '').replace(/,/g, '.').replace(/−/g, '-').toLowerCase();
  const isCorrect = (value, expected, tolerance = 0.011) => (Array.isArray(expected) ? expected : [expected]).some(answer => typeof answer === 'number' ? Number.isFinite(Number(clean(value))) && Math.abs(Number(clean(value)) - answer) <= tolerance : clean(value) === clean(answer));

  function renderInput(task, index) {
    if (task.type === 'choice') return `<div class="options">${task.options.map(option => `<label class="option"><input type="radio" name="q${index}" value="${escapeHtml(option)}"> ${option}</label>`).join('')}</div>`;
    if (task.type === 'statements') return `<div class="statement-list">${task.statements.map((statement, part) => `<div class="statement-row"><span>${statement.text}</span><label><input type="radio" name="q${index}_${part}" value="ano"> Ano</label><label><input type="radio" name="q${index}_${part}" value="ne"> Ne</label></div>`).join('')}</div>`;
    if (task.type === 'multi') return `<div class="multi-inputs">${task.parts.map((part, partIndex) => `<label><span>${part.label}</span><input class="answer-input" name="q${index}_${partIndex}" placeholder="${escapeHtml(part.placeholder || 'zapiš odpověď')}"></label>`).join('')}</div>`;
    if (task.type === 'match') return `<div class="match-box"><div class="match-choices">${task.choices.map(choice => `<span><b>${choice[0]}</b> ${choice[1]}</span>`).join('')}</div>${task.items.map((item, partIndex) => `<div class="match-row"><span>${partIndex + 1}. ${item.text}</span><div>${task.choices.map(choice => `<label><input type="radio" name="q${index}_${partIndex}" value="${choice[0]}"> ${choice[0]}</label>`).join('')}</div></div>`).join('')}</div>`;
    return `<input class="answer-input" name="q${index}" placeholder="zapiš výsledek">`;
  }
  host.innerHTML = tasks.map((task, index) => `<article class="task"><div class="task-head"><span class="task-num">Úloha ${index + 1} · ${task.points} ${task.points === 1 ? 'bod' : 'body'}</span><span class="topic">${index < 14 ? 'otevřená' : 'uzavřená'} · ${task.topic}</span></div><div class="question">${task.prompt}</div>${renderInput(task, index)}<div class="solution"><strong>Řešení:</strong> ${task.solution}</div></article>`).join('');
  const inputs = [...host.querySelectorAll('input')];
  const cards = [...host.children];
  const valueOf = name => host.querySelector(`input[name="${name}"]:checked`)?.value ?? host.querySelector(`input[name="${name}"]:not([type=radio])`)?.value ?? '';
  function taskScore(task, index) {
    if (task.type === 'statements') return task.statements.reduce((sum, statement, part) => sum + (valueOf(`q${index}_${part}`) === (statement.answer ? 'ano' : 'ne') ? 1 : 0), 0);
    if (task.type === 'multi') return task.parts.reduce((sum, part, partIndex) => sum + (isCorrect(valueOf(`q${index}_${partIndex}`), part.answers || part.answer, part.tolerance) ? 1 : 0), 0);
    if (task.type === 'match') return task.items.reduce((sum, item, partIndex) => sum + (valueOf(`q${index}_${partIndex}`) === item.answer ? 1 : 0), 0);
    if (task.type === 'choice') return valueOf(`q${index}`) === task.answer ? task.points : 0;
    return isCorrect(valueOf(`q${index}`), task.answers || task.answer, task.tolerance) ? task.points : 0;
  }
  function taskFilled(task, index) {
    if (task.type === 'statements') return task.statements.every((_, part) => valueOf(`q${index}_${part}`));
    if (task.type === 'multi') return task.parts.every((_, part) => valueOf(`q${index}_${part}`));
    if (task.type === 'match') return task.items.every((_, part) => valueOf(`q${index}_${part}`));
    return Boolean(valueOf(`q${index}`));
  }
  const pointTotal = tasks.reduce((sum, task) => sum + task.points, 0);
  if (tasks.length !== 25 || pointTotal !== 50 || tasks.slice(0, 14).some(task => ['choice', 'statements', 'match'].includes(task.type)) || tasks.slice(14).some(task => ['short', 'multi'].includes(task.type))) console.error('Simulace nemá očekávanou strukturu.');
  const progress = document.querySelector('#test-progress');
  const updateProgress = () => { progress.textContent = `${tasks.filter(taskFilled).length} z 25 vyplněno`; };
  const draftKey = `maturita-rozepsany-test:cermat-simulace-${variant}`;
  function saveDraft() { const data = {}; inputs.forEach(input => { data[input.name + (input.type === 'radio' ? ':' + input.value : '')] = input.type === 'radio' ? input.checked : input.value; }); localStorage.setItem(draftKey, JSON.stringify(data)); }
  try { const data = JSON.parse(localStorage.getItem(draftKey) || '{}'); inputs.forEach(input => { const key = input.name + (input.type === 'radio' ? ':' + input.value : ''); if (key in data) input.type === 'radio' ? input.checked = Boolean(data[key]) : input.value = data[key]; }); } catch (_) {}
  inputs.forEach(input => { input.oninput = input.onchange = () => { saveDraft(); updateProgress(); }; });
  let remaining = 8100, running = false, endTime, timerId;
  const timer = document.querySelector('#test-timer'), start = document.querySelector('#test-start');
  function updateClock() { if (running) remaining = Math.max(0, Math.ceil((endTime - Date.now()) / 1000)); timer.textContent = [remaining / 3600, remaining % 3600 / 60, remaining % 60].map(value => String(Math.floor(value)).padStart(2, '0')).join(':'); if (!remaining) { running = false; clearInterval(timerId); start.textContent = 'Čas vypršel'; } }
  start.onclick = () => { if (!running && remaining) { running = true; endTime = Date.now() + remaining * 1000; timerId = setInterval(updateClock, 500); start.textContent = 'Běží…'; } };
  document.querySelector('#test-pause').onclick = () => { if (running) { remaining = Math.ceil((endTime - Date.now()) / 1000); running = false; clearInterval(timerId); start.textContent = 'Pokračovat'; updateClock(); } };
  const topicLinks = { 'Číselné obory': 'prakticke-pocitani.html', 'Algebraické výrazy': 'algebraicke-vyrazy.html', 'Rovnice': 'kvadraticke.html', 'Rovnice a slovní úlohy': 'soustavy.html', 'Rovnice a nerovnice': 'kvadraticke.html', 'Funkce': 'funkce.html', 'Posloupnosti': 'posloupnosti.html', 'Planimetrie': 'planimetrie.html', 'Stereometrie': 'stereometrie.html', 'Analytická geometrie': 'analyticka-geometrie-rovina.html', 'Pravděpodobnost': 'kombinatorika-pravdepodobnost.html', 'Statistika': 'kombinatorika-pravdepodobnost.html', 'Planimetrie a analytika': 'planimetrie.html' };
  document.querySelector('#test-submit').onclick = () => {
    let points = 0; const lost = {};
    cards.forEach((card, index) => { const gained = taskScore(tasks[index], index); points += gained; lost[tasks[index].topic] = (lost[tasks[index].topic] || 0) + tasks[index].points - gained; card.className = 'task ' + (gained === tasks[index].points ? 'correct' : gained ? 'partial' : 'wrong'); card.querySelector('.task-num').textContent = `Úloha ${index + 1} · ${gained}/${tasks[index].points} b.`; });
    document.body.classList.add('submitted');
    const bestKey = `maturita-simulace-${variant}-best`; let best = Number(localStorage.getItem(bestKey)) || 0; const currentXp = Number(localStorage.getItem('maturita-xp')) || 0; const gain = Math.max(0, points - best) * 5;
    if (points > best) { best = points; localStorage.setItem(bestKey, points); localStorage.setItem('maturita-xp', currentXp + gain); }
    const weakTopics = Object.entries(lost).filter(([, value]) => value > 0).sort((a, b) => b[1] - a[1]).slice(0, 3);
    localStorage.setItem('maturita-posledni-vysledek', JSON.stringify({ test: `simulace ${variant}`, points, topics: weakTopics.map(([topic]) => topic) }));
    const followUp = weakTopics.length ? `<div class="result-next"><p>Nejvíc bodů můžeš získat zpět zde:</p><ul>${weakTopics.map(([topic, value]) => `<li><a href="${topicLinks[topic] || 'maturita-okruhy.html'}">${topic} · ztráta ${value} b. →</a></li>`).join('')}</ul></div>` : '';
    const result = document.querySelector('#test-result'); result.classList.add('show'); result.innerHTML = `<strong>${points} z 50 bodů (${points * 2} %)</strong><br>${points >= 17 ? 'Hranici úspěšnosti jsi překročil/a.' : `K hranici 17 bodů chybí ${17 - points} bodů.`}<br>Nejlepší výsledek: ${best} bodů · ${gain ? `získáváš <b>${gain} XP</b>` : 'žádné nové XP'}<br><a href="#tasks">Projít řešení ↑</a>${followUp}`; result.scrollIntoView({ behavior: 'smooth' });
  };
  document.querySelector('#test-clear').onclick = () => { inputs.forEach(input => input.type === 'radio' ? input.checked = false : input.value = ''); cards.forEach(card => card.className = 'task'); document.body.classList.remove('submitted'); document.querySelector('#test-result').classList.remove('show'); localStorage.removeItem(draftKey); updateProgress(); };
  updateProgress(); updateClock();
})();
