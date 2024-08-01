import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import profileDp from '../assests/jpgs/profileDp.jpg'

const NavBar = () => {
  return (
    <div className='w-full flex h-14'>
        <div className='w-[7%] h-full '><img ></img></div>
        <div className='w-[98%] flex bg-richblack-700 items-center justify-between'>
            <div className='flex bg-richblack-500 h-8 items-center my-auto rounded-md gap-2'>
                <CiSearch className='text-white my-2  text-2xl ml-2'/>
                <input className='bg-transparent py-2 outline-none text-richblack-200' placeholder='Search'></input>
            </div>
            <div className='flex items-center gap-6 mr-3'>
            <ul className='flex gap-3 ' >
                <li className='bg-richblack-500 py-1 px-1 rounded-full'><CiMail className='text-white text-xl' /></li>   
                <li className='bg-richblack-500 py-1 px-1 rounded-full'><IoSettingsOutline className='text-white text-xl' /></li>
                <li className='bg-richblack-500 py-1 px-1 rounded-full relative'>
                <IoIosNotificationsOutline className='text-white text-xl' />
                <div className='w-[10px] h-[10px] bg-blue-100 absolute z-10 rounded-full top-1 right-1'></div>
                </li>
            </ul>
            <div>
                <img src={profileDp} className='w-8 h-8 rounded-full'></img>
            </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar