import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="video-container">
          <video autoPlay muted loop>
            <source src="img\intro-bg.mp4" type="video/mp4" />
          </video>
          <img src="img/intro-bg-mobile.jpg" alt="bordados aime mobile" className="img-mobile" />
          <img src="img/intro-bg-tablet.jpg" alt="bordados aime tablet" className="img-tablet" />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-4 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#services"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Saber más
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
