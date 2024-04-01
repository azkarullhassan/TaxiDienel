import React from 'react'

const Ride = () => {
  return (
    <section className='w-full md:py-28 py-8'
     
      >

      <main className=' mx-auto max-w-[80rem] flex flex-col md:flex-row gap-5  px-4 py-[30px]'>
        {/* contentv div */}
        <div className='flex flex-col md:items-start items-center md:gap-6 gap-8 md:w-1/2 w-full text-center md:text-start  '>



        <h3 className='text-[#873EFC] text-[20px] font-bold uppercase '>why choose us</h3>
          <h1 className='text-[#181443] lg:text-[54px] md:text-[54px] text-[32px] font-bold '>
          Why TaxiDaniel Win the  <span className='text-violet-500'>Ride-Hailing Race </span>
          </h1>
          <p className='text-[#625D7E]  text-[18px] tracking-[-0.2] font-medium'>At TaxiDaniel, our mission is to deliver more than just transportation – we're here to provide  travel experiences that leave you feeling relaxed and refreshed At TaxiDaniel, our mission is to deliver more than just transportation – we're here to provide  travel experiences that leave you feeling relaxed and refreshed..</p>
          {/* buttons */}
          <div className='flex flex-col   md:flex-row gap-4 '>
            <button className='border-[2px] md:px-8 px-4 py-4 bg-[#6F1EF3]  rounded-[8px] text-[16px] text-white font-bold'>Get a free Quote</button>
           
          </div>

        </div>
        {/*  div */}
       <div className='w-1/2'>
        <img src="/public/image2.png" alt="arror" />
       </div>
      </main>
    </section>
  )
}

export default Ride