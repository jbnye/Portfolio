import React from "react";

interface SkillItemProps {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export function SkillItem({ name, Icon }: SkillItemProps) {
  return (
    <div className="flex flex-col justify-center w-[100px] items-center space-y-2 p-4 rounded-xl shadow bg-card hover:scale-105 transition-transform">
      <div className="flex items-center justify-center w-12 h-12">
        <Icon className="w-full h-full fill-black dark:fill-white" />
      </div>
      <span className="text-sm font-medium text-black dark:text-white text-center">
        {name}
      </span>
    </div>
  );
}