import classes from './OntologyTerms.module.scss';
import TextHighlighter from '../TextHighlighter/TextHighlighter';

function OntologyTerms({ terms, searchTerm }) {
    if (!terms) return <></>;

    const tokenize = str => str.trim().split(/\s+/);

    const isOntologyTerm = token => /^[A-Z]+:[A-Za-z0-9_]+$/.test(token);
    const isHttpLink = token => /^https?:\/\/\S+/.test(token);

    const renderToken = (token, i) => {
        if (isOntologyTerm(token)) {
            const [ontology, concept] = token.split(':');
            const encoded = ontology === 'NCIT'
                ? encodeURIComponent(`http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#${concept}`)
                : encodeURIComponent(`http://purl.obolibrary.org/obo/${ontology}_${concept}`);
            const url = `https://bioportal.bioontology.org/ontologies/${ontology}/?p=classes&conceptid=${encoded}`;
            return (
                <a href={url} target='_blank' rel='noopener noreferrer' key={i} className={classes.link}>
                    <TextHighlighter text={token} searchTerm={searchTerm} />
                </a>
            );
        }

        if (isHttpLink(token)) {
            return (
                <a href={token} target='_blank' rel='noopener noreferrer' key={i} className={classes.link}>
                    <TextHighlighter text={token} searchTerm={searchTerm} />
                </a>
            );
        }

        // default case: just return as text
        return <span key={i}><TextHighlighter text={token} searchTerm={searchTerm} /></span>;
    };

    const tokens = tokenize(terms);

    return <span className={classes.terms}>{tokens.map(renderToken)}</span>;
}

export default OntologyTerms;
