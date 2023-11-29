import React from 'react';
import { FaCheckSquare, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const course = useLoaderData([])
    console.log(course);
    const { title, image_url, details, price, others_info, duration, technology, rating, total_view, author } = course
    return (
        <div className=''>
            <div className="card w-3/4 glass mx-auto">
                <figure><img src={image_url} className='w-full h-96' alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div className='flex justify-between'>
                        <h4 className='font-bold text-xl mt-4'>Price: {price} tk BDT</h4>
                        <h4 className='font-bold text-xl mt-4'>Verified {others_info.is_trending}</h4>
                        <h4 className='font-bold text-xl mt-4'>Duration: {duration} Month</h4>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-2xl font-bold mt-5 text-orange-700'>Technology we used</h3>
                            <p className=' text-green-500'>
                                {
                                    technology.map(showTech => <p className='flex my-3 ps-5'
                                        key={showTech.id}
                                    >
                                        <FaCheckSquare className='mt-1' /> <Link className='ps-3'> {showTech.name}</Link>
                                    </p>)
                                }
                            </p>
                        </div>
                        <div className='mt-5'>
                            <div>
                                <h4 className='text-2xl font-bold mt-5 text-orange-700'>Mentor</h4>
                                <div className='flex justify-center items-center mt-3'>
                                    <img src={author.img} style={{height:'60px',borderRadius:'100%'}} alt="" />
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
                                <span className='ms-1'>{rating?.number}</span>
                            </div>
                            <div className='flex'>
                                <FaEye className='mt-1'></FaEye><span className='ms-1'>{total_view}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to='/dashboard'>Enroll Now!</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;