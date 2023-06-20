import React from 'react'
import { GoComment } from "react-icons/go";
import { SlBell } from "react-icons/sl";
import { FiCalendar } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Search from './Search';
import Body from "./Body"


function Header() {
    return (
        <>
            <div className='flex justify-around mt-5'>
               <div className='absolute w-6 h-6 '></div>
                  <div className='absolute bg-purple-800 w-3 h-3 top-5 left-8 rounded-full'></div>
                  <div className='absolute w-3 h-3 top-7 left-7 rounded-full bg-purple-400'></div>
                  <div className='absolute w-3 h-3 top-7 left-10 rounded-full bg-purple-400'></div>
                <div className='flex my-2 mx-6'>Profile M. 
                <span className='ml-16 text-xl text-slate-500 hover:text-purple-600'><MdKeyboardDoubleArrowLeft/></span>
                </div>
                <div className='absolute h-full border-2 border-stone-300 left-60'></div>
                <div><Search /></div>
                <div className='flex gap-6 mt-2'>
                    <FiCalendar className='text-xl'/>
                    <GoComment className='text-xl'/>
                    <SlBell className='text-xl'/>
                    <span className='w-2 h-2 rounded-full bg-amber-700 relative right-8'></span>
                </div>
                <div className='flex gap-6'> 
                    <span className='text-slate-700 text-sm'>Anima Aggarwal <br /><span className='text-slate-400'>UP, India</span></span>
                    <FaRegUserCircle className='text-3xl'/>
                    <SlArrowDown className='mt-2'/>
                </div>
                
            </div>
            <hr className='my-4'/>
            <Body/>
        </>
    )
}

export default Header