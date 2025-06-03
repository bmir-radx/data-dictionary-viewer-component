import classes from './TableView.module.scss';

function TableView({variables, tooltips}) {

    const fields = ['Id', 'Section', 'Label', 'Datatype', 'Terms', 'Cardinality', 'Unit', 'Enumeration', 'Additional Missing Value Codes'];

    const headers = fields.map(field => <th>{field}</th>)

    const rows = variables.map(variable => {
        return <tr>{fields.map(field => {
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
            } else if (['Enumeration', 'Additional Missing Value Codes'].includes(field)) {
                element = (variable[field] === '' || variable[field] === undefined) ? variable[field] : variable[field].split('|').map((v, i) => {
                    const value = v.split('=')
                    return <div className={classes.flex} key={i}><span className={classes.value}>{value[0].trim().replace(/"/g, '')}</span><span>{value[1].trim().replace(/\[|\]/g, '')}</span></div>
                })
            }

            return <td>{element}</td>})
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
