import React from "react";
import { useEffect } from "react";
import $ from "jquery";
import "./GreetingBlock.scss";
function GreetingBlock() {
  useEffect(() => {
    (function () {
      let words = ["Lorem", "Ipsum", "dolor", "sit", "amet"];

      let i = -1;
      setInterval(function () {
        // $("#words").removeClass("test-animation-on-apear");

        $("#words").fadeOut(function () {
          $(this)
            .html(words[(i = (i + 1) % words.length)])
            .fadeIn();
          //.addClass("test-animation-on-apear");
        });
      }, 2000);
    })();
  });

  /**
   *
   *
   *
   *
   */
  return (
    <>
      <div class="container">
        <div class="animated-heading">
          <h1 id="words"></h1>
        </div>
      </div>
    </>
  );
}

export default GreetingBlock;
