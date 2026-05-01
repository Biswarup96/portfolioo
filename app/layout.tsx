import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovoFont = Ovo({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Biswarup Rana's Portfolio",
  description: "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
  keywords: "portfolio, web development, Next.js, React, Tailwind CSS",
  openGraph: {
    title: "Biswarup Rana's Portfolio",
    description: "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
    url: "https://biswarup-rana.vercel.app/",
    siteName: "Biswarup Rana's Portfolio",
    images: [{ url: "/biswa'ssite.png", width: 1200, height: 630, alt: "Biswarup Rana" }],
    type: "website",
  },
  alternates: { canonical: "https://biswarup-rana.vercel.app/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* No hardcoded 'dark' class — toggled by Navbar via localStorage */
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovoFont.className} antialiased leading-8 overflow-x-hidden
          bg-white dark:bg-[#11001f]
          text-gray-900 dark:text-white
          transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
