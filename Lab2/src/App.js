import { Card } from "./components/Card";
import { Counter } from "./components/MyCounter";

function App() {

  const counters = [
    {key:1, id: 1, initial: 4, min: -4, max: 15},
    {key:2, id: 2, initial: -2},
    {key:3, id: 3}
  ]
  let result = counters.map((counter) => <Counter key={counter.id} min={counter.min} max={counter.max} initial={counter.initial}/>);
  result.push(<Card key={5}/>);
  return (result);
}

export default App;
