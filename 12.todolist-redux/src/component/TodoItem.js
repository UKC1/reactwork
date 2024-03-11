import './TodoItem.css';
import {onDelete, onUpdate} from "../store";
import {useDispatch} from "react-redux";

const TodoItem = ({id, isDone, content, date}) => {

    let dispatch = useDispatch();

  return(
    <div className='TodoItem'>
      <input type="checkbox" checked={isDone} onChange={()=>{dispatch(onUpdate(id))}}/>
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button onClick={()=>{dispatch(onDelete(id))}}>삭제</button>
    </div>
  )
}

export default TodoItem;