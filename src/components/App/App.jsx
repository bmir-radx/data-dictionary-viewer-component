import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faBorderAll } from '@fortawesome/free-solid-svg-icons';
import classes from './App.module.scss';
import ListView from '../ListView/ListView';

function App() {
    
    const variables = [
        {
            'Id': 'nih_age',
            'Label': 'What is your age?',
            'Terms': 'PATO:0000011', 
            'Datatype': 'integer',
            'Unit': 'year',
            'Additional Missing Value Codes': '"-9999"=[Reason Unknown] |"-9960"=[This information was not provided by the originator (participant or sensor)] |"-9985"=[Data was invalid (wrong format, wrong or unknown units, not parseable, or impossible value)] |"-9944"=[This element (question or variable) was not presented to user for collection (reason unspecified)]',
            'Section': 'Age',
            'Cardinality': 'single'
        },
        {
            'Id': 'nih_alcohol_frequency',
            'Label': 'How often did you have a drink containing alcohol ?',
            'Terms': 'GSSO:006602 NCIT:C81229 NCIT:C16273', 
            'Datatype': 'integer',
            'Enumeration': '"0"=[Never] | "1"=[Monthly Or Less] | "2"=[Two To Four Times Per Month] | "3"=[Two To Three Times Per Week] | "4"=[Four Or More Times Per Week] | "98"=[Don\'t know] | "99"=[Prefer not to answer]',
            'Additional Missing Value Codes': '"-9999"=[Reason Unknown] |"-9960"=[This information was not provided by the originator (participant or sensor)] |"-9985"=[Data was invalid (wrong format, wrong or unknown units, not parseable, or impossible value)] |"-9944"=[This element (question or variable) was not presented to user for collection (reason unspecified)]',
            'Section': 'Medical History',
            'Cardinality': 'single'
        },
        {
            'Id': 'nih_autoimm',
            'Label': 'Autoimmune disease',
            'Terms': 'MONDO:0007179', 
            'Datatype': 'integer',
            'Enumeration': '"0"=[No] | "1"=[Yes] | "97"=[Other] | "98"=[Don\'t know] | "99"=[Prefer not to answer]',
            'Additional Missing Value Codes': '"-9999"=[Reason Unknown] |"-9960"=[This information was not provided by the originator (participant or sensor)] |"-9985"=[Data was invalid (wrong format, wrong or unknown units, not parseable, or impossible value)] |"-9944"=[This element (question or variable) was not presented to user for collection (reason unspecified)]',
            'Section': 'Medical History',
            'Cardinality': 'single'
        },
        {
            'Id': 'nih_race',
            'Label': 'What is your race?',
            'Terms': 'NCIT:C17049 GSSO:002199', 
            'Datatype': 'integer',
            'Enumeration': '"0"=[American Indian or Alaska Native] | "1"=[Black or African American] | "2"=[Asian] | "3"=[Native Hawaiian or Other Pacific Islander] | "4"=[White] | "5"=[Middle Eastern or North African] | "6"=[Two or more races] | "97"=[Some other race] | "98"=[Do not know] | "99"=[Prefer not to answer]',
            'Additional Missing Value Codes': '"-9999"=[Reason Unknown] |"-9960"=[This information was not provided by the originator (participant or sensor)] |"-9985"=[Data was invalid (wrong format, wrong or unknown units, not parseable, or impossible value)] |"-9944"=[This element (question or variable) was not presented to user for collection (reason unspecified)]',
            'Section': 'Race',
            'Cardinality': 'single'
        }
    ]

    const tooltips = {
            'Id': 'Unique identifier for the datafile field',
            'Label': 'Specifies a presentation label for the datafile field being described',
            'Description': 'Detailed explanation or definition of what the field captures',
            'Section': 'Specifies a section, or group name, for each entry',
            'Cardinality': 'Indicates if the field accepts one or multiple values',
            'Terms': 'Ontology terms that describe the field',
            'Datatype': 'Expected data type (e.g., string, integer, date)',
            'Pattern': 'Regex pattern values must match',
            'Unit': 'Units for values that represent quantities',
            'Enumeration': 'List of allowed values and meanings',
            'Additional Missing Value Codes': 'Reasons for missing values',
            'Notes': 'Free-text field for additional comments',
            'Provenance': 'Provenance source',
            'SeeAlso': 'URL to additional documentation'
        };
    
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
                {activeView === 'list' ? <ListView variables={variables} tooltips={tooltips} /> : <div>Table</div>}
            </div>
        </>
    )
}

export default App;
