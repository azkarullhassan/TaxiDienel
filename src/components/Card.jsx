import { FiArrowUpRight } from 'react-icons/fi';
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md"

const Card = () => {
  return (
    <section className='w-full py-20 '>

       <main className='mx-auto w-full max-w-[70rem] flex flex-col md:flex-row gap-2 items-center justify-center shadow-md py-6 rounded-md -m-44 bg-white px-4'>
{/* first card */}
<div className='w-1/3 flex flex-col gap-10  p-4'>

    <div className='flex items-center justify-between'>
    <h4 className='text-2xl font-medium'>TaxiDaniel Location</h4>
    <FiArrowUpRight />
    </div>

<div className='flex items-center gap-6'>
    <div className='bg-gray-100 rounded-md flex items-center justify-center w-12 h-12 '><CiLocationOn className='w-4 h-4  text-violet-500' /></div>
    <div className='flex flex-col'>
        <p>Adress</p>
        <p>Stationstraat Turnhout</p>
    </div>
</div>

</div>
{/* 2nd card */}
<div className='w-1/3 flex flex-col gap-10  p-4'>

    <div className='flex items-center justify-between'>
    <h4 className='text-2xl font-medium'>TaxiDaniel Location</h4>
    <FiArrowUpRight />
    </div>

<div className='flex items-center gap-6'>
    <div className='bg-gray-100 rounded-md flex items-center justify-center w-12 h-12'><FaPhoneAlt className='w-4 h-4 text-violet-500' /></div>
    <div className='flex flex-col'>
        <p>Adress</p>
        <p>Stationstraat Turnhout</p>
    </div>
</div>

</div>
{/* third card */}
<div className='w-1/3 flex flex-col gap-10  p-4'>

    <div className='flex items-center justify-between'>
    <h4 className='text-2xl font-medium'>TaxiDaniel Location</h4>
    <FiArrowUpRight />
    </div>

<div className='flex items-center gap-6'>
    <div className='bg-gray-100 rounded-md flex items-center justify-center w-12 h-12'><MdOutlineMailLock  className='w-4 h-4 text-violet-500 ' /></div>
    <div className='flex flex-col'>
        <p>Adress</p>
        <p>Stationstraat Turnhout</p>
    </div>
</div>

</div>
       </main>

    </section>
  )
}

export default Card