import { useState } from 'react';
import classes from './Content.module.scss';
import ListView from '../ListView/ListView';
import TableView from '../TableView/TableView';

function Content({activeView, variables, searchTerm, allFields}) {

    const filterableCols = ['Section', 'Datatype', 'Cardinality', 'Unit'].filter(x => allFields.includes(x));

    const [filters, setFilters] = useState(filterableCols.reduce((acc, field) => {
        acc[field] = [];
        return acc;
    }, {}));

    // Filterable values from full set of variables
    const allValues = Object.keys(filters).reduce((acc, field) => {
        acc[field] = [...new Set(variables.map(variable => variable[field]).filter(curr => curr.trim() !== ''))].sort();
        return acc;
    }, {});

    // Filtered variables from search (displayed in list and full table)
    const searchFilteredVariables = variables.filter(variable => {
        for (const key in variable) {
            if (variable[key].toLowerCase().includes(searchTerm.toLowerCase())) return true;
        }
    })

    // Filterable values after search filter
    const filteredValues = Object.keys(filters).reduce((acc, field) => {
        acc[field] = [...new Set(searchFilteredVariables.map(variable => variable[field]).filter(curr => curr.trim() !== ''))].sort();
        return acc;
    }, {});

    // Filtered variables from both search and value filters (displayed in filtered table)
    const valueFilteredVariables = Object.keys(filters).reduce((acc, field) => {
        const enabledFilters = filters[field].filter(value => filteredValues[field].includes(value));
        return enabledFilters.length === 0 ? acc : acc.filter(variable => enabledFilters.includes(variable[field]));
    }, searchFilteredVariables);

    return (
        <div className={classes.content}>
            <p className={classes.count}>{(activeView === 'table' && Object.values(filters).some(arr => arr.length > 0)) ? `${valueFilteredVariables.length} of ` : ''}{searchFilteredVariables.length} Result(s)</p>
            <ListView activeView={activeView} variables={searchFilteredVariables} searchTerm={searchTerm} allFields={allFields} />
            <TableView activeView={activeView} variables={valueFilteredVariables} allValues={allValues} filteredValues={filteredValues} searchTerm={searchTerm} filters={filters} setFilters={setFilters} filterableCols={filterableCols} allFields={allFields} />
        </div>
    )
}

export default Content;
