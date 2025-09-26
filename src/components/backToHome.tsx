import { Link } from "react-router-dom";
import { ArrowLeftSVG } from "@/assets/svgs/svgs";

interface BackToHomeProps{
    title: string;
}

export default function BackToHome({title}:BackToHomeProps){
    return(
        <div className="mb-8 w-full flex flex-col gap-4">
            <div className="flex-1 self-start text-sm md:text-lg">
                <Link
                    to="/"
                    className="inline-flex items-center text-black dark:text-white duration-200 group"
                >
                    <ArrowLeftSVG
                    className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                    />
                    Back to Home
                </Link>
            </div>
            <h1 className="text-center text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
    )
}