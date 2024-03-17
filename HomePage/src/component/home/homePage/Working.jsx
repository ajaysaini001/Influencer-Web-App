import React from 'react'

const Working = () => {
   
    const working=[
        {
            title:"Full Analytics",
            icon:"01",
            desc:"Wmet minim mollit non deserunt ullamco est sit aliqdolor do amet sint. Velit off..."
        },
        {
            title:"Create Account",
            icon:"02",
            desc:"Wmet minim mollit non deserunt ullamco est sit aliqdolor do amet sint. Velit off..."
        },
        {
            title:"Choose Fluencer",
            icon:"03",
            desc:"Wmet minim mollit non deserunt ullamco est sit aliqdolor do amet sint. Velit off..."
        },
    ]
    return (
    <div className=' mt-20'>
        <div className='w-[full] flex flex-col justify-center items-center gap-3 '>
        <h1 className='text-3xl font-semibold font-sans'>How Dose It Work?</h1>
        <p className='text-center w-[350px] md:w-[500px] font-sans'>
        Connecting brands with diverse influencers across fashion, tech,
         travel, and lifestyle realms to amplify your message.
        </p>
        </div>

        <div  className='flex  w-[screen] gap-5 flex-wrap justify-center mt-10'>
            {
                working?.map((item,index)=>(
                    <div key={index} className=''>
                        <h1 className="text-6xl font-bold  -webkit-text-stroke-10
                         text-pink-700 break-words"> {item.icon} </h1>
                        <h3 className='font-sans text-lg font-semibold'>{item.title}</h3>
                        <p className='font-sans text-md text-gray-600 w-[290px]'>{item.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Working