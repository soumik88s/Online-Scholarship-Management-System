import React, { useContext } from 'react';
import Navbar from '../../../Components/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaUserCircle } from 'react-icons/fa';
import { BiSolidCommentDetail } from 'react-icons/bi';
import Footer from '../../../Components/Footer';
import dashboardBg from '../../../assets/dashboard-bg.avif';
import { AuthContext } from '../../../Context/AuthProvider';

const User = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <Navbar />
            <section className='flex justify-center'>
                <aside className='w-[20%] border-r-2 pt-5h-[calc(100vh-70px)]   '>
                    <h1 style={{
                        backgroundImage: `url('${dashboardBg}')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }} className='text-4xl py-5 mb-5 font-bold text-center text-white max-h-max w-full'> Dashboard</h1>
                    <ul className=' space-y-5 px-2  '>
                        <li>
                            <NavLink className='flex py-2 px-5 rounded-full items-center gap-2' to="profile">
                                <FaUserCircle />
                                Profile</NavLink>
                        </li>
                        <li>
                            <NavLink className='flex py-2 px-5 rounded-full items-center gap-2' to={`/dashboard/my-application/${user?.uid}`}>
                                <FaBook></FaBook>
                                My Application</NavLink>
                        </li>
                        <li>
                            <NavLink className='flex py-2 px-5 rounded-full items-center gap-2' to={`/dashboard/my-reviews/${user?.uid}`}>
                                <BiSolidCommentDetail />
                                My Reviews</NavLink>
                        </li>
                    </ul>
                </aside>
                <div className='w-[80%]'>
                    <Outlet />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default User;