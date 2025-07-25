import { useState, useEffect, useTransition } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faBorderAll, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Papa from 'papaparse';
import classes from './App.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import Content from '../Content/Content';
import ErrorPage from '../ErrorPage/ErrorPage';

function App({theme, data, initialView = 'list', showSearch = true, heading = 'Data Dictionary Viewer'}) {

    const [activeView, setActiveView] = useState(initialView);
    const [searchTerm, setSearchTerm] = useState('');

    const [variables, setVariables] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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
        if (data.toLowerCase().endsWith('.csv')) {
            fetch(data)
                .then(response => response.text())
                .then(text => parseData(text));
        } if (data.toLowerCase().includes('radxdatahub')) {
            fetch(data)
                .then(response => {
                    if (response.ok) return response.json();
                    throw new Error('Request failed!');
                })
                .then(text => parseData(text.data))
                .catch(e => {
                    setLoading(false);
                    setError(true);
                });
        } else {
            parseData(data);
        }
    };

    useEffect(() => {
        fetchData(data);
    }, [data]);

    if (loading) {
        return <FontAwesomeIcon icon={faSpinner} spin className={classes.fetch} />
    }

    if (error) {
        return <ErrorPage message="Unable to fetch data." />
    }

    if (variables.length === 0) {
        return <ErrorPage message="No data provided." />
    }

    const allFields = ['Id', 'Section', 'Label', 'Datatype', 'Terms', 'Cardinality', 'Pattern', 'Unit', 'Description', 'Enumeration', 'MissingValueCodes', 'Notes', 'Provenance', 'SeeAlso'].filter(x => Object.keys(variables[0]).includes(x));

    if (allFields.length === 0 || !allFields.includes('Id')) {
        return <ErrorPage message={<>Invalid data format.<br /><br />Expected CSV format following <a href="https://github.com/bmir-radx/radx-data-dictionary-specification/blob/main/radx-data-dictionary-specification.md" target="_blank">these specifications</a>. The <code>Id</code> column is required.</>} />
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
                <Content activeView={activeView} variables={variables} searchTerm={searchTerm} allFields={allFields}  />
            </div>
        </div>
    )
}

export default App;
