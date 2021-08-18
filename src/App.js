import Card from "./Components/Card/Card";
import Panel from "./Components/Panel/Panel";

function App() {
  return (
    <div className="App">
      <Panel title='To do'>
        <Card />
        <Card />
        <Card />
        <Card />
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
