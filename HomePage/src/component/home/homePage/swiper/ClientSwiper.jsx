import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './client.css'

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import ReactStars from 'react-stars';

const client=[
    {
        name:"Emma Doe",
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer01/89/65c72e3c3ea3b1707552316.png",
        type:"Businessman",
        desc:"A Quick Brown fox Jumps over the ledzy Log A Quick Brown fox Jumps over the ledzy Log",
        rating:<ReactStars/>
    },
    {
      name:"Emma Doe",
      img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer01/89/65c72e3c3ea3b1707552316.png",
      type:"Businessman",
      desc:"A Quick Brown fox Jumps over the ledzy Log A Quick Brown fox Jumps over the ledzy Log",
      rating:<ReactStars/>
  },
  {
    name:"Emma Doe",
    img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer01/89/65c72e3c3ea3b1707552316.png",
    type:"Businessman",
    desc:"A Quick Brown fox Jumps over the ledzy Log A Quick Brown fox Jumps over the ledzy Log",
    rating:<ReactStars/>
},
{
  name:"Emma Doe",
  img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer01/89/65c72e3c3ea3b1707552316.png",
  type:"Businessman",
  desc:"A Quick Brown fox Jumps over the ledzy Log A Quick Brown fox Jumps over the ledzy Log",
  rating:<ReactStars/>
},
{
  name:"Emma Doe",
  img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer01/89/65c72e3c3ea3b1707552316.png",
  type:"Businessman",
  desc:"A Quick Brown fox Jumps over the ledzy Log A Quick Brown fox Jumps over the ledzy Log",
  rating:<ReactStars/>
},
{
  name:"Emma Doe",
  img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer01/89/65c72e3c3ea3b1707552316.png",
  type:"Businessman",
  desc:"A Quick Brown fox Jumps over the ledzy Log A Quick Brown fox Jumps over the ledzy Log",
  rating:<ReactStars/>
},
    
]
export default function ClientSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        
        breakpoints={{
          640:{
            slidesPerView:1,
          },
          768:{
            slidesPerView:3,
          }
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="clientSwiper"
        effect="flip" 
        cubeEffect={{
            slideShadows: true,
            shadow: true,
            shadowOffset: 50,
            shadowScale: 0.94,
          }} 
      >
        {/* <SwiperSlide className='slide'>Slide 1</SwiperSlide> */}
        {
        client.map((item, index) => (
                <SwiperSlide key={index} >
                    <div className='flex flex-col border-2 border-sky-100 rounded-md w-[300px] justify-between p-2 gap-3'>
                     <div className='flex justify-between'>
                       <div className='flex gap-4'>
                       <img src={item.img} alt=""
                    className='w-[50px] h-[50px] rounded-full' />
                     <div><h1 className='text-lg font-serif'>{item.name}</h1>
                     <h2 className='font-sans text-sm text-gray-600'>{item.type}</h2>
                     </div>
               
                      </div>
                          <span className='font-bold text-4xl'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgn1utuDDJLOKmWYOE76TZC15nHjNmm78OA&usqp=CAU" alt="" 
                            className='w-[40px]'/>
                          </span>
                    </div>
                    <div>
                      <p className='font-sans leading-6 text-sm'>{item.desc}</p>
                      <h2><ReactStars count={5} size={20} value={4} half={true} color2={'#ffd700'} /></h2>
                    </div>
                  </div>
                </SwiperSlide>
            ))}
        
      </Swiper>
    </>
  );
}




// import React from 'react'
// import ReactStars from 'react-stars'

// const ClientSwiper = () => {
//   return (
//     <div>
//        <div className='flex flex-col border-2 w-[300px] justify-between p-2 gap-3'>
//                     <div className='flex justify-between'>
//                       <div className='flex gap-4'>
//                       <img src="https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png" alt=""
//                     className='w-[50px] h-[50px] rounded-full' />
//                      <div><h1 className='text-lg font-serif'>Influencer</h1><h2 className='font-sans text-gray-600'>Developer</h2></div>
               
//                       </div>
//                           <span className='font-bold text-4xl'>
//                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgn1utuDDJLOKmWYOE76TZC15nHjNmm78OA&usqp=CAU" alt="" 
//                             className='w-[40px]'/>
//                           </span>
//                     </div>
//                     <div>
//                       <p className='font-sans leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero necessitatibus
//                          omnis sit laudantium illum sapiente quo atque ut commodi.</p>
//                       <h2><ReactStars count={5} size={20} value={4} half={true} color2={'#ffd700'} /></h2>
//                     </div>
//                   </div>
//     </div>
//   )
// }

// export default ClientSwiper