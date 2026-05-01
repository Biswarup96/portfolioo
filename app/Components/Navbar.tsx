"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const sideMenuRef = useRef<HTMLUListElement | null>(null);
  const [isScroll, setIsScroll] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const openMenu = () => {
    if (sideMenuRef.current) sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    if (sideMenuRef.current) sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header background image — same in both modes, dark overlay applied via CSS */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 pointer-events-none">
        <Image
          src="/header-bg-color.png"
          alt="header background"
          width={1920}
          height={1080}
          className="w-full"
          priority
        />
        {/* Dark mode tint overlay — preserves gradient structure */}
        <div className="absolute inset-0 bg-[#11001f]/80 opacity-0 dark:opacity-100 transition-opacity duration-300" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/50 dark:bg-[#11001f]/70 backdrop-blur-lg shadow-sm"
            : ""
        }`}
      >
        {/* Logo — single logo, inverted in dark mode so it stays readable */}
        <a href="#top" className="hidden sm:block">
          <Image
            src="/biswalogo.png"
            width={112}
            height={40}
            className="w-28 cursor-pointer mr-14 dark:invert"
            alt="Biswarup Logo"
            priority
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/50 shadow-sm dark:bg-white/10 dark:shadow-white/10">
          {["home", "about me", "services", "my work", "contact me"].map((item, i) => (
            <li key={i}>
              <a
                className="font-mono text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                href={["#top","#about","#service","#work","#contact"][i]}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
            <Image
              src={isDarkMode ? "/sun_icon.png" : "/moon_icon.png"}
              alt={isDarkMode ? "Light mode" : "Dark mode"}
              height={24}
              width={24}
              className="w-6"
            />
          </button>

          {/* Contact button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-white rounded-full ml-4 text-gray-800 dark:text-white hover:border-purple-500 dark:hover:border-purple-300 transition-colors"
          >
            Contact{" "}
            <Image src="/arrow-icon.png" width={12} height={12} className="w-3 dark:hidden" alt="Arrow" />
            <Image src="/arrow-icon-dark.png" width={12} height={12} className="w-3 hidden dark:block" alt="Arrow" />
          </a>

          {/* Mobile hamburger */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src="/menu-black.png" alt="menu" height={24} width={24} className="w-6 dark:hidden" />
            <Image src="/menu-white.png" alt="menu" height={24} width={24} className="w-6 hidden dark:block" />
          </button>
        </div>

        {/* Mobile side menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-[#2a004a] transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src="/close-black.png" height={24} width={24} alt="close" className="w-5 cursor-pointer dark:hidden" />
            <Image src="/close-white.png" height={24} width={24} alt="close" className="w-5 cursor-pointer hidden dark:block" />
          </div>
          {["home", "about me", "services", "my work", "contact me"].map((item, i) => (
            <li key={i}>
              <a className="font-mono text-gray-800 dark:text-white" href={["#top","#about","#service","#work","#contact"][i]} onClick={closeMenu}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
