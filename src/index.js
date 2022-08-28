import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/Header/navbar.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//outer for our web app in the browser 
import { BrowserRouter } from "react-router-dom"

//wrapped our entire application in the browser router bc our entire component is using this one single router to manage all of routing
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
