import classes from './Card.module.scss';
import OntologyTerms from '../OntologyTerms/OntologyTerms';
import ValueCodes from '../ValueCodes/ValueCodes';
import Tooltip from '../Tooltip/Tooltip';
import TextHighlighter from '../TextHighlighter/TextHighlighter';

interface CardProps {
    variable: Record<string, string>;
    searchTerm: string;
    allFields: string[];
}

function Card({ variable, searchTerm, allFields }: CardProps) {

    const elements = allFields.filter(x => x !== 'Id').map((field, idx) => {
        if (variable[field] === '' || variable[field] === undefined) return;

        const hasValues = ['Enumeration', 'MissingValueCodes'].includes(field);

        let element = <span className={classes.text}><TextHighlighter text={variable[field]} searchTerm={searchTerm} /></span>;

        if (field === 'Terms') {
            element = <OntologyTerms terms={variable[field]} searchTerm={searchTerm} />
        }

        return (
            <div className={classes['dd-field-block']} key={idx}>
                <div className={classes.flex}>
                    <span className={classes.field}><Tooltip id={variable['Id']} field={field} /><strong>{field}:</strong></span>
                    {!hasValues && element}
                </div>
                {hasValues && <ValueCodes values={variable[field]} searchTerm={searchTerm} />}
            </div>
        )
    })

    return (
        <div className={classes.card}>
            <h3><TextHighlighter text={variable['Id']} searchTerm={searchTerm} /></h3>
            {elements}
        </div>
    )
}

export default Card;
