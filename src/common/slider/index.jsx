import React from "react";
import Slider from "react-slick";
import "./style.css";

export const AutoPlay=({ item })=> {
  const {image, icon, title}= item

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className="gameImage" src={image} alt="GameImage" />
          <div className="info">
            <img className="freeIcon" src={icon} alt="Free" />
            <h3>{title}</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}


