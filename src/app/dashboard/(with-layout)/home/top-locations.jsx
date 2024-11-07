import React from "react";
import CarIcon from "@/icons/car";
import RepairToolIcon from "@/icons/repair-tool";
import FuelPumpIcon from "@/icons/fuel-pump";
import Link from "next/link";
import ChevronRightIcon from "@/icons/chevron-right";

const locationMockData = [
  {
    rank: 143,
    name: "Lion Building",
  },
  {
    rank: 87,
    name: "Ministry of land",
  },
  {
    rank: 77,
    name: "Ministry of Justice",
  },
  {
    rank: 67,
    name: "Ministry of Tourism",
  },
  {
    rank: 62,
    name: "Lion Building Fuel Station",
  },
];

const TopLocations = ({ className }) => {
  return (
    <div className={"p-4 rounded-xl bg-neutral-100 flex flex-col " + className}>
      <h3 className="text-lg mb-2">Top Locations</h3>

      {locationMockData.map((location) => {
        return (
          <div className="trip flex items-center gap-2 text-xs whitespace-nowrap py-4 border-t-2 border-black">
            <div className="rank flex items-center justify-center bg-primary text-foreground w-8 h-8 rounded-full">
              {location.rank}
            </div>
            <address>{location.name}</address>
          </div>
        );
      })}

      <hr className="bg-black h-[3px] mb-4" />
      <Link
        href="#"
        className="mt-auto font-bold text-xs text-orange-400 hover:underline"
      >
        Show all location{" "}
        <ChevronRightIcon className="inline-block ml-2 text-black" />{" "}
      </Link>
    </div>
  );
};

export default TopLocations;
