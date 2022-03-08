import React from "react";
import { BrowserRouter, Navigate, Route, RouteProps, Routes } from "react-router-dom";

import { Dashboard } from "../components/Dashboard";
import { Login } from "../components/Login";
import { useAuth } from "../hooks/useAuth";

const Router = () => {

  const { authenticated } = useAuth();

  const PrivateRoute = ({ children }: any) => {
    return authenticated ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
    />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;