import { useNavigate } from "react-router-dom";
import EditProductButton from "./EditProductButton.jsx";
import DeleteProductButton from "./DeleteProductButton.jsx";
import { jwtDecode } from "jwt-decode";
import * as styles from "./styles.css.ts";

const ProductItem = ({ item }) => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  const currentUserRole = token ? jwtDecode(token).role : null;

  const goToProductPage = (e) => {
    // Only trigger going to an event page if the click is NOT on a button
    if (e.target.tagName !== "BUTTON") {
      navigate(`/products/${item._id}`);
    }
  };

  return (
    <li className={styles.gridItem} onClick={goToProductPage}>
      <img src={item.imgUrl} className={styles.productImage} />
      <div className={styles.infoRow}>
        <h2>{item.title}</h2>
        {currentUserRole === "admin" && (
          <div className={styles.buttonRow}>
            <EditProductButton eventId={item.id} className="eventButton" />
            <DeleteProductButton eventId={item.id} className="eventButton" />
          </div>
        )}
      </div>
    </li>
  );
};

export default ProductItem;
