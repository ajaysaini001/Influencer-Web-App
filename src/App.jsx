import { Layout } from 'antd';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import MenuBar from './components/menu/MenuBar';
import Navbar from './components/navbar/Navbar';
import Profile from './components/navbar/Profile';
import Passwords from './components/navbar/Password';
import "./App.css";

const { Sider } = Layout;

const App = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div >
     
      <BrowserRouter>
        <Layout>
          <Sider collapsible collapsed={!open} trigger={null}>
            <MenuBar open={open} setOpen={setOpen} />
          </Sider>
          <Layout>
            <Navbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/password' element={<Passwords />} />
            </Routes>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
