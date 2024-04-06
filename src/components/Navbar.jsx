import React, { useState } from 'react'
import Button from './Button';

const Navbar = () => {
    let Links =[
      {name:"About us",link:"/"},
      {name:"Contact us",link:"/"},
      {name:"Benifits",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className=' w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl  flex items-center  
      text-gray-800'>
        TaxiDaniel
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 '>
              <a href={link.link} className='text-gray-800  px-9 justify-center'>{link.name}</a>
            </li>
          ))
        }
        <Button>
          Get a Quote
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar




// import { FiMenu, FiX } from "react-icons/fi"; // Import FiX for the cross icon
// import { useState } from "react";

// const Navbar = () => {
//   // const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (



// //     <section className="w-full">
// //       <main className="mx-auto flex items-center justify-between max-w-full py-2">
// //         <div className="text-3xl font-bold">TaxiDaniel</div>

// //         {/* Conditional rendering for menu icon or cross icon */}
// //         {isMenuOpen ? (
// //           <FiX
// //             className="lg:hidden items-center"
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //           />
// //         ) : (
// //           <FiMenu
// //             className="lg:hidden items-center"
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //           />
// //         )}

// //         {/* Menu Items */}
// //         <ul
// //           className={`${
// //             isMenuOpen ? "block" : "hidden"
// //           } pr-20 md:flex md:flex-row items-center flex flex-col justify-center gap-8 font-medium text-zinc-800`}
// //         >
// //           <li className="dec">About us</li>
// //           <li className="dec">Contact us</li>
// //           <li className="dec">Benefits</li>
// //         </ul>

// //         {/* Get a Quote button */}
// //         <button className="hidden  md:block px-6 text-white py-4 mb-2 bg-gradient-to-br from-violet-500 to-violet-500 rounded-xl font-medium">
// //           Get a Quote
// //         </button>
// //       </main>
// //     </section>
//    );
//  };

// export default Navbar;
