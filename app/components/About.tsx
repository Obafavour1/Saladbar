import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='px-5 md:px-[100px] py-10 md:py-[60px]' >
        <div className='grid sm:grid-cols-2 lg:grid-cols-1 gap-y-10 lg:w-10/12 mx-auto'>
            <div className='cards' >
                <Image src='/custom.svg' alt='Custom Salad' width={315} height={315} className='absolute max-lg:-top-20 lg:w-[395px] lg:h-[395px] lg:-top-[40px] lg:-left-16  max-lg:right-1'/>
                <div className=' max-lg:pt-60 lg:pl-96  max-lg:mx-5 rounded-[32px] lg:rounded-[60px] bg-greens-100 px-6 py-8 max-lg:py-11 '>
                    <h3 className='header33'>Custom Salad</h3>
                    <p className='py-5 text-[16px] leading-6 lg:text-[24px] font-normal md:leading-[36px]'>Choose from a fresh selection of greens, toppings, and our signature dressings to create the perfect combination tailored to your taste</p>
                    <button className='blackButton' type="button">Learn more</button>
                </div>
            </div>
            <div className='cards text-white'>
                <Image src='/signature.svg' alt='Custom Salad' width={315} height={315} className='absolute max-lg:-top-20 lg:w-[395px] lg:h-[395px] lg:-top-[40px] lg:-right-16  max-lg:right-1'/>
                <div className=' max-lg:pt-60 lg:pr-96  max-lg:mx-5 rounded-[32px] lg:rounded-[60px] bg-wine-100 px-6 py-8 max-lg:py-11  '>
                    <h3 className='header33'>Signature Salad</h3>
                    <p className='py-5  text-[16px] leading-6 lg:text-[24px] font-normal md:leading-[36px]'>Expertly crafted salads featuring bold flavor pairings and our recommended dressings for a truly memorable meal</p>
                    <button className='whiteButton' type="button">Learn more</button>
                </div>
            </div>
            <div className='cards'>
                <Image src='/grilled.svg' alt='Custom Salad' width={315} height={315} className='absolute max-lg:-top-20 lg:w-[395px] lg:h-[395px] lg:-top-[40px] lg:-left-16  max-lg:right-1'/>
                <div className=' max-lg:pt-60 lg:pl-96  max-lg:mx-5 rounded-[32px] lg:rounded-[60px] bg-greens-100 px-6 py-8 max-lg:py-11 '>
                    <h3 className='header33'>Custom Grilled Cheese</h3>
                    <p className='py-5 text-[16px] leading-6 lg:text-[24px] font-normal md:leading-[36px]'>Layer artisanal bread with your choice of premium cheese, fresh ingredients,and vibrant sauces to build the ultimate comfort food.</p>
                    <button className='blackButton' type="button">Learn more</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About