import useDebounce from '../../utils/debounce';
import classes from './TextHighlighter.module.scss';

function TextHighlighter({text, searchTerm}) {

    const debouncedSearch = useDebounce(searchTerm);
    let highlightedText = text;

    if (text && debouncedSearch && text.toLowerCase().includes(debouncedSearch.toLowerCase())) {
        const parts = text.split(new RegExp(`(${debouncedSearch.replace(/[\\^$.*+?()[\]{}|/]/g, '\\$&')})`, 'gi'));

        highlightedText = parts.map((part, idx) => {
            return part.toLowerCase() === debouncedSearch.toLowerCase() ? <mark key={idx}>{part}</mark> : <span key={idx}>{part}</span>
        })
    }

    return (
        <>{highlightedText}</>
    )
}

export default TextHighlighter;
