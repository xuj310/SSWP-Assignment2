import { useState, useEffect } from "react";
import BuyProductButton from "./Buttons/BuyProductButton.jsx";
import EditProductButton from "./Buttons/EditProductButton.jsx";
import DeleteProductButton from "./Buttons/DeleteProductButton.jsx";
import { jwtDecode } from "jwt-decode";
import * as styles from "../styles.css.ts";

// For displaying each product
const ProductItem = ({ item }) => {

  const [currentUserRole, setCurrentUserRole] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setCurrentUserRole(decoded.role);
    } else {
      setCurrentUserRole(null);
    }
  }, []);

  // Only display Edit and Delete if the user has the admin role
  return (
    <li className={styles.gridItem}>
      <img src={item.imgUrl} className={styles.productImage} alt={item.title} />
      <div className={styles.infoRow}>
        <h2 className={styles.centeredHeading}>{item.title}</h2>
        <div className={styles.buttonRow}>
          <BuyProductButton productId={item.id} className="productButton" />
          {currentUserRole === "admin" && (
            <>
              <EditProductButton
                productId={item.id}
                className="productButton"
              />
              <DeleteProductButton
                productId={item.id}
                className="productButton"
              />
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
