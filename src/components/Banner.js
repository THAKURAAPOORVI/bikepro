import React from "react";

const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide w-100"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active rounded-circle pt-3 pb-2 bg-white"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            className=" rounded-circle pt-3 pb-2 bg-white"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
            className=" rounded-circle pt-3 pb-2 bg-white"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={3}
            className=" rounded-circle pt-3 pb-2 bg-white"
            aria-label="Slide 4"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://adityabhardwaj03.github.io/BikersPlanet/images/biker2.jpg" className="d-block w-100" style={{height:"350px"}} alt="..." />
            <div className="carousel-caption d-none d-md-block mb-5">
              <span className="bg-dark mx-auto py-1 px-3 fs-5 fw-semibold">The road never ends, only our vision does.</span>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://adityabhardwaj03.github.io/BikersPlanet/images/biker1.jpg" className="d-block w-100" style={{height:"350px"}} alt="..." />
            <div className="carousel-caption d-none d-md-block mb-5">
              <span className="bg-dark mx-auto py-1 px-3 fs-5 fw-semibold">Riding a bike is like an art, something you do because you feel something inside.</span>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://adityabhardwaj03.github.io/BikersPlanet/images/biker3.jpg" className="d-block w-100" style={{height:"350px"}} alt="..." />
            <div className="carousel-caption d-none d-md-block mb-5">
              <span className="bg-dark mx-auto py-1 px-3 fs-5 fw-semibold">The road listens. It believes in you.</span>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://adityabhardwaj03.github.io/BikersPlanet/images/biker4.jpg" className="d-block w-100" style={{height:"350px"}} alt="..." />
            <div className="carousel-caption d-none d-md-block mb-5">
              <span className="bg-dark mx-auto py-1 px-3 fs-5 fw-semibold">It’s like a first date without the awkward silence.</span>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
