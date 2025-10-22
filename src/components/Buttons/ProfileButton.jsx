import Button from 'react-bootstrap/Button';
import * as styles from '../../styles.css.ts';

/* 
   goProducts - function for going to the profile page
*/
export default function ProfileButton({goProfile}) {

    return (
        <Button className={styles.headerItem} onClick={goProfile} variant="outline-light">Profile</Button>
    );
  }