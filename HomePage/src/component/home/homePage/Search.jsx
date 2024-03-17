import React from 'react'

const Search = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 h-auto p-40 bg-sky-50'>
        <div className='flex flex-col gap-3 justify-center text-center bg-transparent'>
         <div style={{marginLeft:"-10rem" ,marginTop:"-20rem", position:"absolute",borderRadius:"100px"}}>
         <img src="https://preview.wstacks.com/influencerfly/assets/presets/default/images/icon/icon1.png" 
          alt="" width="60px" className='r rounded-full ' />
         </div>

         <div style={{marginLeft:"-5rem" ,marginTop:"0rem", position:"absolute",borderRadius:"100px"}}>
         <img src="https://preview.wstacks.com/influencerfly/assets/presets/default/images/icon/icon07.png" 
          alt="" width="60px" className='r rounded-full ' />
         </div>

         <div style={{marginLeft:"-7rem" ,marginTop:"22rem", position:"absolute",borderRadius:"100px"}}>
         <img src="https://preview.wstacks.com/influencerfly/assets/presets/default/images/icon/icon2.png" 
          alt="" width="60px" className='r rounded-full ' />
         </div>

         <div style={{marginLeft:"10rem",position:"relative", marginTop:"-27rem", position:"absolute",borderRadius:"100px"}}>
         <img src="https://preview.wstacks.com/influencerfly/assets/presets/default/images/icon/icon05.png" 
          alt="" width="60px" className='r rounded-full ' />
         </div>

         <div style={{marginLeft:"38rem" ,marginTop:"-20rem", position:"absolute",borderRadius:"100px"}}>
         <img src="https://preview.wstacks.com/influencerfly/assets/presets/default/images/icon/icon4.png" 
          alt="" width="60px" className='r rounded-full ' />
         </div>

         <div style={{marginLeft:"35rem" ,marginTop:"-0rem", position:"absolute",borderRadius:"100px"}}>
         <img src="https://preview.wstacks.com/influencerfly/assets/presets/default/images/icon/icon6.png" 
          alt="" width="60px" className='r rounded-full ' />
         </div>

         <div style={{marginLeft:"37rem" ,marginTop:"25rem", position:"absolute",borderRadius:"100px"}}>
         <img src="https://preview.wstacks.com/influencerfly/assets/presets/default/images/icon/icon3.png" 
          alt="" width="60px" className='r rounded-full ' />
         </div>

        <h3 className='text-center mb-0 font-sans text-lg bg-transparent' 
        style={{marginBottom:"-12px"}}>Influencer Hiring Platform</h3>
        <h1 className='text-3xl md:text-5xl font-bold bg-transparent'>Best <span className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% text-transparent bg-clip-text
         to-emerald-500 to-90%'>Influencer</span> Hiring</h1>
        <h1 className='text-3xl md:text-5xl font-bold bg-transparent'>Platform In The World</h1>
        <p className='font-md text-xs md:text-sm text-center m-auto w-[350px] md:w-[540px] bg-transparent '>Our curated selection of influencers ensures your message reaches the right
             audience, driving engagement and growth for your brand.
        </p>
          <div className='relative  flex justify-end items-center mt-10 w-[350px] md:w-[450px] m-auto md:bg-transparent'>
            <input type="text" placeholder='search' className='w-full hover:cursor-pointer
             absolute h-auto p-3  border-2 border-sky-200 outline-none focus:border-sky-300' />
            <button className='absolute z-50 bg-sky-500 text-white p-2 rounded-md mr-2'>Search</button>
            </div>   
        </div>
    </div>
  )
}

export default Search