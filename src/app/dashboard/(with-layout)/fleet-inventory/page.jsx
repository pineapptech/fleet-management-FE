import React from "react";
import Greeting from "../_components/greeting";
import RealTimeInfo from "../_components/real-time-info";
import Button from "@/components/button";
import VehicleSummary from "../_components/vehicle-summary";
import { IconFolderBolt } from "@tabler/icons-react";
import TableFilter from "./table-filter";

const FleetInventory = () => {
  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <RealTimeInfo title="Fleet Inventory" />
        <div className="btn-group flex gap-2">
          <Button variant="primary">Add/Document New Vehicle</Button>
          <Button variant="outline">Export Logs (CSV, PDF)</Button>
        </div>
      </div>

      <VehicleSummary />
      <TableFilter />
    </div>
  );
};

export default FleetInventory;
