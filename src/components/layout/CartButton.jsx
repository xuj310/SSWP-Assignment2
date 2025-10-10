import Button from 'react-bootstrap/Button';
import * as styles from '../../styles.css.ts';

/* 
   goCart - function for going to the cart page
*/
export default function CartButton({goCart}) {

    return (
        <Button className={styles.headerItem} onClick={goCart} variant="outline-light">Cart</Button>
    );
  }