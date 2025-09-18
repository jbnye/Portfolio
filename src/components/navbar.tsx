import {Link} from 'react-router-dom'
import navbarButtons from './helperFunctions/navbarButtons';
import DarkModeSwitch from './darkModeSwitch';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


export default function Navbar (){

    const buttons = navbarButtons();
    console.log(buttons);

  return (
      <div className={`flex p-1 xl:mr-3 items-center text-bold text-slate-gray dark:text-white`}>
            <div className='relative '>
                <Link to="/" className="abosulute left-0">
                    <img src="/vite.svg" alt="JN Logo" className="h-10 w-auto" />
                </Link>
            </div>
            <div className='flex w-full justify-end gap-3'>
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
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="relative group hover:cursor-pointer ">
                            Resume
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-slate-gray dark:bg-letterboxd-light-gray transition-all duration-300 group-hover:w-full" />
                        </button>
                    </DialogTrigger>
                    <DialogContent className="flex h-[90vh] max-w-6xl flex-col p-0">
                        <div className="p-6 pb-2">
                        <DialogHeader>
                            <DialogTitle className="hidden">Resume</DialogTitle>
                        </DialogHeader>
                        </div>
                        <div className="flex-1 overflow-hidden px-6 pb-6">
                        <iframe
                            src="/Jacob_Nye_resume.docx.pdf"
                            className="h-full w-full rounded-lg border"
                            title="Resume"
                        />
                        </div>
                    </DialogContent>
                </Dialog>
                <DarkModeSwitch />
             </div>
      </div>
  );
}