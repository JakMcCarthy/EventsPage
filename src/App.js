import React from 'react';
import Main from './components/Main';
import Navbar from './components/Header/Navbar';
import Home from './components/pages/Home';
import Tickets from './components/pages/Tickets';
import Event from './components/Event/Event';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Footer from './components/Footer';
// these two components allow us to define all routes and group them together
import {Route, Routes} from 'react-router-dom';

import {GlobalProvider} from './context/GlobalState';
// this is Aaron's testing element
// import Test from './components/Test/TestApi';

function App() {
    return (
        <GlobalProvider>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tickets' element={<Tickets />} />
                    <Route path='/event' element={<Event />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </div>
            <Main />
            <Footer />
            {/* <Test /> */}
        </GlobalProvider>
    );
}

export default App;
