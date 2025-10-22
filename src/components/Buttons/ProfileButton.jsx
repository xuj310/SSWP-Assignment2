import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import * as styles from "../../styles.css.ts";

/* 
   goProducts - function for going to the profile page
*/
export default function ProfileButton({ goMyProfile }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Only display if the user is logged in
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(token !== null && token !== undefined);
  }, []);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <Button
      className={styles.headerItem}
      onClick={goMyProfile}
      variant="outline-light"
    >
      Profile
    </Button>
  );
}
