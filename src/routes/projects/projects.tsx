import { projects } from "./projectsData";
import { Link } from "react-router-dom";

const projectIcons: Record<string, string> = {
  "Letterboxd Higher or Lower": "/Images/favicon.svg",
  "Wordle Clone": "/Images/Wordle_Logo.svg",
  "Dodge Tracker Clone": "/Images/Magnifying_glass_icon.svg",
  "Leetify Aim Rating Data Analytics": "/Images/Gaussian_distribution.svg",
};

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-8">
      <div className="w-full max-w-3xl lg:max-w-5xl mx-auto px-2">
        <div className="mb-8 w-full flex flex-col gap-4">
          {/* Don't touch this link per your request */}
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          >
            <img
              src="/Images/arrow-left.svg"
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>
          <h1 className="text-center text-4xl font-bold">Projects</h1>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex justify-center items-center gap-6 p-4">
                {/* Left: Icon */}
                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-lg bg-gray-500">
                    <img
                    src={projectIcons[project.title] ?? "/favicon.ico"}
                    alt={project.title + " icon"}
                    className="object-contain w-12 h-12"
                    />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    </div>
                    <p className="text-left mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                        <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-500"
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
                                <img src="/Images/github-mark.svg" className="h-6 w-6 " />
                            </a>
                        )}
                        {project.deployedUrl && (
                            <a
                                href={project.deployedUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 hover:scale-105"
                                >
                                <img src="/Images/globe.svg" className="h-6 w-6 " />
                                Live
                            </a>
                        )}
                        {project.youtubeDemoUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 hover:scale-105"
                                >
                                <img src="/Images/YouTube.svg" className="h-9 w-9" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
          ))}
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
