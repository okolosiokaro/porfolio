import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Skill from "./components/Skill";
import Built from "./components/Built";


function App() {
  return (
    <div className="">
    <NavBar /> 
    <Hero />
    <About />
    <Experience />
    <Skill />
   <Built />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
