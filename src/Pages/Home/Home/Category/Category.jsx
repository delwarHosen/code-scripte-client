import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../../CourseCart/CourseCart';

const Category = () => {
    const categories = useLoaderData()
    console.log(categories);
    return (
        <div>
            <h2>This is category</h2>
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