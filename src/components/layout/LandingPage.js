import React from "react";
import NavbarContainer from "./Navbar/NavbarContainer";
import ImageSlider from "./ImageSlider";
import HomePageProductContainer from "./../HomePageProduct/HomePageProductContainer";

function LandingPage() {
  return (
    <>
      <NavbarContainer />
      <div className="container-fluid px-0">
        <ImageSlider />
        <HomePageProductContainer />
      </div>
    </>
  );
}

export default LandingPage;
