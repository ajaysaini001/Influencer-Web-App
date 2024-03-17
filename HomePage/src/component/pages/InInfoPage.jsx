import React from 'react'
import ReactStars from 'react-stars'

export const InInfoPage = () => {
  return (
        
        <div className='bg-sky-50 '>
        {/* Heading */}
        <div className='flex flex-col items-center  gap-4 h-auto p-10 bg-transparent'>
            <h1 className='font-sans font-semibold text-3xl bg-transparent'>Services</h1>
            <span className='font-sans text-medium bg-transparent'>Home/Services</span>
        </div>
      {/* left*/}
       <div className='flex mt-5 gap-5 '>
        <div className=' w-72 h-auto pl-3 pr-3 bg-sky-50  flex flex-col gap-3 ml-3 '>
            
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
        <div className='flex justify-center  m-auto h-auto '>
            <img src="https://preview.wstacks.com/influencerfly/assets/presets/default/images/nodata.png"
             alt="" className='w-[500px] h-[500px]' />
        </div>
    </div>
    </div>
   
  )
}

export default InInfoPage