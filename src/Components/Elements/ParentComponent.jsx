import React from 'react';
import E2 from './E2';
import Element10 from './Element10';
import Element12 from './Element12';

import './ParentComponent.scss'; // Import styles for the parent component

const ParentComponent = () => {
  return (
    <div className="parent-component-container">
      <E2 />  
      <Element10 /> 
      <Element12 /> 
    </div>
  );
};

export default ParentComponent;
