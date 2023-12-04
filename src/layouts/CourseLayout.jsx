import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
// import LeftSideNav from '../Pages/Shared/RightSiteNav/LeftSideNav';
import RightSiteNav from '../Pages/Shared/RightSiteNav/RightSiteNav';

const CourseLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="grid sm:grid-cols-3 gap-4">
                <div className="col-span-2">
                    <Outlet></Outlet>
                </div>
                <div className="sm:w-full">
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default CourseLayout;