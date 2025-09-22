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
        bg-[linear-gradient(45deg,theme(colors.test-white1),theme(colors.white))]
        dark:bg-[linear-gradient(45deg,theme(colors.test-black2),theme(colors.test-black3))] ">
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