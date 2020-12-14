import React from "react";

function HomeDiscover() {
  return (
    <>
      <div className="discover-locations">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="discover-location-content">
                <div className="best-resort-title">BEST RESORT</div>
                <p className="discover-location-title">
                  Discover
                  <br />
                  Our Locations
                </p>
                <p className="discover-location-text">
                  A wonderful serenity has taken my entire soul, like sweet
                  morning spring which I enjoy with my whole.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="discover-location-image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/discover-location-hotel-room.jpg"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hotel-facilities">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="hotel-facility-item">
                  <img src={process.env.PUBLIC_URL + "/images/bar-icon.JPG"} />
                  <p className="facility-title">Bar and Restaurant</p>
                  <p className="facility-text">
                    A wonderful serenity has taken my entire soul, like sweet
                    morning spring which I enjoy with my whole.
                  </p>
                  <a href="restaurant.html">
                    READ MORE &nbsp; <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="hotel-facility-item">
                  <img
                    src={process.env.PUBLIC_URL + "/images/spa-salon-icon.JPG"}
                  />
                  <p className="facility-title">Spa and Salon</p>
                  <p className="facility-text">
                    A wonderful serenity has taken my entire soul, like sweet
                    morning spring which I enjoy with my whole.
                  </p>
                  <a href="#">
                    READ MORE &nbsp; <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="hotel-facility-item">
                  <img
                    src={process.env.PUBLIC_URL + "/images/swimming-icon.JPG"}
                  />
                  <p className="facility-title">Swimming Pool</p>
                  <p className="facility-text">
                    A wonderful serenity has taken my entire soul, like sweet
                    morning spring which I enjoy with my whole.
                  </p>
                  <a href="#">
                    READ MORE &nbsp; <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeDiscover;
