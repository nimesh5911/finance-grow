import React from 'react'
// import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className=' text-white max-[1240px] flex flex-col justify-center items-center h-screen'>
        <div className="text-[#00fd9a] text-xl">Grow With Data Analytics</div>
        <p className='text-white lg:text-8xl md:text-6xl sm:text-4xl text-2xl font-extrabold'>Grow With Data</p>
        <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white text-xl'>Fast, Flexible Financing For</h1>
        {/* <Typed strings={['BTB', 'BTC', 'SASS']} className="text-white text-xl" typeSpeed={120} backSpeed={120} loop/> */}
        </div>
        <p className='uppercase text-center'>MONIToR YOUR DATA ANALYTICS TO IMPROVE YOUR BTB, BTC AND SASS PLATFORMS.</p>
        <button className='bg-[#00df69] w-[150px] border rounded-md p-2 my-5 text-black font-bold hover:bg-white hover:border-[#00df69] hover:border-4'>Get Started</button>
    </div>
  )
}

export default Hero