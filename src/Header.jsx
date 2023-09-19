import React from "react";
import profilePic from "/circle.png";

const Header = () => {
  return (
    <header>
      <img
        // src="https://i.ibb.co/64mBmQq/circle.png"
        src={profilePic}
        alt="profile"
        width={"200px"}
        height={"200px"}
      />
      <h1>
        Federico Lindberg <br />
        <span>Fullstack Developer</span>
      </h1>
    </header>
  );
};

export default Header;
