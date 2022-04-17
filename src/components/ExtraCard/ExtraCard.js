import React from 'react';

const ExtraCard = ({ additional }) => {
    const { name, description, img } = additional;
    return (
        <div className='text-center p-4 shadow-lg'>
            <img className='mx-auto' src={img} alt="" />
            <p className='text-xl font-medium py-2'>{name}</p>
            <p className='text-lg pb-2'>{description}</p>
        </div>
    );
};

export default ExtraCard;