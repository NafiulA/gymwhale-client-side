import React from 'react';
import notFound from "../../assets/images/NotFound.svg";

const NotFound = () => {
    return (
        <div className='min-h-fit lg:min-h-[700px]'>
            <img className='w-full lg:w-1/2 mx-auto' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;