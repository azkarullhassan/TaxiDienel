import React from 'react';

const Pic = () => {
  return (
    <section className='w-full md:py-28 py-8'>

      <main className='mx-auto max-w-[80rem] flex flex-col md:flex-row gap-5 px-4 py-[30px]'>
        {/* Image div */}
        <div className='w-full md:w-1/2'>
          <img src="/public/image4.png" alt="arrow" className='w-full h-auto' />
        </div>
        {/* Content div */}
        <div className='flex flex-col md:items-start items-center md:gap-6 gap-8 md:w-1/2 w-full text-center md:text-start'>
          <h3 className='text-[#873EFC] text-[20px] font-[700] uppercase'>Ride it</h3>
          <h1 className='text-[#181443] lg:text-[54px] md:text-[54px] font-plus-jakarta-sans text-[32px] font-bold'>
            Your <span className='text-violet-500'>Smooth Ride</span> Starts with TaxiDaniel
          </h1>
          <p className='text-[#625D7E] text-[18px] tracking-[-0.2] font-plus-jakarta-sans font-medium'>
            Glide into glamorous events gdhsj, catch your flight with a breeze, or explore hidden city gems. TaxiDaniel is your 24/7 companion for stylish rides, expert drivers, and clean, comfortable cars. We handle the traffic, you enjoy the journey.
          </p>
          {/* Buttons */}
          <div className='flex flex-col md:flex-row gap-4 pt-12'>
            <button className='border-[2px] md:px-8 px-4 py-4 bg-[#6F1EF3] rounded-[8px] text-[16px] text-white font-bold'>
              Get a free Quote
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Pic;
