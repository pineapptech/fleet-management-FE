"use client";
import { useState } from "react";
import Greeting from "../_components/greeting";
import RealTimeInfo from "../_components/real-time-info";
import Button from "@/components/button";
import VehicleSummary from "../_components/vehicle-summary";
import TableFilter from "./table-filter";
import VehicleTable from "./vehicle-table";
import VehicleCards from "./vehicle-cards";

const FleetInventory = () => {
  const [filterData, setFilterData] = useState({
    search: "",
    filterBy: "none",
    displayMode: "tabular",
  });

  console.log(filterData);

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
      <TableFilter filterData={filterData} setFilterData={setFilterData} />

      {filterData.displayMode == "cards" ? <VehicleCards /> : <VehicleTable />}
    </div>
  );
};

export default FleetInventory;
