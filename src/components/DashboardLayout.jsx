import React from 'react'
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar/DashboardSidebar';
import Topbar from "./Topbar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="w-full bg-[#F0F7FF]">
        <Topbar />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout