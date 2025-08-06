import { useState, useEffect, useTransition } from 'react';
import type { ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faBorderAll, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Papa from 'papaparse';
import classes from './App.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import Content from '../Content/Content';
import ErrorPage from '../ErrorPage/ErrorPage';

interface AppProps {
    data: string;
    theme?: 'light' | 'dark';
    initialView?: 'list' | 'table';
    showSearch?: boolean;
    heading?: string;
}

function App({ data = '', theme = 'light', initialView = 'list', showSearch = true, heading = 'Data Dictionary Viewer' }: AppProps) {

    const [activeView, setActiveView] = useState(initialView);
    const [searchTerm, setSearchTerm] = useState('');

    const [variables, setVariables] = useState<Record<string, string>[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [isPending, startTransition] = useTransition();

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        startTransition(() => setSearchTerm(e.target.value));
    };

    const parseData = (text: string) => {
        Papa.parse(text, {
            header: true,
            skipEmptyLines: true,
            complete: result => {
                setVariables(result.data as Record<string, string>[]);
                setLoading(false);
            }
        });
    }

    const fetchData = (data: string) => {
        if (data.toLowerCase().endsWith('.csv')) {
            fetch(data)
                .then(response => {
                    if (response.ok) return response.text();
                    throw new Error('Request failed!');
                })
                .then(text => parseData(text))
                .catch(() => {
                    setLoading(false);
                    setError(true);
                });
        } else if (data.toLowerCase().includes('radxdatahub')) {
            fetch(data)
                .then(response => {
                    if (response.ok) return response.json();
                    throw new Error('Request failed!');
                })
                .then(text => parseData(text.data))
                .catch(() => {
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
        return <ErrorPage message='Unable to fetch data.' />
    }

    if (variables.length === 0) {
        return <ErrorPage message='No data provided.'/>
    }

    const allFields = ['Id', 'Section', 'Label', 'Datatype', 'Terms', 'Cardinality', 'Pattern', 'Unit', 'Description', 'Enumeration', 'MissingValueCodes', 'Notes', 'Provenance', 'SeeAlso'].filter(x => Object.keys(variables[0]).includes(x));
    const valid = !(allFields.length === 0 || !allFields.includes('Id'));

    return (
        <div className={`${classes.container} ${theme}`}>
            <div className={classes.main}>
                {heading && <h1 className={classes.title}>{heading}</h1>}
                <div className={classes.search}>
                    {showSearch && (
                        <SearchBar changeHandler={changeHandler} />
                    )}
                    {isPending && <FontAwesomeIcon icon={faSpinner} spin className={classes.loader} />}
                    {valid && <div className={classes.buttons}>
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
                    </div>}
                </div>
                <Content valid={valid} activeView={activeView} variables={variables} searchTerm={searchTerm} allFields={allFields} />
            </div>
        </div>
    )
}

export default App;
