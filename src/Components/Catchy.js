import React,{useEffect,useState} from "react";
import "./Catchy.css";
import { BsArrowRight } from "react-icons/bs";
export default function Catchy() {
 
  
  return (
    <>
      <>
        <div className="catchy-container" id="home" 
      >
          <div className="row">
            <div className="left col-lg-6 col-md-6 col-12">
              <h1>Diamatics</h1>
              <h3>
                Help Each Other, <br />
                <span>Grow Together!</span>
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <a href="#contact">
              <button className="btn">
                Let's Talk <BsArrowRight />
              </button>
              </a>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
          
            <div className="image-container">
      <img src="../D1.png" alt="Image 1" />
      <img src="../D2.png" alt="Image 2" />
      <img src="../D3.png" alt="Image 3" />
      <img src="../D4.png" alt="Image 6" />
      <img src="../D5.png" alt="Image 4" />
      <img src="../D6.png" alt="Image 5" />

      <img style={{height:"690px",width:"690px",marginLeft:"50px",marginTop:"50px",backgroundColor:"transparent"}}src="../D_logo.png" alt="Image 6" />
    </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
