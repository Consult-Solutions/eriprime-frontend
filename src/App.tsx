import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import './styles/App.css';

// Utils
import ProtectedRoute from './utils/ProtectedRoute.tsx';

// Layouts
import AppLayout from './layouts/app.tsx';
import AuthUserLayout from './layouts/user.tsx';
import AuthAdminLayout from './layouts/admin.tsx';

// Contexts
import { AlertProvider } from './contexts/AlertContext.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Loading from './components/loading.tsx';

// Pages
const Home = lazy(() => import('./pages/home.tsx'));
const Login = lazy(() => import('./pages/auth/login.tsx'));
const Signup = lazy(() => import('./pages/auth/signup.tsx'));
const VerifyEmail = lazy(() => import('./pages/auth/verify-email.tsx'));
const ForgotPassword = lazy(() => import('./pages/auth/forgot-password.tsx'));
const ResetPassword = lazy(() => import('./pages/auth/reset-password.tsx'));
const UserDashboard = lazy(() => import('./pages/user/dashboard.tsx'));
const Reports = lazy(() => import('./pages/admin/reports.tsx'));
const Users = lazy(() => import('./pages/admin/users.tsx'));
const Subscribers = lazy(() => import('./pages/admin/subscribers.tsx'));
const NotFound = lazy(() => import('./pages/not-found.tsx'));
const CustomSupport = lazy(() => import('./pages/privacy/custom-support.tsx'));
const PrivacyPolicy = lazy(() => import('./pages/privacy/privacy-policy.tsx'));
const TermsAndConditions = lazy(() => import('./pages/privacy/terms-and-conditions.tsx'));
const Listings = lazy(() => import('./pages/listings.tsx'));
const About = lazy(() => import('./pages/about.tsx'));
const Contacts = lazy(() => import('./pages/contacts.tsx'));
const CarDetails = lazy(() => import('./pages/car-details.tsx'));
const Postcar = lazy(() => import('./pages/car-post.tsx'));
const AdminDashboard = lazy(() => import('./pages/admin/dashboard.tsx'));

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || 'NoAuth';

function App() {
  return (
    <div className="App">
      <AlertProvider>
        <AuthProvider>
          <GoogleOAuthProvider clientId={clientId}>
            <Router>
              <Suspense fallback={<Loading />}>
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
              </Suspense>
            </Router>
          </GoogleOAuthProvider>
        </AuthProvider>
      </AlertProvider>
    </div>
  );
}

export default App;
