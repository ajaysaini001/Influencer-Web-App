import React from 'react'
import ReactStars from 'react-stars'
import { FaHeart } from 'react-icons/fa'
export const InfluUser = () => {
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
  return (
        
        <div className='bg-sky-50 '>
        {/* Heading */}
        <div className='flex flex-col items-center  gap-4 h-auto p-10 bg-transparent'>
            <h1 className='font-sans font-semibold text-3xl bg-transparent'>Influencer User</h1>
            <span className='font-sans text-medium bg-transparent'>Home/Influencer User</span>
        </div>
      
       <div className='flex mt-5  '>
        {/* left*/}
        <div className=' w-96 h-auto  pr-3 bg-sky-50  flex flex-col gap-3 ml-3 '>
            
            <div className='flex flex-col items-center h-auto p-3'>
                <img src="https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer01/89/65c72e3c3ea3b1707552316.png" 
                alt="" className='w-[65px] h-[65px] rounded-full'/>
                <h2 className='font-sans font-semibold text-base'>Influencer 01</h2>
                <span className='font-sans'>Vlogger</span>
                <ReactStars size={18} value={4} className='flex'/>
                <button className='bg-sky-600 text-white rounded-md font-semibold font-sans text-xs h-auto p-1.5 w-full'>Hire Me</button>
            </div>

            {/* desciption */}
            <div className='flex flex-col gap-2 h-auto p-3 rounded-md'>
                <h2 className='font-sans font-semibold mb-1'>Description</h2>
                <p className='  font-sans text-gray-700 '>In publishing and graphic design, Lorem ipsum is a placeholder
                     text commonly used to demonstrate the visual</p>
              </div>

            {/* skills */}

            <div className='flex flex-col h-auto p-2 rounded-md gap-1.5'>
            <h2 className='font-sans text-base font-semibold mb-1'>Skills</h2>
                <span className='  text-xs font-sans ml-3 bg-sky-50 w-[90px] p-2  '>67923908723</span>
            </div>

            {/* languages */}
            <div className='flex flex-col gap-2 h-auto p-2 rounded-md'>
                <h3 className='font-sans text-base font-semibold mb-1'>Languages</h3>
                <div className='flex ml-2 gap-5 flex-col'>
                    <h3 className='font-sans font-semibold text-xs'>Name: Albanian</h3>
                    <div className='flex  flex-wrap gap-3'>
                    <span><h4 className='text-xs  font-sans text-sky-600 bg-sky-100 w-24 text-center p-0.5'>Listing Fluent</h4></span>
                    <span><h4 className='text-xs ml-3 font-sans text-sky-600 bg-sky-100 w-24 text-center p-0.5'>Listing Fluent</h4></span>
                    <span><h4 className='text-xs font-sans text-sky-600 bg-sky-100 w-24 text-center p-0.5'>Listing Fluent</h4></span>      
               
                    </div>
                </div>

              
                <div className='flex ml-2 gap-5 flex-col'>
                    <h3 className='font-sans font-semibold text-xs'>Name: Albanian</h3>
                    <div className='flex  flex-wrap gap-3'>
                    <span><h4 className='text-xs  font-sans text-sky-600 bg-sky-100 w-24 text-center p-0.5'>Listing Fluent</h4></span>
                    <span><h4 className='text-xs ml-3 font-sans text-sky-600 bg-sky-100 w-24 text-center p-0.5'>Listing Fluent</h4></span>
                    <span><h4 className='text-xs font-sans text-sky-600 bg-sky-100 w-24 text-center p-0.5'>Listing Fluent</h4></span>      
               
                    </div>
                </div>

              
                <div className='flex ml-2 gap-5 flex-col'>
                    <h3 className='font-sans font-semibold text-xs'>Name: Albanian</h3>
                    <div className='flex  flex-wrap gap-3'>
                    <span><h4 className='text-xs  font-sans text-sky-600 bg-sky-100 w-24 text-center p-0.5'>Listing Fluent</h4></span>
                    <span><h4 className='text-xs ml-3 font-sans text-sky-600 bg-sky-100 w-24 text-center p-0.5'>Listing Fluent</h4></span>
                    <span><h4 className='text-xs font-sans text-sky-600 bg-sky-100 w-24 text-center p-0.5'>Listing Fluent</h4></span>      
               
                    </div>
                </div>
            </div>

            {/* client review */}
            <div className='flex flex-col h-[300px] p-2 rounded-md gap-1.5 '>
            <h2 className='font-sans text-base font-semibold mb-1'>Client Review</h2>
                <span className='  text-xs font-sans ml-3 bg-sky-50 w-[90px] p-2   '>No Data</span>
            </div>
        </div>

        {/* right */}
        <div className='flex  w-full gap-8 flex-wrap justify-center bg-transparent mt-5'>
            {
                service?.map((item,index)=>(
                    <div key={index} className='w-[180px] h-auto p-1 rounded-md bg-transparent'>
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
    </div>
   
  )
}



export default InfluUser