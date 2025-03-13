import Image from "next/image";
import { assets, serviceData } from "@/public/assets";
import React from "react";

const Services = () => {
  return (
    <section id="service" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-mono">What I offer</h4>
      <h2 className="text-center text-5xl font-mono">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-mono">
        As a dedicated frontend web developer, I offer a range of services
        designed to bring your digital ideas to life. Whether you are looking
        to build a stunning website, optimize an existing application, or
        create a seamless user experience, I am here to help.
      </p>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="px-8 py-12 border border-gray-400 rounded-lg shadow-md transition hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500 "
          >
            <Image src={icon} alt={title} width={40} height={40} className="w-10" priority />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a
              href={link}
              className="text-gray-700 font-extrabold no-underline hover:no-underline hover:text-emerald-600   flex items-center gap-2 text-sm mt-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more <Image src={assets.right_arrow} alt="..." height={10} width={10} className="w-4"/>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
