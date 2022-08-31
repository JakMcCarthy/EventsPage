import React from 'react';
import '../../index.css';
import HeroSection from '../HeroSection/heroSection';
import Cards from '../Cards/Cards';
import AddEvent from '../AddEvent/AddEvent';
import { GlobalProvider } from '../../context/GlobalState';

function Home() {
    return (
        <>
        <HeroSection />
        { /* only show AddEvent if logged in */ }
        {/* <AddEvent /> */}
        <Cards />
        </>
    );

}

export default Home;