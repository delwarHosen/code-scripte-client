import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const LefttSiteNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold text-pink-600'>All Courses</h2>
            <div className='ml-10 mt-5'>
                {
                    categories.map(category => <p
                    className='my-3 flex text-green-500 font-bold'
                        key={category.id}
                    >
                    <FaCheck className='mt-1'></FaCheck><Link to={`/category/${category.id}`} className='ml-2'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LefttSiteNav;