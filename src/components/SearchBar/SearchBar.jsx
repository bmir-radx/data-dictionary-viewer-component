import classes from './SearchBar.module.scss';

function SearchBar({changeHandler}) {

    return <input className={classes.search} name='search' type='text' autoComplete='off' placeholder='🔍  Search data elements...' onChange={changeHandler} />
}

export default SearchBar;
