import React from "react";
import LandingPage from "./components/layout/LandingPage";
import { useTranslation } from "react-i18next";
import NavbarContainer from "./components/layout/Navbar/NavbarContainer";
import Footer from "./components/layout/Footer";
import LoginContainer from "./components/Login/LoginContainer";

function App() {
  return (
    <div>
      <NavbarContainer />
      <LoginContainer />
      {/* <LandingPage t={t} i18n={i18n} /> */}
      <Footer />
    </div>
  );
}

export default App;
