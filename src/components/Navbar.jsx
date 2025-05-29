import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import { FaGamepad, FaShop } from 'react-icons/fa6';
import { RiGroup2Line } from 'react-icons/ri';
import { FaFacebookMessenger } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { IoMenuOutline } from "react-icons/io5";
const Navbar = ({click}) => {
    const handleToggle=()=>{
        click(value=>!value)
    }
    return (
        <div className='fixed w-full flex flex-col lg:flex-row justify-between items-center p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500'>
                <h1 className="hidden lg:block text-primary font-bold text-2xl">Social <span className="text-green">Platform</span></h1>
            <div className="lg:hidden flex justify-between items-center font-bold w-full border-b-2 pb-2 mb-2" >
            <IoMenuOutline onClick={handleToggle} className='text-3xl lg:text-3xl font-bold text-green' />
                <h1 className=" text-fuchsia-500">Social <span className="text-green">Platform</span></h1>
                <div className=" flex justify-between items-center lg:px-8 space-x-4 lg:space-x-8">
            <FaFacebookMessenger  className='text-3xl lg:text-3xl  rounded-full '  />
            <Link to='/registration'><CgProfile className='text-3xl lg:text-3xl rounded-full '/></Link>
            </div>
            </div>
            <div className="flex justify-between lg:justify-around w-full lg:w-3/6 space-x-6">
                <Link to="/"><FaHome className='text-3xl lg:text-3xl text-white'/></Link>
                <Link to="/videos"><MdOndemandVideo className='text-3xl lg:text-3xl text-white'/></Link>
                <Link to="/marketplace"><FaShop className='text-3xl lg:text-3xl text-white' /></Link>
                <Link to="/groups"><RiGroup2Line className='text-3xl lg:text-3xl text-white'/></Link>
                <Link to="/games"><FaGamepad className='text-3xl lg:text-3xl text-white'/></Link>
            </div>
            <div className="hidden lg:block lg:flex lg:justify-between lg:items-center lg:px-8 space-x-4 lg:space-x-8">
            <FaFacebookMessenger  className='text-3xl lg:text-3xl rounded-full '  />
            <Link to='/registration'><CgProfile className='text-3xl rounded-full lg:cursor-pointer'/></Link>
            </div>
        </div>
    );
};

export default Navbar;