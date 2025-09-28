// import { Link } from "react-router-dom";
//import DarkModeSwitch from "./DarkModeSwitch";
// import { EmailSVG, GithubWhiteSVG, LinkedinSVG } from "@/assets/svgs/svgs"


export default function Footer() {
  return (
    <div className="flex flex-wrap justify-center items-center md:self-center gap-4 md:gap-10 max-w-full w-full md:w-[50%] text-center text-sm md:text-lg py-2">
      <a href="mailto:jn3268@gmail.com" className="hover:scale-105 transition-transform hover:text-test-purple">
        <span>jn3268@gmail.com</span>
      </a>
      <a href="https://github.com/jbnye" target="_blank" className="hover:scale-105 transition-transform hover:text-test-purple">
        <span>Github</span>
      </a>
      <a href="https://linkedin.com/in/jacobbnye" target="_blank" className="hover:scale-105 transition-transform hover:text-test-purple">
        <span>Linkedin</span>
      </a>
      <a href="https://letterboxd.com/Fachizzle/" target="_blank" className="hover:scale-105 transition-transform hover:text-test-purple">
        <span>Letterboxd</span>
      </a>
    </div>

    );
    /* <a href="mailto:jn3268@gmail.com">
        <EmailSVG className="h-6 w-6 hover:scale-105 transition-transform" />
      </a>
      <a href="https://github.com/jbnye" target="_blank" rel="noopener noreferrer">
        <GithubWhiteSVG className="h-6 w-6 hover:scale-105 transition-transform" />
      </a>
      <a href="https://linkedin.com/in/jacobbnye" target="_blank" rel="noopener noreferrer">
        <LinkedinSVG className="h-6 w-6 hover:scale-105 transition-transform" />
      </a> */
}