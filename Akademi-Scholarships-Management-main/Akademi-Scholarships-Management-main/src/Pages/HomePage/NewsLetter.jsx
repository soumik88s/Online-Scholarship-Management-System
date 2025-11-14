import newsLetterImg from '../../assets/newsletter-img-2048x1738.webp';
const NewsLetter = () => {
    return (
        <section className='max-w-screen-2xl py-20 px-5 sm:px-7 md:px-10 mx-auto'>
            <div className='flex flex-col gap-5 md:flex-row justify-center items-center'>
                <div className='md:w-1/2 flex justify-center'>
                    <img className='max-w-[500px] w-full' src={newsLetterImg} alt="News Letter" />
                </div>
                <div className='md:w-1/2'>
                    <p className='uppercase text-[#14452F]'>——— Subscribe</p>
                    <h3 className='font-bold text-3xl sm:text-4xl md:text-5xl pb-12 pt-5 mb-4'>Sign Up <span className='text-[#14452F] underline'>Our</span> NewsLetter</h3>
                    <p className='text-[#394630] leading-7'>Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Quam elementum pulvinar etiam non quam lacus suspendisse. Ut placerat orci nulla pellentesque dignissim.</p>
                    <div className='flex flex-col gap-5 mt-10 relative max-w-max'>
                        <input className='px-5 pr-24 py-4 bg-base-100 border border-opacity-35 rounded-lg w-[320px] sm:w-[380px] md:w-[320px] lg:w-[440px] xl:w-[480px] transition-colors duration-500 outline-none focus:border-[#14452f] border-[#394630]' type="email" name="email" placeholder='Enter your email address' />
                        <button className='btn z-10 absolute right-1 top-1 transition-colors duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white'>Submit</button>
                        <p className='text-[#394630] opacity-90 text-sm'>We respect your privacy, Unsubscribe at anytime.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;