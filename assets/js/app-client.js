// src/app-client.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app.jsx';

window.onload = () => {
  ReactDOM.render(
    <App/>
  
  , document.getElementById('container'));
};