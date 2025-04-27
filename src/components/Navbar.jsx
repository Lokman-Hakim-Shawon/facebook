import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import { FaGamepad, FaShop } from 'react-icons/fa6';
import { RiGroup2Line } from 'react-icons/ri';
import { FaFacebookMessenger } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
// import {Navbar} from './Navbar.css'
import './NabBar.css'
const Navbar = () => {
    return (
        <div className='fixed w-full flex justify-between items-center p-2 bg-white border-2 border-slate-300'>
            <div className="hidden lg:block"><FaFacebook className=' text-blue-500 lg:text-5xl' /></div>
            <div className="flex justify-between lg:justify-around w-4/6 lg:space-x-6 lg:w-3/6">
                <Link to="/"><FaHome className='text-3xl lg:text-3xl text-blue-500'/></Link>
                <Link to="videos"><MdOndemandVideo className='text-3xl lg:text-3xl text-blue-600'/></Link>
                <Link to="shopping"><FaShop className='text-3xl lg:text-3xl text-blue-600' /></Link>
                <Link to="groups"><RiGroup2Line className='text-3xl lg:text-3xl text-blue-600'/></Link>
                <Link to="gaming"><FaGamepad className='text-3xl lg:text-3xl text-blue-600'/></Link>
            </div>
            <div className="flex justify-between items-center lg:px-8 space-x-4 lg:space-x-8">
            <FaFacebookMessenger  className='text-3xl lg:text-3xl bg-orange-700 rounded-full text-blue-600'  />
            <CgProfile className='text-3xl lg:text-3xl rounded-full text-blue-700'/>
            </div>
        </div>
    );
};

export default Navbar;