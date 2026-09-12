(() => {
  if (window.__mathJasneSiteLoaded) return;
  window.__mathJasneSiteLoaded = true;
  const pages = [
    [
      "o-webu.html",
      "O webu a ukládání studijních výsledků"
    ],
    [
      "zs/cisla-zs.html",
      "Celá a racionální čísla, mocniny"
    ],
    [
      "zs/prijimacky.html",
      "Přijímačky"
    ],
    [
      "zs/procenta-uloha-8-vice.html",
      "Procenta a finanční matematika"
    ],
    [
      "zs/rovinne-utvary.html",
      "Rovinné útvary"
    ],
    [
      "zs/rovnice.html",
      "Rovnice a nerovnice"
    ],
    [
      "zs/slovni-ulohy.html",
      "Slovní úlohy"
    ],
    [
      "zs/telesa.html",
      "Tělesa"
    ],
    [
      "zs/vyrazy.html",
      "Algebraické výrazy"
    ],
    [
      "zs/zlomky-odmocniny.html",
      "Zlomky a odmocniny"
    ],
    [
      "ss/analyticka-geometrie-rovina.html",
      "Analytická geometrie lineárních útvarů v rovině"
    ],
    [
      "ss/algebraicke-vyrazy.html",
      "Algebraické a lomené výrazy"
    ],
    [
      "ss/exp-log-funkce.html",
      "Exponenciální a logaritmické funkce"
    ],
    [
      "ss/funkce.html",
      "Funkce"
    ],
    [
      "ss/goniometrie.html",
      "Goniometrické funkce"
    ],
    [
      "ss/kombinatorika-pravdepodobnost.html",
      "Kombinatorika a pravděpodobnost"
    ],
    [
      "ss/kvadraticke.html",
      "Kvadratické funkce, rovnice a nerovnice"
    ],
    [
      "ss/logika-mnoziny.html",
      "Logika a množiny"
    ],
    [
      "ss/maturita.html",
      "Maturita"
    ],
    [
      "ss/maturita-test-1.html",
      "Ověření základů 1"
    ],
    [
      "ss/maturita-test-2.html",
      "Ověření základů 2"
    ],
    [
      "ss/cermat-simulace-1.html",
      "CERMAT simulace 1"
    ],
    [
      "ss/cermat-simulace-2.html",
      "CERMAT simulace 2"
    ],
    [
      "ss/mocniny.html",
      "Mocniny a odmocniny"
    ],
    [
      "ss/planimetrie.html",
      "Planimetrie"
    ],
    [
      "ss/prakticke-pocitani.html",
      "Procenta, poměr a jednotky"
    ],
    [
      "ss/posloupnosti.html",
      "Posloupnosti a řady"
    ],
    [
      "ss/stereometrie.html",
      "Stereometrie"
    ],
    [
      "zs/ano-ne-vice.html",
      "Úlohy ano/ne"
    ],
    [
      "zs/financni-matematika-zs.html",
      "Finanční matematika"
    ],
    [
      "zs/geometrie.html",
      "Obvod, obsah a Pythagorova věta"
    ],
    [
      "zs/jpz-2026-test-a.html",
      "JPZ 2026 — test A"
    ],
    [
      "zs/jpz-2026-test-b.html",
      "JPZ 2026 — test B"
    ],
    [
      "zs/jpz-2026-test-c.html",
      "JPZ 2026 — test C"
    ],
    [
      "zs/jpz-2026-test-d.html",
      "JPZ 2026 — test D"
    ],
    [
      "zs/konstrukcni-ulohy-vice.html",
      "Konstrukční úlohy"
    ],
    [
      "zs/konstrukcni-ulohy.html",
      "Konstrukční úlohy"
    ],
    [
      "zs/nestandardni-ulohy-vice.html",
      "Nestandardní aplikační úloha"
    ],
    [
      "zs/planimetrie-vice.html",
      "Planimetrie"
    ],
    [
      "zs/prevody-jednotek.html",
      "Převody jednotek a výpočty"
    ],
    [
      "zs/prirazovaci-ulohy-vice.html",
      "Přiřazovací úloha"
    ],
    [
      "zs/rocniky.html",
      "Podle ročníku"
    ],
    [
      "zs/rovnice-vice.html",
      "Lineární rovnice"
    ],
    [
      "zs/rysovani.html",
      "Základy rýsování"
    ],
    [
      "zs/slovni-ulohy-pomer-umernost-vice.html",
      "Úměrnost a poměr"
    ],
    [
      "zs/slovni-ulohy-rovnice-vice.html",
      "Slovní úloha na rovnici"
    ],
    [
      "zs/soustavy-rovnic-zs.html",
      "Soustavy rovnic"
    ],
    [
      "zs/stereometrie-vice.html",
      "Stereometrie a tělesa"
    ],
    [
      "zs/statistika-funkce-zs.html",
      "Statistika, diagramy a funkce pro 9. třídu"
    ],
    [
      "zs/vyber-a-e-vice.html",
      "Výběr z možností A–E"
    ],
    [
      "zs/vyrazy-vice.html",
      "Mocniny, odmocniny a algebraické výrazy"
    ],
    [
      "ss/absolutni-hodnoty.html",
      "Absolutní hodnoty"
    ],
    [
      "ss/analyticka-geometrie-prostor.html",
      "Analytická geometrie lineárních útvarů v prostoru"
    ],
    [
      "ss/derivace.html",
      "Limity a derivace funkce"
    ],
    [
      "ss/elipsa.html",
      "Analytická geometrie elipsy"
    ],
    [
      "ss/exp-log-rovnice.html",
      "Exponenciální a logaritmické rovnice a nerovnice"
    ],
    [
      "ss/gon-vzorce.html",
      "Goniometrické vzorce a rovnice"
    ],
    [
      "ss/hyperbola-parabola.html",
      "Analytická geometrie hyperboly a paraboly"
    ],
    [
      "ss/komplexni-cisla.html",
      "Komplexní čísla"
    ],
    [
      "ss/komplexni-rovnice.html",
      "Řešení rovnic v oboru komplexních čísel"
    ],
    [
      "ss/kruznice.html",
      "Analytická geometrie kružnice"
    ],
    [
      "ss/neurcity-integral.html",
      "Neurčitý integrál"
    ],
    [
      "ss/soustavy.html",
      "Soustavy rovnic"
    ],
    [
      "ss/ss-rocniky.html",
      "Podle ročníku SŠ"
    ],
    [
      "ss/urcity-integral.html",
      "Určitý integrál, užití integrálů"
    ],
    [
      "ss/uziti-derivaci.html",
      "Užití derivací"
    ],
    [
      "ss/vzajemna-poloha-kuzelosecky.html",
      "Vzájemná poloha přímky a kuželosečky"
    ]
  ];

  const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const searchAliases = {
    'zs/cisla-zs.html': 'desetinná čísla dělitelnost nsd nsn prvočísla záporná čísla',
    'zs/rovinne-utvary.html': 'kružnice kruh podobnost trojúhelník obvod obsah úhly',
    'zs/statistika-funkce-zs.html': 'průměr medián modus rozpětí diagram graf lineární kvadratická funkce nepřímá úměrnost',
    'zs/telesa.html': 'krychle kvádr válec hranol jehlan kužel koule objem povrch',
    'zs/rovnice.html': 'lineární rovnice nerovnice neznámá',
    'zs/slovni-ulohy.html': 'slovní úlohy rychlost práce směsi věk'
  };
  window.mathJasneSearch = (query) => {
    const needle = normalize(query);
    return pages.filter(([path, title]) => normalize(`${title} ${searchAliases[path] || ''}`).includes(needle)).map(([path, title]) => ({ path, title }));
  };

  const current = location.pathname.replace(/\\/g, '/').toLowerCase();
  const position = pages.findIndex(([path]) => current.endsWith('/' + path) || current.endsWith(path));
  const pageFooter = document.querySelector('footer');
  if (pageFooter && !pageFooter.querySelector('.site-footer-links')) {
    const rootPrefix = current.includes('/zs/') || current.includes('/ss/') ? '../' : '';
    const footerLinks = document.createElement('nav');
    footerLinks.className = 'site-footer-links';
    footerLinks.setAttribute('aria-label', 'Spodní navigace');
    footerLinks.innerHTML = `<a href="${rootPrefix}index.html">Hlavní stránka</a><a href="${rootPrefix}vyhledavani.html">Vyhledávání</a><a href="${rootPrefix}o-webu.html">O webu a ukládání dat</a>`;
    pageFooter.append(footerLinks);
  }
  if (position < 0 || document.body.dataset.noStudyTools === 'true') return;

  if (current.includes('/ss/') && !current.endsWith('/ss/maturita.html') && !current.endsWith('/ss/ss-rocniky.html')) {
    const oralOnly = [
      'komplexni-cisla.html', 'komplexni-rovnice.html', 'analyticka-geometrie-prostor.html',
      'kruznice.html', 'elipsa.html', 'hyperbola-parabola.html', 'vzajemna-poloha-kuzelosecky.html',
      'derivace.html', 'uziti-derivaci.html', 'neurcity-integral.html', 'urcity-integral.html'
    ];
    const file = current.split('/').pop();
    const scope = document.createElement('aside');
    const onlyOral = oralOnly.includes(file);
    scope.className = `lesson-scope ${onlyOral ? 'scope-oral' : 'scope-cermat'}`;
    scope.innerHTML = onlyOral
      ? '<strong>Ústní zkouška · rozšiřující látka</strong>Toto téma není součástí běžné přípravy na didaktický test CERMAT. Uč se ho podle požadavků své školy k ústní zkoušce.'
      : '<strong>CERMAT + ústní zkouška</strong>Základní části tohoto tématu využiješ v didaktickém testu. Pokročilejší odstavce a odvození jsou navíc pro školní ústní zkoušku.';
    const main = document.querySelector('main');
    const marker = main?.querySelector('.source-note');
    if (main) marker ? marker.insertAdjacentElement('afterend', scope) : main.insertBefore(scope, main.firstChild);
  }

  const cermatPracticePages = [
    'prakticke-pocitani.html', 'logika-mnoziny.html', 'mocniny.html', 'algebraicke-vyrazy.html',
    'funkce.html', 'kvadraticke.html', 'soustavy.html', 'exp-log-funkce.html', 'exp-log-rovnice.html',
    'goniometrie.html', 'gon-vzorce.html', 'posloupnosti.html', 'planimetrie.html', 'stereometrie.html',
    'analyticka-geometrie-rovina.html', 'kombinatorika-pravdepodobnost.html', 'absolutni-hodnoty.html'
  ];
  if (current.includes('/ss/') && cermatPracticePages.includes(current.split('/').pop())) {
    const practiceScript = document.createElement('script');
    practiceScript.src = 'cermat-practice.js';
    practiceScript.async = false;
    document.body.append(practiceScript);
  }

  const lessonPages = [
    ['slovni-ulohy.html', 'slovni-ulohy', 'Aritmetika a početní operace'],
    ['prevody-jednotek.html', 'prevody', 'Převody jednotek a výpočty'],
    ['zlomky-odmocniny.html', 'zlomky', 'Zlomky'],
    ['vyrazy-vice.html', 'mocniny', 'Mocniny, odmocniny a výrazy'],
    ['rovnice-vice.html', 'rovnice', 'Lineární rovnice'],
    ['slovni-ulohy-rovnice-vice.html', 'slovni-ulohy-rovnice', 'Slovní úloha na rovnici'],
    ['slovni-ulohy-pomer-umernost-vice.html', 'slovni-ulohy-pomer-umernost', 'Úměrnost a poměr'],
    ['procenta-uloha-8-vice.html', 'procenta-uloha-8', 'Procenta'],
    ['konstrukcni-ulohy-vice.html', 'konstrukcni-ulohy', 'Konstrukční úlohy'],
    ['planimetrie-vice.html', 'geometrie', 'Planimetrie'],
    ['stereometrie-vice.html', 'objemy', 'Objemy těles'],
    ['ano-ne-vice.html', 'ano-ne', 'Úloha ano/ne'],
    ['vyber-a-e-vice.html', 'vyber-a-e', 'Výběr z možností A–E'],
    ['prirazovaci-ulohy-vice.html', 'procenta', 'Přiřazovací úloha'],
    ['nestandardni-ulohy-vice.html', 'logicka-uloha', 'Nestandardní aplikační úloha']
  ];
  const lessonPosition = lessonPages.findIndex(([file]) => current.endsWith('/zs/' + file));
  if (lessonPosition >= 0) {
    document.body.classList.add('jpz-lesson-page');
    const [file, anchor, lessonTitle] = lessonPages[lessonPosition];
    const previous = lessonPages[lessonPosition - 1];
    const next = lessonPages[lessonPosition + 1];
    const content = document.querySelector('main') || document.querySelector('body > .wrap');
    const lessonEnhancements = {
      'slovni-ulohy.html': [
        ['Rozjezd', 'Vypočítej: 3,6 + 4 · (2,5 − 1,2).', 'Nejprve závorka a násobení: 3,6 + 4 · 1,3 = 3,6 + 5,2 = 8,8.'],
        ['Úroveň CERMAT', 'Součet tří po sobě jdoucích sudých čísel je 78. Urči největší z nich.', 'Čísla označ x, x + 2, x + 4. Platí 3x + 6 = 78, tedy x = 24. Největší číslo je 28.']
      ],
      'prevody-jednotek.html': [
        ['Rozjezd', 'Převeď 2,35 m² na cm².', 'Protože 1 m² = 10 000 cm², vyjde 23 500 cm².'],
        ['Úroveň CERMAT', 'Nádrž má objem 0,84 m³ a je naplněna ze tří čtvrtin. Kolik litrů vody obsahuje?', '0,84 m³ = 840 l. Tři čtvrtiny z 840 jsou 630 l.']
      ],
      'zlomky-odmocniny.html': [
        ['Rozjezd', 'Vypočítej 5/6 − 1/4.', 'Společný jmenovatel je 12: 10/12 − 3/12 = 7/12.'],
        ['Úroveň CERMAT', 'Vypočítej (3/5 + 1/2) : 11/10.', '3/5 + 1/2 = 11/10. Dělení stejným nenulovým číslem dává 1.']
      ],
      'vyrazy-vice.html': [
        ['Rozjezd', 'Zjednoduš výraz 3(2x − 1) − 2(x + 4).', '6x − 3 − 2x − 8 = 4x − 11.'],
        ['Úroveň CERMAT', 'Pro x = −2 vypočítej hodnotu výrazu (x − 3)² − x(x + 4).', '25 − (−2 · 2) = 25 + 4 = 29.']
      ],
      'rovnice-vice.html': [
        ['Rozjezd', 'Vyřeš rovnici 5x − 7 = 3x + 9.', '2x = 16, proto x = 8.'],
        ['Úroveň CERMAT', 'Vyřeš rovnici (3x − 2)/4 + (x + 1)/2 = 5.', 'Po vynásobení čtyřmi: 3x − 2 + 2x + 2 = 20. Tedy 5x = 20 a x = 4.']
      ],
      'slovni-ulohy-rovnice-vice.html': [
        ['Rozjezd', 'Myslím si číslo. Po jeho zdvojnásobení a přičtení 7 dostanu 31. Urči číslo.', '2x + 7 = 31, takže 2x = 24 a x = 12.'],
        ['Úroveň CERMAT', 'Na akci se prodalo 14 vstupenek: dětská za 120 Kč a dospělá za 180 Kč. Tržba byla 2 100 Kč. Kolik bylo dospělých vstupenek?', '180x + 120(14 − x) = 2 100. Odtud 60x = 420, tedy 7 dospělých vstupenek.']
      ],
      'slovni-ulohy-pomer-umernost-vice.html': [
        ['Rozjezd', 'Rozděl 640 Kč v poměru 3 : 5.', 'Celkem je 8 dílů, jeden díl je 80 Kč. Části jsou 240 Kč a 400 Kč.'],
        ['Úroveň CERMAT', 'Šest pracovníků dokončí práci za 10 dní. Za kolik dní ji při stejném výkonu dokončí 15 pracovníků?', 'Jde o nepřímou úměrnost: 6 · 10 = 15 · x, proto x = 4 dny.']
      ],
      'procenta-uloha-8-vice.html': [
        ['Rozjezd', 'Po slevě 20 % stojí výrobek 1 440 Kč. Urči původní cenu.', '1 440 Kč představuje 80 %. Původní cena je 1 440 : 0,8 = 1 800 Kč.'],
        ['Úroveň CERMAT', 'Cena 2 000 Kč se zvýšila o 10 % a potom snížila o 10 %. Urči konečnou cenu a změnu proti původní.', '2 000 · 1,10 · 0,90 = 1 980 Kč. Cena je o 20 Kč, tedy o 1 %, nižší.']
      ],
      'konstrukcni-ulohy-vice.html': [
        ['Rozjezd', 'Sestroj osu úsečky AB délky 6 cm a vyznač dva body vzdálené stejně od A i B.', 'Z bodů A a B opiš oblouky se stejným poloměrem větším než 3 cm. Spojnice průsečíků oblouků je osa; každý její bod má požadovanou vlastnost.'],
        ['Úroveň CERMAT', 'Je dána úsečka AB a přímka p. Sestroj všechny body C na p, pro které je úhel ACB pravý.', 'Sestroj Thaletovu kružnici nad průměrem AB. Hledané body jsou průsečíky této kružnice s přímkou p; jejich počet může být 0, 1 nebo 2.']
      ],
      'planimetrie-vice.html': [
        ['Rozjezd', 'Pravoúhlý trojúhelník má odvěsny 6 cm a 8 cm. Urči obsah a přeponu.', 'Obsah je 6 · 8 : 2 = 24 cm². Přepona je √(6² + 8²) = 10 cm.'],
        ['Úroveň CERMAT', 'Čtverci se stranou 10 cm je vepsán kruh. Urči obsah části čtverce mimo kruh, použij π = 3,14.', 'Poloměr kruhu je 5 cm. Rozdíl obsahů je 100 − 3,14 · 25 = 21,5 cm².']
      ],
      'stereometrie-vice.html': [
        ['Rozjezd', 'Krychle má hranu 4 cm. Urči její objem a povrch.', 'V = 4³ = 64 cm³, S = 6 · 4² = 96 cm².'],
        ['Úroveň CERMAT', 'Akvárium má vnitřní rozměry 80 cm × 35 cm × 50 cm a je naplněno do 75 % výšky. Kolik litrů vody obsahuje?', 'Výška vody je 37,5 cm. Objem je 80 · 35 · 37,5 = 105 000 cm³ = 105 litrů.']
      ],
      'ano-ne-vice.html': [
        ['Rozjezd', 'Rozhodni: Každé číslo dělitelné 6 je dělitelné 3.', 'ANO. Číslo dělitelné 6 má ve svém rozkladu faktor 3.'],
        ['Úroveň CERMAT', 'Rozhodni: Zvětší-li se délka každé strany obdélníku o 20 %, zvětší se jeho obsah o 40 %.', 'NE. Obsah se násobí 1,2 · 1,2 = 1,44, takže se zvětší o 44 %.']
      ],
      'vyber-a-e-vice.html': [
        ['Rozjezd', 'Čtvrtina čísla je 18. Která možnost je celé číslo? A) 4,5  B) 22  C) 54  D) 72  E) 96', 'Správně je D) 72, protože 18 · 4 = 72.'],
        ['Úroveň CERMAT', 'Obdélník má obsah 96 cm² a délku o 4 cm větší než šířku. Jaký má obvod? A) 32  B) 36  C) 40  D) 44  E) 48 cm', 'Platí x(x + 4) = 96, tedy x = 8 a délka 12. Obvod je 2(8 + 12) = 40 cm, možnost C.']
      ],
      'prirazovaci-ulohy-vice.html': [
        ['Rozjezd', 'Přiřaď výsledek: 15 % z 240; 3/5 z 90; obvod čtverce se stranou 11. Nabídka A) 36  B) 44  C) 54.', '15 % z 240 = 36 → A; 3/5 z 90 = 54 → C; obvod čtverce je 44 → B.'],
        ['Úroveň CERMAT', 'Přiřaď: obsah kruhu r = 3 (π = 3,14); objem krychle a = 3; obsah trojúhelníku a = 9, v = 12. Nabídka A) 27  B) 28,26  C) 54.', 'Kruh: 3,14 · 9 = 28,26 → B; krychle: 3³ = 27 → A; trojúhelník: 9 · 12 : 2 = 54 → C.']
      ],
      'nestandardni-ulohy-vice.html': [
        ['Rozjezd', 'V posloupnosti 5, 9, 13, 17, … urči desátý člen.', 'Přírůstek je 4. Desátý člen je 5 + 9 · 4 = 41.'],
        ['Úroveň CERMAT', 'Z dlaždic vznikají obrazce s počty 4, 10, 18, 28, … Kolik dlaždic má pátý obrazec?', 'Přírůstky jsou 6, 8, 10, tedy další je 12. Pátý obrazec má 28 + 12 = 40 dlaždic.']
      ]
    };
    if (content && lessonEnhancements[file] && !content.querySelector('.lesson-cermat')) {
      const challenge = document.createElement('section');
      challenge.className = 'lesson-cermat';
      challenge.setAttribute('aria-labelledby', 'uroven-cermat');
      challenge.innerHTML = `<div class="lesson-section-label">Závěrečné ověření</div><h2 id="uroven-cermat">Úroveň CERMAT</h2><p>První úlohou se rozehřej, druhou řeš bez nápovědy a s kompletním zápisem. Řešení otevři až po dokončení.</p><div class="lesson-challenge-list">${lessonEnhancements[file].map(([level, question, solution], index) => `<article class="lesson-challenge"><div><span>${index + 1}</span><strong>${level}</strong></div><p>${question}</p><details><summary>Zkontrolovat řešení</summary><p>${solution}</p></details></article>`).join('')}</div>`;
      const summary = document.createElement('section');
      summary.className = 'lesson-summary';
      summary.setAttribute('aria-labelledby', 'shrnuti-lekce');
      summary.innerHTML = `<h2 id="shrnuti-lekce">Shrnutí lekce</h2><ul><li>Umím zvolit správný postup bez otevření řešení.</li><li>Dokážu výpočet nebo konstrukci přehledně zapsat.</li><li>Počítám s jednotkami a ověřuji, zda výsledek dává smysl.</li></ul><p>Pokud ti druhá úloha nevyšla, vrať se k řešenému vzoru a potom ji zkus znovu bez nápovědy.</p>`;
      const footer = content.querySelector('footer');
      content.insertBefore(challenge, footer || null);
      content.insertBefore(summary, footer || null);
    }
    if (content && !content.querySelector('.lesson-study-path')) {
      const headings = [...content.querySelectorAll('h2, h3, .examples-heading, .heading')];
      headings.forEach((heading, index) => { if (!heading.id) heading.id = `cast-${index + 1}`; });
      const first = headings[0];
      const solved = headings.find(heading => /řešen|vysvětlen|krok za krokem/i.test(heading.textContent)) || headings[1] || first;
      const practice = [...headings].reverse().find(heading => /procvič|zkus|příklady|zadání/i.test(heading.textContent)) || headings.at(-1) || first;
      const progressKey = 'mj_zs_lekce_zvladnute_v1';
      let completed = {};
      try { completed = JSON.parse(localStorage.getItem(progressKey) || '{}'); } catch (_) {}
      const guide = document.createElement('section');
      guide.className = 'lesson-study-path';
      guide.setAttribute('aria-label', 'Doporučený postup lekcí');
      guide.innerHTML = `<div class="lesson-study-copy"><span>Jak projít tuto lekci</span><strong>${lessonTitle}</strong><small>Výklad → řešený vzor → samostatné procvičení → úroveň CERMAT</small></div><nav>${first ? `<a href="#${first.id}">1. Výklad</a>` : ''}${solved ? `<a href="#${solved.id}">2. Řešený vzor</a>` : ''}${practice ? `<a href="#${practice.id}">3. Zkus sám</a>` : ''}<a href="#uroven-cermat">4. CERMAT</a></nav><button type="button" aria-pressed="${Boolean(completed[file])}">${completed[file] ? '✓ Téma zvládnuto' : 'Označit jako zvládnuté'}</button>`;
      guide.querySelector('button').addEventListener('click', event => {
        completed[file] = !completed[file];
        try { localStorage.setItem(progressKey, JSON.stringify(completed)); } catch (_) {}
        event.currentTarget.setAttribute('aria-pressed', String(Boolean(completed[file])));
        event.currentTarget.textContent = completed[file] ? '✓ Téma zvládnuto' : 'Označit jako zvládnuté';
        guide.classList.toggle('is-complete', Boolean(completed[file]));
      });
      guide.classList.toggle('is-complete', Boolean(completed[file]));
      const intro = content.querySelector('.source-note, .section-lead, .lead');
      if (intro) intro.insertAdjacentElement('afterend', guide);
      else content.prepend(guide);
    }
    const lessonNav = document.createElement('nav');
    lessonNav.className = 'lesson-nav';
    lessonNav.setAttribute('aria-label', 'Navigace mezi tématy přijímaček');
    if (previous) lessonNav.innerHTML += `<a href="${previous[0]}"><small>předchozí téma</small>← ${previous[2]}</a>`;
    else lessonNav.append(document.createElement('span'));
    lessonNav.innerHTML += `<a class="lesson-nav-main" href="prijimacky.html#${anchor}"><small>přehled</small>Všechna témata</a>`;
    if (next) lessonNav.innerHTML += `<a class="lesson-nav-next" href="${next[0]}"><small>další téma</small>${next[2]} →</a>`;
    else lessonNav.append(document.createElement('span'));
    const footer = content?.querySelector('footer');
    if (content) content.insertBefore(lessonNav, footer || null);
    return;
  }

  const section = current.includes('/ss/') ? 'ss' : 'zs';
  const withinSection = pages.filter(([path]) => path.startsWith(section + '/'));
  const withinPosition = withinSection.findIndex(([path]) => current.endsWith('/' + path));
  const up = section === 'ss' ? 'maturita.html' : 'rocniky.html';
  const tools = document.createElement('nav');
  tools.className = 'study-tools';
  tools.setAttribute('aria-label', 'Navigace ve studiu');
  tools.innerHTML = `<a href="${up}">${section === 'ss' ? 'Maturita' : 'Přehled témat'}</a>` +
    (withinSection[withinPosition - 1] ? `<a href="${withinSection[withinPosition - 1][0].split('/')[1]}" aria-label="Předchozí téma">←</a>` : '') +
    (withinSection[withinPosition + 1] ? `<a href="${withinSection[withinPosition + 1][0].split('/')[1]}" aria-label="Další téma">→</a>` : '');
  document.body.append(tools);

})();

