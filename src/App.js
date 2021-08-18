import Card from "./Components/Card/Card.js";
import Panel from "./Components/Panel/Panel.js";

function App() {
  return (
    <div className="App">
      <Panel title='To do'>
        <Card />
        <Card />
      </Panel>
      <Panel title='Doing'>

      </Panel>
      <Panel title='Done'>

      </Panel>
    </div>
  );
}

export default App;
