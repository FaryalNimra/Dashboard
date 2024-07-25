import React from 'react';
import E1 from '../Components/Elements/E1'; 
import Element13 from '../Components/Elements/Element13'; 
import Element14 from '../Components/Elements/Element14'; 
import './Assistant.scss';  // Import the SCSS file for styling

const Assistant = () => {
  return (
    <div className="Assistant-wrapper">
      <E1 />
      <div className="Assistant-container">
        <div className="sidebar-container">
          <Element13 />
        </div>
        <div className="content-container">
          <Element14 />
        </div>
      </div>
    </div>
  );
};

export default Assistant;
