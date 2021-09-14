import React from "react";
import ImageSlider from "./ImageSlider";
import HomePageProductContainer from "./../HomePageProduct/HomePageProductContainer";

function LandingPage(props) {
  return (
    <>
      <div className="container-fluid px-0">
        <ImageSlider />
        <HomePageProductContainer />
      </div>
    </>
  );
}

export default LandingPage;
