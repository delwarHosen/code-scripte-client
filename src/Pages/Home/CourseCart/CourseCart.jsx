import React from 'react';
import { FaArrowLeft, FaArrowRight, FaEye, FaHeart, FaRegStar, FaShoppingCart, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';

const CourseCart = ({ category }) => {
    const {id} = useParams()
    const { _id, title, image_url, details, price, total_view, duration, rating,technology } = category
    return (
        <div className="card w-4/5 bg-base-100 shadow-xl mb-4 container mx-auto">
            <figure><img src={image_url} className='rounded-lg p-2' style={{ width: "100%", height: "350px" }} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{details}</p>
                <div className="card-actions mt-4 justify-between">
                    <p className='text-xl font-bold'>Price: {price} Tk BDT</p>
                    <p className='text-xl font-bold'>Duration: {duration} Month</p>
                </div>
            </div>
            <div className="px-6 py-4 shadow flex justify-between">
                <div>
                    <div>
                        <Rating
                            className='text-amber-500 grow-1'
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
                <div className='flex justify-end'>
                    <button className="btn btn-accent"><Link to={`/course/${_id}`}>See Details</Link><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default CourseCart;

