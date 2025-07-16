import { useState, useRef, forwardRef } from 'react';
import { Virtuoso } from 'react-virtuoso';
import useContainerWidth from '../../hooks/useContainerWidth';
import classes from './ListView.module.scss';
import Card from '../Card/Card';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function ListView({ activeView, variables, searchTerm }) {
    const listRef = useRef();
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [containerRef, width] = useContainerWidth();

    const columnsPerRow = width < 1120 ? 2 : 3;
    const rowCount = Math.ceil(variables.length / columnsPerRow);

    return (
        <div ref={containerRef} style={{ display: activeView === 'list' ? 'block' : 'none' }}>
            <Virtuoso
                ref={listRef}
                style={{ height: 750 }}
                totalCount={rowCount}
                itemContent={(rowIndex) => {
                    const rowItems = variables.slice(
                        rowIndex * columnsPerRow,
                        (rowIndex + 1) * columnsPerRow
                    );

                    return (
                        <div className={classes.cards}>
                            {rowItems.map((variable, i) => (
                                <Card variable={variable} searchTerm={searchTerm} key={i} />
                            ))}
                        </div>
                    );
                }}
                atTopStateChange={(atTop) => setShowScrollTop(!atTop)}
                components={{
                    List: forwardRef((props, ref) => (
                        <div ref={ref} {...props} className={classes.container} />
                    )),
                }}
            />
            {showScrollTop && <ScrollToTop scrollRef={listRef} />}
        </div>
    );
}

export default ListView;
