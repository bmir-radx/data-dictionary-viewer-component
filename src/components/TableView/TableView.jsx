import classes from './TableView.module.scss';
import TableOptions from '../TableOptions/TableOptions';
import Table from '../Table/Table';

function TableView({variables, searchTerm, sortField, setSortField, sortDirection, setSortDirection, checkedColumns, setCheckedColumns}) {

    const sortedVariables = variables.sort((a, b) => {
        return sortDirection === 'Ascending' ? a[sortField].localeCompare(b[sortField]) : b[sortField].localeCompare(a[sortField])
    })

    return (
        <>
            <TableOptions sortField={sortField} setSortField={setSortField} sortDirection={sortDirection} setSortDirection={setSortDirection} checkedColumns={checkedColumns} setCheckedColumns={setCheckedColumns} />
            <Table variables={sortedVariables} searchTerm={searchTerm} checkedColumns={checkedColumns} />
        </>
    )
}

export default TableView;
