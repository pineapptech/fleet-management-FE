import {
  IconAdjustments,
  IconBorderAll,
  IconChevronDown,
  IconColumns,
  IconSearch,
} from "@tabler/icons-react";
import { useState } from "react";

const TableFilter = ({ filterData, setFilterData }) => {
  const handleFilterChange = (e) => {
    setFilterData((fd) => ({ ...fd, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex gap-4 mb-8">
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
          value={filterData.search}
          onChange={handleFilterChange}
          className="outline-0 bg-transparent"
        />
      </label>

      <label
        htmlFor="filter"
        className="filter border-2 pl-2 border-gray-300 rounded-md flex items-center gap-1 w-fit bg-gray-50 has-[:focus]:border-gray-500"
      >
        <IconAdjustments />
        <select
          name="filterBy"
          id="filter"
          className="p-2 appearance-none bg-transparent outline-none cursor-pointer"
          value={filterData.filterBy}
          onChange={handleFilterChange}
        >
          <option value="none" disabled>
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

      <div className="radio-group flex items-center justify-around">
        <label
          htmlFor="tabular"
          className="bg-gray-100 p-2 cursor-pointer border rounded-s-lg has-[:checked]:border-primary"
        >
          <input
            type="radio"
            name="display-mode"
            id="tabular"
            onChange={(e) =>
              setFilterData((fd) => ({ ...fd, displayMode: "tabular" }))
            }
            checked={filterData.displayMode == "tabular"}
            className="peer appearance-none absolute"
          />
          <IconBorderAll className="peer-checked:text-primary" />
        </label>
        <label
          htmlFor="cards"
          className="bg-gray-100 p-2 cursor-pointer border rounded-e-lg has-[:checked]:border-primary"
        >
          <input
            type="radio"
            name="display-mode"
            id="cards"
            onChange={(e) =>
              setFilterData((fd) => ({ ...fd, displayMode: "cards" }))
            }
            checked={filterData.displayMode == "cards"}
            className="peer appearance-none absolute"
          />
          <IconColumns className="peer-checked:text-primary" />
        </label>
      </div>
    </div>
  );
};

export default TableFilter;
