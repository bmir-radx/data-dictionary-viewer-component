import { TableVirtuoso } from 'react-virtuoso';
import classes from './Table.module.scss';
import OntologyTerms from '../OntologyTerms/OntologyTerms';
import ValueCodes from '../ValueCodes/ValueCodes';
import Tooltip from '../Tooltip/Tooltip';
import TextHighlighter from '../TextHighlighter/TextHighlighter';
import TableFilter from '../TableFilter/TableFilter';

function Table({variables, searchTerm, checkedColumns, filters, setFilters, allValues, filteredValues, tableRef, setShowScrollTop, filterableCols}) {

    const fields = {
        'Id': 200,
        'Section': 120,
        'Label': 200,
        'Datatype': undefined,
        'Terms': 140,
        'Cardinality': undefined,
        'Pattern': undefined,
        'Unit': undefined,
        'Description': undefined,
        'Enumeration': 300,
        'MissingValueCodes': 350,
        'Notes': undefined,
        'Provenance': undefined,
        'SeeAlso': undefined
    };

    const includedFields = Object.keys(fields).filter(col => checkedColumns.includes(col));

    const headers = includedFields.map((field, i) => {
        return (
            <th key={i} style={fields[field] && {minWidth: fields[field]}}>
                <Tooltip id='table' field={field} />
                {field}
                {filterableCols.includes(field) && <TableFilter field={field} filters={filters} setFilters={setFilters} allValues={allValues} filteredValues={filteredValues} />}
            </th>
        )
    })

    const rows = variables.map((variable) => {
        return includedFields.map((field, i) => {
            let element = <TextHighlighter text={variable[field]} searchTerm={searchTerm} />;

            if (field === 'Terms') {
                element = <OntologyTerms terms={variable[field]} searchTerm={searchTerm} />
            } else if (['Enumeration', 'MissingValueCodes'].includes(field)) {
                element = (variable[field] === '' || variable[field] === undefined) ? variable[field] : <ValueCodes values={variable[field]} searchTerm={searchTerm} />
            }

            return <td key={i}>{element}</td>
        })
    })

    return (
        <TableVirtuoso
            ref={tableRef}
            className={classes.table}
            totalCount={rows.length}
            itemContent={(rowIndex) => rows[rowIndex]}
            fixedHeaderContent={() => <tr>{headers}</tr>}
            atTopStateChange={(atTop) => setShowScrollTop(!atTop)}
        />
    )
}

export default Table;
