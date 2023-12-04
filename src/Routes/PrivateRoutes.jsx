import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if (user) {
        return children;
    }
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoutes;