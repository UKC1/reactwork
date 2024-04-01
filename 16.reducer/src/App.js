import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Counter from "./component/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
