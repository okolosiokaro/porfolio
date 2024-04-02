import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from './components/Project'
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Skill from "./components/Skill";


function App() {
  return (
    <div className="">
    <NavBar /> 
    <Hero />
    <About />
    <Experience />
    <Skill />
    <Project />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
