import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

const Questions = () => {
  return (
    <section className='w-full pt-96 md:pt-0'>
      <div className="mx-auto max-w-[80rem]">
      <h1 className='font-bold text-[50px] text-center p-8 md:p-20 mt-10'> Frequently Asked <span className='text-violet-500'> Questions</span></h1>
      <main className=' bg-gray-200 rounded-2xl p-4 md:p-7'>
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-8">
          <h1 className="font-medium text-[22px] mb-4 md:mb-0">How can I book a ride with TaxiDaniel?</h1>
          <RiSubtractFill className="flex w-[30px] h-[30px] text-violet-400"/>
        </div>
        <p className="font-normal text-[16px] leading-loose">To book a ride with TaxiDaniel, Call us at [Your Phone Number], and our customer service team will assist you in arranging your ride according to your schedule and preferences</p>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-8">
          <h1 className="font-medium text-[22px] mb-4 md:mb-0">What types of events does TaxiDaniel cater to?</h1>
          <IoMdAdd className="flex w-[30px] h-[30px] text-violet-400"/>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-8">
          <h1 className="font-medium text-[22px] mb-4 md:mb-0">Is TaxiDaniel available 24/7, including weekends and holidays?</h1>
          <IoMdAdd className="flex w-[30px] h-[30px] text-violet-400"/>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-8">
          <h1 className="font-medium text-[22px] mb-4 md:mb-0">Do you provide assistance with luggage?</h1>
          <IoMdAdd className="flex w-[30px] h-[30px] text-violet-400"/>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-8">
          <h1 className="font-medium text-[22px] mb-4 md:mb-0">What is the process for airport transport with TaxiDaniel?</h1>
          <IoMdAdd className="flex w-[30px] h-[30px] text-violet-400"/>
        </div>
      </main>
      </div>
    </section>
  )
}

export default Questions;
