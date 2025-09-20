import React from "react";
import { SkillItem } from "./SkillItem";

interface SkillSectionProps {
  title: string;
  skills: Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;
}

export function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div className="flex flex-col justify-start items-start shadow-s">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <div className="flex gap-3 ">
        {Object.entries(skills).map(([name, Icon]) => (
          <SkillItem key={name} name={name} Icon={Icon} />
        ))}
      </div>
    </div>
  );
}