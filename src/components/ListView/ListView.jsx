import classes from './ListView.module.scss';
import Card from '../Card/Card';

function ListView({variables}) {

    return (
        <div className={classes.cards}>
            {variables.map((variable, idx) => <Card variable={variable} key={idx} />)}
        </div>
    )
}

export default ListView;
