import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {(
        setNav(!nav)
    )}
  return (
    <div className='top-0 flex justify-between items-center mx-auto px-4 h-[80px] max-w-[1240px] text-white'>
    <h1 className='w-full font-bold text-3xl text-[#00fd9a]'>React</h1>
    <ul className='hidden sm:flex'>
        <li className='mx-4 hover:text-green-500 cursor-pointer'>Home</li>
        <li className='mx-4 hover:text-green-500 cursor-pointer'>Company</li>
        <li className='mx-4 hover:text-green-500 cursor-pointer'>Resources</li>
        <li className='mx-4 hover:text-green-500 cursor-pointer'>About</li>
        <li className='mx-4 hover:text-green-500 cursor-pointer'>Contact</li>
    </ul>
    <div onClick={handleNav} className='block sm:hidden'>
        {!nav ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
    </div>
    <div className={!nav ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-600 bg-black ease-in-out duration-150 sm:hidden" : "fixed left-[-100%] ease-out duration-150"}>
        <ul className='p-4 uppercase'>
        <li className='p-4 border-b border-gray-600 hover:text-green-500 cursor-pointer'>Home</li>
        <li className='p-4 border-b border-gray-600 hover:text-green-500 cursor-pointer'>Resources</li>
        <li className='p-4 border-b border-gray-600 hover:text-green-500 cursor-pointer'>Company</li>
        <li className='p-4 border-b border-gray-600 hover:text-green-500 cursor-pointer'>About</li>
        <li className='p-4 border-b border-gray-600 hover:text-green-500 cursor-pointer'>Contact</li>
        </ul>
    </div>
    </div>
    
  )
}

export default Navbar