import "./App.scss";
import GreetingBlock from "./components/GreetingBlock/GreetingBlock";
import GitHubBlock from "./components/GitHubBlock/GitHubBlock";
import CV_Block from "./components/CV_Block/CV_Block";
import SkillsBlock from "./components/SkillsBlock/SkillsBlock";
function App() {
  return (
    <div className="App">
      <GreetingBlock />
      <GitHubBlock />
      <CV_Block />
      <SkillsBlock />
    </div>
  );
}

export default App;
