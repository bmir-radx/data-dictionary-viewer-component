import classes from './TextHighlighter.module.scss';

function TextHighlighter({text, searchTerm}) {

    let highlightedText = text;

    if (text && searchTerm) {
        highlightedText = <mark>{text}</mark>;

        const parts = text.split(new RegExp(`(${searchTerm.replace(/[\\^$.*+?()[\]{}|/]/g, '\\$&')})`, 'gi'));

        highlightedText = parts.map((part, idx) => {
            return part.toLowerCase() === searchTerm.toLowerCase() ? <mark key={idx}>{part}</mark> : <span key={idx}>{part}</span>
        })
    }

    return (
        <>{highlightedText}</>
    )
}

export default TextHighlighter;
