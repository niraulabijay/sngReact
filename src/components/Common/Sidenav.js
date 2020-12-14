import React from "react";

function Sidenav() {
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function buttonDropdown(event) {
    console.log(event);
    var target = document.getElementById(
      event.target.getAttribute("data-target")
    );
    var allDropdown = document.getElementsByClassName("dropdown-content");

    for (let i = 0; i < allDropdown.length; i++) {
      if (target != allDropdown[i]) {
        allDropdown[i].style.display = "none";
      }
    }

    var css = target.style.display;

    console.log(css);
    if (!css || css == "none") {
      target.style.display = "block";
    } else {
      target.style.display = "none";
    }
  }

  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div className="nav-content">
          <a href="index.html">Home</a>
        </div>
        <div className="nav-content">
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={(e) => buttonDropdown(e)}
              className="dropbtn"
              data-target="roomsDropdown"
            >
              Rooms <i className="fa fa-caret-down"></i>
            </button>
          </div>
          <div id="roomsDropdown" className="dropdown-content">
            <a href="rooms.html">View all rooms</a>
            <a href="room-detail.html">Grand Deluxe</a>
            <a href="room-detail.html">Superior Deluxe</a>
            <a href="room-detail.html">Deluxe King Room</a>
          </div>
        </div>
        <div className="nav-content">
          <a href="packages.html">Packages</a>
        </div>
        <div className="nav-content">
          <div className="dropdown">
            <button
              onClick={(e) => buttonDropdown(e)}
              className="dropbtn"
              data-target="galleryDropdown"
            >
              Gallery <i className="fa fa-caret-down"></i>
            </button>
          </div>
          <div id="galleryDropdown" className="dropdown-content">
            <a href="gallery.html">Images Gallery</a>
            <a href="gallery-video.html">Video Gallery</a>
          </div>
        </div>
        <div className="nav-content">
          <a href="contact.html">Contact</a>
        </div>
        <div className="nav-content">
          <div className="dropdown">
            <button
              onClick={(e) => buttonDropdown(e)}
              className="dropbtn"
              data-target="buttonDropdownContent"
            >
              More <i className="fa fa-caret-down"></i>
            </button>
          </div>
          <div id="buttonDropdownContent" className="dropdown-content">
            <a href="restaurant.html">Restaurant and bar</a>
            <a href="search-for-room.html">Search Room</a>
            <a href="blog.html">Blog</a>
            <a href="about-us">About Us</a>
            <a href="our-team">Our Team</a>
            <a href="reach">How to Reach</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
