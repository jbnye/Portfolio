import HomePage from './routes/home';
// import AboutPage from './routes/about';
// import ExperiencePage from './routes/experience';
// import ProjectsPage from './routes/projects';
import Navbar from './components/navbar';
import Footer from "./components/footer";

export default function App () {

    return (
        <div className="min-h-screen w-full flex flex-col ">
            <Navbar />
            <main className="flex flex-col flex-grow items-center">
                <HomePage />
            </main>
            <Footer />
        </div>
    )

}