import React from "react";

interface SkillItemProps {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export function SkillItem({ name, Icon }: SkillItemProps) {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 p-4 rounded-xl shadow bg-card hover:scale-105 transition-transform">
      {/* Icon wrapper to normalize */}
      <div className="flex items-center justify-center w-12 h-12">
        <Icon className="w-10 h-10 fill-current" />
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
        {name}
      </span>
    </div>
  );
}