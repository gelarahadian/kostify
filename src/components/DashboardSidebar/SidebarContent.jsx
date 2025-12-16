import React from 'react'
import ChartIcon from "../../assets/Chart.svg?react";


const SidebarContent = () => {
  return (
    <div className="px-7 py-16">
      <div>
        <h2 className="font-poppins font-normal uppercase text-gray-600 ml-9 mb-5">
          menu
        </h2>
        <div className="px-9 py-7 flex space-x-5 items-center">
          <ChartIcon className="text-gray-600" />
          <span>Dashboard</span>
        </div>
        <div className="px-9 py-7 flex space-x-5 items-center bg-[#3674B5]/10">
          <ChartIcon className="text-gray-600" />
          <span className="text-[#3674B5] font-medium text-sm">Dashboard</span>
        </div>
      </div>
    </div>
  );
}

export default SidebarContent