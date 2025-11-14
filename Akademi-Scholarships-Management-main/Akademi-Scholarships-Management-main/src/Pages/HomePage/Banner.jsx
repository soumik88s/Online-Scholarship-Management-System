import bgImg from '../../assets/Pattern-Bg.png';
import image1 from '../../assets/AdobeStock_545875468@2x-1.webp'
import image2 from '../../assets/AdobeStock_587433154-1.webp'
const Banner = () => {
    return (
        <div className='bg-[#0b3824] relative overflow-hidden py-24'>
            <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', }} className="absolute opacity-10 inset-0  "
            ></div>
            <div className='md:pt-20'>
                <div className='flex max-w-screen-2xl mx-auto z-20 px-10 justify-between w-full'>
                    <img style={{ height: 'auto', width: '23vw' }} className='z-20 max-w-[350px] max-h-[400px] hidden md:block ' src={image1} alt="" />
                    <div className='flex  flex-col items-center'>
                        <p className='text-gray-300 z-20  text-center text-sm pb-6'>——— Empowering Ambitions, Enabling Success ———</p>
                        <h2 className='text-white z-20 text-3xl md:text-5xl xl:text-7xl text-center'>Unlock Your Future with Scholarships</h2>
                        <p className='text-gray-200 z-20 text-center leading-7 pt-8'>Find, apply, and manage your scholarships effortlessly. Whether you're a first-time applicant or a continuing student, our platform guides you every step of the way toward achieving your academic dreams.</p>
                    </div>
                    <img style={{ height: 'auto', width: '23vw' }} className='z-20 max-w-[350px] max-h-[400px] hidden lg:block' src={image2} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;