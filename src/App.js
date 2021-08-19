import Card from "./Components/Card/Card.js";
import Panel from "./Components/Panel/Panel";
import { useSelector } from "react-redux";

function App() {

  const tasks = useSelector(state => state.tasks)

  return (
    <div className="App">
      <Panel title='To do'>
        {tasks.todo.map((card, index) => {
          return <Card
            title={card.title}
            text={card.text}
            key={card + index}
          />
        })}

      </Panel>
      <Panel title='Doing'>

      </Panel>
      <Panel title='Done'>

      </Panel>
    </div>
  );
}

export default App;
