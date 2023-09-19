import React from "react";
import Project from "./Project";
import proj1 from "/proj1.png";
import proj2 from "/proj2.png";
import inDev from "/indev.png";

const Projects = () => {
  return (
    <div className="projects">
      <Project
        projName="Listify"
        deployLink={"https://listify-psi.vercel.app/"}
        sourceLink={"https://github.com/devFNL/toDo"}
        projImg={proj1}
      />
      <Project
        projName="Libradmin"
        deployLink={"https://libradmin.onrender.com/"}
        sourceLink={"https://github.com/devFNL/libradmin-source"}
        projImg={proj2}
      />
      <Project
        projName="e-Commerce"
        deployLink={""}
        sourceLink={"https://github.com/devFNL/ecommerce"}
        projImg={inDev}
      />
      <Project
        projName="no-idea"
        deployLink={""}
        sourceLink={""}
        projImg={inDev}
      />
    </div>
  );
};

export default Projects;
