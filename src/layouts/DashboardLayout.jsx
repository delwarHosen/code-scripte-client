import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Dashboard from '../Pages/Courses/Dashboard/Dashboard';

const DashboardLayout = () => {
    return (
        <div>
           <Header></Header> 
           <Dashboard></Dashboard>
        </div>
    );
};

export default DashboardLayout;