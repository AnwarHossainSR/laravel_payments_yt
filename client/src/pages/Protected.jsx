import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
  const auth = localStorage.getItem('token');
  console.log(auth);

  return auth ? <Outlet /> : <Navigate to='/' />;
};

export default Protected;
