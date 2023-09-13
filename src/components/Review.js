import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReviewCard from './ReviewCard';

const Review = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <>
            <div className='container mt-2'>
                <h1 className='text-purple text-center mb-5' data-aos="zoom-in-up">REVIEW</h1>
                <div className='row'>
                    <ReviewCard
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    title="Maria Smantha"
                    subtitle="Tour Guide"/>
                    <ReviewCard
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    title="Lisa Cudrow"
                    subtitle="Women Rider"/>
                    <ReviewCard
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                    title="John Smith"
                    subtitle="Marketing Specialist"/>
                </div>
            </div>
           
        </>
    )
}

export default Review;