import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import ForgotPassword from './components/ForgotPassword';
// import ResetPassword from './components/ResetPassword';
import ResetPassword from './components/Login';
import Login from './components/Login';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ForgotPassword /> */}
    {/* <ResetPassword /> */}
    <Login/>
  </React.StrictMode>
);
