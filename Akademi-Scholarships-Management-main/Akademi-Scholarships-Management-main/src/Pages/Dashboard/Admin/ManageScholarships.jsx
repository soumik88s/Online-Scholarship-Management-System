import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageScholarships = () => {
  const { user } = useContext(AuthContext)
  const [refetch, setRefetch] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://akademi-university-project.vercel.app/all-data`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => toast.error('Failed to fetch scholarship data'))
  }, [refetch])

  const handleDelete = (id) => {
    fetch(`https://akademi-university-project.vercel.app/delete-scholarship/${id}?email=${user?.email}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(res => {
        if (res.deletedCount > 0) {
          setRefetch(!refetch)
          toast.success('Scholarship Data deleted successfully')
        }
      })
      .catch(err => {
        toast.error('Failed to delete scholarship data')
      })
  }

  const handleUpdate = (e, id, idx) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    const month = new Date(new Date()).toLocaleDateString('default', { month: 'long' })
    const day = new Date(new Date()).getDay()
    const year = new Date(new Date()).getFullYear()
    const newDate = (`${month} ${day}, ${year}`);

    const imageFile = new FormData();
    imageFile.append('image', formData.get('universityImage'));

    fetch('https://api.imgbb.com/1/upload?key=48b282cb34af9841dcce86814f69cd23', {
      method: 'POST',
      body: imageFile,
    }).then(res => res.json())
      .then(res => {
        fetch(`https://akademi-university-project.vercel.app/update-scholarship/${id}?email=${user?.email}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...data, applicationDeadline: newDate, applicationFees: parseInt(data.applicationFees), serviceCharge: parseInt(data.serviceCharge), tuitionFees: parseInt(data.tuitionFees), universityImage: res.data.url, universityWorldRank: parseInt(data.universityWorldRank) })
        })
          .then(res => res.json())
          .then(res => {
            if (res.modifiedCount > 0) {
              toast.success('Scholarship Data updated successfully')
              setRefetch(!refetch)
              document.getElementById(`my_modal_${idx}`).checked = false
            }
          })
          .catch(err => {
            toast.error('Failed to update scholarship data')
          })
      })
      .catch(err => toast.error('Failed to upload image. Please try again later'))
  }

  return (
    <section className='bg-[#f2f8f1] py-14 h-full'>
      <div className="overflow-x-auto">
        <table className="table text-center">
          <thead>
            <tr>
              <th>Number</th>
              <th>University Name</th>
              <th>Scholarship name</th>
              <th>Subject Category</th>
              <th>Degree</th>
              <th>Application Fees</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, idx) => <><tr key={item?._id}>
                <th>{idx + 1}</th>
                <th>{item?.universityName}</th>
                <td className=' max-w-40'>{item.scholarshipName}</td>
                <td>{item.subjectCategory}</td>
                <td>{item.degree}</td>
                <td>${item.applicationFees}</td>
                <th>
                  <label htmlFor={`my_modal_${idx}`} className="btn btn-ghost btn-xs"><FaPen /></label>
                  <Link to={`/scholarship-details/${item._id}`}><button className="btn btn-ghost btn-xs"><FaEye /></button></Link>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-red-600 btn-xs"><FaTrash /></button>
                </th>
              </tr>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id={`my_modal_${idx}`} className="modal-toggle" />
                <div className="modal" role="dialog">
                  <div className='max-w-screen-lg p-5 rounded-2xl bg-white mx-auto'>
                    <form onSubmit={e => handleUpdate(e, item._id, idx)} className='flex gap-5 flex-col justify-center' action="">
                      <div className='flex gap-5 justify-center'>
                        <div className='flex flex-col gap-5'>
                          <label className="form-control w-[300px]">
                            <div className="label">
                              <span className="label-text">Scholarship Title</span>
                            </div>
                            <input required defaultValue={item.scholarshipName} name='scholarshipName' type="text" placeholder="Type here" className="input input-bordered w-[300px]" />
                          </label>
                          <label className="form-control w-[300px]">
                            <div className="label">
                              <span className="label-text">University Name</span>
                            </div>
                            <input defaultValue={item.universityName} name='universityName' required type="text" placeholder="Type here" className="input input-bordered w-[300px]" />
                          </label>
                          <label className="form-control w-[300px]">
                            <div className="label">
                              <span className="label-text">University Logo</span>
                            </div>
                            <input name='universityImage' required type="file" placeholder="Type here" className="input py-2 input-bordered w-[300px]" />
                          </label>
                          <label className="form-control w-[300px]">
                            <div className="label">
                              <span className="label-text">Country</span>
                            </div>
                            <input defaultValue={item.universityCountry} name='universityCountry' required type="text" placeholder="Type here" className="input input-bordered w-[300px]" />
                          </label>
                          <label className="form-control w-[300px]">
                            <div className="label">
                              <span className="label-text">City</span>
                            </div>
                            <input defaultValue={item.universityCity} name='universityCity' required type="text" placeholder="Type here" className="input input-bordered w-[300px]" />
                          </label>
                        </div>
                        <div className='flex flex-col gap-5'>
                          <label className="form-control w-[300px]">
                            <div className="label">
                              <span className="label-text">Subject category</span>
                            </div>
                            <select defaultValue={item.subjectCategory} className='input input-bordered' name="subjectCategory" id="">
                              <option disabled value="none">Select One</option>
                              <option value="Agriculture">Agriculture</option>
                              <option value="Engineering">Engineering</option>
                              <option value="Doctor">Doctor</option>
                            </select>
                          </label>
                          <label className="form-control w-[300px]">
                            <div className="label">
                              <span className="label-text">Scholarship category</span>
                            </div>
                            <select defaultValue={item.scholarshipCategory} className='input input-bordered' name="scholarshipCategory" id="">
                              <option disabled value="none">Select One</option>
                              <option value="Full fund">Full fund</option>
                              <option value="Partial">Partial</option>
                              <option value="Self-fund">Self-fund</option>
                            </select>
                          </label>
                          <label className="form-control w-[300px]">
                            <div className="label">
                              <span className="label-text">Degree </span>
                            </div>
                            <select defaultValue={item.degree} className='input input-bordered' name="degree" id="">
                              <option disabled value="none">Select One</option>
                              <option value="Diploma">Diploma</option>
                              <option value="Bachelor">Bachelor</option>
                              <option value="Masters">Masters</option>
                            </select>
                          </label>
                          <label className="form-control w-[300px]">
                            <div className="label">
                              <span className="label-text">Tuition fees</span>
                            </div>
                            <input defaultValue={item.tuitionFees} name='tuitionFees' required type="number" placeholder="Type here" className="input input-bordered w-[300px]" />
                          </label>
                          <label className="form-control w-[300px]">
                            <div className="label">
                              <span className="label-text">Application Fee</span>
                            </div>
                            <input defaultValue={item.applicationFees} name='applicationFees' required type="number" placeholder="Type here" className="input input-bordered w-[300px]" />
                          </label>
                        </div>
                        <div className='flex flex-col gap-5'>
                          <label className="form-control w-[300px]">
                            <div className="label">
                              <span className="label-text">Service Charge</span>
                            </div>
                            <input defaultValue={item.serviceCharge} name='serviceCharge' required type="number" placeholder="Type here" className="input flex items-center input-bordered w-[300px]" />
                          </label>
                          <label className="form-control w-[300px]">
                            <div className="label">
                              <span className="label-text">Application Deadline</span>
                            </div>
                            <input defaultValue={new Date(item.applicationDeadline).toISOString().split('T')[0]} name='applicationDeadline' required type="date" placeholder="Type here" className="input flex items-center input-bordered w-[300px]" />
                          </label>
                          <label className="form-control w-[300px]">
                            <div className="label">
                              <span className="label-text">World Rank</span>
                            </div>
                            <input defaultValue={item.universityWorldRank} name='universityWorldRank' required type="number" placeholder="Type here" className="input input-bordered w-[300px]" />
                          </label>
                          <label className="form-control w-[300px]">
                            <div className="label">
                              <span className="label-text">Description</span>
                            </div><textarea defaultValue={item.description} placeholder='Write a description' name="description" className="input p-2 input-bordered w-[300px] h-40" id=""></textarea>
                          </label>
                        </div>
                      </div>
                      <div className='flex gap-5 pt-4 justify-center'>
                        <button className="btn transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white px-7">Update </button>
                        <label htmlFor={`my_modal_${idx}`} className="btn transition duration-300 hover:bg-[#b12c2c] hover:text-[#ffffff] bg-[#ff2525] text-white px-7">Cancel</label>
                      </div>
                    </form>
                  </div>
                </div>
              </>)
            }
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default ManageScholarships;