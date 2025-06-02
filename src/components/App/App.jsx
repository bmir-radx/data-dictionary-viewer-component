import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faBorderAll } from '@fortawesome/free-solid-svg-icons';
import classes from './App.module.scss';

function App() {
    const [activeView, setActiveView] = useState('list');

    return (
        <>
            <h1>Data Dictionary Viewer</h1>
            <div className={classes.buttons}>
                <button className={activeView === 'list' ? classes.active : ''} onClick={() => setActiveView('list')}>
                    <FontAwesomeIcon icon={faList} className={classes.icon} />
                    List
                </button>
                <button className={activeView === 'table' ? classes.active : ''} onClick={() => setActiveView('table')}>
                    <FontAwesomeIcon icon={faBorderAll} className={classes.icon} />
                    Table
                </button>
            </div>
            <div className={classes.content}>
                {activeView === 'list' ? <div>List</div> : <div>Table</div>}
            </div>
        </>
    )
}

export default App;
