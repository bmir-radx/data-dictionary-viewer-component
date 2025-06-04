import classes from './SearchBar.module.scss';

function SearchBar({searchTerm, handleChange}) {

    return <input type='text' value={searchTerm} placeholder='🔍 Search data elements...' onChange={e => handleChange(e.target.value)} />
}

export default SearchBar;
