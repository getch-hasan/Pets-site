import React from 'react';
import { Link } from 'react-router-dom';

const Nabvar = () => {
    return (
        <div className='base-400   '>
            <div class="navbar bg-base-100 grid grid-cols-3">
                <div class="flex-1">
                    
                    <Link to="/" class="btn btn-ghost normal-case text-xl">My Pet</Link>
                </div>
                <div className='grid grid-cols-4 justify-center'>
                    <div>
                        <Link to="/home" >Home</Link>
                    </div>
                    <div>
                        <Link to="/cats">Pets</Link>

                    </div>
                    <div>
                        <Link to="/review">Review</Link>
                    </div>
                    <div>
                        <Link to="/dashboard">Dashboard</Link>
                    </div>

                </div>
                <div class="flex-none gap-2 ms-64">


                    <div class="dropdown flex flex-2 items-center justify-end gap-8 dropdown-end ">
                        <p>MD hasan Miah</p>
                        <label tabindex="0" class="btn btn-ghost flex btn-circle avatar">

                            <div class="w-10 rounded-full flex">

                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nabvar;