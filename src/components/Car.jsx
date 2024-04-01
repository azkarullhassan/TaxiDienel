import React from 'react'

const Car = () => {
  return (
    <section className='w-full md:py-28 py-8  bg-gray-100'
     
      >

      <main className=' h-[100vh] rounded-2xl mx-auto max-w-[80rem] flex flex-col md:flex-row gap-5  px-4 py-[30px]'
       style={{
        backgroundImage: "url('/public/car.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
       
        <div className='flex flex-col md:items-start items-center pl-7 md:gap-6 gap-8 md:w-1/2 w-full text-center md:text-start  '>


          <h1 className='text-white lg:text-[54px] md:text-[54px] text-[38px] font-plus-jakarta-sans font-bold '>
          Get Your Free TaxiDaniel Quote Today! 
          </h1>
    
          <p className=' text-white text-[17px] pb-10 font-medium '>
          Skip the planning headaches, whether it's a whirlwind airport run or a romantic wedding escape, we'll create a stress-free experience that exceeds your expectations. Request a free quote now and discover the TaxiDaniel difference!
          </p>
          <div className='flex flex-row space-x-36'>
            <div className='text-white'>
             <h1 className='font-medium text-[14px]'>Phone Number </h1>
             <p className='font-semibold text-[18px]'>+3214764460</p>
            </div>
            <div className='text-white'>
             <h1 className='font-medium text-[14px]'>Email </h1>
             <p className='font-semibold text-[18px]'>info@taxidaniel.be</p>
            </div>
          </div>
          <div className='flex flex-row space-x-20'>
            <div className='text-white'>
             <h1 className='font-medium text-[14px]'>Address </h1>
             <p className='font-semibold text-[18px]'>Stationstraat Turnhout</p>
            </div>
            <div className='text-white'>
             <h1 className='font-medium text-[14px]'>Billing Address </h1>
             <p className='font-semibold text-[18px]'>Stenweg op Mol 792300 Turnhout</p>
            </div>
          </div>
          
          
         
        </div>
        {/*  div */}
       <div className='w-1/2 '>
         <div className='bg-white  rounded-2xl p-7 flex flex-col gap-5 mr-8 mt-2'>
          <h1 className='text-[28px] font-plus-jakarta-sans font-bold text-center'>Get a free <span className='text-violet-500'>quote</span></h1>
          <p><label className='text-[18px] font-plus-jakarta-sans font-medium'>Full Name</label> </p>
          <input className='bg-gray-200 rounded-xl items-center text-center w-full h-14' type="text" name="Azkar" placeholder='Azkar' />

          
          <p><label className='text-[18px] font-plus-jakarta-sans font-medium'>Email</label> </p>
          <input className='bg-gray-200 rounded-xl items-center text-center w-full h-14' type="text" name="Azkar" placeholder='azkar@gmail.com' />

          
          <p><label className='text-[18px] font-plus-jakarta-sans font-medium'>Contact</label> </p>
          <input className='bg-gray-200 rounded-xl items-center text-center w-full h-14' type="number" name="Azkar" placeholder='0987654321' />

          
         <div className='pt-6'>
         <button className=' text-center bg-violet-500  text-white rounded-lg w-full h-14 item-center text-[18px] font-plus-jakarta-sans font-medium'>
          Get a free quote
          </button>
         </div>
          
         </div>
       </div>
      </main>
    </section>
  )
}

export default Car