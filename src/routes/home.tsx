import headshot from "@/assets/Images/HeadshotCropped.png";
import { useState } from "react";
import { Loader2 } from "lucide-react"

export default function HomePage() {
    const [headshotLoaded, SetHeadshotLoaded] = useState(true);
    return (
        <div className="flex flex-col md:w-[50%] justify-center items-center ">
            <div className="w-full h-full flex justify-center">
                <div className="relative border-2 dark:border-white border-black aspect-square w-64 sm:w-80 md:w-96 rounded-full flex items-center justify-center overflow-hidden">
                {headshotLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10 rounded-full">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                )}
                <img
                    src={headshot}
                    alt="Headshot"
                    className="w-full h-full object-cover"
                    onLoad={() => SetHeadshotLoaded(false)}
                />
                </div>
            </div>
            <h1 className="text-4xl m-2">Jacob Nye</h1>
            <p className="text-[16px] md:text-xl m-3">
                Hello, I'm an aspiring software engineer that loves making websites and solving problems involving my hobbies of competitive gaming and films. Feel free to check out some examples in projects. 
            </p>
        </div>
    )
}
