import React from 'react';
import useAdmin from '../../hooks/useAdmin';
import { Link } from 'react-router-dom';
import Navbar from '../Shair/Navbar';

const Dashboard = () => {
    const [isAdmin] = useAdmin(null);

    return (
        <div className=''>

            <Navbar></Navbar>





            {
                isAdmin ? <div className='grid grid-rows-1 gap-5 '>
                    <span className="loading loading-ring loading-lg"></span>
                    <p className='text-5xl font-bold text-center'>Welcome to Admin Home</p>




                    <div className='flex mt-10'>

                        <button className='p-10 text-4xl border rounded-lg scale-125 hover:scale-150 ease-in duration-500 hover:text-pink-500 hover:bg-green-400 mx-auto shadow'>Add Product</button>

                        <button className='p-10 text-4xl border rounded-lg scale-125 hover:scale-150 ease-in duration-500 hover:text-pink-500 hover:bg-green-400 mx-auto shadow'>Manage Product</button>


                    </div>




                </div>


                    : <div className='grid grid-rows-1 gap-5 '>



                        <p className='scale-125 hover:scale-150 ease-in duration-500 hover:text-pink-500  mx-auto'><Link to='/paymenthistery'>Payment History</Link></p>
                        <p className='scale-125 hover:scale-150 ease-in duration-500 hover:text-pink-500  mx-auto'><Link to='/myenrollclass'>My Cart</Link></p>


                    </div>

            }






        </div>
    );
};

export default Dashboard;