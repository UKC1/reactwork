import { useState, useRef } from 'react';
import './Editor.css';
import {useDispatch} from "react-redux";
import {onCreate} from "../store";

const Editor = () => {
    let dispatch = useDispatch();
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const idRef = useRef(3);

  return (
    <div className="Editor">
      <input ref={contentRef} onChange={(e)=>{setContent(e.target.value)}} placeholder="TodoList 추가" />
      <button onClick={()=>{ 
        if(content == "") {
            contentRef.current.focus();
            return;
        }
        dispatch(onCreate({content, id:idRef.current++}))
        setContent(" ")
        }}>추가</button>
    </div>
  )
}

export default Editor;