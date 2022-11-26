import React from "react";
import "./SkillsBlock.scss";
function SkillsBlock() {
  return (
    <div className="skills-container">
      <div className="images"></div>
      <div className="skills-box">
        <h1 className="heading-skills">My skills</h1>

        <div className="skills-list">
          <div className="skill">
            <h2 className="skill-name">SASS</h2>
            <div className="bar">
              <div className="progress80"></div>
            </div>
          </div>

          <div className="skill">
            <h2 className="skill-name">JavaScript</h2>
            <div className="bar">
              <div className="progress70"></div>
            </div>
          </div>

          <div className="skill">
            <h2 className="skill-name">React</h2>
            <div className="bar">
              <div className="progress50"></div>
            </div>
          </div>

          <div className="skill">
            <h2 className="skill-name">Mongoose</h2>
            <div className="bar">
              <div className="progress50"></div>
            </div>
          </div>

          <div className="skill">
            <h2 className="skill-name">MongoDb</h2>
            <div className="bar">
              <div className="progress20"></div>
            </div>
          </div>

          <div className="skill">
            <h2 className="skill-name">jQuery</h2>
            <div className="bar">
              <div className="progress80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsBlock;
