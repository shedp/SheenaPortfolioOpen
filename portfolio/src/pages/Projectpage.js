import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import projectData from "../db/db";
import { Helmet } from "react-helmet-async";

const Projectpage = () => {
  const colors = [
    "bg-amber-300",
    "bg-rose-300",
    "bg-teal-300",
    "bg-sky-300",

    "bg-fuchsia-300",
    "bg-violet-300",
  ];

  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Section title="Projects" titleBorderStyle="border-gradient" />
      <section className="w-full grid grid-cols-1 sm:grid-cols-2">
        {projectData.map((project, i) => (
          <Card key={i} bgColor={colors[i % colors.length]} project={project} />
        ))}
      </section>
    </>
  );
};

export default Projectpage;
