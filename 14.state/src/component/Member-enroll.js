import { useState } from "react";

// 이름, 생년월일, 사는곳, 소개

const Member_enroll = () => {
  const [input, setInput] = useState({
    name : "",
    location : "",
    mylife :""
  });

  const onChange = (e)=>{
    console.log(e.target.name + " : " + e.target.value)
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  return(
    <>
      <h1>회 원 가 입</h1>
      이름 : <input name="name" onChange={onChange}/><br/><br/>
      생년월일 : <input type="date" name="birth" /><br/><br/>
      <select name="location" onChange={onChange}>
        <option value="">선택</option>
        <option value="seoul">서울특별시</option>
        <option value="incheon">인천광역시</option>
        <option value="busan">부산광역시</option>
      </select><br/><br/>
      <textarea name="mylife" onChange={onChange}/>
    </>
  )
}

export default Member_enroll;