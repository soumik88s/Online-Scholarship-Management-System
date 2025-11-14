import React, { useContext, useEffect, useState } from 'react';
import { MdDeleteForever, MdOutlineCalendarMonth } from 'react-icons/md';
import ReactStars from "react-rating-stars-component";
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-toastify';
const ManageReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://akademi-university-project.vercel.app/all-reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => toast.error('Something went wrong'))
    }, [user])

    const handleDelete = id => {
        fetch(`https://akademi-university-project.vercel.app/delete-review/${id}?email=${user.email}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainingReviews = reviews.filter(review => review._id !== id)
                    setReviews(remainingReviews)
                    toast.success('Review deleted successfully')
                }
        })
    }
    
    return (
        <section className='bg-[#f2f8f1] h-full  py-5'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-y-4 justify-center mx-auto xl:grid-cols-3'>
                {
                    reviews.map(review => <div className="mx-auto card card-compact bg-base-100 w-96 shadow-xl">
                        <div className='flex p-5 items-center'>
                            <div>
                                <h2 className='text-2xl font-bold'>{review?.universityName}</h2>
                                <p className='flex items-center text-sm gap-2 pt-2'>Subject: {review.subjectCategory}</p>
                            </div>
                        </div>
                        <div className="card-body !pt-0">
                            <div className='flex items-center gap-4'>
                                <img className='object-cover h-16 w-16  rounded-full'
                                    src={review.image}
                                    alt="Profile" />
                                <div>
                                    <h2 className="card-title">{review.name}</h2>
                                    <p className='flex items-center text-sm gap-2'><MdOutlineCalendarMonth />{new Date(review.date).toLocaleDateString().split('/').join('-')}</p>
                                </div>
                            </div>
                            <p>{review.review}</p>
                            <div className="card-actions justify-between pt-3 items-center">
                                <ReactStars
                                    count={5}
                                    size={22}
                                    edit={false}
                                    value={review.ratings}
                                    isHalf={true}
                                    activeColor="#ffd700" />
                                <button onClick={() => handleDelete(review._id)} className="text-2xl text-red-600"><MdDeleteForever /></button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </section>
    );
};

export default ManageReviews;