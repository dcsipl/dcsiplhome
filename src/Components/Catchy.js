import React,{useEffect,useState} from "react";
import "./Catchy.css";
import { BsArrowRight } from "react-icons/bs";
export default function Catchy() {
  // const [backgroundImage, setBackgroundImage] = useState("../bg2.jpg");
  
  // useEffect(() => {
  //   const images = [
  //     "../bg2.jpg",
  //     "../bg3.jpg"
  //   ];
    
  //   let currentIndex = 0;
    
  //   const intervalId = setInterval(() => {
  //     if (currentIndex === images.length) {
  //       currentIndex = 0;
  //     }
      
  //     setBackgroundImage(images[currentIndex]);
      
  //     currentIndex++;
  //   }, 5000);
    
  //   return () => clearInterval(intervalId);
  // }, []);
  
  return (
    <>
      <>
        <div className="catchy-container" id="home" 
      //   style={{
      //   backgroundImage: `url(${backgroundImage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   color: "white",
      //   minHeight: "100vh",
      //   display: "flex",
      // }}
      >
          <div className="row">
            <div className="left col-lg-6 col-md-6 col-12">
              <h1>DCSIPL</h1>
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
          
   
            </div>
          </div>
        </div>
      </>
    </>
  );
}
