import React from "react";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import ActionButton from "../components/ActionButton";
import { Helmet } from "react-helmet-async";

const Aboutpage = () => {
  const content = (
    <Link to="/" target="blank">
      <ActionButton
        content="View My CV"
        shadowColor="shadow-violet-400"
        textColor="text-violet-400"
      />
    </Link>
  );

  const aboutText = (
    <>
      <p className="text-white text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </>
  );
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Section
        title="About"
        titleBorderStyle="border-gradient"
        children={content}
      />
      <Section
        sectionStyle="bg-blue-950 pt-2"
        titleBorderStyle="border-none"
        children={aboutText}
      />
    </>
  );
};

export default Aboutpage;
