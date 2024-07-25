import React from "react";
import "./Element18.scss";

const Element18 = () => {
  return (
    <div className="element15-container">

          <div className="sub-section">
            <div className="d-flex">
              <div className="left-column">
              <h1 className="sub-heading" style={{color:"#343434",fontWeight:"bold"}}>Add your own OpenAI key </h1><br></br>
               </div>

               </div>

          <div className="sub-section">
            <div className="d-flex">
              <div className="left-column">
                <h3 className="sub-heading">OpenAI key</h3>
                <div className="input-wrapper">
                  <input type="text" className="input-field" placeholder="key" />
                  <img src="/Assests/down.png" alt="icon" className="icon" />
                </div>
              </div>
              <div className="right-column">
                <h3 className="sub-heading">OpenAI key</h3>
                <div className="input-wrapper">
                  <input type="text" className="input-field" placeholder="Select a gpt model" />
                  <img src="/Assests/down.png" alt="icon" className="icon" />
                </div>
              </div>
            </div>
          </div>
          <button className="bottom-button_17">Save Key</button>
 
       </div>
       </div>
    
  );
};

export default Element18;
