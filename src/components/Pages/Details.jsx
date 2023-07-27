import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import the useParams hook
import Navbar from '../Shair/Navbar';
import MoreProducts from './MoreProducts';

const Details = () => {
  const [data, setData] = useState(null);
  const { _id } = useParams(); // Get the value of _id from the URL parameter


  useEffect(() => {
    fetch(`http://localhost:5000/product/${_id}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [_id]);



  // --------------------- more product same catagory--------
  const moreProduct = data?.category
  const [userdata, setUserData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(data => setUserData(data))
  }, [])

  const showProduct = userdata?.filter(product => product.category === moreProduct);
  // --------------------- more product same catagory--------





  return (
    <div>
      {/* Use 'data' in your component JSX */}
      {data ? (
        <div>
          <Navbar></Navbar>

          <div className="flex lg:card-side bg-base-100 shadow-xl border p-5">
            <figure><img className='w-96 mx-10 mb-5' src={data.image} alt="Album" /></figure>
            <div className="card-body md:mt-36">
              <h2 className="card-title text-3xl font-bold">{data.name}</h2>
              <p className='font-bold'>Price: ${data.price}</p>
              <p className='font-bold'>Catagory:{data.category}</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>


          </div>

        </div>
      ) : (
        <p className='text-center mt-40'><span className="loading loading-spinner loading-lg"></span></p>
      )}


      {/* -----------------------More----------------------- */}
      <h1 className='text-4xl font-bold text-center mt-10'>More Products in same category</h1>
      <div className='md:grid grid-cols-4 gap-5 md:mt-10'>
        {showProduct?.map((pro) => (
          <MoreProducts key={pro.id} pro={pro}></MoreProducts>
        ))}

      </div>
      {/* -----------------------More----------------------- */}



    </div>
  );
};

export default Details;
