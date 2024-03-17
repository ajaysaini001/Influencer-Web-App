import React from 'react'
import { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import "../../../App.css";
import { useNavigate } from 'react-router';
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate=useNavigate();
  return (
    <div className='flex justify-between  items-center p-5 md:pl-20 md:pr-20 bg-sky-50 sticky top-0
    '>
        <div className='flex items-center  bg-transparent'>
            <div className='w-[30px] h-[30px] flex  rounded items-center  justify-center bg-sky-500 '>
              <IoHome color='white' size={18} className='bg-transparent'/></div>
            <div className='flex bg-transparent'><h1 className='font-bold bg-transparent text-2xl'>Influencer</h1><span className='font-bold bg-transparent text-2xl text-sky-500'>Fly</span></div>
        </div>
        <ul className='flex-block hidden justify-between md:flex show gap-9 font-serif text-xs text-gray-500 bg-transparent'>
            <li className="li bg-transparent  hover:text-sky-500 cursor-pointer">Home</li>
            <li className="li bg-transparent hover:text-sky-500 cursor-pointer" onClick={()=>navigate("/influencer")}>Influencer</li>
            <li className="li bg-transparent hover:text-sky-500 cursor-pointer" onClick={()=>navigate("/service")}>Services</li>
            <li className="li bg-transparent hover:text-sky-500 cursor-pointer"onClick={()=>navigate("/blogpage")}>Blog</li>
            <li className="li bg-transparent hover:text-sky-500 cursor-pointer">Contact</li>
        </ul>
        <div className='flex-block gap-3 hidden items-center font-serif text-xs text-gray-500
         bg-transparent md:flex show'>
            <span className='bg-transparent hover:text-sky-500 cursor-pointer'>English</span>
            <button className='bg-sky-500 text-white p-2 rounded-md font-semibold hover:bg-sky-700 cursor-pointer
            '>Sign In</button>
        </div>

        {/* mobile */}
        <div className='md:hidden' onClick={() => setShowMenu(true)}>
  <IoMenuOutline size={24} className='' />
</div>
{showMenu && (
  <div className='menubar'>
    <div className='opacity'></div>
    <div className='content' >
      <div className='w-98 flex p-3  justify-between'>
      <div className='flex items-center ml-3'>
            <div className='w-[30px] h-[30px] flex  rounded items-center  justify-center bg-sky-500 '>
              <IoHome color='white' size={18} className='bg-transparent'/></div>
            <div className='flex bg-transparent'><h1 className='font-bold bg-transparent text-2xl'>Influencer</h1><span className='font-bold bg-transparent text-2xl text-sky-500'>Fly</span></div>
        </div>
      <span onClick={() => setShowMenu(false)} className='text-2xl'>X</span>
      </div>
      <ul className='flex flex-col gap-3 p-3'>
      <li className="border-b-2 font-sans">Home</li>
            <li className="border-b-2 font-sans" onClick={()=>navigate("/influencer")}>Influencer</li>
            <li className="border-b-2 font-sans" onClick={()=>navigate("/service")}>Services</li>
            <li className="border-b-2 font-sans"onClick={()=>navigate("/blogpage")}>Blog</li>
            <li className="border-b-2 font-sans">Contact</li>
            
      </ul>
      <div>
         
         <button className='w-[100px] ml-3 border-2 bg-sky-500 text-white p-2 rounded-md'>Create</button>
      </div>
    </div>
  </div>
)}

    


    </div>
  )
}

export default Navbar