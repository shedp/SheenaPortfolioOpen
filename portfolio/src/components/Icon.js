import React from "react";
import { Link } from "react-router-dom";
import Github from "../github.png";
import Web from "../web.png";
import OpenBook from "../open-book.png";

const Icon = ({ icon }) => {
  if (icon.icon === "Web") {
    return (
      <Link
        to={icon.link}
        target="blank"
        className="flex flex-col items-center justify-center gap-2 pt-4"
      >
        <img
          src={Web}
          alt={icon.text}
          className="w-[25px] h-[25px] content-center"
        />
        <div className="tracking-normal text-xs">{icon.alt}</div>
      </Link>
    );
  } else if (icon.icon === "OpenBook") {
    return (
      <Link
        to={icon.link}
        className="flex flex-col items-center justify-center gap-2 pt-4"
      >
        <img
          src={OpenBook}
          alt={icon.text}
          className="w-[25px] h-[25px] justify-self-center block"
        />
        <div className="tracking-normal text-xs">{icon.alt}</div>
      </Link>
    );
  } else {
    return (
      <Link
        to={icon.link}
        target="blank"
        className="flex flex-col items-center justify-center gap-2 pt-4"
      >
        <img src={Github} alt={icon.text} className="w-[25px] h-[25px]" />

        <div className="tracking-normal text-xs align-middle">{icon.alt}</div>
      </Link>
    );
  }
};

export default Icon;
