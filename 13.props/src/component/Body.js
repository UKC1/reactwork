import Button from "./Button";
/*  1.
const Body = (props) => {
  return (
    <div>
      <h3>본문입니다.</h3>
      <p>{props.user}님은 {props.addr}살고 있습니다.</p>
    </div>
  )
} 
*/

// 2
/*
const Body = ({name, addr, likeList}) => {
  return (
    <div>
      <h3>본문입니다.</h3>
      <p>{name}님은 {addr}살고 있습니다.</p>
      <p>내가 좋아하는 것들은 {likeList}의 {likeList.length}개를 좋아합니다.</p>
      <p>그중에서도 특히 {likeList[2]}을 좋아합니다.</p>
    </div>
  )
}
*/
/*
const Body = (props) => {  
  return (
    <div>
      <h3>본문입니다.</h3>
      <p>{props.userInfo.name}님은 {props.userInfo.addr}살고 있습니다.</p>
      <p>내가 좋아하는 것들은 {props.userInfo.likeList}의 {props.userInfo.likeList.length}개를 좋아합니다.</p>
      <p>그중에서도 특히 {props.userInfo.likeList[2]}을 좋아합니다.</p>
    </div>
  )
}

// 배열이 null일때 default로 쓸 값을 넣어 오류를 예방할 수 있다
Body.defaultProps = {
  likeList: []
};
*/

// 3.
const Body = () => {
  const btnProps = {
    text : "1번버튼",
    color : "yellow",
    a:1,
    b:2,
    c:3
  }

  function btnClick(e) {
    alert("버튼을 누르지마");
    console.log(e);
    console.log(e.target.name);
  }

  return (
    <div>
      <h3>본문입니다.</h3>
      <button onClick={btnClick} name="A버튼">A버튼이벤트</button><br/><br/>
      <button onClick={btnClick} name="B버튼">B버튼이벤트</button><br/><br/>
      {/* <button onClick={() => { alert("왜 불러") }}>B버튼이벤트</button><br/><br/> */}
      <Button {...btnProps} /><br/><br/>
      <Button />
    </div>
  )
} 

export default Body;