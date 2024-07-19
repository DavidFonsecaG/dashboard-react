import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Navbar from '../components/navbar/Navbar'
import DasboardPage from '../pages/DashboardPage'
import StudentPage from '../pages/StudentPage'
import NotFound from '../pages/NotFound'


const AppRouter = () => {

  return (
    <Router>
      <div className="h-screen">
        <Navbar/>
        <main className="flex flex-1 flex-col gap-4 p-4 mx-auto max-w-[1600px] md:gap-8 md:p-8 ">
          <Routes>
            <Route path='/' element={ <DasboardPage /> }/>
            <Route path='/dashboard' element={ <DasboardPage /> }/>
            <Route path='/student' element={ <StudentPage /> }/>
            <Route path='/page-not-found' element={ <NotFound /> }/>
            <Route path="*" element={<Navigate to={ '/page-not-found' }/>} />
          </Routes>
        </main>
      </div>
    </Router>  
  );
};

export default AppRouter;
