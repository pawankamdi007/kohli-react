import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import TestApp1 from './TestApp1';
import NewComp from './comp/NewComp';
import NewApp from './comp/NewApp';
import MyMemeApp from './comp/MyMemeApp';

ReactDOM.render(
  <React.StrictMode>
    <MyMemeApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
