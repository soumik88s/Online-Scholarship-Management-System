import React from 'react';
import { Link } from 'react-router-dom';
import ScholarshipsCard from './ScholarshipCard';

const TopScholarships = ({ data }) => {
    return (
        <div className='py-20 bg-[#f2f8f1]'>
            <div className='px-5'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center '>Scholarships That <span className='text-[#14452F] underline'>Shine!</span></h2>
                <p className='text-center text-sm md:text-base max-w-2xl mx-auto pt-3 md:pt-5'>Explore the best scholarships to fund your education. Find opportunities based on merit, need, and field of study—apply with confidence!</p>
            </div>
            <div className='grid mt-10 px-5 justify-center md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto gap-7 md:px-10'>
                {
                    data.map(d => <ScholarshipsCard key={d._id} scholarship={d} />)
                }

            </div>
            <div className='grid justify-center'>
                <Link to={'/all-scholarships'}> <button className='btn mt-11 bg-[#185137] text-white hover:bg-[#238358]'>View All Scholarships</button></Link>
            </div>
        </div>
    );
};

export default TopScholarships;