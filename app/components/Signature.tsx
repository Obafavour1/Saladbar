import Image from "next/image"

const Signature = () => {
  return (
    <section className="sections">
        <div>
            <div className="gridCenter">
                <h3 className="header3">Our Signature A la Carte Salad</h3>
                <p className="p2">Go with the Original Dressing or Make It Your Own-The Choice is Yours</p>
            </div>
            <div className="flex px-[14px] gap-y-10 mt-10 flex-wrap">
                <div className="flex max-sm:flex-col">
                    <Image src='/caesar.svg' alt='Salad Logo' height={360} width={439} className=''/>
                    <div className="mt-8 grid gap-y-4">
                        <h4 className="header4 ">The Cobb Salad</h4>
                        <p>house, bacon, avocado, tomato, soft egg and crumbled bleu cheese dressing on romaine lettuce <br />
                        <span className="header4">Add your own dressing for $1.</span>
                        </p>
                        
                        <div>
                            {/* <select name="" id=""></select> */}
                            <div className="flex gap-3">
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Creamy Dressing</label>
                            </div>
                            <div className="flex gap-3">
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Spicy Dressing</label>
                            </div>
                            <div className="flex gap-3">
                                <input type="radio" name="" id=""  className=""/>
                                <label htmlFor="">Tohini Dressing</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex max-sm:flex-col-reverse">
                    <div className="mt-8 grid gap-y-4">
                        <h4 className="header4">The Cobb Salad</h4>
                        <p>house, bacon, avocado, tomato, soft egg and crumbled bleu cheese dressing on romaine lettuce <br />
                            <span className="header4">Add your own dressing for $1.</span>
                        </p>
                        
                        <div>
                            <div className="flex gap-3">
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Creamy Dressing</label>
                            </div>
                            <div className="flex gap-3">
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Spicy Dressing</label>
                            </div>
                        </div>
                    </div> 
                    
                    <Image src='/cobb.svg' alt='Salad Logo' height={360} width={439} className=''/> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signature