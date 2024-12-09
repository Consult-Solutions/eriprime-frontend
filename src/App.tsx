import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Pages
import Home from './pages/home.tsx';
import Login from './pages/auth/login.tsx';
import Signup from './pages/auth/signup.tsx';
import VerifyEmail from './pages/auth/verify-email.tsx';
import ForgotPassword from './pages/auth/forgot-password.tsx';
import ResetPassword from './pages/auth/reset-password.tsx';
import Dashboard from './pages/admin/dashboard.tsx';
import ProtectedRoute from './utils/ProtectedRoute.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
