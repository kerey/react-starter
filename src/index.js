import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase';

import App from './containers/App';

var config = {
  apiKey: "AIzaSyAAM7NsAgelWNUwO1JQNSpgPxYR3z--ISs",
  authDomain: "togyz-2c89b.firebaseapp.com",
  databaseURL: "https://togyz-2c89b.firebaseio.com",
  projectId: "togyz-2c89b",
  storageBucket: "",
  messagingSenderId: "246511411418"
};

firebase.initializeApp(config);

ReactDOM.render(
  <BrowserRouter>
  	<App />
  </BrowserRouter>,
  document.getElementById('root')
);
