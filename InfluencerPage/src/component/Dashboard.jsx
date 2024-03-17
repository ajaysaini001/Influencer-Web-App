import React from 'react'

import { CgMenuRound } from "react-icons/cg";

import { VscListOrdered } from "react-icons/vsc";
import { MdOutlineBorderOuter } from "react-icons/md";
import { FaJediOrder } from "react-icons/fa6";



const dashboard =[
    {
        name:"Balance",
        price:"$1234",
        icon:<CgMenuRound  color='white' size={18}/>,
    },
    {
        name:"Total Orders",
        price:"$1234",
        icon:<FaJediOrder color='white' size={18}/>,
    },
    {
        name:"Complete Orders",
        price:"$1234",
        icon:<MdOutlineBorderOuter color='white' size={18}/>,
    },
    {
        name:"Get Hired",
        price:"$1234",
        icon:<VscListOrdered color='white' size={18}/>,
    }
]
const Dashboard = () => {
  return (
    <div className='bg-white w-[screen] h-auto overflow overflow-hidden m-4 mt-20 text-black 
    flex flex-col '>
        <div className='flex flex-col w-full justify-center items-center bg-sky-50 md:flex md:flex-row md:justify-between  '>
        {
            dashboard?.map((item,index)=>(
                
                    <div key={index} className='w-[250px] h-auto mb-10 bg-white flex justify-between rounded-md p-3 items-center
                    md:w-[180px]  '>
                    <div><h3 className='text-gray-500'>{item.name}</h3>
                    <h2 className='font-bold text-lg'>{item.price}</h2>
                    </div>
                    <div className='w-[35px] h-[35px] bg-sky-500 rounded-3xl flex items-center justify-center'>{item.icon}</div>
                    </div>
                
            ))
        }
        </div>

        
    </div>
  )
}

export default Dashboard