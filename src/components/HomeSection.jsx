import React from 'react';

const HomeSection = () => {
  return (
    <section className='w-full md:py-28 py-8' style={{
      backgroundImage: "url('/public/image1.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>

      <main className='mx-auto max-w-[80rem] flex flex-col md:flex-row px-4 py-[30px]'>
        {/* content div */}
        <div className='flex flex-col md:items-start items-center md:gap-6 gap-4 md:w-1/2 w-full text-center md:text-start'>

          <h1 className='text-[#181443] lg:text-[54px] md:text-[54px] text-[32px] font-bold'>
            Need a lift? Just doit, don't stall. <span className='text-[#6F1EF3]'> Your city awaits.</span>
          </h1>
          <p className='text-[#625D7E] text-[18px] tracking-[-0.2] font-medium'>Friendly drivers, comfortable rides, and no downloads required. Just one call to get you anywhere you need to go, in style and on time. Let us handle the traffic while you enjoy the view.</p>
          {/* buttons */}
          <div className='flex flex-col md:flex-row gap-4 '>
            <button className='border-[2px] md:px-8 px-4 py-4 bg-[#6F1EF3] rounded-[8px] text-[16px] text-white font-bold'>Get a free Quote</button>
            <button className='border-[2px] md:px-14 px-4 py-4 text-[16px] text-[#1E004E] border-[#1E004E] rounded-[8px] bg-transparent'>Contact us</button>
          </div>

        </div>
        {/* empty div */}
        <div className='w-1/2'>
        </div>
      </main>
    </section>
  );
};

export default HomeSection;
