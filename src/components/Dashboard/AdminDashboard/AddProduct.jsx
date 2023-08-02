import React, { useEffect, useState } from 'react';
import Navbar from '../../Shair/Navbar';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser, AiOutlineShopping, AiFillCalculator, AiOutlineDeliveredProcedure } from 'react-icons/ai';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [discountPrice, setDiscountPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then((res) => res.json())
            .then((data) => setCategoryData(data));
    }, []);

    const handleAddProduct = () => {
        const productDetails = {
            name: productName,
            image: productImage,
            category: productCategory,
            price: productPrice,
            discount: discountPrice,
            description: productDescription,
        };

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productDetails),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to add product.');
                }
                return response.json();
            })
            .then((data) => {
                // Success: Show SweetAlert with product details
                Swal.fire({
                    icon: 'success',
                    title: 'Product Added!',
                    text: `
            Name: ${data.name}
            Image: ${data.image}
            Category: ${data.category}
            Price: $${data.price}
            Discount: $${data.discount}
            Description: ${data.description}
          `,
                });

                // Reset the form after showing the SweetAlert
                setProductName('');
                setProductImage('');
                setProductCategory('');
                setProductPrice('');
                setDiscountPrice('');
                setProductDescription('');
            })
            .catch((error) => {
                // Handle error during fetch
                console.error('Error adding product:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to add product. Please try again later.',
                });
            });
    };

    console.log(productName, productCategory, productPrice, productDescription);



    // ---------------------------


    return (
        <div>
            <Navbar></Navbar>

            <div className="flex flex-col md:flex-row">
                <nav className="bg-gray-800 text-white w-full md:w-64  md:h-[700px] py-4 px-6 md:py-10 md:px-4">
                    <div className="text-2xl font-semibold mb-4">Admin Panel <span className="loading loading-ring loading-lg"></span>
                    </div>
                    <ul>
                        <li>
                            <NavLink
                                exact
                                to="/dashboard"
                                className="hover:text-blue-500 cursor-pointer"
                                activeClassName="text-blue-500"
                            >
                                Dashboard
                            </NavLink>
                            <hr />
                        </li>






                        <li className='mt-16'>
                            <NavLink
                                to="/addProduct"
                                className="hover:text-blue-500 cursor-pointer"
                                activeClassName="text-blue-500"
                            >
                                <div className='flex items-center gap-2'>
                                    <AiOutlineDeliveredProcedure></AiOutlineDeliveredProcedure> Add Product
                                </div>
                            </NavLink>
                        </li>







                        <li className='mt-5'>
                            <NavLink
                                to="/addCategory"
                                className="hover:text-blue-500 cursor-pointer"
                                activeClassName="text-blue-500"
                            >
                                <div className='flex items-center gap-2'>
                                    <AiFillCalculator></AiFillCalculator> Add Catagory
                                </div>
                            </NavLink>
                        </li>




                        <li className='mt-5'>
                            <NavLink
                                to="/products"
                                className="hover:text-blue-500 cursor-pointer"
                                activeClassName="text-blue-500"
                            >
                                <div className='flex items-center gap-2'>
                                    <AiOutlineShopping></AiOutlineShopping> Show Products
                                </div>

                            </NavLink>
                        </li>


                        <li className='mt-5'>
                            <NavLink
                                to="/managUser"
                                className="hover:text-blue-500 cursor-pointer"
                                activeClassName="text-blue-500"
                            >

                                <div className='flex items-center gap-2'>
                                    <AiOutlineUser></AiOutlineUser> Manag Users
                                </div>


                            </NavLink>
                        </li>



                        {/* Add more sidebar menu items */}
                    </ul>
                </nav>





                <div className="flex-1 p-4 md:p-8">
                    <h2 className='text-3xl font-bold text-center'>Add Product</h2>

                    {/* ------------------------ Content----------------- */}
                    <div className="container mx-auto py-8">
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <h2 className="text-2xl font-semibold mb-4">Add Product</h2>




                            <div className="mb-4">
                                <label htmlFor="product-name" className="block font-medium">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    id="product-name"
                                    className="w-full border rounded-lg px-3 py-2"
                                    placeholder="Enter product name"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                />
                            </div>


                            <div className="mb-4">
                                <label htmlFor="product-image" className="block font-medium">
                                    Product Image
                                </label>
                                <input
                                    type="text"
                                    id="product-image"
                                    className="w-full border rounded-lg px-3 py-2"
                                    placeholder="Enter product image link"
                                    value={productImage}
                                    onChange={(e) => setProductImage(e.target.value)}
                                />
                            </div>


                            <div className="mb-4">
                                <label htmlFor="product-category" className="block font-medium">
                                    Product Category
                                </label>
                                <select
                                    id="product-category"
                                    className="w-full border rounded-lg px-3 py-2"
                                    value={productCategory}
                                    onChange={(e) => setProductCategory(e.target.value)}
                                >
                                    <option value="">Select a category</option>


                                    {categoryData?.map((data, index) => (  // Removed '.name' from writer?.name?.map(...)
                                        <option key={index} value={data.name}>  {/* Assuming each object has a 'name' property */}
                                            {data.name}
                                        </option>
                                    ))}


                                    {/* Add more categories as needed */}
                                </select>
                            </div>


                            <div className="mb-4">
                                <label htmlFor="product-price" className="block font-medium">
                                    Product Price
                                </label>
                                <input
                                    type="number"
                                    id="product-price"
                                    className="w-full border rounded-lg px-3 py-2"
                                    placeholder="Enter product price"
                                    value={productPrice}
                                    onChange={(e) => setProductPrice(e.target.value)}
                                />
                            </div>


                            <div className="mb-4">
                                <label htmlFor="product-price" className="block font-medium">
                                    Discount Price
                                </label>
                                <input
                                    type="number"
                                    id="discount-price"
                                    className="w-full border rounded-lg px-3 py-2"
                                    placeholder="Enter discount price"
                                    value={discountPrice}
                                    onChange={(e) => setDiscountPrice(e.target.value)}
                                />
                            </div>





                            <div className="mb-4">
                                <label htmlFor="product-description" className="block font-medium">
                                    Product Description
                                </label>
                                <textarea
                                    id="product-description"
                                    className="w-full border rounded-lg px-3 py-2"
                                    placeholder="Enter product description"
                                    value={productDescription}
                                    onChange={(e) => setProductDescription(e.target.value)}
                                    rows={4}
                                />
                            </div>
                            <button
                                className="bg-purple-500 text-white py-2 px-4 rounded-lg"
                                onClick={handleAddProduct}
                            >
                                Add Product
                            </button>
                        </div>
                    </div>

                    {/* ------------------------ End Content----------------- */}


                </div>
            </div>
        </div>
    );
};

export default AddProduct;






