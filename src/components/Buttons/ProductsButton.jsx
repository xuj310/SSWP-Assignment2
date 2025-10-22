import Button from 'react-bootstrap/Button';
import * as styles from '../../styles.css.ts';

export default function ProductsButton({goAllProducts}) {

    return (
        <Button className={styles.headerItem} onClick={goAllProducts} variant="outline-light">Products</Button>
    );
  }