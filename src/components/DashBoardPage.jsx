import React from 'react'
import OrderStatics from './dashBoardComponents/OrderStatics'
import NetProfit from './dashBoardComponents/NetProfit'

const DashBoardPage = () => {
  return (
    <div className='w-[92%] h-full mx-auto mt-2'>
        <h1 className='font-bold text-white text-2xl py-2'>Dashbord</h1>
        <div className='flex gap-5 w-full'>
            <OrderStatics></OrderStatics>
            <NetProfit></NetProfit>
        </div>
    </div>
  )
}

export default DashBoardPage