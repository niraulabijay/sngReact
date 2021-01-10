import React from "react";

function HomeWelcome({welcome}) {
  return (
    <>
    {welcome &&
      <div className="welcome">
        <div className="container">
          <p className="welcome-title">Welcome to Hotel SNG</p>
          <p className="welcome-message">
            {welcome.welcome_message}
          </p>
          
          <img src={process.env.PUBLIC_URL + "/images/signature-gm.png"} />

          <div className="general-manager">
            <p className="manager-name">{welcome.head_person}</p>
            {welcome.head_person_designation}
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default HomeWelcome;
