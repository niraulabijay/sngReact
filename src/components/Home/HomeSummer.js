import React from "react";

function HomeSummer() {
  return (
    <>
      <div className="summer-deals">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="summer-deals-image">
                <img
                  src={process.env.PUBLIC_URL + "/images/beachside-pool.jpg"}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="summer-deals-content">
                <div className="summer-deals-wrapper">
                  <p className="summer-deals-title">SUMMER DEALS</p>
                  <p className="summer-deals-bold-title">
                    A Simply Perfect Place To Get Lost. Up to 50% Discount!
                  </p>
                  <p className="summer-deals-text">
                    A wonderful serenity has taken my entire soul, like sweet
                    morning spring which I enjoy with my whole.
                  </p>
                  <button type="button">BOOK NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSummer;
