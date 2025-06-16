import classes from './Card.module.scss';
import OntologyTerms from '../OntologyTerms/OntologyTerms';
import ValueCodes from '../ValueCodes/ValueCodes';
import Tooltip from '../Tooltip/Tooltip';
import TextHighlighter from '../TextHighlighter/TextHighlighter';

function Card({variable, searchTerm}) {

    const fields = ['Section', 'Label', 'Datatype', 'Terms', 'Cardinality', 'Unit', 'Enumeration', 'Additional Missing Value Codes'],
        elements = [];

    fields.forEach((field, idx) => {
        if (variable[field] === '' || variable[field] === undefined) return;

        const hasValues = ['Enumeration', 'Additional Missing Value Codes'].includes(field);

        let element = <span><TextHighlighter text={variable[field]} searchTerm={searchTerm} /></span>;

        if (field === 'Terms') {
            element = <OntologyTerms terms={variable[field]} searchTerm={searchTerm} />
        }

        elements.push(
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
