import { useNavigate } from "react-router-dom";
import BuyProductButton from "./Buttons/BuyProductButton.jsx";
import EditProductButton from "./Buttons/EditProductButton.jsx";
import DeleteProductButton from "./Buttons/DeleteProductButton.jsx";
import { jwtDecode } from "jwt-decode";
import * as styles from "../styles.css.ts";

// For displaying each product
const ProductItem = ({ item }) => {
  const navigate = useNavigate();

  // Check the role of the user (admin or user)
  const token = sessionStorage.getItem("token");
  const currentUserRole = token ? jwtDecode(token).role : null;

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
