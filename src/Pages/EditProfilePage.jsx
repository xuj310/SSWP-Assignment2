import { useState, Fragment, useRef } from "react";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import Floater from "react-floater";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import * as styles from "../styles.css.ts";

const EditProfilePage = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phoneNum, setPhoneNum] = useState(null);
  const [role, setRole] = useState("user"); // Default Role
  const [errors, setErrors] = useState([]);
  const [Id, setId] = useState("");
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

  // Fetch profile details and pre-populate
  useEffect(() => {
    const fetchUser = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        window.location.href = "/";
        return;
      }

      let decoded;
      try {
        decoded = jwtDecode(token);
        setId(decoded._id);
      } catch (err) {
        console.error("Failed to decode token:", err);
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:5000/api/users?id=${decoded._id}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        const data = await res.json();

        setName(data.name || "");
        setEmail(data.email || "");
        setPhoneNum(data.phoneNum || "");
        setRole(data.role || "user");
        setPassword("");
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchUser();
  }, []);

  let errorFloater = null;

  // Show a floater with the errors
  if (errors.length > 0) {
    errorFloater = (
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
        // Make it so the floater appears in the form section
        target={formRef.current}
        styles={{ options: { zIndex: 1000 } }}
      />
    );
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let parsed;

    const token = sessionStorage.getItem("token");
    if (!token) {
      toast("Not logged in");
      window.location.href = "/";
    }

    // Edit user
    try {
      const res = await fetch(`http://localhost:5000/api/users?id=${Id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
        body: JSON.stringify({ name, email, password, phoneNum, role }),
      });

      const data = await res.text();
      const parsed = JSON.parse(data);

      // If there's errors, pick them up. Otherwise display a toast and return to the events page.
      if (parsed.errors != null) {
        setErrors(parsed.errors);
        toast(parsed.errors);
      } else {
        toast("Success, please log in again");
        sessionStorage.removeItem("token");
        window.location.href = "/";
      }
    } catch (err) {
      console.error("Error:", err);
      toast(parsed.errors);
    }
  };

  const handleDelete = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      toast("Not logged in");
      window.location.href = "/";
    }
    
    try {
      const res = await fetch(`http://localhost:5000/api/users?id=${Id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const data = await res.text();
      const parsed = JSON.parse(data);

      if (parsed.errors) {
        setErrors(parsed.errors);
        toast(parsed.errors);
      } else {
        toast("Profile deleted successfully");
        sessionStorage.removeItem("token");
        setTimeout(() => {
          window.location.href = "/";
        }, 0);
      }
    } catch (err) {
      console.error("Delete error:", err);
      toast("Failed to delete profile");
    }
  };

  return (
    <Fragment>
      <Container>
        <div className={styles.middleAlignment}>
          <div className={styles.mainBox} ref={formRef}>
            <h3 className="text-center mb-4">Edit Profile</h3>
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
              <div className={styles.buttonRow}>
                <button type="submit" className="btn btn-primary">
                  Edit Profile
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Delete Profile
                </button>
              </div>
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

export default EditProfilePage;
