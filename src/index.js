import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './comp/Footer';
import MyPhoto from './gallary/Myphoto';
import Photos from './gallary/photos';
import './index.css';
import One from './meme/one';

import reportWebVitals from './reportWebVitals';
import TestApp1 from './TestApp1';

ReactDOM.render(
  <React.StrictMode>
    <One/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
