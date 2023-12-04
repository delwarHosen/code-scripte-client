import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import LeftSiteNav from '../Pages/Shared/LeftSiteNav/LeftSiteNav';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className="grid sm:grid-cols-3 gap-4">
                <div className="">
                    <LeftSiteNav></LeftSiteNav>
                </div>
                <div className="col-span-2">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;