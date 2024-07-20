import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import RoleRouter from './roleRouters/RoleRouter';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';


const AppRouter = () => {

  const { isAuthenticated } = useSelector(state => state.auth);
  
  const lastPath = () => {
    const lastPath = localStorage.getItem('lastPath');
    return lastPath === '/' ? '/dashboard' : lastPath;
  };

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={
          <PublicRouter isAuthenticated={ isAuthenticated } lastPath={lastPath()}>
            <SignupPage/>
          </PublicRouter>
        } />

        <Route path="/login" element={
          <PublicRouter isAuthenticated={ isAuthenticated } lastPath={lastPath()}>
            <LoginPage />
          </PublicRouter>
        } />

        <Route path="/*" element={
          <PrivateRouter isAuthenticated={ isAuthenticated }>
            <RoleRouter/>
          </PrivateRouter>
        } />
      </Routes>
    </Router>  
  );
};

export default AppRouter;
