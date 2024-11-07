import React from "react";
import Button from "@/components/button";

import Greeting from "../_components/greeting";
import RealTimeInfo from "../_components/real-time-info";
import VehicleSummary from "./vehicle-summary";
import LastTrips from "./last-trips";
import TripExpenses from "./trip-expenses";
import TopLocations from "./top-locations";
import TripTable from "./trip-table";

const DashboardHome = () => {
  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <RealTimeInfo />
        <Button variant="outline">Add/Document New Vehicle</Button>
      </div>

      <VehicleSummary />

      <div className="trips-summary flex flex-wrap gap-4 justify-center mb-8">
        <LastTrips className="grow" />
        <TripExpenses className="grow" />
        <TopLocations className="grow" />
      </div>

      <TripTable />
    </div>
  );
};

export default DashboardHome;
