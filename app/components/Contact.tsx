import Image from "next/image"


const Contact = () => {
  return (
    <section className="sections relative">
        <div className="w-full relative">
            <div className="absolute md:left-48 -top-10 md:-top-40 flex justify-between w-full md:w-[80%] mx-auto">
                <Image src='/tomatoes.svg' alt='Custom Salad' width={150} height={108} className='max-md:w-[54px] max-md:h-[39px]'/>
                <Image src='/lettuceright.svg' alt='Custom Salad' width={82} height={82} className='max-md:w-[37.5px] max-md:h-[37.5px]'/>
                <Image src='/potatoe.svg' alt='Custom Salad' width={129} height={200} className='max-md:w-[61px] max-md:h-[97px]'/>
            </div>
            <div className="grindCenter text-center md:w-1/2 mx-auto">
                <h3 className="header3">Stay in the Loop with The Salad Bar</h3>
                <p className="p2 py-8">Be the first to hear when we open and about new menu items, special offers, and fresh ideas straight to your inbox</p>
            </div>
            <form action="" className="mb-10 md:mb-20">
                <div className="md:w-1/2 mx-auto flex justify-between gap-5 rounded-[12px] bg-[#EBEBEB] pl-4 md:pl-8 pr-[10px] py-[10px]">
                    <input className="w-[60%] bg-transparent outline-none" type="email" name="" id="" placeholder='Enter your email address'/>
                    <button className="py-2 px-3 md:py-4 md:px-5 buttonText text-white rounded-md md:rounded-[8px] bg-black md:text-[16px] uppercase md:font-medium transition-all duration-300 " type="submit">Sign up</button>
                </div>
            </form>
            
        </div>
        <div className="absolute -bottom-0 md:-bottom-20 -left-0 flex justify-between w-[100%]">
            <Image src='/pepperright.svg' alt='Custom Salad' width={135} height={152} className='max-md:w-[48.5px] max-md:h-[54.5px]'/>
            <Image src='/tomatoes.svg' alt='Custom Salad' width={151} height={110} className='max-md:w-[61px] max-md:h-[44px]'/>
            <Image src='/pepperright.svg' alt='Custom Salad' width={87} height={98} className='max-md:w-[38px] max-md:h-[43px]'/>
            <Image src='/leaf.svg' alt='Custom Salad' width={236} height={205} className='max-md:hidden max-md:w-[112px] max-md:h-[97px]'/>
        </div>
    </section>
  )
}

export default Contact