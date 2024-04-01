import './App.css';
import Controller from "./component/Controller";
import Views from "./component/Views";
import {useEffect, useState} from "react";

function App() {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const onClickBtn = (value) => {
        setCount(count + value);
    }

    // 변경된 값을 감지하여 내가 정의한 함수를 실행
    // lifecycle을 제어하는데 사용

    useEffect(() => {
        console.log("update : " + count + " , " + text);
    }, [count, text]);

    function onChangeInput(e) {
        console.log(e.target.value);
        setText(e.target.value);
    }
  return (
    <div className="App">
      <h1>Counter</h1>
        {count}
        <div>
            <input value={text} onChange={onChangeInput}/>
            <Views/>
            <Controller onClickBtn={onClickBtn}/>
        </div>
    </div>
  );
}

export default App;
