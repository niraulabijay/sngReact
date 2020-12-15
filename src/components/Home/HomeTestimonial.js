import React from "react";
import Slider from "react-slick";

function HomeTestimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="testimonial">
        <div className="testimonial-slide">
          <Slider {...settings}>
            <div className="testimonial-content">
              <div
                className="person-image"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/person-testimonial.jpg"
                  } )`,
                }}
              ></div>
              <div className="person-details">
                <p>Karin Thomas</p>
                Manager Asian Discovery
              </div>
              <div className="testimonial-text">
                <p>
                  <em>
                    'Sitting on the high cliffs of the Amalfi Coast, Casa
                    Angelina offers a sublime slice of modern minimalism on the
                    Mediterranean, with an emphasis on elegant. Leverage agile
                    frameworks to provide a robust synopsis.'
                  </em>
                </p>
              </div>
            </div>
            <div className="testimonial-content">
              <div
                className="person-image"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/person-testimonial.jpg"
                  } )`,
                }}
              ></div>
              <div className="person-details">
                <p>Karin Thomas</p>
                Manager Asian Discovery
              </div>
              <div className="testimonial-text">
                <p>
                  <em>
                    'Sitting on the high cliffs of the Amalfi Coast, Casa
                    Angelina offers a sublime slice of modern minimalism on the
                    Mediterranean, with an emphasis on elegant. Leverage agile
                    frameworks to provide a robust synopsis.'
                  </em>
                </p>
              </div>
            </div>
            <div className="testimonial-content">
              <div
                className="person-image"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/person-testimonial.jpg"
                  } )`,
                }}
              ></div>
              <div className="person-details">
                <p>Karin Thomas</p>
                Manager Asian Discovery
              </div>
              <div className="testimonial-text">
                <p>
                  <em>
                    'Sitting on the high cliffs of the Amalfi Coast, Casa
                    Angelina offers a sublime slice of modern minimalism on the
                    Mediterranean, with an emphasis on elegant. Leverage agile
                    frameworks to provide a robust synopsis.'
                  </em>
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default HomeTestimonial;
