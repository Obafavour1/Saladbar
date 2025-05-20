'use client'
import Image from 'next/image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Serenity = () => {
  return (
    <section className='sections bg-[#17181A]'>
        <div className='flex max-md:flex-col md:gap-10 py-10'>
            
                <div className='relative md:w-1/2'>
                    <Fade direction='right' delay={50} duration={500} cascade damping={1e-1}>
                        <Image src='/serenity.svg' alt='Salad Logo' height={360} width={549} className='max-md:w-[439px]'/>
                        <Image src='/2024.svg' alt='Salad Logo' height={43} width={193} className='absolute right-0 bottom-4 md:w-[304px] md:h-[68px]'/> 
                    </Fade>
               </div>
           
            
            <Fade direction='right' delay={50} duration={500} cascade damping={1e-1}>
                <div className='text-white md:w-1/2'>
                    <h3 className='header3 max-sm:text-left mt-10 mb-8'>Serenity by Day, Elegant Enchantment by Night</h3>
                    <p className='p2'>
                        At The Salad Bar, the space is bright and inviting, with natural sunlight highlighting warm blonde wood, white marble, and a stunning tree centerpiece.
                    </p>
                    <p className='p2 '>
                        As evening falls, the restaurant transforms into an intimate retreat, glowing with soft candlelight and ambient lighting, accompanied by smooth music.
                    </p>
                </div>
            </Fade> 
        </div>
    </section>
  )
}

export default Serenity