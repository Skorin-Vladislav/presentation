import React from "react";
import "./GitHubBlock.scss";
import $ from "jquery";

function GitHubBlock() {
  const playAnimation = () => {
    $("#animatedSrc").addClass("a-animation");
    $("#animatedSrc").on("animationend", () => {
      $(this).removeClass("a-animation");
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
