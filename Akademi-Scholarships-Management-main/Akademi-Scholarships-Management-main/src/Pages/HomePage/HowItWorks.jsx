import { AiOutlineSearch } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import { GoTrophy } from 'react-icons/go';
import { MdOutlineQueryStats } from 'react-icons/md';

const HowItWorks = () => {
  return (
    <section className='max-w-screen-2xl py-20 px-5 sm:px-7 md:px-10 mx-auto'>
      <div className='sm:p-14 py-10 px-7 rounded-lg text-white bg-[#14452F]'>
        <div className='text-center'>
          <p className='uppercase text-sm sm:text-base'>——— our process ———</p>
          <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl pb-12 pt-5'>How Akademi Works?</h2>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center items-center'>
          <div className='group mx-auto max-w-72 hover:cursor-pointer px-5'>
            <div className='flex justify-center items-center text-black w-[92px] h-[92px] md:h-[116px] md:w-[116px] rounded-full border-2 border-white mx-auto'>
              <div className='text-6xl p-4 md:p-7 md:group-hover:p-5 rounded-full transition-all duration-300 bg-white'><AiOutlineSearch /></div>
            </div>
            <div className='text-center flex flex-col gap-3 mt-7'>
              <h3 className='font-bold text-2xl'>Browse Scholarships</h3>
              <p className='leading-7 text-base'>Easily explore available scholarships based on your profile.</p>
              <p className='bg-[#7CFF77] text-[#14452F] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full mx-auto text-xl'>1</p>
            </div>
          </div>
          <div className='group mx-auto max-w-72 hover:cursor-pointer px-5'>
            <div className='flex justify-center items-center text-black w-[92px] h-[92px] md:h-[116px] md:w-[116px] rounded-full border-2 border-white mx-auto'>
              <div className='text-6xl p-4 md:p-7 md:group-hover:p-5 rounded-full transition-all duration-300 bg-white'><BsFileEarmarkText /></div>
            </div>
            <div className='text-center flex flex-col gap-3 mt-7'>
              <h3 className='font-bold text-xl sm:text-2xl'>Apply Online</h3>
              <p className='leading-7 text-base'>Submit applications with just a few clicks, no paperwork.</p>
              <p className='bg-[#7CFF77] text-[#14452F] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full mx-auto text-xl'>2</p>
            </div>
          </div>
          <div className='group mx-auto max-w-72 hover:cursor-pointer px-5'>
            <div className='flex justify-center items-center text-black w-[92px] h-[92px] md:h-[116px] md:w-[116px] rounded-full border-2 border-white mx-auto'>
              <div className='text-6xl p-4 md:p-7 md:group-hover:p-5 rounded-full transition-all duration-300 bg-white'><MdOutlineQueryStats /></div>
            </div>
            <div className='text-center flex flex-col gap-3 mt-7'>
              <h3 className='font-bold text-xl sm:text-2xl'>Track Status</h3>
              <p className='leading-7 text-base'>Get real-time updates on your application progress.</p>
              <p className='bg-[#7CFF77] text-[#14452F] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full mx-auto text-xl'>3</p>
            </div>
          </div>
          <div className='group lg:col-span-3 xl:col-span-1 mx-auto max-w-72 hover:cursor-pointer px-5'>
            <div className='flex justify-center items-center text-black w-[92px] h-[92px] md:h-[116px] md:w-[116px] rounded-full border-2 border-white mx-auto'>
              <div className='text-6xl p-4 md:p-7 md:group-hover:p-5 rounded-full transition-all duration-300 bg-white'><GoTrophy /></div>
            </div>
            <div className='text-center flex flex-col gap-3 mt-7'>
              <h3 className='font-bold text-xl sm:text-2xl'>Receive Awards</h3>
              <p className='leading-7 text-base'>Get notified instantly when you're selected for a scholarship.</p>
              <p className='bg-[#7CFF77] text-[#14452F] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full mx-auto text-xl'>4</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;