import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='sections' >
        <div className='grid gap-10 md:w-10/12 mx-auto'>
            <div className='cards' >
                <Image src='/custom.svg' alt='Custom Salad' width={315} height={315} className='absolute max-md:-top-20 md:w-[395px] md:h-[395px] md:-top-16 md:-left-12  max-md:right-1'/>
                <div className=' max-md:pt-60 md:pl-96  max-md:mx-5 rounded-[32px] bg-greens-100 px-6 py-8 max-md:py-11 '>
                    <h3 className='header3'>Custom Salad</h3>
                    <p className='pt-4 p1 pb-5'>Choose from a fresh selection of greens, toppings, and our signature dressings to create the perfect combination tailored to your taste</p>
                    <button className='whiteButton' type="button">Learn more</button>
                </div>
            </div>
            <div className='cards text-white'>
                <Image src='/signature.svg' alt='Custom Salad' width={315} height={315} className='absolute -top-20 right-1'/>
                <div className=' pt-60  mx-5 rounded-[32px] bg-wine-100 px-6 py-11 '>
                    <h3 className='header3'>Signature Salad</h3>
                    <p className='pt-4 pb-5'>Expertly crafted salads featuring bold flavor pairings and our recommended dressings for a truly memorable meal</p>
                    <button className='whiteButton' type="button">Learn more</button>
                </div>
            </div>
            <div className='cards'>
                <Image src='/grilled.svg' alt='Custom Salad' width={315} height={315} className='absolute -top-20 right-1'/>
                <div className=' pt-60  mx-5 rounded-[32px] bg-greens-100 px-6 py-11 '>
                    <h3 className='header3'>Custom Grilled Cheese</h3>
                    <p className='pt-4 pb-5'>Layer artisanal bread with your choice of premium cheese, fresh ingredients,and vibrant sauces to build the ultimate comfort food.</p>
                    <button className='whiteButton' type="button">Learn more</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About