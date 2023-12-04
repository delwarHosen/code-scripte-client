import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../../CourseCart/CourseCart';

const Category = () => {
    const categories = useLoaderData()
    // console.log(categories);
    return (
        <div className=''>
           {
            categories &&  <h2 className='text-2xl font-bold mt-3 font-sans text-center text-pink-500'>This category length: {categories.length}</h2>
           }
            <div>
                {
                    categories.map(category=> <CourseCart
                    key={category.id}
                    category={category}
                    ></CourseCart>)
                }
            </div>
        </div>
    );
};

export default Category;