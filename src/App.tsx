import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import './styles/App.css';

// Pages
import Home from './pages/home.tsx';
import Login from './pages/auth/login.tsx';
import Signup from './pages/auth/signup.tsx';
import VerifyEmail from './pages/auth/verify-email.tsx';
import ForgotPassword from './pages/auth/forgot-password.tsx';
import ResetPassword from './pages/auth/reset-password.tsx';
import Dashboard from './pages/admin/dashboard.tsx';
import NotFound from './pages/not-found.tsx';

// Utils
import ProtectedRoute from './utils/ProtectedRoute.tsx';
import Listings from './pages/listings.tsx';
import About from './pages/about.tsx';
import Contacts from './pages/contacts.tsx';
import AppLayout from './layouts/app.tsx';
import { AlertProvider } from './contexts/AlertContext.tsx';

function App() {
  return (
    <div className="App">
      <AlertProvider>
        <Router>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="listings" element={<Listings />} />
              <Route path="about-us" element={<About />} />
              <Route path="contact-us" element={<Contacts />} />

              {/* Authentication Routes */}
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="verify" element={<VerifyEmail />} />
              <Route path="forgot" element={<ForgotPassword />} />
              <Route path="reset" element={<ResetPassword />} />

              {/* Dashboard Routes */}
              <Route path="dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />

              {/* NotFound Route */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </AlertProvider>
    </div>
  );
}

export default App;
