import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ handleButtonClick }) => {
  return (
    <div className="transition ease-in-out delay-150 flex flex-col z-50 fixed top-0 w-full h-[100vh] items-center justify-center bg-gray-700/70 backdrop-blur text-white text-xl uppercase">
      <div
        className="w-full text-2xl md:text-3xl text-right mr-[10vw] cursor-pointer"
        onClick={handleButtonClick}
      >
        &times;
      </div>
      <ul className="py-[30vh] mx-auto flex flex-col text-center">
        <li className="p-2 border-b border-white">
          <Link
            to="/"
            className="hover:text-gray-700"
            onClick={handleButtonClick}
          >
            Home
          </Link>
        </li>
        <li className="p-2 border-b border-white">
          <Link
            to="/about"
            className="hover:text-gray-700"
            onClick={handleButtonClick}
          >
            About
          </Link>
        </li>
        <li className="p-2 border-b border-white">
          <Link
            to="/projects"
            className="hover:text-gray-700"
            onClick={handleButtonClick}
          >
            Projects
          </Link>
        </li>
        <li className="p-2 border-b border-white">
          <Link
            to="/contact"
            className="hover:text-gray-700"
            onClick={handleButtonClick}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Modal;
