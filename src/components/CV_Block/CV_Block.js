import React from "react";
import "./CV_Block.scss";
import { useEffect } from "react";

function CV_Block() {
  //TODO: FIX DOWNLOAD FILE
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

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("./downloadable/pick.jpg").then((response) => {
      console.log(response);
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob); // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "pick.jpg";
        alink.click();
      });
    });
  };

  return (
    <div className="cv-block">
      <div className="corner-border"> </div>
      <div className="bottom-corner"></div>
      <div className="container-button">
        <h1 className="cv-text">Checkout my resume</h1>
        <a href=".downloadable/pick.jpg" download>
          <button className="download-btn" type="button">
            My resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default CV_Block;
