import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="navbar bg-base-100 bg-gradient-to-r from-gray-100 to-gray-200 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/category/0' className='text-lg font-semibold font-mono text-gray-600'>Courses</Link></li>
                        <li>
                            <Link to='/contact' className='text-lg font-semibold font-mono text-gray-600'>Contact</Link>
                        </li>
                        <li><Link to='/blog' className='text-lg font-semibold font-mono text-gray-600'>Blog</Link></li>
                    </ul>
                </div>
                <h3 className="text-2xl font-bold text-slate-600 font-mono"><span className='text-4xl bg-gradient-to-r from-blue-600 to-pink-500 inline-block text-transparent bg-clip-text'>CODE</span> SCRIPT</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/category/0' className='text-xl font-semibold font-mono text-gray-600'>Courses</Link></li>
                    <li>
                        <Link to='/contact' className='text-xl font-semibold font-mono text-gray-600'>Contact</Link>
                    </li>
                    <li><Link to='/blog' className='text-xl font-semibold font-mono text-gray-600'>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <FaUserCircle title={user.displayName} className='text-5xl' />
                }
                {
                    user ? <button className="btn btn-error text-xl font-mono font-bold text-white"><Link onClick={handleLogOut} to='/category/0'>Logout</Link></button>
                        :
                        <Link className="btn btn-accent text-xl font-mono font-bold text-white" to='/login'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Header;