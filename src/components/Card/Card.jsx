import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import classes from './Card.module.scss';

function Card({variable, tooltips}) {

    const fields = ['Section', 'Label', 'Datatype', 'Terms', 'Cardinality', 'Unit', 'Enumeration', 'Additional Missing Value Codes'],
        elements = [];

    fields.forEach((field, idx) => {
        if (variable[field] === '' || variable[field] === undefined) return;

        const hasValues = ['Enumeration', 'Additional Missing Value Codes'].includes(field);
        let values = undefined;

        if (hasValues) {
            values = variable[field].split('|').map((v, i) => {
                const value = v.split('=')
                return <div className={classes.flex} key={i}><span className={classes.value}>{value[0].trim().replace(/"/g, '')}</span><span>{value[1].trim().replace(/\[|\]/g, '')}</span></div>
            })
        }

        let element = variable[field];

        if (field === 'Terms') {
            const terms = element.split(' ');
            element = terms.map((term, i) => {
                const [ontology, concept] = term.split(':');
                const encoded = ontology === 'NCIT'
                    ? encodeURIComponent(`http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#${concept}`)
                    : encodeURIComponent(`http://purl.obolibrary.org/obo/${ontology}_${concept}`);
                const url = `https://bioportal.bioontology.org/ontologies/${ontology}/?p=classes&conceptid=${encoded}`;

                return <><a href={url} target='_blank'>{term}</a>{i + 1 < terms.length && ', '}</>
            })
        }

        elements.push(
            <div className={classes['dd-field-block']} key={idx}>
                <div className={classes.flex}>
                    <span className={classes.field}><span className={classes.tooltip} data-tooltip={tooltips[field]}><FontAwesomeIcon icon={faCircleQuestion} /></span><strong>{field}:</strong></span>
                    {!hasValues && <span>{element}</span>}
                </div>
                {hasValues && <div className={classes.values}>{values}</div>}
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
