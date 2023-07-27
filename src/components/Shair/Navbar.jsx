import React, { useContext } from 'react';
import logo from '../../../public/logo.png'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../Provider/AuthProvider';
// import { AuthContext } from '../../Provider/AuthProvider';


const Navbar = () => {


    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin(null);

    const hanidleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }



    return (
        <div className=''>
            <div className="navbar bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><a>Descount</a></li>
                            <li><a>About</a></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>


                        </ul>
                    </div>
                    <img className="btn btn-ghost normal-case text-xl md:block hidden" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li tabIndex={0}>

                        </li>
                        <li><Link to="/">Home</Link></li>
                        <li><a>Descount</a></li>
                        <li><a>Dashoard</a></li>
                        <li><a>About</a></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
               

                    </ul>
                </div>
                <div className="navbar-end gap-5">

                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>

                    <div className="w-10 rounded-full">
                        <img className='rounded-full' src={user ?.photoUrl} />
                    </div>

                    {
                        user ? <>
                            <span>{user?.displayName}</span>
                            <button onClick={hanidleLogOut} className="btn btn-ghost">LogOut</button>
                        </> : <>
                            <li><Link to='/login'>Login</Link></li>
                        </>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;



