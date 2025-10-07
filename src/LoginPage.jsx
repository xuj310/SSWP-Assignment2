
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import * as styles from './styles.css.ts';

const LoginPage = () => {
  return (
    <Fragment>
      <Container>
        <div className={styles.middleAlignment}>
          <div className={styles.welcomeBox}>
        <h3 class="text-center mb-4">Login</h3>
        <form>
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" />
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" />
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
        </div>
      </Container>
    </Fragment>
  )
}

export default LoginPage