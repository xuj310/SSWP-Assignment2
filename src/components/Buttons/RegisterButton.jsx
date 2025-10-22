import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import * as styles from "../../styles.css.ts";

export default function RegisterButton({ goRegister }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Only display if the user is not logged in
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(token !== null && token !== undefined);
  }, []);

  if (isLoggedIn) {
    return null;
  }

  return (
    <Button
      className={styles.headerItem}
      variant="outline-light"
      onClick={goRegister}
    >
      Register
    </Button>
  );
}
