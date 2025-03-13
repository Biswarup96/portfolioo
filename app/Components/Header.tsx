import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* Profile Image */}
      <div>
        <Image
          src="/newpic.png"
          alt="profile"
          height={128} // Explicit height
          width={128} // Explicit width
          className="rounded-full w-40 h-42"
          priority // Ensures faster loading in Next.js
        />
      </div>

      {/* Intro Text */}
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-mono">
        Hi! I am Biswarup Rana{" "}
        <Image
          src="/hand-icon.png"
          alt="hand"
          height={24}
          width={24}
          className="w-6"
        />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-mono">
        Frontend Web Developer
      </h1>

      <p className="max-w-2xl mx-auto font-mono">
        I am a passionate frontend web developer with a deep love for crafting
        beautiful, responsive, and user-friendly web experiences. My journey in
        frontend development has been driven by curiosity to explore the latest
        technologies, frameworks, and design trends.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 shadow-md transition hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500"
        >
          Contact me!{" "}
          <Image
            src="/right-arrow-white.png"
            alt="right-arrow-white"
            height={16}
            width={16}
            className="w-4"
          />
        </a>

        <a
          href="/Biswarup's Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 shadow-md transition hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500"
        >
          My Resume{" "}
          <Image
            src="/download-icon.png"
            alt="downloadicon"
            height={16}
            width={16}
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
