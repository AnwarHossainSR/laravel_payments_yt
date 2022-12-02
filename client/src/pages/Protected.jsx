import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
  const auth = true;

  return auth ? <Outlet /> : <Navigate to='/' />;
};

export default Protected;
