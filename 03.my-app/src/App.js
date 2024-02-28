import './App.css';

function App() {
  // 변수, 함수 정의해서 사용
  // 사용하고자 할때는 { } 안에 넣으면 됨
  const name = 'AddInEdu';
  let classname = '빅데이터';
  var value = '변수';
  // const f1 = function() {
    const funcName = () => {
      return "함수에서 문자 반환";
  }
  return (
    <div className="App">
      <h1>{name}에 오신것을 환영합니다.</h1>
      <h2>과정명 : {classname}</h2>

      <h3>중괄호{} 안에 넣을 수 있는 것들</h3>
      <ul>
        <li>{"문자"}와 {1+5}숫자 가능</li>
        <li>{funcName()} : 함수 가능</li>
        <li>변수에 들어있는 값 출력 가능</li>
      </ul>
      <h3>중괄호 안에 넣을 수 없는 것들</h3>
      <ul>
        <li>{true} 불리언 불가</li>
        <li>{[ ]} 배열도 불가</li>
      </ul>
    </div>
  );
}

export default App;
