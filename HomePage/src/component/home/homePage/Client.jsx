import React from 'react'
import ClientSwiper from './swiper/ClientSwiper'

const Client = () => {
  return (
    <div className=' mt-20'>
        <div className='w-[full] flex flex-col justify-center items-center gap-3 '>
        <h1 className='text-3xl font-semibold font-sans'>Our Client Feedback</h1>
        <p className='text-center w-[350px] md:w-[500px] font-sans'>
        Maecenas nec odio etante tincidunt tempus. Donec vitae sapien
         libero venenatis faucibus
        </p>
        </div>

        <div >
            <ClientSwiper/>
        </div>
    </div>
  )
}

export default Client