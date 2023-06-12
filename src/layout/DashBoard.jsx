import React from 'react';
import { FaAddressCard, FaBook, FaHome, FaUserFriends, FaUserGraduate } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <Navbar></Navbar>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-sky-800 font-bold text-xl pt-64 mx-auto">
                    <li><NavLink to="/dashboard/mycart"><FaBook></FaBook> My selected Classes</NavLink></li>
                    <li><NavLink to="/dashboard/myenrolled"><FaAddressCard></FaAddressCard> My enrolled classes</NavLink></li>

                    <div className="divider text-white">OR</div>

                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/instructor"><FaUserGraduate></FaUserGraduate> Instructor</NavLink></li>
                    <li><NavLink to="/classes"><FaUserFriends></FaUserFriends> Classes</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;