import React from 'react';
import ReactStars from "react-rating-stars-component";
import { MdOutlineAccessTime, MdOutlineCalendarMonth } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoLocationOutline, IoSchoolOutline } from 'react-icons/io5';
import { PiCertificate } from 'react-icons/pi';
import { GiNotebook } from 'react-icons/gi';
const ScholarshipsCard = ({ scholarship }) => {
    const { _id, scholarshipName, applicationFees, degree, description, scholarshipPostDate, universityImage, universityName, universityCity, universityCountry, scholarshipCategory, subjectCategory, applicationDeadline, } = scholarship
    const text = description
    const slicedText = text.length > 150 ? text.slice(0, 150) + "..." : text;

    return (
        <div className="card group max-w-[460px] card-compact bg-base-100 shadow-xl  p-5">
            <div className='flex items-center gap-4'>
                <img className='object-cover w-16 h-16 md:w-20 rounded-full overflow-hidden md:h-20'
                    src={universityImage}
                    alt="University Logo" />
                <div className='space-y-1'>
                    <h2 className="font-semibold md:font-bold text-xl sm:text-2xl md:text-3xl text-[#0c281b]">{universityName}</h2>
                    <p className='flex text-sm items-center gap-2'><IoLocationOutline />{universityCity + ", " + universityCountry}</p>
                    <p className='flex items-center text-sm gap-2'><MdOutlineCalendarMonth />{scholarshipPostDate}</p>
                </div>
            </div>
            <div className="card-body !p-0 mt-4">
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-[#0c281b]">{scholarshipName}</h2>
                <div className='flex gap-2'>
                    <p className='flex gap-2 items-center text-base w-[50%]'><IoSchoolOutline />{scholarshipCategory}</p>
                    <p className='flex gap-2 items-center text-base w-[50%]'><PiCertificate />{degree}</p>
                </div>
                <div className='flex gap-2'>
                    <p className='flex gap-2 items-center text-base w-[50%]'><GiNotebook />{subjectCategory}</p>
                    <p className='flex gap-2 items-center text-base w-[50%]'><MdOutlineAccessTime />{applicationDeadline}</p>
                </div>
                <p className='text-[#394630]'>{slicedText}</p>
                <hr />
                <div className="card-actions relative justify-between">
                    <p className='text-2xl font-bold text-[#14452F]'>${applicationFees}</p>
                    <div>
                        <Link to={`/scholarship-details/${_id}`} className='max-w-max max-h-max'>   <button className="btn -translate-x-5 transition-all duration-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white">View Details</button></Link>
                        <div className="absolute bottom-4 right-4 flex space-x-1 group-hover:-z-10 group-hover:translate-x-5
                            group-hover:opacity-0
                            transition-all text-lg duration-300">
                            <ReactStars
                                count={5}
                                edit={false}
                                size={22}
                                value={4.5}
                                isHalf={true}
                                activeColor="#ffd700" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipsCard;