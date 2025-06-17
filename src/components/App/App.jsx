import { useState, useEffect, useTransition } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faBorderAll, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Papa from 'papaparse';
import classes from './App.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import Content from '../Content/Content';

function App() {
    
    const [activeView, setActiveView] = useState('list');
    const [searchTerm, setSearchTerm] = useState('');

    const [variables, setVariables] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isPending, startTransition] = useTransition();

    const changeHandler = e => {
        startTransition(() => setSearchTerm(e.target.value));
    };

    const fetchData = file => {
        try {
            fetch(file)
                .then(response => response.text())
                .then(text => {
                    Papa.parse(text, {
                        header: true,
                        skipEmptyLines: true,
                        complete: data => {
                            setVariables(data.data);
                            setLoading(false);
                        }
                    })
                })
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData('/sample.csv');
    }, [])

    if (loading) {
        return <></>
    }

    return (
        <>
            <h1>Data Dictionary Viewer</h1>
            <div className={classes.search}>
                <SearchBar changeHandler={changeHandler} />{isPending && <FontAwesomeIcon icon={faSpinner} spin className={classes.loader} />}
                <div className={classes.buttons}>
                    <button className={`${classes.button} ${activeView === 'list' ? classes.active : ''}`} onClick={() => setActiveView('list')}>
                        <FontAwesomeIcon icon={faList} className={classes.icon} />
                        List
                    </button>
                    <button className={`${classes.button} ${activeView === 'table' ? classes.active : ''}`} onClick={() => setActiveView('table')}>
                        <FontAwesomeIcon icon={faBorderAll} className={classes.icon} />
                        Table
                    </button>
                </div>
            </div>
            <Content activeView={activeView} variables={variables} searchTerm={searchTerm} />
        </>
    )
}

export default App;
