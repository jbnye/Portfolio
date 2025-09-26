import { experiences } from "./experienceData";

import {
  USSignalSVG,
  UofMDearbornSVG,
  ChipotleSVG,
  CoachingSVG,
} from "@/assets/svgs/svgs";

import BackToHome from "@/components/backToHome";

const experienceIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "US Signal": USSignalSVG,
  "University of Michigan - Dearborn": UofMDearbornSVG,
  "Freelance": CoachingSVG,
  "Chipotle": ChipotleSVG,
};

export default function Experience() {
  return (
    <div className="flex flex-col items-center w-full px-2 py-6 md:px-4 md:py-8">
      <div className="w-full max-w-2xl md:max-w-5xl mx-auto">
        <BackToHome title={"Experience"} />

        <div className="flex flex-col gap-6 md:gap-8">
          {experiences.map((experience, index) => {
            const IconComponent =
              experienceIcons[experience.company] as
                | React.FC<React.SVGProps<SVGSVGElement>>
                | undefined;

            return (
              <div
                key={index}
                className="flex justify-center gap-4 p-2 md:gap-6 md:p-4"
              >
                {/* Left */}
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-lg bg-gray-400">
                  {IconComponent ? (
                    <IconComponent className="w-full h-full p-2" />
                  ) : (
                    <img
                      src="/Images/favicon.svg"
                      alt="default icon"
                      className="w-full h-full p-2"
                    />
                  )}
                </div>

                {/* Right */}
                <div className="flex-1 min-w-0 justify-start text-start">
                  <div className="flex flex-col gap-1 mb-2 md:mb-3">
                    <h2 className="text-lg md:text-2xl font-semibold text-foreground">
                      {experience.company}
                    </h2>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm md:text-base font-medium">
                        {experience.title}
                      </span>
                      <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        {experience.period}
                      </span>
                      <p className="text-xs md:text-sm mt-1">
                        {experience.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {experience.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 md:px-3 md:py-1 text-[0.65rem] md:text-xs font-medium bg-test-black text-white rounded-full"
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