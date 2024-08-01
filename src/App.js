import React from 'react';
import ImageSlider from './ImageSlider';
import './ImageSlider.css';


const App = () => {
  const images = [
    'image-1.jpg',
    'Image-2.jpg',
    'Image-3.jpg',
    'Image-4.jpg'
  ];

  return (
    <div className="App">
      <h1>Image Slider</h1>
      <ImageSlider images={images} interval={3000} />
    </div>
  );
};

export default App;