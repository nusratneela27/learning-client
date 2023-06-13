import React from 'react';
import { FaAddressCard, FaBook, FaHome, FaUserFriends, FaUserGraduate, FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Helmet } from 'react-helmet-async';

const DashBoard = () => {
    const isAdmin = false;
    const isInstructor = false;

    return (
        <div>
            <Helmet>
                <title>e Crtf| Dashboard</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-sky-800 font-bold text-xl pt-64 mx-auto">

                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/manageclass"><FaBook></FaBook>Manage Classes</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                            </> : <>
                            </>
                        }

                        {
                            isInstructor ? <>
                                <li><NavLink to="/dashboard/addclass"><FaBook></FaBook>Add a Class</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> My Classes</NavLink></li>
                            </> : <>
                            </>
                        }

                        {
                            !isAdmin && !isInstructor ? <>
                                <li><NavLink to="/dashboard/mycart"><FaBook></FaBook>My Selected Classes</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> My Enrolled Classes</NavLink></li>
                            </> : <>
                            </>
                        }

                        <div className="divider text-white py-5">OR</div>

                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to="/instructor"><FaUserGraduate></FaUserGraduate> Instructor</NavLink></li>
                        <li><NavLink to="/classes"><FaUserFriends></FaUserFriends> Classes</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;