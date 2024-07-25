import React from "react";
import "./Element15.scss";

const Element15 = () => {
  return (
    <div className="element15-container">
      <div className="row">
        <div className="col">
          <h2 className="main-heading">1.Assistant Behaviour</h2>
          <div className="sub-section">
            <h3 className="sub-heading">Personality and Behaviour</h3>
            <textarea className="textarea" placeholder="placeholder"></textarea>
          </div>
          <div className="sub-section">
            <h3 className="sub-heading">Personality Traits</h3><br></br>
            <div className="d-flex justify-content-between">
              <div className="left-column">
                <h4 className="sub-sub-heading">Friendly</h4><br></br>
                <h4 className="sub-sub-heading">Helpful</h4><br></br>
                <h4 className="sub-sub-heading">Direct</h4><br></br>
                <h4 className="sub-sub-heading">Why</h4><br></br>
                <h4 className="sub-sub-heading">Professional</h4><br></br>
              </div>
              <div className="right-column">
  <img src="/Assests/Item.png" alt="Description" className="slider-image" />
</div>

            </div>
          </div>

          <div className="sub-section">
            <div className="d-flex">
              <div className="left-column">
                <h3 className="sub-heading">Response Length</h3>
                <div className="input-wrapper">
                  <input type="text" className="input-field" placeholder="key" />
                  <img src="/Assests/down.png" alt="icon" className="icon" />
                </div>
              </div>
              <div className="right-column">
                <h3 className="sub-heading">Tone Customization</h3>
                <div className="input-wrapper">
                  <input type="text" className="input-field" placeholder="key" />
                  <img src="/Assests/down.png" alt="icon" className="icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="sub-section">
            <div className="d-flex">
              <div className="left-column">
                <h3 className="sub-heading">General Knowledge</h3>
                <div className="input-wrapper">
                  <input type="text" className="input-field" placeholder="Enter text..." />
                  <img src="/Assests/switch.png" alt="icon" className="icon" />
                </div>
              </div>
              <div className="right-column">
                <h3 className="sub-heading">Extra Information</h3>
                <div className="input-wrapper">
                  <input type="text" className="input-field" placeholder="Enter text..." />
                  <img src="/Assests/switch.png" alt="icon" className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
        <div className="col">
          <h2 className="main-heading"> 2. Assistant Commands</h2>
          <div className="sub-section">
            <h3 className="sub-heading">command</h3>
            <textarea className="textarea" placeholder="placeholder"></textarea>
          </div>
          <div className="sub-section">
            <h3 className="sub-heading">command</h3>
            <textarea className="textarea" placeholder="placeholder"></textarea>
          </div>
</div></div>
        </div>
      </div>
    </div>
  );
};

export default Element15;
