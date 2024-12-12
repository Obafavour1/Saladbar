'use client'
import { NavLinks } from '@/constant/data'
import Image from 'next/image'

import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useState } from 'react'

const Navbar = () => {
    const[open, setOpen]= useState(true)

    // const Click= () =>{
    //     setOpen(!open)
    // }
  return (
    <nav className='py-6  bg-white px-5 lg:px-[90px] xl:px-[120px]'>
        <div className='flex justify-between items-center'>
            <Image src='/logosalad.svg' alt='Salad Logo' height={86} width={258} className='max-sm:w-[86px] max-sm:h-[29px]'/>
            <div className='hidden lg:flex gap-x-10 items-center justify-center'>
                {
                    NavLinks.map(links=>{
                        return(
                            <div key={links.id}>
                                <a href="" className='uppercase font-medium text-md'>{links.name}</a>
                            </div>
                        )
                    })
                }
                <a href="" className='greenButton'>ORDER NOW</a>
            </div>
            <div className='lg:hidden cursor-pointer' onClick={()=>setOpen(!open)}><HiOutlineMenuAlt3 className='w-[30px] h-[30px]' /></div>
        </div>
        <div className={`${open? 'visible':'invisible'} lg:hidden`}>
            <div  className={`fixed z-10 left-0 ${open ? " w-[60%] translate-x-0" :"w-[100%] translate-x-full"} fixed duration-300  bg-white w-full pb-10`} >
                {/* <div className='flex justify-between py-5 px-4'>
                    <Image src='/logosalad.svg' alt='Salad Logo' height={86} width={258} className='max-sm:w-[86px] max-sm:h-[29px]'/>
                    <div className='lg:hidden cursor-pointer' onClick={()=>setOpen(!open)}><HiOutlineMenuAlt3 className='w-[30px] h-[30px]' /></div>
                </div> */}
                <div className='grid gap-5 text-center'>
                    {
                        NavLinks.map(links=>{
                            return(
                                <div key={links.id}>
                                    <a href="" className='uppercase font-medium text-md'>{links.name}</a>
                                </div>
                            )
                        })
                    }
                    <a href="" className='greenButton w-fit mx-auto'>ORDER NOW</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar