import React from "react";
import Image from "next/image";
import Link from "next/link";

const ActionCard = ({ image, title, href = "#" }) => {
  return (
    <Link href={href}>
      <div className="card bg-white basis-0 grow p-4 flex flex-col gap-2 justify-between items-center rounded-md">
        <Image src={image} alt={title} className="w-20 h-20" />
        <h2 className="font-bold text-center">{title}</h2>
      </div>
    </Link>
  );
};

export default ActionCard;
