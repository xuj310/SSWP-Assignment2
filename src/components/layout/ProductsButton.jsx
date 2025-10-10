import Button from 'react-bootstrap/Button';
import * as styles from '../../styles.css.ts';

/* 
   goProducts - function for going to the products page
*/
export default function ProductsButton({goProducts}) {

    return (
        <Button className={styles.headerItem} onClick={goProducts} variant="outline-light">Products</Button>
    );
  }