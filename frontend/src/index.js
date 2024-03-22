import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Feed from './pages/Feed.js';
import Login from './pages/Login'
import Page from './pages/Page'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './UserContext.js'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>  
          <Route path="/home" element={<Feed />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/page/:username" element={<Page />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter> 
  </React.StrictMode>
);
 
