import { Routes, Route, useNavigate } from 'react-router-dom';
import NotFound from './NotFound';
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState } from 'react';
import LoginButton from './components/layout/LoginButton.jsx';
import Registerbutton from './components/layout/RegisterButton.jsx';
import FrontPage from './FrontPage.jsx';
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage.jsx';
import GoHomeButton from './components/layout/GoHomeButton.jsx';
import LogoIcon from './components/layout/LogoIcon.jsx';
import * as styles from './styles.css.ts';

function App() {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function goLogin() {
    navigate('/LoginPage');
  }

  function goRegister() {
    navigate('/RegisterPage');
  }

  // Returns to the home page
  function goHome() {
    navigate('/');
  }

  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Nav className={styles.navbarNav}>
            <LogoIcon />
            <div className={styles.rightAligned}>
              <LoginButton className={styles.headerItem} goLogin={goLogin} />
              <Registerbutton className={styles.headerItem} goRegister={goRegister} />
              <GoHomeButton goHome={goHome} />
            </div>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/" element={<FrontPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
