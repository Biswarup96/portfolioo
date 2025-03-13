"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const sideMenuRef = useRef<HTMLUListElement | null>(null);
  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10">
        <Image
          src="/header-bg-color.png"
          alt="header"
          width={1920}
          height={1080}
          className="w-full"
        />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top">
          <Image
            src="/biswalogo.png"
            width={112}
            height={40}
            className="w-28 cursor-pointer mr-14"
            alt="Website Logo"
            priority
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a className="font-mono" href="#top">
              home
            </a>
          </li>
          <li>
            <a className="font-mono" href="#about">
              about me
            </a>
          </li>
          <li>
            <a className="font-mono" href="#service">
              services
            </a>
          </li>
          <li>
            <a className="font-mono" href="#work">
              my work
            </a>
          </li>
          <li>
            <a className="font-mono" href="#contact">
              contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image
              src="/moon_icon.png"
              alt="moon"
              height={24}
              width={24}
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact{" "}
            <Image
              src="/arrow-icon.png"
              width={12}
              height={12}
              className="w-3"
              alt="Arrow Icon"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src="/menu-black.png"
              alt="menu"
              height={24}
              width={24}
              className="w-6"
            />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src="/close-black.png"
              height={24}
              width={24}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-mono" href="#top">
              home
            </a>
          </li>
          <li>
            <a className="font-mono" href="#about">
              about me
            </a>
          </li>
          <li>
            <a className="font-mono" href="#service">
              services
            </a>
          </li>
          <li>
            <a className="font-mono" href="#work">
              my work
            </a>
          </li>
          <li>
            <a className="font-mono" href="#contact">
              contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
