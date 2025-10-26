import { useState, Fragment, useRef } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import Floater from "react-floater";
import { useEffect } from "react";
import * as styles from "../styles.css.ts";

const AddProductsPage = () => {
  // Get product Id from URL
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [onSale, setOnSale] = useState("false");
  const [errors, setErrors] = useState([]);
  const formRef = useRef(null);

  let errorFloater = null;

  // Show a floater with the errors
  if (errors.length > 0) {
    errorFloater = (
      <Floater
        open
        content={
          <ul style={{ margin: 0, paddingLeft: "1rem" }}>
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        }
        placement="right"
        // Make it so the floater appears in the form section
        target={formRef.current}
        styles={{ options: { zIndex: 1000 } }}
      />
    );
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const token = sessionStorage.getItem("token");
    if (!token) {
      toast("Not logged in");
      return;
    }

    const formData = new FormData();

    if (image) formData.append("image", image);
    if (title) formData.append("title", title);
    if (description) formData.append("description", description);
    if (price) formData.append("price", price);
    if (onSale !== "") formData.append("onSale", onSale);

    try {
      const res = await fetch(`http://localhost:5000/api/products`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });

      const parsed = await res.json();

      if (parsed.errors) {
        setErrors(parsed.errors);
      } else {
        toast(parsed.message);
        window.location.href = "/products";
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Fragment>
      <Container>
        <div className={styles.middleAlignment}>
          <div className={styles.mainBox} ref={formRef}>
            <h3>Add Product</h3>
            <h4>You can enter the details here</h4>
            <form onSubmit={handleSubmit}>
              <label className="form-label">Upload Image</label>
              <input
                type="file"
                className="form-control"
                id="imgUrl"
                onChange={handleFileChange}
              />

              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />

              <label className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label className="form-label">On Sale</label>
              <select
                className="form-control"
                id="onSale"
                value={onSale}
                onChange={(e) => setOnSale(e.target.value)}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>

              <button type="submit" className="btn btn-primary mt-3">
                Add Product
              </button>
            </form>
            {errorFloater}
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default AddProductsPage;
