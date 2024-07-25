import React from "react";
import "./Element17.scss";

const Element17 = () => {
  return (
    <div className="element15-container">

          <div className="sub-section">
            <div className="d-flex">
              <div className="left-column">
              <h1 className="sub-heading" style={{color:"#343434",fontWeight:"bold"}}>Change Password</h1><br></br>
                <h3 className="sub-heading">Current Password</h3>
                <div className="input-wrapper">
                  <input type="text" className="input-field" placeholder="•••••••••••••••" />
                  <img src="/Assests/lets-icons_view-alt-fill.png" alt="icon" className="icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="sub-section">
            <div className="d-flex">
              <div className="left-column">
                <h3 className="sub-heading">New Password</h3>
                <div className="input-wrapper">
                  <input type="text" className="input-field" placeholder="•••••••••••••••" />
                  <img src="/Assests/lets-icons_view-alt-fill.png" alt="icon" className="icon" />
                </div>
              </div>
              <div className="right-column">
                <h3 className="sub-heading">Retype New Password</h3>
                <div className="input-wrapper">
                  <input type="text" className="input-field" placeholder="•••••••••••••••" />
                  <img src="/Assests/lets-icons_view-alt-fill.png" alt="icon" className="icon" />
                </div>
              </div>
            </div>
          </div>
          <button className="bottom-button_17">Update Password</button>
          
</div>
       
    
  );
};

export default Element17;
