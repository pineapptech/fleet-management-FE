import React from "react";
import Button from "@/components/button";
import Greeting from "../_components/greeting";
import RealTimeInfo from "../_components/real-time-info";
import VehicleSummary from "./vehicle-summary";
import LastTrips from "./last-trips";

const DashboardHome = () => {
  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center my-4">
        <RealTimeInfo />
        <Button variant="outline">Add/Document New Vehicle</Button>
      </div>

      <VehicleSummary />
      <LastTrips />
    </div>
  );
};

export default DashboardHome;
