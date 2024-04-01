import React from 'react'

const Happy = () => {
  return (
    <section className='w-full md:py-28 py-8  bg-gray-100' >

      <main className=' mx-auto max-w-[80rem] flex flex-col md:flex-row gap-5  px-4 py-[30px]'>
 
        <div className='flex flex-col md:items-start items-center  md:gap-6 gap-8 md:w-1/2 w-full text-center md:text-start  '>

          <h1 className='text-[#181443] lg:text-[54px] md:text-[54px] text-[50px] font-plus-jakarta-sans font-bold '>
          Hear from Our  <span className='text-violet-500'> Happy Riders </span>
          </h1>
          <div className='bg-white rounded-2xl shadow p-4 mr-12'>
          <h3 className='text-[#863CFC] font-plus-jakarta-sans font-bold text-[70px] '>“</h3>
          <p className='text-[#2F2F30] font-plus-jakarta-sans text-[17px] pb-10 font-medium'>
          My business life is a whirlwind. But with TaxiDaniel, the commute isn't. Always on time, and the cars are like mobile offices. They even know my usual coffee stop! TaxiDaniel takes the stress out of getting around, letting me focus on what matters most."
          </p>
          <div>
          <h2 className="inline-flex gap-3 font-medium text-[18px] text-[#625D7E]"> <img src='/public/Frame 380.png' className="fill-violet-500  flex items-center justify-center w-8 h-8  " /><span className='text-[#18003F]'> Adam Smith</span></h2>
          </div>
          
          </div>
         
        </div>
        
       <div className='w-1/2 bg-violet-600'>
        <img className='w-full' src="/public/image 56.png" alt="arror" />
       </div>
      </main>
    </section>
  )
}

export default Happy