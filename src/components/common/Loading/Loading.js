import Spinner from 'react-bootstrap/Spinner';
import styles from './Laoding.module.css';
function Loading() {
    return (
        <>
            <div className={styles.container}>
                <Spinner animation="border" variant="primary" />
            </div>
        </>
    );
}

export default Loading;