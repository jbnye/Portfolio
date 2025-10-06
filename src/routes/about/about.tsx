import {
  languages,
  frontend,
  backend,
  devOpsAndTools,
  databases,
} from "./aboutData";
import { SkillSection } from "@/components/SkillSection";
import BackToHome from "@/components/backToHome";
import GamingCarousel from "@/components/gamingCarousel";
import {carouselGallery} from "@/components/carouselGallery";

export default function AboutPage() {

  return (
    <div className="flex flex-col items-center w-full px-4 py-8">
      <div className="w-full max-w-3xl lg:max-w-5xl mx-auto px-2">
        <BackToHome title={"Jacob Nye"} />

        <div className="flex flex-col items-start text-start gap-8">
          {/* About Me */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white">
              About Me
            </h2>
            <div className="space-y-4 mt-3 text-sm md:text-base text-gray-900 dark:text-gray-100 leading-relaxed">
              <p>
                I have a Software Engineering degree from the University of
                Michigan-Dearborn, and I am eager to get my first job as a
                software developer. Right now, I'm focused on making as many
                projects as possible and solving real-world problems in the
                areas that interest me the most, which usually revolve around
                games or movies. I'm an avid movie fan, and you can follow what
                I've been watching on my Letterboxd account. I also hold a CCNA
                certification and have networking experience working at an ISP.
              </p>

              <p>
                I have been a competitive gamer for over 15 years. I achieved
                Top 100 in {" "} 
                <GamingCarousel title="League of Legends" images={carouselGallery.leagueoflegends}>
                  <span
                    className="font-bold group relative hover:cursor-pointer inline-block hover:scale-105"
                  >
                    League of Legends
                  </span>
                </GamingCarousel>, won tournaments in {" "}
                <GamingCarousel title="Street Fighter" images={carouselGallery.streetfighter}>
                  <span className="font-bold group relative hover:cursor-pointer inline-block hover:scale-105">
                  Street Fighter
                  </span>
                </GamingCarousel>
                , and was the official king of second place in most tournaments for a niche game called {" "}
                <GamingCarousel title="Mordhau" images={carouselGallery.mordhau}>
                  <span className="font-bold group relative hover:cursor-pointer inline-block hover:scale-105">
                    Mordhau
                  </span>
                </GamingCarousel>
                . I've begun to harness that same competitiveness and
                drive for improvement in my coding journey. I try to code and
                learn every day and will continue to do so for the foreseeable
                future.
              </p>

              <p>
                I have a personal goal of creating something that will be used
                to the betterment of people like me. Whether it's a gaming tool
                like{" "}
                <a
                  href="https://op.gg/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  OP.GG
                </a>
                ,{" "}
                <a
                  href="https://www.dodgetracker.com/region/na"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Dodgetracker
                </a>
                ,{" "}
                <a
                  href="https://www.onetricks.gg/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Onetricks.gg
                </a>
                , or something ambitious like the revolutionary rollback netcode (
                <a
                  href="https://www.ggpo.net/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  GGPO
                </a>
                ) created by Tom Cannon, or even something like learning how
                cheating software in FPS shooters work to try and better
                understand kernel-level anti cheat systems. I have a passion for
                truth seeking; finding the most optimal ways to do things.
                Searching for stats/data and seeing how impactful or unimpactful
                they are. For example, uncovering the truth behind{" "}
                <a
                  href="https://leetify.com/blog/cs2-benchmarks/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Leetify's
                </a>{" "}
                aim rating algorithm for performance grading in Counterstrike
                Global Offensive with real-world data analysis and scraping.
                I'd also love to contribute to open source projects I regularly
                use, whether that's{" "}
                <a
                  href="https://lichess.org/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Lichess
                </a>{" "}
                or{" "}
                <a
                  href="https://guybrushgit.github.io/WarriorSim/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  GuybrushGit's
                </a>{" "}
                Warrior Sims for WoW.
              </p>

              <p>
                I often thought about what my university professors meant when
                they said you must be a continuous learner. Through competitive
                gaming, I've come to understand: you can always be learning
                something, always improving, always questioning, and this is how
                I intend to live.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white">
              Education & Certifications
            </h2>

            <div className="space-y-3 mt-3 w-full text-sm md:text-base">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    B.S. in Software Engineering
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    University of Michigan-Dearborn
                  </p>
                </div>
                <span className="text-gray-800 dark:text-gray-200 mt-1 sm:mt-0">
                  Sep 2019 - Dec 2022
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    Cisco Certified Network Associate (CCNA)
                  </p>
                </div>
                <span className="text-gray-800 dark:text-gray-200 mt-1 sm:mt-0">
                  July 2023
                </span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white">
              Skills
            </h2>
            <div className="space-y-4 mt-3 text-gray-900 dark:text-gray-100">
              <SkillSection title="Languages" skills={languages} />
              <SkillSection title="Frontend" skills={frontend} />
              <SkillSection title="Backend" skills={backend} />
              <SkillSection title="Databases" skills={databases} />
              <SkillSection title="DevOps & Tools" skills={devOpsAndTools} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
