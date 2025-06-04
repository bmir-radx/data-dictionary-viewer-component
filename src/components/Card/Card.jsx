import classes from './Card.module.scss';
import OntologyTerms from '../OntologyTerms/OntologyTerms';
import ValueCodes from '../ValueCodes/ValueCodes';
import Tooltip from '../Tooltip/Tooltip';

function Card({variable}) {

    const fields = ['Section', 'Label', 'Datatype', 'Terms', 'Cardinality', 'Unit', 'Enumeration', 'Additional Missing Value Codes'],
        elements = [];

    fields.forEach((field, idx) => {
        if (variable[field] === '' || variable[field] === undefined) return;

        const hasValues = ['Enumeration', 'Additional Missing Value Codes'].includes(field);

        let element = <span>{variable[field]}</span>;

        if (field === 'Terms') {
            element = <OntologyTerms terms={variable[field]} />
        }

        elements.push(
            <div className={classes['dd-field-block']} key={idx}>
                <div className={classes.flex}>
                    <span className={classes.field}><Tooltip field={field} /><strong>{field}:</strong></span>
                    {!hasValues && element}
                </div>
                {hasValues && <ValueCodes values={variable[field]} />}
            </div>
        )
    })

    return (
        <div className={classes.card}>
            <h3>{variable['Id']}</h3>
            {elements}
        </div>
    )
}

export default Card;
