import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useMediaQuery } from "react-responsive";
import { User } from "./utils/recoil/atoms";
import { useGetUser } from "utils/functions";
import NotFound from "pages/NotFound";

// Lazy-loaded components
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const PresSignIn = React.lazy(() => import("pages/PresSignIn"));
const PresPHOTOOne = React.lazy(() => import("pages/PresPHOTOOne"));

const ProtectedRoute = ({ isLoggedIn, children }) => {
  console.log(isLoggedIn);
  
  return isLoggedIn ? children : <Navigate to="/PresSignIn" />;
};
const ProjectRoutes = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [token, setToken] = useRecoilState(User);
  const checkvalidUser = useGetUser();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 770px)" });

  useEffect(() => {
    const fetchUserFromToken = async () => {
      console.log(token);
      
      if (!token) {
        setLoggedIn(false);
        return;
      }
      try {
        const user = await checkvalidUser(token);
        console.log(user);
        
        setLoggedIn(user?.status !== 401);
      } catch {
        setLoggedIn(false);
      }
    };
    fetchUserFromToken();
  }, [token]);

  useEffect(()=>{
    console.log(loggedIn);
    
  },[loggedIn])

  if (isTabletOrMobile) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "#f8d7da",
          color: "#721c24",
        }}
      >
        <div>
          <h1>Access Restricted</h1>
          <p>This application is not available on mobile devices. Please use a desktop device to access it.</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to={loggedIn ? "/Dashboard" : "/PresSignIn"} />} />

          {/* Public Routes */}
          <Route path="/PresSignIn" element={loggedIn ?  <Navigate to={"/Dashboard"} /> : <PresSignIn /> }  />

          {/* Protected Routes */}
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute isLoggedIn={loggedIn}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/presphotoone"
            element={
              <ProtectedRoute isLoggedIn={loggedIn}>
                <PresPHOTOOne />
              </ProtectedRoute>
            }
          />

          {/* Fallback for undefined routes */}
        </Routes>
      </Router>
    </Suspense>
  );
};

export default ProjectRoutes;
