import { useState, useEffect, Fragment } from "react";
import Container from "react-bootstrap/Container";
import * as styles from "../styles.css.ts";
import ProductItem from "../components/ProductItem.jsx";

const AllProductsPage = () => {
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState([]);

  // Go fetch all the products
  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.errors) {
        setErrors(data.errors);
      } else {
        setItems(data);
      }
    } catch (err) {
      console.error("Error fetching products: ", err);
      setErrors(["Failed to fetch products."]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Fragment>
      <Container>
          <div className={styles.productBox}>
            <h3>All Products</h3>
            {errors.length > 0 && (
              <div className="error-box">
                {errors.map((err, idx) => (
                  <p key={idx} className="text-danger">
                    {err}
                  </p>
                ))}
              </div>
            )}
              <ul className={styles.productGrid}>
                {items.map((item) => (
                  <ProductItem key={item._id} item={item} />
                ))}
              </ul>

          </div>
      </Container>
    </Fragment>
  );
};

export default AllProductsPage;
