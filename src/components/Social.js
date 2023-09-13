import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Social = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="social-bg py-5">
        <div className="container">
          <ul className="list-inline text-center" data-aos="zoom-in">
            <li className="list-inline-item border rounded border-primary p-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968841.png"
                height="30px"
                style={{cursor:"pointer"}}
              />
            </li>
            <li className="list-inline-item border rounded border-primary p-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                height="30px"
                style={{cursor:"pointer"}}
              />
            </li>
            <li className="list-inline-item border rounded border-primary p-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                height="30px"
                style={{cursor:"pointer"}}
              />
            </li>
            <li className="list-inline-item border rounded border-primary p-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                height="30px"
                style={{cursor:"pointer"}}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Social;
