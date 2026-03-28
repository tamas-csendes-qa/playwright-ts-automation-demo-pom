Playwright + TypeScript POM Automation

Projekt cél:
A projekt célja egy Page Object Model architektúrán alapuló, strukturált felépítésű UI tesztautomatizálási környezet bemutatása Playwright és TypeScript használatával.

Architektúra:

- Page Object Model (POM) – minden oldal saját osztályban (BasePage, LoginPage, InventoryPage, CartPage, CheckoutPage)
- Factory pattern – tesztadatok központi kezelése (UserFactory, ProductFactory, CheckoutFactory)
- Clean code elvek – Prettier formázás, típusbiztos TypeScript

UI tesztek:
A tesztek a saucedemo.com webalkalmazáson futnak:

- Sikeres bejelentkezés
- Sikertelen bejelentkezés (zárolt felhasználó)
- Teljes vásárlási folyamat (login → kosár → checkout → visszaigazolás)

CI integráció:
A tesztek GitHub Actions segítségével minden push után automatikusan futnak, az eredmények artifact-ként elérhetők.

A teszt futtatása:

- npm install
- npx playwright test
