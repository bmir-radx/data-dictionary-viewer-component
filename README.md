# Data Dictionary Viewer

[![](https://img.shields.io/npm/v/@cyouh95/data-dictionary-viewer.svg?style=for-the-badge)](https://www.npmjs.com/package/@cyouh95/data-dictionary-viewer)

React component for data dictionary viewer.


## Installation

```sh
npm install @cyouh95/data-dictionary-viewer
```


## Usage

Import the `DataDictionaryViewer` component and CSS file:

```js
import { DataDictionaryViewer } from '@cyouh95/data-dictionary-viewer'
import '@cyouh95/data-dictionary-viewer/style.css'
```

Use component as:

```js
<DataDictionaryViewer 
    file = 'data_dictionary_file.csv'  // required
    initialView = 'list'
    showSearch = {true}
    title = 'Data Dictionary Viewer'
    theme = 'dark'  // default is light
/>
```

Customize styles by overriding CSS variables:

```css
:root {
    --dd-font-family: 'Times New Roman', Times, Georgia, serif;
    --dd-color-text: #444444;
    ...
}
```

Or choose a theme and override CSS variables using corresponding class selector:

```css
.dark {
    --dd-color-text: #ffffff;
    --dd-color-body-bg: #121212;
    ...
}
```


## Dependencies

- [Font Awesome](https://docs.fontawesome.com/v5/web/use-with/react)
- [Papa Parse](https://www.papaparse.com/)
- [react-tooltip](https://react-tooltip.com/)
- [react-virtuoso](https://virtuoso.dev/)
