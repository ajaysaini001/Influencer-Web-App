import React from 'react'
import Home from './component/home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Influencers from './component/home/influencerPage/Influencers'
import ServicesPage from './component/home/servicePage/ServicesPage'
import BlogPage from './component/home/blogPage/BlogPage'
import InInfoPage from './component/pages/InInfoPage'
import ServiceDetails from './component/pages/ServiceDetails'
import InfluUser from './component/pages/InfluUser'
import BlogDetails from './component/pages/BlogDetails'
import Navbar from './component/home/homePage/Navbar'
import Footer from './component/home/homePage/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/influencer" element={<Influencers/>}/>
        <Route path="/service" element={<ServicesPage/>}/>
        <Route path="/blogpage" element={<BlogPage/>}/>
        {/* pages */}
        <Route path="/infopage" element={<InInfoPage/>}/>
        <Route path="/servicedetail" element={<ServiceDetails/>}/>
        <Route path="/inuser" element={<InfluUser/>}/>
        <Route path="/blogdetail" element={<BlogDetails/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App