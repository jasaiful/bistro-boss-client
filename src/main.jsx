import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import MainRoute from './router/MainRoute';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={MainRoute} />
      </div>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
