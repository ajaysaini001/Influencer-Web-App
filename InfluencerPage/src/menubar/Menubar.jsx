import { Menu } from 'antd'
import React from 'react'
import { MdDashboard } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdGroups3 } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdSupportAgent } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from 'react-router';

const MenuBar = ({setOpen,open}) => {
  const navigate=useNavigate();
  return (
    <div className=' sticky top-0'>
        <div Key="Dashboard" className='sticky top-0 bg-white flex items-center justify-around gap-10 p-2 ' 
        >
            
            { open && <div className='flex items-center gap-1 '
            style={{
            transition: "width 0.5s, height 0.5s "}}><HiOutlineUserGroup color='white' className='bg-pink-700 '/>
            <span className='font-bold text-[16px]'>Influencer <span className='text-pink-600'>Fly</span></span></div>}
            
            <div className='sticky top-0' onClick={() => setOpen(!open)} >{open ? <RiMenu3Fill  size={18} /> : <RiMenu3Fill  size={18} className='mt-3'/>}</div>
            </div>
        <Menu theme='light' mode='inline' style={{transitionDelay:"0.5s"}}
         className='flex flex-col top-0 h-auto left-0 sticky gap-4 font-semibold text-sm  bg-white
          text-black '>
        
       <Menu.Item Key="Dashboard" icon={<MdDashboard size={16}/>} onClick={()=>navigate("/")} >Dashboard</Menu.Item> 
       <Menu.SubMenu key="Hirings" icon={<MdGroups3/>} title="Services">
            <Menu.Item Key="allhirings" icon={<BsThreeDots  size={18} color='skyblue'/>} className='text-xs font-sans'
            onClick={()=>navigate("/create")} >Create</Menu.Item>
            <Menu.Item Key="pendings" icon={<BsThreeDots  size={18} color='skyblue'/>} className='text-xs font-bold' >All Services</Menu.Item>
            
       </Menu.SubMenu> 
       <Menu.SubMenu Key="Orders" icon={<AiOutlineUnorderedList size={16}/>} title="Orders" >
       <Menu.Item Key="allorders" icon={<BsThreeDots  size={18} color='skyblue'/>} className='text-xs font-sans' >All Orders</Menu.Item>
            <Menu.Item Key="pending" icon={<BsThreeDots  size={18} color='skyblue'/>} className='text-xs font-bold' >Pnding</Menu.Item>
            <Menu.Item Key="inprocessing" icon={<BsThreeDots  size={18} color='skyblue'/>} className='text-xs font-bold' >Inprocess</Menu.Item>
            <Menu.Item Key="jobdoen" icon={<BsThreeDots  size={18} color='skyblue'/>} className='text-xs font-bold' >Job Done</Menu.Item>
            <Menu.Item Key="completed" icon={<BsThreeDots  size={18} color='skyblue'/>} className='text-xs font-bold' >Completed</Menu.Item>
            <Menu.Item Key="reported" icon={<BsThreeDots  size={18} color='skyblue'/>} className='text-xs font-bold' >Reported</Menu.Item>
            <Menu.Item Key="cancelled" icon={<BsThreeDots  size={18} color='skyblue'/>} className='text-xs font-bold' >Cancelled</Menu.Item>
           
        </Menu.SubMenu> 
       <Menu.Item Key="Deposit" icon={<FaDollarSign  size={16}/>} >Deposit</Menu.Item> 
       <Menu.Item Key="Transaction" icon={<GrTransaction size={16} />} >Transaction</Menu.Item> 
       <Menu.Item Key="SupportTicket" icon={<MdSupportAgent  size={16}/>} >Support Ticket</Menu.Item> 
       <Menu.Item Key="Wishlists" icon={<FaHeart size={16} />} >Wishlists</Menu.Item> 
      
    </Menu>
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJ3GvsgCP0Kp8q1VcUQFMiBrXqlMAv8WY67-JSNO7Vg6xXa8NGMC37BEx9g&s" 
        alt="" width="200px" height="300px" />
    </div>
    </div>
  )
}

export default MenuBar