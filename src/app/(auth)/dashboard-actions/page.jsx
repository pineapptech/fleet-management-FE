import React from "react";

import Image from "next/image";
import Link from "next/link";

import dashboardImage from "../_images/dashboard-card.png";
import fleetAllocationImage from "../_images/fleet-allocation-card.png";
import fleetInventoryImage from "../_images/fleet-inventory-card.png";
import fleetMaintainanceImage from "../_images/fleet-maintainance-card.png";
import fleetProcurementImage from "../_images/fleet-procurement-card.png";
import settingsImage from "../_images/settings-card.png";

const actions = [
  { title: "Dashboard", image: dashboardImage, href: "#" },
  { title: "Fleet Inventory", image: fleetInventoryImage, href: "#" },
  { title: "Fleet Allocation", image: fleetAllocationImage, href: "#" },
  { title: "Fleet Maintainance", image: fleetMaintainanceImage, href: "#" },
  { title: "Fleet Procurement", image: fleetProcurementImage, href: "#" },
  { title: "Settings", image: settingsImage, href: "#" },
];

const DashboardActions = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#75FFD9] to-[#469982]">
      <div className="py-40 px-4 rounded-md border border-white bg-gradient-to-br from-[#FFFFFF73] to-[#75FFD100]">
        <div className="action-wrapper flex flex-wrap gap-6">
          {actions.map(({ title, image, href }) => (
            <Link href={href} key={title + href}>
              <div className="card bg-white basis-0 grow p-4 flex flex-col gap-2 justify-between items-center rounded-md">
                <Image src={image} alt={title} className="w-20 h-20" />
                <h2 className="font-bold text-center">{title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DashboardActions;
