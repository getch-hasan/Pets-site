import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';


const Nabvar = () => {
    const [user] = useAuthState(auth)
   
        const [signOut, loading, error] = useSignOut(auth);

        if (error) {
            return (
                <div>
                    <p>Error: {error.message}</p>
                </div>
            );
        }
        if (loading) {
            return <p>Loading...</p>;
        }
    
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


                    {
                        user ? <div class="dropdown flex flex-2 items-center justify-end gap-8 dropdown-end ">
                            <p>{user.displayName}</p>
                            <label tabindex="0" class="btn btn-ghost flex btn-circle avatar">

                                <div class="w-10 rounded-full flex">

                                    <img src={user.img} />
                                </div>
                            </label>
                            <ul tabindex="0" class="mt-48 z-[1] p-2 shadow menu menu-md dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link class="justify-between">
                                        Profile
                                        <span class="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link to='/setting' >Settings</Link></li>
                                <li><button onClick={async () => {
                                    const success = await signOut();
                                    if (success) {
                                        alert('You are sign out');
                                    }
                                }} >Logout</button></li>
                            </ul>
                        </div> : <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Nabvar;