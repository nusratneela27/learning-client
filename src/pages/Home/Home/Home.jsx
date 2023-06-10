import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import Classes from '../Classes/Classes';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>e Crft | Home</title>
            </Helmet>
            <Banner></Banner>
            <Classes></Classes>
        </div>
    );
};

export default Home;