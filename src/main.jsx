import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const rootEl = document.getElementById('root');

const root = createRoot(rootEl);

root.render(
    <StrictMode>
        <App data='/data-dictionary-viewer-component/sample.csv' initialView='table' />
    </StrictMode>
);
