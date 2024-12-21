'use client'
import { Fade } from 'react-awesome-reveal'

const Explore = () => {
  return (
    <section className='mt-10 md:py-[53px] bg-explore w-full md:min-h-[700px] sections p-5   bg-cover bg-center  bg-no-repeat text-black '>
        <div className='  bg-white rounded-[20px] max-sm:gridCenter lg:w-7/12  xl:w-1/2 py-6 px-5 md:p-14'>
          <Fade direction='right' delay={50} duration={500} cascade damping={1e-1}>
            <h3 className='header3'>Home of Well-Dressed Salads</h3>
            <p className='my-4 md:my-8 p2 text-center md:text-justify'>At The Salad Bar, we’ve turned the humble salad into a canvas for flavor, creativity, and style. As London’s first restaurant dedicated to dressings, we celebrate the magic of sauces that elevate every bite. Whether it’s a customized creation from our checklist menu or one of our Signature Salads paired with the perfect dressing, we make every meal unforgettable.</p>  
          </Fade>
          <Fade direction='left' delay={50} duration={500} cascade damping={1e-1}>
            <button className='blackButton w-fit mx-auto' type="button">Explore our story</button>
          </Fade>
          
          
        </div>
    </section>
  )
}

export default Explore