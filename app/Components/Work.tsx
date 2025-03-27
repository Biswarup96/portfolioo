import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import sendicon from "@/public/send-icon.png";
import rightArrowBold from "@/public/right-arrow-bold.png";

// Define TypeScript types for fetched data
interface ProjectType {
  _id: string;
  title: string;
  description: string;
  url: string;
  image?: { asset: { _ref: string } };
}

// Setup Sanity Image URL Builder
const builder = imageUrlBuilder(client);
function urlFor(source: { asset: { _ref: string } } | undefined): string {
  return source ? builder.image(source).url() : "/fallback-image.jpg";
}

const Work = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWork = useCallback(async () => {
    try {
      setLoading(true);
      const query = `*[_type=="work"]{_id, title, description, url, image}`;
      const data: ProjectType[] = await client.fetch(query);
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Failed to load projects.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWork();
  }, [fetchWork]);

  return (
    <section id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-mono">My Portfolio</h4>
      <h2 className="text-center text-5xl font-mono">My Latest Works</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-mono">
        Welcome to My Web Development Portfolio! Take a look at my front-end
        development projects. Each one showcases my skills in creating smooth
        and attractive user experiences. Enjoy exploring my work!
      </p>

      {loading && <p className="text-center">Loading projects...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
        {projects.map((project) => (
          <div
            key={project._id}
            className="aspect-square bg-no-repeat bg-cover rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${urlFor(project.image)})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-400 transition">
                <Image
                  src={sendicon}
                  alt="Go to project"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 shadow-md transition hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500"
      >
        Show more
        <Image
          src={rightArrowBold}
          alt="right-arrow"
          height={5}
          width={5}
          className="w-4"
        />
      </a>
    </section>
  );
};

export default Work;