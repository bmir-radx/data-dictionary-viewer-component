import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const rootEl = document.getElementById('root');

const root = createRoot(rootEl);

document.getElementById('fileInput').addEventListener('change', event => {
    const fileList = event.target.files;
    if (fileList.length > 0) {
        const reader = new FileReader();
        reader.onload = e => {
            root.render(
                <StrictMode>
                    <App data={e.target.result} />
                </StrictMode>
            );
        };
        reader.readAsText(fileList[0]);
    }
});

document.querySelector('#quote input[type="submit"]').addEventListener('click', () => {
    root.render(
        <StrictMode>
            <App data={document.querySelector('#quote textarea').value} />
        </StrictMode>
    );
});

document.querySelector('#link input[type="submit"]').addEventListener('click', () => {
    root.render(
        <StrictMode>
            <App data={`https://radxdatahub.nih.gov/api/launch/StudyOverview/getMetadata?fileId=${document.querySelector('#link input[type="text"]').value}`} />
        </StrictMode>
    );
});
