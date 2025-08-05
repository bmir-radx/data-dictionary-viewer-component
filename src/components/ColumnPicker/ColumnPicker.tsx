import { useState, useEffect, useRef } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns } from '@fortawesome/free-solid-svg-icons';
import classes from './ColumnPicker.module.scss';

interface ColumnPickerProps {
    checkedColumns: string[];
    setCheckedColumns: Dispatch<SetStateAction<string[]>>;
    allFields: string[];
}

function ColumnPicker({ checkedColumns, setCheckedColumns, allFields }: ColumnPickerProps) {

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!dropdownRef.current?.contains(e.target as Node)) {
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
                {allFields.map((column, i) => {
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
