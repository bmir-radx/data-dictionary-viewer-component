import classes from './TableView.module.scss';
import OntologyTerms from '../OntologyTerms/OntologyTerms';
import ValueCodes from '../ValueCodes/ValueCodes';
import Tooltip from '../Tooltip/Tooltip';

function TableView({variables}) {

    const fields = ['Id', 'Section', 'Label', 'Datatype', 'Terms', 'Cardinality', 'Unit', 'Enumeration', 'Additional Missing Value Codes'];

    const headers = fields.map((field, i) => <th key={i}><Tooltip field={field} />{field}</th>)

    const rows = variables.map((variable, idx) => {
        return <tr key={idx}>{fields.map((field, i) => {
            let element = variable[field];

            if (field === 'Terms') {
                element = <OntologyTerms terms={variable[field]} />
            } else if (['Enumeration', 'Additional Missing Value Codes'].includes(field)) {
                element = (variable[field] === '' || variable[field] === undefined) ? variable[field] : <ValueCodes values={variable[field]} />
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
