import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

const Questions = () => {
  return (
    <section className='w-full'>
        <h1 className='font-bold text-[50px] text-center p-20 mt-10'> Frequently Asked <span className='text-violet-500'> Questions</span></h1>
        <main className='mx-auto max-w-[80rem] bg-gray-200 rounded-2xl p-7'>
            <div className=" flex justify-between">
                <h1 className="font-medium text-[22px]">How can I book a ride with TaxiDaniel?</h1>
                <RiSubtractFill className="flex  w-[30px] h-[30px] text-violet-400"/>
            </div>
            <p className="font-normal text-[16px] leading-loose w-[90%]">To book a ride with TaxiDaniel, Call us at [Your Phone Number], and our customer service team will assist you in arranging your ride according to your schedule and preferences</p>
         <div className=" flex justify-between pt-6">
            <h1 className="font-medium text-[22px]" >What types of events does TaxiDaniel cater to?</h1>
            <IoMdAdd className="flex  w-[30px] h-[30px] text-violet-400"/>
         </div>

         <div className=" flex justify-between pt-12">
            <h1 className="font-medium text-[22px]" >Is TaxiDaniel available 24/7, including weekends and holidays?</h1>
            <IoMdAdd className="flex  w-[30px] h-[30px] text-violet-400"/>
         </div>

         <div className=" flex justify-between pt-12">
            <h1 className="font-medium text-[22px]" >Do you provide assistance with luggage?</h1>
            <IoMdAdd className="flex  w-[30px] h-[30px] text-violet-400"/>
         </div>

         <div className=" flex justify-between pt-12">
            <h1 className="font-medium text-[22px]" >What is the process for airport transport with TaxiDaniel?</h1>
            <IoMdAdd className="flex  w-[30px] h-[30px] text-violet-400"/>
         </div>
        </main>
    </section>
  )
}

export default Questions