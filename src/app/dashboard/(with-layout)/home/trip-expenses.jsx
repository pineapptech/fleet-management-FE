import React from "react";
import CarIcon from "@/icons/car";
import RepairToolIcon from "@/icons/repair-tool";
import FuelPumpIcon from "@/icons/fuel-pump";
import Link from "next/link";
import ChevronRightIcon from "@/icons/chevron-right";

const tripMockData = [
  {
    price: 80300,
    title: "Lion Building Fuel Station",
    carName: " Hyundai i20",
    status: "refuel",
  },
  {
    price: 80300,
    title: "Services and Maintenance",
    carName: " Hyundai i20",
    status: "repair",
    tag: "private",
  },
  {
    price: 80300,
    title: "Lion Building Fuel Station",
    carName: " Hyundai i20",
    status: "refuel",
    tag: "business",
  },
  {
    price: 80300,
    title: "Lion Building Fuel Station",
    carName: " Hyundai i20",
    status: "refuel",
    tag: "business",
  },
  {
    price: 80300,
    title: "Lion Building Fuel Station",
    carName: " Hyundai i20",
    status: "refuel",
    tag: "business",
  },
];

const TripExpenses = ({ className }) => {
  return (
    <div className={"p-4 rounded-xl bg-neutral-100 flex flex-col " + className}>
      <h3 className="text-lg mb-2">Trip Expenses</h3>

      {tripMockData.map((trip) => {
        return (
          <div className="trip pl-4 mb-2 border-t-2 border-black">
            <div
              className={`tag w-fit py-1 px-2 mb-4 text-xs text-white capitalize ml-auto rounded-b-lg ${
                trip.tag
                  ? "bg-gradient-to-r from-[#E36130] to-[#F99238]"
                  : "bg-gray-400"
              }`}
            >
              {trip.tag || "Untagged"}
            </div>

            <div className="trip-info flex items-start gap-2 text-xs whitespace-nowrap">
              {trip.status == "repair" ? (
                <RepairToolIcon className="w-4 h-4 text-gray-500" />
              ) : (
                <FuelPumpIcon className="w-4 h-4 text-gray-500" />
              )}
              <span className="price font-bold whitespace-nowrap">
                &#x20A6; {trip.price.toLocaleString()}
              </span>
              <p className="title mr-4">{trip.title}</p>
              <CarIcon className="w-4 h-4 text-gray-500 ml-auto" />
              <span className="car-name">{trip.carName}</span>
            </div>
          </div>
        );
      })}

      <hr className="bg-black h-[3px] mb-4" />
      <Link
        href="#"
        className="mt-auto font-bold text-xs text-orange-400 hover:underline"
      >
        Show all expenses{" "}
        <ChevronRightIcon className="inline-block ml-2 text-black" />{" "}
      </Link>
    </div>
  );
};

export default TripExpenses;
