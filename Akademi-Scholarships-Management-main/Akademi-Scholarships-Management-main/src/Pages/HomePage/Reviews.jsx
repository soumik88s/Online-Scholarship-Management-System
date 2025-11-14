import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            university: "Harvard University",
            review: "This scholarship platform helped me find the perfect funding opportunity for my studies. The application process was smooth and I received my scholarship within weeks!",
            rating: 5,
            image: "https://i.pravatar.cc/150?" // Placeholder image URL
        },
        {
            id: 2,
            name: "Sarah Johnson",
            university: "Stanford University",
            review: "I was struggling to find scholarships that matched my profile until I discovered this platform. The personalized recommendations were spot on!",
            rating: 4,
            image: "https://i.pravatar.cc/150?"
        },
        {
            id: 3,
            name: "Michael Chen",
            university: "MIT",
            review: "The scholarship application process can be overwhelming, but this platform made it so much easier. I'm grateful for their support throughout my journey.",
            rating: 5,
            image: "https://i.pravatar.cc/150?"
        },
        {
            id: 4,
            name: "Emily Wilson",
            university: "Yale University",
            review: "The platform's user-friendly interface and comprehensive scholarship database made my search process incredibly efficient. Highly recommended!",
            rating: 5,
            image: "https://i.pravatar.cc/150?"
        },
        {
            id: 5,
            name: "David Kim",
            university: "Princeton University",
            review: "Thanks to this platform, I found multiple scholarships that perfectly matched my academic profile. The application tracking feature was particularly helpful.",
            rating: 4,
            image: "https://i.pravatar.cc/150?"
        }
    ];

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">What Our Students Say</h2>
                <p  className='text-center text-sm md:text-base max-w-2xl mx-auto pt-3 md:pt-5 mb-4 sm:mb-6 md:mb-8'>
                    Discover how our scholarship platform has transformed the lives of students around the world. Read their success stories and see how we can help you achieve your academic dreams.
                </p>
                <div className="relative">
                    <style>
                        {`
                            .swiper {
                                padding: 20px;
                            }
                            .review-card {
                                position: relative;
                                transition: all 0.3s ease;
                                transform: translateY(0);
                            }
                            .review-card:hover {
                                transform: translateY(-20px);
                            }
                            .swiper-pagination-bullet {
                                background: #4B5563;
                            }
                            .swiper-pagination-bullet-active {
                                background: #1F2937;
                            }
                        `}
                    </style>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            10: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className="review-card bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex items-center mb-4">
                                        <img src={review.image+'img='+review.id} className="w-12 h-12 rounded-full mr-4" />
                                        <div>
                                            <h3 className="font-semibold">{review.name}</h3>
                                            <p className="text-sm text-gray-600">{review.university}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-4">{review.review}</p>
                                    <div className="flex">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Reviews; 