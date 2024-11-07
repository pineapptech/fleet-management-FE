import React from "react";
import Button from "@/components/button";

import Greeting from "../_components/greeting";
import RealTimeInfo from "../_components/real-time-info";
import VehicleSummary from "./vehicle-summary";
import LastTrips from "./last-trips";
import TripExpenses from "./trip-expenses";
import TopLocations from "./top-locations";

const DashboardHome = () => {
  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center my-4">
        <RealTimeInfo />
        <Button variant="outline">Add/Document New Vehicle</Button>
      </div>

      <VehicleSummary />

      <div className="trips-summary flex flex-wrap gap-4 justify-center ">
        <LastTrips className="grow" />
        <TripExpenses className="grow" />
        <TopLocations className="grow" />
      </div>
    </div>
  );
};

export default DashboardHome;