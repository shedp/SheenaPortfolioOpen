import React from "react";

const Section = ({
  sectionStyle,
  title,
  subtitle,
  titleStyle,
  subtitleStyle,
  titleBorderStyle,
  children,
}) => {
  return (
    <section
      className={`${sectionStyle} w-full px-16 sm:px-20 md:px-30 lg:px-36 pt-20 pb-10`}
    >
      <div
        className={`flex flex-col border-b-2 mb-10 font-semibold ${titleBorderStyle}`}
      >
        <div className={`text-3xl xl:text-5xl ${titleStyle}`}>{title}</div>
        <div className={`text-4xl xl:text-5xl pt-4 h-auto ${subtitleStyle}`}>
          {subtitle}
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
