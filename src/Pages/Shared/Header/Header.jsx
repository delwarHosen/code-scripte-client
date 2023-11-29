import React, { useContext } from 'react';
import logo from '../../../assets/logo-code-craft_876127-13.avif'
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li>
                            <Link to='/category/0'>Item 2</Link>
                        </li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Code Script</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li>
                    <Link to='/category/0'>Courses</Link>
                    </li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">login</a>
            </div>
        </div>
    );
};

export default Header;