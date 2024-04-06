import { FaCircleCheck } from "react-icons/fa6";

const About = () => {
  return (
    <section className='w-full md:py-28 py-8'>
      <main className='mx-auto max-w-[80rem] flex flex-col md:flex-row px-4 py-[30px]'>
        {/* image div */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img className='max-w-full h-auto' src="/public/image33.png" alt="" />
        </div>
        {/* content div */}
        <div className='flex flex-col md:items-start items-center md:gap-6 gap-4 md:w-1/2 w-full text-center md:text-start pt-24'>
          <h3 className='text-[#873EFC] text-[20px] font-bold uppercase'>why choose us</h3>
          <h1 className='text-[#181443] lg:text-[54px] md:text-[54px] text-[50px] font-bold'>
            Effortless Journeys Start with <span className='text-violet-500'>TaxiDaniel</span>
          </h1>
          <p className='text-[#625D7E] text-[18px] tracking-[-0.2] font-medium'>At TaxiDaniel, our mission is to deliver more than just transportation – we're here to provide travel experiences that leave you feeling relaxed and refreshed.</p>
          {/* bullet points */}
          <div className='flex flex-col gap-4'>
            <h2 className='flex items-center gap-5 font-medium text-[18px] text-[#625D7E]'><FaCircleCheck className='fill-violet-500 w-5 h-5 mt-1' /><span>Say goodbye to waiting anxiety</span></h2>
            <h2 className='flex items-center gap-5 font-medium text-[18px] text-[#625D7E]'><FaCircleCheck className='fill-violet-500 w-5 h-5 mt-1' /><span>No more frantic calls or missed appointments</span></h2>
            <h2 className='flex items-center gap-5 font-medium text-[18px] text-[#625D7E]'><FaCircleCheck className='fill-violet-500 w-5 h-5 mt-1' /><span>Seamless airport concierge service</span></h2>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
