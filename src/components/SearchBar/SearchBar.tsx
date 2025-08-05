import type { ChangeEventHandler } from 'react';
import classes from './SearchBar.module.scss';

interface SearchBarProps {
    changeHandler: ChangeEventHandler<HTMLInputElement>;
}

function SearchBar({ changeHandler }: SearchBarProps) {

    return <input className={classes.search} name='search' type='text' autoComplete='off' placeholder='🔍  Search data elements...' onChange={changeHandler} />
}

export default SearchBar;
