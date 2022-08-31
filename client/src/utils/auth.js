import decode from 'jwt-decode';

let auth = {
  getProfile:function() {
    return decode(this.getToken());
  },
  loggedIn:function() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  },
  isTokenExpired:function(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  },
  getToken:function() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  },
};

export default auth;
