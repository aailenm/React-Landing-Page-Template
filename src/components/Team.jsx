import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Team = (props) => {
  const settings = {
    autoPlay: true,
    infiniteLoop: true,
    showThumbs: false,
    showArrows: false,
    showStatus: false,
    interval: 1000,
    transitionTime: 1000,
    stopOnHover: false,
    swipeable: true,
    dynamicHeight: false,
    emulateTouch: true,
    centerSlidePercentage: 25,
    centerMode: true
};

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Quienes ya confiaron en nosotros</h2>
        </div>
        <div id="row" className="brands">
        <Carousel {...settings}>
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-md-16 team"
                  >
                    <div className="thumbnail">
                      {" "}
                      <img src={d.img} alt="..." className="team-img" />
                    </div>
                  </div>
                ))
              : "loading"}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
