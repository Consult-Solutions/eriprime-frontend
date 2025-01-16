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
import UserDashboard from './pages/user/dashboard.tsx';
import Reports from './pages/admin/reports.tsx';
import Users from './pages/admin/users.tsx';
import Subscribers from './pages/admin/subscribers.tsx';
import NotFound from './pages/not-found.tsx';
import CustomSupport from './pages/privacy/custom-support.tsx';
import PrivacyPolicy from './pages/privacy/privacy-policy.tsx';
import TermsAndConditions from './pages/privacy/terms-and-conditions.tsx';

// Utils
import ProtectedRoute from './utils/ProtectedRoute.tsx';
import Listings from './pages/listings.tsx';
import About from './pages/about.tsx';
import Contacts from './pages/contacts.tsx';
import CarDetails from './pages/car-details.tsx';

// Layouts
import AppLayout from './layouts/app.tsx';
import AuthUserLayout from './layouts/user.tsx';
import AuthAdminLayout from './layouts/admin.tsx';

// Contexts
import { AlertProvider } from './contexts/AlertContext.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Postcar from './pages/car-post.tsx';
import AdminDashboard from './pages/admin/dashboard.tsx';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || 'NoAuth';

function App() {
  return (
    <div className="App">
      <AlertProvider>
        <AuthProvider>
          <GoogleOAuthProvider clientId={clientId}>
            <Router>
              <Routes>
                <Route path="/" element={<AppLayout />}>
                  <Route index element={<Home />} />
                  <Route path="about-us" element={<About />} />
                  <Route path="contact-us" element={<Contacts />} />

                  <Route path='postcar' element={<Postcar />} />
                  <Route path="listings" element={<Listings />} />
                  <Route path='cars/:id' element={<CarDetails />} />

                  {/* Authentication Routes */}
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<Signup />} />
                  <Route path="verify" element={<VerifyEmail />} />
                  <Route path="forgot" element={<ForgotPassword />} />
                  <Route path="reset" element={<ResetPassword />} />

                  {/* Dashboard Routes */}
                  <Route path="/" element={<ProtectedRoute />}>
                    {/* User Dashboard */}
                    <Route path="/user" element={<AuthUserLayout />}>
                      <Route path="dashboard" element={<UserDashboard />} />
                    </Route>

                    {/* Administration Dashboard */}
                    <Route path="/admin" element={<AuthAdminLayout />}>
                      <Route path="dashboard" element={<AdminDashboard />} />
                      <Route path="users" element={<Users />} />
                      <Route path="subscribers" element={<Subscribers />} />
                      <Route path="reports" element={<Reports />} />
                    </Route>
                  </Route>

                  {/* Privacy Policy Pages */}
                  <Route path="privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="custom-support" element={<CustomSupport />} />
                  <Route path="terms-and-conditions" element={<TermsAndConditions />} />

                  {/* NotFound Route */}
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Router>
          </GoogleOAuthProvider>
        </AuthProvider>
      </AlertProvider>
    </div>
  );
}

export default App;
