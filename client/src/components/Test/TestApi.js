import LoginForm from '../pages/Login/Login';
import events from '../../utils/eventsFunctions';
import CardItem from '../Cards/CardItem';
// const axios = require('axios').default;
import React,{useState,useEffect} from 'react';



const Test =  function () {

  return (
    <div>
      <LoginForm />
      <h2>Aaron's Test Page</h2>
      <h2>all events</h2>
      {/* <CardItem title={testGet[0].eventTitle}/> */}
    </div>
  );
};

export default Test;
