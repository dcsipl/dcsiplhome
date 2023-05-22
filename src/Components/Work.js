import React from "react";
import "./Work.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
export default function Work() {
  return (
    <>
      <div className="work-container" id="work">
        <h1>Work Model</h1>
        <div class="section-title">
      <div class="bar">
        </div>
        </div>
        <ul className="point-list">
          <li>
            <BsFillCheckCircleFill size="20px" color="#056EE9" /> &nbsp; We
            offer 100% remote – work from home for our employees entrusted with
            maintaining work ethics and self-discipline
          </li>
          <li>
            <BsFillCheckCircleFill size="20px" color="#056EE9" /> &nbsp;Flexible
            working hours
          </li>
          <li>
            <BsFillCheckCircleFill size="20px" color="#056EE9" /> &nbsp;Frequent
            assessments and Town hall meetings to engage the employees working
            in Pan India
          </li>
        </ul>
      </div>
    </>
  );
}
