import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Feed from './pages/Feed.js';
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContext } from './UserContext';
import {user} from './pages/Login'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <Routes>  
          <Route path="/home" element={<Feed />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
 
