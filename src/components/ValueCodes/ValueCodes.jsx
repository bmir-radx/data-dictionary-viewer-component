import classes from './ValueCodes.module.scss';

function ValueCodes({values}) {
    
    const element = values.split('|').map((v, i) => {
        const value = v.split('=')
        return <div className={classes.flex} key={i}><span className={classes.value}>{value[0].trim().replace(/"/g, '')}</span><span>{value[1].trim().replace(/\[|\]/g, '')}</span></div>
    })

    return (
        <div className={classes.values}>{element}</div>
    )
}

export default ValueCodes;
