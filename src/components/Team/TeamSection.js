import React from "react";

function TeamSection() {
  return (
    <div>
      <div className="team-section">
        <div className="team-heading">
          <p className="team-heading-title">Meet our team</p>
          <p>
            Equipped with experience and a serving attitude, our team is
            dedicated to provide the best service. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Delectus quisquam animi maxime numquam
            doloribus reiciendis, in possimus quaerat ut? In aliquam iusto
            accusantium qui ab facere itaque corporis impedit nihil!
          </p>
        </div>
        <div className="team-all">
          <div className="team-member">
            <div className="row">
              <div className="col-md-3">
                <div className="team-member-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/our-team-sample.jpg"}
                  />
                </div>
              </div>
              <div className="col-md-9">
                <div className="team-member-text">
                  <div className="team-member-name">Ram Bahadur</div>
                  <div className="team-member-position">General Manager</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores blanditiis deleniti est adipisci velit explicabo
                    labore dignissimos. Minus magnam nam distinctio blanditiis?
                    Natus maiores odit quis error vel. Assumenda, temporibus!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="row">
              <div className="col-md-3">
                <div className="team-member-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/our-team-sample.jpg"}
                  />
                </div>
              </div>
              <div className="col-md-9">
                <div className="team-member-text">
                  <div className="team-member-name">Shyam Lal</div>
                  <div className="team-member-position">Manager</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores blanditiis deleniti est adipisci velit explicabo
                    labore dignissimos. Minus magnam nam distinctio blanditiis?
                    Natus maiores odit quis error vel. Assumenda, temporibus!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
