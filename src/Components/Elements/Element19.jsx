// src/Components/Elements/Element12.jsx

import React from 'react';
import './Element19.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Element19 = () => {
    const tableData = [
        { no: '1', fileName: 'Name', size: 'abc@mail.com', Date: 'Manager', storage: 'Active', Action: 'Options' },
        { no: '2', fileName: 'Name', size: 'abc@mail.com', Date: 'Manager', storage: 'Active', Action: 'Options' },
        { no: '3', fileName: 'Name', size: 'abc@mail.com', Date: 'Manager', storage: 'InActive', Action: 'Options' },
        { no: '4', fileName: 'Name', size: 'abc@mail.com', Date: 'Manager', storage: 'Active', Action: 'Options' },
        { no: '5', fileName: 'Name', size: 'abc@mail.com', Date: 'Manager', storage: 'InActive', Action: 'Options' },
        { no: '6', fileName: 'Name', size: 'abc@mail.com', Date: 'Manager', storage: 'Active', Action: 'Options' },
        { no: '7', fileName: 'Name', size: 'abc@mail.com', Date: 'Manager', storage: 'Active', Action: 'Options' },
        { no: '8', fileName: 'Name', size: 'abc@mail.com', Date: 'Manager', storage: 'Active', Action: 'Options' },
        
      ];
  const rows = [
    {
      heading: 'Roles',
      paragraph: "Manage roles and permissions. You can use these roles when inviting members to your team",
      iconSrc: '/Assests/switch.png' // replace with your icon path
    },
    {
      heading: 'Team Members',
      paragraph: "Manage your team members and and provide access to new  team members",
      iconSrc: '/Assests/switch.png' // replace with your icon path
    },
  ];

  return (
    <div className="element121-container container">
      <h5 className="element121-main-heading">Manage Team Members</h5><br></br>
      <div className="element121-spacer"></div>
      {rows.map((row, index) => (
        <div className="element121-row row align-items-center mb-4" key={index}>
          <div className="col-9">
            <h5 className="element121-heading">{row.heading}</h5>
            <p className="element121-paragraph">{row.paragraph}</p>
          </div>
          <div className="col-3">
            <img src={row.iconSrc} alt="Icon" className="element12-icon" />
          </div>
        </div>
        
      ))}
     <table className="element81-table">
        <thead>
          <tr>
            <th style={{ color: "#3F4254" }}>#</th>
            <th style={{ color: "#3F4254" }}>Name</th>
            <th style={{ color: "#3F4254" }}>Email</th>
            <th style={{ color: "#3F4254" }}>Role</th>
            <th style={{ color: "#3F4254" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className={index === 8 ? 'highlight' : ''}>
              <td><img src="/Assests/CTA BTN.png" alt="Row Icon" className="row-icon" /> <span className="row-number" style={{ paddingLeft:5 }}>{row.no}</span></td>
              <td>{row.fileName}</td>
              <td>{row.size}</td>
              <td>{row.Date}</td>
              <td className={row.storage === 'Active' ? 'status-active' : 'status-inactive'}>{row.storage}</td>
              <td>{row.lastseen}</td>
              <td>
                {row.Action}
                <img src="/Assests/down.png" alt="Action Icon" className="action-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default Element19;
