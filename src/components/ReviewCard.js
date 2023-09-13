import React from "react";

const ReviewCard = (props) => {
  return (
    <>
      <div className="col-xl-4 mb-4">
        <div className="card border-0 text-center">
          <img src={props.src} className="card-img-top w-50 rounded-circle mx-auto" alt="..." />
          <div className="card-body">
            <h3 className="card-title text-purple">{props.title}</h3>
            <h6 className="text-primary">{props.subtitle}</h6>
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
