import React from "react";
import SearchBar from "../Common/SearchBar";
import Navbar from "../Common/Navbar";
import {Link} from "react-router-dom";

function HomeBanner({banner}) {
  console.log(banner, 'banner')
  return (
    <div>
      <div className="banner">
        <div className="background-overlay">
         <Navbar />
          <div className="text-in-banner">
            <p className="banner-subtitle">BEST HOTEL AND RESORT</p>
            <p className="banner-title">HOTEL SNG</p>
            <p className="banner-description">
              {banner && banner.banner_text}
            </p>
            <div className="room-suite-link">
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
