import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

import Banner from '../Banner/Banner';
import Manufacture from '../Manufacture/Manufacture';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner></Banner>
            <Products></Products>
            <Manufacture></Manufacture>
            <Reviews></Reviews>
            <Footer />
        </div>
    );
};

export default Home;