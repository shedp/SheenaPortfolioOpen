import React from "react";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import ActionButton from "../components/ActionButton";
import Card from "../components/Card";
import projectData from "../db/db";
import { Helmet } from "react-helmet-async";

const Homepage = () => {
  const titleSectionContent = (
    <div className="flex flex-col gap-4 sm:flex-row justify-between">
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Nulla porttitor tempor semper.
      </p>
      <Link to="/" target="blank">
        <ActionButton
          content="View My CV"
          shadowColor="shadow-teal-400"
          textColor="text-teal-400"
        />
      </Link>
    </div>
  );

  const skillsContent = (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:text-xl uppercase">
      <div className="p-2 md:p-4 lg:p-6 border-x border-t border-white bg-white/30 md:border">
        <h3 className="pb-1 font-semibold tracking-normal">Lorem ipsum</h3>
        <ul>
          <li className="tracking-normal">consectetur adipiscing elit</li>
          <li className="tracking-normal">Nulla porttitor tempor</li>
        </ul>
      </div>
      <div className="p-2 md:p-4 lg:p-6 border-x border-t border-white bg-white/30 md:border">
        <h3 className="pb-1 font-semibold tracking-normal">Cras dui eros</h3>
        <ul>
          <li className="tracking-normal">interdum vitae</li>
          <li className="tracking-normal">finibus eget</li>
          <li className="tracking-normal">blandit vitae nisl</li>
          <li className="tracking-normal">Donec euismod</li>
        </ul>
      </div>
      <div className="p-2 md:p-4 lg:p-6 border-x border-t border-white bg-white/30 sm:border">
        <h3 className="pb-1 font-semibold tracking-normal">Vivamus vitae</h3>
        <ul>
          <li className="tracking-normal">nisl egestas dui</li>
          <li className="tracking-normal">onvallis tempor ut</li>
        </ul>
      </div>
      <div className="p-2 md:p-4 lg:p-6 border border-white bg-white/30">
        <h3 className="pb-1 font-semibold tracking-normal">Other</h3>
        <ul>
          <li className="tracking-normal">Aenean vitae auctor orci</li>
          <li className="tracking-normal pl-3">vel eleifend augue</li>
          <li className="tracking-normal">
            Maecenas id nibh mattis, tincidunt urna
          </li>
        </ul>
      </div>
    </div>
  );

  const projectContent = (
    <ActionButton
      content="See More"
      shadowColor="shadow-sky-400"
      textColor="text-sky-400"
    />
  );

  return (
    <>
      <Helmet>Sheena Diep</Helmet>
      <Section
        sectionStyle="bg-white min-h-[84vh] sm:min-h-[75vh] md:min-h-[66vh] md:min-h-[58vh] lg:min-h-[50vh]"
        title="Hello, I'm"
        subtitle="John Doe"
        subtitleStyle="text-gradient"
        titleBorderStyle="border-gradient"
        children={titleSectionContent}
      />
      <Section
        sectionStyle="bg-gradient min-h-[84vh]"
        title="Skills"
        titleStyle="text-white"
        titleBorderStyle="border-white"
        children={skillsContent}
      />
      <Section
        bgColor="bg-white"
        title="Projects"
        titleBorderStyle="border-gradient"
        children={projectContent}
      />
      <section className="w-full grid grid-cols-1 sm:grid-cols-2">
        <Card bgColor="bg-teal-300" project={projectData[0]} />
        <Card bgColor="bg-sky-300" project={projectData[1]} />
        <Card bgColor="bg-amber-300" project={projectData[2]} />
        <Card bgColor="bg-rose-300" project={projectData[3]} />
      </section>
    </>
  );
};

export default Homepage;
