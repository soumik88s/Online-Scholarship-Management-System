import customerImg from '../../assets/Customer.webp';
import MyMap from './Map';
const ContactUs = () => {
    return (
        <>
            <ContactForm />
            <MyMap />
        </>
    );
};
const ContactForm = () => {
    return (
        <section className='flex mx-auto md:flex-row flex-col-reverse max-w-screen-2xl gap-10 sm:gap-20 md:gap-10 py-5 sm:py-10 md:py-20 md:px-10'>
            <div className='md:w-3/5 lg:w-2/3 md:pr-10 lg:pr-20 px-5 sm:px-10 md:px-0'>
                <div>
                    <p className='uppercase md:text-base text-sm text-[#14452F]'>——— Contact Us</p>
                    <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-12 pt-5'>We're Here To Provide <span className='underline text-[#14452F]'>24X7</span> <span className='underline text-[#14452F]'>Support</span></h2>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='w-full flex gap-7'>
                        <input className='w-full py-3 placeholder-black transition-colors duration-500 outline-none focus:border-[#14452f] border-[#394630] border-opacity-35 border-b' type="text" name="first-name" placeholder='First Name*' />
                        <input className='w-full py-3 placeholder-black transition-colors duration-500 outline-none focus:border-[#14452f] border-[#394630] border-opacity-35 border-b' type="text" name="last-name" placeholder='Last Name*' />
                    </div>
                    <div className='w-full flex gap-7'>
                        <input className='w-full py-3 placeholder-black transition-colors duration-500 outline-none focus:border-[#14452f] border-[#394630] border-opacity-35 border-b' type="email" name="email" placeholder='Your Email*' />
                        <input className='w-full py-3 placeholder-black transition-colors duration-500 outline-none focus:border-[#14452f] border-[#394630] border-opacity-35 border-b' type="text" name="number" placeholder='Your Number' />
                    </div>
                    <select defaultValue='none'>
                        <option value="none">How can we help you?</option>
                        <option value=""></option>
                    </select>
                    <textarea className='w-full py-3 pb-7 placeholder-black transition-colors duration-500 outline-none focus:border-[#14452f] border-[#394630] border-opacity-35 border-b' name="comment" placeholder='Describe your need' id=""></textarea>
                    <div><button className='btn transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white px-7'>Submit A Query</button></div>
                    <p className='text-sm'>By Submitting you agree to our <a className='underline' href="#">privacy Policy</a></p>
                </div>
            </div>
            {/* aside section */}
            <div className='md:w-2/5 lg:w-1/3 bg-[#14452F] text-white rounded-lg p-5 sm:p-10 space-y-10'>
                <div>
                    <h2 className='font-bold text-2xl lg:text-3xl mb-4'>Say Hello!</h2>
                    <p className='leading-7'>Aliquam lectus urna, tempus ac lectus et, gravida bibendum nisi. Nulla consequat ham ultricies metus et purus laoreet aliquam.</p>
                </div>
                <div className='relative'>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14452F] to-[#14452F]/5"></div>
                    <div className='w-full ] rounded-lg overflow-hidden'>
                        <img className='w-full h-full md:max-w-[400px] md:max-h-[400px]' src={customerImg} alt="" />
                    </div>
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-5'>
                        <span>
                            <svg className='w-10 h-10 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M98,44.4V71.15a4.94,4.94,0,0,1-4.94,4.95H90.77a1.29,1.29,0,0,0-1.29,1.29v8a1.07,1.07,0,0,1-1.58.94L69.6,76.26A1.25,1.25,0,0,0,69,76.1H51.85a5,5,0,0,1-5-4.95V61.78a1.42,1.42,0,0,1,1.42-1.42H66.39a9.68,9.68,0,0,0,9.67-9.68V40.87a1.43,1.43,0,0,1,1.42-1.42H93.06A5,5,0,0,1,98,44.4Z"></path><path d="M74.14,18.83a7.53,7.53,0,0,0-7.41-6.21H9.53A7.52,7.52,0,0,0,2,20.14V51a7.53,7.53,0,0,0,6.21,7.4,7.2,7.2,0,0,0,1.32.12h2.76a1.06,1.06,0,0,1,1.06,1.07v9.2a3.37,3.37,0,0,0,1.57,2.9,3.21,3.21,0,0,0,1.63.45,3.16,3.16,0,0,0,1.57-.42L38.38,60.36,40.72,59a3.84,3.84,0,0,1,1.87-.49H66.73A7.53,7.53,0,0,0,74.26,51V20.14A7,7,0,0,0,74.14,18.83ZM71.68,51a5,5,0,0,1-5,4.94H41.92a3.88,3.88,0,0,0-1.88.49l-3.25,1.83-.46.26-3.21,1.81L16.85,69.5a.61.61,0,0,1-.61,0,.6.6,0,0,1-.3-.53V57A1.07,1.07,0,0,0,14.87,56H9.53a4.44,4.44,0,0,1-1.11-.13A4.94,4.94,0,0,1,4.58,51V20.14A4.94,4.94,0,0,1,9.53,15.2h57.2A5,5,0,0,1,71.55,19a4.56,4.56,0,0,1,.13,1.11Z"></path><circle cx="22.65" cy="36.36" r="3.61"></circle><circle cx="38.13" cy="36.36" r="3.61"></circle><circle cx="53.61" cy="36.36" r="3.61"></circle></svg>
                        </span>
                        <div className=''>
                            <h3 className='text-base sm:text-lg lg:text-xl font-bold text-nowrap'>24/7 contact support</h3>
                            <a className='hover:text-[#7CFF77] transition-colors text-sm md:text-base duration-300' href="mailto:info@example.com">info@example.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;