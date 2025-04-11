import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import { Provider } from 'react-redux';  // Import Provider
import  store  from './store';  // Import your Redux store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Wrap your app in Redux Provider */}
      <Router>  {/* Wrap App in Router */}
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
