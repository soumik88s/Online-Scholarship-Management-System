import { BiSolidMessageRounded } from 'react-icons/bi';
import { FaFolder } from 'react-icons/fa';
import blogImg1 from '../../assets/new-Blog-3-JPG.webp';
import blogImg2 from '../../assets/new-Blog-7-JPG.webp';
import blogImg3 from '../../assets/new-Blog-8-JPG.webp';
import bgImg from '../../assets/Grid-Blog-image-1.png'
import blogFeatureImg from '../../assets/Grid-Blog-image-2.webp';
const LatestBlogs = () => {
    return (
        <section className='bg-[#F2F8F1]'>
            <section className='max-w-screen-2xl py-20 px-5 sm:px-7 md:px-10 mx-auto flex flex-col lg:flex-row gap-10 sm:gap-14 justify-center'>
                <div style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: "no-repeat" }} className='row-span-3 rounded-md max-h-[970px] flex flex-col justify-end gap-5 lg:w-1/2'>
                    <div className='lg:p-12 sm:pb-5 md:pb-10 grid gap-5'>
                        <p className='uppercase text-sm sm:text-base text-[#14452F]'>——— NOW TRENDING</p>
                        <h3 className='text-[#22281E] font-bold text-3xl sm:text-4xl md:text-5xl'>News & Blog on Lms</h3>
                        <p className='text-sm sm:text-base'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis et malesuada fames ac ante ipsum primis in faucibus. Vestibu tium.</p>
                    </div>
                    <img className='max-w-3xl w-full mx-auto' src={blogFeatureImg} alt="Blog Feature Img" />
                </div>
                <div className='lg:w-1/2 flex flex-col gap-4 md:gap-11 my-auto items-center'>
                    <div className='max-w-80 sm:max-w-full flex flex-col sm:flex-row group max-h-max gap-3'>
                        <div className='md:max-h-64 md:max-w-60 rounded-md overflow-hidden'>
                            <img className='object-cover h-full w-full group-hover:scale-105 duration-500 transition-transform' src={blogImg1} alt="Blog-Image" />
                        </div>
                        <div className='max-h-max sm:px-5 md:px-9'>
                            <p className='flex gap-2 text-sm mb-3'><span className='flex gap-2 items-center'><FaFolder />DEVELOPMENT</span> <span className='flex gap-2 items-center'><BiSolidMessageRounded />{1} COMMENT</span></p>
                            <h3 className='text-xl sm:text-2xl md:text-3xl mb-4'>World Wide Business Logo Design</h3>
                            <p className='text-sm sm:text-base'>Pudes at tellus at urna. Orci eu lobortis elementum nibh tellus molestie. Blandit Maecenas volutpat.</p>
                            <button className='btn mt-5 md:mt-9  transition-colors duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white'>View More</button>
                        </div>
                    </div>
                    <hr />
                    <div className='max-w-80 sm:max-w-full flex flex-col sm:flex-row group max-h-max gap-3'>
                        <div className='md:max-h-64 md:max-w-60 rounded-md overflow-hidden'>
                            <img className='object-cover h-full w-full  group-hover:scale-105 duration-500 transition-transform' src={blogImg2} alt="Blog-Image" />
                        </div>
                        <div className='max-h-max sm:px-5 md:px-9'>
                            <p className='flex gap-2 text-sm mb-3'><span className='flex gap-2 items-center'><FaFolder />DEVELOPMENT</span> <span className='flex gap-2 items-center'><BiSolidMessageRounded />{1} COMMENT</span></p>
                            <h3 className='text-xl sm:text-2xl md:text-3xl mb-4'>World Wide Business Logo Design</h3>
                            <p className='text-sm sm:text-base'>Pudes at tellus at urna. Orci eu lobortis elementum nibh tellus molestie. Blandit Maecenas volutpat.</p>
                            <button className='btn mt-5 md:mt-9  transition-colors duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white'>View More</button>
                        </div>
                    </div>
                    <hr />
                    <div className='max-w-80 sm:max-w-full flex flex-col sm:flex-row group max-h-max gap-3'>
                        <div className='md:max-h-64 md:max-w-60 rounded-md overflow-hidden'>
                            <img className='object-cover h-full w-full  group-hover:scale-105 duration-500 transition-transform' src={blogImg3} alt="Blog-Image" />
                        </div>
                        <div className='max-h-max sm:px-5 md:px-9'>
                            <p className='flex gap-2 text-sm mb-3'><span className='flex gap-2 items-center'><FaFolder />DEVELOPMENT</span> <span className='flex gap-2 items-center'><BiSolidMessageRounded />{1} COMMENT</span></p>
                            <h3 className='text-xl sm:text-2xl md:text-3xl mb-4'>World Wide Business Logo Design</h3>
                            <p className='text-sm sm:text-base'>Pudes at tellus at urna. Orci eu lobortis elementum nibh tellus molestie. Blandit Maecenas volutpat.</p>
                            <button className='btn mt-5 md:mt-9  transition-colors duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white'>View More</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default LatestBlogs;