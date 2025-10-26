import { useState, useEffect, Fragment } from "react";
import Container from "react-bootstrap/Container";
import * as styles from "../styles.css.ts";
import ProductItem from "../components/ProductItem.jsx";

const AllProductsPage = () => {
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getProducts(filter);
  }, [filter]);

  // Go fetch all the products
  const getProducts = async (filterType = "all") => {
    try {
      let url = "http://localhost:5000/api/products";

      if (filterType === "onSale") {
        url += "?onSale=true";
      } else if (filterType === "inStock") {
        url += "?inStock=true";
      }

      const res = await fetch(url, {
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
          <div className="mb-3">
            <button
              onClick={() => setFilter("all")}
              className="btn btn-outline-primary me-2"
            >
              All Products
            </button>
            <button
              onClick={() => setFilter("onSale")}
              className="btn btn-outline-success me-2"
            >
              On Sale
            </button>
            <button
              onClick={() => setFilter("inStock")}
              className="btn btn-outline-warning"
            >
              In Stock
            </button>
          </div>

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
