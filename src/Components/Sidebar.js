import React from 'react'
import { BsPlusSquare } from "react-icons/bs";
import { ImMobile } from "react-icons/im";

function Sidebar() {
  return (
    <>
      <div className='text-slate-500 absolute top-24'>
        <div className='ml-20 text-sm '>
          <div className='my-5'>Home</div>
          <div className='my-5'>Message</div>
          <div className='my-5'>Task</div>
          <div className='my-5'>Member</div>
          <div className='my-5'>Setting</div>
        </div>
        <hr className='mx-2 w-56' />
        <div className='flex'>
          <span className='my-4 mx-8 text-sm'>MY PROJECTS</span><span className='my-4 mx-12 hover:text-purple-600'> <BsPlusSquare /></span>
        </div>
        <div className=' text-sm'>
          <div className=' font-bold my-4 mx-6 text-slate-800 bg-purple-100 w-52 p-1 '>
            <div className='flex gap-14 h-8 p-1 pl-10'>Mobile App <ImMobile className='text-lg' /></div>
          </div>
          <div className='ml-20 my-4'>Website Redesign</div>
          <div className='ml-20 my-4'>Design System</div>
          <div className='ml-20 my-4'>Wireframes</div>
        </div>
      </div>
    </>
  )
}

export default Sidebar