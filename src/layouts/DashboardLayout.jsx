import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Dashboard from '../Pages/Courses/Dashboard/Dashboard';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;