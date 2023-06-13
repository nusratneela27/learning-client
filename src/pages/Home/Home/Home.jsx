import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import Classes from '../Classes/Classes';
import MeetOurClient from '../MeetOurClient/MeetOurClient';
import Instructors from '../Instructors/Instructors';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>e Crft | Home</title>
            </Helmet>
            <Banner></Banner>
            <Classes></Classes>
            <MeetOurClient></MeetOurClient>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;