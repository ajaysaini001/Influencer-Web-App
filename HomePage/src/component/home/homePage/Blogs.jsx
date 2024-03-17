import React from 'react'
import { FaVideo } from 'react-icons/fa'
import { useNavigate } from 'react-router'

const blogs=[
    {
        title:"Influencer Spotlight: Interviews",
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/blog/65cb408cb24841707819148.png",
        date:"AN 2024, 07:21 AM",
        icon:<FaVideo/>,
        desc:"Lorem Ipsum is simply dummy text of the printing and typeset...",
        about:"Read More",
    },
    {
        title:"Influencer Spotlight: Interviews",
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/blog/65cb408cb24841707819148.png",
        date:"AN 2024, 07:21 AM",
        icon:<FaVideo/>,
        desc:"Lorem Ipsum is simply dummy text of the printing and typeset...",
        about:"Read More",
    },
    {
        title:"Influencer Spotlight: Interviews",
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/blog/65cb408cb24841707819148.png",
        date:"AN 2024, 07:21 AM",
        icon:<FaVideo/>,
        desc:"Lorem Ipsum is simply dummy text of the printing and typeset...",
        about:"Read More",
    },
    {
        title:"Influencer Spotlight: Interviews",
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/blog/65cb408cb24841707819148.png",
        date:"AN 2024, 07:21 AM",
        icon:<FaVideo/>,
        desc:"Lorem Ipsum is simply dummy text of the printing and typeset...",
        about:"Read More",
    },
    
]

const Blogs = () => {
    const navigate=useNavigate();
  return (
    <div className=' mt-20 p-10'>
        <div className='w-[full] flex flex-col justify-center  gap-3 '>
        <h1 className='text-3xl font-semibold font-sans'>Our Latest Blogs</h1>
        <p className='w-[340px] md:w-[400px] font-sans'>
        Explore our latest blog posts covering a diverse range of topics, 
        from mention a few topics.
        </p>
        </div>

        {/* blogs */}
        <div className='mb-10 flex  w-[screen] gap-3 flex-wrap justify-center mt-10'>
            {
                blogs?.map((item,index)=>(
                    <div key={index} className='w-[270px] md:w-[220px] h-auto p-1 rounded-md flex flex-col gap-2'>
                        {/* <div> */}
                            <img src={item.img} alt="" className='w-full h-[160px] rounded-xl'/>
                            
                        {/* </div> */}
                        <div>
                        <h2 className='text-sm font-mono  font-semibold mt-1 flex items-center gap-1 text-sky-500'>
                            {item.icon}{item.date}</h2>
                        <h2 className='text-xs font-mono font-extrabold hover:text-sky-500 cursor-pointer'
                        onClick={()=>navigate("/blogdetail")} >{item.title}</h2>
                        </div>
                        <p className='font-sans text-pretty text-gray-600'>{item.desc}</p>
                        <h2 className='text-xs font-sans'>{item.about}</h2>
                        
                        
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Blogs