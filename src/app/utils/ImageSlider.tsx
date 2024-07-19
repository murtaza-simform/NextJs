/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

export default function ImageSlider() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img alt="carousel" src="http://picsum.photos/800/400" />
        </div>
        <div>
          <img alt="carousel" src="http://picsum.photos/800/400" />
        </div>
        <div>
          <img alt="carousel" src="http://picsum.photos/800/400" />
        </div>
        <div>
          <img alt="carousel" src="http://picsum.photos/800/400" />
        </div>
      </Slider>
    </div>
  );
}
