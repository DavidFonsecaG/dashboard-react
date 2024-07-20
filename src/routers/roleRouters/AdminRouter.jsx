import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import DasboardPage from "../../pages/DashboardPage";
import EmailPage from "../../pages/EmailPage";
import NotFound from "../../pages/NotFound";

const AdminRouter = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="flex flex-1 flex-col gap-4 p-4 mx-auto max-w-[1600px] md:gap-8 md:p-8 ">
        <Routes>
          <Route path="/" element={<DasboardPage />} />
          <Route path="/dashboard" element={<DasboardPage />} />
          <Route path="/email" element={<EmailPage />} />
          <Route path="/page-not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to={"/page-not-found"} />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminRouter;
