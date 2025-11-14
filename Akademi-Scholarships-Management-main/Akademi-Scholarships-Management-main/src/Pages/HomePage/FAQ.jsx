import faqImg from '../../assets/New-Icon-IMG-4.jpg';

const FAQ = () => {
    return (
        <section className='bg-[#F2F8F1]'>
            <section className='max-w-screen-2xl py-20 px-5 sm:px-7 md:px-10 mx-auto flex flex-col lg:flex-row md:gap-9 xl:gap-14'>
                <div className='w-full lg:max-w-[50%]'>
                    <div>
                        <p className='uppercase text-[#14452F] text-sm sm:text-base'>——— Ask questions</p>
                        <h3 className='font-bold text-3xl sm:text-4xl md:text-5xl pb-12 pt-5 leading-[58px]'>Uncover your potential with <span className='text-[#14452F]'>Our</span> assistance</h3>
                    </div>
                    <div className='relative'>
                        <img className='rounded-lg w-full h-full' src={faqImg} alt="" />
                        <div className='absolute bottom-0 m-3 sm:m-5 md:m-7 flex justify-center items-center gap-5 md:gap-10 p-4 md:p-8 max-w-max bg-white rounded-lg'>
                            <div className=''>
                                <h3 className='font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-4 text-[#22281E]'>Still Have Questions?</h3>
                                <p className='text-[#394630] leading-7 text-sm md:text-base'>Enim sit amet venenatis urna. Donec massa sapien faucibus et molestie ac feugiat.</p>
                            </div>
                            <button className='btn transition-colors duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white'>Get In Touch</button>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:max-w-[50%] my-auto'>
                    <div className='flex flex-col gap-7'>
                        <div className="collapse collapse-arrow px-5 rounded-md py-2 bg-white">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">How Much Does It Cost?</div>
                            <div className="collapse-content">
                                <p>Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus urna duis convallis. At urna condimentum mattis pellentesque id nibh tortor id.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow px-5 rounded-md py-2 bg-white">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">How Much Does It Cost?</div>
                            <div className="collapse-content">
                                <p>Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus urna duis convallis. At urna condimentum mattis pellentesque id nibh tortor id.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow px-5 rounded-md py-2 bg-white">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">How Much Does It Cost?</div>
                            <div className="collapse-content">
                                <p>Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus urna duis convallis. At urna condimentum mattis pellentesque id nibh tortor id.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow px-5 rounded-md py-2 bg-white">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">How Much Does It Cost?</div>
                            <div className="collapse-content">
                                <p>Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus urna duis convallis. At urna condimentum mattis pellentesque id nibh tortor id.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow px-5 rounded-md py-2 bg-white">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">How Much Does It Cost?</div>
                            <div className="collapse-content">
                                <p>Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus urna duis convallis. At urna condimentum mattis pellentesque id nibh tortor id.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow px-5 rounded-md py-2 bg-white">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">How Much Does It Cost?</div>
                            <div className="collapse-content">
                                <p>Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus urna duis convallis. At urna condimentum mattis pellentesque id nibh tortor id.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default FAQ;