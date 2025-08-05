import classes from './ErrorPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';

interface ErrorPageProps {
    message: string | React.ReactNode;
}

function ErrorPage({ message }: ErrorPageProps) {
    return (
        <div className={classes.error}>
            <h2>Hmm...</h2>
            <p>{message}</p>
            <button className={classes['error-button']} onClick={() => window.location.reload()}>
                <FontAwesomeIcon icon={faArrowRotateRight} className={classes.icon} />
                Reload
            </button>
        </div>
    )
}

export default ErrorPage;
