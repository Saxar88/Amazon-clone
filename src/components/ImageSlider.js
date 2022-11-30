import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = { height: "100%", position: "relative" };

  const leftArrowStyles = {
    position: "absolute",
    top: "20%",
    transform: "translate(0,-50%)",
    left: "25px",
    fontSize: "45px",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "20%",
    transform: "translate(0,-50%)",
    right: "25px",
    fontSize: "45px",
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={sliderStyles}>
      <FontAwesomeIcon
        icon={faAngleLeft}
        style={leftArrowStyles}
        onClick={goToPrevious}
      />
      <div style={slideStyles}></div>
      <FontAwesomeIcon
        icon={faAngleRight}
        style={rightArrowStyles}
        onClick={goToNext}
      />
    </div>
  );
};

export default ImageSlider;
