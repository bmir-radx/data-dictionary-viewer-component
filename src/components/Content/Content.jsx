import { useState } from 'react';
import classes from './Content.module.scss';
import ListView from '../ListView/ListView';
import TableView from '../TableView/TableView';

function Content({activeView, variables, searchTerm}) {

    const [checkedColumns, setCheckedColumns] = useState(['Id', 'Section', 'Label', 'Datatype', 'Cardinality', 'Enumeration', 'Additional Missing Value Codes']);

    const [sortField, setSortField] = useState('Id');
    const [sortDirection, setSortDirection] = useState('Ascending');

    const filteredVariables = variables.filter(variable => {
        for (const key in variable) {
            if (variable[key].toLowerCase().includes(searchTerm.toLowerCase())) return true;
        }
    })

    return (
        <div className={classes.content}>
            <p className={classes.count}>{filteredVariables.length} Result(s)</p>
            {
                activeView === 'list'
                ? <ListView variables={filteredVariables} searchTerm={searchTerm} />
                : <TableView variables={filteredVariables} searchTerm={searchTerm} sortField={sortField} setSortField={setSortField} sortDirection={sortDirection} setSortDirection={setSortDirection} checkedColumns={checkedColumns} setCheckedColumns={setCheckedColumns} />
            }
        </div>
    )
}

export default Content;
