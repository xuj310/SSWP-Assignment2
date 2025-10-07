import Button from 'react-bootstrap/Button';
import * as styles from '../../styles.css.ts';

/* 
   Button for going to the Register page
*/
export default function RegisterButton({goRegister}) {

    return (
        <Button className={styles.headerItem} variant="outline-light" onClick={goRegister}>Register</Button>
    );
  }