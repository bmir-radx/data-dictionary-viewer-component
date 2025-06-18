import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns } from '@fortawesome/free-solid-svg-icons';
import classes from './ColumnPicker.module.scss';

function ColumnPicker({checkedColumns, setCheckedColumns}) {

    const allColumns = ['Id', 'Section', 'Label', 'Datatype', 'Terms', 'Cardinality', 'Unit', 'Enumeration', 'Additional Missing Value Codes'];

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setOpen(false)
            }
        };

        document.addEventListener('mousedown', handler);

        return () => document.removeEventListener('mousedown', handler);
    })

    return (
        <div className={`${classes.wrapper} ${open ? classes.open : ''}`} ref={dropdownRef}>
            <button className={classes.picker} onClick={() => setOpen(!open)}><FontAwesomeIcon icon={faTableColumns} className={classes.icon} />Manage Columns</button>
            <div className={classes.dropdown}>
                {allColumns.map((column, i) => {
                    return (
                        <label key={i}>
                            <input type='checkbox' checked={checkedColumns.includes(column)} disabled={column === 'Id'} value={column} onChange={e => e.target.checked ? setCheckedColumns(prev => [...prev, e.target.value]) : setCheckedColumns(prev => prev.filter(col => col !== e.target.value))} />
                            {column}
                        </label>
                    )
                })}
            </div>
        </div>
    )
}

export default ColumnPicker;
