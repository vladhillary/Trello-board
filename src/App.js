import Card from "./Components/Card/Card.js";
import Panel from "./Components/Panel/Panel";
import { useSelector } from "react-redux";

function App() {

  const tasks = useSelector(state => state.tasks)

  return (
    <div className="App">
      <Panel title='To do'>
        {tasks.todo.length > 0 ? tasks.todo.map((card, index) => {
          return <Card
            title={card.title}
            text={card.text}
            key={card + index}
          />
        }) : null}

      </Panel>
      <Panel title='Doing'>
        {tasks.doing.length > 0 ? tasks.doing.map((card, index) => {
          return <Card
            title={card.title}
            text={card.text}
            key={card + index}
          />
        }) : null}
      </Panel>
      <Panel title='Done'>
        {tasks.done.length > 0 ? tasks.done.map((card, index) => {
          return <Card
            title={card.title}
            text={card.text}
            key={card + index}
          />
        }) : null}
      </Panel>
    </div>
  );
}

export default App;
