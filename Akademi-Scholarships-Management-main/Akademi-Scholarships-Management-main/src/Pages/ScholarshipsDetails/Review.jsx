import React, { useContext, useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
const Review = ({ scholarshipData }) => {
    const { user } = useContext(AuthContext)
    const [ratings, setRatings] = useState(0)
    const handleRating = newRating => setRatings(newRating);

    // post review on the database
    // const handleReview = e => {
    //     e.preventDefault()

    //     const date = new Date().toLocaleDateString()
    //     const formData = new FormData(e.target)
    //     const data = Object.fromEntries(formData)
    //     const newData = { ...data, userid: user.uid, ratings, image: user.photoURL, date, universityName: scholarshipData.universityName, subjectCategory: scholarshipData.subjectCategory,scholarshipName: scholarshipData.scholarshipName }

    //     if (!ratings > 0) {
    //         toast.error('Please select a minimum rating')
    //         return
    //     }
    //     fetch(`https://akademi-university-project.vercel.app/add-review/${scholarshipData._id}`, {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' }
    //         , body: JSON.stringify(newData)
    //     }).then(res => res.json())
    //         .then(data => {
    //             if (data.insertedId) {
    //                 toast.success('Review added successfully')
    //             }

    //         })
    //         .catch(err => toast.error('Something went wrong'))
    //     e.target.reset()
    // }
    return (
        <div className='space-y-3 mt-5'>
            {/* <form onSubmit={handleReview} className='space-y-3 my-6'>
                <h2 className='border-b-2 border-[black] max-w-max px-2'>Add Review</h2>
                <div className='flex gap-5'>
                    <input required defaultValue={user.displayName} placeholder='Name' className='input input-bordered' type="text" name="name" id="" />
                    <ReactStars count={5}
                        size={28}
                        onChange={handleRating}
                        isHalf={true}
                        activeColor="#ffd700" />
                </div>
                <textarea required placeholder='Give a review' className='w-full rounded-lg h-20 p-3' name="review" id=""></textarea>
                <button className="btn transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white px-7">Submit</button>

            </form> */}
            {
                scholarshipData.reviews.map((review) => (
                    <div className='border-2 p-5 bg-white rounded-xl space-y-3'>
                        <ReactStars count={5}
                            size={28}
                            isHalf={true}
                            value={review?.ratings}
                            edit={false}
                            activeColor="#ffd700" />
                        <div className='flex items-center gap-3'>
                            <img className='w-10 rounded-full' src={review?.image} alt={review?.name} />
                            <h2>{review.name}</h2>
                            <p className='flex items-center gap-2 pl-3'> <FaRegCalendarAlt />{review?.date}</p>
                        </div>
                        <div>
                            <p className=''>
                                {review?.review}
                            </p>
                        </div>
                    </div>))
            }

        </div>
    );
};

export default Review;