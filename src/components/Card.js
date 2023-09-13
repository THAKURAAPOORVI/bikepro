import React from "react";
import { Link, Outlet } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-xl-4 col-lg-6 col-md-6 mx-auto mb-4">
        <div className="card border rounded explore-shadow">
          <img
            src={props.src}
            className="card-img-top rounded"
            alt={props.alternate}
            height="300px"
          />
          <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-title"></h5>
            <p className="card-text">{props.para}</p>
            <nav>
              <Link to={{pathname:`${props.link}` }} className="bg-purple text-white px-3 py-2 text-decoration-none rounded">{props.btn}</Link>
            </nav>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
