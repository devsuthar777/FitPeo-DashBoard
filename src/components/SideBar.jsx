import React from 'react'
import { IoMdHome } from "react-icons/io";
import { BsFileBarGraph } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
const SideBar = () => {
  return (
    <div className='md:w-[5%] w-full bg-richblack-700 md:border-none border border-t-richblack-400 '>
    <ul className='w-full flex md:flex-col flex-row gap-5 my-5 h-full  '>
     <li className='w-full flex md:flex-row flex-col-reverse  h-8  items-center hover:cursor-pointer'><div className='bg-blue-200 md:h-full h-1 md:w-1 w-[90%]  rounded-md translate-y-3 md:translate-y-0 '></div><IoMdHome  className='text-blue-200 text-2xl mx-auto '/></li>
     <li className='w-full flex h-8  items-center hover:cursor-pointer'><div className='bg-transparent h-full w-1'></div><BsFileBarGraph  className='text-richblack-400 text-2xl mx-auto'/></li>
     <li className='w-full flex h-8  items-center hover:cursor-pointer'><div className='bg-transparent h-full w-1'></div><BiTask  className='text-richblack-400 text-2xl mx-auto'/></li>
     <li className='w-full flex h-8  items-center hover:cursor-pointer'><div className='bg-transparent h-full w-1'></div><CiWallet  className='text-richblack-400 text-2xl mx-auto'/></li>
     <li className='w-full flex h-8  items-center hover:cursor-pointer'><div className='bg-transparent h-full w-1'></div><IoBagCheckOutline  className='text-richblack-400 text-2xl mx-auto'/></li>
    </ul>
    </div>
  )
}

export default SideBar