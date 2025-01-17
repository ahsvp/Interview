import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
// import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLogin');
    if (storedLoginStatus === 'true') {
      setIsLogin(true);
    }
  }, []);

  // Handle login
  const handleLogin = () => {
    localStorage.setItem('isLogin', 'true');
    setIsLogin(true);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isLogin');
    setIsLogin(false);
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login Route */}
        <Route
          path="/login"
          element={
            isLogin ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
          }
        />
        
        {/* Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            isLogin ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />
          }
        />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
