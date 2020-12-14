import React from "react";
import { Tabs, AppBar, Tab, TabPanel, Paper } from "@material-ui/core";

function Image() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const hello = () => {
    alert("hello world");
  };

  return (
    <div>
      <div class="gallery-section">
        <div class="gallery-menu">
          <Paper square>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              centered
            >
              <Tab label="All" />
              <Tab label="ROOM" />
              <Tab label="FOOD" />
              <Tab label="SPA" />
              <Tab label="COOKING" />
              <Tab label="BATH" />
              <Tab label="POOL" />
            </Tabs>
          </Paper>
          <div class="gallery-tab-content-all">
            <div id="room">
              {value === 0 && (
                <div>
                  <div class="row">
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/lightbox-roomjpg.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/lightbox-roomjpg.jpg"
                        }
                        className="hover-shadow"
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/lightbox-roomjpg.jpg"
                        }
                        className="hover-shadow"
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/lightbox-roomjpg.jpg"
                        }
                        className="hover-shadow"
                      />
                    </div>
                  </div>
                </div>
              )}
              {value === 1 && (
                <div>
                  <div class="row">
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/lightbox-roomjpg.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/lightbox-roomjpg.jpg"
                        }
                        className="hover-shadow"
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/lightbox-roomjpg.jpg"
                        }
                        className="hover-shadow"
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/lightbox-roomjpg.jpg"
                        }
                        className="hover-shadow"
                      />
                    </div>
                  </div>
                </div>
              )}
              {value === 2 && (
                <div>
                  <div class="row">
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                  </div>
                </div>
              )}
              {value === 3 && (
                <div>
                  <div class="row">
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                  </div>
                </div>
              )}
              {value === 4 && (
                <div>
                  <div class="row">
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                  </div>
                </div>
              )}
              {value === 5 && (
                <div>
                  <div class="row">
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                  </div>
                </div>
              )}
              {value === 6 && (
                <div>
                  <div class="row">
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                    <div class="col-md-4 lightbox-image room">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/lightbo-food.jpg"
                        }
                        className="hover-shadow"
                        onClick={hello}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image;
