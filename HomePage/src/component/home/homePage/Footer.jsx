import React from 'react'
import { FaHome, FaTelegram } from 'react-icons/fa'
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between p-20 bg-sky-50'>
     <div className='flex flex-col gap-3 bg-transparent'>
       <div className='flex items-center gap-1 bg-transparent'>
        <span className='w-[20px] h-[20px] rounded-sm bg-sky-500 items-center flex justify-center'>
        <FaHome className='b bg-transparent text-white'/>
        </span>
         <span className='font-bold text-base bg-transparent'>Influencer</span>
         <span className='font-bold text-sky-500 bg-transparent'>Fly</span>
      </div>
       <p className='w-[200px] font-sans text-gray-700 bg-transparent'>Welcome to our influencer hub where authenticity meets influence.</p>
     </div>
     
      <ul className='flex flex-col gap-2 bg-transparent'>
        <li className="font-serif font-semibold text-md bg-transparent">Important Links</li>
        <li className="font-sans text-xs mt-2 bg-transparent">Blog</li>
        <li className="font-sans text-xs bg-transparent">Services</li>
        <li className="font-sans text-xs bg-transparent">Influencers</li>
      </ul>

      <ul className='flex flex-col gap-2 bg-transparent'>
        <li className="font-serif font-semibold text-md bg-transparent">Important Links</li>
        <li className="font-sans text-xs mt-2 bg-transparent">Blog</li>
        <li className="font-sans text-xs bg-transparent">Services</li>
        <li className="font-sans text-xs bg-transparent">Influencers</li>
      </ul>

      <ul className='flex flex-col gap-2 bg-transparent'>
        <li className="font-serif font-semibold text-md bg-transparent">Important Links</li>
        <li className="font-sans text-xs mt-2 bg-transparent">Blog</li>
        <li className="font-sans text-xs bg-transparent">Services</li>
        <li className="font-sans text-xs bg-transparent">Influencers</li>
      </ul>
     
     <div className=' bg-transparent'>
       <h2 className='font-serif font-semibold text-md  bg-transparent'>Newsleter</h2>
       <p className='font-sans mt-3  bg-transparent' style={{marginRight:"10px"}}>Subscribe our latest update</p>
      <div className='flex justify-end '>
      <input type="text" placeholder='Email' className='h-auto p-1 border-2 border-gray-150 outline-none focus:border-sky-200 mt-1 placeholder:text-xs absolute'/>
       <FaTelegramPlane size={16}  className='absolute mr-2 mt-3 text-sky-500'/>
      </div>
     </div>
    </div>
  )
}

export default Footer