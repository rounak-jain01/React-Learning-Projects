import React from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";

const App = () => {

  return (
    <>
      <div className="flex w-screen min-h-screen bg-[#f3f3f7] overflow-hidden">
        <Sidebar />
        <Dashboard />
      </div>

    </>
  );
};

export default App;
