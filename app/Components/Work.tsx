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
    description: "Modern portfolio built with Next.js & Tailwind.",
    url: "#",
    imageUrl: "/work-1.png",
  },
  {
    id: "project-2",
    title: "E-commerce Web App",
    description: "Full-stack app with FastAPI backend.",
    url: "#",
    imageUrl: "/work-2.png",
  },
  {
    id: "project-3",
    title: "SaaS Landing Page",
    description: "High-converting UI with React & Tailwind.",
    url: "#",
    imageUrl: "/work-3.png",
  },
  {
    id: "project-4",
    title: "Analytics Dashboard",
    description: "Data-driven dashboard with charts & insights.",
    url: "#",
    imageUrl: "/work-4.png",
  },
];

const Work = () => {
  return (
    <section id="work" className="w-full px-[8%] py-16 scroll-mt-20">
      {/* Header */}
      <h4 className="text-center mb-2 text-sm tracking-widest text-gray-500 uppercase">
        Portfolio
      </h4>
      <h2 className="text-center text-4xl md:text-5xl font-bold">
        My Latest Work
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-4 mb-12 text-gray-600">
        I build responsive frontend experiences, scalable FastAPI backends,
        and explore data-driven solutions.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-500"
          >
            {/* Image */}
            <div className="relative w-full h-64">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-5">
              <h3 className="text-white text-lg font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                {project.description}
              </p>

              <a
                href={project.url}
                className="mt-4 inline-flex items-center gap-2 text-sm text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
              >
                View Project
                <Image src={sendicon} alt="icon" width={16} height={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-16">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3 border border-gray-400 rounded-full text-gray-700 hover:bg-black hover:text-white transition duration-300"
        >
          Show More
          <Image src={rightArrowBold} alt="arrow" width={16} height={16} />
        </a>
      </div>
    </section>
  );
};

export default Work;