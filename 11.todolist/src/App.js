import './App.css';
import Header from './component/Header';
import Editor from './component/Editor';
import List from './component/List';
import { useState, useRef } from 'react';

const tmpData = [
  {
    id:0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id:1,
    isDone: false,
    content: "꿀맛같은 휴식",
    date: new Date().getTime(),
  },
  {
    id:2,
    isDone: false,
    content: "친구화의 수다",
    date: new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos] = useState(tmpData)
  const idRef = useRef(3)

  const onCreate = (content) => {
    const newItem = {
      id:idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }
    setTodos([newItem, ...todos])
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter(todo => todo.id !== targetId));
  };

  const onUpdate = targetId => {
    setTodos(todos.map(todo => {
      if(todo.id == targetId) {
        return {
          ...todo, 
          isDone: !todo.isDone
        }
      }
      return todo
    }))
    setTodos(todos.map(todo => todo.id == targetId ? {...todo, isDone: !todo.isDone} : todo))

  }
  
  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} onUpdate={onUpdate}/>   
    </div>
  );
}

export default App;