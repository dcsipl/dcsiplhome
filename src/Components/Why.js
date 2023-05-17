

import React, { useState, useEffect } from "react";
import "./Why.css"
import {BsFillCheckCircleFill} from "react-icons/bs"

const items = [
  {
    id: 1,
    name: "Managed Service Unit (MSU)",
    description1: "178 hours/Month Per Unit Single Dedicated Resource ",
    description2: "Distributed across multiple shared resources",
    description3: "Fixed cost One-year contract term",
    description4: "Multi-year contract incentive Option to change resource distribution every 3 months"
 
  },
  {
    id: 2,
    name: "Better Cost Control",
    description1: "The typical cost components of our Clients IT department, including training, equipment and personnel, are absorbed by Diamatics and presented as a fixed monthly charge to the Client",
    description2: "This helps in effectively predicting costs every month when budgeting.",
    description3: "Depending on the future requirements and the speed of the Clients organization’s IT maturity, our managed service can scale to address such scenarios",
    description4: "Diamatics helps our Clients' IT organizations be highly resilient, and cost-predictable, fiscal year to fiscal year"
  },
  {
    id: 3,
    name: "Improved Risk Management",
    description1: "We help reduce risk by contributing our proprietary methodologies and access to modern infrastructure and software",
    description2: "This enables adherence to best practices and minimizes the risk involved in service delivery. ",
    description3: "Diamatics assumes and manages much of our Clients risk by Having specific industry knowledge",
    description4: "Especially around Data Analytics, Data Integration and Data Management (On-prem or Cloud) Partnering with our Clients business and guide them on the best way to avoid risk in their domains of expertise"
  },
  {
    id: 4,
    name: "High Availability, Efficiency and Productivity",
    description1: "Our Clients experience better performance with minimal downtime when using Diamatics managed service",
    description2: "Diamatics can ensure maximum uptime and minimal service interruptions.",
    description3: "We are highly efficient in delivering IT services in a way that keeps costs low and the time to deploy short while providing a high-quality service to the business",
    description4: "Diamatics Managed Services complements and does not replace existing staff but rather free those valuable resources to lead and deliver on the strategic IT programs necessary to advance business goals."
  }
];

const Why = () => {
  const [selectedItemId, setSelectedItemId] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedItemId((prevId) => (prevId === items.length ? 1 : prevId + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <div className="why-container row" id="why">
      <h1>Why Diamatics?</h1>
      <div class="section-title">
      <div class="bar">
        </div>
        </div>
      <div className="description col-lg-6">
        <div>
          <p><BsFillCheckCircleFill size="18px" style={{ color:'#056EE9',marginLeft:"-45px",marginRight:"13px" }}/>  {items.find((item) => item.id === selectedItemId).description1}</p>
          <p><BsFillCheckCircleFill size="18px" style={{ color:'#056EE9',marginLeft:"-45px",marginRight:"13px" }}/>  {items.find((item) => item.id === selectedItemId).description2}</p>
          <p><BsFillCheckCircleFill size="18px" style={{ color:'#056EE9',marginLeft:"-45px",marginRight:"13px" }}/>  {items.find((item) => item.id === selectedItemId).description3}</p>
          <p><BsFillCheckCircleFill size="18px" style={{ color:'#056EE9',marginLeft:"-45px",marginRight:"13px" }}/>  {items.find((item) => item.id === selectedItemId).description4}</p>
        </div>
      </div>
   

      <div className="items col-lg-6">
      <div class="vertical-line"></div> 
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={selectedItemId === item.id ? "selected" : ""}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Why;

