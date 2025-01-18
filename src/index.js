import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import ForgotPassword from './components/ForgotPassword';
// import ResetPassword from './components/ResetPassword';
// import ResetPassword from './components/Login';
// import Login from './components/Login';
// import UserList from './components/UserList';
// import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ForgotPassword /> */}
    {/* <ResetPassword /> */}
    {/* <Login/> */}
    {/* <Dashboard/> */}
    {/* <Sidebar/> */}
    <Navbar/>


    {/* <UserList/> */}

  </React.StrictMode>
);
