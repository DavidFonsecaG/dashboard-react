import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import DasboardPage from "../../pages/DashboardPage";
import EmailPage from "../../pages/EmailPage";
import NotFound from "../../pages/NotFound";

const AdminRouter = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex-col gap-4 mx-auto min-w-full max-w-[1600px] md:gap-8 overflow-auto">
        <Routes>
          <Route path="/" element={<DasboardPage />} />
          <Route path="/dashboard" element={<DasboardPage />} />
          <Route path="/email" element={<EmailPage />} />
          <Route path="/email/*" element={<EmailPage />} />
          <Route path="/email/*/:itemId" element={<EmailPage />} />
          <Route path="/page-not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to={"/page-not-found"} />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminRouter;
