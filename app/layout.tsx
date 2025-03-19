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
  description:
    "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
  keywords: "portfolio, web development, Next.js, React, Tailwind CSS",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Biswarup Rana's Portfolio",
    description:
      "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
    url: "https://portfolioo-five-mu.vercel.app/",
    siteName: "Biswarup Rana's Portfolio",
    images: [
      {
        url: "/biswa'ssite.png",
        width: 1200,
        height: 630,
        alt: "Biswarup Rana",
      },
    ],
    type: "website",
  },

  alternates: {
    canonical: "https://portfolioo-five-mu.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.className} ${ovoFont.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
