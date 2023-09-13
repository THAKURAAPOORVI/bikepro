import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";


const Explore = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    
      <div className="container">
        <h1 className="text-purple text-center my-5" data-aos="zoom-in">
          Explore Hidden Places Around India
        </h1>
        <div className="row text-center">
        {/* <Routes>
          <Card src="https://www.chandigarhsmartcity.in/documents/34592/53554/6nw.jpg/74f5482f-4db2-775d-eb24-6b319b96c8e2?t=1581086054753"
            alternate="Chandigarh Image"
            title="CHANDIGARH"
            para="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Join Club"
            <Route/>
            link="/Shimla"/>
        </Routes> */}
          <Card
            src="https://www.chandigarhsmartcity.in/documents/34592/53554/6nw.jpg/74f5482f-4db2-775d-eb24-6b319b96c8e2?t=1581086054753"
            alternate="Chandigarh Image"
            title="CHANDIGARH"
            para="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Join Club"
            link="Chandigarh"
          />
          <Card
            src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/12/pti28-12-2020-000048b-1609160104.jpg"
            alternate="Shimla Image"
            title="SHIMLA"
            para="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Join Club"
            link="Shimla"
          />
          <Card
            src="https://hikerwolf.com/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-02-at-7.18.33-PM-1046x800.jpeg"
            alternate="Manali Image"
            title="MANALI"
            para="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Join Club"
            link="Manali"
          />
          <Card
            src="https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg"
            alternate="Mumbai Image"
            title="MUMBAI"
            para="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Join Club"
            link="Shimla"
          />
          <Card
            src="https://www.team-bhp.com/forum/attachments/4x4-excursions/1903660d1565326394-2019-rain-forest-challenge-rfc-goa-img20190808wa0112.jpg"
            alternate="Goa Image"
            title="RFC GOA"
            para="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Join Club"
            link="Shimla"
          />
          <Card
            src="https://static.toiimg.com/photo/54559212.cms"
            alternate="Banglore Image"
            title="BANGLORE"
            para="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Join Club"
            link="Shimla"
          />
        </div>
      </div>
    </>
  );
};

export default Explore;
