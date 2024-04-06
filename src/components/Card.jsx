import { FiArrowUpRight } from 'react-icons/fi';
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";

const Card = () => {
  return (
    <section className='w-full py-10 md:py-20'>
       <main className='mx-auto w-full max-w-[70rem] flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center shadow-md py-6 rounded-md bg-white px-4 md:-mt-44 -m-0'>

        {/* First card */}
        <div className='w-full md:w-1/3 flex flex-col gap-6 p-4'>
          <div className='flex items-center justify-between'>
            <h4 className='text-xl md:text-2xl font-medium'>TaxiDaniel Location</h4>
            <FiArrowUpRight />
          </div>
          <div className='flex items-center gap-4'>
            <div className='bg-gray-100 rounded-full flex items-center justify-center w-10 h-10'>
              <CiLocationOn className='w-4 h-4 text-violet-500' />
            </div>
            <div className='flex flex-col'>
              <p className='text-sm md:text-base'>Address</p>
              <p>Stationstraat Turnhout</p>
            </div>
          </div>
        </div>

        {/* Second card */}
        <div className='w-full md:w-1/3 flex flex-col gap-6 p-4'>
          <div className='flex items-center justify-between'>
            <h4 className='text-xl md:text-2xl font-medium'>TaxiDaniel Location</h4>
            <FiArrowUpRight />
          </div>
          <div className='flex items-center gap-4'>
            <div className='bg-gray-100 rounded-full flex items-center justify-center w-10 h-10'>
              <FaPhoneAlt className='w-4 h-4 text-violet-500' />
            </div>
            <div className='flex flex-col'>
              <p className='text-sm md:text-base'>Address</p>
              <p>Stationstraat Turnhout</p>
            </div>
          </div>
        </div>

        {/* Third card */}
        <div className='w-full md:w-1/3 flex flex-col gap-6 p-4'>
          <div className='flex items-center justify-between'>
            <h4 className='text-xl md:text-2xl font-medium'>TaxiDaniel Location</h4>
            <FiArrowUpRight />
          </div>
          <div className='flex items-center gap-4'>
            <div className='bg-gray-100 rounded-full flex items-center justify-center w-10 h-10'>
              <MdOutlineMailLock className='w-4 h-4 text-violet-500' />
            </div>
            <div className='flex flex-col'>
              <p className='text-sm md:text-base'>Address</p>
              <p>Stationstraat Turnhout</p>
            </div>
          </div>
        </div>
       </main>
    </section>
  );
};

export default Card;
