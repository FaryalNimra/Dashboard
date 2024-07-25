import React from 'react';
import E2 from './E2';
import Element10 from './Element10';
import Element18 from './Element18';

import './Parent1.scss'; // Import styles for the parent component

const Parent1 = () => {
  return (
    <div className="parent-component-container">
      <E2 />  
      <Element10 /> 
      <Element18 /> 
    </div>
  );
};

export default Parent1;
