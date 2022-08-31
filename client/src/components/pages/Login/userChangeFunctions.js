let auth = {
  login: function (idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  },
};

const userChange = {
  loginHandler: function (event) {
    event.preventDefault();
    let username = event.target[0].value;
    let password = event.target[1].value;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `{"username":"${username}","password":"${password}"}`,
    };
    fetch('./api/user/login', options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        auth.login(res);
      })
      .catch((err) => console.log(err));
  },
  signUpHandler: function (event) {
    event.preventDefault();
    let username = event.target[0].value;
    let email = event.target[1].value;
    let password = event.target[2].value;

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `{"username":"${username}","email":"${email}","password":"${password}"}`,
    };
    

    fetch('./api/user/', options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
      
  },
  logoutHandler: function () {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  },
};

module.exports = userChange;
