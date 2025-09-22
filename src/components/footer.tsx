// import { Link } from "react-router-dom";
//import DarkModeSwitch from "./DarkModeSwitch";
import { EmailSVG, GithubWhiteSVG, LinkedinSVG } from "@/assets/svgs/svgs"


export default function Footer() {
  return (
    <div className="flex items-center justify-center text-center gap-10 p-3 ">
      <a href="mailto:jn3268@gmail.com">
        <EmailSVG className="h-6 w-6 hover:scale-105 transition-transform" />
      </a>
      <a href="https://github.com/jbnye" target="_blank" rel="noopener noreferrer">
        <GithubWhiteSVG className="h-6 w-6 hover:scale-105 transition-transform" />
      </a>
      <a href="https://linkedin.com/in/jacobbnye" target="_blank" rel="noopener noreferrer">
        <LinkedinSVG className="h-6 w-6 hover:scale-105 transition-transform" />
      </a>
    </div>
  );
}