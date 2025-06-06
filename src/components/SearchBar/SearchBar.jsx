import classes from './SearchBar.module.scss';

function SearchBar({searchTerm, setSearchTerm}) {

    return <input className={classes.search} type='text' value={searchTerm} placeholder='🔍  Search data elements...' onChange={e => setSearchTerm(e.target.value)} />
}

export default SearchBar;
