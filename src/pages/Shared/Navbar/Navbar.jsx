import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Navbar = () => {
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Instructor</Link></li>
        <li><Link to="/">Classes</Link></li>
        <li><Link to="/">DashBoard</Link></li>
        <li><Link to="/login">Login</Link></li>
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-slate-300 md:px-32">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <Link to='/signup'>
                        <button className="bg-gradient-to-r from-green-500 via-green-400 to-green-300 px-5 py-2 rounded ms-3 font-bold">Register Now</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;