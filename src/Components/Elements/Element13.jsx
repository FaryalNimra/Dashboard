import React from 'react';
import './Element13.scss';

const Element13 = () => {
  return (
    <div className="element13-container">
      <p className="paragraph-left">Bot Profile Picture</p>
      <img src="/Assests/IMG-20240508-WA0004.png" alt="Example" className="responsive-image" />
      <p className="paragraph-middle">Allowed file types: png, jpg, jpeg.</p>

      <div className="two-column-div row">
        <div className="col-12 col-md-6">
          <div className="row">
          <h5 className="column-heading">Choose Bot theme</h5>
            <div className="col-12 column-item">
              <p className="column-paragraph">0C0698</p>
              <img src="/Assests/Rectangle 2.png" alt="Icon1" className="column-icon" />
            </div>
            <h5 className="column-heading">User Message Color</h5>
            <div className="col-12 column-item">
              <p className="column-paragraph">0C0698</p>
              <img src="/Assests/Rectangle 2.png" alt="Icon1" className="column-icon" />
            </div>
            <h5 className="column-heading">Background color</h5>
            <div className="col-12 column-item">
            <p className="column-paragraph">0C0698</p>
              <img src="/Assests/Rectangle 2.png" alt="Icon1" className="column-icon" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
          <h5 className="column-heading">Bot Message Color</h5>
            <div className="col-12 column-item">
              <p className="column-paragraph">0C0698</p>
              <img src="/Assests/Rectangle 2.png" alt="Icon1" className="column-icon" />
            </div>
            <h5 className="column-heading">Accents Color</h5>
            <div className="col-12 column-item">
              <p className="column-paragraph">0C0698</p>
              <img src="/Assests/Rectangle 2.png" alt="Icon1" className="column-icon" />
            </div>
            <h5 className="column-heading">Side bar Color</h5>
            <div className="col-12 column-item">
              <p className="column-paragraph">0C0698</p>
              <img src="/Assests/Rectangle 2.png" alt="Icon1" className="column-icon" />
            </div>
          </div>
        </div>
      </div>

      <h5 className="bottom-heading">Bot First Message</h5>
      <p className="bottom-paragraph">Hey! How can I help you today?</p>
      <button className="bottom-button">Save the changes</button>
    </div>
  );
};

export default Element13;
