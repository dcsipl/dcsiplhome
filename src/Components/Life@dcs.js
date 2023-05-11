import React, { useState, useCallback, useEffect } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl"; //npm i react-icons
import communityDetails from "./Life.json";
import "./Life@dcs.css";

export default function Life() {
  const [sliderImgIndex, setSliderImgIndex] = useState(0);
  const autoPlay = useCallback(() => {
    sliderImgIndex === communityDetails.Life.length - 1
      ? setSliderImgIndex(0)
      : setSliderImgIndex(sliderImgIndex + 1);
  }, [sliderImgIndex]);
  useEffect(() => {
    const interval = setTimeout(() => {
      autoPlay();
    }, 5000);
    return () => clearTimeout(interval);
  }, [sliderImgIndex, autoPlay]);

  function Prev() {
    sliderImgIndex === 0
      ? setSliderImgIndex(communityDetails.Life.length - 1)
      : setSliderImgIndex(sliderImgIndex - 1);
  }
  function Next() {
    sliderImgIndex === communityDetails.Life.length - 1
      ? setSliderImgIndex(0)
      : setSliderImgIndex(sliderImgIndex + 1);
  }

  const ongoingurl1 = communityDetails.Life.map((data, i) => data.status1);
  console.log(ongoingurl1);
  return (
    <>
      <h1 className="lifee" id="life">
        Life@DCS
      </h1>
      {communityDetails.Life.map((data, index) => {
        return (
          <>
            <div className="firsthalfcontainer">
              <div
                key={index}
                className={
                  index === sliderImgIndex ? "sliderimages" : "sliderimagesnone"
                }
              >
                <img
                  className="sliderimg"
                  src={data.sliderImg}
                  alt={data.name}
                />

                <div className="arrowcontainer">
                  <div onClick={Prev}>
                    {" "}
                    <SlArrowUp size={"30px"} />{" "}
                  </div>
                  <div onClick={Next}>
                    {" "}
                    <SlArrowDown size={"30px"} />{" "}
                  </div>
                </div>

                <div className="communame">{data.name}</div>
                <div className="descriptioncontent">{data.mainDescr}</div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
