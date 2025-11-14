import React from 'react';
import OtherPageBanner from '../../Hooks/OtherPageBanner';

const AddScholarships = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
    }
    return (
        <section>
            <div>
                <OtherPageBanner />
            </div>
            <div className='py-20'>
                <form onSubmit={handleSubmit}>
                    <div className="w-full flex flex-col md:flex-row items-center mx-auto gap-6 justify-center py-4 max-w-[768px]">
                        <div className="flex flex-col space-y-4 w-full max-w-sm">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Image URL</span>
                                </div>
                                <input required name='imageURL' type="url" placeholder="Image URL" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Book name</span>
                                </div>
                                <input required name='bookName' type="text" placeholder="Book name" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Author name</span>
                                </div>
                                <input required name='authorName' type="text" placeholder="Author name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="flex flex-col space-y-4 w-full max-w-sm">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Select book category</span>
                                </div>
                                <select required className="select select-bordered w-full" name="category" defaultValue="Select book category">
                                    <option disabled value="">Select book category</option>
                                    <option value="comic_books">Comic Books</option>
                                    <option value="arts_photography">Arts Photography</option>
                                    <option value="business_money">Business Money</option>
                                    <option value="children_books">Children Books</option>
                                    <option value="travel_books">Travel Books</option>
                                </select>
                            </label>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Quantity</span>
                                </div>
                                <input required name='quantity' type="number" min={1} placeholder="Quantity" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Ratings</span>
                                </div>
                                <div>
                                    <input required name='ratings' type="number" min={0} max={5} step={0.5} placeholder="Ratings" className="input input-bordered w-full" />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="container flex flex-col items-center mx-auto pt-0">
                        <label className="form-control w-full max-w-sm md:max-w-3xl">
                            <div className="label">
                                <span className="label-text">Short description</span>
                            </div>
                            <input required name='shortDescription' type="text" placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full max-w-sm md:max-w-3xl">
                            <div className="label">
                                <span className="label-text">Book content</span>
                            </div>
                            <textarea required name='bookContent' className="textarea textarea-bordered w-full h-28" placeholder="Book content"></textarea>
                        </label>
                    </div>

                    <div className='text-center'>
                        <button className="btn btn-primary text-base md:text-lg mt-4">Add new book</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddScholarships;