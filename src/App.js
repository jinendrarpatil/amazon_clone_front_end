import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/layout/LandingPage";
import { useTranslation } from "react-i18next";
import NavbarContainer from "./components/layout/Navbar/NavbarContainer";
import Footer from "./components/layout/Footer";
import RegisterContainer from "./components/Register/RegisterContainer";
import LoginContainer from "./components/Login/LoginContainer";
import YourAccountContainer from "./components/YourAccount/YourAccountContainer";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <NavbarContainer path="" />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/your_account" component={YourAccountContainer} />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
