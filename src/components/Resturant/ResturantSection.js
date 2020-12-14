import React from "react";

function ResturantSection() {
//   $(document).ready(function () {
//     $(".room-slide").slick({
//       centerMode: true,
//       autoplay: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       speed: 500,
//       dots: false,
//     });
//   });

  function menuItem(evt, itemName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(itemName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("breakfastButton").click();

  return (
    <div>
      <div className="restaurant-section">
        <div className="happy-hours">
          <div className="happy-hours-title">HAPPY HOURS</div>
          <div className="happy-hours-time">
            Mon - Fri : 9am - 11am & 2pm - 8pm <br />
            Sun 10pm - Midnight
          </div>
          <div className="restaurant-menu">
            {/* <!-- Tab links --> */}
            <div className="tab">
              <button
                className="tablinks"
                id="breakfastButton"
                onclick="menuItem(event, 'breakfast')"
              >
                BREAKFAST
              </button>
              <button className="tablinks" onclick="menuItem(event, 'lunch')">
                LUNCH
              </button>
              <button className="tablinks" onclick="menuItem(event, 'dinner')">
                DINNER
              </button>
              <button className="tablinks" onclick="menuItem(event, 'dessert')">
                DESSERT
              </button>
              <button
                className="tablinks"
                onclick="menuItem(event, 'beverage')"
              >
                BEVERAGE
              </button>
            </div>

            {/* <!-- Tab content --> */}
            <div className="menu-tab-content-all">
              <div id="breakfast" className="tabcontent">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-for-menu.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-for-menu.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-for-menu.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-for-menu.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-for-menu.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-for-menu.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-for-menu.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-for-menu.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="lunch" className="tabcontent">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-lunch.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-lunch.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-lunch.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-lunch.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-lunch.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-lunch.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-lunch.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-lunch.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="dinner" className="tabcontent">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dinner.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dinner.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dinner.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dinner.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dinner.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dinner.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dinner.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dinner.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="dessert" className="tabcontent">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dessert.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dessert.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dessert.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dessert.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dessert.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dessert.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dessert.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-dessert.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="beverage" className="tabcontent">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-beverage.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-beverage.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-beverage.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-beverage.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-beverage.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-beverage.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-beverage.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-content">
                        <div className="image-for-food">
                          <img src="assets/images/food-beverage.jpg" />
                        </div>
                        <div className="food">
                          <div className="food-name">Omelette</div>
                          <div className="food-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </div>
                        </div>
                        <div className="food-price">Rs. 1000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Slick slider for restaurant images --> */}

      <div className="room-photos-slider">
        <div className="room-slide">
          <div className="room-content">
            <img src="assets/images/image-for-restaurant-slider.jpg" />
          </div>
          <div className="room-content">
            <img src="assets/images/image-for-restaurant-slider.jpg" />
          </div>
          <div className="room-content">
            <img src="assets/images/image-for-restaurant-slider.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResturantSection;
