import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Components/Layout/Base";
import './index.css';
import Monitor from "./Pages/Monitor";
import Training from "./Pages/Training";
import Knbox from "./Pages/Knbox";
import Integration from "./Pages/Integration";
import Customer from "./Pages/Customer";
import Setting  from "./Pages/Setting";
import Assistant from "./Pages/Assistant";
import ABehaviour from "./Pages/ABehaviour";
import ParentComponent from "./Components/Elements/ParentComponent";
import Parent2 from "./Components/Elements/Parent2";
import Parent1  from "./Components/Elements/Parent1";
import Parent3  from "./Components/Elements/Parent3";
import Element16  from "./Components/Elements/Element16"
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
       <div className="main-content">
          <Base>
            <Routes>
            <Route index path="/" element={<Monitor />} />
            <Route index path="/Training" element={<Training />} />
            <Route index path="/Knbox" element={<Knbox />} />
            <Route index path="/Integration" element={<Integration />} />
            <Route index path="/Customer" element={<Customer />} />
            <Route index path="/Setting" element={<Setting />} />
            <Route index path="/Assistant" element={<Assistant />} />
            <Route index path="/ABehaviour" element={<ABehaviour />} />
            <Route path="/ParentComponent" element={<ParentComponent />} />
            <Route path="/Parent2" element={<Parent2 />} />
            <Route path="/Parent1" element={<Parent1 />} />
            <Route path="/Parent3" element={<Parent3 />} />
            <Route path="/Element16" element={<Element16 />} />
            
            </Routes>
          </Base>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
