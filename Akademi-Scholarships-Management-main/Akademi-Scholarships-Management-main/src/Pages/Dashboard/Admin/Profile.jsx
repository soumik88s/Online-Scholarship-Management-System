import React, { useContext, useEffect, useState } from 'react';
import bgImg from '../../../assets/cover-01.png';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-toastify';

const Profile = () => {
    const [profile, setProfile] = useState({})
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://akademi-university-project.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(err => toast.error('Profile loading failed'))
    }, [user?.email])
    return (
        <section className='bg-[#f2f8f1] h-full py-14'>
            <div className='max-w-screen-lg mx-auto'>
                <div className='relative mb-28'>
                    {/* Background Image */}
                    <img src={bgImg} className='h-[260px] mx-auto w-auto' alt="" />

                    {/* Profile Image */}
                    <div className='absolute -bottom-24 left-0 right-0 mx-auto w-max p-3 bg-white rounded-full z-10 backdrop-blur-sm bg-opacity-20'>
                        <img src={user?.photoURL} className='rounded-full w-32' alt="" />
                    </div>
                </div>
                <div>
                    <div className='mt-5 flex flex-col justify-center items-center gap-5'>
                        {
                            (profile?.role === 'admin' || profile?.role === 'moderator') && <h2 className='text-xl font-bold'>Role: {profile?.role}</h2>
                        }
                        <h2 className='text-xl font-bold'>Name: {user?.displayName}</h2>
                        <h2 className='text-xl font-bold'>Email: {user?.email}</h2>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Profile;