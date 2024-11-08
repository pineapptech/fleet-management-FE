"use client";
import { useState } from "react";
import Greeting from "../_components/greeting";
import RealTimeInfo from "../_components/real-time-info";
import Button from "@/components/button";
import { IconChevronDown } from "@tabler/icons-react";
import VehicleSummary from "../_components/vehicle-summary";
import TableFilter from "../_components/table-filter";
import AllocationTable from "./allocation-table";
import AllocationCards from "./allocation-cards";

const FleetAllocation = () => {
  const [filterData, setFilterData] = useState({});
  const [allocateMode, setAllocateMode] = useState(true);

  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <RealTimeInfo title="Fleet Inventory" />
        <div className="btn-group flex gap-2">
          <Button variant="primary">Allocate Vehicle</Button>
          <Button variant="outline">Export Logs (CSV, PDF)</Button>
        </div>
      </div>

      <VehicleSummary />

      <div className="allocate-or-assign-wrapper flex gap-4 mb-4">
        <Button
          variant="outline"
          className={`${
            !allocateMode && "border-gray-400 text-gray-400"
          } w-full flex justify-center gap-4`}
          onClick={() => setAllocateMode(true)}
        >
          Allocate Vehicle <IconChevronDown />
        </Button>

        <Button
          variant="outline"
          className={`${
            allocateMode && "border-gray-400 text-gray-400"
          } w-full flex justify-center gap-4`}
          onClick={() => setAllocateMode(false)}
        >
          Assign Vehicle <IconChevronDown />
        </Button>
      </div>

      <TableFilter onFilterChange={setFilterData} />

      <h2 className="capitalize font-extrabold text-xl text-secondary whitespace-nowrap mb-6">
        Recent Allocation
      </h2>
      {filterData.displayMode == "cards" ? (
        <AllocationCards />
      ) : (
        <AllocationTable />
      )}
    </div>
  );
};

export default FleetAllocation;
