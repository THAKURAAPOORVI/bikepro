import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WallCard from './WallCard';

const Wall = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <>
            <div className='container'>
                <h1 className='text-center text-purple mt-1' data-aos="zoom-in-up">Wall of Adventures</h1>
                <div className='row pt-5 mx-5 mx-auto '>
                    <WallCard
                    src="https://i.ytimg.com/vi/Q7lXjuM3P6k/maxresdefault.jpg"
                    title="Bike Offroading"/>
                    <WallCard
                    src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/12/03/Pictures/chandigarh-chandigarh-hindustan-festival-motorbike-military-literature_a3fa7ca0-d850-11e7-8802-68a15924f886.jpg"
                    title="Adventures"/>
                    <WallCard
                    src="https://koa.com/blog/images/The-Essential-Motorcycle-Camping-Guide.jpg?preset=blogPhoto"
                    title="Camping"/>
                </div>
            </div>
        </>
    )
}

export default Wall;