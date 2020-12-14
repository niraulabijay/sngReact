import React from "react";
import HomeBanner from "../components/Home/HomeBanner";
import HomeWelcome from "../components/Home/HomeWelcome";
import HomeDiscover from "../components/Home/HomeDiscover";
import HomeSummer from "../components/Home/HomeSummer";
import HomeRooms from "../components/Home/HomeRooms";
import HomeNewsletter from "../components/Home/HomeNewsletter";
import HomeSpecial from "../components/Home/HomeSpecial";
import HomeTestimonial from "../components/Home/HomeTestimonial";
import Footer from "../components/Common/Footer";

function Home() {

 

  return (
    <div id="main">
      <HomeBanner />
      <HomeWelcome />
      <HomeDiscover />
      <HomeSummer />
      <HomeRooms />
      <HomeNewsletter />
      <HomeSpecial />
      <div className="container">
        <div className="vertical-divider"></div>
      </div>
      <HomeTestimonial />
    </div>
  );
}

export default Home;
