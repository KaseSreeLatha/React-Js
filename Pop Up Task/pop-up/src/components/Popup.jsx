import React from 'react';
import './Popup.css';
import image from '../images/placeholderImage.jpg';
import Cookies from 'js-cookie';

const Popup = ({ onClose }) => {
  const handleClose = () => {
    
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <button className="popup-close-button" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center">
          <img
            src={image}
            alt="Placeholder"
            className="popup-image"
          />
          <p className="popup-title">Welcome! It's your first login.</p>
          <p className="popup-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
