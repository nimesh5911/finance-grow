import React from 'react'
import Laptop from '../assests/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] grid md:grid-cols-2 bg-white'>
          <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4' />
          <div className='flex flex-col justify-center items-center md:items-start'>
            <p className='uppercase text-[#00df9a] font-bold'>data analytics dashboard</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptate voluptatum blanditiis explicabo ipsa aut, beatae dolor quas recusandae veniam ea delectus ab ut totam, est nostrum enim quasi dolore harum vel dignissimos pariatur molestiae? Recusandae ut, quia id ducimus qui omnis nisi natus ratione voluptatem accusantium accusamus praesentium maiores voluptas reiciendis. Aliquam dolore aspernatur recusandae eos corrupti minima adipisci, atque saepe impedit nisi porro, dolorem corporis suscipit ad quia deleniti velit aliquid, labore dolores perspiciatis est perferendis? Necessitatibus quae similique, totam eaque quis facilis fugit voluptas repudiandae. Itaque natus vero rerum vitae, illo harum, quisquam facere vel illum sit maxime quia sunt obcaecati molestiae quasi repellat mollitia quibusdam voluptates eum? Itaque doloremque qui vitae fugiat. Quam, similique architecto quis laboriosam inventore, voluptas exercitationem facilis minima rem quia magnam quidem?</p>
            <button className='bg-black w-[150px] border rounded-md p-2 my-5 text-[#00df69] font-bold hover:bg-[#00df69] hover:text-black hover:border-[#00df69] hover:border-2'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default Analytics