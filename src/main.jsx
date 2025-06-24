import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './components/App/App';

const rootEl = document.getElementById('root');

const config = {
  defaultView: rootEl.dataset.defaultView || 'list',
  searchField: rootEl.dataset.searchField !== 'false',
  dataDictionaryTitle: rootEl.dataset.dataDictionaryTitle !== 'false',
};

const root = createRoot(rootEl);

root.render(
  <StrictMode>
    <App config={config} />
  </StrictMode>
);
