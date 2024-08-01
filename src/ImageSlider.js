import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import CSS file for styling

const ImageSlider = ({ images, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle indicator click
  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [interval]);

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div className="slider-image" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
      </div>
      <button className="slider-button prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="slider-button next" onClick={goToNext}>
        &#10095;
      </button>
      <div className="indicator-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
