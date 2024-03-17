import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'


const Question = () => {
    const [show,setShow]=useState(false);
  return (
    <div className="flex flex-col md:flex-row justify-between p-10 md:p-20 md:items-center bg-sky-50 gap-10">
      <div className="w-1/2 bg-transparent">
        <div className="bg-transparent">
          <h1 className="text-2xl md:text-3xl font-bold bg-transparent font-sans w-96 ">Frequently Asked Question</h1>
          <p className="mt-5 w-80 md:w-96 font-sans bg-transparent">
          Feel free to customize these questions based on your 
          specific audience and the services you offer!
          </p>
          <button className='w-[150px] rounded-md text-white h-auto p-3 font-serif bg-sky-500 mt-10 md:mt-5'>
            Ask Question</button>
        </div>
        </div>

        {/* right */}
        <div className='w-full md:w-1/2'>
            <div className='w-full h-auto md:p-5 flex flex-col gap-2 bg-sky-50'>
                
                        <div className='flex flex-col gap-8 h-auto p-5 rounded-md '>
                            <div className='flex w-80 md:w-96'>
                                <h1 className='font-mono font-bold'  >
                                Do You Offer Consulting Or Coaching Services For Aspiring Influencers?</h1>
                                <span className='w-[60px] h-[40px] rounded-full mt-2 bg-sky-200 flex 
                                items-center justify-center' onClick={()=>setShow(!show)}>
                                   {
                                    show ? <FaMinus size={16} className='bg-transparent text-sky-500 hover:bg-sky-200 cursor-pointer'/> :
                                    <FaPlus size={16} className='bg-transparent text-sky-500 hover:bg-sky-200 cursor-pointer'/>
                                   }
                                </span>
                            </div>
                            {show && <p className='font-sans text-gray-600 transition duration-500 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, numquam alias. Laborum
                             maiores non iure, laudantium odio, ipsa magni a ducimus nobis consequuntur
                                </p>}
                        </div>

                        <div className='flex flex-col gap-8 h-auto p-5 rounded-md '>
                            <div className='flex w-80 md:w-96'>
                                <h1 className='font-mono font-bold'  >
                                Do You Offer Consulting Or Coaching Services For Aspiring Influencers?</h1>
                                <span className='w-[60px] h-[40px] rounded-full mt-2 bg-sky-200 flex 
                                items-center justify-center' onClick={()=>setShow(!show)}>
                                   {
                                    show ? <FaMinus size={16} className='bg-transparent text-sky-500'/> :
                                    <FaPlus size={16} className='bg-transparent text-sky-500'/>
                                   }
                                </span>
                            </div>
                            {show && <p className='font-sans text-gray-600 transition duration-500 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, numquam alias. Laborum
                             maiores non iure, laudantium odio, ipsa magni a ducimus nobis consequuntur
                                </p>}
                        </div>

                        <div className='flex flex-col gap-8 h-auto p-5 rounded-md '>
                            <div className='flex w-80 md:w-96'>
                                <h1 className='font-mono font-bold'  >
                                Do You Offer Consulting Or Coaching Services For Aspiring Influencers?</h1>
                                <span className='w-[60px] h-[40px] rounded-full mt-2 bg-sky-200 flex 
                                items-center justify-center' onClick={()=>setShow(!show)}>
                                   {
                                    show ? <FaMinus size={16} className='bg-transparent text-sky-500'/> :
                                    <FaPlus size={16} className='bg-transparent text-sky-500'/>
                                   }
                                </span>
                            </div>
                            {show && <p className='font-sans text-gray-600 transition duration-500 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, numquam alias. Laborum
                             maiores non iure, laudantium odio, ipsa magni a ducimus nobis consequuntur
                                </p>}
                        </div>

                        <div className='flex flex-col gap-8 h-auto p-5 rounded-md '>
                            <div className='flex w-80 md:w-96'>
                                <h1 className='font-mono font-bold'  >
                                Do You Offer Consulting Or Coaching Services For Aspiring Influencers?</h1>
                                <span className='w-[60px] h-[40px] rounded-full mt-2 bg-sky-200 flex 
                                items-center justify-center' onClick={()=>setShow(!show)}>
                                   {
                                    show ? <FaMinus size={16} className='bg-transparent text-sky-500'/> :
                                    <FaPlus size={16} className='bg-transparent text-sky-500'/>
                                   }
                                </span>
                            </div>
                            {show && <p className='font-sans text-gray-600 transition duration-500 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, numquam alias. Laborum
                             maiores non iure, laudantium odio, ipsa magni a ducimus nobis consequuntur
                                </p>}
                        </div>
                  
            </div>
        </div>
        </div>
  )
}

export default Question