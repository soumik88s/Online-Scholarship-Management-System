import React, { useState } from 'react';
import ScholarshipsCard from '../HomePage/ScholarshipCard';
import OtherPageBanner from '../../Hooks/OtherPageBanner';
import bgImage from '../../assets/pricing-breadcrumb-1.jpg';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaArrowLeftLong, FaArrowRight } from 'react-icons/fa6';
const AllScholarships = () => {
    const loaderData = useLoaderData()
    const [data, setData] = useState(loaderData)
    const [searchCategory, setSearchKey] = useState('')
    const [isAvailable, setIsAvailable] = useState(true)
    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase(); // 
        if (!searchQuery) {
            setData(loaderData)
            return
        }
        if (!searchCategory) {
            toast.error("Select a search category before typing!");
            return;
        }
        const newData = loaderData.filter(d =>
            d[searchCategory]?.toLowerCase().includes(searchQuery)
        );
        setIsAvailable(newData.length > 0)
        setData(newData);
    };

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentScholarships = data.slice(startIndex, endIndex);
    const handlePageChange = (page) => {
        if (page < 1 || page > Math.ceil(data.length / itemsPerPage)) return;
        setCurrentPage(page);
    };

    return (
        <>
            <OtherPageBanner image={bgImage} heading={'Explore Scholarship Opportunities'} />
            <section className='py-20 bg-[#f2f8f1]'>
                <div className='flex gap-3 items-center justify-end max-w-screen-xl mx-auto mb-5'>
                    <input onChange={handleSearch} className='input input-bordered' type="text" placeholder='Search here' name="searchBox" id="" />
                    <select onChange={(e) => setSearchKey(e.target.value)} defaultValue={'Search by category'} className="select select-bordered">
                        <option disabled value={'Search by category'}>Search By category</option>
                        <option value={'scholarshipName'}>Scholarship Name</option>
                        <option value={'universityName'}>University Name</option>
                        <option value={'degree'}>Degree Name</option>
                    </select>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 max-w-screen-2xl mx-auto gap-7 px-10'>
                    {
                        currentScholarships.map(d => <ScholarshipsCard scholarship={d} key={d._id} />)
                    }
                </div>

                {isAvailable || <div className='text-3xl py-10 font-bold text-center'>No Scholarships Available</div>}

                <div className='max-w-sm mx-auto mt-14 flex justify-center space-x-5'>
                    <button className='btn transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white px-7' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <FaArrowLeftLong /> Prev
                    </button>

                    {/* Page numbers */}
                    {[...Array(Math.ceil(data.length / itemsPerPage))].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button className='btn transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white px-7' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>
                        Next <FaArrowRight />
                    </button>
                </div>
            </section>
        </>
    );
};

export default AllScholarships;