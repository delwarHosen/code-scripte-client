import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const LeftSiteNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='text-center sticky top-16'>
            <h2 className='text-xl font-bold mt-3 ml-7 bg-gradient-to-r from-blue-600 to-pink-500 inline-block text-transparent bg-clip-text font-sans'>All Category</h2>
            <div className='ml-20 mt-5 max-w-md mx-auto bg-white shadow-md overflow-hidden sm:rounded-md'>
                <ul className='px-8'>
                    {
                        categories.map(category => <li
                            className='my-3 p-1 flex font-medium font-sans bg-gradient-to-r from-pink-500 to-blue-600 text-transparent bg-clip-text'
                            key={category.id}
                        >
                            <FaCheck className='mt-1 text-pink-500' /><Link to={`/category/${category.id}`} className='ml-2 hover:underline hover:text-blue-500'>{category.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default LeftSiteNav;

{/* <div className="text-center sm:text-left md:text-center lg:text-right xl:text-center"> */}
