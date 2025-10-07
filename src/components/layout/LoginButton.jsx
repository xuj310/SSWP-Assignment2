import Button from 'react-bootstrap/Button';
import * as styles from '../../styles.css.ts';
/* 
   Button for going to the Login page
*/
export default function LoginButton({goLogin}) {

    return (
        <Button className={styles.headerItem} variant="outline-light" onClick={goLogin}>Login</Button>
    );
  }