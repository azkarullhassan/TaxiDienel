import React from 'react'

const Footer = () => {
  return (
    <section className='w-full md:pt-28 '
     
    >

    <main className=' mx-auto   gap-5 bg-[#181443] px-4 p-6 py-[30px]'>
      {/* contentv div */}
     <div className='flex flex-row justify-between pl-28'>
        <div>
            <h1 className='font-semibold text-[30px] text-white'> TaxiDaneil</h1>
            <p className='font-normal text-[12px] text-white'> We provide the best transportation service</p>
        </div>
       
        <div>
        <ul className='flex flex-row items-center  gap-8 font-normal text-white text-[12px] pl-96 pt-6 '>
          <li className="dec" >About </li>
          <li className="dec" >Contact </li>
          <li className="dec" >Services</li>
          <li className="dec" >Get a Quote</li>

          </ul>
        </div>
        <hr className="my-4 border-gray-400" />
     </div>
     <hr className="my-6 border-gray-500 m-24" />
      {/*  div */}
     <div className='flex flex-row items-center justify-between px-28 '>
       <div>
        <div className='font-normal text-[12px] text-white'>Copyright © 2024 TaxiDaneil. All Rights Reserved</div>
       </div>
       <div className='font-normal text-[12px] text-white  pr-9'>
       All Right RESERVED
       </div>
    
     </div>
    </main>
  </section>
  )
}

export default Footer