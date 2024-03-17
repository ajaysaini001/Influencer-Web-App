import { Layout } from 'antd';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import MenuBar from './menubar/Menubar';

// import Profile from './components/navbar/Profile';
// import Passwords from './components/navbar/Password';
// import "./App.css";
import NavbarInf from './component/NavbarInf';
import CreateService from './component/services/CreateService';
import MyState from './context/MyState';

const { Sider } = Layout;

const App = () => {
  const [open, setOpen] = useState(false);
  

  return (
    <div >
     
      <MyState>
      <BrowserRouter>
        <Layout>
          <Sider collapsible collapsed={!open} trigger={null}>
            <MenuBar open={open} setOpen={setOpen} />
          </Sider>
          <Layout>
            <NavbarInf />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/create' element={<CreateService open={open} setOpen={setOpen} />} />
              {/* <Route path='/password' element={<Passwords />} /> */}
            </Routes>
          </Layout>
        </Layout>
      </BrowserRouter>
      </MyState>
    </div>
  );
}

export default App;
