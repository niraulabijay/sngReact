import React from "react";

function Allpackages() {
  return (
    <div>
      <div className="all-packages-background">
        <div
          className="all-packages-section"
          //   onclick="window.open('package-single.html')"
          style={{ cursor: "hand" }}
        >
          <a href="package-single.html"></a>
          <div className="package-item">
            <div className="row">
              <div className="col-md-3">
                <div className="package-item-image">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/package-item-image.jpg"
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="package-item-description">
                  <div className="package-item-title">
                    <strong>Trek to Shivpuri</strong>
                  </div>
                  <div className="package-item-duration-location">
                    <div>
                      <i className="fa fa-clock-o"></i>
                      &nbsp;&nbsp;2N/3D&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                      <i className="fa fa-map-marker"></i>
                      &nbsp;&nbsp;Kathmandu&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                  </div>
                  <div className="package-item-description-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolores sequi quae aspernatur laborum obcaecati? Et autem
                    facilis eaque voluptatem in iste, nostrum totam assumenda
                    sequi esse error, perferendis maxime harum.
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="package-item-pricing">
                  <div className="package-item-pricing-box">
                    <div>
                      <p>Starting from</p>
                      <p>
                        <del>Rs. 1,500</del>
                      </p>
                      <p>Rs. 1,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="all-packages-section"
          //   onclick="window.open('package-single.html')"
          style={{ cursor: "hand" }}
        >
          <a href="package-single.html"></a>
          <div className="package-item">
            <div className="row">
              <div className="col-md-3">
                <div className="package-item-image">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/package-item-image.jpg"
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="package-item-description">
                  <div className="package-item-title">
                    <strong>Trek to Shivpuri</strong>
                  </div>
                  <div className="package-item-duration-location">
                    <div>
                      <i className="fa fa-clock-o"></i>
                      &nbsp;&nbsp;2N/3D&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                      <i className="fa fa-map-marker"></i>
                      &nbsp;&nbsp;Kathmandu&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                  </div>
                  <div className="package-item-description-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolores sequi quae aspernatur laborum obcaecati? Et autem
                    facilis eaque voluptatem in iste, nostrum totam assumenda
                    sequi esse error, perferendis maxime harum.
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="package-item-pricing">
                  <div className="package-item-pricing-box">
                    <div>
                      <p>Starting from</p>
                      <p>
                        <del>Rs. 1,500</del>
                      </p>
                      <p>Rs. 1,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="all-packages-section"
          //   onclick="window.open('package-single.html')"
          style={{ cursor: "hand" }}
        >
          <a href="package-single.html"></a>
          <div className="package-item">
            <div className="row">
              <div className="col-md-3">
                <div className="package-item-image">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/package-item-image.jpg"
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="package-item-description">
                  <div className="package-item-title">
                    <strong>Trek to Shivpuri</strong>
                  </div>
                  <div className="package-item-duration-location">
                    <div>
                      <i className="fa fa-clock-o"></i>
                      &nbsp;&nbsp;2N/3D&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                      <i className="fa fa-map-marker"></i>
                      &nbsp;&nbsp;Kathmandu&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                  </div>
                  <div className="package-item-description-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolores sequi quae aspernatur laborum obcaecati? Et autem
                    facilis eaque voluptatem in iste, nostrum totam assumenda
                    sequi esse error, perferendis maxime harum.
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="package-item-pricing">
                  <div className="package-item-pricing-box">
                    <div>
                      <p>Starting from</p>
                      <p>
                        <del>Rs. 1,500</del>
                      </p>
                      <p>Rs. 1,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allpackages;
