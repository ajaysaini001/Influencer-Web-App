import React from 'react'
import { IoHome } from 'react-icons/io5'
import ReactStars from 'react-stars'

const BlogDetails = () => {
  return (
    <div className='bg-sky-50'>
        <div className='flex items-center flex-col gap-3 h-auto p-16 bg-transparent'>
            <h2 className='text-3xl font-semibold font-sans bg-transparent'>Blog Details</h2>
            <h3 className='font-sans bg-transparent'>Home/Services</h3>
        </div>


       <div className='flex justify-around bg-sky-50 p-8'>
       <div className='bg-sky-50 '>
            {/* left */}
        
            <div  className='w-[550px] h-full p-5 rounded-md mt-4 '>
                        <div className='bg-transparent'>
                            <img src="https://preview.wstacks.com/influencerfly/assets/images/frontend/blog/65cb40fc2e4091707819260.png"
                             alt="" className='w-full h-[400px] rounded-xl'/>
                            <span className='absolute bg-pink-700  p-1.5 rounded-full font-semibold
                            w-[60px] flex items-center justify-center h-auto text-white text-[8px] ml-2'
                             style={{marginTop:"-23rem"}}>VLOGER</span>
                        </div>
                        <h2 className='text-sm text-sky-500 font-mono font-semibold mt-1 bg-transparent'> JAN 2024, 07:21 AM</h2>
                        <div className='flex gap-2 p-1 bg-transparent'>
                            <div className='flex font-sans bg-transparent'>
                               Parenting |
                            </div>
                             <span className='font-semibold text-blue-700 bg-transparent'><ReactStars/></span>
                             </div>
                      
                            <h1 className='font-mono font-semibold text-lg text-gray-800 bg-transparent'>
                                Behind The Lens: A Day In The Life Of A Content Creator</h1>
                            <p className='font-sans leading-6 mt-3 ml-2'>
                            Step into the realm of influencer excellence where every moment counts. Our dedicated suite 
                            of services is meticulously crafted to propel your influence to unprecedented heights. Whether
                             you're navigating the intricacies of brand collaborations or seeking to optimize audience 
                             engagement, our expertly curated solutions are here to guide you every step of the way.
                              From strategic partnership cultivation to audience segmentation strategies, we're committed 
                              to equipping you with the arsenal necessary to thrive in the dynamic landscape of social influence. 
                             Join our vibrant community today and embark on a transformative journey towards unparalleled influence
                            </p>

                            <p className='font-sans leading-6 mt-3 ml-2'>
                          
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                             roots in a piece of classical Latin literature from 45 BC, making it over 
                             2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
                              in Virginia, looked up one of the more obscure Latin words, consectetur,
                               from a Lorem Ipsum passage, and going through the cites of the word in 
                               classical literature, discovered the undoubtable source. Lorem Ipsum comes 
                               from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                               (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book 
                               is a treatise on the theory of ethics, very popular during the Renaissance.
                                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a 
                                line in section 1.10.32.
                            </p>

                          

            </div>

          
        </div>
          {/* right */}
          <div className='w-72 bg-sky-50 flex flex-col h-auto p-5 gap-10 sticky'>
            <div className='flex flex-col gap-2 w-[250px] justify-center items-center p-20 rounded-md sticky'>
                <div className='flex items-center bg-transparent'>
                <div className='w-[30px] h-[30px] flex  rounded items-center  justify-center bg-sky-500 '>
                <IoHome color='white' size={18} className='bg-transparent'/></div>
                <div className='flex bg-transparent'><h1 className='font-bold bg-transparent text-2xl'>Influencer</h1><span className='font-bold bg-transparent text-2xl text-sky-500'>Fly</span></div>
        </div>
                </div>
                <div  className='w-[250px] h-auto p-2 rounded-md flex flex-col gap-5 sticky '>
                     <h1 className='font-sans font-semibold'>Hot Topics</h1>
                        <div  className='flex gap-2  justify-between'>
                        <img src="https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png"
                             alt="" className='w-[70px] rounded-md' />
                        <div>
                            <h2 className='text-xs font-sans '>Influencer Spotlight: Interviews with Industry Lea...</h2>
                           
                            <h2 className='font-sans text-sm mt-3'>Jan 2024, 07:21 AM</h2>
                        </div>
                       
                    </div>

                    <div  className='flex gap-2  justify-between'>
                        <img src="https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png"
                             alt="" className='w-[70px] rounded-md' />
                        <div>
                            <h2 className='text-xs font-sans '>Influencer Spotlight: Interviews with Industry Lea...</h2>
                           
                            <h2 className='font-sans text-sm mt-3'>Jan 2024, 07:21 AM</h2>
                        </div>
                       
                    </div>

                    <div  className='flex gap-2  justify-between'>
                        <img src="https://preview.wstacks.com/influencerfly/assets/images/user/influencerProfile/influencer/88/65b9ed322a49a1706683698.png"
                             alt="" className='w-[70px] rounded-md' />
                        <div>
                            <h2 className='text-xs font-sans '>Influencer Spotlight: Interviews with Industry Lea...</h2>
                           
                            <h2 className='font-sans text-sm mt-3'>Jan 2024, 07:21 AM</h2>
                        </div>
                       
                    </div>
                    
                    </div>
            </div>
       </div>
       
    </div>
  )
}

export default BlogDetails