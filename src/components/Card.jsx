import React from 'react'
import single from '../assests/single.png'
import double from '../assests/double.png'
import triple from '../assests/triple.png'
import { Box } from '@mui/material'
import Connect from './Connect'


const Card = () => {
    let name = ['Single User', 'Parternership', 'Group Account'];
    let price = ['$ 149', '$ 199', '$ 299'];
    let storage = ['500 GB Storage', '1 TB Storage', '5 TB Storage'];
    let users = ['1 User Allowed', '3 User Allowed', '10 User Allowed'];
    let data = ['2 GB', '10 GB', '20 GB']

   
  return (
    <div className='bg-white py-10 px-5 text-center '>
      <div className='max-w-[1240px] grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-auto'>
        <Box className='flex flex-col items-center rounded-md shadow-lg shadow-black border-black p-5 hover:bg-gray-200'>
        <img src={single} alt="/" className='h-[75px] w-[100px]'/>
        <h1 className='text-black font-bold text-3xl my-5 text-center'>{name[0]}</h1>
        <p className='font-extrabold text-5xl border-b p-8'>{price[0]}</p>
        <p className='font-bold text-lg border-b p-8'>{storage[0]}</p>
        <p className='font-bold text-lg border-b p-8'>{users[0]}</p>
        <p className='font-bold text-lg border-b p-8'>Send up to {data[0]}</p>
        <button className='bg-[#00df69] w-[150px] border rounded-md p-3 my-5 text-black font-medium hover:bg-black hover:border-[#00df69] hover:border-4 hover:text-[#00df69]'>Start Trial</button>
        </Box>
        <Box className='flex flex-col items-center rounded-md shadow-lg shadow-black border-black p-5 hover:bg-gray-200'>
        <img src={double} alt="/" className='h-[75px] w-[100px]'/>
        <h1 className='text-black font-bold text-3xl my-5 text-center'>{name[1]}</h1>
        <p className='font-extrabold text-5xl border-b p-8'>{price[1]}</p>
        <p className='font-bold text-lg border-b p-8'>{storage[1]}</p>
        <p className='font-bold text-lg border-b p-8'>{users[1]}</p>
        <p className='font-bold text-lg border-b p-8'>Send up to {data[1]}</p>
        <button className='bg-[#00df69] w-[150px] border rounded-md p-3 my-5 text-black font-medium hover:bg-black hover:border-[#00df69] hover:border-4 hover:text-[#00df69]'>Start Trial</button>
        </Box>
        <Box className='flex flex-col items-center rounded-md shadow-lg shadow-black border-black p-5 hover:bg-gray-200'>
        <img src={triple} alt="/" className='h-[75px] w-[100px]'/>
        <h1 className='text-black font-bold text-3xl my-5 text-center'>{name[2]}</h1>
        <p className='font-extrabold text-5xl border-b p-8'>{price[2]}</p>
        <p className='font-bold text-lg border-b p-8'>{storage[2]}</p>
        <p className='font-bold text-lg border-b p-8'>{users[2]}</p>
        <p className='font-bold text-lg border-b p-8'>Send up to {data[2]}</p>
        <button className='bg-[#00df69] w-[150px] border rounded-md p-3 my-5 text-black font-medium hover:bg-black hover:border-[#00df69] hover:border-4 hover:text-[#00df69]'>Start Trial</button>
        </Box>
      </div>
      <Connect></Connect>
        
        
    </div>
  )
}

export default Card