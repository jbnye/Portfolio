import { experiences } from "./experienceData"

import { USSignalSVG, UofMDearbornSVG, ChipotleSVG, CoachingSVG } from "@/assets/svgs/svgs";
import BackToHome from "@/components/backToHome";

const experienceIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "US Signal": USSignalSVG,
  "University of Michigan - Dearborn": UofMDearbornSVG,
  "Freelance": CoachingSVG,
  "Chipotle": ChipotleSVG,
};

export default function Experience() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-8">
      <div className="w-full max-w-3xl lg:max-w-5xl mx-auto px-2">

        <BackToHome title={"Experience"} />

        <div className="flex flex-col gap-8 ">
            {experiences.map((experience, index) => {
                const IconComponent = experienceIcons[experience.company] as | React.FC<React.SVGProps<SVGSVGElement>> | undefined;

                return (
                    <div key={index} className="flex justify-center gap-6 p-4">

                    {/* Left */}
                        <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-lg bg-gray-400">
                        {IconComponent ? (
                            <IconComponent className="w-12 h-12" />
                        ) : (
                            <img src="/Images/favicon.svg" alt="default icon" className="w-12 h-12" />
                        )}
                        </div>
    
                    {/* Right */}
                    <div className="flex-1 min-w-0 justify-start text-start">
                        <div className="flex flex-col gap-1 mb-3">
                            <h2 className="text-2xl font-semibold text-foreground">
                                {experience.company}
                            </h2>
                            <div className="flex flex-col gap-1 ">
                                <span className="font-medium">{experience.title}</span>
                                {/* <span>{experience.team}</span> */}
                                <span className="text-sm text-gray-600 dark:text-gray-400">{experience.period}</span>
                            <p className="text-sm mt-1">{experience.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 text-xs font-medium  bg-accent rounded-full"
                                >
                                {skill}
                                </span>
                            ))}
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