import classes from './Content.module.scss';
import ListView from '../ListView/ListView';
import TableView from '../TableView/TableView';

function Content({activeView, variables, searchTerm}) {

    const filteredVariables = variables.filter(variable => {
        for (const key in variable) {
            if (variable[key].toLowerCase().includes(searchTerm.toLowerCase())) return true;
        }
    })

    return (
        <div className={classes.content}>
            <p className={classes.count}>{filteredVariables.length} Result(s)</p>
            <ListView activeView={activeView} variables={filteredVariables} searchTerm={searchTerm} />
            <TableView activeView={activeView} variables={filteredVariables} searchTerm={searchTerm} />
        </div>
    )
}

export default Content;
