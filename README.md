# Data Dictionary Viewer

[![](https://img.shields.io/npm/v/@cyouh95/data-dictionary-viewer.svg?style=for-the-badge)](https://www.npmjs.com/package/@cyouh95/data-dictionary-viewer)

Data Dictionary Viewer is a customizable component for visualizing data dictionaries. It supports list and table views, includes built-in search, and offers modern, responsive styling. Easy to embed, easy to style.


## Features

🔍 Searchable: Filter variable names and descriptions

🧱 Two Views: Toggle between List and Table formats

🎨 Theme Support: Light and dark themes with CSS variable overrides

🔌 Plug & Play: Easy to integrate in any React app or use as a standalone Web Component

⚡ Fast Parsing: Parses CSV data


## Project overview

- [React](https://react.dev/): v18.2.0
- [Node.js](https://nodejs.org/en): v22.16.0
- [NPM](https://www.npmjs.com/): v10.9.2

Built with React, the Data Dictionary Viewer is available as:

- [React Component](#react-component) (via NPM)
- [Web Component](#web-component) (framework-agnostic)

🚀 Live demo: https://bmir-radx.github.io/data-dictionary-viewer-component/

### Input data

Data dictionaries are expected to follow [these specifications](https://github.com/bmir-radx/radx-data-dictionary-specification/blob/main/radx-data-dictionary-specification.md). The input data can be provided as:

- CSV file
- Raw string
- URL to API endpoint

### Dependencies

- [Font Awesome](https://docs.fontawesome.com/v5/web/use-with/react)
- [Papa Parse](https://www.papaparse.com/)
- [react-tooltip](https://react-tooltip.com/)
- [react-virtuoso](https://virtuoso.dev/)


## React Component

### Installation

```sh
$ npm install @cyouh95/data-dictionary-viewer
```

### Usage

Import the `DataDictionaryViewer` component and CSS file in your React project:

```js
import { DataDictionaryViewer } from '@cyouh95/data-dictionary-viewer'
import '@cyouh95/data-dictionary-viewer/style.css'
```

Use component as:

```js
<DataDictionaryViewer data="data_dictionary_file.csv" />
```

Full list of props:

| Prop Name     | Type     | Default   | Options                | Description                                      |
|---------------|----------|-----------|-------------------------|--------------------------------------------------|
| `data`        | string   | —         | *required*              | Path to the CSV data dictionary file OR string containing the data OR URL to API endpoint. |
| `initialView` | string   | `'list'`  | `'list'`, `'table'`     | Set the default view mode when component loads. |
| `showSearch`  | boolean  | `true`    | `true`, `false`         | Toggle visibility of the search bar.             |
| `heading`     | string   | `'Data Dictionary Viewer'` | Any string  | Custom title displayed at the top.              |
| `theme`       | string   | `'light'` | `'light'`, `'dark'` | Choose between different visual themes.       |

### Customization

Customize styles by overriding CSS variables:

```css
:root {
    --dd-color-primary: #bb86fc;
    ...
}
```

If using a theme other than the default light theme, override CSS variables using corresponding theme class selector:

```css
.dark {
    --dd-color-primary: #bb86fc;
    ...
}
```

See [full list of CSS variables](#css-variable-reference) below.


## Web Component

Import [`data-dictionary-viewer.js`](web/data-dictionary-viewer.js) in your HTML file:

```html
<script type="module" src="data-dictionary-viewer.js"></script>
```

Use component as:

```html
<data-dictionary-viewer data="data_dictionary_file.csv"></data-dictionary-viewer>
```

Full list of attributes:

| Attribute Name     | Type     | Default   | Options                | Description                                      |
|---------------|----------|-----------|-------------------------|--------------------------------------------------|
| `data`        | string   | —         | *required*              | Path to the CSV data dictionary file OR string containing the data OR URL to API endpoint. |
| `initial-view` | string   | `'list'`  | `'list'`, `'table'`     | Set the default view mode when component loads. |
| `show-search`  | string  | `'true'`    | `'true'`, `'false'`         | Toggle visibility of the search bar.             |
| `heading`     | string   | `'Data Dictionary Viewer'` | Any string  | Custom title displayed at the top.              |
| `theme`       | string   | `'light'` | `'light'`, `'dark'` | Choose between different visual themes.       |

### Customization

Customize styles by overriding CSS variables:

```css
data-dictionary-viewer {
    --dd-color-primary: #bb86fc;
    ...
}
```

If using a theme other than the default light theme, override CSS variables using corresponding theme class selector:

```css
data-dictionary-viewer .dark {
    --dd-color-primary: #bb86fc;
    ...
}
```

See [full list of CSS variables](#css-variable-reference) below.

## CSS variable reference

| CSS Variable                   | Description                                                                 |
|--------------------------------|-----------------------------------------------------------------------------|
| `--dd-font-family`             | Default font stack                                                          |
| `--dd-color-text`              | Color of text                                                               |
| `--dd-color-body-bg`           | Background color of overall page body                                       |
| `--dd-color-primary`           | Primary accent color used for buttons and icon                              |
| `--dd-color-on-primary`        | Text/icon color when placed on `--dd-color-primary`                         |
| `--dd-color-secondary`         | Secondary accent color used for table header background                     |
| `--dd-color-on-secondary`      | Text/icon color when placed on `--dd-color-secondary`                       |
| `--dd-color-content-bg`        | Background color of content areas                                           |
| `--dd-color-content-border`    | Border color around content areas                                           |
| `--dd-color-card-bg`           | Background color of cards                                                   |
| `--dd-color-card-border`       | Border color around cards                                                   |
| `--dd-color-card-block-bg`     | Background color of inner card blocks                                       |
| `--dd-color-card-block-border` | Border color around inner card blocks                                       |
| `--dd-color-button-text`       | Color of text inside buttons                                                |
| `--dd-color-button-bg`         | Background color of buttons                                                 |
| `--dd-color-button-bg-hover`   | Background color of buttons on hover                                        |
| `--dd-color-button-border`     | Border color around buttons                                                 |
| `--dd-color-table-border`      | Border color around tables                                                  |
| `--dd-color-table-odd`         | Background color of odd table rows                                          |
| `--dd-color-table-even`        | Background color of even table rows                                         |
| `--dd-color-input-bg`          | Background color of input fields                                            |
| `--dd-color-input-border`      | Border color around input fields                                            |
| `--dd-color-tooltip-background`| Background color of tooltips                                                |
| `--dd-color-filter`            | Color of filter icons in table view                                         |
| `--dd-shadow`                  | Box shadow used for elements such as buttons                                |


## Set up locally

Clone the repository:

```sh
$ git clone https://github.com/bmir-radx/data-dictionary-viewer-component.git
$ cd data-dictionary-viewer-component
```

Install packages:

```sh
$ npm install
```

Run locally:

```sh
$ npm run dev
```

See: [`index.html`](index.html), [`main.jsx`](src/main.jsx)

### Deploy to GitHub Pages

```sh
$ npm run deploy
```

This will run the `predeploy` and `deploy` scripts defined in `package.json`:

```json
"scripts": {
    "predeploy": "vite build --config vite.config.gh.js",
    "deploy": "gh-pages -d build"
}
```

See: [`index.html`](index.html), [`main.jsx`](src/main.jsx), [`vite.config.gh.js`](vite.config.gh.js) (outputs to `build/` folder)

👉 [View demo GitHub Pages site](https://bmir-radx.github.io/data-dictionary-viewer-component/)

### Publish to NPM

```sh
$ npm run build
```

This will run the `build` script defined in `package.json`:

```json
"scripts": {
    "build": "vite build"
}
```

Increment version of package:

```sh
# Use one of the following based on changes made:
$ npm version patch
$ npm version minor
$ npm version major
```

Publish to NPM registry:

```sh
$ npm publish --access public
```

See: [`index.ts`](src/index.ts), [`vite.config.ts`](vite.config.ts) (outputs to `dist/` folder)

👉 [View NPM package](https://www.npmjs.com/package/@cyouh95/data-dictionary-viewer)

### Convert to Web Component

```sh
$ npm run convert
```

This will run the `convert` script defined in `package.json`:

```json
"scripts": {
    "convert": "vite build --config vite.config.web.js"
}
```

See: [`web.jsx`](src/web.jsx), [`vite.config.web.js`](vite.config.web.js) (outputs to `web/` folder)

👉 [View Web Component file](web/data-dictionary-viewer.js)
