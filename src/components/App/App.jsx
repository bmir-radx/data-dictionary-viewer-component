import { useState, useEffect, useTransition } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faBorderAll, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Papa from 'papaparse';
import classes from './App.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import Content from '../Content/Content';

function App({theme, data, initialView = 'list', showSearch = true, heading = 'Data Dictionary Viewer'}) {

    const [activeView, setActiveView] = useState(initialView);
    const [searchTerm, setSearchTerm] = useState('');

    const [variables, setVariables] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isPending, startTransition] = useTransition();

    const changeHandler = e => {
        startTransition(() => setSearchTerm(e.target.value));
    };

    const parseData = text => {
        Papa.parse(text, {
            header: true,
            skipEmptyLines: true,
            complete: result => {
                setVariables(result.data);
                setLoading(false);
            }
        });
    }

    const fetchData = data => {
        try {
            if (data.toLowerCase().endsWith('.csv')) {
                fetch(data)
                    .then(response => response.text())
                    .then(text => parseData(text));
            } if (data.toLowerCase().includes('radxdatahub')) {
                fetch(data)
                    .then(response => response.json())
                    .then(text => parseData(text.data));
            } else {
                parseData(data);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchData(data);
    }, [data]);

    if (loading) {
        return <></>;
    }

    return (
        <div className={`${classes.container} ${theme}`}>
            <div className={classes.main}>
                {heading && <h1 className={classes.title}>{heading}</h1>}
                <div className={classes.search}>
                    {showSearch && (
                        <SearchBar changeHandler={changeHandler} />
                    )}
                    {isPending && <FontAwesomeIcon icon={faSpinner} spin className={classes.loader} />}
                    <div className={classes.buttons}>
                        <button
                            className={activeView === 'list' ? classes.active : ''}
                            onClick={() => setActiveView('list')}
                        >
                            <FontAwesomeIcon icon={faList} className={classes.icon} />
                            List
                        </button>
                        <button
                            className={activeView === 'table' ? classes.active : ''}
                            onClick={() => setActiveView('table')}
                        >
                            <FontAwesomeIcon icon={faBorderAll} className={classes.icon} />
                            Table
                        </button>
                    </div>
                </div>
                <Content activeView={activeView} variables={variables} searchTerm={searchTerm} />
            </div>
        </div>
    )
}

export default App;
