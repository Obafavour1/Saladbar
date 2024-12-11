import { NavLinks } from '@/constant/data'
import Image from 'next/image'
import React from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav className='py-6 bg-white px-5 lg:px-[90px] xl:px-[120px]'>
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
            <div className='lg:hidden cursor-pointer'><HiOutlineMenuAlt3 className='w-[30px] h-[30px]' /></div>
        </div>
    </nav>
  )
}

export default Navbar