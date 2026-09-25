# matematika.jasně – přehled souborů

Toto je pracovní kopie statického webu. Otevírá se přes `index.html`; k provozu není potřeba databáze ani sestavení projektu. Při zveřejnění na GitHub Pages se má zkopírovat obsah této složky do kořene repozitáře, nikoli složka `web - kopie` jako další vnořená úroveň.

| Složka / soubor | Co obsahuje |
| --- | --- |
| `index.html` | Úvodní stránka a rozcestník. |
| `zs/` | Přijímačky a výuka pro základní školu, včetně testů. |
| `ss/` | Maturita a výuka pro střední školu, včetně simulací. |
| `assets/` | Favicon a obrázky používané veřejnými stránkami. |
| `site.css`, `site.js` a další soubory `.css` / `.js` | Společný vzhled a funkce webu. Dílčí styly a skripty zůstávají u příslušných sekcí, aby se nerozbily odkazy. |
| `ustni-otazky-puvodni/` | Archiv 25 původních otázek k ústní zkoušce. Je oddělený od hlavní přípravy na didaktický test, ale z maturity se na něj stále odkazuje. |
| `scripts/` | Pomocné skripty pro kontrolu a správu webu; nejsou to lekce pro návštěvníky. |
| `.github/workflows/` | Automatická kontrola po nahrání na GitHub. |
| `AUDIT-A-PLAN-DOKONCENI.md` | Stav práce a skutečně zbývající úkoly. |
| `PLAN-PROPAGACE.md` | Samostatný plán propagace. |
| `tmp/`, `output/` | Pracovní a vygenerované podklady mimo veřejný obsah. Ponechat lokálně, ale nenahrávat s webem. |

## Rychlá kontrola před zveřejněním

1. Spustit `node scripts/check-site.mjs` z kořene této složky. Kontroluje HTML, vložený JavaScript, metadata, sitemapu a interní soubory.
2. Ověřit syntaxi změněných JavaScriptových souborů pomocí `node --check cesta/k/souboru.js`.
3. V místním náhledu projít alespoň jednu cestu Přijímačky i Maturita a zkusit ji na telefonu.
4. Teprve po kontrole přenést soubory do Git repozitáře. Soubory `tmp/` a `output/` vynechat; přiložený `.gitignore` je při novém kopírování ignoruje. Pokud už byly v repozitáři dříve sledované, samotný `.gitignore` je z něj neodstraní.

Veřejná adresa: https://kockondra-web.github.io/matika-web/
