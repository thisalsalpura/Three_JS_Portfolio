import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import Client from "./sections/client";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import Experience from "./sections/experience";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Client />
            <Experience />
            <Contact />
            <Footer />
        </main>
    )
};

export default App;