import React from 'react';
import { Link } from 'react-router-dom';

const MoreProducts = ({ pro }) => {

    return (
        <div>
            <div>
                <div className="card card-compact w-72 bg-base-300 shadow-xl md:mb-0 mb-5 mx-auto">
                    <figure><img className='w-full h-52' src={pro.image} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{pro.name}</h2>
                        <div className='flex'>
                            <p>Price: {pro.price}</p>
                            <p>Rating: {pro.rating}</p>
                        </div>
                        <div className="card-actions justify-end">

                            <Link to={`/product/${pro._id}`}>
                                <button className="btn btn-sm bg-green-700 text-white hover:bg-green-950">Details</button>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MoreProducts;