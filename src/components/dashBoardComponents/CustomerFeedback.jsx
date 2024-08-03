import React from 'react'
import { FaStar } from "react-icons/fa";
const {RecentOrdersDetails,comments} = require('../../dataDashBoard/recentOrderDetails')

const CustomerFeedback = () => {
    var array = ["","","","",""]
  return (
    <div className='md:w-[35%] w-full bg-richblack-800 rounded-md h-full'>
        <h1 className='text-white text-xl font-medium py-2 px-2'>Customer's Feedback</h1>
        <div className=' md:h-80 h-full md:block flex  w-full  md:overflow-y-auto overflow-x-auto '>
            {
                RecentOrdersDetails.map((data,index)=>
                <>
                <div className='px-2 py-4'>
                    <p className=' flex md:flex-row flex-col   items-center text-white'><img className="rounded-full w-7 mx-1 " src={`https://randomuser.me/api/portraits/thumb/men/5${index}.jpg`} alt="img"></img><span className='px-2 text-center'>{data.name}</span></p>
                    <div className='flex  mt-2 gap-1'>
                    {
                        array.map((data,index)=> <FaStar className={`${index==4 ? 'text-white' : 'text-brown-300'}`}/>)
                    }
                    </div>
                    <p className='text-richblack-500 py-2 text-sm'>{comments[index]}</p>
                </div>
                <div className='md:h-[2px] h-full md:w-[95%] w-[5%] bg-richblack-500 mx-auto'></div>
                </>
                )
            }
        </div>
    </div>
  )
}

export default CustomerFeedback