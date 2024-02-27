/* eslint-disable react/prop-types */
// import React from "react";
import {  Navigate } from "react-router-dom";

const ProtectedRoute = ({ component }) => {

    const isAuthenticated = !!localStorage.getItem('token');
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return component;
};

export default ProtectedRoute;