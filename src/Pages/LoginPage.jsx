import { useState, Fragment } from "react";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import * as styles from "../styles.css.ts";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Attempt to login
  const handleSubmit = async (e) => {
    e.preventDefault();
    let parsed;

    const existingToken = sessionStorage.getItem("token");
    if (existingToken) {
      toast("Already logged in");
      return;
    }

    // Attempt login
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.text();
      const parsed = JSON.parse(data);

      // Display all errors, otherwise just display that it was successful and store the auth token. Then we go back to the home page
      if (parsed.errors != null) parsed.errors.forEach((err) => toast(err));
      else {
        toast(parsed.message);
        sessionStorage.setItem("token", parsed.token);
        window.location.href = "/";
      }
    } catch (err) {
      console.error("Error:", err);
      toast(parsed.errors);
    }
  };

  return (
    <Fragment>
      <Container>
        <div className={styles.middleAlignment}>
          <div className={styles.mainBox}>
            <h3 class="text-center mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default LoginPage;
