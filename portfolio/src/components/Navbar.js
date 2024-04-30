import React, { useState } from "react";
import panda from "../panda.png";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleButtonClick = () => {
    setMenuToggle(!menuToggle);
    console.log(menuToggle);
  };

  return (
    <>
      <header
        id="navbar"
        className="sticky top-0 flex p-4 sm:p-6 justify-between uppercase align-middle bg-white z-10"
      >
        <Link to="/" className="flex gap-2">
          <img src={panda} className="logo w-[25px] h-[25px]" alt="logo" />|
          <div className="align-middle pt-0.5 uppercase">John Doe</div>
        </Link>

        <ul className="gap-8 hidden sm:flex align-middle pt-0.5">
          <li className="hover:border-b border-teal-400">
            <Link to="/" className="hover:text-teal-400">
              Home
            </Link>
          </li>
          <li className="hover:border-b border-sky-400">
            <Link to="/about" className="hover:text-sky-400">
              About
            </Link>
          </li>
          <li className="hover:border-b border-amber-400">
            <Link to="/projects" className="hover:text-amber-400">
              Projects
            </Link>
          </li>
          <li className="hover:border-b border-rose-400">
            <Link to="/contact" className="hover:text-rose-400">
              Contact
            </Link>
          </li>
        </ul>
        <div
          id="menu-toggle"
          className="sm:hidden pt-0.5"
          onClick={handleButtonClick}
        >
          <Link to=" #">Menu</Link>
        </div>
      </header>
      {menuToggle ? <Modal handleButtonClick={handleButtonClick} /> : <></>}
    </>
  );
};

export default Navbar;
