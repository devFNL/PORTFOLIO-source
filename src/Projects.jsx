import React from "react";
import Project from "./Project";
import proj1 from "/proj1.png";
import proj2 from "/proj2.png";
import proj3 from "/proj3.png";
import proj4 from "/proj4.png";
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
        deployLink={"https://ecommercefnlclient.onrender.com/"}
        sourceLink={"https://github.com/devFNL/ecommerce"}
        projImg={proj3}
      />
      <Project
        projName="chicagomedical"
        deployLink={"https://alpha-efficiency-test-devfnl.vercel.app/"}
        sourceLink={"https://github.com/devFNL/alphaEfficiencyTestTask"}
        projImg={proj4}
      />
    </div>
  );
};

export default Projects;
