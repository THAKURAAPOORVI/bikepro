import React from "react";

const GuideCard = (props) => {
  return (
    <>
      <div className="col-xl-4 mb-5" >
        <div className="card text-center border-0">
          <img src={props.src} className="card-img-top w-25 mx-auto" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.para}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideCard;
