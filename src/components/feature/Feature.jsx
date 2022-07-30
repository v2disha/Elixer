import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="elx__features-container__feature">
    <div className="elx__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="elx__features-container_feature-text">
      <p className="our-project">{text}</p>
    </div>
    <div className="elx__footer-btn">
      <a href='#'>{title}</a>
    </div>
  </div>
);

export default Feature;
