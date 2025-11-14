import React, { useEffect, useState } from 'react';
import useRole from '../../../Hooks/useRole';
import { toast } from 'react-toastify';
import { BiSolidMessageEdit } from 'react-icons/bi';
import { FaPen } from 'react-icons/fa';
import { FcCancel } from 'react-icons/fc';
import ReactStars from "react-rating-stars-component";

const MyApplication = () => {
    const { userId, loading, user } = useRole()
    const [data, setData] = useState([])
    const [refetch, setRefetch] = useState(false)
    const [modalData, setModalData] = useState({})
    const [ratings, setRatings] = useState(0)

    useEffect(() => {
        if (!loading && userId) {
            fetch(`https://akademi-university-project.vercel.app/my-application?userId=${userId}`)
                .then(res => res.json())
                .then(res => setData(res))
                .catch(err => {
                    toast.error('Something bad happen. Please try again!')
                })
        }
    }, [loading, userId, refetch])

    const handleDelete = (id) => {
        fetch(`https://akademi-university-project.vercel.app/delete-application/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                if (res.deletedCount > 0) {
                    toast.success('Deleted successfully')
                }
            })
            .catch(err => toast.error('Deleted unsuccessful. Please try again!'))
        setRefetch(!refetch)
    }

    const handleUpdate = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        const imageFile = new FormData();
        imageFile.append('image', formData.get('image'));

        fetch('https://api.imgbb.com/1/upload?key=48b282cb34af9841dcce86814f69cd23', {
            method: 'POST',
            body: imageFile,
        }).then(res => res.json())
            .then(res => {
                fetch(`https://akademi-university-project.vercel.app/update-application/${modalData?._id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ ...data, image: res.data.url })
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.matchedCount > 0) {
                            toast.success('Data Updated successfully')
                            document.getElementById('my_modal_9').checked = false
                            setRefetch(!refetch)
                        }
                    })
                    .catch(err => {
                        toast.error('Something bad happened while updating the data. Please try again!')
                    })
            })
            .catch(err => toast.error('Something bad happened while uploading the image. Please try again!'))
    }

    const handleReview = (e) => {
        e.preventDefault()
        if (!ratings > 0) {
            toast.error('Please select a minimum rating')
            return
        }
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        const date = new Date().toDateString().split(' ').slice(1).join('-')
        const newData = { ...data, userid: user.uid, image: user.photoURL, ratings, date, universityName: modalData.universityName, subjectCategory: modalData.subjectCategory, scholarshipName: modalData.scholarshipName, };

        fetch(`https://akademi-university-project.vercel.app/add-review/${modalData.scholarshipId}`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newData)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Review added successfully')
                }
                document.getElementById('my_modal_4').checked = false
            })
            .catch(err => toast.error('Something went wrong'))

        e.target.reset()

    }


    return (
        <section className='bg-[#f2f8f1] h-full py-14'>
            <div className="overflow-x-auto mx-auto max-w-screen-lg">
                {data.length > 0 ? <table className="table text-center">
                    <thead>
                        <tr>
                            <th className='border-2 border-gray-300'>University Name</th>
                            <th className='border-2 border-gray-300'>University Address</th>
                            <th className='border-2 border-gray-300'>Application Feedback</th>
                            <th className='border-2 border-gray-300'>Subject</th>
                            <th className='border-2 border-gray-300'>Degree</th>
                            <th className='border-2 border-gray-300'>Application Fees</th>
                            <th className='border-2 border-gray-300'>Service Charge</th>
                            <th className='border-2 border-gray-300'>Status</th>
                            <th className='border-2 border-gray-300'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => <>
                                <tr>
                                    <td className='border'>{item.universityName}</td>
                                    <td className='border'>{item.universityAddress}</td>
                                    <td className='border'>{item.feedback}</td>
                                    <td className='border'>{item.subjectCategory}</td>
                                    <td className='border'>{item.degree}</td>
                                    <td className='border'>{item.applicationFees}</td>
                                    <td className='border'>{item.serviceCharge}</td>
                                    <td>{item.status === 'Pending' ? <span className='text-white bg-yellow-500 px-2 py-1 rounded-xl'>{item.status}</span> : item.status === 'Rejected' ? <span className='text-white bg-red-500 px-2 py-1 rounded-xl'>{item.status}</span> : item.status === 'Approved' && <span className='text-white bg-green-500 px-2 py-1 rounded-xl'>{item.status}</span>}</td>
                                    <td className='border flex'>
                                        <label onClick={() => setModalData(item)} htmlFor='my_modal_4' className="btn btn-ghost btn-xs"><BiSolidMessageEdit /></label>
                                        <label disabled={item.status !== 'Pending'} onClick={() => setModalData(item)} htmlFor={'my_modal_9'} className={` btn disabled btn-ghost btn-xs`}><FaPen /></label>
                                        <button onClick={() => handleDelete(item._id)} className={` btn btn-ghost text-red-600 btn-xs`}><FcCancel /></button>
                                    </td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
                    :
                    <div>
                        <h2 className='text-4xl font-bold text-center'>No data available</h2>
                    </div>}

                {/* Update modal */}
                <input type="checkbox" id="my_modal_9" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <form onSubmit={handleUpdate} className='modal-box rounded-xl max-w-2xl bg-white space-y-2'>
                        <div><h2 className='text-center text-3xl font-bold mb-7'>Please fill out this form</h2></div>
                        <h4 className='text-sm'>Required fields are marked as  <span className='text-red-600'>*</span></h4>
                        <div className="flex gap-5 justify-center">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Phone number  <span className='text-red-600'>*</span></span>
                                </div>
                                <input defaultValue={modalData?.phoneNumber || ''} required name='phoneNumber' type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Your photo <span className='text-red-600'>*</span></span>
                                </div>
                                <input required name='image' type="file" placeholder="Type here" className="input input-bordered w-full max-w-xs p-2" />
                            </label>
                        </div>
                        <div className="flex gap-5 justify-center">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Gender <span className='text-red-600'>*</span></span>
                                </div>
                                <select defaultValue={modalData?.gender || ''} name="gender" className="input input-bordered w-full max-w-xs" id="">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Address <span className='text-red-600'>*</span></span>
                                </div>
                                <input defaultValue={modalData?.address || ''} required name='address' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div className="flex gap-5 justify-center">

                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">HSC result <span className='text-red-600'>*</span></span>
                                </div>
                                <input defaultValue={modalData?.hscResult || ''} min={1} max={5} step={0.01} name='hscResult' required type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">SSC result <span className='text-red-600'>*</span></span>
                                </div>
                                <input defaultValue={modalData?.sscResult || ''} min={1} max={5} step={0.01} name='sscResult' required type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div className="flex gap-5 justify-center">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Applying Degree <span className='text-red-600'>*</span></span>
                                </div>
                                <select defaultValue={modalData?.degree || ''} className="input input-bordered w-full max-w-xs" name="degree" id="">
                                    <option value="Diploma">Diploma</option>
                                    <option value="Bachelor">Bachelor</option>
                                    <option value="Masters">Masters</option>
                                </select>
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Study gap</span>
                                </div>
                                <select defaultValue={modalData?.studyGap} className="input input-bordered w-full max-w-xs" name="studyGap" id="">
                                    <option disabled value="none">Select your study gap</option>
                                    <option value="6month">6 Month</option>
                                    <option value="oneYear">1 Year</option>
                                    <option value="twoYear">2 Year</option>
                                    <option value="threeYear">3 Year</option>
                                </select>
                            </label>
                        </div>
                        <div className="flex gap-5 justify-center">
                            <label data-tip='Read Only' className="tooltip tooltip-error hover:tooltip-open form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">University name <span className='text-red-600'>*</span></span>
                                </div>
                                <input required value={modalData?.universityName || ''} name='universityName' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label data-tip='Read Only' className="tooltip tooltip-error hover:tooltip-open form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Scholarship category <span className='text-red-600'>*</span></span>
                                </div>
                                <input required value={modalData?.scholarshipCategory || ''} name='scholarshipCategory' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div className=" flex gap-5 justify-center">
                            <label data-tip='Read Only' className="tooltip tooltip-error hover:tooltip-open form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Subject Category <span className='text-red-600'>*</span></span>
                                </div>
                                <input required value={modalData?.subjectCategory || ''} name='subjectCategory' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label data-tip='Read Only' className="tooltip tooltip-error hover:tooltip-open form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">University address <span className='text-red-600'>*</span></span>
                                </div>
                                <input required name='universityAddress' value={modalData?.universityAddress || ''} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div className="flex justify-center items-center gap-5 !mt-7">
                            <button className='btn transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white px-7'>Submit</button>
                            <label className='btn transition duration-300 hover:bg-[#b12c2c] hover:text-[#ffffff] bg-[#ff2525] text-white px-7' htmlFor="my_modal_9">close</label>
                        </div>
                    </form>
                </div>

                {/* Review modal */}
                <input type="checkbox" id="my_modal_4" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <form onSubmit={handleReview} className='space-y-5 my-6'>
                            <div className='flex justify-center'>
                                <h2 className='border-b-2 border-[black] max-w-max px-2 text-center text-2xl mb-5'>Add Review</h2>
                            </div>
                            <div className='flex gap-5'>
                                <label className="form-control text-start w-full max-w-xs">
                                    <span className="label-text">Your name</span>
                                    <input required defaultValue={user.displayName} placeholder='Name' className='input input-bordered' type="text" name="name" id="" />
                                </label>
                                <label className="form-control text-start w-full max-w-xs">
                                    <span className="label-text">Ratings</span>
                                    <div className="input flex items-center input-bordered">  <ReactStars
                                        count={5}
                                        size={22}
                                        onChange={setRatings}
                                        value={modalData.ratings}
                                        isHalf={true}
                                        activeColor="#ffd700" /></div>
                                </label>
                            </div>
                            <label className="form-control text-start w-full">
                                <span className="label-text">Review comment</span>
                                <textarea required placeholder='Give a review' className='w-full rounded-lg h-20 p-3 input input-bordered' name="review" id=""></textarea>
                            </label>
                            <div className="flex justify-center items-center gap-5 !mt-7">
                                <button className='btn transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white px-7'>Submit</button>
                                <label className='btn transition duration-300 hover:bg-[#b12c2c] hover:text-[#ffffff] bg-[#ff2525] text-white px-7' htmlFor="my_modal_4">close</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyApplication;