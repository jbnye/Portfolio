import HomePage from './routes/home';
import { Routes, Route} from 'react-router-dom'
import AboutPage from './routes/about/about';
import ExperiencePage from './routes/experience/experience';
import ProjectsPage from './routes/projects/projects';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import ErrorPage from './routes/error';

export default function App () {

    return (
        <div className="min-h-screen w-full flex flex-col 
        bg-gradient-to-b from-letterboxd-lighter-gray to-letterboxd-light-gray
        dark:bg-gradient-to-b dark:from-letterboxd-background dark:to-letterboxd-dark-background-blue ">
            <Navbar />
            <main className="flex flex-col flex-grow justify-center items-center text-center">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )

}