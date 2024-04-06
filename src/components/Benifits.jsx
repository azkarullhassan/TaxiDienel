import { CiClock2 } from "react-icons/ci";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FaBriefcase } from "react-icons/fa";
import { MdPhoneCallback } from "react-icons/md";

const Benifits = () => {
  return (
    <section className='w-full md:py-28 py-8'
     
    >

    <main className=' mx-auto max-w-[80rem] flex flex-col md:flex-row gap-5  px-4 py-[30px]'>
      {/* contentv div */}
      <div className='flex flex-col md:items-start items-center md:gap-6 gap-8 md:w-1/2 w-full text-center md:text-start  '>



      <h3 className='text-[#873EFC] text-[20px] font-bold uppercase manrope-my-custom-class '>benefits</h3>
        <h1 className='text-[#181443] font-plus-jakarta-sans  lg:text-[54px] md:text-[54px] text-[50px] font-bold '>
        Let TaxiDaniel Craft Your <span className='text-violet-500'>Unforgettable</span> Experience 
        </h1>
        <p className='text-[#181443] font-plus-jakarta-sans  text-[22px] tracking-[-0.2] font-medium'>From Airport Bliss to Hidden Gem <br /> Adventures, We Curate Your City Escapes </p>
        {/* buttons */}
       

      </div>
      {/*  div */}
     <div className='w-full md:w-1/2  '>
        <div className="flex justify-between ">
            <div className="">
            <CiClock2 className="fill-black bg-purple-300 rounded-full px-2 py-4 flex items-center justify-center w-[70px] h-[70px]"/>
            <h1 className="font-semibold font-plus-jakarta-sans text-[21px] pt-9 text-[#111827]">24/7 Availability</h1>
           <p className="text-[#111827] font-plus-jakarta-sans font-normal text-[15px] pt-4"> TaxiDaniel is at your service around
             the clock, ensuring have a reliable transportation option anytime.</p>
            </div>
            <div>
            <RiMoneyDollarBoxLine className="fill-black bg-purple-300 rounded-full px-2 py-4 flex items-center justify-center w-[70px] h-[70px]"/>
            <h1 className="font-semibold font-plus-jakarta-sans text-[21px] pt-9 text-[#111827]">Flexible Payments</h1>
            <p className="text-[#111827] font-plus-jakarta-sans  font-normal text-[15px] pt-4">Whether it's cash, Visa, Mastercard, or Bancontact, TaxiDaniel offers hassle-free payment choices no any additional costs.</p>
            </div>
        </div>
      
        <div className="flex justify-between pt-24 ">
            <div>
            <FaBriefcase className="fill-black bg-purple-300 rounded-full px-2 py-4 flex items-center justify-center w-[70px] h-[70px]"/>
            <h1 className="font-semibold font-plus-jakarta-sans text-[21px] pt-9 text-[#111827]">Luggage Help</h1>
           <p className="text-[#111827] font-plus-jakarta-sans  font-normal text-[15px] pt-4"> Our  drivers are ready to assist, ensuring 
                  a  experience from the moment they pick you up until drop-off.
             </p>
            </div>
            <div>
            <MdPhoneCallback className="fill-black bg-purple-300 rounded-full px-2 py-4 flex items-center justify-center w-[70px] h-[70px]"/>
            <h1 className="font-semibold font-plus-jakarta-sans  text-[21px] pt-9 text-[#111827]">Easy Booking</h1>
            <p className="text-[#111827] font-plus-jakarta-sans  font-normal text-[15px] pt-4">Enjoy a streamlined booking process, allowing you to focus on your journey, not the logistics</p>
            </div>
        </div>
     </div>
    </main>
  </section>
  )
}

export default Benifits