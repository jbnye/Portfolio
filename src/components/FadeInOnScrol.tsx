import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils"; 

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right"; 
  delay?: number;
}

export default function FadeInOnScroll({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);


  const offset =
    direction === "up"
      ? "translate-y-8"
      : direction === "down"
      ? "-translate-y-8"
      : direction === "left"
      ? "translate-x-8"
      : "-translate-x-8";

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out opacity-0",
        !isVisible
          ? `${offset}`
          : "opacity-100 translate-y-0 translate-x-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}