import { useState, useRef } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { TableVirtuosoHandle } from 'react-virtuoso';
import TableOptions from '../TableOptions/TableOptions';
import Table from '../Table/Table';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

interface TableViewProps {
    activeView: string;
    variables: Record<string, string>[];
    allValues: Record<string, string[]>;
    filteredValues: Record<string, string[]>;
    searchTerm: string;
    filters: Record<string, string[]>;
    setFilters: Dispatch<SetStateAction<Record<string, string[]>>>;
    allFields: string[];
}

function TableView({ activeView, variables, allValues, filteredValues, searchTerm, filters, setFilters, allFields }: TableViewProps) {

    const [showScrollTop, setShowScrollTop] = useState(false);

    const [checkedColumns, setCheckedColumns] = useState(['Id', 'Section', 'Label', 'Datatype', 'Cardinality', 'Enumeration', 'MissingValueCodes'].filter(x => allFields.includes(x)));

    const [sortField, setSortField] = useState('Id');
    const [sortDirection, setSortDirection] = useState('Ascending');

    const sortedVariables = variables.sort((a, b) => {
        return sortDirection === 'Ascending' ? a[sortField].localeCompare(b[sortField]) : b[sortField].localeCompare(a[sortField])
    })

    const tableRef = useRef<TableVirtuosoHandle | null>(null);

    const sortableColumns = ['Id', 'Section', 'Label', 'Datatype', 'Cardinality'].filter(x => allFields.includes(x));

    return (
        <div style={{ display: activeView === 'table' ? 'block' : 'none' }}>
            {sortableColumns.length > 0 && <TableOptions sortField={sortField} setSortField={setSortField} sortDirection={sortDirection} setSortDirection={setSortDirection} checkedColumns={checkedColumns} setCheckedColumns={setCheckedColumns} sortableColumns={sortableColumns} allFields={allFields} />}
            <Table variables={sortedVariables} searchTerm={searchTerm} checkedColumns={checkedColumns} filters={filters} setFilters={setFilters} allValues={allValues} filteredValues={filteredValues} tableRef={tableRef} setShowScrollTop={setShowScrollTop} />
            {showScrollTop && <ScrollToTop scrollRef={tableRef} />}
        </div>
    )
}

export default TableView;
