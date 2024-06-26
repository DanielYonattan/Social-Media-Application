import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Feed from './pages/Feed.js';
import Login from './pages/Login'
import Page from './pages/Page'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './UserContext.js'

export const URL = "http://localhost:3000"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>  
          <Route path="/home" element={<Feed />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/page/:userId" element={<Page />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter> 
  </React.StrictMode>
);
 
