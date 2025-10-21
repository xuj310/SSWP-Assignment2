import { useState, useEffect, Fragment } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Image } from "react-bootstrap";
import * as styles from "./styles.css.ts";
import ProductItem from "./ProductItem";

const items = [
  {
    id: 1,
    title: "One Piece Luffy Figure",
    img: "https://sxcu.net/7kIM_xxqJ.png",
  },
  {
    id: 2,
    title: "Psycho-Pass The Movie",
    img: "https://sxcu.net/7kIMcu0qZ.png",
  },
  {
    id: 3,
    title: "One Punch Man Blu-Ray",
    img: "https://sxcu.net/7kILZDLBM.png",
  },
];

const AllProducts = () => {
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState([]);

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
        setItems(data); // assuming data is an array of event objects
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
          <div className={styles.mainBox}>
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

export default AllProducts;
