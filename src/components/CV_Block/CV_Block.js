import React from "react";
import "./CV_Block.scss";
import { useEffect } from "react";
import CV_PDF from "./downloadable/Skorin Vladislav.pdf";

function CV_Block() {
  useEffect(() => {
    (function () {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const bordersTop = entry.target.querySelector(".corner-border");
          const bordersBottom = entry.target.querySelector(".bottom-corner");

          if (entry.isIntersecting) {
            bordersTop.classList.add("in-viewport");
            bordersBottom.classList.add("in-viewport");
            return;
          }

          // We're not intersecting, so remove the class!
          bordersTop.classList.remove("in-viewport");
          bordersBottom.classList.remove("in-viewport");
        });
      });

      observer.observe(document.querySelector(".cv-block"));
    })();
  });

  return (
    <div className="cv-block">
      <div className="corner-border"> </div>
      <div className="bottom-corner"></div>
      <div className="container-button">
        <h1 className="cv-text">Checkout my resume</h1>
        <a href={CV_PDF} target="_blank" rel="noreferrer">
          <button className="download-btn" type="button">
            My resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default CV_Block;
