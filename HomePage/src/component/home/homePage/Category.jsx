import React from 'react'

const category=[
    {
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/category/65b0d5c36d4521706087875.png",
        title:"Beauty",
        num:11,
    },
    {
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/category/65b0d5c36d4521706087875.png",
        title:"Beauty",
        num:11,
    },
    {
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/category/65b0d5c36d4521706087875.png",
        title:"Beauty",
        num:11,
    },
    {
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/category/65b0d5c36d4521706087875.png",
        title:"Beauty",
        num:11,
    },
    {
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/category/65b0d5c36d4521706087875.png",
        title:"Beauty",
        num:11,
    },
    {
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/category/65b0d5c36d4521706087875.png",
        title:"Beauty",
        num:11,
    },
    {
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/category/65b0d5c36d4521706087875.png",
        title:"Beauty",
        num:11,
    },
    {
        img:"https://preview.wstacks.com/influencerfly/assets/images/frontend/category/65b0d5c36d4521706087875.png",
        title:"Beauty",
        num:11,
    },
]
const Category = () => {
  return (
    <div className=' mt-20'>
        <div className='w-[full] flex flex-col justify-center items-center gap-3 '>
        <h1 className='text-xl md:text-3xl font-bold font-serif'>Influencer In Different Categories</h1>
        <p className='text-center w-[350px] md:w-[500px] font-sans '>
        Connecting brands with diverse influencers across fashion, tech,
         travel, and lifestyle realms to amplify your message.
        </p>
        </div>
      
        <div className='mb-10 flex w-full md:w-[screen] gap-5 flex-wrap justify-center mt-10'>
            {
                category?.map((item,index)=>(
                    <div key={index} className='b border-2 border-sky-200 shadow-sm mt-5 bg-sky-50 w-1/3 md:w-1/5 h-auto  flex flex-col
                     items-center gap-1 justify-center  p-2 rounded-md'>
                       <div className='w-[70px] h-[70px] border-4 mb-20 rounded-full bg-white flex items-center justify-center absolute'> 
                        <img src={item.img} alt="" className='w-[40px] h-[40px] rounded-lg bottom-2' />
                        </div>
                        <div className='mt-10 text-center bg-sky-50'>
                        <h2 className='font-serif font-semibold bg-sky-50 text-gray-700 text-lg text-md '>
                            {item.title}</h2>
                        <h2 className='bg-sky-50'>({item.num})</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Category