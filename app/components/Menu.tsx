'use client'
import { MenuList } from '@/constant/data'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

const Menu = () => {
  return (
    <section className='sections'>
        <div className=''>
          <div className='gridCenter'>
            <Fade><h3 className='header3'>A Menu That&apos;s Dressed to Impress</h3></Fade>
            <p className='p2 md:w-4/5 capitalize mx-auto mt-6 mb-8'>From signature creations to your Custom-Made masterpiece, every bite is a celebration of freshness and flavour</p>
          </div>
          {/* <div className='px-[26px] w-full mx-auto '> */}
          {/* {grid md:grid-cols-2 lg:grid-cols-3 */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3  md:gap-8 gap-y-10 '>
              {
                MenuList.map(menu=>{
                  return(
                    <div key={menu.id} className=' mx-auto md:w-full shadow-lg rounded-[20px]'>
                      <Image src={menu.img} alt='Salad Logo' height={273} width={395} className=''/> 
                      <div className='p-4 md:p-6 '>
                        <h4 className='header4'>{menu.title}</h4>
                        <p className=' p3 mt-4 mb-[10px]'>{menu.description}</p>
                        <div className='flex  justify-between items-center font-bold text-[16px] leading-[30px]'>
                          <p className='text-[#AD343E] font-bold text-[16px] leading-[30px]'>{menu.price}</p>
                          <button className='py-4 px-5 border text-white text-[16px]  md:font- leading-5 rounded-[8px] bg-wine-100 transition-all duration-300 hover:bg-white hover:border hover:border-wine-100 hover:text-wine-100 ' type="button">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          {/* </div> */}
        </div>
    </section>
  )
}

export default Menu