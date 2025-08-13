import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom-v5-compat";

// Lazy Load Components
const Home = React.lazy(() => import('../pages/public/Home'));
const Service = React.lazy(() => import('../pages/public/Service'));
const PergolaList = React.lazy(() => import('../servicesToAPI/PergolaList'));
const Gallery = React.lazy(() => import('../pages/public/Gallery'));
const SignUp = React.lazy(() => import('../pages/public/login-signup/SignUp'));
const ContactUs = React.lazy(() => import('../pages/public/ContactUs'));
const Login = React.lazy(() => import('../pages/public/login-signup/Login'));

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Error loading component. Please try again later.</div>;
    }
    return this.props.children;
  }
}

export const AppRouter = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/fences" element={<Service />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/pergolas" element={<PergolaList />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
