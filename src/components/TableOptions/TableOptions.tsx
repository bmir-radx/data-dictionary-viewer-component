import type { Dispatch, SetStateAction } from 'react';
import classes from './TableOptions.module.scss';
import ColumnPicker from '../ColumnPicker/ColumnPicker';

interface TableOptionsProps {
    sortField: string;
    setSortField: Dispatch<SetStateAction<string>>;
    sortDirection: string;
    setSortDirection: Dispatch<SetStateAction<string>>;
    checkedColumns: string[];
    setCheckedColumns: Dispatch<SetStateAction<string[]>>;
    sortableColumns: string[];
    allFields: string[];
}

function TableOptions({ sortField, setSortField, sortDirection, setSortDirection, checkedColumns, setCheckedColumns, sortableColumns, allFields }: TableOptionsProps) {

    return (
        <div className={classes.options}>
            <div>
                Sort by:
                <select onChange={e => setSortField(e.target.value)} value={sortField}>
                    {sortableColumns.map((col, i) => <option key={i} value={col}>{col}</option>)}
                </select>
                <select onChange={e => setSortDirection(e.target.value)} value={sortDirection}>
                    <option value='Ascending'>Ascending</option>
                    <option value='Descending'>Descending</option>
                </select>
            </div>
            <ColumnPicker checkedColumns={checkedColumns} setCheckedColumns={setCheckedColumns} allFields={allFields} />
        </div>
    )
}

export default TableOptions;
