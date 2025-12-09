
import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom-v5-compat";
import Gallery from '../pages/public/Gallery/Gallery.jsx';
import Home from '../pages/public/Home/Home.jsx';
import ContactUs from '../pages/public/ContactUs/ContactUs.jsx';
import PergolaList from '../pages/public/Services/PergolaList/PergolaList.jsx';
import FenceList from '../pages/public/Services/FenceList/FenceList.jsx';
import SignUp from '../pages/public/login-signup/SignUp/SignUp.jsx';
import Login from '../pages/public/login-signup/Login/Login.jsx';
import { Header } from '../componets/Header/Header.jsx';
import { StairList } from '../pages/public/Services/StairList/StairList.jsx';
// Lazy Load Components


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
    <>
      <Header/>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/pergolas" element={<PergolaList />} />
            <Route path="/stairs" element={<StairList />} />
            <Route path="/fences" element={<FenceList/>} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
