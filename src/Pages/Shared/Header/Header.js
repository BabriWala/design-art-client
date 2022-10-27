import React from 'react';
import Logo from '../../../Assets/Logo/Logo.png';
import {CiDark, CiLight} from 'react-icons/ci';

import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img className='logo' src={Logo} alt="Logo"/>
                    <span className='ml-2 text-xl font-bold design-art'>Design Art</span>
                </div>
                <div className="flex-none">
                    <div>
                        <ul className="menu menu-horizontal p-0">
                        <li><p>Courses</p></li>
                        <li><p>FAQ</p></li>
                        <li><p>Blog</p></li>
                        </ul>
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people"  alt='Profile'/>
                            </div>
                        </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <p className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </p>
                        </li>
                        <li><p>Settings</p></li>
                        <li><p>Logout</p></li>
                    </ul>
                    </div>

                    {
                      <> <CiDark /> <CiLight /></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;