import React from 'react'
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar/DashboardSidebar';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <DashboardSidebar/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout