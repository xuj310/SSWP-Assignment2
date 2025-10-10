import Button from 'react-bootstrap/Button';
import * as styles from '../../styles.css.ts';

/* 
   goHome - function for going back to the home page
*/
export default function GoHomeButton({goHome}) {

    return (
        <Button className={styles.headerItem} onClick={goHome} variant="outline-light">Home</Button>
    );
  }