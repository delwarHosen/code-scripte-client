import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ShowError = () => {
    const error = useRouteError()
    return (
        <div className='text-center border-l p-28 shadow-lg mt-28 w-96 mx-auto'>
            <p className='text-red-700'>Something went wrong</p>
            <p className='text-red-700'>{error.statusText || error.message}</p>
            <button className='btn btn-error'><Link to='/category/0'>Go to Home</Link></button>
        </div>
    );
};

export default ShowError;