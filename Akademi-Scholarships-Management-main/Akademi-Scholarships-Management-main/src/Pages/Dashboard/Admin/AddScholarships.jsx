import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-toastify';

const AddScholarships = () => {
    const { user } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        const month = new Date(new Date()).toLocaleDateString('default', { month: 'long' })
        const day = new Date(new Date()).getDay()
        const year = new Date(new Date()).getFullYear()
        const newDate = (`${month} ${day}, ${year}`);

        const today = new Date()
        const deadline = new Date(data.applicationDeadline)
        if (today > deadline) {
            toast.error('Please select a valid date')
            return;
        }

        const imageFile = new FormData();
        imageFile.append('image', formData.get('universityImage'));

        fetch('https://api.imgbb.com/1/upload?key=48b282cb34af9841dcce86814f69cd23', {
            method: 'POST',
            body: imageFile,
        }).then(res => res.json())
            .then(res => {
                const newData = { ...data, applicationFees: parseInt(data.applicationFees), serviceCharge: parseInt(data.serviceCharge), tuitionFees: parseInt(data.tuitionFees), universityImage: res.data.url, universityWorldRank: parseInt(data.universityWorldRank), scholarshipPostDate: newDate, postedUserEmail: user.email }
                fetch(`https://akademi-university-project.vercel.app/add-scholarship?email=${user?.email}`, {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(newData)
                }).then(res => res.json())
                    .then(newData => {
                        if (newData.insertedId) {
                            toast.success('Scholarship added successfully')
                            e.target.reset()
                        }
                    })
                    .catch(err => toast.error('Failed to add scholarship Data'))
            })
            .catch(err => toast.error('Failed to upload image. Please try again later'))

    }
    return (
        <section className='bg-[#f2f8f1] h-full py-5 md:py-14'>
            <div className='max-w-screen-lg  mx-auto'>
                <form onSubmit={handleSubmit} className='flex gap-5 flex-col justify-center' action="">
                    <div className='grid justify-center items-center md:grid-cols-2 xl:grid-cols-3 gap-5'>
                        <div className='flex mx-auto max-w-max flex-col gap-5'>
                            <label className="form-control w-[300px]">
                                <div className="label max-w-max">
                                    <span className="label-text">Scholarship Title</span>
                                </div>
                                <input required name='scholarshipName' type="text" placeholder="Type here" className="input input-bordered w-[300px]" />
                            </label>
                            <label className="form-control w-[300px]">
                                <div className="label max-w-max">
                                    <span className="label-text">University Name</span>
                                </div>
                                <input name='universityName' required type="text" placeholder="Type here" className="input input-bordered w-[300px]" />
                            </label>
                            <label className="form-control w-[300px]">
                                <div className="label max-w-max">
                                    <span className="label-text">University Logo</span>
                                </div>
                                <input name='universityImage' required type="file" placeholder="Type here" className="input py-2 input-bordered w-[300px]" />
                            </label>
                            <label className="form-control w-[300px]">
                                <div className="label max-w-max">
                                    <span className="label-text">Country</span>
                                </div>
                                <input name='universityCountry' required type="text" placeholder="Type here" className="input input-bordered w-[300px]" />
                            </label>
                            <label className="form-control w-[300px]">
                                <div className="label max-w-max">
                                    <span className="label-text">City</span>
                                </div>
                                <input name='universityCity' required type="text" placeholder="Type here" className="input input-bordered w-[300px]" />
                            </label>
                        </div>
                        <div className='flex mx-auto max-w-max  flex-col gap-5'>
                            <label className="form-control w-[300px]">
                                <div className="label max-w-max">
                                    <span className="label-text">Subject category</span>
                                </div>
                                <select defaultValue={'none'} className='input input-bordered' name="subjectCategory" id="">
                                    <option disabled value="none">Select One</option>
                                    <option value="Agriculture">Agriculture</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Doctor">Doctor</option>
                                </select>
                            </label>
                            <label className="form-control w-[300px]">
                                <div className="label max-w-max">
                                    <span className="label-text">Scholarship category</span>
                                </div>
                                <select defaultValue={'none'} className='input input-bordered' name="scholarshipCategory" id="">
                                    <option disabled value="none">Select One</option>
                                    <option value="Full fund">Full fund</option>
                                    <option value="Partial">Partial</option>
                                    <option value="Self-fund">Self-fund</option>
                                </select>
                            </label>
                            <label className="form-control w-[300px]">
                                <div className="label max-w-max">
                                    <span className="label-text">Degree </span>
                                </div>
                                <select defaultValue={'none'} className='input input-bordered' name="degree" id="">
                                    <option disabled value="none">Select One</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Bachelor">Bachelor</option>
                                    <option value="Masters">Masters</option>
                                </select>
                            </label>
                            <label className="form-control w-[300px]">
                                <div className="label max-w-max">
                                    <span className="label-text">Tuition fees</span>
                                </div>
                                <input name='tuitionFees' required type="number" placeholder="Type here" className="input input-bordered w-[300px]" />
                            </label>
                            <label className="form-control w-[300px]">
                                <div className="label max-w-max">
                                    <span className="label-text">Application Fee</span>
                                </div>
                                <input name='applicationFees' required type="number" placeholder="Type here" className="input input-bordered w-[300px]" />
                            </label>
                        </div>
                        <div className='flex mx-auto max-w-max flex-col gap-5'>
                            <label className="form-control w-[300px]">
                                <div className="label max-w-max">
                                    <span className="label-text">Service Charge</span>
                                </div>
                                <input name='serviceCharge' required type="number" placeholder="Type here" className="input flex items-center input-bordered w-[300px]" />
                            </label>
                            <label className="form-control w-[300px]">
                                <div className="label max-w-max">
                                    <span className="label-text">Application Deadline</span>
                                </div>
                                <input name='applicationDeadline' required type="date" placeholder="Type here" className="input flex items-center input-bordered w-[300px]" />
                            </label>
                            <label className="form-control w-[300px]">
                                <div className="label max-w-max">
                                    <span className="label-text">World Rank</span>
                                </div>
                                <input name='universityWorldRank' required type="number" placeholder="Type here" className="input input-bordered w-[300px]" />
                            </label>
                            <label className="form-control w-[300px]">
                                <div className="label max-w-max">
                                    <span className="label-text">Description</span>
                                </div><textarea placeholder='Write a description' name="description" className="input p-2 input-bordered w-[300px] h-40" id=""></textarea>
                            </label>
                        </div>
                    </div>
                    <div className='flex pt-4 justify-center'>
                        <button className="btn transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white px-7">Add Scholarship</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddScholarships;