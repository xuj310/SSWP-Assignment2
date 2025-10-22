import Container from "react-bootstrap/Container";
import { useEffect, useState, Fragment, useRef } from "react";
import * as styles from "../styles.css.ts";
import Floater from "react-floater";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default Role

  const [errors, setErrors] = useState([]);
  const [showFloater, setShowFloater] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    // Show floater only when errors exist and formRef is ready
    if (errors.length > 0 && formRef.current) {
      setShowFloater(true);
    } else {
      setShowFloater(false);
    }
  }, [errors]);

  const handleSubmit = async (e) => {
    // Prevents default form behaviour
    e.preventDefault();
    setErrors([]);

    // Submit the registration request
    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phoneNum, email, password, role }),
      });

      const data = await res.text();
      const parsed = JSON.parse(data);

      // If registration was successful then notify the user and set the recieved auth token. Then go back to the home page
      if (parsed.errors != null) {
        setErrors(parsed.errors);
      } else {
        toast(parsed.message);
        sessionStorage.setItem("token", parsed.token);
        window.location.href = "/";
      }
    } catch (err) {
      console.error("Error:", err);
      setErrors(["Something went wrong. Please try again."]);
    }
  };

  return (
    <Fragment>
      <Container>
        <div className={styles.middleAlignment}>
          <div className={styles.mainBox} ref={formRef}>
            <h3 className="text-center mb-4">Register</h3>
            <form onSubmit={handleSubmit}>
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
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="phoneNum" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneNum"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
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
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <select
                className="form-select"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <button type="submit" className="btn btn-primary mt-3">
                Register
              </button>
            </form>
          </div>
          {/* Show a floater with the errors */}
          {showFloater && (
            <Floater
              open
              content={
                <ul style={{ margin: 0, paddingLeft: "1rem" }}>
                  {errors.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              }
              placement="right"
              target={formRef.current}
              styles={{ options: { zIndex: 1000 } }}
            />
          )}
        </div>
      </Container>
    </Fragment>
  );
};

export default RegisterPage;
