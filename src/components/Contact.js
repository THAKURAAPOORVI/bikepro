import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="text-purple text-center my-5" data-aos="fade-left">
          RIDE WITH US
        </h1>
        <div className="row">
          <div className="col-xl-6 text-center">
            <img
              src="https://adityabhardwaj03.github.io/BikersPlanet/images/midbike.png"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="w-75"
            />
          </div>
          <div className="col-xl-6">
            <form>
              <div className="mb-3">
                <div className="row">
                  <div className="col-xl">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-xl">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number (*)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="+91"
                />
              </div>
              <hr />
              <h4 className="">Vehicle mode</h4>
              <div className="mb-3 form-check">
                <input type="radio" className="form-check-input" />
                <label className="form-check-label">Motor-Bike</label>
                <br />
                <input type="radio" className="form-check-input" />
                <label className="form-check-label">Car</label>
              </div>
              <hr />
              <button
                type="submit"
                className="bg-purple text-white border-0 rounded w-100 py-2"
              >
                Ride Together
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
