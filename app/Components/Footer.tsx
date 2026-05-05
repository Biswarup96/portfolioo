import { assets } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
        <Image
          src="/biswalog.png"
          alt="logo"
          width={140}
          height={80}
          className="w-36 dark:invert"
        />
        <div className="flex items-center justify-center gap-2">
          <Image src={assets.mail_icon} alt="mail" width={20} height={20} className="w-6" />
          <span className="text-gray-700 dark:text-gray-300">biswarana96.rana@gmail.com</span>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-300 dark:border-gray-700 mx-[10%] mt-8 py-6">
        <p className="text-gray-600 dark:text-gray-400 text-sm">© 2025 Biswarup Rana. All Rights Reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li><a target="_blank" href="https://github.com/Biswarup96" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors">GitHub</a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/biswarup-rana" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
