import React from "react";
import "./SkillsBlock.scss";
function SkillsBlock() {
  return (
    <div class="skills-container">
      <div class="images"></div>
      <div class="skills-box">
        <h1 class="heading-skills">My skills</h1>

        <div class="skills-list">
          <div class="skill">
            <h2 class="skill-name">SASS</h2>
            <div class="bar">
              <div class="progress80"></div>
            </div>
          </div>

          <div class="skill">
            <h2 class="skill-name">JavaScript</h2>
            <div class="bar">
              <div class="progress70"></div>
            </div>
          </div>

          <div class="skill">
            <h2 class="skill-name">React</h2>
            <div class="bar">
              <div class="progress50"></div>
            </div>
          </div>

          <div class="skill">
            <h2 class="skill-name">Mongoose</h2>
            <div class="bar">
              <div class="progress50"></div>
            </div>
          </div>

          <div class="skill">
            <h2 class="skill-name">MongoDb</h2>
            <div class="bar">
              <div class="progress20"></div>
            </div>
          </div>

          <div class="skill">
            <h2 class="skill-name">jQuery</h2>
            <div class="bar">
              <div class="progress80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsBlock;
