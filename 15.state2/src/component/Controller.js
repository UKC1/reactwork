import React, { useState } from 'react';

const Counter = (props) => {
    // 상태를 관리하기 위해 useState 훅 사용


    return (
        <>
            <button onClick={() =>
                props.onClickBtn(- 1)
            }>-1</button>
            <button onClick={() =>
                props.onClickBtn(- 10)
            }>-10</button>
            <button onClick={() =>
                props.onClickBtn(- 100)
            }>-100</button>
            <button onClick={() =>
                props.onClickBtn(100)
            }>+100</button>
            <button onClick={() =>
                props.onClickBtn(10)
            }>+10</button>
            <button onClick={() =>
                props.onClickBtn(1)
            }>+1</button>
        </>
    );
}

export default Counter;
