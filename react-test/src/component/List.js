import './List.css';
import TodoItem from "./TodoItem";
import { useState} from 'react';
import {useDispatch, useSelector} from "react-redux";


const List = () => {
  const [search, setSearch] = useState("");
  const todos = useSelector(state => state.todos);


  const getFilteredData = () => {
    if(search === "") {
      return todos;
    }
    return todos.filter((todo) => {
      // 대소문자 구분 없이 검색하기 위해 모두 소문자로 변환
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  }

  const filteredTodos = getFilteredData();
  return (
    <div className="List">
      <h4>Todo List </h4>
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