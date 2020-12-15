import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import ImageTab from "./ImageTab";


function Image() {

  return (
    <div>
      <div class="gallery-section">
        <div class="gallery-menu">
          <div class="tab">
            <Link to={"/image_gallery"}>
              <button class="my_tabs active">All</button>
            </Link>
            <Link to={"/image_gallery/room"}>
              <button class="my_tabs">ROOM</button>
            </Link>
            <Link to={"/image_gallery/food"}>
              <button class="my_tabs">FOOD</button>
            </Link>
            <Link to={"/image_gallery/spa"}>
              <button class="my_tabs">SPA</button>
            </Link>
            <Link to={"/image_gallery/cooking"}>
              <button class="my_tabs">COOKING</button>
            </Link>
            <Link to={"/image_gallery/bath"}>
              <button class="my_tabs">BATH</button>
            </Link>
            <Link to={"/image_gallery/pool"}>
              <button class="my_tabs">POOL</button>
            </Link>
          </div>

          <div class="gallery-tab-content-all">
            <div id="room">
              <Switch>
                <Route exact path={"/image_gallery"}>
                  <ImageTab name="all" />
                </Route>
                <Route exact path={"/image_gallery/room"}>
                  <ImageTab name="room" />
                </Route>
                <Route exact path={"/image_gallery/food"}>
                  <ImageTab />
                </Route>
                <Route exact path={"/image_gallery/spa"}>
                  <ImageTab />
                </Route>
                <Route exact path={"/image_gallery/cooking"}>
                  <ImageTab />
                </Route>
                <Route exact path={"/image_gallery/bath"}>
                  <ImageTab />
                </Route>
                <Route exact path={"/image_gallery/pool"}>
                  <ImageTab />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image;
