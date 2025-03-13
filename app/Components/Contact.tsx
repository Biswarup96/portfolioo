import { assets } from "@/public/assets";
import Image from "next/image";
import React, { useState } from "react";
const Contact = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
  
    const form = event.currentTarget; // Store reference to the form
    const formData = new FormData(form);
  
    formData.append("access_key", "c1687b92-e77a-4d88-ab78-16a4cf5d9e67");
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data: { success: boolean; message?: string } = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        if (form) form.reset(); // Ensure form is not null before resetting
      } else {
        console.error("Error", data);
        setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("Failed to submit the form");
    }
  }; 
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
      style={{
        backgroundImage: "url('/footer-bg-color.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h4 className="text-center mb-2 text-lg font-mono">Get in Touch</h4>
      <h2 className="text-center text-5xl font-mono">Contact with Me</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-mono">
        Have a project in mind? lets collaborate! Whether it is web development,
        UI/UX design, or optimization, feel free to reach out.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>

        <textarea
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto shadow-md transition border border-white hover:shadow-black cursor-pointer hover:-translate-y-1  hover:bg-black duration-500"
        >
          Submit now
          <Image
            src={assets.right_arrow_white}
            alt="Right Arrow"
            width={16}
            height={16}
            className="w-4"
          />
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
