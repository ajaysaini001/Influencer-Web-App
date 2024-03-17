import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Swiper from './swiper/Swiper';
import Category from './Category';
import Services from './Services';
import Working from './Working';
import Expinfluencer from './Expinfluencer';
import HelpPage from './HelpPage';
import AllData from './AllData';
import Question from './Question';
import Client from './Client';
import Blogs from './Blogs';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      
        <Search/>
        <Swiper/>
        <Category/>
        <Services/>
        <Working/>
        <Expinfluencer/>
        <HelpPage/>
        <AllData/>
        <Question/>
        <Client/>
        <Blogs/>
        
    </div>
  )
}

export default HomePage