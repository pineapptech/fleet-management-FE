import React from "react";
import Greeting from "../_components/greeting";
import RealTimeInfo from "../_components/real-time-info";
import Button from "@/components/button";

const DashboardHome = () => {
  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center my-4">
        <RealTimeInfo />
        <Button variant="outline">Add/Document New Vehicle</Button>
      </div>
    </div>
  );
};

export default DashboardHome;
