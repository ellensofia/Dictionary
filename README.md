# Dictionary

Din uppgift är att implementera en ordbok där användare kan slå upp ord med hjälp av Free Dictionary API (https://dictionaryapi.dev/). Appen ska också testas.

Du kan leta runt på internet för inspiration till en egen design.

Om du vill resonera kring dina val av tester går det bra att skriva in några extra stycken i en separat inlämning. I inlämningen ska du ge läraren tillgång till din kodbas, förslagsvis via en länk till ett GitHub repo.
Features
[G] Användaren kan söka efter ord i ett sökfält
[G] Användaren kan se svaret från Free Dictionary API i en användarvänlig form.
[G] Användaren kan se ett error om de söker med ett tomt sökfält.
[G] Användaren kan spela upp ljudfilen från API:et om den finns tillgänglig.
[VG] Användare ska kunna spara sina "favoritord" i en session. Dessa ska finnas tillgängliga i en lista för användaren att se. Från listan ska man kunna se det sparade svaret från API. Man ska även kunna ta bort sina favoritord.
[VG] Byta mellan dark och light theme.
Testning
[G] Appen innehåller enhetstester och/eller integrationstester som säkerställer att koden huvudsakligen fungerar som den ska.
[VG] Appen innehåller väl valda enhetstester och/eller integrationstester som säkerställer att koden i hög utsträckning fungerar som den ska.
[VG] Eleven resonerar väl kring sitt val av tester och testningsmetodik.
Övrigt
[G] Applikationen har en användarvänlig design.
[G] Koden ska vara väl kommenterad.
[VG] Koden är väl skriven och har en bra struktur.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
