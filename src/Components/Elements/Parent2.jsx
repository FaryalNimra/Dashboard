import React from 'react';
import E2 from './E2';
import Element10 from './Element10';
import Element17 from './Element17';

import './Parent2.scss'; // Import styles for the parent component

const Parent2 = () => {
  return (
    <div className="parent-component-container">
      <E2 />  
      <Element10 /> 
      <Element17 /> 
    </div>
  );
};

export default Parent2;
