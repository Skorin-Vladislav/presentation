import "./App.scss";
import GreetingBlock from "./components/GreetingBlock/GreetingBlock";
import GitHubBlock from "./components/GitHubBlock/GitHubBlock";
function App() {
  return (
    <div className="App">
      <GreetingBlock />
      <GitHubBlock />
    </div>
  );
}

export default App;
