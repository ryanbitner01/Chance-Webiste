# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			// Other configs...

			// Remove tseslint.configs.recommended and replace with this
			tseslint.configs.recommendedTypeChecked,
			// Alternatively, use this for stricter rules
			tseslint.configs.strictTypeChecked,
			// Optionally, add this for stylistic rules
			tseslint.configs.stylisticTypeChecked,

			// Other configs...
		],
		languageOptions: {
			parserOptions: {
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			// Other configs...
			// Enable lint rules for React
			reactX.configs["recommended-typescript"],
			// Enable lint rules for React DOM
			reactDom.configs.recommended,
		],
		languageOptions: {
			parserOptions: {
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
]);
```

```
merch-website
├─ .DS_Store
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  └─ icons.svg
├─ src
│  ├─ .DS_Store
│  ├─ App.tsx
│  ├─ Message.tsx
│  ├─ app.scss
│  ├─ assets
│  │  ├─ ChanceLogoText.svg
│  │  ├─ hero.png
│  │  ├─ react.svg
│  │  ├─ shirt.jpg
│  │  └─ vite.svg
│  ├─ data
│  │  └─ repositories
│  ├─ domain
│  │  ├─ entities
│  │  │  └─ variant.ts
│  │  └─ repositories
│  │     └─ merchRepository.ts
│  ├─ features
│  │  ├─ home
│  │  │  ├─ Home.tsx
│  │  │  └─ home.scss
│  │  ├─ merch
│  │  │  ├─ components
│  │  │  │  ├─ MerchListCell.scss
│  │  │  │  ├─ MerchListCell.tsx
│  │  │  │  ├─ VariantSelector.scss
│  │  │  │  └─ VariantSelector.tsx
│  │  │  ├─ pages
│  │  │  │  ├─ MerchDetails.tsx
│  │  │  │  └─ MerchList.tsx
│  │  │  └─ styles
│  │  │     ├─ MerchList.scss
│  │  │     └─ merch-details.scss
│  │  └─ nav
│  │     ├─ HamburgerMenu.tsx
│  │     ├─ Layout.tsx
│  │     ├─ Nav.tsx
│  │     ├─ hamburger-menu.scss
│  │     └─ nav.scss
│  ├─ main.tsx
│  └─ variables.scss
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```