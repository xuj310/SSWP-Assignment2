import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import LoginButton from "./components/layout/LoginButton.jsx";
import Registerbutton from "./components/layout/RegisterButton.jsx";
import CartButton from "./components/layout/CartButton.jsx";
import ProductsButton from "./components/layout/ProductsButton.jsx";
import ProfileButton from "./components/layout/ProfileButton.jsx";
import FrontPage from "./FrontPage.jsx";
import LoginPage from "./LoginPage.jsx";
import AllProductsPage from "./AllProducts.jsx";
import EditProductPage from "./EditProductPage.jsx";
import MyCart from "./MyCart.jsx";
import RegisterPage from "./RegisterPage.jsx";
import GoHomeButton from "./components/layout/GoHomeButton.jsx";
import LogoIcon from "./components/layout/LogoIcon.jsx";
import * as styles from "./styles.css.ts";
import { ToastContainer } from "react-toastify";

function App() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function goLogin() {
    navigate("/LoginPage");
  }

  function goAllProducts() {
    navigate("/products");
  }

  function goCart() {
    navigate("/Cart");
  }

  function goRegister() {
    navigate("/RegisterPage");
  }

  // Returns to the home page
  function goHome() {
    navigate("/");
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className={styles.navbarNav}>
            <LogoIcon />
            <div className={styles.rightAligned}>
              <GoHomeButton goHome={goHome} />
              <ProductsButton goAllProducts={goAllProducts} />
              <LoginButton className={styles.headerItem} goLogin={goLogin} />
              <Registerbutton
                className={styles.headerItem}
                goRegister={goRegister}
              />
              <CartButton goCart={goCart} />
              <ProfileButton />
            </div>
          </Nav>
        </Container>
      </Navbar>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Products" element={<AllProductsPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/products/edit/:id" element={<EditProductPage />} />
        <Route path="/Cart" element={<MyCart />} />
        <Route path="/" element={<FrontPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
