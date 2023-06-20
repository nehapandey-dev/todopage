import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import { CiFilter } from "react-icons/ci";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrEdit } from "react-icons/gr";
import { FiLink2 } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import DragDrop from './DragDrop';


function Body() {
  return (
    <>
      <div className='ml-72 mt-10'>
        <div >
          <div className='flex gap-4'>

            <h1 className='text-4xl'>Mobile App</h1>
            <GrEdit className='text-xl mt-3' />
            <FiLink2 className='text-xl mt-3' />
          </div>
          <div className='flex mt-8 justify-between'>
            <div className='flex gap-2  '>
              <div className='flex gap-2 border border-gray-400 w-20 h-7 rounded-md p-1'>
                <CiFilter /><span className='text-xs text-slate-500'>Filter</span><SlArrowDown className='text-xs my-1' />
              </div>
              <div>
                <div className='flex gap-2 border border-gray-400 w-20 h-7 rounded-md p-1'>
                  <AiOutlineCalendar /><span className='text-xs text-slate-500'>Today</span><SlArrowDown />
                </div>
              </div>
            </div>
            <div className='flex mr-10'>
              <div className='flex gap-2 border border-gray-400 w-20 h-7 rounded-md p-1'>
                <FiUsers /><span className='text-xs text-slate-500'>Share</span>
              </div>
              <div className='flex gap-2 text-2xl'>
                <RxDividerVertical /><GiHamburgerMenu /><TbGridDots />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DragDrop/>
    </>
  )
}

export default Body
