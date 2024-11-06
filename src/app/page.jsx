import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Homepage = () => {
  redirect("/auth/login");
  return (
    <div>
      Redirecting to login. If this takes too long,{" "}
      <Link href="/auth/login">Click here</Link>{" "}
    </div>
  );
};

export default Homepage;
