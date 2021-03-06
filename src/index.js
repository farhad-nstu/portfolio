import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Header from './common/Header';
import Footer from './common/Footer';
import axios from 'axios';

axios.defaults.baseURL = "https://shakishop.xyz/farhad681/api/";
/// Bearer token save ///
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');

ReactDOM.render(
  <React.StrictMode>
  	<Header />
  	<Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
