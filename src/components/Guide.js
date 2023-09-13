import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GuideCard from "./GuideCard";

const Guide = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-purple text-center mb-5" data-aos="zoom-in-up">
          Motorcycle Touring Guide
        </h1>
        <div
          className="row"
          
        >
          <GuideCard
            src="https://adityabhardwaj03.github.io/BikersPlanet/images/hotel.png"
            title="Affordable Hotels"
            para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem distinctio quibusdam eum? Expedita, tenetur nostrum."
          />
          <GuideCard
            src="https://adityabhardwaj03.github.io/BikersPlanet/images/fork.png"
            title="Food and Drinks"
            para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem distinctio quibusdam eum? Expedita, tenetur nostrum."
          />
          <GuideCard
            src="https://adityabhardwaj03.github.io/BikersPlanet/images/hiking.png"
            title="Adventures"
            para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem distinctio quibusdam eum? Expedita, tenetur nostrum."
          />
        </div>
      </div>
    </>
  );
};

export default Guide;
