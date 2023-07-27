import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Products = ({ data }) => {


    const { _id, name, image, rating, price } = data;




    return (
        <div>
            <div className="card card-compact w-72 bg-base-300 shadow-xl md:mb-0 mb-5">
                <figure><img className='w-full h-52' src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex'>
                        <p>Price: {price}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <div className="card-actions justify-end">

                        <Link to={`/product/${_id}`}>
                            <button className="btn btn-sm bg-green-700 text-white hover:bg-green-950">Details</button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Products;