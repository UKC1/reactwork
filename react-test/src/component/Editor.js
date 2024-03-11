import { useState, useRef } from 'react';
import './Editor.css';
import {useDispatch} from "react-redux";
import {onCreate} from "../app/store";
const Editor = () => {
    const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const contentRef = useRef();

  return (
    <div className="Editor">
      <input ref={contentRef} value={content} onChange={(e)=>{setContent(e.target.value)}} placeholder="TodoList 추가" />
      <button onClick={()=>{ 
        if(content == "") {
            contentRef.current.focus();
            return;
        }
        dispatch(onCreate(content))
        setContent("")
        }}>추가</button>
    </div>
  )
}

export default Editor;