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
            <div className="navbar bg-base-400">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">DaisyUI</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Item 1</a></li>
                        <li tabIndex="0">
                            <a>
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            {(user) ?
                                <button onClick={handleLogOut} className='text-decoration-none' >Logout</button>
                                : <NavLink className='text-decoration-none' to='/login'>Login</NavLink>}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Headers;