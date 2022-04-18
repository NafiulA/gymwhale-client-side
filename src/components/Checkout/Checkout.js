import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ServiceDataContext } from '../../hooks/ServiceDataContext';

const Checkout = () => {
    const { selectedService } = useContext(ServiceDataContext)
    const { name, description, img, price } = selectedService;
    const navigate = useNavigate();
    const handleCheckout = (e) => {
        e.preventDefault();
        toast.success("Thank you for your purchase!", { id: "purchase" });
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.address.value = '';
        e.target.phone.value = '';
    }
    return (
        <div className='my-6 min-h-[700px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-4'>
                <div className='w-3/4 mx-auto order-2 lg:order-1'>
                    <h3 className='text-2xl font-semibold text-center py-4'>Checkout Form</h3>
                    <form onSubmit={handleCheckout}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Full Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='name' id="name" type="text" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email (optional)
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='email' id="email" type="text" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" name='address' required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                Phone Number
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" name='phone' required />
                        </div>
                        <input disabled={name ? false : true} className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit">
                        </input>
                    </form>
                </div>
                <div className='order-1 lg:order-2'>
                    <div className={`${name ? "block" : "hidden"}`}>
                        <img className='w-1/2 mx-auto' src={img} alt="" />
                        <p className='text-3xl py-2 text-center font-bold'>{name}</p>
                        <p className='text-xl font-semibold text-center'>Price: $ {price}/month</p>
                        <p className='text-center text-lg font-semibold'>Description: {description}</p>
                    </div>

                    <div className={`${name ? "hidden" : "block"} w-2/3 mx-auto`}>
                        <p className='text-3xl py-2'>Please Purchase a service to checkout</p>
                        <button className='py-2 px-4 bg-blue-800 rounded-lg hover:bg-blue-700' onClick={() => navigate("/services")}>Go to Services</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;