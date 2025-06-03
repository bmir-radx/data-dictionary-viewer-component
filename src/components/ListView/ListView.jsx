import classes from './ListView.module.scss';
import Card from '../Card/Card';

function ListView({variables, tooltips}) {

    return (
        <div className={classes.cards}>
            {variables.map((variable, idx) => <Card variable={variable} tooltips={tooltips} key={idx} />)}
        </div>
    )
}

export default ListView;
