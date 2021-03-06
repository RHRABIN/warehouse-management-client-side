import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Init.Firebase';


const Headers = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <div>
            {/* <div className="navbar bg-amber-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 me-1 d-inline-block">

                        <li></li>
                        <li>


                            <NavLink className='text-decoration-none' to='/blog'>Blogs</NavLink>


                        </li>
                        <li>
                            {
                                (user) ?
                                    <NavLink className='text-decoration-none' to='/manage'>Manage Item</NavLink>
                                    : ''
                            }

                        </li>
                        <li>
                            {
                                (user) ?
                                    <NavLink className='text-decoration-none' to='/add'>Add Item</NavLink>
                                    : ''
                            }

                        </li>
                        <li>
                            {
                                (user) ?
                                    <NavLink className='text-decoration-none' to='/myitem'>My Item</NavLink>
                                    : ''
                            }

                        </li>
                        <li>
                            {(user) ?
                                <button onClick={handleLogOut} className='text-decoration-none' >Logout</button>
                                : <NavLink className='text-decoration-none' to='/login'>Login</NavLink>}
                        </li>
                    </ul>
                </div>
            </div> */}
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                        <li><a>Item 1</a></li>
                        <li tabindex="0">
                            <a>
                                Parent
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2 bg-base-100">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Headers;