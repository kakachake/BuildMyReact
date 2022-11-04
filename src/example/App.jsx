import Karo from "../Karo";

function Counter() {
  const [state, setState] = Karo.useState(1);
  return (
    <div>
      <h1>Count: {state}</h1>
      <button onClick={() => setState((c) => c + 1)}>add</button>
      <button onClick={() => setState((c) => c - 1)}>cut</button>
    </div>
  );
}

export default function App(props) {
  const element = (
    <div id="foo">
      <h1>Hello World</h1>
      <b />
      <h2>哈哈哈哈哈哈</h2>
      <h1>Hi {props.name}</h1>
      <Counter />
    </div>
  );
  console.log(element);
  return element;
}
