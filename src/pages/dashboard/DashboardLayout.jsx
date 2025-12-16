import React from 'react'
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout