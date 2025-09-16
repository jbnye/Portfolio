// import { Link } from "react-router-dom";
//import DarkModeSwitch from "./DarkModeSwitch";

export default function Footer() {

    return (
        <div className="flex items-center justify-center text-center max-h-8 gap-10 p-3 bg-letterboxd-light-gray">
            <a href="mailto:jn3268@gmail.com">
                <img src="/Images/email.svg" className="h-6 w-6">
                </img>
            </a>
            <a href="https://github.com/jbnye" target="_blank" >
                <img src="/Images/github-mark-white.svg" className="max-h-6 w-6" >
                </img>
            </a>
            <a href="https://linkedin.com/in/jacobbnye" target="_blank" >
                <img src="/Images/LinkedIn_icon.svg" className="max-h-6 w-6 h-6 max-w-6" >
                </img>
            </a>
        </div>
    )

}