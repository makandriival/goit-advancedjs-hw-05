# GoIT Advanced JavaScript homework 05

TypeScript development environment for Topic 9, with a small browser application
that concatenates two strings.

## Requirements

- Node.js 22 or newer and npm.
- A browser with developer tools.

TypeScript and `@web/dev-server` are local development dependencies; a global
TypeScript installation is not required.

## Run

```sh
npm ci
npm start
```

`npm start` compiles the project and then opens the application over HTTP.
Use the URL printed by the server. Do not open the HTML through `file://`,
because browsers restrict loading ES modules from local files.

For development, keep the server running and open a second terminal:

```sh
npm run watch
```

The compiler watches TypeScript changes, and the development server reloads the
browser when the generated files change.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run build` | Compile all TypeScript files and generate source maps |
| `npm run typecheck` | Check types without generating files |
| `npm run watch` | Recompile when TypeScript files change |
| `npm start` | Build once and start the browser development server |

## Project structure

```text
index.html
package.json
package-lock.json
tsconfig.json
src/
  index.ts
  concatenation.ts
dist/                  (generated, not committed)
  index.js
  index.js.map
  concatenation.js
  concatenation.js.map
```

The compiler uses `src` as `rootDir` and `dist` as `outDir`, targets ES2019,
and emits ES2020 modules. `DOM` and `ES2021` provide browser and JavaScript
type definitions. Strict type checking and `noEmitOnError` are enabled.
The `.js` extension in the TypeScript import is intentional: it references the
compiled module that the browser will load.

## Debugging with source maps

1. Run `npm start`.
2. Open browser developer tools. Enable JavaScript source maps in their settings
   if they are disabled.
3. Open **Sources** (Chrome) or **Debugger** (Firefox) and find
   `src/concatenation.ts`.
4. Set a breakpoint on the `return` statement.
5. Enter two strings and click **Concat!**. Execution pauses in the original
   TypeScript file; inspect `firstString` and `secondString`, then resume.

`sourceMap: true` in [tsconfig.json](./tsconfig.json) generates a `.js.map`
file for each compiled JavaScript file.

## Manual checks

- Enter `Hello, ` and `TypeScript!`: the result is `Hello, TypeScript!`.
- Submit using Enter: the result updates without reloading the page.
- Empty strings are allowed; whitespace is preserved.
- Text such as `<b>Hello</b>` is displayed literally, not interpreted as HTML.

## Submission

- Repository: <https://github.com/makandriival/goit-advancedjs-hw-05>
- Source files: <https://github.com/makandriival/goit-advancedjs-hw-05/tree/main/src>

Commit and push the project files, including `package-lock.json`. Do not include
`node_modules` or generated `dist` files. After pushing, use GitHub's
**Code > Download ZIP** to download the repository archive and attach it to the
homework submission together with the source link above.
