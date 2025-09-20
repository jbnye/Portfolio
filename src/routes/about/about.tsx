import {Link} from "react-router-dom";
import { ArrowLeftSVG } from "@/assets/svgs/svgs";
import { languages, frontend, backend, devOpsAndTools, databases } from "./aboutData";
import {SkillSection} from "@/components/SkillSection";
    

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-8">
      <div className="w-full max-w-3xl lg:max-w-5xl mx-auto px-2">
        <div className="mb-8 w-full flex flex-col gap-4">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          >
            <ArrowLeftSVG
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>
          <h1 className="text-center text-4xl font-bold">Jacob Nye</h1>
        </div>

        <div className="flex flex-col items-start text-start gap-5">
            <div>
                <h2 className="text-lg font-bold  text-gray-900 dark:text-gray-100">About Me</h2>
                <p>
                    I'm a recent graduate from Portland State University with a Bachelor's degree in Computer Science. I spend most of my time working, programming, or working out. I used to play many video games competitively. I was rank 7 in the world in 1v1s in a niche sword-fighting game, Mordhau. I was Diamond 1 in League of Legends. I was in the top 0.2% of rogue players in 2019 Classic World of Warcraft, playing with the first Horde guild to clear Molten Core on the US Faerlina server. I also used to run Minecraft RPG servers and make mods for a game called Dungeon Defenders. Right now I'm working on various full stack web development projects, attempting to be the best engineer I can be. My most recent project is Vanishtype, a minimalistic typing game with leaderboards, statistics, and multiple game modes.
                </p>
            </div>

            <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Education</h2>
                <p>
                    B.S. in Computer Science, Portland State University
                    Sep 2019 - Aug 2024
                    Relevant Coursework: Web Development, Operating Systems, Programming Languages, Data Structures & Algorithms, Software Engineering
                </p>
            </div>

        <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold  text-gray-900 dark:text-gray-100">Skills</h2>
            <SkillSection  title="Languages" skills={languages} />
            <SkillSection  title="Frontend" skills={frontend} />
            <SkillSection  title="Backend" skills={backend} />
            <SkillSection  title="Databases" skills={databases} />
            <SkillSection  title="DevOps & Tools" skills={devOpsAndTools} />
        </div>
      </div>
    </div>
    </div>
  );
}