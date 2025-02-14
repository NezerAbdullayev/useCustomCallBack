import React from "react";
import { ChildA } from "./components/ChildA";
import Parent from "./components/Parent";
import { useCustomCallback } from "./coutomHooks";
import "./styles.css";

export default function Main() {
  const [state, setState] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const handleChangeMemozoidFn = useCustomCallback(
    (value) => setState((state) => [...state, value]),
    [state]
  );
  const handleChange = (value) => setState((state) => [...state, value]);
  return (
    <div className="App">
      <h1>{state.reduce((acc, item) => acc + item, 0)}</h1>
      const [count, setCount] = useState(0);
      <Parent funck={handleChange} count={count} setCount={setCount} />
      <ChildA />
    </div>
  );
}
