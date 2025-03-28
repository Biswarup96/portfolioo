import { toolsData } from "@/public/assets";
import Image from "next/image";
import React from "react";

const assets = {
  code_icon: "/code-icon.png",
  edu_icon: "/edu-icon.png",
  project_icon: "/project-icon.png",
};

const About = () => {
  const infoList = [
    {
      icon: assets.code_icon,
      title: "Languages",
      description: "HTML, CSS, Typescript, JavaScript, React.js, Next.js",
    },
    {
      icon: assets.edu_icon,
      title: "Education",
      description: " Curently -Frontend Trainee in Webskitters Academy",
    },
    {
      icon: assets.project_icon,
      title: "Projects",
      description: "Till now 3-projects",
    },
  ];

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-mono">Introduction</h4>
      <h2 className="text-center text-5xl font-mono">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Profile Image part */}
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src="/newpic.png"
            alt="user"
            height={300}
            width={300}
            className="w-full rounded-3xl"
            priority
          />
        </div>

        {/* About Info part*/}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-mono">
            I am a frontend web developer with a passion for building modern,
            responsive, and user-centric web applications. With a strong
            foundation in HTML, CSS, and JavaScript, I specialize in creating
            seamless and visually appealing interfaces using cutting-edge
            technologies like React, Next.js, and Tailwind CSS. My journey in
            frontend development has been fueled by a relentless curiosity to
            explore new tools, frameworks, and design trends that enhance user
            experiences.
          </p>

          {/* Skills List it's coming from assets.ts */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                        hover:bg-lightHover hover:-translate-y-1 transition duration-500  
                        hover:shadow-lg hover:shadow-black"
              >
                <Image
                  src={icon}
                  alt={title}
                  height={40}
                  width={40}
                  className="w-7 mt-3"
                />
                <div>
                  <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-mono">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 transition duration-500  
                        hover:shadow-lg hover:shadow-black "
              >
                <Image
                  src={tool}
                  alt="tool"
                  height={10}
                  width={10}
                  className="w-5 sm:w-7"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
