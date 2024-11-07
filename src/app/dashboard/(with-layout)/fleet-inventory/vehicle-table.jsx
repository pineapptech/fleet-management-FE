import { IconDotsVertical, IconShieldCheckFilled } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const vehiclesMockData = [
  {
    id: 1,
    sn: "01",
    vehicleImage: "https://example.com/images/vehicle1.png", // Placeholder URL for the vehicle image
    vehicleID: "FMS-EN-00123",
    vehicleType: "SUV",
    makeModel: "Toyota Land Cruiser 2022",
    engineNumber: "1KD-FTV-88746",
    action: "View Details",
  },
  {
    id: 2,
    sn: "01",
    vehicleImage: "https://example.com/images/vehicle1.png",
    vehicleID: "FMS-EN-00123",
    vehicleType: "SUV",
    makeModel: "Toyota Land Cruiser 2022",
    engineNumber: "1KD-FTV-88746",
    action: "View Details",
  },
  {
    id: 3,
    sn: "01",
    vehicleImage: "https://example.com/images/vehicle1.png",
    vehicleID: "FMS-EN-00123",
    vehicleType: "SUV",
    makeModel: "Toyota Land Cruiser 2022",
    engineNumber: "1KD-FTV-88746",
    action: "View Details",
  },
  {
    id: 4,
    sn: "01",
    vehicleImage: "https://example.com/images/vehicle1.png",
    vehicleID: "FMS-EN-00123",
    vehicleType: "SUV",
    makeModel: "Toyota Land Cruiser 2022",
    engineNumber: "1KD-FTV-88746",
    action: "View Details",
  },
  {
    id: 5,
    sn: "01",
    vehicleImage: "https://example.com/images/vehicle1.png",
    vehicleID: "FMS-EN-00123",
    vehicleType: "SUV",
    makeModel: "Toyota Land Cruiser 2022",
    engineNumber: "1KD-FTV-88746",
    action: "View Details",
  },
  {
    id: 6,
    sn: "01",
    vehicleImage: "https://example.com/images/vehicle1.png",
    vehicleID: "FMS-EN-00123",
    vehicleType: "SUV",
    makeModel: "Toyota Land Cruiser 2022",
    engineNumber: "1KD-FTV-88746",
    action: "View Details",
  },
];

const VehicleTable = () => {
  return (
    <table className="table-fixed w-full rounded-xl text-sm">
      <thead>
        <tr className="ring-2 ring-primary ring-offset-4 ring-offset-primary rounded-t-xl *:py-1 bg-primary text-foreground">
          <th className="w-fit pl-1">
            <input
              type="checkbox"
              name="allTrips"
              id="allTrips"
              className="accent-primary"
            />
          </th>
          <th className="w-fit">SN</th>
          <th className="w-[15%]">Vehicle Image</th>
          <th className="w-[20%]">Vehicle ID/Inventory ID</th>
          <th className="w-fit"> Type</th>
          <th className="w-[15%]">Make/Model</th>
          <th className="w-[20%]">Engine Number</th>
          <th className="w-fit">Actions</th>
        </tr>
      </thead>
      <tbody>
        {vehiclesMockData.map((vehicle, index) => {
          return (
            <tr
              key={vehicle.id}
              className="*:py-3 border-b-2 even:bg-amber-100/50 even:border-amber-400 odd:bg-green-100/50 odd:border-green-400 hover:even:bg-amber-100 hover:odd:bg-green-100"
            >
              <td className="text-center">
                <input
                  type="checkbox"
                  name={vehicle.id}
                  id={vehicle.id}
                  className="accent-primary"
                />
              </td>
              <td>{(index < 9 ? "0" : "") + (index + 1)}</td>
              <td className="text-center flex justify-center items-center flex-wrap">
                <Image
                  src="/images/car.jpeg"
                  width={80}
                  height={66}
                  alt={"Image of vehicle with id " + vehicle.id}
                />
              </td>
              <td className="text-center">{vehicle.vehicleID}</td>
              <td className="text-center">{vehicle.vehicleType}</td>
              <td>{vehicle.makeModel}</td>
              <td className="text-center">{vehicle.engineNumber}</td>
              <td className="text-center">
                <button className="flex text-green-400">
                  <IconShieldCheckFilled size={18} />
                  <IconDotsVertical size={18} />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default VehicleTable;
