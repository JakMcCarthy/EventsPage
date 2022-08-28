import React from 'react';
import Main from './components/Main';
import Navbar from "./components/Header/Navbar";

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <Main />
    </GlobalProvider>
  );
}

export default App;