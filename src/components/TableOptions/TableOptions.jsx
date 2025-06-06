import classes from './TableOptions.module.scss';
import ColumnPicker from '../ColumnPicker/ColumnPicker';

function TableOptions({sortField, setSortField, sortDirection, setSortDirection, checkedColumns, setCheckedColumns}) {

    return (
        <div className={classes.options}>
            <div className={classes.sort}>
                Sort by:
                <select onChange={e => setSortField(e.target.value)} value={sortField}>
                    <option value='Id'>Id</option>
                    <option value='Section'>Section</option>
                    <option value='Datatype'>Datatype</option>
                    <option value='Cardinality'>Cardinality</option>
                </select>
                <select onChange={e => setSortDirection(e.target.value)} value={sortDirection}>
                    <option value='Ascending'>Ascending</option>
                    <option value='Descending'>Descending</option>
                </select>
            </div>
            <ColumnPicker checkedColumns={checkedColumns} setCheckedColumns={setCheckedColumns} />
        </div>
    )
}

export default TableOptions;
