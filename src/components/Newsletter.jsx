import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1280px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 md:flex md:justify-center md:items-center md:p-5'>
                <h1 className='md:text-5xl sm:text-3xl text-xl font-bold text-center'>Want Tips And Tricks To Optimize your Flow?</h1>
                <p className='md:text-4xl sm:text-2xl text-lg text-center md:p-3 lg:py-9'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col items-center p-5'>
                <input type="email" name="email" id="email" placeholder='Enter Email-Id' className='p-3 text-black rounded-md w-full flex text-center' />
                <button className='bg-[#00df69] w-[150px] border rounded-md p-3 my-5 text-black font-medium hover:bg-white hover:border-[#00df69] hover:border-4'>Notify Me</button>
                </div>
                <p className='text-center'>We care bout the protection of your data. Read our <a href="www.google.com" className='text-[#00df69]'>Privacy Policy</a>.</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter