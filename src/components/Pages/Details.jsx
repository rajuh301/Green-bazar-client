import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import the useParams hook
import Navbar from '../Shair/Navbar';
import MoreProducts from './MoreProducts';
import Swal from 'sweetalert2';
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.18/dist/sweetalert2.all.min.js"></script>


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



  // -------------- Add to cart---------------

  const handleAddtoCart = (data) => {
    const cartItem = {
      data
    };
  
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    const isProductExists = existingCartItems.some(item => item.data._id === cartItem.data._id);
  
    if (isProductExists) {
      Swal.fire({
        title: 'Error',
        text: 'This product already exists in your cart.',
        icon: 'error',
        confirmButtonText: 'Close',
      });
    } else {
      existingCartItems.push(cartItem);
      localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
      
      Swal.fire({
        title: 'Added to Cart!',
        text: 'This product has been added to your cart.',
        icon: 'success',
        confirmButtonText: 'Close',
      });
    }
  };
  

  // -------------- Add to cart---------------






  return (
    <div>
      {data ? (
        <div>
          <Navbar></Navbar>

          <div className="flex lg:card-side bg-base-100 shadow-xl border p-5">
            <figure><img className='w-96 mx-10 mb-5' src={data.image} alt="Album" /></figure>
            <div className="card-body md:">
              <h2 className="card-title text-3xl font-bold">{data.name}</h2>
              <p className='font-bold'>Price: ${data.price}</p>
              <p className='font-bold'>Catagory:{data.category}</p>
              <p className='w-96'>Description : {data.description}</p>



              <div className="card-actions justify-end">
                <button onClick={() => handleAddtoCart(data)} className="btn btn-primary">Add to cart</button>
                <button className="btn btn-primary">Buy</button>
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
