import React from "react";
import Slider from "react-slick";
import "./style.css";

export const Carousel = ({ items }) => {
  // const {image, icon, title}= item

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map(({ image, icon, title }, i) => {
          return (
            <div key={i} className="slider-item">
                <img src={image} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
