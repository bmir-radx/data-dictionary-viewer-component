import { useState, useRef } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { TableVirtuosoHandle } from 'react-virtuoso';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import classes from './TableView.module.scss';
import TableOptions from '../TableOptions/TableOptions';
import Table from '../Table/Table';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

interface TableViewProps {
    valid: boolean;
    activeView: string;
    variables: Record<string, string>[];
    allValues: Record<string, string[]>;
    filteredValues: Record<string, string[]>;
    searchTerm: string;
    filters: Record<string, string[]>;
    setFilters: Dispatch<SetStateAction<Record<string, string[]>>>;
    allFields: string[];
}

function TableView({ valid, activeView, variables, allValues, filteredValues, searchTerm, filters, setFilters, allFields }: TableViewProps) {

    const [showScrollTop, setShowScrollTop] = useState(false);

    const [checkedColumns, setCheckedColumns] = useState(['Id', 'Section', 'Label', 'Datatype', 'Cardinality', 'Enumeration', 'MissingValueCodes'].filter(x => allFields.includes(x)));

    const [sortField, setSortField] = useState('Id');
    const [sortDirection, setSortDirection] = useState('Ascending');

    const sortedVariables = valid ? variables.sort((a, b) => {
        return sortDirection === 'Ascending' ? a[sortField].localeCompare(b[sortField]) : b[sortField].localeCompare(a[sortField])
    }) : variables;

    const tableRef = useRef<TableVirtuosoHandle | null>(null);

    const sortableColumns = ['Id', 'Section', 'Label', 'Datatype', 'Cardinality'].filter(x => allFields.includes(x));

    return (
        <div style={{ display: (activeView === 'table' || !valid) ? 'block' : 'none' }}>
            {valid && sortableColumns.length > 0 && <TableOptions sortField={sortField} setSortField={setSortField} sortDirection={sortDirection} setSortDirection={setSortDirection} checkedColumns={checkedColumns} setCheckedColumns={setCheckedColumns} sortableColumns={sortableColumns} allFields={allFields} />}
            {!valid && <div className={classes.notice}><FontAwesomeIcon icon={faCircleExclamation} className={classes['icon']} />Limited view: Unsupported data format. Please ensure data follows <a target='_blank' href='https://github.com/bmir-radx/radx-data-dictionary-specification/blob/main/radx-data-dictionary-specification.md'>these specifications</a>.</div>}
            <Table valid={valid} variables={sortedVariables} searchTerm={searchTerm} checkedColumns={checkedColumns} filters={filters} setFilters={setFilters} allValues={allValues} filteredValues={filteredValues} tableRef={tableRef} setShowScrollTop={setShowScrollTop} />
            {showScrollTop && <ScrollToTop scrollRef={tableRef} />}
        </div>
    )
}

export default TableView;
