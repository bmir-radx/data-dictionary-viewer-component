import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classes from './TableFilter.module.scss';

function TableFilter({field, filters, setFilters, allValues, filteredValues}) {

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
            <FontAwesomeIcon icon={faBars} className={`${classes.icon} ${filters[field].length > 0 ? classes.active : ''}`} onClick={() => setOpen(!open)} />
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
