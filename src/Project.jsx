import React from "react";

const Project = ({ projName, deployLink, sourceLink, projImg }) => {
  return (
    <>
      <article>
        {/* <p>{projName}</p> */}
        <a href={deployLink} target="blank_">
          <img
            src={projImg}
            alt="project image"
            width={"150px"}
            height={"120px"}
          />
        </a>
        <a href={sourceLink} target="blank_">
          source
        </a>
      </article>
    </>
  );
};

export default Project;
