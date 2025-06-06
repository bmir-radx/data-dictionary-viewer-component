import { useRef } from 'react';
import classes from './ListView.module.scss';
import Card from '../Card/Card';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function ListView({variables, searchTerm}) {

    const listRef = useRef();

    return (
        <>
            <div className={classes.cards} ref={listRef}>
                {variables.map((variable, idx) => <Card variable={variable} searchTerm={searchTerm} key={idx} />)}
            </div>
            <ScrollToTop scrollRef={listRef} />
        </>
    )
}

export default ListView;
