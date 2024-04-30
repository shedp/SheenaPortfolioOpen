import React from "react";
import email from "../email.png";
import github from "../github.png";
import linkedin from "../linkedin.png";
import { Link } from "react-router-dom";
import Section from "./Section";

const Contact = () => {
  const contactContent = (
    <>
      <div className="flex justify-center gap-8 sm:gap-12 md:gap-18 lg:gap-24 pb-6">
        <Link to="/">
          <img
            src={email}
            alt="email"
            className="w-[40px] h-[40px] cursor-pointer"
            id="email"
          />
        </Link>
        <Link to="/">
          <img
            src={github}
            alt="github"
            className="w-[40px] h-[40px] cursor-pointer"
            id="github"
          />
        </Link>
        <Link to="/">
          <img
            src={linkedin}
            alt="linkedin"
            className="w-[40px] h-[40px] cursor-pointer"
            id="linkedin"
          />
        </Link>
      </div>
      <div className="text-center">
        This project was coded by Sheena Diep and is{" "}
        <Link
          to="https://github.com/shedp/SheenaPortfolioOpen/tree/main"
          className="underline"
          target="_blank"
        >
          open-sourced
        </Link>
      </div>
    </>
  );
  return (
    <Section
      bgColor="bg-white"
      title="Contact"
      titleBorderStyle="border-gradient"
      children={contactContent}
    />
  );
};

export default Contact;
