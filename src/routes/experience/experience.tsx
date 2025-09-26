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
    <div className="flex flex-col items-center w-full px-3 py-6">
      <div className="w-full max-w-3xl lg:max-w-4xl mx-auto px-2">

        <BackToHome title={"Experience"} />

        <div className="flex flex-col gap-4">
          {experiences.map((experience, index) => {
            const IconComponent =
              experienceIcons[experience.company] as
                | React.FC<React.SVGProps<SVGSVGElement>>
                | undefined;

            return (
              <div key={index} className="flex justify-start gap-4 p-2">
                {/* Left - Icon */}
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-md bg-gray-300">
                  {IconComponent ? (
                    <IconComponent className="w-10 h-10" />
                  ) : (
                    <img
                      src="/Images/favicon.svg"
                      alt="default icon"
                      className="w-10 h-10"
                    />
                  )}
                </div>

                {/* Right - Details */}
                <div className="flex-1 min-w-0 text-start">
                  <h2 className="text-lg font-semibold text-foreground">
                    {experience.company}
                  </h2>
                  <span className="text-sm font-medium">{experience.title}</span>
                  <span className="block text-xs text-gray-600 dark:text-gray-400">
                    {experience.period}
                  </span>
                  <p className="text-xs mt-1 leading-snug">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {experience.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-medium bg-test-black text-white rounded-full"
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