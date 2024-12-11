import { Navigation, SaladOptions, Socials, WhatWeDo } from '@/constant/data'
import Image from 'next/image'
import Link from 'next/link'
import { GoArrowUpRight } from 'react-icons/go'

const Footer = () => {
  return (
    <footer className='sections bg-[#131313]'>
        <div className='flex flex-wrap gap-y-10 text-white justify-between'>
           <div>
              <Image src='/logosalad.svg' alt='Salad Logo' height={86} width={258} className='max-sm:w-[195px] max-sm:h-[65px]'/> 
              <div className='flex flex-wrap gap-2 mt-[30px] max-sm:mb-[20px]'>
                {
                  Socials.map(social=>{
                    return(
                      <div key={social.name}>
                        <p></p>
                        <Link href={social.href} className='flex gap-2 items-center'>{social.name} <GoArrowUpRight/></Link>
                      </div>
                    )
                  })
                }
              </div>
           </div>
           <div className='grid gap-3'>
              <h4 className='mb-4 font-medium text-[16px] md:text-[24px] leading-6'>Navigation</h4>
              {
                Navigation.map(nav=>{
                  return(
                    <div key={nav.name}>
                      
                      <Link href={nav.href}>{nav.name}</Link>
                    </div>
                  )
                })
              }
            </div>
            <div className='grid gap-3'>
              <h4 className='mb-4 font-medium text-[16px] md:text-[24px] leading-6'>What We Do</h4>
              {
                WhatWeDo.map(what=>{
                  return(
                    <div  key={what.name}>
                      
                      <Link href={what.href}>{what.name}</Link>
                    </div>
                  )
                })
              }
            </div>
            <div className='grid gap-3'>
              <h4 className='mb-4 font-medium text-[16px] md:text-[24px] leading-6'>Salad Options</h4>
              {
                SaladOptions.map(salad=>{
                  return(
                    <div key={salad.name}>
                      
                      <Link href={salad.href}>{salad.name}</Link>
                    </div>
                  )
                })
              }  
            </div> 
        </div>
        <p className='text-white mt-20 md:mt-[140px]'> &copy; 2024 The Salad Palace. All rights reserved.</p>
    </footer>
  )
}

export default Footer