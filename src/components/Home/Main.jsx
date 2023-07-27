import React from 'react';
import Navbar from '../Shair/Navbar';
import Banner from '../Pages/Banner';
import Category from '../Pages/Category';
import Footer from '../Shair/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category></Category>
            <Footer></Footer>
        </div>
    );
};

export default Main;