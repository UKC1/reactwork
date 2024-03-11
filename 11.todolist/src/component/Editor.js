import { useState, useRef } from 'react';
import './Editor.css';

const Editor = ({onCreate}) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  return (
    <div className="Editor">
      <input ref={contentRef} onChange={(e)=>{setContent(e.target.value)}} placeholder="TodoList 추가" />
      <button onClick={()=>{ 
        if(content == "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content)
        setContent(' ')
        }}>추가</button>
    </div>
  )
}

export default Editor;