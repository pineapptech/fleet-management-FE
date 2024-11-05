import { redirect } from "next/navigation";
import React from "react";

const Homepage = () => {
  redirect("/login");
  return <div>Homepage</div>;
};

export default Homepage;
