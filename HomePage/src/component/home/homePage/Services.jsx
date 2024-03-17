import React from 'react'
import {FaHeart} from "react-icons/fa";
import { useNavigate } from 'react-router';
import ReactStars from 'react-stars';
const service=[
    {
        title:"Youtube Promoting",
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/serviceImage/65cb66b8956bf1707828920.png",
        type:"VLOGER",
        rating:<ReactStars/>,
        price:5000,
        logo:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
        name:"Influencer",
        num:4,
        icon:<FaHeart color='red'/>
    },
    {
        title:"Youtube Promoting",
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/serviceImage/65cb66b8956bf1707828920.png",
        type:"VLOGER",
        rating:<ReactStars/>,
        price:5000,
        logo:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
        name:"Influencer",
        num:4,
        icon:<FaHeart color='red'/>
    },
    {
        title:"Youtube Promoting",
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/serviceImage/65cb66b8956bf1707828920.png",
        type:"VLOGER",
        rating:<ReactStars/>,
        price:5000,
        logo:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
        name:"Influencer",
        num:4,
        icon:<FaHeart color='red'/>
    },
    {
        title:"Youtube Promoting",
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/serviceImage/65cb66b8956bf1707828920.png",
        type:"VLOGER",
        rating:<ReactStars/>,
        price:5000,
        logo:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
        name:"Influencer",
        num:4,
        icon:<FaHeart color='red'/>
    },
    {
        title:"Youtube Promoting",
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/serviceImage/65cb66b8956bf1707828920.png",
        type:"VLOGER",
        rating:<ReactStars/>,
        price:5000,
        logo:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
        name:"Influencer",
        num:4,
        icon:<FaHeart color='red'/>
    },
    {
        title:"Youtube Promoting",
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/serviceImage/65cb66b8956bf1707828920.png",
        type:"VLOGER",
        rating:<ReactStars/>,
        price:5000,
        logo:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
        name:"Influencer",
        num:4,
        icon:<FaHeart color='red'/>
    },
    {
        title:"Youtube Promoting",
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/serviceImage/65cb66b8956bf1707828920.png",
        type:"VLOGER",
        rating:<ReactStars/>,
        price:5000,
        logo:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
        name:"Influencer",
        num:4,
        icon:<FaHeart color='red'/>
    },
    {
        title:"Youtube Promoting",
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/serviceImage/65cb66b8956bf1707828920.png",
        type:"VLOGER",
        rating:<ReactStars/>,
        price:5000,
        logo:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
        name:"Influencer",
        num:4,
        icon:<FaHeart color='red'/>
    },
]
const Services = () => {
    const navigate=useNavigate()
  return (
    <div className=' mt-20 bg-sky-50 h-auto p-20 '>
        <div className='w-[full] flex flex-col justify-center items-center gap-3 bg-transparent'>
        <h1 className='text-xl md:text-4xl font-bold font-serif bg-transparent'>Top Latest Services</h1>
        <p className='text-center w-[350px] md:w-[450px] text-gray-600 bg-transparent'>
            Unlock the full potential of your influence with our 
            comprehensive suite of services tailored to your success.
        </p>
        </div>

        <div className='mb-10 flex  w-[screen] gap-8 flex-wrap justify-center mt-10 bg-transparent'>
            {
                service?.map((item,index)=>(
                    <div key={index} className='w-[280px] md:w-[180px] h-auto p-1 rounded-md bg-transparent'>
                        <div className='bg-transparent'>
                            <img src={item.img} alt="" className='w-full h-[160px] rounded-xl'/>
                            <span className='absolute bg-pink-700  p-1.5 rounded-full font-semibold
                            w-[60px] flex items-center justify-center h-auto text-white text-[8px] ml-2'
                             style={{marginTop:"-150px"}}>{item.type}</span>
                        </div>
                        <h2 className='text-sm font-mono font-semibold mt-1 bg-transparent hover:text-sky-500 cursor-pointer' onClick={()=>navigate("/servicedetail")}>
                            {item.title}</h2>
                        <div className='flex j justify-between p-1 bg-transparent'>
                            <div className='flex font-bold text-blue-700 bg-transparent'>
                            {item.rating}(0)
                            </div>
                             <span className='font-semibold text-blue-700 bg-transparent'>${item.price}</span>
                             </div>
                        <div className='flex items-center  justify-between p-1 bg-transparent'>
                            <div className='flex gap-1 items-center bg-transparent'>
                            <img src={item.logo} alt="" className='w-[30px] h-[30px] rounded-full'/>
                            <span className='font-serif text-sm text-gray-800 bg-transparent'>{item.name}</span>
                        <span className='font-sans text-gray-800 bg-transparent'>{item.num}</span>
                            </div>
                        <span>{item.icon}</span>
                        
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Services