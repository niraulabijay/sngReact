import React from "react";

function BlogSection() {
  return (
    <div>
      <div className="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="blog">
                <div className="blog-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/image-for-blog.jpg"}
                  />
                </div>
                <div className="blog-title">
                  <a href="#">Welcome to Hotel SNG</a>
                </div>
                <div className="blog-date">
                  <a href="#">News</a> / <span>2077-12-12</span>
                </div>
              </div>
              <div className="blog">
                <div className="blog-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/image-for-blog.jpg"}
                  />
                </div>
                <div className="blog-title">
                  <a href="#">Read our message</a>
                </div>
                <div className="blog-date">
                  <a href="#">Message</a> / <span>2077-12-12</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="blog">
                <div className="blog-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/image-for-blog.jpg"}
                  />
                </div>
                <div className="blog-title">
                  <a href="#">Read our message</a>
                </div>
                <div className="blog-date">
                  <a href="#">Message</a> / <span>2077-12-12</span>
                </div>
              </div>
              <div className="blog">
                <div className="blog-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/image-for-blog.jpg"}
                  />
                </div>
                <div className="blog-title">
                  <a href="#">Welcome to Hotel SNG</a>
                </div>
                <div className="blog-date">
                  <a href="#">News</a> / <span>2077-12-12</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="blog">
                <div className="blog-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/image-for-blog.jpg"}
                  />
                </div>
                <div className="blog-title">
                  <a href="#">Tour and Travel places</a>
                </div>
                <div className="blog-date">
                  <a href="#">Article</a> / <span>2077-12-12</span>
                </div>
              </div>
              <div className="blog">
                <div className="blog-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/image-for-blog.jpg"}
                  />
                </div>
                <div className="blog-title">
                  <a href="#">Read Our New Offers</a>
                </div>
                <div className="blog-date">
                  <a href="#">Offer</a> / <span>2077-12-12</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="blog">
                <div className="blog-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/image-for-blog.jpg"}
                  />
                </div>
                <div className="blog-title">
                  <a href="#">Read Our New Offers</a>
                </div>
                <div className="blog-date">
                  <a href="#">Offer</a> / <span>2077-12-12</span>
                </div>
              </div>
              <div className="blog">
                <div className="blog-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/image-for-blog.jpg"}
                  />
                </div>
                <div className="blog-title">
                  <a href="#">Welcome to Hotel SNG</a>
                </div>
                <div className="blog-date">
                  <a href="#">News</a> / <span>2077-12-12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
