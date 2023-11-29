import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="col-span-2">
                    <Outlet></Outlet>
                </div>
                <div className="row-span-3">
                    <LeftSideNav></LeftSideNav>
                </div>
            </div>
        </div>
    );
};

export default Courses;