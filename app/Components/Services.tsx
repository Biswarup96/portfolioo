import Image from "next/image";
import { assets, serviceData } from "@/public/assets";
import React from "react";

const Services = () => {
  return (
    <section id="service" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-mono text-gray-500 dark:text-gray-300">What I offer</h4>
      <h2 className="text-center text-5xl font-mono text-gray-900 dark:text-white">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-mono text-gray-600 dark:text-gray-300">
       I build modern web applications with strong frontend design, FastAPI-powered backends, and a growing focus on data analytics.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="px-8 py-12 border border-gray-300 dark:border-gray-600 rounded-lg
              transition duration-500 cursor-pointer
              hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
              dark:hover:shadow-white/10 dark:hover:bg-[#2a004a]"
          >
            <Image src={icon} alt={title} width={40} height={40} className="w-10" priority />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-5">{description}</p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5 font-extrabold text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more{" "}
              <Image src={assets.right_arrow} alt="arrow" height={10} width={10} className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
