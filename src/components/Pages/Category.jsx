import React, { useEffect, useState } from 'react';
import Products from './Products';

const Category = () => {





    const [datas, setDatas] = useState([])
    const [userdata, setUserData] = useState(null)


    // ------------ get Data from product -------
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    // ------------ get Data from product -------




    // ------------ get Data from product -------


    // ------------ get Data from product -------




    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [datas.id])


    if (!userdata) {
        return <p className='text-center mt-40'><span className="loading loading-spinner loading-lg"></span></p>
    }




    const grosory = userdata.filter(product => product.category === 'grosory');
    const electronic = userdata.filter(product => product.category === 'electronic');
    const food = userdata.filter(product => product.category === 'food');


    const submitGrosory = () => {
        const data = grosory
        setDatas(data)
    }

    const submitelectronic = () => {
        const data = electronic
        setDatas(data)
    }

    const submitFood = () => {
        const data = food
        setDatas(data)
    }

    // --------------------------
 
    // ------------------------

    // ------------------------





    return (
        <div className='bg-slate-100'>

            <p className='text-3xl font-bold text-center py-5'>Category</p>


            <div className='flex justify-between md:mx-96 text-center'>


                <button onClick={submitGrosory} className='p-2 rounded-lg shadow border md:w-40 w-32 hover:bg-green-700 duration-500 hover:text-white'>
                    <p className='text-2xl font-semibold'>Grosory</p>
                    <img className='w-24 h-24 mx-auto' src="https://mygrozo.com/uploads/cuisine/1667623359-97756406.png" alt="" />
                    <p>Product:{grosory.length}</p>

                </button>

                <button onClick={submitelectronic} className='p-2 rounded-lg shadow border w-40 hover:bg-green-700 duration-500 hover:text-white'>
                    <p className='text-2xl font-semibold'>Electronic</p>
                    <img className='w-24 h-24 mx-auto' src="https://motorolain.vtexassets.com/arquivos/ids/156557-800-auto?width=800&height=auto&aspect=true" alt="" />
                    <p>Product:{electronic.length}</p>

                </button>
                <button onClick={submitFood} className='p-2 rounded-lg shadow border w-40 hover:bg-green-700 duration-500 hover:text-white'>
                    <p className='text-2xl font-semibold'>Food</p>
                    <img className='w-24 h-24 mx-auto' src="https://olo-images-live.imgix.net/72/7288570f72a54140a41afdcfbd0e8980.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=716&h=474&fit=crop&fm=png32&s=5c543defe38946e36a8694d0b149fda4" alt="" />
                    <p>Product:{food.length}</p>
                </button>

                {/* ---------------------------------- */}







                {/* -------------------------------------------- In complite-------------------------- */}


                {/* -------------------------------------------- In complite-------------------------- */}





            </div>

            <div className='md:grid grid-cols-4 mx-12 md:mx-20 my-10 md:gap-20 gap-y-5'>

                {
                    datas.map(data => <Products
                        key={data._id}
                        data={data}
                    ></Products>)
                }
            </div>


        </div>


    );
};

export default Category;