import { Slinding } from '@/constant/data'
import React from 'react'
import { FaRegCircle } from 'react-icons/fa'

const Slider = () => {
  return (
    <section className='max-md:-mt-12   '>
      <div className='  overflow-hidden whitespace-nowrap relative w-full border-4 py-5 md:py-12 border-y-greens-100 bg-wine-100 text-white'>
        <div className='flex animate-slide '>
          
          {
            [...Slinding].map(slide=>{
              return(
                <div className='flex gap-5 justify-between w-full items-center ' key={slide.id}>
                  <div className='flex gap-x-5 w-[250px] md:w-[300px] items-center'>
                    <FaRegCircle className='text-greens-100 w-[12px] md:w-[24px]'/>
                    <p className='p33'>{slide.name}</p>
                  </div>
                  
                  
                </div>
              )
            })
          }
        </div>
        {/* <div className=" w-full h-10 bg-gray-100 flex items-center">
          <div className="animate-loop-scroll">
            <span className="mx-4 text-lg font-bold text-blue-500">Welcome to my awesome website!</span>
            <span className="mx-4 text-lg font-bold text-blue-500">Explore exciting features!</span>
            <span className="mx-4 text-lg font-bold text-blue-500">Stay tuned for more updates!</span>
          </div>
        </div> */}
      
      </div>
    </section>
  )
}

export default Slider