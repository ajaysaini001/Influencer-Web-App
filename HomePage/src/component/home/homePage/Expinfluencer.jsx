import React from 'react'
import { useNavigate } from 'react-router'
import ReactStars from 'react-stars'

const influencer=[
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Developer",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Developer",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Developer",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Developer",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Developer",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Developer",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Developer",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Developer",
    },
]
const Expinfluencer = () => {
    const navigate=useNavigate();
  return (
    <div className=' mt-20 h-auto '>
        <div className='w-[full] flex flex-col justify-center items-center gap-3  '>
        <h1 className='text-3xl font-bold '>Experienced Influencer</h1>
        <p className='text-center w-[350px] md:w-[500px] font-sans'>
        Empower your influence and unlock new opportunities with 
        our tailored support and guidance.
        </p>
        </div>

        <div className='mb-10 flex  w-[screen] m-10 p-5 gap-5 flex-wrap justify-center rounded-md mt-10 bg-sky-50'>
            {
                influencer?.map((item,index)=>(
                    <div key={index} className='w-[350px] md:w-[200px] h-auto p-2 rounded-md flex flex-col gap-2 '>
                        <div  className='flex gap-5 md:gap-2 bg-sky-50  md:justify-between'>
                        <img src={item.img} alt="" className='w-[70px] rounded-md' />
                        <div>
                            <h2 className='text-md font-sans font-semibold'>{item.title} US</h2>
                            <div className='flex'>
                                <span>{item.rating}</span>
                                <span>({item.rat})</span>
                                
                            </div>
                            <h2>{item.type}</h2>
                        </div>
                       
                    </div>
                    <button onClick={()=>navigate("/inuser")} className='bg-sky-500 text-white w-full text-xs font-serif h-auto rounded-md p-1'>View Profile</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Expinfluencer