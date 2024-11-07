import {
  IconAdjustments,
  IconChevronDown,
  IconSearch,
} from "@tabler/icons-react";
import React from "react";

const TableFilter = () => {
  return (
    <div className="flex gap-4">
      <label
        htmlFor="search"
        className="search border-2 grow border-gray-300 rounded-md flex items-center gap-1 w-fit p-2 bg-gray-50 has-[:focus]:border-gray-500"
      >
        <IconSearch size={20} className="text-gray-500" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search vehicle"
          className="outline-0 bg-transparent"
        />
      </label>

      <label
        htmlFor="filter"
        className="filter border-2 pl-2 border-gray-300 rounded-md flex items-center gap-1 w-fit bg-gray-50 has-[:focus]:border-gray-500"
      >
        <IconAdjustments />
        <select
          name="filter"
          id="filter"
          className="p-2 appearance-none bg-transparent outline-none cursor-pointer"
        >
          <option value="none" disabled selected>
            Filter by
          </option>

          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle Type">Vehicle Type</option>
          <option value="Engine number">Engine number</option>
          <option value="Make/Model">Make/Model</option>
          <option value="Procurement source">Procurement source</option>
          <option value="Responsible officer">Responsible officer</option>
        </select>
        <IconChevronDown className="mr-2" />
      </label>
    </div>
  );
};

export default TableFilter;
