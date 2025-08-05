import type { RefObject } from 'react';
import type { VirtuosoHandle, TableVirtuosoHandle } from 'react-virtuoso';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import classes from './ScrollToTop.module.scss';

interface ScrollToTopProps {
    scrollRef: RefObject<VirtuosoHandle | TableVirtuosoHandle | null>;
}

function ScrollToTop({ scrollRef }: ScrollToTopProps) {

    return (
        <FontAwesomeIcon icon={faChevronUp} className={classes.scroll} onClick={() => scrollRef.current?.scrollToIndex({index: 0, behavior: 'smooth'})} />
    )
}

export default ScrollToTop;
