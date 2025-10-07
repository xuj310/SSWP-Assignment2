// The home/landing page

import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import * as styles from './styles.css.ts';

const FrontPage = () => {
  return (
    <Fragment>
      <Container>
        <div className={styles.middleAlignment}>
          <div className={styles.welcomeBox}>
          <h3>Timbertop United Official Store</h3>
            <li>
            </li>
          </div>
        </div>
      </Container>
    </Fragment>
  )
}

export default FrontPage