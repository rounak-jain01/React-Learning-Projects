
import React from "react";
import DashboardLayout from "../Components/DashboardLayout";
import Dash1 from "../Components/Dash1";

const Dashboard = ({}) => {
  return (
    <div className="w-full">
      <DashboardLayout title={"Dashboard"}>
        <div className="w-full ">
          <Dash1/>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
