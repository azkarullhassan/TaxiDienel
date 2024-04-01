import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
   <section className="w-full">
     <main className='mx-auto flex items-center justify-between max-w-7xl py-2  '>
          
          <div className=' text-3xl font-bold  '>TaxiDaniel</div>
          <ul className='flex flex-col  md:flex-row items-center justify-between gap-8 font-medium text-zinc-800 '>
          <li className="dec" >About us</li>
          <li className="dec" >Contact us</li>
          <li className="dec" >Benifits</li>

          </ul>
          
          
             <button className='px-6 py-4 mb-2 bg-gradient-to-br from-violet-500 to-violet-500 rounded-xl font-medium'>Get a Quote</button>
               <FiMenu className="lg:hidden" />
     </main>
   </section>
  )
}

export default Navbar