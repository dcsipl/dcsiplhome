// import React, { useState } from 'react';
// import "./rolling.css"
// const images = [
//   '../service1.png',
//   '../service2.png',
//   '../service3.png',
//   '../service4.png',
//   '../service5.png'
// ];

// const Rolling = () => {
//   return <ImageCarousel images={images} />;
// };

// export default Rolling;

// const ImageCarousel = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   return (
//     <div className="carousel-container">
//       <div className="carousel-images">
//         {images.map((imageUrl, index) => (
//           <div
//             key={imageUrl}
//             className={`carousel-image ${
//               index === currentImageIndex ? 'active' : ''
//             }`}
//             style={{
//               backgroundImage: `url(${imageUrl})`,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };


import React, { useState, useEffect } from 'react';
import "./rolling.css"

const images = [  '../service1.png',  '../service2.png',  '../service3.png',  '../service4.png',  '../service5.png'];

const Rolling = () => {
  return <ImageCarousel images={images} />;
};

export default Rolling;

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {images.map((imageUrl, index) => (
          <div
            key={imageUrl}
            className={`carousel-image ${
              index === currentImageIndex ? 'active' : ''
            }`}
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
