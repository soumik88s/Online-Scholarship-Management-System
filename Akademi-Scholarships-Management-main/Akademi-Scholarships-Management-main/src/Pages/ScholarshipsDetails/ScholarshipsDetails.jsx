import { useState } from 'react';
import scholarshipsBanner from '../../assets/pricing-breadcrumb-1.jpg';
import { SlCalender } from 'react-icons/sl';
import { MdOutlineAccessTime } from 'react-icons/md';
import { IoLocationOutline, IoSchoolOutline } from 'react-icons/io5';
import { AiOutlineDollar } from 'react-icons/ai';
import Description from './Description';
import Review from './Review';
import OtherPageBanner from '../../Hooks/OtherPageBanner';
import { useLoaderData } from 'react-router-dom';
import { GiNotebook } from 'react-icons/gi';
import { PiCertificate, PiRanking } from 'react-icons/pi';
import { BsCashCoin } from 'react-icons/bs';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../PaymentGateway/PaymentForm';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import useRole from '../../Hooks/useRole';

const stripePromise = loadStripe(import.meta.env.VITE_publishableKey);

const ScholarshipsDetails = () => {
    const data = useLoaderData()[0]
    const [paymentSuccess, setPaymentSuccess] = useState(false)
    const { user, userId } = useRole()
    const { _id, scholarshipName, applicationFees, degree, scholarshipPostDate, universityImage, serviceCharge, universityName, universityCity, universityCountry, scholarshipCategory, subjectCategory, applicationDeadline, universityWorldRank, tuitionFees } = data
    const [toggle, setToggle] = useState(true)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        if (!data.gender) {
            return toast.error('Select your gender')
        }
        const imageFile = new FormData();
        imageFile.append('image', formData.get('image'));

        try {
            setLoading(true)
            const uploadImage = await fetch('https://api.imgbb.com/1/upload?key=48b282cb34af9841dcce86814f69cd23', {
                method: 'POST',
                body: imageFile,
            })

            console.log('apply log');
            if (!uploadImage.ok) {
                throw new Error("An error occurred while uploading your image. Please try again!")
            }
            const uploadImageData = await uploadImage.json()
            if (!uploadImageData.success) {
                throw new Error("An error occurred while uploading your image. Please try again!")
            }
            const applicationData = { ...data, applicationFees, serviceCharge, applicationDeadline: new Date(applicationDeadline).toISOString(), status: 'Pending', feedback: 'None', image: uploadImageData.data.url, userName: user.displayName, userEmail: user.email, userId, scholarshipId: _id, appliedData: new Date().toISOString(), scholarshipName }

            const apply = await fetch(`https://akademi-university-project.vercel.app/add-application`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(applicationData)
            })

            if (!apply.ok) {
                throw new Error("An error occurred while submitting your information.")
            }

            const res = await apply.json()

            if (res.insertedId) {
                toast.success('Application for scholarship success')
                document.getElementById('my_modal_7').checked = false

                // paymentSuccess is used to track if the user already paid but closed the modal before submitting information
                setPaymentSuccess(false)
                e.target.reset()
                return
            }

            throw new Error('Application unsuccessful')

        } catch (error) {
            const message = error instanceof Error ? error.message : "An unknown error happened. Please try again in a while!"
            console.log(error);
            toast.error(message)

        } finally {
            setLoading(false)
        }
    }


    const openModal = () => {
        if (!user) {
            return toast.error('Please log in first.')
        }

        if (paymentSuccess) {
            return document.getElementById("my_modal_7").click()
        }
        return document.getElementById("my_modal_6").click()
    }

    return (
        <section>
            <OtherPageBanner image={scholarshipsBanner} heading={'Your Scholarship at a Glance'} />
            <section className='bg-[#f2f8f1] py-20'>
                <div className="bg-white max-w-max mx-auto border-2 shadow-xl rounded-lg overflow-hidden  p-10 px-16 gap-10 flex">
                    <div className=" text-center flex flex-col max-w-36  items-center">
                        <img
                            className=" w-32  h-32 rounded-xl object-cover"
                            src={universityImage}
                            alt="Scholarship Card"
                        /> <h2 className="font-bold text-xl text-[#0c281b] mb-6">{universityName}</h2>
                    </div>

                    {/* main content part */}
                    <div>
                        <div className='space-y-2'>
                            <h2 className="font-bold text-3xl text-[#0c281b]">{scholarshipName}</h2>
                            <p className='flex text-sm items-center gap-2'><SlCalender />{scholarshipPostDate}</p>

                            <div className='flex justify-between flex-col md:flex-row'>
                                <div className='space-y-1'>
                                    <h2 className='text-xl pb-2 pt-3 font-bold'>About the University</h2>
                                    <p className='flex items-center gap-2'><PiRanking />{universityWorldRank}</p>
                                    <p className='flex items-center gap-2'><IoLocationOutline /> {universityCity + ', ' + universityCountry}</p>
                                    <p className='flex items-center gap-2'><MdOutlineAccessTime /> {applicationDeadline}</p>
                                    <p className='flex items-center gap-2'><BsCashCoin />{tuitionFees}<small className='-mt-2 -ml-1'>{'*Tuition fee'}</small></p>
                                </div>
                                <div className='space-y-1'>
                                    <h2 className='text-xl pb-2 pt-3 font-bold'>About the Scholarship</h2>
                                    <p className='flex items-center gap-2'><GiNotebook />{subjectCategory}</p>
                                    <p className='flex items-center gap-2'><PiCertificate />{degree}</p>
                                    <p className='flex items-center gap-2'>
                                        <IoSchoolOutline />{scholarshipCategory}</p>
                                    <p className='flex items-center gap-2'><AiOutlineDollar />{applicationFees + " + " + serviceCharge}<small className='-mt-2 -ml-1'>*service charge</small></p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button onClick={openModal} className="btn mt-4  transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white ml-1">Apply Now</button>
                        </div>
                    </div>
                </div>

                {/* description and reviews */}
                <div className='max-w-screen-lg mx-auto pt-16'>
                    <div>
                        <div className='flex gap-3 p-2 border-2 border-black max-w-max rounded-full'>
                            <button onClick={() => setToggle(true)} className={`transition duration-300 px-3 py-2 rounded-full ${toggle && 'bg-[#185137] text-white'}`}>Description</button>
                            <button onClick={() => setToggle(false)} className={`transition duration-300 px-3 py-2 rounded-full ${toggle || 'bg-[#185137] text-white'}`}>Reviews</button>
                        </div>
                    </div>
                    {toggle ? <Description description={data.description} /> : <Review scholarshipData={data} />}
                </div>
            </section>
            {/* Put this part before </body> tag */}
            <input required type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h2 className='text-xl font-semibold mb-5'>Amount needs to pay: {parseInt(serviceCharge) + parseInt(applicationFees)}</h2>
                    <Elements stripe={stripePromise}>
                        <PaymentForm setPaymentSuccess={setPaymentSuccess} price={parseInt(serviceCharge) + parseInt(applicationFees)} />
                    </Elements>
                </div>
            </div>
            <input required type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <form onSubmit={handleSubmit} className='modal-box rounded-xl max-w-2xl bg-white space-y-2'>
                    <div><h2 className='text-center text-3xl font-bold mb-7'>Please fill out this form</h2></div>
                    <h4 className='text-sm'>Required fields are marked as  <span className='text-red-600'>*</span></h4>
                    <div className="flex gap-5 justify-center">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Phone number  <span className='text-red-600'>*</span></span>
                            </div>
                            <input required name='phoneNumber' type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
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
                            <select defaultValue={'none'} name="gender" className="input input-bordered w-full max-w-xs" id="">
                                <option disabled value="none">Select One</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Address <span className='text-red-600'>*</span></span>
                            </div>
                            <input required name='address' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="flex gap-5 justify-center">

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">HSC result <span className='text-red-600'>*</span></span>
                            </div>
                            <input name='hscResult' min={1} max={5} step={0.01} required type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">SSC result <span className='text-red-600'>*</span></span>
                            </div>
                            <input name='sscResult' min={1} max={5} step={0.01} required type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="flex gap-5 justify-center">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Applying Degree <span className='text-red-600'>*</span></span>
                            </div>
                            <select defaultValue={degree} className="input input-bordered w-full max-w-xs" name="degree" id="">
                                <option value="Diploma">Diploma</option>
                                <option value="Bachelor">Bachelor</option>
                                <option value="Masters">Masters</option>
                            </select>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Study gap</span>
                            </div>
                            <select defaultValue={'none'} className="input input-bordered w-full max-w-xs" name="studyGap" id="">
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
                            <input required value={universityName} name='universityName' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label data-tip='Read Only' className="tooltip tooltip-error hover:tooltip-open form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Scholarship category <span className='text-red-600'>*</span></span>
                            </div>
                            <input required value={scholarshipCategory} name='scholarshipCategory' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className=" flex gap-5 justify-center">
                        <label data-tip='Read Only' className="tooltip tooltip-error hover:tooltip-open form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Subject Category <span className='text-red-600'>*</span></span>
                            </div>
                            <input required value={subjectCategory} name='subjectCategory' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label data-tip='Read Only' className="tooltip tooltip-error hover:tooltip-open form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">University address <span className='text-red-600'>*</span></span>
                            </div>
                            <input required name='universityAddress' value={universityCity + ", " + universityCountry} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="flex justify-center items-center gap-5 !mt-7">
                        {
                            loading ?
                                <div className='btn transition duration-300 hover:bg-[#185137] hover:text-white bg-[#185137] text-white px-7'>Submitting <span className='animate-spin border-2 rounded-full border-t-transparent w-4 h-4'></span></div>
                                :
                                <button className='btn transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white px-7'>Submit</button>
                        }
                        <label className='btn transition duration-300 hover:bg-[#b12c2c] hover:text-[#ffffff] bg-[#ff2525] text-white px-7' htmlFor="my_modal_7">close</label>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ScholarshipsDetails;