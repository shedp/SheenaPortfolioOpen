import React from "react";
import Tags from "./Tags";
import Icon from "./Icon";

const Card = ({ project, bgColor }) => {
  return (
    <div className={`${bgColor} p-6 md:p-8 xl:p-10 h-79 flex flex-col gap-2`}>
      <h2 className="font-bold text-base sm:text-sm lg:text-lg tracking-normal border-b-2 border-white">
        {project.title}
      </h2>
      <p className="tracking-normal font-semibold italic">{project.subtitle}</p>
      <p className="overflow-hidden text-wrap truncate text-sm sm:text-xs lg:text-base tracking-normal">
        {project.description}
      </p>
      <div className="h-12">
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((tech, i) => {
            return (
              <Tags
                key={`${project.name}_${i}`}
                name={tech.name}
                type={tech.type}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-start gap-5">
        {project.icons.map((icon, i) => {
          return <Icon icon={icon} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Card;
