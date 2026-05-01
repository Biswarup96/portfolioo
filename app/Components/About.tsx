import { toolsData } from "@/public/assets";
import Image from "next/image";
import React from "react";

const infoList = [
  {
    icon: "/code-icon.png",
    iconDark: "/code-icon-dark.png",
    title: "Languages",
    description: "HTML, CSS, Typescript, JavaScript, React.js, Next.js",
  },
  {
    icon: "/edu-icon.png",
    iconDark: "/edu-icon-dark.png",
    title: "Education",
    description: "Currently - Frontend Trainee in Webskitters Academy",
  },
  {
    icon: "/project-icon.png",
    iconDark: "/project-icon-dark.png",
    title: "Projects",
    description: "Till now 3 projects",
  },
];

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-mono text-gray-500 dark:text-gray-300">Introduction</h4>
      <h2 className="text-center text-5xl font-mono text-gray-900 dark:text-white">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image src="/newpic.png" alt="user" height={300} width={300} className="w-full rounded-3xl" priority />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-mono text-gray-600 dark:text-gray-300">
            I am a frontend web developer with a passion for building modern,
            responsive, and user-centric web applications. With a strong
            foundation in HTML, CSS, and JavaScript, I specialize in creating
            seamless and visually appealing interfaces using cutting-edge
            technologies like React, Next.js, and Tailwind CSS.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 dark:border-gray-500 rounded-xl p-6 cursor-pointer
                  hover:bg-[#fcf4ff] dark:hover:bg-[#2a004a]
                  hover:-translate-y-1 transition duration-500
                  hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-white/20"
              >
                <Image src={icon} alt={title} height={40} width={40} className="w-7 mt-3 dark:hidden" />
                <Image src={iconDark} alt={title} height={40} width={40} className="w-7 mt-3 hidden dark:block" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 font-mono text-gray-700 dark:text-gray-200">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5 flex-wrap">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-500 rounded-lg cursor-pointer
                  hover:-translate-y-1 transition duration-500
                  hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-white/20"
              >
                <Image src={tool} alt="tool" height={28} width={28} className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
