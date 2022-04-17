import React from 'react';
import bannerimg from "../../assets/images/bannerImage.jpg";
import "./banner.css";
const Banner = () => {
    return (
        <div>
            <div className='mainDiv min-h-fit lg:min-h-screen w-100 block md:grid md:grid-cols-1 lg:grid-cols-2 justify-center items-center' style={{ backgroundImage: `url(${bannerimg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundPositionX: "right" }}>
                <div className='order-2 lg:order-1 md:pb-16 lg:pb-0'>
                    <h1 className='text-5xl md:text-7xl p-6 md:p-11 font-bold text-slate-100 backdrop-contrast-50'>Proper Fitness is key to<span className='text-blue-900'>Healthy living</span></h1>
                    <p className='text-2xl pb-8 px-6 md:px-11 text-white backdrop-contrast-50'>​That's why my mission is to help people enjoy life to its fullest by supervising and creating expertly designed fitness programs. I value an individuals need to improve their quality of life​.</p>
                </div>
                <div className='hidden order-1 lg:order-2 md:block'>
                    <div className='min-h-[400px] w-full'></div>
                </div>
            </div>

        </div >
    );
};

export default Banner;