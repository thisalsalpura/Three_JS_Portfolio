import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import Client from "./sections/client";
import Contact from "./sections/contact";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Client />
            <Contact />
        </main>
    )
};

export default App;