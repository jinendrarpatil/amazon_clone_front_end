import React from "react";
import NavbarContainer from "./Navbar/NavbarContainer";
import ImageSlider from "./ImageSlider";

function LandingPage() {
  return (
    <>
      <NavbarContainer />
      <div className="container-fluid px-0">
        <ImageSlider />
      </div>
    </>
  );
}

export default LandingPage;
