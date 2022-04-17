import React from 'react';
import bannerimg from "../../assets/images/bannerImage.jpg";
const Banner = () => {
    return (
        <div>
            <div className='min-h-full lg:min-h-screen w-100 ' style={{ backgroundImage: `url(${bannerimg})`, backgroundSize: "cover" }}>
            </div>

        </div >
    );
};

export default Banner;