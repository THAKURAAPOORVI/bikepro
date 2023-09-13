import React from "react";

const WallCard = (props) => {
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6 mb-4 ">
        <div className="bg-white box-shadow1 pb-1 mb-4 wall-text card-one">
          <div className="mx-4 mt-2 mb-4">
            <img
              src={props.src}
              alt="aa"
              height="207px"
              className="w-100 wallcard"
            />
          </div>
          <div className="content">
            <h3 className="text-purple text-center">{props.title}</h3>
            <p className="px-5" style={{textAlign:"justify"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eget velit tristique, sollicitudin leo viverra,
              suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi
              in leo in eros commodo volutpat ac sed dolor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WallCard;
