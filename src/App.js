import React from 'react';
import Main from './components/Main';
import { GlobalProvider } from './context/GlobalState';
// this is Aaron's testing element
import Test from './components/Test/TestApi';
// import LoginForm from './components/Login/Login';

function App() {
  return (
    <GlobalProvider>
      {/* <LoginForm/> */}
      {/* <Main /> */}
      <Test />
    </GlobalProvider>
  );
}

export default App;
