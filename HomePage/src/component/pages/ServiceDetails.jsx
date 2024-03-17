import React from 'react'
import ReactStars from 'react-stars'

const ServiceDetails = () => {
  return (
    <div className='bg-sky-50'>
        <div className='flex items-center flex-col gap-3 h-auto p-20 bg-transparent'>
            <h2 className='text-3xl font-sans bg-transparent'>Service Details</h2>
            <h3 className='font-sans bg-transparent'>Home/Services</h3>
        </div>


       <div className='flex justify-around bg-sky-50 p-10'>
       <div className='bg-sky-50 mt- '>
            {/* left */}
        
            <div  className='w-[550px] h-full p-5 rounded-md mt-4 '>
                        <div className='bg-transparent'>
                            <img src="https://preview.wstacks.com/influencerfly/assets/images/frontend/serviceImage/65cb66b8956bf1707828920.png"
                             alt="" className='w-full h-[400px] rounded-xl'/>
                            <span className='absolute bg-pink-700  p-1.5 rounded-full font-semibold
                            w-[60px] flex items-center justify-center h-auto text-white text-[8px] ml-2'
                             style={{marginTop:"-23rem"}}>VLOGER</span>
                        </div>
                        <h2 className='text-lg font-mono font-semibold mt-1 bg-transparent'>Youtube Promoting</h2>
                        <div className='flex gap-2 p-1 bg-transparent'>
                            <div className='flex font-sans bg-transparent'>
                               Parenting |
                            </div>
                             <span className='font-semibold text-blue-700 bg-transparent'><ReactStars/></span>
                             </div>
                      
                            <h1 className='font-mono font-semibold text-lg text-gray-800 bg-transparent'>Over View</h1>
                            <p className='font-sans leading-6 mt-3 ml-2'>
                            Step into the realm of influencer excellence where every moment counts. Our dedicated suite 
                            of services is meticulously crafted to propel your influence to unprecedented heights. Whether
                             you're navigating the intricacies of brand collaborations or seeking to optimize audience 
                             engagement, our expertly curated solutions are here to guide you every step of the way.
                              From strategic partnership cultivation to audience segmentation strategies, we're committed 
                              to equipping you with the arsenal necessary to thrive in the dynamic landscape of social influence. 
                             Join our vibrant community today and embark on a transformative journey towards unparalleled influence
                            </p>

                            <h1 className='font-mono font-semibold text-base text-gray-800 bg-transparent mt-5'>Tags</h1>
                            <div className='flex j gap-20 ml-1 mt-2'>
                                <div className='flex items-center gap-2 '><span className='w-[7px] h-[7px] text-4xl text-sky-600 bg-sky-600 '></span><span className='font-sans'>business</span></div>
                                <div className='flex items-center gap-2 '><span className='w-[7px] h-[7px] text-4xl text-sky-600 bg-sky-600 '></span><span className='font-sans'>business</span></div>
                                <div className='flex items-center gap-2 '><span className='w-[7px] h-[7px] text-4xl text-sky-600 bg-sky-600 '></span><span className='font-sans'>business</span></div>
                            </div>
                       
                            <h1 className='font-mono font-semibold text-base text-gray-800 bg-transparent mt-5'>Customer Review</h1>
                            <span className='font-sans mt-5'>No Data</span>

                            <h1 className='font-mono font-semibold text-base text-gray-800 bg-transparent mt-5'>Write Review</h1>
                            <span><ReactStars size={24} half={true} value={0} count={5} className='flex gap-1'/></span>                  

                            <textarea placeholder='Write your Review ' className=' w-full h-auto p-16 border-2 rounded-md align-text-top pl-2 pt-2'>

                            </textarea>
            </div>

          
        </div>
          {/* right */}
          <div className='w-72 bg-sky-50 flex flex-col h-auto p-5 gap-10'>
                <div className='flex flex-col gap-2 w-[250px] justify-center items-center p-4 rounded-md'>
                    <h1 className='font-bold font-sans text-lg'>Price</h1>
                    <h1 className='font-bold text-lg text-blue-500'>$700.00</h1>
                    <span className='font-sans'>youtube</span>
                    <span className='font-sans'>live</span>
                    <button className='bg-sky-500 text-white w-full text-xs font-serif h-auto rounded-md p-1'>View Profile</button>
                    
                </div>
                <div  className='w-[250px] h-auto p-2 rounded-md flex flex-col gap-2 '>
                        <div  className='flex gap-2  justify-between'>
                        <img src="https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png"
                             alt="" className='w-[70px] rounded-md' />
                        <div>
                            <h2 className='text-md font-sans font-semibold'>Influencer US</h2>
                            <div className='flex'>
                                <span><ReactStars/></span>
                                <span>(2)</span>
                                
                            </div>
                            <h2>Developer</h2>
                        </div>
                       
                    </div>
                    <button className='bg-sky-500 text-white w-full text-xs font-serif h-auto rounded-md p-1'>View Profile</button>
                    </div>
            </div>
       </div>
       
    </div>
  )
}

export default ServiceDetails