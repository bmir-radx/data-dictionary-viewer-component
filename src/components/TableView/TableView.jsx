import { useState, useRef } from 'react';
import classes from './TableView.module.scss';
import TableOptions from '../TableOptions/TableOptions';
import Table from '../Table/Table';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function TableView({activeView, variables, allValues, filteredValues, searchTerm, filters, setFilters, filterableCols, allFields}) {

    const [showScrollTop, setShowScrollTop] = useState(false);

    const [checkedColumns, setCheckedColumns] = useState(['Id', 'Section', 'Label', 'Datatype', 'Cardinality', 'Enumeration', 'MissingValueCodes'].filter(x => allFields.includes(x)));

    const [sortField, setSortField] = useState('Id');
    const [sortDirection, setSortDirection] = useState('Ascending');

    const sortedVariables = variables.sort((a, b) => {
        return sortDirection === 'Ascending' ? a[sortField].localeCompare(b[sortField]) : b[sortField].localeCompare(a[sortField])
    })

    const tableRef = useRef();

    const sortableColumns = ['Id', 'Section', 'Label', 'Datatype', 'Cardinality'].filter(x => allFields.includes(x));

    return (
        <div style={{ display: activeView === 'table' ? 'block' : 'none' }}>
            {sortableColumns.length > 0 && <TableOptions sortField={sortField} setSortField={setSortField} sortDirection={sortDirection} setSortDirection={setSortDirection} checkedColumns={checkedColumns} setCheckedColumns={setCheckedColumns} sortableColumns={sortableColumns} allFields={allFields} />}
            <Table variables={sortedVariables} searchTerm={searchTerm} checkedColumns={checkedColumns} filters={filters} setFilters={setFilters} allValues={allValues} filteredValues={filteredValues} tableRef={tableRef} setShowScrollTop={setShowScrollTop} filterableCols={filterableCols} />
            {showScrollTop && <ScrollToTop scrollRef={tableRef} />}
        </div>
    )
}

export default TableView;
