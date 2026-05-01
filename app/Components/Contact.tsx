"use client";
import { assets } from "@/public/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "c1687b92-e77a-4d88-ab78-16a4cf5d9e67");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data: { success: boolean; message?: string } = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        if (form) form.reset();
      } else {
        setResult(data.message || "Something went wrong");
      }
    } catch {
      setResult("Failed to submit the form");
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 relative"
      style={{
        backgroundImage: "url('/footer-bg-color.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay over contact bg image */}
      <div className="absolute inset-0 bg-[#11001f]/70 opacity-0 dark:opacity-100 pointer-events-none transition-opacity duration-300" />

      <div className="relative z-10">
        <h4 className="text-center mb-2 text-lg font-mono text-gray-500 dark:text-gray-300">Get in Touch</h4>
        <h2 className="text-center text-5xl font-mono text-gray-900 dark:text-white">Contact with Me</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-mono text-gray-600 dark:text-gray-300">
          Have a project in mind? Let&apos;s collaborate! Whether it is web development,
          UI/UX design, or optimization, feel free to reach out.
        </p>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-6 mt-10 mb-8">
            <input
              type="text" name="name" placeholder="Enter your name" required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-white/10 dark:border-white/30 dark:text-white dark:placeholder-gray-400"
            />
            <input
              type="email" name="email" placeholder="Enter your email" required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-white/10 dark:border-white/30 dark:text-white dark:placeholder-gray-400"
            />
          </div>

          <textarea
            name="message" rows={6} placeholder="Enter your message" required
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-white/10 dark:border-white/30 dark:text-white dark:placeholder-gray-400"
          />

          <button
            type="submit"
            className="py-3 px-8 w-max flex items-center gap-2 bg-black/80 text-white rounded-full mx-auto shadow-md transition border border-white hover:bg-black hover:-translate-y-1 cursor-pointer duration-500 dark:bg-white dark:text-black dark:hover:bg-gray-100"
          >
            Submit now
            <Image src={assets.right_arrow_white} alt="arrow" width={16} height={16} className="w-4 dark:invert" />
          </button>

          <p className="mt-4 text-center text-gray-700 dark:text-gray-200">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
