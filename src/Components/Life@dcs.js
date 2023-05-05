// import React, { useEffect } from "react";
// import ScrollOut from "scroll-out";
// import './Life@dcs.css'
// export default function Life() {
//   useEffect(() => {
//     console.clear();

//     ScrollOut({
//       cssProps: {
//         visibleY: true,
//         viewportY: true,
//         scrollPercentY: true,
//       },
//       threshold: 0.2,
//     });
//   }, []);

//   return (
// <div class="scrollHalf" id="life">
//   <h1 className="lifeee">Life@DCS</h1>

//   <div class="scrollHalf__grupo" data-scroll>
//     <div class="scrollHalf__grupo__contenido">
//       <h1>Diamatics fosters a glad and Open culture where every individual is respected and cared for. </h1>      
//       <p>We truly believe in life beyond work and our diverse, global workforce is empowered through
//          flexible working hours, optional holiday benefits, perks and employee assistance programs. </p>
//     </div>
//     <div class="scrollHalf__grupo__imagen">
//       <img src="../bg3.jpg" />
//     </div>
//   </div>
  
//   <div class="scrollHalf__grupo" data-scroll>
//     <div class="scrollHalf__grupo__contenido">
//       <h1>Recognition, Appreciation and Token of Gratitude.</h1>
//       <p>We truly believe in life beyond work and our diverse, global workforce is empowered through flexible working hours, optional holiday benefits, perks and employee assistance programs. </p>
//     </div>
//     <div class="scrollHalf__grupo__imagen">
//       <img src="../bg2.jpg" />
//     </div>
//   </div>
  
//   <div class="scrollHalf__grupo" data-scroll>
//     <div class="scrollHalf__grupo__contenido">
//       <h1>All of us don’t have Equal Talents,Yet all of us have a Equal Opportunity to Develop our Talents- Ratan TATA</h1>
//      <p> We truly believe in life beyond work and our diverse, global workforce is empowered through flexible working hours, optional holiday benefits, perks and employee assistance programs. </p>
//     </div>
//     <div class="scrollHalf__grupo__imagen">
//       <img src="../bg1.webp" />
//     </div>
//   </div> 
  
// </div>
//   );
// }






























import React, { useState ,useCallback,useEffect} from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";//npm i react-icons
import communityDetails from './Life.json';
import "./Life@dcs.css";


export default function Life() {   
    
    
    const[sliderImgIndex,setSliderImgIndex]=useState(0)
    const autoPlay = useCallback(()=>{
        sliderImgIndex===communityDetails.Life.length-1?
                setSliderImgIndex(0):setSliderImgIndex(sliderImgIndex+1)
            },[sliderImgIndex])
    useEffect(()=>{        
       const interval=setTimeout(()=>{
                  autoPlay()
        },5000)
        return()=>clearTimeout(interval)
    },[sliderImgIndex,autoPlay])
    
           
    function Prev(){
        sliderImgIndex===0?
           setSliderImgIndex(communityDetails.Life.length-1)
      :
           setSliderImgIndex(sliderImgIndex-1)
        
   }
   function Next(){
               sliderImgIndex===communityDetails.Life.length-1?
                   setSliderImgIndex(0)
               :
                   setSliderImgIndex(sliderImgIndex+1)
               
   }

  
    const ongoingurl1= communityDetails.Life.map((data,i)=>data.status1);
    console.log(ongoingurl1)
    return(
        <>
        <h1 className="lifee" id="life">Life@DCS</h1>
    {communityDetails.Life.map((data,index)=>{
        return (
        <>    
        <div className="firsthalfcontainer">
             <div key={index} className={index===sliderImgIndex?"sliderimages":"sliderimagesnone"}>       
                     <img className="sliderimg" src={data.sliderImg}  alt={data.name} 
                   />

                     <div className="arrowcontainer">
                        <div  onClick={Prev}> <SlArrowUp size={"30px"} /> </div>
                        <div  onClick={Next}> <SlArrowDown size={"30px"} /> </div>
                    </div>
                              
                     <div className="communame">{data.name}</div>
                     <div className="descriptioncontent">{data.mainDescr}</div>

               
            </div>
            </div>
        </>
    )})}
    </>)
    }

















