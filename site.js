(() => {
  if (window.__mathJasneSiteLoaded) return;
  window.__mathJasneSiteLoaded = true;
  const pages = [
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
    const [, anchor] = lessonPages[lessonPosition];
    const previous = lessonPages[lessonPosition - 1];
    const next = lessonPages[lessonPosition + 1];
    const lessonNav = document.createElement('nav');
    lessonNav.className = 'lesson-nav';
    lessonNav.setAttribute('aria-label', 'Navigace mezi tématy přijímaček');
    if (previous) lessonNav.innerHTML += `<a href="${previous[0]}"><small>předchozí téma</small>← ${previous[2]}</a>`;
    else lessonNav.append(document.createElement('span'));
    lessonNav.innerHTML += `<a class="lesson-nav-main" href="prijimacky.html#${anchor}"><small>přehled</small>Všechna témata</a>`;
    if (next) lessonNav.innerHTML += `<a class="lesson-nav-next" href="${next[0]}"><small>další téma</small>${next[2]} →</a>`;
    else lessonNav.append(document.createElement('span'));
    const content = document.querySelector('main') || document.querySelector('body > .wrap');
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
