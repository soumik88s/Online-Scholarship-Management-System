import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const logOut = () => {
        signOutUser()
            .then(res => toast.success('Sign Out Successful'))
    }
    const links = <>
        <NavLink className={'px-6 py-1 text-[#0c281b] text-base   rounded-xl'} to={'/'}>Home</NavLink>
        <NavLink className={'px-6 py-1 text-[#0c281b] text-base   rounded-xl'} to={'/all-scholarships'}>All Scholarship</NavLink>
        <NavLink className={'px-6 py-1 text-[#0c281b] text-base   rounded-xl'} to={'/contact'}>Contact</NavLink>
        <NavLink className={'px-6 py-1 text-[#0c281b] text-base   rounded-xl'} to={'/dashboard'}>Dashboard</NavLink>
    </>
    return (
        <div className='z-50 w-full top-0 bg-white sticky'>
            <div className={`py-0 border-b mx-auto navbar max-w-screen-2xl lg:px-10 bg-base-100`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-1">
                            {links}
                        </ul>
                    </div>
                    <div><Link to={'/'} className='flex items-center gap-2'><img width={'40px'} src='/logo.png' alt="logo" /> </Link></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end relative">
                    {
                        user ?
                            <div className="flex-none">
                                <div className="dropdown dropdown-hover dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt={user?.displayName}
                                                src={user?.photoURL || 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] pt-3 w-40 p-2 shadow-lg">
                                        <li className="font-medium"><a>{user?.displayName}</a></li>
                                        <li onClick={logOut} className="text-red-500 font-medium"><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                            :
                            <div className="navbar-end max-w-max lg:flex">
                                <Link to={'/register'} className="btn  hover:bg-[#0c7d4a] bg-[#1a583c] text-white text-base">Register</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;