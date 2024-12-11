import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    // max-sm:bg-contain max-sm:bg-center
    <header className='bg-mobile   md:bg-banner bg-cover  bg-no-repeat text-black min-h-[750px]'>
      <Navbar/>
      <div className='grid  justify-center items-center  '>
          <div className=' w-[79%] md:w-[80%] mx-auto mt-10  sm:mt-20 text-center '>
            <h2 className='headerText'>London&apos;s First Dressing Focused Salad Bar</h2>
            <p className='p1 py-8 md:w-7/12 mx-auto'>Fresh. Vibrant. Customizable. Salads Like You&apos;ve Never Seen or tried, just around the corner</p>
            <div className='flex max-sm:flex-col gap-6 w-full items-center justify-center'>
              <button className='greenButton max-md:w-[150px]' type='button'>ORDER NOW</button>
              <button className='py-4 px-5 md:text-[16px] uppercase md:font-medium rounded-[8px] transition-all duration-300 bg-transparent border-2 border-greens-100' type="button">EXPLORE MENU</button>
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header