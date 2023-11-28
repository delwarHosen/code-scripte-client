import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import RightSiteNav from '../Pages/Shared/RightSiteNav/RightSiteNav';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3">
                    <RightSiteNav></RightSiteNav>
                </div>
                <div className="col-span-2">
                    <h3 className='text-3xl'>Main content comming soon.....</h3>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;