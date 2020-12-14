import React from "react";

function SearchBar() {
  return (
    <>
      <div className="search-wrapper" id="searchBar">
        <form className="container" action="hotel.html">
          <div className="bottom-search-bar d-none d-lg-flex">
            <div className="item">
              <div className="item-sup" id="mobile-check-title">
                <div className="row">
                  <div className="col-6">CHECK IN</div>
                </div>
              </div>
              <div className="mobile-checkdate">
                <input type="date" placeholder="Find a Hotel" />
              </div>
            </div>

            <div className="item">
              <div className="item-sup" id="mobile-check-title">
                <div className="row">
                  <div className="col-6">CHECK OUT</div>
                </div>
              </div>
              <div className="mobile-checkdate">
                <input type="date" placeholder="Find a Hotel" />
              </div>
            </div>
            <div className="item">
              <div className="total-adults-section">
                <div>
                  <div className="item-sup" id="mobile-check-title">
                    <div className="row">
                      <div className="col-12">ADULT</div>
                    </div>
                  </div>
                  <div className="adult-numbers">
                    <select id="adult" name="adult" size="1">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="total-children-section">
                <div className="item-sup" id="mobile-check-title">
                  <div className="row">
                    <div className="col-6">CHILDREN</div>
                  </div>
                </div>
                <div className="children-numbers">
                  <select id="children" name="children" size="1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="total-rooms-section">
                <div>
                  <div className="item-sup" id="mobile-check-title">
                    <div className="row">
                      <div className="col-6">ROOMS</div>
                    </div>
                  </div>
                  <div className="room-numbers">
                    <select id="rooms" name="rooms" size="1">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="button-container">
              <div className="search-button">
                <button>Search</button>
              </div>
            </div>
          </div>
          <div
            className="bottom-search-bar-mobile d-flex d-lg-none"
            data-toggle="modal"
            data-target="#myModal"
          >
            <span>Where to</span>
            <span>
              <i className="fa fa-ellipsis-v"></i>
            </span>
          </div>
          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Where to</h5>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div className="modal-body">
                  <div className="bottom-search-bar">
                    <div className="item">
                      <span>
                        <i className="fa fa-search"></i>
                      </span>
                      <input type="text" placeholder="Los Angeles" />
                      <div className="item-sup">Destination</div>
                    </div>
                    <div className="item">
                      <div className="mobile-checkdate">
                        <span>
                          <i className="fa fa-calendar"></i>
                        </span>
                        <input type="date" placeholder="Find a Hotel" />
                        <input type="date" placeholder="Find a Hotel" />
                      </div>

                      <div className="item-sup" id="mobile-check-title">
                        <div className="row">
                          <div className="col-6">Check-in</div>
                          <div className="col-6">Check-out</div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <span>
                        <i className="fas fa-users"></i>
                      </span>
                      <input type="text" placeholder="1 Room 1 Adult" />
                      <div className="item-sup">Occupancy</div>
                    </div>
                    <div className="item">
                      <span>
                        <i className="fas fa-dollar-sign"></i>
                      </span>
                      <input type="text" placeholder="Lowest Available Rate" />
                      <div className="item-sup">Special rates</div>
                    </div>
                    <div className="button-container">
                      <button>Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
