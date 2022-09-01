// const auth = require('./auth')
import auth from './auth';

let eventsFunctions = {
  getAllEvents: function () {


    let data = fetch('./api/event/', { 'Content-Type': 'application/json' })
      .then((databyte) => databyte.json())
      .then((res)=>console.log(res))
      .catch((err) => console.error(err));
      return data
  },

  createEvent: function (title, text, time, ticketprice) {
    let { data } = auth.getProfile();
    console.log(data.username);
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `{"eventTitle":"${title}","eventText":"${text}","creator":"${data.username}","eventTime":"${time}","ticketPrice":"${ticketprice}"}`,
    };

    fetch('./api/event/', options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  },
  attendEvent: function () {},
  deleteEvent: function () {},
};

export default eventsFunctions;
