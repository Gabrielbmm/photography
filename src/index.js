import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './pages/home/home';
import Home2 from './pages/home2/home2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/home2"} element={<Home2/>} />
        </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
