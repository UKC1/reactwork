// src/app/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "Spring boot study",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "영화감상",
        date: new Date().getTime(),
    }
];

let nextId = 3;

// todosSlice 생성
const todosSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        onCreate: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(content) {
                return { payload: { id: nextId++, isDone: false, content, date: new Date().getTime() } };
            }
        },
        onUpdate: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isDone = !todo.isDone;
            }
        },
        onDelete: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
    },
});

export const { onCreate, onUpdate, onDelete } = todosSlice.actions;

// 스토어 생성
const store = configureStore({
    reducer: {
        todos: todosSlice.reducer,
    },
});

export default store;
