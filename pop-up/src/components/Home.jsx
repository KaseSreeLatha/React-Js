import React, { useEffect, useState } from 'react';
import './popup.css';
import image from '../images/pixels.jpg';
import image1 from '../images/cam.jpg';
import logo from '../images/logo.jpg'; // Import your logo image

function Home() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const value = localStorage.getItem("value");
    setShowPopup(value === "true"); // Convert string to boolean
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="web-page-content">
        <header>
          <h1>Welcome to My Website</h1>
        </header>
        <main>
          <div className="text-content">
            <h2 className="text-xl font-bold mb-4">Main Content</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <br></br>
            {/* <img src={image} alt="Image" /> */}
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
            </ul>
          </div>
        </main>
      </div>
      {showPopup && (
        <div className="popup-container">
          <div className="cancel-icon" onClick={handleClosePopup}>
            &times;
          </div>
          <div className="popup-content">
            <div className="legend">
            <img src={logo} alt="Logo" className="popup-logo" />
            </div>
            <div className="text-content">
              <h2 className="text-xl font-bold mb-4">This is First time Login</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="image-content">
              <img src={image1} alt="Random Image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
