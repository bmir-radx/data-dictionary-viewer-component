import { useState, useEffect, useRef } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import classes from './TableFilter.module.scss';

interface TableFilterProps {
    field: string;
    filters: Record<string, string[]>;
    setFilters: Dispatch<SetStateAction<Record<string, string[]>>>;
    allValues: Record<string, string[]>;
    filteredValues: Record<string, string[]>;
}

function TableFilter({ field, filters, setFilters, allValues, filteredValues }: TableFilterProps) {

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
            <FontAwesomeIcon icon={faFilter} className={`${classes.icon} ${filters[field].length > 0 ? classes.active : ''}`} onClick={() => setOpen(!open)} />
            <div className={classes.dropdown}>
                {allValues[field].map((value, i) => {
                    return (
                        <label key={i}>
                            <input type='checkbox' checked={filters[field].includes(value)} disabled={!filteredValues[field].includes(value)} value={value} onChange={e => e.target.checked ? setFilters(prev => ({...prev, [field]: [...prev[field], e.target.value]})) : setFilters(prev => ({...prev, [field]: prev[field].filter(val => val !== e.target.value)}))} />
                            {value}
                        </label>
                    )
                })}
            </div>
        </div>
    )
}

export default TableFilter;
