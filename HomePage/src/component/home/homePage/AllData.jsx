import React from 'react';

const data = [
    {
        title: "Influencer",
        num: 2,
        icon: "K",
    },
    {
        title: "Influencer",
        num: 16,
        icon: "K",
    },
    {
        title: "Influencer",
        num: 25,
        icon: "K",
    },
    {
        title: "Influencer",
        num: 15,
        icon: "K",
    },
    
];

const AllData = () => {
    return (
        <div className='w-[screen] h-auto p-5 bg-sky-600'>
            <div  className='flex   w-[screen] gap-12 md:gap-5 flex-wrap ml-16 md:ml-0 justify-center bg-sky-600 mt-10'>
            {
                data?.map((item,index)=>(
                    <div key={index} className='w-[200px] bg-sky-600 '>
                        <div className='flex w-0'>
                        <h1 className="text-6xl font-serif font-bold  bg-sky-600 
                         text-white break-words"> {item.num}
                          </h1>
                        <h1 className="text-6xl font-bold  -webkit-text-stroke-10 bg-sky-600 
                         text-white break-words"> {item.icon}
                          </h1>
                        </div>
                        <h3 className='font-sans text-lg font-semibold text-white bg-sky-600 '>{item.title}</h3>
                        
                    </div>
                ))
            }
        </div>
    </div>
    );
};

export default AllData;
