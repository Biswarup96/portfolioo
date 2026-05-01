import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="relative z-10">
        <Image
          src="/newpic.png"
          alt="profile"
          height={128}
          width={128}
          className="rounded-full w-32 h-32 sm:w-40 sm:h-42 animate-fade-in-scale object-cover"
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg) scale(${1 - scrollY * 0.0005})`,
            transition: scrollY === 0 ? "transform 0.8s ease-out" : "transform 0.1s ease-out",
          }}
          priority
        />
      </div>

      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-mono text-gray-800 dark:text-white">
        Hi! I am Biswarup Rana{" "}
        <Image src="/hand-icon.png" alt="hand" height={24} width={24} className="w-6" />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-mono text-gray-900 dark:text-white">
        Frontend Web Developer
      </h1>

      <p className="max-w-2xl mx-auto font-mono text-gray-600 dark:text-gray-200">
        I am a passionate frontend web developer with a deep love for crafting
        beautiful, responsive, and user-friendly web experiences. My journey in
        frontend development has been driven by curiosity to explore the latest
        technologies, frameworks, and design trends.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 shadow-md transition hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500 dark:bg-white dark:text-black dark:border-gray-300 dark:hover:shadow-white"
        >
          Contact me!{" "}
          <Image src="/right-arrow-white.png" alt="arrow" height={16} width={16} className="w-4 dark:invert" />
        </a>

        <a
          href="/Biswarup's Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 dark:border-white flex items-center gap-2 shadow-md transition hover:shadow-black dark:hover:shadow-white cursor-pointer hover:-translate-y-1 duration-500 text-gray-800 dark:text-white"
        >
          My Resume{" "}
          <Image src="/download-icon.png" alt="download" height={16} width={16} className="w-4 dark:invert" />
        </a>
      </div>
    </div>
  );
};

export default Header;
