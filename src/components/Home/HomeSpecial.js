import React from "react";

function HomeSpecial() {
  return (
    <>
      <div className="special-offer-wrapper">
        <div className="special-offer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <p className="start-here">START HERE</p>
                <p className="offer-title">Special Offer</p>
                <p className="offer-description">
                  A wonderful serenity has taken my entire soul, like sweet
                  morning spring which I enjoy with my whole heart. I am alone,
                  discover the most.
                </p>
              </div>
              <div className="col-md-3">
                <div className="offer">
                  <div className="offer">
                    <div className="offer-image">
                      <div
                        className="offer-image-overlay"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + "/images/BREAKFAST.jpg"
                          } )`,
                        }}
                      ></div>
                    </div>
                    <div className="offer-content">
                      <p>SALE 20% OFF</p>
                      BREAKFAST
                      <div className="offer-price">
                        <p>From</p>
                        Rs. 299
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="offer">
                  <div className="offer-image">
                    <div
                      className="offer-image-overlay"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "/images/sauna.jpg"
                        } )`,
                      }}
                    ></div>
                  </div>
                  <div className="offer-content">
                    <p>SALE 20% OFF</p>
                    SAUNA
                    <div className="offer-price">
                      <p>From</p>
                      Rs. 299
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="offer">
                  <div className="offer-image">
                    <div
                      className="offer-image-overlay"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "/images/parking.jpg"
                        } )`,
                      }}
                    ></div>
                  </div>
                  <div className="offer-content">
                    <p>SALE 20% OFF</p>
                    PARKING
                    <div className="offer-price">
                      <p>From</p>
                      Rs. 299
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSpecial;
