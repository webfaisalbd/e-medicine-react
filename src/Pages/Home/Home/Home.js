import React from 'react';
import Services from '../Services/Services';
import Deliveries from '../Deliveries/Deliveries';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Deliveries></Deliveries>
        </div>
    );
};

export default Home;