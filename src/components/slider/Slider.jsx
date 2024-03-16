import { useState } from "react";
import "./slider.scss";

export default function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const handleNext = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
      return;
    }
    setImageIndex((imageIndex) => imageIndex + 1);
  };

  const handlePrev = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
      return;
    }
    setImageIndex((imageIndex) => imageIndex - 1);
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={handlePrev}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow right" onClick={handleNext}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}

      <div className="bigImage" onClick={() => setImageIndex(0)}>
        <img src={images[0]} alt="main image" />
      </div>
      <div className="smallImage">
        {images.slice(1).map((image, i) => (
          <img
            key={i}
            src={image}
            alt="images"
            onClick={() => setImageIndex(i + 1)}
          />
        ))}
      </div>
    </div>
  );
}
