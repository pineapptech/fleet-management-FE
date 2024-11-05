"use client";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/button";
import { redirect } from "next/navigation";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormDataChange = (e) => {
    setFormData((fd) => ({ ...fd, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Register logic coming soon
    redirect("/login");
  };

  return (
    <form method="post" className="self-stretch" onSubmit={handleFormSubmit}>
      <div className="form-group flex flex-col gap-2 mb-4 font-bold">
        <label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleFormDataChange}
          value={formData.email}
          className="w-full p-1 border-b outline-[#115931] border-[#115931] bg-gray-50 rounded-t-lg"
          required
        />
      </div>
      <div className="form-group flex flex-col gap-2 mb-4 font-bold">
        <label htmlFor="password">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleFormDataChange}
          value={formData.password}
          className="w-full p-1 border-b outline-[#115931] border-[#115931] bg-gray-50 rounded-t-lg"
          required
        />
      </div>
      <div className="form-group flex flex-col gap-2 font-bold">
        <label htmlFor="confirmPassword">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={handleFormDataChange}
          value={formData.confirmPassword}
          className="w-full p-1 border-b outline-[#115931] border-[#115931] bg-gray-50 rounded-t-lg"
          required
        />
        <Link
          href="/forgot-password"
          className="self-end mb-2 font-normal hover:underline text-[#115931]"
        >
          Forgot password?
        </Link>
      </div>
      <Button type="submit" className="bg-[#115931] text-white w-full">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
