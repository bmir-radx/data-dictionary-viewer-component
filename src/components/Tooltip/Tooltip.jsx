import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import classes from './Tooltip.module.scss';

function Tooltip({field}) {

    const tooltips = {
        'Id': 'Unique identifier for the datafile field',
        'Label': 'Specifies a presentation label for the datafile field being described',
        'Description': 'Detailed explanation or definition of what the field captures',
        'Section': 'Specifies a section, or group name, for each entry',
        'Cardinality': 'Indicates if the field accepts one or multiple values',
        'Terms': 'Ontology terms that describe the field',
        'Datatype': 'Expected data type (e.g., string, integer, date)',
        'Pattern': 'Regex pattern values must match',
        'Unit': 'Units for values that represent quantities',
        'Enumeration': 'List of allowed values and meanings',
        'Additional Missing Value Codes': 'Reasons for missing values',
        'Notes': 'Free-text field for additional comments',
        'Provenance': 'Provenance source',
        'SeeAlso': 'URL to additional documentation'
    };

    return (
        <span className={classes.tooltip} data-tooltip={tooltips[field]}><FontAwesomeIcon icon={faCircleQuestion} /></span>
    )
}

export default Tooltip;
