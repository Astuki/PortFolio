import React from "react";

/* Components imported */
import CustomCursor from "../components/CustomCursor/CustomCursor";
import Stars from "../components/Stars/Stars";
import Project from "../components/Projects/Project";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";
import PageChange from "../components/PageChange/PageChange";
/* Components imported */

/* JSON Data */
import {project} from "../components/Data/index";
/* JSON DATA */

/* Utilities */
import Projet8 from "../assets/Appartement8.webp";
import Projet11 from "../assets/Bank11.webp";
/* Utilities */

export default function Projects() {

  return (
    <div>
      <CustomCursor />
      <Stars />
      <nav className="on-top">
        <PageChange />
      </nav>
      <main className="flexboxProjects">
        {project.map((item, index) => (
          <Project key={index} projectData={item} />
          ))}
        <Skills />
      </main>
      <footer className="contact-footer">
        <Footer />
      </footer>
    </div>
  );
}
