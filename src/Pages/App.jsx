import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./NotFound.jsx";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import LoginButton from "./components/Buttons/LoginButton.jsx";
import Registerbutton from "./components/Buttons/RegisterButton.jsx";
import CartButton from "./components/Buttons/CartButton.jsx";
import ProductsButton from "./components/Buttons/ProductsButton.jsx";
import ProfileButton from "./components/Buttons/ProfileButton.jsx";
import FrontPage from "./FrontPage.jsx";
import LoginPage from "./LoginPage.jsx";
import AllProductsPage from "./AllProductsPage.jsx";
import EditProductPage from "./EditProductPage.jsx";
import MyCart from "./MyCart.jsx";
import RegisterPage from "./RegisterPage.jsx";
import GoHomeButton from "./components/Buttons/GoHomeButton.jsx";
import LogoIcon from "./components/images/LogoIcon.jsx";
import * as styles from "../styles.css.ts";
import { ToastContainer } from "react-toastify";

function App() {
  const navigate = useNavigate();

  function goLogin() {
    navigate("/LoginPage");
  }

  function goAllProducts() {
    navigate("/products");
  }

  function goRegister() {
    navigate("/RegisterPage");
  }

  // Returns to the home page
  function goHome() {
    navigate("/");
  }

  // Layout of the site. Including the Toast container to display the toast.
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