// Po vyhodnocení celé maturitní simulace nabídne návrat do slabých témat.
(() => {
  if (!document.body.dataset.variant || !location.pathname.includes('cermat-simulace-')) return;
  const submit = document.querySelector('#test-submit');
  if (!submit) return;
  const lessonFor = topic => {
    const groups = [
      [/Čísla|Odmocniny/, 'mocniny.html'],
      [/Procenta|Poměr|Jednotky|Měřítko|Úměrnost|Finance/, 'prakticke-pocitani.html'],
      [/Výrazy/, 'algebraicke-vyrazy.html'],
      [/Absolutní/, 'absolutni-hodnoty.html'],
      [/Rovnice|Nerovnice|Kvadratické rovnice/, 'kvadraticke.html'],
      [/Slovní úloha|Soustavy/, 'soustavy.html'],
      [/Kvadratická funkce/, 'kvadraticke.html'],
      [/Funkce/, 'funkce.html'],
      [/Exponenciální|Logaritmy/, 'exp-log-rovnice.html'],
      [/Goniometrie/, 'goniometrie.html'],
      [/Posloupnosti/, 'posloupnosti.html'],
      [/Planimetrie|Podobnost|Kruh/, 'planimetrie.html'],
      [/Stereometrie/, 'stereometrie.html'],
      [/Analytická geometrie|Vektory|Přímka/, 'analyticka-geometrie-rovina.html'],
      [/Kombinatorika|Pravděpodobnost|Statistika/, 'kombinatorika-pravdepodobnost.html']
    ];
    return groups.find(([pattern]) => pattern.test(topic))?.[1] || 'maturita.html';
  };
  submit.addEventListener('click', () => setTimeout(() => {
    const result = document.querySelector('#test-result');
    if (!result?.classList.contains('show') || result.querySelector('.result-next')) return;
    const weak = [...document.querySelectorAll('.task.wrong, .task.partial')]
      .map(task => task.querySelector('.topic')?.textContent.trim())
      .filter(Boolean);
    const unique = [...new Set(weak)].slice(0, 5);
    const points = Number(result.querySelector('strong')?.textContent.match(/^\d+/)?.[0] || 0);
    const message = points >= 40
      ? 'Výborný základ. Zaměř se hlavně na jednotlivé ztracené body.'
      : points >= 30
        ? 'Jsi blízko jistému výsledku. Procvič nejdřív témata níže a test potom zopakuj.'
        : 'Nejdřív doplň slabá témata bez časového tlaku a teprve potom zkus další celý test.';
    const links = unique.length
      ? `<ul>${unique.map(topic => `<li><a href="${lessonFor(topic)}">${topic} → procvičit</a></li>`).join('')}</ul>`
      : '<p>Ve všech tématech máš plný počet bodů.</p>';
    result.insertAdjacentHTML('beforeend', `<div class="result-next"><strong>Co dál</strong><p>${message}</p>${links}</div>`);
  }, 0));
})();
