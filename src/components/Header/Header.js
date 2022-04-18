import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);
    return (
        <div className='sticky top-0 z-50'>
            <nav className="border-gray-200 px-2 py-2.5 bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">GymWhale</span>
                    </Link>
                    <div onClick={() => setOpen(!open)} className='w-8 ml-auto py-2 text-white md:hidden'>
                        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                    </div>
                    <div className={`absolute ${open ? 'top-14 right-0 left-0' : 'top-[-300px] right-0 left-0'} duration-200 ease-linear bg-gray-800 overflow-hidden w-full z-50 md:w-auto md:static`} id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <CustomLink to="/">Home</CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/services">Services</CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/about">About</CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/blogs">Blogs</CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/contact">Contact</CustomLink>
                            </li>
                            {user ?
                                <li>
                                    <button className={"block text-white font-semibold py-2 pr-3 pl-3 border-b-2 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"} onClick={() => { signOut(auth) }}>Logout</button>
                                </li>
                                :
                                <li>
                                    <CustomLink to="/login">Login</CustomLink>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;