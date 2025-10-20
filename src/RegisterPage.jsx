import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import * as styles from "./styles.css.ts";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Fragment>
      <Container>
        <div className={styles.middleAlignment}>
          <div className={styles.welcomeBox}>
            <h3 class="text-center mb-4">Register</h3>
            <form>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" class="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default RegisterPage;
