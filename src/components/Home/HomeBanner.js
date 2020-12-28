import React from "react";
import SearchBar from "../Common/SearchBar";
import Navbar from "../Common/Navbar";

function HomeBanner() {
  return (
    <div>
      <div className="banner">
        <div className="background-overlay">
         <Navbar />
          <div className="text-in-banner">
            <p className="banner-subtitle">BEST HOTEL AND RESORT</p>
            <p className="banner-title">HOTEL SNG</p>
            <p className="banner-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              voluptatibus natus voluptas mollitia iusto ullam culpa consectetur
              impedit itaque debitis
            </p>
            <div className="room-suite-link">
              <a href="#">ROOMS SUITES</a>
            </div>
          </div>

          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
