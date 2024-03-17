import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react'// import { Button, Dropdown, Menu } from 'antd';
  import React from 'react';
  import { FaMarsAndVenus } from 'react-icons/fa6';
  import { FaUserCircle } from 'react-icons/fa';
  import { IoKeyOutline } from "react-icons/io5";
  import { MdOutlineSecurity } from "react-icons/md";
  import { RiLogoutCircleRLine } from "react-icons/ri";
  
  import { RiArrowDropDownLine } from "react-icons/ri";
  import { useNavigate } from 'react-router';
  
  const NavbarInf = () => {
    const navigate = useNavigate();
    
    return (
      <div className='w-[full] flex justify-between p-4 bg-white m-4 sticky top-0 left-0 '
       style={{}}>
        <div>
          <h2>Dashboard</h2>
        </div>
        <div>
          <div className='flex gap-1'>
            <img src="data:image/jpeg;base64,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" 
          alt="" className='w-[30px] h-[30px] rounded-3xl'/>
       <Menu>
    <MenuButton as={Button} rightIcon={<RiArrowDropDownLine  size={18}/>}>
      UserProfile
    </MenuButton>
            <MenuList className='bg-white w-[110px] h-auto text-white flex flex-col gap-0.1 font-sans text-sm mr-5 '>
      <MenuItem onClick={() => navigate("/profile")} className='bg-sky-500 flex  gap-2 text-sm h-auto p-1 pl-2 hover:bg-blue 	
               text-black border-solid border-b-2 border-gray-200'><FaUserCircle/> Profile</MenuItem>
      <MenuItem onClick={()=>navigate("/password")} className='bg-sky-500 flex items-center gap-2 text-sm h-auto p-1 pl-2	hover:bg-blue
               text-black border-solid border-b-2 border-gray-200'> <IoKeyOutline /> Password</MenuItem>
      <MenuItem className='bg-sky-500 flex items-center gap-2 text-sm h-auto p-1 pl-2	hover:bg-blue
               text-black border-solid border-b-2 border-gray-200'><MdOutlineSecurity />2F Security</MenuItem>
      <MenuItem className='bg-sky-500 flex items-center gap-2 text-sm pl-2 h-auto p-1	hover:bg-blue
               text-black border-solid border-b-2 border-gray-200'><RiLogoutCircleRLine />Logout</MenuItem>
      
    </MenuList>
  </Menu>
  </div>
  
          
        </div>
      </div>
    );
  }
  
  export default NavbarInf;
  