import React from 'react'
import SidebarContent from './SidebarContent';
import SidebarHeader from './SidebarHeader';

const DashboardSidebar = () => {
  return <aside className='w-96 h-screen'>
    <SidebarHeader/>
    <SidebarContent/>
  </aside>;
}

export default DashboardSidebar