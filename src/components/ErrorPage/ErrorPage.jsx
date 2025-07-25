import classes from './ErrorPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';

function ErrorPage({message}) {
    return (
        <div className={classes.error}>
            <h2>Oops!</h2>
            <p>{message}</p>
            <button className={classes['error-button']} onClick={() => window.location.reload()}>
                <FontAwesomeIcon icon={faArrowRotateRight} className={classes.icon} />
                Reload
            </button>
        </div>
    )
}

export default ErrorPage;
