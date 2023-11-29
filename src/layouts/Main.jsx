import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import LefttSiteNav from '../Pages/Shared/RightSiteNav/LeftSiteNav';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3">
                    <LefttSiteNav></LefttSiteNav>
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