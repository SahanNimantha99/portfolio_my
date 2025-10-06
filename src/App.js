import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <section id="hero">
          {" "}
          <Hero />{" "}
        </section>{" "}
        <section id="about">
          {" "}
          <About />{" "}
        </section>{" "}
        <section id="work">
          {" "}
          <Work />{" "}
        </section>{" "}
        <section id="projects">
          {" "}
          <Projects />{" "}
        </section>{" "}
        <section id="achievements">
          {" "}
          <Achievements />{" "}
        </section>{" "}
        <section id="contact">
          {" "}
          <Contact />{" "}
        </section>{" "}
      </div>{" "}
      <Footer />
    </div>
  );
}

export default App;
