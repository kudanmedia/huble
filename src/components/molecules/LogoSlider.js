import React from 'react';

const LogoSlider = ({ logos }) => {
  return (
    <div className="logo-slider">
      <div className="logo-container">
        {logos.map((logo, index) => (
          <div key={index} className="logo">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;