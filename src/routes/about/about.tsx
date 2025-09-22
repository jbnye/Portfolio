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
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">About Me</h2>
          <div className="space-y-4 mt-2 text-gray-800 dark:text-gray-300">
            <p>
              I have a Software Engineering degree from the University of Michigan-Dearborn, and I am eager to get my first job as a software developer.               Right now, I'm focused on making as many projects as possible and solving real-world problems in the areas that interest me the most, which usually revolve around games or movies. I'm an avid movie fan, and you can follow what I've been watching on my Letterboxd account. I also hold a CCNA certification and have networking experience working at an ISP.
            </p>

            <p>
              I have been a compeittive gamer for over 15 years. I achieved Challenger in League of Legends, won tournaments in Street Fighter, and played on the best team in a niche game called Mordhau. I've begun to harness that same competitiveness and drive for improvement in my coding journey. I try to code and learn every day and will continue to do so for the foreseeable future.
            </p>

            <p>
              I have a personal goal of creating something that will be used by millions — whether it's a gaming tool like <a href="https://op.gg/" target="_blank">OP.gg</a>, <a href='https://www.dodgetracker.com/region/na' target="_blank">Dodgetracker</a>, <a href='https://www.onetricks.gg/' target="_blank">Onetricks.gg</a>, or something ambitious like the revolutionary rollback netcode <a href='https://www.ggpo.net/' target="_blank">(GGPO)</a> created by Tom Cannon, or even something nefarious like  cheating software for games just for fun and knowledge. I have a passion for truth seeking; finding the most optimal ways to do things. Searching for stats/data and seeing how impactful or unimpactful they are. For example, uncovering the truth behind <a href='https://leetify.com/blog/cs2-benchmarks/' target="_blank">Leetify's</a> aim rating algorithm for performance grading in Counterstrike Global Offensive with real-world data analysis and scraping. I'd also love to contribute to open source projects I regularly use, whether that's <a href='https://lichess.org/' target="_blank">Lichess</a> or <a href='https://guybrushgit.github.io/WarriorSim/' target="_blank">GuybrushGit's</a> Warrior Sims for WoW.
            </p>

            <p>
              I often thought about what my university professors meant when they said you must be a continuous learner. THrough competitive gaming, I've come to understand: you can always be learning something, always improving, always questioning, and this is how I intend to live.
            </p>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Education & Certifications
          </h2>

          <div className="space-y-3 mt-2 w-full" >
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  B.S. in Software Engineering
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  University of Michigan-Dearborn
                </p>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Sep 2019 - Dec 2022
              </span>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Cisco Certified Network Associate (CCNA)
                </p>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                July 2023
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold  text-gray-900 dark:text-gray-100">Skills</h2>
            <div className="space-y-4 mt-2 text-gray-800 dark:text-gray-300">
            <SkillSection  title="Languages" skills={languages} />
            <SkillSection  title="Frontend" skills={frontend} />
            <SkillSection  title="Backend" skills={backend} />
            <SkillSection  title="Databases" skills={databases} />
            <SkillSection  title="DevOps & Tools" skills={devOpsAndTools} />
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}