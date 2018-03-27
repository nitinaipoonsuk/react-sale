import "es6-promise";
import axios from "axios";

//const webApiBaseUrl = 'http://localhost:6967/api'
const webApiBaseUrl = "http://localhost:7777/api";

class FetchAPI {
  constructor() {
    this.createAuthorizationHeader();
  }

  headers = {};
  currentUser = {};

  createAuthorizationHeader() {
    //this.currentUser = localStorage && JSON.parse(localStorage.getItem('this.currentUser'));
    //** username p'max  //
    //let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXgiLCJqdGkiOiIwMjRiZjI4ZC0wMDIzLTRiMjMtOTg2Yy0yNTI5M2UyOTFiODIiLCJpYXQiOjE0OTQ1NzEyMDQsIm5iZiI6MTQ5NDU3MTIwNCwiZXhwIjoxNTgwOTcxMjA0LCJpc3MiOiJFeGFtcGxlSXNzdWVyIiwiYXVkIjoiRXhhbXBsZUF1ZGllbmNlIn0.YYEIUA4JSRZed_9acLnTc5UvFbAG7Vf4laUkRLErBfU'//this.this.currentUser && this.this.currentUser.token;

    //** username huahom */
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJodWFob20iLCJqdGkiOiIxOTFhNjU2ZC1hODc0LTRjMTYtODg0ZC1hYzA1Y2VkNDkxOTkiLCJpYXQiOjE1MTM1NzM3MTAsIm5iZiI6MTUxMzU3MzcxMCwiZXhwIjoxNTQ1MTMwNjM2LCJpc3MiOiJFeGFtcGxlSXNzdWVyIiwiYXVkIjoiRXhhbXBsZUF1ZGllbmNlIn0.HGiFiOQUJy47RNqgGXf7z-Gzlaz5fROGAk78ncCQBG0";

    this.currentUser = {
      token: token,
      username: "demo"
    };
    this.headers = {
      "Content-Type": "application/json"
      // Authorization: `Bearer ${token}`
    };
  }

  getToken(data) {
    return fetch(`${webApiBaseUrl}/gettoken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        this.setToken(response, this.currentUser && this.currentUser.username);
      })
      .catch(error => {
        console.error(error);
      });
  }

  perTimeToken() {
    let token = this.currentUser && this.currentUser.token;
    console.log("per time token");

    this.getToken({
      token: token
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.error(error);
      });
  }

  setToken(response, username) {
    let token = response.json() && response.json().access_token;

    if (token) {
      this.this.currentUser = {
        token: token
      };

      //localStorage && localStorage.setItem('this.currentUser', JSON.stringify({ token: token, username: username }));

      this.createAuthorizationHeader();

      return true;
    }

    return false;
  }

  get(url) {
    return axios
      .get(`${webApiBaseUrl + url}`, {})
      .then(response => {
        //console.log(response.data.data)
        return response.data.data;
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  post(url, data) {
    console.log(data);
    return axios
      .post(`${webApiBaseUrl + url}`, data)
      .then(response => {
        return response;
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  put(url, data) {
    return axios
      .put(`${webApiBaseUrl + url}`, data)
      .then(response => {
        console.log(response);
        return response;
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  delete(url) {
    //this.perTimeToken();
    return fetch(`${webApiBaseUrl + url}`, {
      method: "DELETE",
      headers: this.headers
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.error(error);
      });
  }
}

export default new FetchAPI();
