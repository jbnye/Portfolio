import { projects } from "./projectsData";

import { GithubWhiteSVG, YoutubeSVG, FaviconSVG, MagGlassSVG,
        CGSVG, WordleSVG, GlobeSVG, DataSVG } from "@/assets/svgs/svgs";
import BackToHome from "@/components/backToHome";

const projectIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "Letterboxd Higher or Lower": FaviconSVG,
  "Wordle Clone": WordleSVG,
  "Dodge Tracker Clone": MagGlassSVG,
  "Leetify Aim Rating Data Analytics": DataSVG,
  "Class Guides": CGSVG,
};

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-8">
      <div className="w-full max-w-3xl lg:max-w-5xl mx-auto px-2">

        <BackToHome title="Projects" />

        <div className="flex flex-col gap-8">
        {projects.map((project, index) => {
          const IconComponent = projectIcons[project.title] as
            | React.FC<React.SVGProps<SVGSVGElement>>
            | undefined;

          return (
            <div key={index} className="flex justify-center items-start gap-6 ">

              {/* Left */}
              <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 mt-2 rounded-lg bg-gray-400">
                {IconComponent ? (
                  <IconComponent className="w-full h-full p-2  fill-black " />
                ) : (
                  <img src="/favicon.ico" alt="default icon" className="w-full h-full p-2" />
                )}
              </div>

              {/* Right */}
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                </div>
                <p className="text-left mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-test-black text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
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
                  {project.deployedUrl && (
                    <a
                      href={project.deployedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:scale-105"
                    >
                      <GlobeSVG className="h-6 w-6 text-black dark:text-white" />
                      Live
                    </a>
                  )}
                  {project.youtubeDemoUrl && (
                    <a
                      href={project.youtubeDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:scale-105"
                    >
                      <YoutubeSVG className="h-9 w-9" />
                    </a>
                  )}
                </div>
              </div>
            </div>
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
