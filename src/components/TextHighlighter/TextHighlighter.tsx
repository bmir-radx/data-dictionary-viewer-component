interface TextHighlighterProps {
    text: string;
    searchTerm: string;
}

function TextHighlighter({ text, searchTerm }: TextHighlighterProps) {

    let highlightedText;

    if (text && searchTerm && text.toLowerCase().includes(searchTerm.toLowerCase())) {
        const parts = text.split(new RegExp(`(${searchTerm.replace(/[\\^$.*+?()[\]{}|/]/g, '\\$&')})`, 'gi'));

        highlightedText = parts.map((part, idx) => {
            return part.toLowerCase() === searchTerm.toLowerCase() ? <mark key={idx}>{part}</mark> : <span key={idx}>{part}</span>
        })
    }

    return (
        <>{highlightedText ?? text}</>
    )
}

export default TextHighlighter;
