import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4 '>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4 '/>
        <div className='flex flex-col justify-center ' >
            <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Data Analytics Centrally </h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, repellendus? Autem ab asperiores debitis impedit, excepturi dolorum error quidem, animi fugit atque rerum! Quo vel inventore non quas laudantium? Nesciunt.</p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md my-6 mx-auto  py-3 tect-black font-bold'>Get Started </button>
        
        </div>

      </div>
    </div>
  )
}

export default Analytics
