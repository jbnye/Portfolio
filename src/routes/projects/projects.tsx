import { projects } from "./projectsData";
import { motion } from "framer-motion";
import {
  GithubWhiteSVG,
  YoutubeSVG,
  FaviconSVG,
  MagGlassSVG,
  CGSVG,
  WordleSVG,
  GlobeSVG,
  DataSVG,
  ChivPugBotSVG
} from "@/assets/svgs/svgs";
import BackToHome from "@/components/backToHome";

const projectIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "Letterboxd Higher or Lower": FaviconSVG,
  "Wordle Clone": WordleSVG,
  "Dodge Tracker Clone": MagGlassSVG,
  "Leetify Aim Rating Data Analytics - COMING SOON": DataSVG,
  "Class Guides": CGSVG,
  "Chiv Pug Bot": ChivPugBotSVG,
};

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center w-full px-2 py-6 md:px-4 md:py-8">
      <div className="w-full max-w-2xl md:max-w-5xl mx-auto">
        <BackToHome title="Projects" />

        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => {
            const IconComponent = projectIcons[project.title] as
              | React.FC<React.SVGProps<SVGSVGElement>>
              | undefined;

            return (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
              <div
                key={index}
                className="flex justify-center gap-4 p-2 md:gap-6 md:p-4"
              >
                {/* Left */}
                <div className="flex-shrink-0 flex mt-1 items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-lg bg-gray-400">
                  {IconComponent ? (
                    <IconComponent className="w-full h-full p-2 fill-black" />
                  ) : (
                    <img
                      src="/favicon.ico"
                      alt="default icon"
                      className="w-full h-full p-2"
                    />
                  )}
                </div>

                {/* Right */}
                <div className="flex-1 min-w-0 justify-start text-start">
                  <div className="flex flex-col gap-1 mb-2 md:mb-3">
                    <h2 className="text-lg md:text-2xl font-semibold text-foreground">
                      {project.title}
                    </h2>
                    <p className="text-xs md:text-sm mt-1">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 md:px-3 md:py-1 text-[0.65rem] md:text-xs font-medium rounded-full bg-test-black text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-2">
                    {project.deployedUrl && (
                      <a
                        href={project.deployedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:scale-105 text-sm md:text-base"
                      >
                        <GlobeSVG className="h-6 w-6 text-black dark:text-white" />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:scale-105"
                      >
                        <GithubWhiteSVG className="h-6 w-6" />
                      </a>
                    )}
                    {project.youtubeDemoUrl && (
                      <a
                        href={project.youtubeDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:scale-105"
                      >
                        <YoutubeSVG className="h-8 w-8 md:h-9 md:w-9" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


// export default function ProjectPage() {
//     return (
//         <div>
//             <h1>Projects</h1>
//             <div className="flex flex-col items-center">
//                 <div className="flex bg-red-400 gap-5">
//                     <div className="bg-blue-700 w-30 h-30">
//                     </div>
//                     <div className="flex flex-col bg-yellow-400 items-start">
//                         <h1>Wordle</h1>
//                         <p>A minimalistic, quiet typing test with multiple game modes, leaderboards, and statistics. Check it out now!</p>
//                         <span>Typescript</span>
//                     </div>
//                 </div>
//                 <div className="flex bg-red-400 gap-5">
//                     <div className="bg-blue-700 w-30 h-30">
//                     </div>
//                     <div className="flex flex-col bg-yellow-400 items-start">
//                         <h1>Wordle</h1>
//                         <p>A minimalistic, quiet typing test with multiple game modes, leaderboards, and statistics. Check it out now!</p>
//                         <span>Typescript</span>
//                     </div>
//                 </div>
//                 <div className="flex bg-red-400 gap-5">
//                     <div className="bg-blue-700 w-30 h-30">
//                     </div>
//                     <div className="flex flex-col bg-yellow-400 items-start">
//                         <h1>Wordle</h1>
//                         <p>A minimalistic, quiet typing test with multiple game modes, leaderboards, and statistics. Check it out now!</p>
//                         <span>Typescript</span>
//                     </div>
//                 </div>
//                 <div className="flex bg-red-400 gap-5">
//                     <div className="bg-blue-700 w-30 h-30">
//                     </div>
//                     <div className="flex flex-col bg-yellow-400 items-start">
//                         <h1>Wordle</h1>
//                         <p>A minimalistic, quiet typing test with multiple game modes, leaderboards, and statistics. Check it out now!</p>
//                         <span>Typescript</span>
//                     </div>
//                 </div>
//                 <div className="flex bg-red-400 gap-5">
//                     <div className="bg-blue-700 w-30 h-30">
//                     </div>
//                     <div className="flex flex-col bg-yellow-400 items-start">
//                         <h1>Wordle</h1>
//                         <p>A minimalistic, quiet typing test with multiple game modes, leaderboards, and statistics. Check it out now!</p>
//                         <span>Typescript</span>
//                     </div>
//                 </div>
//                 <div className="flex bg-red-400 gap-5">
//                     <div className="bg-blue-700 w-30 h-30">
//                     </div>
//                     <div className="flex flex-col bg-yellow-400 items-start">
//                         <h1>Wordle</h1>
//                         <p>A minimalistic, quiet typing test with multiple game modes, leaderboards, and statistics. Check it out now!</p>
//                         <span>Typescript</span>
//                     </div>
//                 </div>
//                 <div className="flex bg-red-400 gap-5">
//                     <div className="bg-blue-700 w-30 h-30">
//                     </div>
//                     <div className="flex flex-col bg-yellow-400 items-start">
//                         <h1>Wordle</h1>
//                         <p>A minimalistic, quiet typing test with multiple game modes, leaderboards, and statistics. Check it out now!</p>
//                         <span>Typescript</span>
//                     </div>
//                 </div>
                
//             </div>
//         </div>
//     )
// }
