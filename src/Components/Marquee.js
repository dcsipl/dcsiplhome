import React from "react";
import "./Marquee.css";
import json from "./Marquee.json";
export default function Marquee() {
  return (
    <>
      <div className="marquee-container">
        <h1>Trusted By</h1>
        <marquee behavior="scroll" direction="left" scrollamount="10" loop>
          {json.marquee.map((datas) => {
            return <img src={datas.src} className="img-fluid" />;
          })}
        </marquee>
      </div>
    </>
  );
}
