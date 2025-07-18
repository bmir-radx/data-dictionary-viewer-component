import r2wc from '@r2wc/react-to-web-component';
import './index.css';

import App from './components/App/App';

customElements.define(
    'data-dictionary-viewer',
    r2wc(App, {
        props: {
            theme: 'string',
            data: 'string',
            initialView: 'string',
            showSearch: 'boolean',
            heading: 'string'
        }
    })
);
