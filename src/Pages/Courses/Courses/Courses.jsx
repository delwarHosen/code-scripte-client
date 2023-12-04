import React from 'react';
import { FaArrowRight, FaCheckSquare, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import resume from './../../../assets/delwarResume.pdf'

const Courses = () => {
    const course = useLoaderData([])
    // console.log(course);
    const { title, image_url, details, price, others_info, duration, technology, rating, total_view, author } = course
    return (
        <div className=''>
            <div className="card sm:w-3/4 glass mx-auto">
                <figure><img src={image_url} className='w-full h-96' alt="car!" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title text-xl font-semibold bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans">{title}</h2>
                        <button className="btn btn-accent text-white font-medium text-lg bg-gradient-to-r from-indigo-500 to-pink-500"> <a href={resume} download={resume} >PDF Download </a></button>
                    </div>
                    <p className='mt-2'>{details}</p>
                    <div className='sm:flex justify-between'>
                        <h4 className='font-bold mt-4'><span className='text-3xl font-semibold bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans'>Price:</span> <span className='text-xl font-semibold bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans'>{price} tk BDT</span></h4>
                        <h4 className='font-bold text-xl mt-4'>Verified {others_info.is_trending}</h4>
                        <h4 className='font-bold text-xl mt-4 '><span className='text-3xl font-semibold text-pink-500'>Duration:</span> <span className='bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans'>{duration} Month</span></h4>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-xl font-bold mt-5 bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans'>Technology we used</h3>
                            <p className=' text-green-500'>
                                {
                                    technology.map(showTech => <p className='flex my-3 ps-5'
                                        key={showTech.id}
                                    >
                                        <FaCheckSquare className='mt-1 text-pink-400' /> <Link className='ps-3 bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans'> {showTech.name}</Link>
                                    </p>)
                                }
                            </p>
                        </div>
                        <div className='mt-5'>
                            <div>
                                <h4 className='text-xl font-bold mt-5 bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans'>Mentor</h4>
                                <div className='flex justify-center items-center mt-3'>
                                    <img src={author.img} style={{ height: '60px', borderRadius: '100%' }} alt="" />
                                    <p className='ms-2 text-xl font-semibold'>{author.name}</p>
                                </div>
                                <Rating
                                    className='text-amber-500 grow-1 mt-5'
                                    placeholderRating={rating?.number}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                    readonly
                                />
                                <span className='ms-1 font-semibold bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans'>{rating?.number}</span>
                            </div>
                            <div className='flex'>
                                <FaEye className='mt-1'></FaEye><span className='ms-1 font-semibold bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans'>{total_view}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent text-white font-medium text-lg bg-gradient-to-r from-indigo-500 to-pink-500"> <Link to='/dashboard' >Enroll Now </Link><FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;