import React from "react";
import Navbar from "./Navbar";
import Dashboard from "../Pages/Dashboard";

const DashboardLayout = ({ title, children }) => {
    
  return (
    <div className="w-full h-full">
      <Navbar title={title} />
      <div> {children}</div>
    </div>
  );
};

export default DashboardLayout;
