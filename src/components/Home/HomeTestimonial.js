import React from "react";
import Slider from "react-slick";

function HomeTestimonial({testimonials}) {
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
            {testimonials && testimonials.map((testimonial)=>
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
                <p>{testimonial.title}</p>
                {testimonial.designation}
              </div>
              <div className="testimonial-text">
                <p>
                  <em dangerouslySetInnerHTML={{__html: testimonial.description}}>
                  </em>
                </p>
              </div>
            </div>
          
            )}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default HomeTestimonial;
