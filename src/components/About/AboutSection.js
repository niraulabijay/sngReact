import React from "react";

function AboutSection() {
  return (
    <div>
      <div className="about-us-section">
        <div className="about-us-main">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="about-us-overview">
                  <p>
                    Overview<div className="about-us-divider"></div>
                  </p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                  aliquid corporis consequatur magnam, alias esse dolore cum
                  inventore enim exercitationem, vitae repellat sed dicta
                  distinctio quasi obcaecati sequi odit natus? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quam aperiam quas nam,
                  animi aspernatur dicta assumenda dolores nesciunt officiis
                  possimus minus hic ipsam eius maxime vitae quasi earum unde
                  saepe.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  eius, natus corrupti distinctio porro in impedit? Delectus
                  velit voluptatibus magni expedita eaque, excepturi
                  necessitatibus at sequi quis, ex ut eos?
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-us-main-image">
                  <img src={process.env.PUBLIC_URL + "/images/hotelroom.jpg"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mission">
          <p>Our mission</p>
          <div className="mission-icons">
            <div className="row">
              <div className="col-md-4">
                <div className="mission-item">
                  <div className="mission-item-image">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/png/customer-satisfaction.png"
                      }
                    />
                  </div>
                  <div className="mission-item-name">Customer Satisfaction</div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mission-item">
                  <div className="mission-item-image">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/png/quality-standard.png"
                      }
                    />
                  </div>
                  <div className="mission-item-name">
                    Maintain Quality Standard
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mission-item">
                  <div className="mission-item-image">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/png/accomodation.png"
                      }
                    />
                  </div>
                  <div className="mission-item-name">
                    Superior Accomodation Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="why-smg">
            <div className="why-smg-title">
              <p>Why choose Hotel SMG</p>
            </div>
            <div className="why-smg-text">
              <p>
                Hotem SNG is one of the best hotels in Nepal. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Aut quos reiciendis
                suscipit sapiente sequi odio aspernatur officia. Recusandae
                perferendis molestiae minus nesciunt porro voluptatibus, itaque
                quod corrupti nobis ad commodi.
              </p>
              <p>On top of this, we also provide following:</p>
              <ul>
                <li>Training</li>
                <li>Social media</li>
                <li>Services</li>
                <li>Facilities</li>
                <li>Amenities</li>
                <li>Hospitality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
