import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import ReactStars from 'react-stars';
import { useNavigate } from 'react-router';

const cards=[
  {
    title:"Influencer 08",
    type:"Developer",
    img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
  },
  {
    title:"Influencer 08",
    type:"Developer",
    img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
  },
  {
    title:"Influencer 08",
    type:"Developer",
    img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
  },
  {
    title:"Influencer 08",
    type:"Developer",
    img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
  },
  {
    title:"Influencer 08",
    type:"Developer",
    img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
  },
  {
    title:"Influencer 08",
    type:"Developer",
    img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
  },
  {
    title:"Influencer 08",
    type:"Developer",
    img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
  },
]
export default function App() {
  const navigate=useNavigate();
  return (
    <>
      <Swiper
       spaceBetween={20}
       slidesPerView={1}
       breakpoints={{
         // when window width is >= 640px
         640: {
           slidesPerView: 2,
         },
         // when window width is >= 768px
         768: {
           slidesPerView: 3,
         },
        
       }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        effect="flip" 
        cubeEffect={{
            slideShadows: true,
            shadow: true,
            shadowOffset: 50,
            shadowScale: 0.94,
          }} 
      >
        {
          cards?.map((item,index)=>(
            <SwiperSlide key={index} className='slide'>
                <div className='flex justify-between p-5 md:justify-normal border-2 border-sky-200 w-[250px] md:w-[320px]  md:gap-2 md:p-2'>
              <img src={item.img} alt=""
              className='image' />
              <div>
                <h2 className='text-base font-semibold font-serif hover:text-sky-500 cursor-pointer' onClick={()=>navigate("/infopage")}>{item.title}</h2>
                <h2><ReactStars  count={5} size={20} value={4} half={true}
                        color2={'#ffd700'} />
                  </h2>
                <h2 className='font-semibold text-sky-500 text-sm text-left'>{item.type}</h2>
              </div>
            </div>
        </SwiperSlide>
          ))
        }
        
      </Swiper>
    </>
  );
}


// import React from 'react'
// import ReactStars from 'react-stars'

// const Swiper = () => {
//   return (
//     <div className='flex border-2 w-[200px] justify-between p-2'>
//       <img src="https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png" alt=""
//       className='w-[70px] h-[70px]' />
//       <div>
//         <h2>Influencer 08</h2>
//         <h2><ReactStars/></h2>
//         <h2>Developer</h2>
//       </div>
//     </div>
//   )
// }

// export default Swiper