import LoginForm from '../pages/Login/Login';
import events from '../../utils/eventsFunctions';
// const { createEvent } = require('../../../src/utils/eventsFunctions');
const React = require('react');
  let dummycreate = function () {
    events.createEvent('12345', 'abcdefghijklmnopqrstuv', Date.now(), 0);
    console.log('click');
  };
const Test = function () {

  return (
    <div>
      <LoginForm />
      <button onClick={dummycreate}>createeventdummy</button>
      <h2>Aaron's Test Page</h2>
      <h2>all events</h2>
      <div>
        {}
      </div>
    </div>
  );
};

export default Test;
