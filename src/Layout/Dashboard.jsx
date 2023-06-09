import React from 'react';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <h2>hiiiiiiiiiiiiiiiiiiiiiiiii</h2>

                </div>
                <div className="drawer-side forActive bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content uppercase ">
                        {/* Sidebar content here */}
                        <li><NavLink to='/dashboard/home'><FaHome></FaHome> USER HOME</NavLink></li>
                        <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> RESERVATION</NavLink></li>
                        <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment history</NavLink></li>
                        <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                        <div className="divider"></div>

                        <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to='/menu'>Our Menu</NavLink></li>
                        <li><NavLink to='/order/salad'>Order Food</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;