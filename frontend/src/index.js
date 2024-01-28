import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Feed from './pages/Feed.js';
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContext } from './UserContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>  
          <Route path="/home" element={<Feed />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
 
