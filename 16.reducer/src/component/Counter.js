import {useReducer, useState} from "react";

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);
    function reducer(state, action) {
        switch (action.type) {
            case "INCREASE" :
                return state + action.data;
            case "DECREASE" :
                return state + action.data;
        }

    }
    // const [count, setCount] = useState(0);
    const onInc = () => {
        dispatch({type:"INCREASE", data:1})
    }
    const onDec = () => {
        dispatch({type:"DECREASE", data:-1})
    }
    return (
    <div>
        <h1>Counter</h1>
        <div>
            <h4>{count}</h4>
        </div>
        <div>
            <button onClick={(onInc)}>+</button>
            <button onClick={(onDec)}>+</button>
        </div>
    </div>
    );
}

export default Counter;