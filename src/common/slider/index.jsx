import React from "react";
import Slider from "react-slick";
import "./style.css";

export const Carousel = ({ items }) => {
  // const {image, icon, title}= item

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map(({ image, icon, title }, i) => {
          return (
            <div key={i} className="slider-item">
              <img src={image} alt="GameImage" />
              <div key={i} className="slider-item-bottom">
                <img src={icon} alt="FreeIcon" />
                <h1>{title}</h1>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
