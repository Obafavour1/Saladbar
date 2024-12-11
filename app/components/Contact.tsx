

const Contact = () => {
  return (
    <section className="sections">
        <div>
            <div className="grindCenter text-center md:w-1/2 mx-auto">
                <h3 className="header3">Stay in the Loop with The Salad Bar</h3>
                <p className="p2 py-8">Be the first to hear when we open ad about new menu items, special offers, and fresh idead straight to your inbox</p>
            </div>
            <form action="">
                <div className="md:w-1/2 mx-auto flex justify-between gap-5 rounded-[12px] bg-[#EBEBEB] pl-4 md:pl-8 pr-[10px] py-[10px]">
                    <input className="w-[60%] bg-transparent outline-none" type="email" name="" id="" placeholder='Enter your email address'/>
                    <button className="blackButton" type="submit">Sign up</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact