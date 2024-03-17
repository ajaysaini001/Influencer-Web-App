import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import ReactStars from 'react-stars'
// import Services from '../homePage/Services';

const ServicesPage = () => {
 
    const allService=[
        {
            title:"Youtube Promoting",
            img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/serviceImage/65cb66b8956bf1707828920.png",
            type:"VLOGER",
            rating:<ReactStars/>,
            price:5000,
            logo:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer04/92/65c72cdc7215f1707551964.png",
            name:"Influencer",
            num:4,
            icon:<FaHeart color='red'/>,
            activity:"Beauty",
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
            icon:<FaHeart color='red'/>,
            activity:"Vloger",
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
            icon:<FaHeart color='red'/>,
            activity:"Vloger",
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
            icon:<FaHeart color='red'/>,
            activity:"Beauty",
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
            icon:<FaHeart color='red'/>,
            activity:"Games",
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
            icon:<FaHeart color='red'/>,
            activity:"Games",
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
            icon:<FaHeart color='red'/>,
            activity:"lifestyle",
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
            icon:<FaHeart color='red'/>,
            activity:"Pet",
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
            icon:<FaHeart color='red'/>,
            activity:"Travel",
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
            icon:<FaHeart color='red'/>,
            activity:"Fashion",
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
            icon:<FaHeart color='red'/>,
            activity:"Parenting",
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
            icon:<FaHeart color='red'/>,
            activity:"vloger",
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
            icon:<FaHeart color='red'/>,
            activity:"parenting",
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
            icon:<FaHeart color='red'/>,
            activity:"Parenting",
        },
    ]

const [search,setSearch]=useState("");
// const filterData=allCategory.filter((item)=>item.type.toLowerCase().includes(search));

// category
const [category,setCategory]=useState("");
const filterData=allService.filter((item)=>item.activity.toLowerCase().includes(category));

  return (
    <div className='bg-sky-50 '>
        {/* Heading */}
        <div className='flex flex-col items-center  gap-4 h-auto p-10'>
            <h1 className='font-sans font-semibold text-3xl'>Services</h1>
            <span className='font-sans text-medium'>Home/Services</span>
        </div>
      {/* all influencer */}
       <div className='flex mt-10  '>
        {/* filtering */}
        <div className=' w-1/4 h-auto p-3 bg-sky-50  flex flex-col gap-2 ml-3 '>
            {/* search */}
            <div className='flex flex-col gap-3 h-auto p-3 '>
                <h3 className='font-sans'>Search</h3>
                <input type="text" placeholder='search'
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                className='h-auto p-1.5 rounded-md border-2 border-sky-100 focus:border-2 focus:border-sky-300'/>
            </div>

            {/* categories */}
            <div className='flex flex-col gap-2 h-auto p-2 rounded-md'>
                <h2 className='font-mono mb-1'>Categories</h2>
                <div className='flex items-center gap-2 ml-1 '>
                <input 
                    type="radio" 
                    id="beauty" 
                    name="Beauty" 
                    value="beauty"
                    checked={category === "beauty"}
                    onChange={(e) => setCategory(e.target.value)}
                    className='bg-blue text-red-800'
                   />
                    <label htmlFor="beauty" className=' font-mono text-gray-600 text-xs font-semibold antialiased'>Beauty</label>
                 </div>

                 <div className='flex items-center gap-2 ml-1'>
                 <input 
                    type="radio" 
                    id="beauty" 
                    name="Beauty" 
                    value="vloger"
                    checked={category === "vloger"}
                    onChange={(e) => setCategory(e.target.value)}
                    className='bg-blue text-red-800'
                   />
                   <label htmlFor="beauty" className='font-mono text-gray-600 text-xs font-semibold antialiased'>Vloger</label>
                 </div>

                 <div className='flex items-center gap-2 ml-1'>
                 <input 
                    type="radio" 
                    id="beauty" 
                    name="Beauty" 
                    value="games"
                    checked={category === "games"}
                    onChange={(e) => setCategory(e.target.value)}
                    className='bg-blue text-red-800'
                   />
                   <label htmlFor="beauty" className='font-mono text-gray-600 text-xs font-semibold antialiased'>Games</label>
                 </div>

                 <div className='flex items-center gap-2 ml-1'>
                 <input 
                    type="radio" 
                    id="beauty" 
                    name="Beauty" 
                    value="lifestyle"
                    checked={category === "lifestyle"}
                    onChange={(e) => setCategory(e.target.value)}
                    className='bg-blue text-red-800'
                   />
                   <label htmlFor="beauty" className='font-mono text-gray-600 text-xs font-semibold antialiased'>Life Style</label>
                 </div>

                 <div className='flex items-center gap-2 ml-1'>
                 <input 
                    type="radio" 
                    id="beauty" 
                    name="Beauty" 
                    value="pet"
                    checked={category === "pet"}
                    onChange={(e) => setCategory(e.target.value)}
                    className='bg-blue text-red-800'
                   />
                   <label htmlFor="beauty" className='font-mono text-gray-600 text-xs font-semibold antialiased'>Pet</label>
                 </div>

                 <div className='flex items-center gap-2 ml-1'>
                 <input 
                    type="radio" 
                    id="beauty" 
                    name="Beauty" 
                    value="travel"
                    checked={category === "travel"}
                    onChange={(e) => setCategory(e.target.value)}
                    className='bg-blue text-red-800'
                   />
                   <label htmlFor="beauty" className='font-mono text-gray-600 text-xs font-semibold antialiased'>Travel</label>
                 </div>

                 <div className='flex items-center gap-2 ml-1'>
                 <input 
                    type="radio" 
                    id="beauty" 
                    name="Beauty" 
                    value="fashion"
                    checked={category === "fashion"}
                    onChange={(e) => setCategory(e.target.value)}
                    className='bg-blue text-red-800'
                   />
                   <label htmlFor="beauty" className='font-mono text-gray-600 text-xs font-semibold antialiased'>Fashion</label>
                 </div>

                 <div className='flex items-center gap-2 ml-1'>
                 <input 
                    type="radio" 
                    id="beauty" 
                    name="Beauty" 
                    value="parenting"
                    checked={category === "parenting"}
                    onChange={(e) => setCategory(e.target.value)}
                    className='bg-blue text-red-800'
                   />
                   <label htmlFor="beauty" className='font-mono text-gray-600 text-xs font-semibold antialiased'>Parenting</label>
                 </div>

                
            </div>

            {/* rating */}

            <div className='flex flex-col h-auto p-2 rounded-md'>
                <h2 className='font-mono'>Rating</h2>
                <div className='flex gap-2'>
                    <input type="radio" />
                    <ReactStars size={18} className='flex gap-3' value={5} count={5} edit={false} color2=' #29a7db'/>
                </div>

                <div className='flex gap-2'>
                    <input type="radio" />
                    <ReactStars size={18} className='flex gap-3' value={4} count={4} edit={false} color2=' #29a7db'/>
                </div>

                <div className='flex gap-2'>
                    <input type="radio" />
                    <ReactStars size={18} className='flex gap-3' value={3} count={3} edit={false} color2=' #29a7db'/>
                </div>

                <div className='flex gap-2'>
                    <input type="radio" />
                    <ReactStars size={18} className='flex gap-3' value={2} count={2} edit={false} color2=' #29a7db'/>
                </div>

                <div className='flex gap-2'>
                    <input type="radio" />
                    <ReactStars size={18} className='flex gap-3' value={1} count={1} edit={false} color2=' #29a7db'/>
                </div>
            </div>

            {/* shoerBY */}
            <div className='flex flex-col gap-2 h-auto p-2 rounded-md'>
                <h3 className='font-mono '>Sort By</h3>
                <div className='flex items-center gap-2 ml-2'>
                <input 
                    type="radio" 
                    id="top" 
                    name="sort" 
                    value="parenting"
                    checked={category === "parenting"}
                    onChange={(e) => setCategory(e.target.value)}
                    className='bg-blue text-red-800'
                   />                    <label htmlFor="top" className=' font-mono text-xs font-semibold antialiased text-gray-600'>Top Rated</label>
                </div>

                <div className='flex items-center gap-2 ml-2'>
                    <input type="radio" id="top" name='sort'/>
                    <label htmlFor="top" className=' font-mono text-xs font-semibold antialiased text-gray-600'>latest</label>
                </div>
            </div>
        </div>

        {/* right */}
        <div className='w-full'>
        <div className=' flex  w-[screen] p-5 gap-5 flex-wrap justify-center rounded-md mt-0 bg-sky-50'>
            {
                filterData?.map((item,index)=>(
                    <div key={index} className='w-[180px] h-auto p-1 rounded-md bg-transparent'>
                        <div className='bg-transparent'>
                            <img src={item.img} alt="" className='w-full h-[160px] rounded-xl'/>
                            <span className='absolute bg-pink-700  p-1.5 rounded-full font-semibold
                            w-[60px] flex items-center justify-center h-auto text-white text-[8px] ml-2'
                             style={{marginTop:"-150px"}}>{item.type}</span>
                        </div>
                        <h2 className='text-sm font-mono font-semibold mt-1 bg-transparent'>{item.title}</h2>
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
    </div>
  )
}

export default ServicesPage