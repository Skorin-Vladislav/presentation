import React from "react";
import "./GitHubBlock.scss";
import { useEffect } from "react";

function GitHubBlock() {
  useEffect(() => {});

  const playAnimation = () => {
    const a = document.getElementById("animatedSrc");
    a.classList.add("a-animation");
    a.addEventListener("animationend", () => {
      a.classList.remove("a-animation");
    });
  };

  return (
    <div className="sky">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="title">
        <a
          href="https://github.com/Skorin-Vladislav"
          onClick={playAnimation}
          id="animatedSrc"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default GitHubBlock;
