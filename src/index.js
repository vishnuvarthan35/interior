import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './components/main';
import HomeTestimonials from './layout/home page/hometestimonials';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Main/>
  </React.StrictMode>
);

reportWebVitals();
