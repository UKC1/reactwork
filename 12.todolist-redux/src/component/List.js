import './List.css';
import TodoItem from "./TodoItem";
import { useState} from 'react';
import {useSelector} from "react-redux";


const List = () => {
  const [search, setSearch] = useState("")
    const todos = useSelector(state => state.todos)
  const getFilteredData = () => {
    if(search == "") {
      return todos;
    }
    return todos.filter((todo)=>{
      todo.content.includes(search) 

      // includs()함수 : todo.content과 search가 같으면 true 반환 다르면 false 반환
    })
  }

  const filteredTodos = getFilteredData();
  return (
    <div className="List">
      <h4>Todo List 💖</h4>
      <input placeholder="검색어를 입력하세요" onChange={(e)=>
        {setSearch(e.target.value)}}/>
      <div className='todos_wrapper'>
        {
          filteredTodos.map( todo =>
            <TodoItem {...todo} />
          )
        }
      
      </div>
    </div>
  )
}
export default List;