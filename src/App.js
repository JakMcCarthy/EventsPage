import React from 'react';
import Main from './components/Main';
import { GlobalProvider } from './context/GlobalState';
// this is Aaron's testing element
// import Test from './components/Test/TestApi';

function App() {
  return (
    <GlobalProvider>
      <Main />
      {/* <Test /> */}
    </GlobalProvider>
  );
}

export default App;
