import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css'; // Correct import for Bootstrap CSS
import { useNavigate } from 'react-router';
import { FaUserCircle } from 'react-icons/fa';
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";

import "../../App.css";
import { Button, Menu } from 'antd';
function DropButton() {

   const menu = (
      <Menu>
        <Menu.Item key="1">Power</Menu.Item>
        <Menu.Item key="1">Power</Menu.Item>
        <Menu.Item key="1">Power</Menu.Item>
      </Menu>
    );
    const navigate = useNavigate();
    return (
       <>
        <DropdownButton title="User" className='bg-sky-400 border-none h-au6o  text-black outline-none'>
            <Dropdown.Item href="#/profile" onClick={() => navigate("/profile")} 
            className='bg-sky-50 flex items-center gap-2 text-sm justify-center text-left	
             text-black border-solid border-b-2 border-gray-200'>
               <FaUserCircle/> Profile
            </Dropdown.Item>
            <Dropdown.Item href="#/password" onClick={()=>navigate("/password")}
             className='bg-sky-50 text-black flex items-center gap-2 text-sm justify-center
            border-solid border-b-2 border-gray-200 text-left'  >
               <IoKeyOutline /> Password
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className='bg-sky-50 text-black flex items-center gap-2 text-sm justify-center
            border-solid border-b-2 border-gray-200'><MdOutlineSecurity />2F Security</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className='bg-sky-50 text-black flex items-center gap-2 text-sm justify-center'>
            <RiLogoutCircleRLine />Logout</Dropdown.Item>
        </DropdownButton>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button type="primary" shape="round">
            Actions
          </Button>
        </Dropdown>



       </>
    );
}

export default DropButton;
