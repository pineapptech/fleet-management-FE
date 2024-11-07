"use client";
import CalendarIcon from "@/icons/calendar";
import ClockIcon from "@/icons/clock";
import { useState, useEffect } from "react";

const RealTimeInfo = ({ title = "Real Time Data" }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setTimeout(() => setDate(new Date()), 30 * 1000);

    return () => clearTimeout(timerId);
  });

  const padDate = (num) => (String(num).length < 2 ? "0" + num : num);

  return (
    <div className="flex items-baseline gap-4 my-4 text-secondary text-sm">
      <h2 className="capitalize font-extrabold text-xl whitespace-nowrap">
        {title}
      </h2>
      <div className="date flex items-start gap-1.5">
        <CalendarIcon />
        <span>
          {padDate(date.getDate())}.{padDate(date.getMonth() + 1)}.
          {date.getFullYear()}
        </span>
      </div>
      <div className="date flex items-start gap-1.5">
        <ClockIcon />
        <span>
          {padDate(date.getHours())}:{padDate(date.getMinutes())}
        </span>
      </div>
    </div>
  );
};

export default RealTimeInfo;
