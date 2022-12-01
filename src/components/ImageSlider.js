import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./ImageSlider.css";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://m.media-amazon.com/images/I/615YUOqLN5L._SX3000_.jpg",
      title: "We deliver",
    },
    {
      url: "https://m.media-amazon.com/images/I/61HHmUkimnL._SX3000_.jpg",
      title: "Best sellers",
    },
    {
      url: "https://m.media-amazon.com/images/I/71f7FKMnU7L._SX3000_.jpg",
      title: "Refresh your space",
    },
    {
      url: "https://m.media-amazon.com/images/I/61kT3Ag3PWL._SX3000_.jpg",
      title: "Discover our beauty picks",
    },
    {
      url: "https://m.media-amazon.com/images/I/61OQs6Tq7cL._SX3000_.jpg",
      title: "Explore",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="imageSlider">
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="imageSlider--leftArrow"
        onClick={goToPrevious}
      />
      <img className="imageSlider--slides" src={slides[currentIndex].url}></img>
      <FontAwesomeIcon
        icon={faAngleRight}
        className="imageSlider--rightArrow"
        onClick={goToNext}
      />
    </div>
  );
};

export default ImageSlider;
