import React, { useState } from 'react'
import ReactStars from 'react-stars'

const Influencers = () => {
 
    const allCategory=[
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Vloger",
        activity:"Beauty",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Youtuber",
        activity:"Games",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Tiktoker",
        activity:"Games",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Tiktoker",
        activity:"Lifestyle",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Developer",
        activity:"pet",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Developer",
        activity:"pet",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Developer",
        activity:"Vlogers",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Influencer",
        activity:"Fashion",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Vloger",
        activity:"Travel",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Developer",
        activity:"Travel",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Developer",
        activity:"Travel",
    },
    {
        title:"Influencer",
        num:1,
        img:"https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png",
        rating:<ReactStars/>,
        rat:2,
        type:"Developer",
        activity:"Parenting",
    },
]

const [search,setSearch]=useState("");
// const filterData=allCategory.filter((item)=>item.type.toLowerCase().includes(search));

// category
const [category,setCategory]=useState("");
const filterData=allCategory.filter((item)=>item.activity.toLowerCase().includes(category));

  return (
    <div className='bg-sky-50 '>
        {/* Heading */}
        <div className='flex flex-col items-center mt-10 gap-4'>
            <h1 className='font-sans font-semibold text-3xl'>Influencers</h1>
            <span className='font-sans text-medium'>Home/Influencers</span>
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
                    <div key={index} className='w-[200px] h-auto p-2 rounded-md flex flex-col gap-2 '>
                        <div  className='flex gap-2 bg-sky-50 justify-between'>
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
                    <button className='bg-sky-500 text-white w-full text-xs font-serif h-auto rounded-md p-1'>View Profile</button>
                    </div>
                ))
            }
        </div>
        </div>
        </div>
    </div>
  )
}

export default Influencers