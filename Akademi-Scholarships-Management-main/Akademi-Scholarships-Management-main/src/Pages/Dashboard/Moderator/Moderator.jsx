import React from 'react';
import Footer from '../../../Components/Footer';
import { NavLink, Outlet } from 'react-router-dom';
import { BiSolidCommentDetail } from 'react-icons/bi';
import { FaBook, FaList, FaUserCircle, FaUsers } from 'react-icons/fa';
import { FaPenToSquare } from 'react-icons/fa6';
import Navbar from '../../../Components/Navbar';
import dashboardBg from '../../../assets/dashboard-bg.avif';

const Moderator = () => {
    return (<>
        <Navbar />
        <section className='flex justify-center'>
            <aside className='w-[20%] border-r-2 pt-5h-[calc(100vh-70px)]   '>
                <h1 style={{
                    backgroundImage: `url('${dashboardBg}')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }} className='text-4xl py-5 mb-5 font-bold text-center hidden md:block text-white max-h-max w-full'> Dashboard</h1>
                <ul className=' space-y-5 px-2  '>
                    <li>
                        <NavLink className='flex py-2 px-5 rounded-full items-center gap-2' to="profile">
                            <FaUserCircle />
                            <span className='hidden md:block'>Profile</span></NavLink>
                    </li>
                    <li>
                        <NavLink className='flex py-2 px-5 rounded-full items-center gap-2' to="add-scholarships">
                            <FaPenToSquare />
                            <span className='hidden md:block'>Add Scholarships</span></NavLink>
                    </li>
                    <li>
                        <NavLink className='flex py-2 px-5 rounded-full items-center gap-2' to="/dashboard/manage-scholarships">
                            <FaList></FaList>
                            <span className='hidden md:block'>Manage Scholarships</span></NavLink>
                    </li>
                    <li>
                        <NavLink className='flex py-2 px-5 rounded-full items-center gap-2' to="/dashboard/manage-applications">
                            <FaBook></FaBook>
                            <span className='hidden md:block'>Manage Applications</span></NavLink>
                    </li>
                    <li>
                        <NavLink className='flex py-2 px-5 rounded-full items-center gap-2' to="manage-reviews">
                            <BiSolidCommentDetail />
                            <span className='hidden md:block'>Reviews</span></NavLink>
                    </li>
                </ul>
            </aside>
            <div className='w-[80%]'>
                <Outlet />
            </div>
        </section>
        <Footer />
    </>);
};

export default Moderator;