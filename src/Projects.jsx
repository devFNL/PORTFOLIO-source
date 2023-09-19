import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects">
      <Project
        projName="Listify"
        deployLink={"https://listify-psi.vercel.app/"}
        sourceLink={"https://github.com/devFNL/toDo"}
        projImg={"/media/proj1.png"}
      />
      <Project
        projName="Libradmin"
        deployLink={"https://libradmin.onrender.com/"}
        sourceLink={"https://github.com/devFNL/libradmin-source"}
        projImg={"/media/proj2.png"}
      />
      <Project
        projName="e-Commerce"
        deployLink={""}
        sourceLink={"https://github.com/devFNL/ecommerce"}
        projImg={"/media/indev.png"}
      />
      <Project
        projName="no-idea"
        deployLink={""}
        sourceLink={""}
        projImg={"/media/indev.png"}
      />
    </div>
  );
};

export default Projects;
