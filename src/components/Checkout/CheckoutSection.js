import React from "react";
import CheckoutForm from "./CheckoutForm";

function CheckoutSection() {
  return (
    <div>
      <div className="checkout_section room-section">
        <div className="container">
          <div className="room-row">
            <div className="row">
              <div className="col-md-5">
                <div className="room-section-details">
                  <div className="room-image">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "/images/hotelroom1.jpg"}
                    />
                  </div>
                  <div className="room-pricing">
                    FROM <span>Rs. 1000</span>/PER NIGHT
                  </div>
                  <p className="room-title">GRAND DELUXE</p>
                  <div className="room-facility">
                    <div className="facility-item">
                      <img
                        src={process.env.PUBLIC_URL + "/images/png/guests.png"}
                      />
                      &nbsp;2 Guests
                    </div>
                    <div className="facility-item">
                      <img
                        src={process.env.PUBLIC_URL + "/images/png/bed.png"}
                      />
                      &nbsp;2 Bedrooms
                    </div>
                    <div className="facility-item">
                      <img
                        src={process.env.PUBLIC_URL + "/images/png/shower.png"}
                      />
                      &nbsp;2 Bathrooms
                    </div>
                  </div>

                  <div className="my-booking">
                    <div className="heading">
                      <h2>My booking</h2>
                    </div>

                    <div>
                      <h3>Occupancy</h3>
                      <p>1 adult, 1 room</p>
                    </div>
                    <div>
                      <h3>Check-in</h3>
                      <p>Wed, 30 Dec 2020 - 2:00 PM</p>
                    </div>
                    <div>
                      <h3>Check-out</h3>
                      <p>Wed, 30 Dec 2020 - 2:00 PM</p>
                    </div>
                    <div>
                      <h3>Superior Room</h3>
                      <p>Dream Deals - Superior Room - Breakfast included</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="room-form">
                  <div class="register-form-container">
                    <div class="register-form">
                      <div class="form-header">
                        <h2>Personal information</h2>
                      </div>
                      <CheckoutForm />
                    </div>
                  </div>
                </div>
                <div className="room-form">
                  <div class="register-form-container ">
                    <div class="register-form">
                      <div class="form-header">
                        <h2>Preferences</h2>
                      </div>
                      <div className="header2">
                        <p>Room Type</p>
                      </div>

                      <div className="row form2">
                        <div className="col-md-4">
                          <div className="item">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/png/bed.png"
                              }
                            />
                            <div>
                              <p>1 queen bed</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="item">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/png/bed.png"
                              }
                            />
                            <div>
                              <p>1 queen bed</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="item">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/png/bed.png"
                              }
                            />
                            <div>
                              <p>1 queen bed</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-btn">
                  <a href=""> Join Now </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSection;
