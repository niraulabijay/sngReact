import React from "react";

function HomeWelcome() {
  return (
    <>
      <div className="welcome">
        <div className="container">
          <p className="welcome-title">Welcome to Hotel SNG</p>
          <p className="welcome-message">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo cum
            aliquam facilis veniam, aperiam doloribus ut consectetur. Illo
            tenetur nesciunt, laboriosam amet, molestias obcaecati, doloribus
            sint facere eum quod dignissimos.
          </p>
          
          <img src={process.env.PUBLIC_URL + "/images/signature-gm.png"} />

          <div className="general-manager">
            <p className="manager-name">Sudarshan Aryal</p>
            General Manager Hotel
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeWelcome;
