import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFacebook, faTwitter, faYoutube, faBilibili } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <div className='bg-gray-800'>
            <div className='w-5/6 md:w-3/4 mx-auto py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <p className='text-3xl text-white'>GymWhale</p>
                    <div className='py-6'>
                        <FontAwesomeIcon className='pr-6 text-white' icon={faFacebook}></FontAwesomeIcon>
                        <FontAwesomeIcon className='pr-6 text-white' icon={faTwitter}></FontAwesomeIcon>
                        <FontAwesomeIcon className='pr-6 text-white' icon={faYoutube}></FontAwesomeIcon>
                        <FontAwesomeIcon className='pr-6 text-white' icon={faBilibili}></FontAwesomeIcon>
                    </div>
                </div>
                <div>
                    <p className='text-xl text-white py-4'>Services</p>
                    <div className='text-white'>
                        <p className='pb-2'>1-on-1 Training</p>
                        <p className='pb-2'>Online Training</p>
                        <p className='pb-2'>Corporate Session</p>
                    </div>
                </div>
                <div>
                    <p className='text-xl text-white py-4'>Account and Privacy</p>
                    <div className='text-white'>
                        <p className='pb-2'>Log In</p>
                        <p className='pb-2'>Terms and Conditions</p>
                        <p className='pb-2'>Privacy Policy</p>
                    </div>
                </div>
                <div>
                    <p className='text-xl text-white py-4'>Address</p>
                    <div className='text-white'>
                        <p className='pb-2'>4233 Florentine Dr.</p>
                        <p className='pb-2'>Longmont</p>
                        <p className='pb-2'>​CO 80503</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center py-4 text-gray-400'>Copyright &copy; GymWhale-{currentYear}</p>
            </div>
        </div>
    );
};

export default Footer;