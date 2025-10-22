import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import * as styles from "../../styles.css.ts";

// This handles the login/logout feature
export default function LoginButton({ goLogin }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check whether user is logged in
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(token);
  }, []);

  // If they're logged in then log the user out, then go back home. Otherwise go to the login page.
  const handleClick = () => {
    if (isLoggedIn) {
      sessionStorage.removeItem("token");
      setIsLoggedIn(false);
      window.location.href = "/";
    } else {
      goLogin();
    }
  };

  return (
    <Button
      className={styles.headerItem}
      variant="outline-light"
      onClick={handleClick}
    >
      {isLoggedIn ? "Logout" : "Login"}
    </Button>
  );
}
