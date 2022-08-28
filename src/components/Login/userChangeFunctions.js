

const userChange = {
  loginHandler: function (event) {
    event.preventDefault();
    let username = event.target[0].value;
    let password = event.target[1].value;

    const options = {
      method: 'POST',
      body: `{"username":"${username}","password":"${password}"}`,
    };
    fetch('./api/users/login', options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
  signUpHandler: function (event) {
    event.preventDefault();
    let username = event.target[0].value;
    let email = event.target[1].value;
    let password = event.target[1].value;

    const options = {
      method: 'POST',
      body: `{"username":"${username}","email":"${email}","password":"${password}"}`,
    };

    fetch('./api/user/', options)
      .then((res) => console.log(res))
      .then((res) => res.json())
      .catch((err) => console.log(err));
  },
};

module.exports = userChange;
