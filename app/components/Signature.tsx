import Image from "next/image"

const Signature = () => {
  return (
    <section className="sections">
        <div>
            <div className="gridCenter px-2">
                <h3 className="header3">Our Signature A la Carte Salad</h3>
                <p className="p2 mt-6 ">Go with the Original Dressing or Make It Your Own-The Choice is Yours</p>
            </div>
            <div className="flex  px-[14px] gap-y-10 mt-10 flex-wrap">
                <div className="grid gap-x-[5%] md:grid-cols-2">
                    <Image src='/caesar.svg' alt='Salad Logo' height={360} width={439} className=''/>
                    <div className="max-md:mt-8 md:py-3 grid gap-y-4">
                        <h4 className="header4 ">The Caesar Salad</h4>
                        <p className="p2">Romaine, Caesar dressing, croutons, lemon and parmesan cheese.<br />
                        <span className="header4">Add your own dressing for $1.</span>
                        </p>
                        
                        <div className="grid gap-y-4">
                            {/* <select name="" id=""></select> */}
                            <div className="flex items-center gap-3">
                                <input type="Checkbox" className="checkbox" name="" id="" />
                                <label className="p3" htmlFor="">Creamy Dressing</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="Checkbox" className="checkbox" name="" id="" />
                                <label className="p3" htmlFor="">Spicy Dressing</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="Checkbox"   name="" id=""  className="checkbox"/>
                                <label className="p3" htmlFor="">Tohini Dressing</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-x-[5%]  md:grid-cols-2 md:mt-2 ">
                    <div className="max-md:mt-8 max-md:order-2 md:py-3 grid gap-y-4">
                        <h4 className="header4">The Cobb Salad</h4>
                        <p className="p2">house, bacon, avocado, tomato, soft egg and crumbled bleu cheese dressing on romaine lettuce <br />
                            <span className="header4">Add your own dressing for $1.</span>
                        </p>
                        
                        <div className="grid  gap-y-4">
                            <div className="flex items-center gap-3">
                                <input className="checkbox" type="Checkbox" name="" id="" />
                                <label className="p3" htmlFor="">Creamy Dressing</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input className="checkbox" type="Checkbox" name="" id="" />
                                <label className="p3" htmlFor="">Spicy Dressing</label>
                            </div>
                        </div>
                    </div> 
                    
                    <Image src='/cobb.svg' alt='Salad Logo' height={360} width={439} className='grid order-1'/> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signature