import { useRef } from 'react';
import classes from './TableView.module.scss';
import TableOptions from '../TableOptions/TableOptions';
import Table from '../Table/Table';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function TableView({variables, searchTerm, sortField, setSortField, sortDirection, setSortDirection, checkedColumns, setCheckedColumns}) {

    const sortedVariables = variables.sort((a, b) => {
        return sortDirection === 'Ascending' ? a[sortField].localeCompare(b[sortField]) : b[sortField].localeCompare(a[sortField])
    })

    const tableRef = useRef();

    return (
        <>
            <TableOptions sortField={sortField} setSortField={setSortField} sortDirection={sortDirection} setSortDirection={setSortDirection} checkedColumns={checkedColumns} setCheckedColumns={setCheckedColumns} />
            <Table variables={sortedVariables} searchTerm={searchTerm} checkedColumns={checkedColumns} tableRef={tableRef} />
            <ScrollToTop scrollRef={tableRef} />
        </>
    )
}

export default TableView;
