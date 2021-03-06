import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service, handleServicePurchase }) => {
    const { id, name, description, price, img } = service;
    const navigate = useNavigate();
    return (
        <div className='border-2'>
            <img className='' src={img} alt="" />
            <div className='p-8'>
                <p className='text-3xl font-bold text-blue-900'>{name}</p>
                <p className='text-lg py-2 font-semibold'>$ {price}<span className='text-sm text-gray-500'> /month</span></p>
                <p className='text-md font-medium min-h-[80px]'>{description}</p>
                <button onClick={() => {
                    handleServicePurchase(id);
                    navigate("/checkout")
                }} className='w-full mt-3 px-4 py-2 bg-blue-900 text-white rounded-full'>
                    <p>Purchase Now</p>
                </button>
            </div>
        </div>
    );
};

export default Service;