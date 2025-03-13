import { assets } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="text-center flex">
        <Image
          src="/biswalog.png"
          alt="..."
          width={140}
          height={80}
          className="w-70 mx-auto mb-2"
        />

        <div className="flex items-center justify-center gap-2 mx-auto">
          <Image
            src={assets.mail_icon}
            alt="..."
            width={20}
            height={20}
            className="w-8"
          />
          <span className="text-center">biswarana96.rana@gmail.com</span>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p> © 2025 Biswarup Rana. All Rights Reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li><a target="_blank" href="">GitHub</a></li>
            <li><a target="_blank" href="">LinkdIn</a></li>
            
           
        </ul>
      </div>
    </div>
  );
};

export default Footer;
