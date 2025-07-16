# Data Dictionary Viewer

[![](https://img.shields.io/npm/v/@cyouh95/data-dictionary-viewer.svg?style=for-the-badge)](https://www.npmjs.com/package/@cyouh95/data-dictionary-viewer)

Data Dictionary Viewer is a customizable React component for visualizing data dictionaries from CSV files. It supports list and table views, includes built-in search, and offers modern, responsive styling. Easy to embed, easy to style.

## Features
🔍 Searchable: Filter variable names and descriptions

🧱 Two Views: Toggle between List and Table formats

🎨 Theme Support: Light and dark themes with CSS variable overrides

🔌 Plug & Play: Easy to integrate in any React app

⚡ Fast Parsing: Parses CSV files



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
    data = 'data_dictionary_file.csv'  // required
    initialView = 'list'
    showSearch = {true}
    heading = 'Data Dictionary Viewer'
    theme = 'dark'  // default is light
/>
```


Data Dictionary Viewer Components:

| Prop Name     | Type     | Default   | Options                | Description                                      |
|---------------|----------|-----------|-------------------------|--------------------------------------------------|
| `data`        | string   | —         | *required*              | Path to the CSV data dictionary file OR string containing the data OR URL to API endpoint. |
| `initialView` | string   | `'list'`  | `'list'`, `'table'`     | Sets the default view mode when component loads. |
| `showSearch`  | boolean  | `true`    | `true`, `false`         | Toggle visibility of the search bar.             |
| `heading`     | string   | `'Data Dictionary Viewer'` | Any string  | Custom title displayed at the top.              |
| `theme`       | string   | `'light'` | `'light'`, `'dark'`     | Choose between light or dark visual theme.       |


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
### 🎨 Customizable colors in Data Dictionary Viewer

| Variable Name            | Color (Name)     | Hex Code   | Usage Context                                      |
|--------------------------|------------------|------------|----------------------------------------------------|
| `--dd-color-body-bg`     | Pale Blue/Grey   | `#f9fafb`  | App-wide background                                |
| `--dd-color-primary`     | Teal             | `#00889d`  | Data element titles (`alcohol_date_mdy`, etc.)     |
| `--dd-color-secondary`   | Dark Blue        | `#003e70`  | Table background header                            |
| `--dd-color-table-odd`   | Soft Gray        | `#f7f7f7`  | Odd table row background                           |
| `--dd-color-table-even`  | Pale Gray        | `#eeeeee`  | Even table row background                          |


## Dependencies

- [Font Awesome](https://docs.fontawesome.com/v5/web/use-with/react)
- [Papa Parse](https://www.papaparse.com/)
- [react-tooltip](https://react-tooltip.com/)
- [react-virtuoso](https://virtuoso.dev/)


## Project Structure
Breakdown of the key files and folders in your project:

Core Files: 

| File         | Purpose                                                                                                   |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| `index.html` | Loads the app in the browser and sets options like view type and whether to show the title or search bar. |
| `main.jsx`   | Starts the React app and sends the HTML settings to the viewer component.                                 |
| `index.jsx`  | Makes the `DataDictionaryViewer` component available for use in other projects.                           |
| `App.jsx`    | Main component that handles the view layout, loads the CSV file, and filters data with search.            |




