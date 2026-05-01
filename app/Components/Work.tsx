"use client";
import Image from "next/image";
import sendicon from "@/public/send-icon.png";
import rightArrowBold from "@/public/right-arrow-bold.png";

interface ProjectType {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

const projects: ProjectType[] = [
  {
    id: "project-1",
    title: "Portfolio Website",
    description: "A responsive portfolio built with Next.js and Tailwind CSS.",
    url: "#",
    imageUrl: "/fallback-image.jpg",
  },
  {
    id: "project-2",
    title: "E-commerce UI",
    description: "A polished product showcase with smooth animations and layout.",
    url: "#",
    imageUrl: "/fallback-image.jpg",
  },
  {
    id: "project-3",
    title: "Landing Page",
    description: "A clean marketing landing page designed for conversion.",
    url: "#",
    imageUrl: "/fallback-image.jpg",
  },
  {
    id: "project-4",
    title: "Dashboard App",
    description: "A modern admin dashboard with charts and user controls.",
    url: "#",
    imageUrl: "/fallback-image.jpg",
  },
];

const Work = () => {
  return (
    <section id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-mono">My Portfolio</h4>
      <h2 className="text-center text-5xl font-mono">My Latest Works</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-mono">
        Welcome to My Web Development Portfolio! Take a look at my front-end
        development projects. Each one showcases my skills in creating smooth
        and attractive user experiences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="aspect-square bg-no-repeat bg-cover rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-400 transition">
                <Image src={sendicon} alt="Go to project" width={20} height={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-white border-[0.5px] border-gray-700 dark:border-white rounded-full px-10 py-3 mx-auto my-20 shadow-md transition hover:shadow-black dark:hover:shadow-white cursor-pointer hover:-translate-y-1 duration-500"
      >
        Show more
        <Image src={rightArrowBold} alt="right-arrow" height={5} width={5} className="w-4" />
      </a>
    </section>
  );
};

export default Work;
