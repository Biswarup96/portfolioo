import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://biswarup-rana.vercel.app/"; 
  const pages = [
    "#top", 
    "#about",
    "#work",
    "#service",
    "#contact",
   
  ];

  return pages.map((page) => ({
    url: `${baseUrl}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: page === "" ? 1.0 : 0.8,
  }));
}
