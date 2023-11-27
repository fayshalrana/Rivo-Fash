import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { HiShieldCheck } from "react-icons/hi";
import { TiLink } from "react-icons/ti";
import { TbMoneybag } from "react-icons/tb";
const Benifite = () => {
  return (
   <div className="py-10">
    <div className="container">
     <div className='grid grid-cols-3 gap-5'>
      <div className="flex flex-col ga-5 row-span-2 justify-center items-center p-10 rounded-md bg-slate-200">
        <CiDeliveryTruck className='text-6xl text-purple-700'></CiDeliveryTruck>
        <h2 className='text-xl font-bold'>Supper fast and free dalivery</h2></div>
      <div className="flex gap-4 justify-center items-center p-10 rounded-md bg-slate-200">
        <HiShieldCheck className='text-5xl text-purple-700'></HiShieldCheck>
        <h2 className='text-xl font-bold'>Non-contact Shipping</h2></div>
      <div className="flex row-span-2 justify-center items-center p-4 rounded-md bg-slate-200">
        <TiLink className='text-5xl text-purple-700'></TiLink>
        <h2 className='text-xl font-bold'>Super secure payment system</h2></div>
      <div className="flex  justify-center items-center p-10 rounded-md bg-slate-200">
      <TbMoneybag className='text-5xl text-purple-700'></TbMoneybag>
      <h2 className='text-xl font-bold'>Money back Guranteed</h2></div>
   </div>
   </div>
   </div>
  )
}

export default Benifite
