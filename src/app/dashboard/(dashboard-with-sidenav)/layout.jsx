import React from "react";
import SideNav from "./_components/side-nav";

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-background h-screen flex p-4">
      <SideNav className="text-foreground basis-1/5 font-sans text-sm" />
      <main className="p-8 rounded-s-3xl basis-4/5 grow  bg-foreground text-background overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
