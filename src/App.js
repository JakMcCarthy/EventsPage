import React from 'react';
import Main from './components/Main';
import Navbar from "./components/Header/Navbar";
import Home from "./components/Header/pages/Home"
import Tickets from "./components/Header/pages/Tickets"
import Event from "./components/Header/pages/Events"
import Login from "./components/Header/pages/Login"
import Signup from "./components/Header/pages/Signup"
// these two components allow us to define all routes and group them together
import { Route, Routes } from "react-router-dom"

import { GlobalProvider } from './context/GlobalState';
// this is Aaron's testing element
// import Test from './components/Test/TestApi';

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <div className = "container">
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/tickets" element={<Tickets />} />
          <Route path ="/event" element={<Event />} />
          <Route path ="/login" element={<Login />} />
          <Route path ="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Main />
      {/* <Test /> */}
    </GlobalProvider>
  );
}

export default App;
