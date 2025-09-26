import React from "react";

interface SkillItemProps {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export function SkillItem({ name, Icon }: SkillItemProps) {
  return (
    <div className="flex flex-col justify-center md:w-[100px] w-[80px] items-center space-y-1.5 p-3 rounded-lg shadow bg-card hover:scale-105 transition-transform
    md:space-y-2 md:p-4 md:rounded-xl md:shadow md:bg-card">
      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
        <Icon className="w-8 h-8 md:h-full md:w-full fill-black dark:fill-white" />
      </div>
      <span className="text-xs md:text-sm font-medium text-black dark:text-white text-center">
        {name}
      </span>
    </div>
  );
}