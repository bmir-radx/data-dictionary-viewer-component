import classes from './ValueCodes.module.scss';
import TextHighlighter from '../TextHighlighter/TextHighlighter';

function ValueCodes({values, searchTerm}) {
    
    const element = values.split('|').map((v, i) => {
        const value = v.split('=')

        return (
            <div className={classes.flex} key={i}>
                <span className={classes.value}><TextHighlighter text={value[0].trim().replace(/"/g, '')} searchTerm={searchTerm} /></span>
                <span><TextHighlighter text={value[1].trim().replace(/\[|\]/g, '')} searchTerm={searchTerm} /></span>
            </div>
        )
    })

    return (
        <div className={classes.values}>{element}</div>
    )
}

export default ValueCodes;
