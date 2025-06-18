import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import classes from './ScrollToTop.module.scss';

function scrollToTop({scrollRef}) {

    return (
        <FontAwesomeIcon icon={faChevronUp} className={classes.scroll} onClick={() => scrollRef.current.scrollToIndex({index: 0, behavior: 'smooth'})} />
    )
}

export default scrollToTop;
