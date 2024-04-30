import React from "react";

const Tags = ({ name, type }) => {
  let color;
  switch (type) {
    case "language":
      color = "text-amber-800 border-amber-800 bg-amber-300";
      break;
    case "database":
      color = "text-sky-800 border-sky-800 bg-sky-300";
      break;
    case "server":
      color = "text-indigo-800 border-indigo-800 bg-indigo-300";
      break;
    case "client":
      color = "text-rose-800 border-rose-800 bg-rose-300";
      break;
    case "deployment":
      color = "text-teal-800 border-teal-800 bg-teal-300";
      break;
    default:
      color = "text-gray-800 border-gray-800 bg-gray-300";
  }
  return (
    <div
      className={`lowercase tracking-normal text-xs md:text-sm whitespace-nowrap rounded-2xl pt-1.5 px-2 border ${color}`}
    >
      {name}
    </div>
  );
};

export default Tags;
