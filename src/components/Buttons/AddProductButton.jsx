import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { jwtDecode } from "jwt-decode";
import * as styles from "../../styles.css.ts";

export default function AddProductButton({ goAddProduct }) {
  const [currentUserRole, setCurrentUserRole] = useState(false);

  // Only admins can add a project
  useEffect(() => {
      const token = sessionStorage.getItem("token");
      setCurrentUserRole(token ? jwtDecode(token).role : null);
  }, []);

  if (currentUserRole !== "admin") {
    return null;
  }

  return (
    <Button
      className={styles.headerItem}
      variant="outline-light"
      onClick={goAddProduct}
    >
      Add Product
    </Button>
  );
}
