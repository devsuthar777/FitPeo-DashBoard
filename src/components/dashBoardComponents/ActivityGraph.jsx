import React from 'react'
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
const ActivityGraph = () => {
  return (
    <div className='w-[65%] bg-richblack-800 h-60 rounded-md px-4 py-2'>
        <div className='w-full flex justify-between'>
            <p className='text-xl font-semibold text-white'>Activity</p>
            <p className='bg-richblack-600 hover:cursor-pointer shadow-sm rounded-xl text-black text-sm text-center px-3 py-1 flex items-center'>
                <span className='text-sm font-semibold text-white'>Weekly</span> 
                <MdArrowDropDown className='text-xl text-white'/>
            </p>
        </div>
    </div>
  )
}

export default ActivityGraph