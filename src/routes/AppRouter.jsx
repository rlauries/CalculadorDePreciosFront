
import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from "react-router-dom-v5-compat";
import Gallery from '../pages/public/Gallery/Gallery.tsx';
import Home from '../pages/public/Home/Home.tsx';
import ContactUs from '../pages/public/ContactUs/ContactUs.jsx';
import PergolaList from '../pages/public/Services/PergolaList/PergolaList.tsx';
import FenceList from '../pages/public/Services/FenceList/FenceList.tsx';
import SignUp from '../pages/public/login-signup/SignUp/SignUp.jsx';
import Login from '../pages/public/login-signup/Login/Login.jsx';
import { Header } from '../componets/Header/Header.tsx';
import { StairList } from '../pages/public/Services/StairList/StairList.tsx';
import { CladdingList } from '../pages/public/Services/CladdingList/CladdingList.tsx';
import { Invoice } from '../tools/Invoice/Invoice.tsx';
import { SMPConstructionStair } from '../pages/public/ProyectPages/SMPConstructionStair/SMPConstructionStair.tsx';
import { NickSonyIsle } from '../pages/public/ProyectPages/NickSonyIsle/NickSonyIsle.tsx';
import { TrussCalculatorPage } from '../pages/public/TrussCalculatorPage/TrussCalculatorPage.tsx';
import { JustinHollywoodCladding } from '../pages/public/ProyectPages/JustinHollywoodCladding/JustinHollywoodCladding.tsx';


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
            <Route
              path="/home"
              element={<Navigate to="/" replace />}
            />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/pergolas" element={<PergolaList />} />
            <Route path="/stairs" element={<StairList />} />
            <Route path="/fences" element={<FenceList/>} />
            <Route path="/claddings" element={<CladdingList/>} />
            
            {/* Authentication */}
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            
            {/* ----- Tools ---------- */}
            <Route path="/tools/invoice" element={<Invoice />} />
            <Route path="/tools/truss" element={<TrussCalculatorPage />} />
            
            {/* Completed projects */}
            <Route path="/stairs/downtown-miami" 
                   element={<SMPConstructionStair />} 
            />
            <Route path="/stairs/nick-custom-staircase" 
                   element={<NickSonyIsle />} 
            />
            <Route path="/claddings/justin-hollywood-cladding" 
                   element={<JustinHollywoodCladding />} 
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
