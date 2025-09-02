import {Link} from 'react-router-dom'
import navbarButtons from './helperFunctions/navbarButtons'


export default function Navbar (){

    const buttons = navbarButtons();


    return (
        <div className={`flex gap-6 p-1 justify-center md:justify-end xl:mr-3 text-bold text-slate-gray dark:text-white`}>
            {buttons.map(({ label, path }) => (
            <Link
                key={label}
                to={path}
                className="relative group p-2 hover:cursor-pointer"
            >
                {label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-slate-gray dark:bg-letterboxd-light-gray transition-all duration-300 group-hover:w-full" />
            </Link>
            ))}
        </div>
    )
}