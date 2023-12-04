import React from 'react';
import { FaArrowRight, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const CourseCart = ({ category }) => {
    const { _id, title, image_url, details, price, total_view, duration, rating, technology } = category
    return (
        <div className="card w-4/5 bg-base-100 shadow-xl mb-4 container mx-auto">
            <figure><img src={image_url} className='rounded-lg p-2' style={{ width: "100%", height: "350px" }} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-semibold bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans">
                    {title}
                </h2>
                <p>{details}</p>
                <div className="card-actions mt-4 justify-between">
                    <p><span className='text-3xl font-semibold bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans'>Price:</span> <span className='text-xl font-semibold bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans'>{price} Tk BDT</span></p>
                    <p><span className='text-3xl font-semibold bg-gradient-to-r from-pink-600 to-blue-600 inline-block text-transparent bg-clip-text font-sans'>Duration:</span> <span className='text-xl font-semibold bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans'>{duration} Month</span></p>
                </div>
            </div>
            <div className="px-6 py-4 shadow flex justify-between">
                <div>
                    <div>
                        <Rating
                            className='text-amber-500 grow-1 ml-3'
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            readonly
                        />
                        <span className='ms-2 bg-gradient-to-r from-pink-600 to-blue-600 inline-block text-transparent bg-clip-text font-sans'>{rating?.number}</span>
                    </div>
                    <div className='flex font-medium bg-gradient-to-r from-pink-600 to-blue-600 text-transparent bg-clip-text font-sans'>
                        <FaEye className='mt-1 ml-3 text-pink-500'></FaEye><span className='ms-1'>{total_view}</span>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button className="btn btn-accent text-white font-medium text-lg bg-gradient-to-r from-indigo-500 to-pink-500"> <Link to={`/courses/${_id}`} >See Details </Link><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default CourseCart;

