import React from 'react'
import { useNavigate } from 'react-router'
import Password from 'antd/es/input/Password'
import { Button } from 'antd'
const Passwords = () => {
   
  return (
    
        <div className='flex items-center justify-center'>
            <form className='flex flex-col gap-4 p-3 justify-center bg-white w-2/5 rounded-md'>
            
            <div className='flex flex-col gap-2 w-full pl-4 pr-4 '>
                <label htmlFor="fname" className=' text-xs'>Current Password</label>
                <Password type="text "placeholder='first name' className='border-1 w-full  bg-white rounded-md 
                h-auto p-2 focus:outline-none focus:border-cyan-200' />
            </div>

            <div className='flex flex-col gap-2 w-full pl-4 pr-4 '>
                <label htmlFor="fname" className=' text-xs'>Password</label>
                <Password type="text "placeholder='first name' className='border-1 w-full  bg-white rounded-md 
                h-auto p-2 focus:outline-none focus:border-cyan-200' />
            </div>

            <div className='flex flex-col gap-2 w-full pl-4 pr-4 '>
                <label htmlFor="fname" className=' text-xs'>Conferm Password</label>
                <Password type="text "placeholder='first name' className='border-1 w-full  bg-white rounded-md 
                h-auto p-2 focus:outline-none focus:border-cyan-200' />
            </div>
         <div className='flex justify-end m-2'>
         <button className='w-[100px] bg-cyan-400 rounded-md text-white h-auto p-2  hover:bg-sky-700
          hover:text-black ' >Change</button>
     
            </div>   
       </form>
        </div>
      )
}

export default Passwords