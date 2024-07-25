import React, { useState } from 'react';
import './Element16.scss';
import Popup from './Popup';

const Element16 = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="element2-container">
      <div className="element2-row">
        <h2 className="element2-heading">Data</h2>
        <h2 className="element2-heading1">13GB / 20GB</h2>
        <div className="element2-search-container">
          <input type="text" placeholder="Search" className="element2-search-input" />
          <img src="/Assests/search-outline.png" alt="Search Icon" className="element2-search-icon" />
          <img src="/Assests/more.png" alt="More Icon" className="element2-more-icon" />
        </div>
      </div>
      <div className="element2-row-content">
        <img src="/Assests/solar_file-outline.png" alt="Type Image" className="element2-left-image" />
        <h2 className="element2-heading2">Type </h2>
        <img src="/Assests/Vector (1).png" alt="Type Image" className="element2-left-image" style={{ paddingLeft: 5 }} />
        <div className="element2-spacer"></div>
        <img src="/Assests/icon (9).png" alt="Button Image" className="element2-right-image" />
        <button className="element2-button" onClick={handleButtonClick}>
          <img src="/Assests/Vector (3).png" alt="Button Icon" className="element2-button-icon" /> Add Data
        </button>
        <img src="/Assests/Frame 1160445118.png" alt="Button Image" className="element2-right-image" />
        <img src="/Assests/Frame 1160445119.png" alt="Button Image" className="element2-right-image" />
      </div>
      <div className="element16-row">
        <div className="element16-column">
          <img src="/Assests/u (2).png" alt="Header Image" className="element16-header-image" />
          <img src="/Assests/u (1).png" alt="Image" className="element16-image" />
        </div>
        <div className="element16-column">
          <img src="/Assests/u (2).png"  alt="Header Image" className="element16-header-image" />
          <img src="/Assests/u (1).png" alt="Image" className="element16-image" />
        </div>
        <div className="element16-column">
          <img src="/Assests/u (2).png"  alt="Header Image" className="element16-header-image" />
          <img src="/Assests/u (1).png" alt="Image" className="element16-image" />
        </div>
        <div className="element16-column">
          <img src="/Assests/u (2).png"  alt="Header Image" className="element16-header-image" />
          <img src="/Assests/u (1).png"  alt="Image" className="element16-image" />
        </div>
      </div>
      <div className="element16-row">
        <div className="element16-column">
          <img src="/Assests/u (2).png" alt="Header Image" className="element16-header-image" />
          <img src="/Assests/u (1).png" alt="Image" className="element16-image" />
        </div>
        <div className="element16-column">
          <img src="/Assests/u (2).png"  alt="Header Image" className="element16-header-image" />
          <img src="/Assests/u (1).png" alt="Image" className="element16-image" />
        </div>
        <div className="element16-column">
          <img src="/Assests/u (2).png"  alt="Header Image" className="element16-header-image" />
          <img src="/Assests/u (1).png" alt="Image" className="element16-image" />
        </div>
        <div className="element16-column">
          <img src="/Assests/u (2).png"  alt="Header Image" className="element16-header-image" />
          <img src="/Assests/u (1).png"  alt="Image" className="element16-image" />
        </div>
      </div>

      
       

      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default Element16;
