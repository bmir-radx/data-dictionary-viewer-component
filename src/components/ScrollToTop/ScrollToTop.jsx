import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import classes from './ScrollToTop.module.scss';

function scrollToTop({scrollRef}) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            if (e.target.scrollTop) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        const element = scrollRef.current;

        element.addEventListener('scroll', handler);

        return () => element.removeEventListener('scroll', handler);
    })

    return (
        <FontAwesomeIcon icon={faChevronUp} className={`${classes.scroll} ${visible ? classes.visible : ''}`} onClick={() => scrollRef.current.scrollTo({top: 0, behavior: 'smooth'})} />
    )
}

export default scrollToTop;
