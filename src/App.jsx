import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
}

