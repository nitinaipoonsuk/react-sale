import React from 'react'
import 'es6-promise'
import "isomorphic-fetch"

var headers = {}
var currentUser = {}

//const webApiBaseUrl = 'http://localhost:6967/api'
const webApiBaseUrl = 'http://localhost:56270/api'

class FetchAPI {
    constructor(){
        this.createAuthorizationHeader()
    }

    createAuthorizationHeader() {
        //currentUser = localStorage && JSON.parse(localStorage.getItem('currentUser'));
        //** username p'max  //
        //let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXgiLCJqdGkiOiIwMjRiZjI4ZC0wMDIzLTRiMjMtOTg2Yy0yNTI5M2UyOTFiODIiLCJpYXQiOjE0OTQ1NzEyMDQsIm5iZiI6MTQ5NDU3MTIwNCwiZXhwIjoxNTgwOTcxMjA0LCJpc3MiOiJFeGFtcGxlSXNzdWVyIiwiYXVkIjoiRXhhbXBsZUF1ZGllbmNlIn0.YYEIUA4JSRZed_9acLnTc5UvFbAG7Vf4laUkRLErBfU'//this.currentUser && this.currentUser.token;
        
        //** username huahom */
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJodWFob20iLCJqdGkiOiIxOTFhNjU2ZC1hODc0LTRjMTYtODg0ZC1hYzA1Y2VkNDkxOTkiLCJpYXQiOjE1MTM1NzM3MTAsIm5iZiI6MTUxMzU3MzcxMCwiZXhwIjoxNTQ1MTMwNjM2LCJpc3MiOiJFeGFtcGxlSXNzdWVyIiwiYXVkIjoiRXhhbXBsZUF1ZGllbmNlIn0.HGiFiOQUJy47RNqgGXf7z-Gzlaz5fROGAk78ncCQBG0'
        
        currentUser = {
            token: token,
            username: 'demo'
        }
        headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    }

    getToken(data) {
        return fetch(`${webApiBaseUrl}/gettoken`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            this.setToken(response, currentUser && currentUser.username)
        }).catch((error) => {
            console.error(error);
        });
    }

    get(url) {
        //this.perTimeToken();
        return fetch(`${webApiBaseUrl + url}`, {
            method: 'GET',
            headers: headers
        }).then((response) => {
            return response.json()
        }).catch((error) => {
            console.error(error);
        });
    }

    delete(url) {
        //this.perTimeToken();
        return fetch(`${webApiBaseUrl + url}`, {
            method: 'DELETE',
            headers: headers
        }).then((response) => {
            return response.json()
        }).catch((error) => {
            console.error(error);
        });
    }

    put(url, data) {
        //this.perTimeToken();
        return fetch(`${webApiBaseUrl + url}`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json()
        }).catch((error) => {
            console.error(error);
        });
    }

    post(url, data) {
        //this.perTimeToken();
        return fetch(`${webApiBaseUrl + url}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json()
        }).catch((error) => {
            console.error(error);
        });
    }
}

export default FetchAPI