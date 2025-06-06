import classes from './OntologyTerms.module.scss';
import TextHighlighter from '../TextHighlighter/TextHighlighter';

function OntologyTerms({terms, searchTerm}) {

    const term_links = terms === '' ? [] : terms.split('\n').map((term, i) => {
        const [ontology, concept] = term.split(':');
        const encoded = ontology === 'NCIT'
            ? encodeURIComponent(`http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#${concept}`)
            : encodeURIComponent(`http://purl.obolibrary.org/obo/${ontology}_${concept}`);
        const url = `https://bioportal.bioontology.org/ontologies/${ontology}/?p=classes&conceptid=${encoded}`;

        return <a href={url} target='_blank' key={i}><TextHighlighter text={term} searchTerm={searchTerm} /></a>
    })

    return (
        <span className={classes.terms}>{term_links}</span>
    )
}

export default OntologyTerms;
