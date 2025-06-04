import classes from './TableView.module.scss';
import OntologyTerms from '../OntologyTerms/OntologyTerms';
import ValueCodes from '../ValueCodes/ValueCodes';
import Tooltip from '../Tooltip/Tooltip';
import TextHighlighter from '../TextHighlighter/TextHighlighter';

function TableView({variables, searchTerm}) {

    const fields = {
        'Id': undefined,
        'Section': 120,
        'Label': 200,
        'Datatype': undefined,
        'Terms': 120,
        'Cardinality': undefined,
        'Unit': undefined,
        'Enumeration': 300,
        'Additional Missing Value Codes': 350
    };

    const headers = Object.keys(fields).map((field, i) => <th key={i} style={fields[field] && {width: fields[field]}}><Tooltip field={field} />{field}</th>)

    const rows = variables.map((variable, idx) => {
        return <tr key={idx}>{Object.keys(fields).map((field, i) => {
            let element = <TextHighlighter text={variable[field]} searchTerm={searchTerm} />;

            if (field === 'Terms') {
                element = <OntologyTerms terms={variable[field]} searchTerm={searchTerm} />
            } else if (['Enumeration', 'Additional Missing Value Codes'].includes(field)) {
                element = (variable[field] === '' || variable[field] === undefined) ? variable[field] : <ValueCodes values={variable[field]} searchTerm={searchTerm} />
            }

            return <td key={i}>{element}</td>})
        }</tr>
    })

    return (
        <div className={classes.wrapper}>
            <table>
                <thead><tr>{headers}</tr></thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    )
}

export default TableView;
