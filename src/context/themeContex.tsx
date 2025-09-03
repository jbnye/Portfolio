import { useContext, createContext, useEffect, useState } from "react";

interface ThemeStatusProps {
    darkMode: boolean;

}

const ThemeStatus = createContext<ThemeStatusProps | undefined>(undefined);


export const ThemeStatusProvider = ({children}: {children: React.ReactNode}) => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        if(typeof window === 'undefined'){return true;}
        const stored = localStorage.getItem("darkMode");
        if(stored === 'true'){return true};
        if(stored === 'false'){return false;}
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">("desktop");

    useEffect(()=> {
        const checkBreakpoint = () => {
            const width = window.innerWidth;
            if(width <= 640) setBreakpoint("mobile");
            else if(width<=1024) setBreakpoint("tablet");
            else setBreakpoint("desktop");
        }
        checkBreakpoint();
        window.addEventListener("resize", checkBreakpoint);
        return () => window.removeEventListener("resize", checkBreakpoint);
    },[]);


}